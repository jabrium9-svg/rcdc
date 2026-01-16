'use client';

import { useState } from 'react';

export default function CouponModal({ couponCode, brandName, brandTheme, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = couponCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const primaryColor = brandTheme?.primary || '#f97316';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Success icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Message */}
        <h2 className="mt-6 text-center text-2xl font-bold text-zinc-900">
          Thank You!
        </h2>
        <p className="mt-2 text-center text-zinc-600">
          Your reaction has been submitted to {brandName}. Here&apos;s your exclusive reward:
        </p>

        {/* Coupon code */}
        <div className="mt-6 rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 p-4 text-center">
          <p className="text-sm font-medium text-zinc-500">Your Coupon Code</p>
          <p className="mt-1 text-2xl font-bold tracking-wider text-zinc-900">
            {couponCode}
          </p>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="mt-4 w-full rounded-lg border border-zinc-300 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
        >
          {copied ? 'Copied!' : 'Copy Code'}
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg py-3 text-lg font-medium text-white"
          style={{ backgroundColor: primaryColor }}
        >
          Done
        </button>

        <p className="mt-4 text-center text-xs text-zinc-500">
          Present this code at checkout or mention it when you visit.
        </p>
      </div>
    </div>
  );
}
