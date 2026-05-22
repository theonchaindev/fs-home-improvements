"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Users, Star, Trophy, Heart } from "lucide-react";

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

const values = [
  { icon: <Trophy size={20} />, title: "Quality First", desc: "We never cut corners. Every job is done to the highest possible standard, using premium products and materials." },
  { icon: <Heart size={20} />, title: "Customer Care", desc: "You're not just a job number — we build lasting relationships with every homeowner we work with." },
  { icon: <Users size={20} />, title: "Local Expertise", desc: "Proudly serving our local community. We know the area, we know the homes, and we care about the neighbourhood." },
  { icon: <Star size={20} />, title: "Proven Results", desc: "Hundreds of completed projects and a long list of happy customers. Our work speaks for itself." },
];


export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);
  const storyRef = useInView();
  const valuesRef = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A0A0A] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#85152C]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-3xl"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}
          >
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Built on trust.<br /><span className="text-[#85152C]">Driven by quality.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              FS Home Improvements has been transforming homes across the region. We combine expert craftsmanship with premium products to deliver results that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div ref={storyRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div style={{ opacity: storyRef.inView ? 1 : 0, transform: storyRef.inView ? "translateX(0)" : "translateX(-30px)", transition: "all 0.7s ease" }}>
              <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Our Story</p>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Built on reputation</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FS Home Improvements has grown into one of the region&apos;s most trusted home improvement specialists, built on an unwavering commitment to quality.
                </p>
                <p>
                  Every member of our team shares the same values: do the job right, treat every customer with respect, and never leave a site until the homeowner is completely satisfied.
                </p>
                <p>
                  We operate with a personal touch that defines who we are. You&apos;ll always speak to a real person, get a straight answer, and receive a fair price.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[{ value: "6+", label: "Years Experience" }, { value: "10yr", label: "Guarantee" }].map((s) => (
                  <div key={s.label} className="border-l-2 border-[#85152C] pl-4">
                    <div className="text-2xl font-black text-gray-900">{s.value}</div>
                    <div className="text-gray-400 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ opacity: storyRef.inView ? 1 : 0, transform: storyRef.inView ? "translateX(0)" : "translateX(30px)", transition: "all 0.7s ease 0.2s" }}>
              <div className="bg-[#0A0A0A] rounded-2xl p-8 relative">
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#85152C] to-transparent" />
                <div className="space-y-4">
                  {[
                    "Which? Trusted Trader",
                    "10-Year Insurance-Backed Guarantee",
                    "Fully Insured & Accredited",
                    "Trading Standards Approved",
                    "Free Home Survey & No-Pressure Quote",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={17} className="text-[#85152C] shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div ref={valuesRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: valuesRef.inView ? 1 : 0, transform: valuesRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Our Values</p>
            <h2 className="text-4xl font-black text-gray-900">What drives us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#85152C]/30 hover:shadow-lg transition-all duration-400 group"
                style={{ opacity: valuesRef.inView ? 1 : 0, transform: valuesRef.inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#85152C]/10 group-hover:bg-[#85152C] rounded-xl flex items-center justify-center text-[#85152C] group-hover:text-white transition-all duration-300 mb-5">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#85152C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to work with us?</h2>
          <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote and see why homeowners across the region trust FS Home Improvements.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-[#85152C] font-bold px-10 py-5 rounded hover:bg-gray-100 transition-colors text-lg">
            Get Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
