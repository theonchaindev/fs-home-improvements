"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, Shield, Award, Clock, Wrench, ChevronRight, Play } from "lucide-react";
import VideoReel from "@/components/VideoReel";
import GoogleReviews from "@/components/GoogleReviews";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function useInView(threshold = 0.2) {
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
  { title: "Windows", description: "uPVC, aluminium and timber windows. Energy-efficient, secure and beautifully crafted to enhance any property.", href: "/services/windows", image: "/images/windows/white-casement-red-brick.jpg" },
  { title: "Doors", description: "Composite, French and patio doors that combine stunning aesthetics with maximum security and insulation.", href: "/services/doors", image: "/images/doors/anthracite-composite.jpg" },
  { title: "Conservatories", description: "Custom conservatories and orangeries that seamlessly extend your living space with light and style.", href: "/services/conservatories", image: "/images/conservatory-job.jpg" },
  { title: "Bi-Fold Doors", description: "Effortlessly connect your indoor and outdoor spaces with sleek, space-saving bi-fold door systems.", href: "/services/bifold-doors", image: "/images/bifold/anthracite-brick-topiary.jpg" },
  { title: "Roofline", description: "High-performance fascias, soffits and guttering that protect your home and elevate its appearance.", href: "/services/roofline", image: "/images/projects/kethis-bungalow-angle.jpg" },
];

const stats = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: " yr", label: "Guarantee" },
];


const reasons = [
  { icon: <Shield size={22} />, title: "10-Year Guarantee", desc: "Every installation backed by our comprehensive decade-long guarantee." },
  { icon: <Award size={22} />, title: "Expert Installers", desc: "Our skilled team brings years of experience to every single project." },
  { icon: <Clock size={22} />, title: "On Time, Every Time", desc: "We respect your time — projects delivered on schedule, always." },
  { icon: <Wrench size={22} />, title: "Premium Products", desc: "We only use the highest-grade materials from trusted manufacturers." },
];

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, inView } = useInView();
  const count = useCountUp(value, 1800, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white mb-1">{count}{suffix}</div>
      <div className="text-white/50 text-sm font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-[#85152C]/30 hover:shadow-xl transition-all duration-500 relative"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.3s, border-color 0.3s` }}
    >
      <div className="relative h-48 overflow-hidden bg-[#0A0A0A]">
        {service.image ? (
          <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 font-black text-6xl uppercase">{service.title[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#85152C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
        <Link href={service.href} className="inline-flex items-center gap-2 text-[#85152C] text-sm font-semibold group-hover:gap-3 transition-all">
          Learn More <ChevronRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);

  const featuresRef = useInView();
  const servicesRef = useInView(0.05);

  return (
    <>
      {/* HERO — full-screen video reel */}
      <section className="relative min-h-screen bg-[#0A0A0A] flex items-end overflow-hidden">
        <VideoReel />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-40">
          <div className="max-w-3xl">
            {/* Live badge */}
            <div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}
            >
              <Play size={11} className="text-[#85152C] fill-[#85152C]" />
              <span className="text-white text-xs font-semibold uppercase tracking-wider">Watch Our Work</span>
            </div>

            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}
            >
              Transform<br /><span className="text-[#85152C]">Your Home.</span>
            </h1>

            <p
              className="mt-7 text-xl text-white/70 leading-relaxed max-w-xl"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.25s" }}
            >
              Expert installation of windows, doors, conservatories and more. Trusted by homeowners across the region.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.35s" }}
            >
              <Link href="/contact" className="group flex items-center gap-3 bg-[#85152C] hover:bg-[#6a1023] text-white font-bold px-8 py-4 rounded text-lg transition-all duration-300">
                Get Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/projects" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded text-lg transition-all duration-300">
                View Projects
              </Link>
            </div>

            {/* Stats strip */}
            <div
              className="mt-12 flex flex-wrap items-center gap-8"
              style={{ opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 0.5s" }}
            >
              {[{ value: "6+", label: "Experience" }, { value: "10 yr", label: "Guarantee" }].map((s, i) => (
                <div key={s.label} className={`text-center ${i < 1 ? "pr-8 border-r border-white/20" : ""}`}>
                  <div className="text-white font-black text-2xl">{s.value}</div>
                  <div className="text-white/50 text-xs mt-0.5 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phone CTA floating bottom-right */}
        <a
          href="tel:+447412027802"
          className="absolute bottom-8 right-8 z-20 hidden lg:flex items-center gap-3 bg-white text-[#0A0A0A] font-bold px-5 py-3 rounded-full shadow-2xl hover:bg-gray-100 transition-all text-sm"
          style={{ opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 0.6s" }}
        >
          <Phone size={15} className="text-[#85152C]" />
          07412 027802
        </a>
      </section>

      {/* CHECKATRADE BANNER */}
      <div className="bg-[#0A0A0A] border-y border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="bg-white rounded-xl px-5 py-3 shrink-0">
            <Image src="/checkatrade-logo.png" alt="Checkatrade Approved" width={160} height={60} className="h-10 w-auto object-contain" />
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <p className="text-white/70 text-sm text-center sm:text-left max-w-sm">
            We are a <span className="font-bold text-white">Checkatrade Approved Installer</span> — vetted, checked and trusted. Search FS Home Improvements on Checkatrade to read verified customer reviews.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div ref={featuresRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: featuresRef.inView ? 1 : 0, transform: featuresRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">The FS Difference</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We don&apos;t just install — we transform. Every project is handled with the care and precision it deserves.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-[#0A0A0A] hover:text-white group transition-all duration-500 cursor-default"
                style={{ opacity: featuresRef.inView ? 1 : 0, transform: featuresRef.inView ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, background 0.4s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#85152C]/10 group-hover:bg-[#85152C] rounded-xl mb-5 text-[#85152C] group-hover:text-white transition-all duration-300">
                  {r.icon}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{r.title}</h3>
                <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* AREAS */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">Service Area</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Areas we cover</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Cambridgeshire", "Bedfordshire", "Northamptonshire"].map((area) => (
              <div key={area} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#85152C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-white font-semibold text-sm">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-sm mt-6">Not sure if we cover your area? <a href="/contact" className="text-[#85152C] hover:underline">Get in touch</a> and we&apos;ll let you know.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div ref={servicesRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: servicesRef.inView ? 1 : 0, transform: servicesRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From a single window to a full home transformation, we&apos;ve got you covered.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
            <div className="bg-[#85152C] rounded-xl p-7 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Free Consultation</div>
                <h3 className="text-2xl font-black text-white leading-tight mb-3">Not sure what you need?</h3>
                <p className="text-white/70 text-sm leading-relaxed">Talk to our experts. We&apos;ll help you find the perfect solution for your home and budget.</p>
              </div>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-white text-[#85152C] font-bold px-6 py-3 rounded text-sm hover:bg-gray-100 transition-colors w-fit">
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 max-w-sm mx-auto">
            {stats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#85152C]/5 via-transparent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#85152C]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-4">Ready to Start?</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Your dream home<br /><span className="text-[#85152C]">starts with one call.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote from our expert team. We&apos;ll come to you, assess your needs and provide a transparent, competitive price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group flex items-center justify-center gap-3 bg-[#85152C] hover:bg-[#6a1023] text-white font-bold px-10 py-5 rounded text-lg transition-all duration-300">
              Get Your Free Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+447412027802" className="flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 text-white font-semibold px-10 py-5 rounded text-lg transition-all duration-300">
              <Phone size={18} /> 07412 027802
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
