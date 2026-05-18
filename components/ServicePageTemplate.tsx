"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import LeadForm from "./LeadForm";

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

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  options: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  heroImage?: string;
  galleryImages?: string[];
}

export default function ServicePageTemplate({ title, subtitle, description, icon, features, benefits, options, faqs, heroImage, galleryImages }: ServicePageProps) {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);
  const contentRef = useInView(0.05);
  const optionsRef = useInView();
  const faqRef = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A0A0A] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#85152C]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}>
              <nav className="flex items-center gap-2 text-sm mb-6">
                <Link href="/services" className="text-white/40 hover:text-white transition-colors">Services</Link>
                <span className="text-white/20">/</span>
                <span className="text-[#85152C]">{title}</span>
              </nav>
              <div className="text-5xl mb-5">{icon}</div>
              <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">{subtitle}</p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">{title}</h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{description}</p>
              <div className="space-y-2.5">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#85152C] shrink-0" />
                    <span className="text-white/70 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <a href="tel:+447412027802" className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white text-sm font-semibold px-5 py-3 rounded transition-all">
                  <Phone size={15} /> Call Us
                </a>
                <Link href="/projects" className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white text-sm font-semibold px-5 py-3 rounded transition-all">
                  View Projects <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 0.3s" }}>
              <LeadForm service={title} title={`Get a Free ${title} Quote`} subtitle="No obligation. We'll respond within 24 hours." dark={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div ref={contentRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: contentRef.inView ? 1 : 0, transform: contentRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Why Choose Our {title}</p>
            <h2 className="text-4xl font-black text-gray-900">The benefits</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-[#85152C]/20 hover:shadow-lg transition-all duration-400 group"
                style={{ opacity: contentRef.inView ? 1 : 0, transform: contentRef.inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-[#85152C] rounded-lg flex items-center justify-center text-white font-black text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {heroImage && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Real Work</p>
              <h2 className="text-3xl font-black text-gray-900">Our {title} Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 relative h-80 md:h-[420px] rounded-2xl overflow-hidden">
                <Image src={heroImage} alt={`${title} installation`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#85152C] text-white text-xs font-bold px-3 py-1.5 rounded-full">Featured Project</div>
              </div>
              <div className="flex flex-col gap-4">
                {(galleryImages ?? []).slice(0, 2).map((img, i) => (
                  <div key={i} className="relative flex-1 rounded-2xl overflow-hidden min-h-[120px]">
                    <Image src={img} alt={`${title} project ${i + 2}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                ))}
              </div>
            </div>
            {(galleryImages ?? []).length > 2 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {(galleryImages ?? []).slice(2).map((img, i) => (
                  <div key={i} className="relative h-40 rounded-xl overflow-hidden">
                    <Image src={img} alt={`${title} project ${i + 4}`} fill className="object-cover" sizes="25vw" />
                  </div>
                ))}
              </div>
            )}
            <div className="mt-8 text-center">
              <Link href="/projects" className="inline-flex items-center gap-2 text-[#85152C] font-semibold hover:underline">
                View all projects <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Options */}
      <section className="py-24 bg-[#0A0A0A]">
        <div ref={optionsRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: optionsRef.inView ? 1 : 0, transform: optionsRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Our Range</p>
            <h2 className="text-4xl font-black text-white">Available Options</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {options.map((o, i) => (
              <div
                key={o.title}
                className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 hover:border-[#85152C]/30 transition-all duration-300"
                style={{ opacity: optionsRef.inView ? 1 : 0, transform: optionsRef.inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.08}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-[#85152C] rounded-full" />
                  <h3 className="text-white font-bold text-sm">{o.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div ref={faqRef.ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: faqRef.inView ? 1 : 0, transform: faqRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="text-4xl font-black text-gray-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="border border-gray-100 rounded-xl p-7 hover:border-[#85152C]/20 transition-colors"
                style={{ opacity: faqRef.inView ? 1 : 0, transform: faqRef.inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${i * 0.1}s` }}
              >
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-[#85152C] font-black text-lg leading-none mt-0.5">Q</span>
                  {f.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#85152C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready for your new {title.toLowerCase()}?</h2>
          <p className="text-white/80 text-lg mb-8">Get a free, no-obligation quote today. Our expert team will visit your home and provide a transparent, competitive price.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-[#85152C] font-bold px-10 py-5 rounded hover:bg-gray-100 transition-colors text-lg">
              Get Free Quote <ArrowRight size={20} />
            </Link>
            <a href="tel:+447412027802" className="inline-flex items-center justify-center gap-3 border-2 border-white text-white font-bold px-10 py-5 rounded hover:bg-white/10 transition-colors text-lg">
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
