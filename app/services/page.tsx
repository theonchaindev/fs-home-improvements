"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

function useInView(threshold = 0.1) {
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

const services = [
  {
    title: "Windows",
    href: "/services/windows",
    image: "/images/windows/white-casement-red-brick.jpg",
    description: "From classic casement to contemporary aluminium, our window range covers every style and budget. All frames are energy-rated and fully guaranteed.",
    features: ["uPVC, Aluminium & Timber", "A-Rated Energy Efficiency", "Multiple Styles & Colours", "10-Year Guarantee"],
  },
  {
    title: "Doors",
    href: "/services/doors",
    image: "/images/doors/anthracite-composite.jpg",
    description: "Make a statement with a beautiful new front or back door. We supply and install composite, French, patio and stable doors with premium security locks.",
    features: ["Composite & uPVC Doors", "French & Patio Doors", "Multi-Point Locking", "Custom Colours & Glazing"],
  },
  {
    title: "Conservatories & Orangeries",
    href: "/services/conservatories",
    image: "/images/projects/detached-oak-porch.jpg",
    description: "Transform your home with a stunning conservatory or orangery extension. Bespoke designs to complement your property — all built and installed by our team.",
    features: ["Victorian & Edwardian Styles", "Solid Roof Options", "Orangery Extensions", "Full Planning Guidance"],
  },
  {
    title: "Bi-Fold Doors",
    href: "/services/bifold-doors",
    image: "/images/bifold/anthracite-brick-topiary.jpg",
    description: "Open up your home to the outside world with elegant, slimline bi-fold doors. Perfect for connecting living areas to gardens and patios.",
    features: ["Slim Aluminium Frames", "2–7 Panel Configurations", "Flush Floor Track Options", "Double or Triple Glazed"],
  },
  {
    title: "Roofline",
    href: "/services/roofline",
    image: "/images/projects/kethis-bungalow-angle.jpg",
    description: "Protect and beautify your home with high-performance fascias, soffits and guttering. Low-maintenance, durable products that will last for decades.",
    features: ["Fascias & Soffits", "Guttering & Downpipes", "Bargeboards", "Full Roofline Replacement"],
  },
];

export default function ServicesPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);
  const listRef = useInView(0.05);

  return (
    <>
      <section className="relative bg-[#0A0A0A] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#85152C]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-4">What We Offer</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Everything you need to transform your home — installed by experts, backed by our 10-year guarantee.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div ref={listRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group grid md:grid-cols-4 gap-0 items-stretch bg-white border border-gray-100 hover:border-[#85152C]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-xl"
              style={{ opacity: listRef.inView ? 1 : 0, transform: listRef.inView ? "translateX(0)" : "translateX(-30px)", transition: `all 0.6s ease ${i * 0.1}s` }}
            >
              <div className="relative h-56 md:h-auto md:col-span-1">
                <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-black text-gray-900 mb-3">{s.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-5">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span key={f} className="text-xs bg-[#85152C]/8 text-[#85152C] font-semibold px-3 py-1 rounded-full border border-[#85152C]/15">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-1 flex flex-col gap-3 justify-center p-6 bg-gray-50 group-hover:bg-gray-100/50 transition-colors">
                <Link href={s.href} className="flex items-center justify-center gap-2 bg-[#85152C] hover:bg-[#6a1023] text-white font-bold px-6 py-4 rounded transition-colors">
                  Learn More <ChevronRight size={16} />
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-2 border border-gray-200 hover:border-[#85152C] text-gray-700 hover:text-[#85152C] font-semibold px-6 py-4 rounded transition-all text-sm">
                  Get a Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#85152C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Not sure which service you need?</h2>
          <p className="text-white/80 text-lg mb-8">Our team will visit your home, assess your needs and provide honest, expert advice — completely free of charge.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-[#85152C] font-bold px-10 py-5 rounded hover:bg-gray-100 transition-colors text-lg">
            Book Free Survey <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
