"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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

const categories = ["All", "Windows", "Doors", "Conservatories", "Bi-Fold Doors", "Roofline"];

const projects = [
  { id: 1, title: "Victorian Bay Window Installation", location: "Cambridge", category: "Windows", description: "Full replacement of original single-glazed bay windows with A-rated double glazed units in an anthracite grey finish.", tags: ["uPVC", "Bay Window", "Anthracite Grey"] },
  { id: 2, title: "Bi-Fold Doors — Garden Extension", location: "Huntingdon", category: "Bi-Fold Doors", description: "4-panel aluminium bi-fold doors spanning 3.6m, connecting kitchen-diner to landscaped garden. Fitted with flush floor track.", tags: ["Aluminium", "4-Panel", "Flush Track"] },
  { id: 3, title: "Edwardian Conservatory", location: "St Neots", category: "Conservatories", description: "Bespoke Edwardian-style conservatory with solid tiled roof for year-round use. 18m² addition to the rear of a 1930s semi.", tags: ["Solid Roof", "Edwardian", "Year-Round"] },
  { id: 4, title: "Composite Front Door", location: "Bedford", category: "Doors", description: "Solidor composite door in Chartwell Green with decorative glazing, chrome furniture and multi-point locking system.", tags: ["Composite", "Solidor", "Chartwell Green"] },
  { id: 5, title: "Full Roofline Replacement", location: "Sandy", category: "Roofline", description: "Complete removal and replacement of all fascias, soffits and guttering on a detached 4-bedroom property. Ogee profile in white.", tags: ["Full Replacement", "uPVC", "Ogee Profile"] },
  { id: 6, title: "Aluminium Casement Windows", location: "Biggleswade", category: "Windows", description: "New build specification — aluminium casement windows throughout a 5-bedroom detached home in slim anthracite frames.", tags: ["Aluminium", "Casement", "New Build"] },
  { id: 7, title: "French Doors & Side Panels", location: "Royston", category: "Doors", description: "uPVC French doors with matching side panels, replacing old wooden doors. White finish with obscure glazing for privacy.", tags: ["French Doors", "uPVC", "Side Panels"] },
  { id: 8, title: "Victorian Conservatory — Solid Roof", location: "Ely", category: "Conservatories", description: "Polycarbonate roof replacement with insulated solid tiled roof — transforming an unusable space into a year-round living room.", tags: ["Roof Replacement", "Victorian", "Solid Roof"] },
  { id: 9, title: "6-Panel Bi-Fold Doors", location: "Peterborough", category: "Bi-Fold Doors", description: "A spectacular 5.4m wide 6-panel bi-fold installation across the full width of a rear extension. Black aluminium frames.", tags: ["6-Panel", "Black", "Large Opening"] },
];

const bgPatterns = [
  "bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]",
  "bg-gradient-to-br from-[#1A0A0A] to-[#0A0A0A]",
  "bg-gradient-to-br from-[#0A1A0A] to-[#0A0A0A]",
  "bg-gradient-to-br from-[#0A0A1A] to-[#0A0A0A]",
  "bg-gradient-to-br from-[#1A1A0A] to-[#0A0A0A]",
  "bg-gradient-to-br from-[#0A1A1A] to-[#0A0A0A]",
];

export default function ProjectsPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);
  const gridRef = useInView(0.05);

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
              Every project we complete tells a story of transformation. Browse our recent work and see the quality that our customers rave about.
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
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === c
                    ? "bg-[#D9001B] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div ref={gridRef.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="group rounded-xl overflow-hidden border border-gray-100 hover:border-[#D9001B]/20 hover:shadow-xl transition-all duration-400"
                style={{ opacity: gridRef.inView ? 1 : 0, transform: gridRef.inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${(i % 3) * 0.1}s` }}
              >
                {/* Placeholder image area */}
                <div className={`h-48 ${bgPatterns[i % bgPatterns.length]} relative overflow-hidden flex items-center justify-center`}>
                  <div className="text-6xl opacity-20 select-none">
                    {p.category === "Windows" ? "🪟" : p.category === "Doors" ? "🚪" : p.category === "Conservatories" ? "🏡" : p.category === "Bi-Fold Doors" ? "🔲" : "🏠"}
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#D9001B] text-white text-xs font-bold px-3 py-1 rounded-full">{p.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white/60 text-xs">{p.location}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#D9001B] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
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
