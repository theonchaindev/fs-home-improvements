"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Star, Phone, Shield, Award, Clock, Wrench, ChevronRight } from "lucide-react";

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
  { title: "Windows", description: "uPVC, aluminium and timber windows. Energy-efficient, secure and beautifully crafted to enhance any property.", href: "/services/windows", icon: "🪟" },
  { title: "Doors", description: "Composite, French and patio doors that combine stunning aesthetics with maximum security and insulation.", href: "/services/doors", icon: "🚪" },
  { title: "Conservatories", description: "Custom conservatories and orangeries that seamlessly extend your living space with light and style.", href: "/services/conservatories", icon: "🏡" },
  { title: "Bi-Fold Doors", description: "Effortlessly connect your indoor and outdoor spaces with sleek, space-saving bi-fold door systems.", href: "/services/bifold-doors", icon: "🔲" },
  { title: "Roofline", description: "High-performance fascias, soffits and guttering that protect your home and elevate its appearance.", href: "/services/roofline", icon: "🏠" },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: " yrs", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 10, suffix: " yr", label: "Guarantee" },
];

const testimonials = [
  { name: "Sarah Mitchell", location: "Cambridge", text: "FS Home Improvements transformed our home completely. The new windows and doors are stunning — the team were professional, tidy and efficient. Couldn't be happier.", service: "Windows & Doors", rating: 5 },
  { name: "David Thompson", location: "Huntingdon", text: "The bi-fold doors they installed are absolutely incredible. Opens the whole back of the house up. The quality is exceptional and the price was very competitive.", service: "Bi-Fold Doors", rating: 5 },
  { name: "Linda Barnes", location: "St Neots", text: "Our conservatory is just beautiful. FS Home Improvements guided us through every step of the design process and the finished result exceeded all expectations.", service: "Conservatory", rating: 5 },
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
      className="group bg-white border border-gray-100 rounded-xl p-7 hover:border-[#D9001B]/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.3s, border-color 0.3s` }}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-[#D9001B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
      <Link href={service.href} className="inline-flex items-center gap-2 text-[#D9001B] text-sm font-semibold group-hover:gap-3 transition-all">
        Learn More <ChevronRight size={15} />
      </Link>
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);

  const featuresRef = useInView();
  const servicesRef = useInView(0.05);
  const testimonialsRef = useInView();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#D9001B]/40 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#D9001B]/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 bg-[#D9001B]/10 border border-[#D9001B]/20 rounded-full px-4 py-1.5 mb-8"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}
              >
                <span className="w-2 h-2 bg-[#D9001B] rounded-full animate-pulse" />
                <span className="text-[#D9001B] text-xs font-semibold uppercase tracking-wider">Trusted Local Experts</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}
              >
                Transform<br /><span className="text-[#D9001B]">Your Home.</span><br />Elevate<br />Your Life.
              </h1>

              <p
                className="mt-7 text-lg text-white/60 leading-relaxed max-w-lg"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.25s" }}
              >
                Expert installation of windows, doors, conservatories and more. We&apos;ve helped hundreds of homeowners create their dream home.
              </p>

              <div
                className="mt-10 flex flex-wrap gap-4"
                style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.35s" }}
              >
                <Link href="/contact" className="group flex items-center gap-3 bg-[#D9001B] hover:bg-[#A80015] text-white font-bold px-7 py-4 rounded transition-all duration-300">
                  Get Free Quote <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/projects" className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold px-7 py-4 rounded transition-all duration-300">
                  View Projects
                </Link>
              </div>

              <div
                className="mt-10 flex items-center gap-8"
                style={{ opacity: heroVisible ? 1 : 0, transition: "all 0.7s ease 0.45s" }}
              >
                {[{ value: "500+", label: "Projects" }, { value: "15 yrs", label: "Experience" }, { value: "10 yr", label: "Guarantee" }].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-white font-black text-xl">{s.value}</div>
                    <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side visual panel */}
            <div
              className="hidden lg:block"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateX(0)" : "translateX(40px)", transition: "all 0.9s ease 0.2s" }}
            >
              <div className="relative">
                <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 relative">
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D9001B] to-transparent" />
                  <div className="grid grid-cols-2 gap-4">
                    {services.slice(0, 4).map((s) => (
                      <div key={s.title} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-5 hover:border-[#D9001B]/30 transition-colors cursor-pointer">
                        <div className="text-3xl mb-3">{s.icon}</div>
                        <div className="text-white font-bold text-sm">{s.title}</div>
                        <div className="text-white/40 text-xs mt-1 leading-relaxed line-clamp-2">{s.description.split('.')[0]}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between p-4 bg-[#D9001B]/10 border border-[#D9001B]/20 rounded-xl">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-[#D9001B]" />
                      <span className="text-white text-sm font-semibold">10-Year Guarantee</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 bg-[#D9001B] rounded-xl p-4 shadow-2xl shadow-red-900/50">
                  <div className="text-white font-black text-2xl">500+</div>
                  <div className="text-white/80 text-xs">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div ref={featuresRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: featuresRef.inView ? 1 : 0, transform: featuresRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#D9001B] text-sm font-bold uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D9001B]/10 group-hover:bg-[#D9001B] rounded-xl mb-5 text-[#D9001B] group-hover:text-white transition-all duration-300">
                  {r.icon}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{r.title}</h3>
                <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div ref={servicesRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: servicesRef.inView ? 1 : 0, transform: servicesRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#D9001B] text-sm font-bold uppercase tracking-[0.2em] mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From a single window to a full home transformation, we&apos;ve got you covered.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
            <div className="bg-[#D9001B] rounded-xl p-7 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <div className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Free Consultation</div>
                <h3 className="text-2xl font-black text-white leading-tight mb-3">Not sure what you need?</h3>
                <p className="text-white/70 text-sm leading-relaxed">Talk to our experts. We&apos;ll help you find the perfect solution for your home and budget.</p>
              </div>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-white text-[#D9001B] font-bold px-6 py-3 rounded text-sm hover:bg-gray-100 transition-colors w-fit">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div ref={testimonialsRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" style={{ opacity: testimonialsRef.inView ? 1 : 0, transform: testimonialsRef.inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
            <p className="text-[#D9001B] text-sm font-bold uppercase tracking-[0.2em] mb-3">Customer Reviews</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
              <span className="text-gray-500 text-sm ml-2">5.0 average · 150+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-7 relative"
                style={{ opacity: testimonialsRef.inView ? 1 : 0, transform: testimonialsRef.inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.15}s` }}
              >
                <div className="absolute top-5 right-6 text-5xl text-[#D9001B]/10 font-black leading-none select-none">&quot;</div>
                <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                  </div>
                  <span className="text-xs bg-[#D9001B]/10 text-[#D9001B] font-semibold px-3 py-1 rounded-full">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D9001B]/5 via-transparent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D9001B]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#D9001B] text-sm font-bold uppercase tracking-[0.2em] mb-4">Ready to Start?</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Your dream home<br /><span className="text-[#D9001B]">starts with one call.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote from our expert team. We&apos;ll come to you, assess your needs and provide a transparent, competitive price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group flex items-center justify-center gap-3 bg-[#D9001B] hover:bg-[#A80015] text-white font-bold px-10 py-5 rounded text-lg transition-all duration-300">
              Get Your Free Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+441234567890" className="flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 text-white font-semibold px-10 py-5 rounded text-lg transition-all duration-300">
              <Phone size={18} /> 01234 567 890
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
