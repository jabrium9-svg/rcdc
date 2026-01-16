'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBrand } from '@/lib/brands';
import VideoRecorder from '@/components/VideoRecorder';
import CouponModal from '@/components/CouponModal';

export default function DemoPage({ params }) {
  const { brand: brandSlug } = use(params);
  const brand = getBrand(brandSlug);
  const [couponCode, setCouponCode] = useState(null);

  if (!brand) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6">
        <h1 className="text-2xl font-bold text-zinc-900">Brand Not Found</h1>
        <p className="mt-2 text-zinc-600">The demo brand you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-6 rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const handleSuccess = (code) => {
    setCouponCode(code);
  };

  const handleCloseModal = () => {
    setCouponCode(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.theme.background }}>
      {/* Header */}
      <header className="border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
            &larr; Back to RCDC
          </Link>
          <div className="text-sm font-medium" style={{ color: brand.theme.primary }}>
            Demo Mode
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Brand header */}
        <div className="text-center">
          <h1
            className="text-4xl font-bold"
            style={{ color: brand.theme.primary }}
          >
            {brand.name}
          </h1>
          <p className="mt-2 text-lg text-zinc-600">{brand.tagline}</p>
        </div>

        {/* Content card */}
        <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">
          {/* Placeholder content area */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900">
              {brand.contentTitle}
            </h2>
            <p className="mt-2 text-zinc-600">{brand.contentDescription}</p>

            {/* Placeholder video/image area */}
            <div className="mt-6 overflow-hidden rounded-xl">
              <Image
                src="/placeholder-video.svg"
                alt="Brand video content placeholder"
                width={1280}
                height={720}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-200 pt-8">
            <h3 className="text-center text-xl font-semibold text-zinc-900">
              Share Your Reaction
            </h3>
            <p className="mt-2 text-center text-zinc-600">
              Record a short video telling us what you think — and get an exclusive reward!
            </p>

            {/* Video recorder */}
            <div className="mt-8">
              <VideoRecorder
                brandSlug={brand.slug}
                brandTheme={brand.theme}
                onSuccess={handleSuccess}
              />
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-sm text-zinc-500">
          This is a demo experience. In production, brands customize their content and offers.
        </p>
      </main>

      {/* Coupon modal */}
      {couponCode && (
        <CouponModal
          couponCode={couponCode}
          brandName={brand.name}
          brandTheme={brand.theme}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
