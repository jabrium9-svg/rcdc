'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export default function VideoRecorder({ brandSlug, brandTheme, onSuccess }) {
  const [status, setStatus] = useState('idle'); // idle, requesting, ready, countdown, recording, preview, submitting
  const [countdown, setCountdown] = useState(3);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [recordedUrl, setRecordedUrl] = useState(null);
  const [error, setError] = useState(null);

  const videoRef = useRef(null);
  const previewRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, []);

  const startCamera = async () => {
    setStatus('requesting');
    setError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: true,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setStatus('ready');
    } catch (err) {
      setError('Camera access denied. Please allow camera and microphone permissions.');
      setStatus('idle');
    }
  };

  const startCountdown = () => {
    setStatus('countdown');
    setCountdown(3);
  };

  useEffect(() => {
    if (status === 'countdown' && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (status === 'countdown' && countdown === 0) {
      startRecording();
    }
  }, [status, countdown]);

  const startRecording = () => {
    chunksRef.current = [];

    const options = { mimeType: 'video/webm;codecs=vp9,opus' };
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      options.mimeType = 'video/webm';
    }

    try {
      const mediaRecorder = new MediaRecorder(streamRef.current, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setRecordedBlob(blob);
        setRecordedUrl(url);
        setStatus('preview');
        stopStream();
      };

      mediaRecorder.start();
      setStatus('recording');
    } catch (err) {
      setError('Failed to start recording. Please try again.');
      setStatus('ready');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
  };

  const handleReRecord = () => {
    if (recordedUrl) {
      URL.revokeObjectURL(recordedUrl);
    }
    setRecordedBlob(null);
    setRecordedUrl(null);
    setStatus('idle');
  };

  const handleSubmit = async () => {
    setStatus('submitting');

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Video = reader.result;

        const response = await fetch('/api/reactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            brand: brandSlug,
            timestamp: new Date().toISOString(),
            video: base64Video,
          }),
        });

        const data = await response.json();

        if (data.success) {
          onSuccess(data.couponCode);
        } else {
          setError('Failed to submit reaction. Please try again.');
          setStatus('preview');
        }
      };

      reader.readAsDataURL(recordedBlob);
    } catch (err) {
      setError('Failed to submit reaction. Please try again.');
      setStatus('preview');
    }
  };

  useEffect(() => {
    return () => {
      stopStream();
      if (recordedUrl) {
        URL.revokeObjectURL(recordedUrl);
      }
    };
  }, [stopStream, recordedUrl]);

  const primaryColor = brandTheme?.primary || '#f97316';

  return (
    <div className="w-full">
      {error && (
        <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-600">{error}</div>
      )}

      {/* Video display area */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900">
        {(status === 'idle' || status === 'requesting') && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-zinc-400">
              <svg
                className="mx-auto h-16 w-16 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <p>Camera preview will appear here</p>
            </div>
          </div>
        )}

        {(status === 'ready' || status === 'countdown' || status === 'recording') && (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        )}

        {status === 'preview' && recordedUrl && (
          <video
            ref={previewRef}
            src={recordedUrl}
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        )}

        {/* Countdown overlay */}
        {status === 'countdown' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-8xl font-bold text-white">{countdown}</div>
          </div>
        )}

        {/* Recording indicator */}
        {status === 'recording' && (
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-sm font-medium text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
            Recording
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center gap-4">
        {status === 'idle' && (
          <button
            onClick={startCamera}
            className="rounded-full px-6 py-3 text-lg font-medium text-white"
            style={{ backgroundColor: primaryColor }}
          >
            Record Your Reaction
          </button>
        )}

        {status === 'requesting' && (
          <button disabled className="rounded-full bg-zinc-300 px-6 py-3 text-lg font-medium text-zinc-500">
            Requesting Camera...
          </button>
        )}

        {status === 'ready' && (
          <button
            onClick={startCountdown}
            className="rounded-full px-6 py-3 text-lg font-medium text-white"
            style={{ backgroundColor: primaryColor }}
          >
            Start Recording
          </button>
        )}

        {status === 'countdown' && (
          <button disabled className="rounded-full bg-zinc-300 px-6 py-3 text-lg font-medium text-zinc-500">
            Get Ready...
          </button>
        )}

        {status === 'recording' && (
          <button
            onClick={stopRecording}
            className="rounded-full bg-red-600 px-6 py-3 text-lg font-medium text-white hover:bg-red-700"
          >
            Stop Recording
          </button>
        )}

        {status === 'preview' && (
          <>
            <button
              onClick={handleReRecord}
              className="rounded-full border border-zinc-300 px-6 py-3 text-lg font-medium text-zinc-700 hover:border-zinc-400"
            >
              Re-record
            </button>
            <button
              onClick={handleSubmit}
              className="rounded-full px-6 py-3 text-lg font-medium text-white"
              style={{ backgroundColor: primaryColor }}
            >
              Confirm & Submit
            </button>
          </>
        )}

        {status === 'submitting' && (
          <button disabled className="rounded-full bg-zinc-300 px-6 py-3 text-lg font-medium text-zinc-500">
            Submitting...
          </button>
        )}
      </div>
    </div>
  );
}
