'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [reactions, setReactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReactions();
  }, []);

  const fetchReactions = async () => {
    try {
      const response = await fetch('/api/reactions');
      const data = await response.json();

      if (data.success) {
        setReactions(data.reactions);
      } else {
        setError('Failed to load reactions');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-zinc-900">
              RCDC
            </Link>
            <span className="rounded bg-zinc-100 px-2 py-1 text-sm text-zinc-600">
              Dashboard
            </span>
          </div>
          <Link
            href="/"
            className="text-sm text-zinc-600 hover:text-zinc-900"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">Reactions</h1>
            <p className="mt-1 text-zinc-600">
              View submitted reaction videos and coupon codes
            </p>
          </div>
          <button
            onClick={fetchReactions}
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Refresh
          </button>
        </div>

        {/* Info banner */}
        <div className="mb-8 rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-sm text-amber-800">
            <strong>MVP Note:</strong> Reactions are stored in memory and will reset when the server restarts.
            Video content is not persisted in this demo version.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="rounded-xl bg-white p-12 text-center shadow-sm">
            <p className="text-zinc-500">Loading reactions...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="rounded-xl bg-red-50 p-12 text-center">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchReactions}
              className="mt-4 text-sm text-red-700 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && reactions.length === 0 && (
          <div className="rounded-xl bg-white p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100">
              <svg
                className="h-8 w-8 text-zinc-400"
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
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">No reactions yet</h3>
            <p className="mt-2 text-zinc-600">
              Reactions will appear here when customers submit them.
            </p>
            <Link
              href="/demo/sunset-motors"
              className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
            >
              Try a Demo
            </Link>
          </div>
        )}

        {/* Reactions list */}
        {!loading && !error && reactions.length > 0 && (
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <table className="w-full">
              <thead className="border-b border-zinc-200 bg-zinc-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">
                    Brand
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">
                    Coupon Code
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {reactions.map((reaction) => (
                  <tr key={reaction.id} className="hover:bg-zinc-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-zinc-900">{reaction.brandName}</p>
                        <p className="text-sm text-zinc-500">{reaction.brand}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="rounded bg-zinc-100 px-2 py-1 text-sm font-mono text-zinc-800">
                        {reaction.couponCode}
                      </code>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600">
                      {formatDate(reaction.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        Received
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Stats summary */}
        {!loading && !error && reactions.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-zinc-500">Total Reactions</p>
              <p className="mt-1 text-3xl font-bold text-zinc-900">{reactions.length}</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-zinc-500">Coupons Generated</p>
              <p className="mt-1 text-3xl font-bold text-zinc-900">{reactions.length}</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-zinc-500">Brands Active</p>
              <p className="mt-1 text-3xl font-bold text-zinc-900">
                {new Set(reactions.map((r) => r.brand)).size}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
