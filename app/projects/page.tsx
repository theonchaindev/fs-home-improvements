"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin, ChevronRight } from "lucide-react";
import { projects } from "@/lib/projects";

function useInView(threshold = 0.05) {
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

const categories = ["All", "Windows", "Doors", "Conservatories", "Bi-Fold Doors", "Roofline"];

export default function ProjectsPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);
  const gridRef = useInView();

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="relative bg-[#0A0A0A] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#D9001B]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}>
            <p className="text-[#D9001B] text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Work</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">Recent Projects</h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Every project tells a story of transformation. Browse our completed work and see the quality that our customers rave about.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === c
                    ? "bg-[#D9001B] text-white shadow-lg shadow-red-900/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* 2-column grid */}
          <div ref={gridRef.ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <Link
                href={`/projects/${p.slug}`}
                key={p.id}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-[#D9001B]/20 hover:shadow-2xl transition-all duration-500 bg-white"
                style={{
                  opacity: gridRef.inView ? 1 : 0,
                  transform: gridRef.inView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${(i % 2) * 0.1}s, transform 0.6s ease ${(i % 2) * 0.1}s, box-shadow 0.4s, border-color 0.4s`
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#1A1A1A]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D9001B] text-white text-xs font-bold px-3 py-1.5 rounded-full">{p.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/80 text-xs">
                    <MapPin size={11} />
                    {p.location}
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 bg-[#D9001B] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#D9001B] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{p.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                    <span className="text-[#D9001B] text-sm font-semibold flex items-center gap-1 shrink-0 ml-3">
                      View Project <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">No projects found in this category yet.</div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#D9001B] text-sm font-bold uppercase tracking-[0.2em] mb-4">Your Turn</p>
          <h2 className="text-4xl font-black text-white mb-4">Ready to start your project?</h2>
          <p className="text-white/50 text-lg mb-8">Join hundreds of satisfied homeowners and transform your home with FS Home Improvements.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-[#D9001B] hover:bg-[#A80015] text-white font-bold px-10 py-5 rounded transition-colors text-lg">
            Get Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
