"use client";

import { useRef, useState, useEffect } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const reviews = [
  {
    name: "James R.",
    initials: "JR",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent service from start to finish. The team were professional, tidy and completed the work ahead of schedule. The new windows have transformed the look of our house. Couldn't recommend more highly.",
  },
  {
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    date: "1 month ago",
    text: "FS Home Improvements fitted our composite front door and we are absolutely delighted. Great price, brilliant quality and the fitters were friendly and respectful of our home. Will definitely use again.",
  },
  {
    name: "David T.",
    initials: "DT",
    rating: 5,
    date: "6 weeks ago",
    text: "Had bi-fold doors installed across the back of our extension. The quality of the product and the installation is outstanding. The whole process was smooth and stress-free. Highly recommend.",
  },
  {
    name: "Linda B.",
    initials: "LB",
    rating: 5,
    date: "2 months ago",
    text: "We had all our windows replaced and couldn't be happier. FS were professional from start to finish — arrived on time, worked cleanly and the result is fantastic. Great value too.",
  },
];

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24" fill={s <= rating ? "#FBBC04" : "#E0E0E0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}
        >
          <div>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Customer Reviews</p>
            <h2 className="text-4xl font-black text-gray-900">What our customers say</h2>
          </div>

          {/* Google rating badge */}
          <a
            href="https://share.google/hviqH5531UG52JzkH"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-gray-900 leading-none">5.0</span>
                <StarRating rating={5} size={14} />
              </div>
              <div className="text-gray-400 text-xs mt-0.5">Google Reviews</div>
            </div>
          </a>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.1}s` }}
            >
              {/* Reviewer */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#85152C] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm leading-tight">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.date}</div>
                </div>
                {/* Google G icon */}
                <svg className="ml-auto shrink-0" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <StarRating rating={r.rating} size={15} />

              <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-5">{r.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-10 text-center"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease 0.5s" }}
        >
          <a
            href="https://share.google/hviqH5531UG52JzkH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#85152C] text-sm font-semibold transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read all our reviews on Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
