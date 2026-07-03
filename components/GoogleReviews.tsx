"use client";

import Script from "next/script";

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Customer Reviews</p>
          <h2 className="text-4xl font-black text-gray-900">What our customers say</h2>
        </div>
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-9d39d2d9-2b1b-417e-b188-e6bea90d4182" data-elfsight-app-lazy />
      </div>
    </section>
  );
}
