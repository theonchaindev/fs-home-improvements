"use client";

import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Clock, ArrowRight, CheckCircle2, Star, ChevronLeft, ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import LeadForm from "@/components/LeadForm";

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

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = getProject(slug);

  if (!project) return notFound();

  const [heroVisible, setHeroVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const allImages = [project.image, ...project.galleryImages];
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);

  const contentRef = useInView();
  const relatedRef = useInView();

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 2);

  return (
    <>
      {/* Hero with full image */}
      <section className="relative bg-[#0A0A0A] pt-28 overflow-hidden">
        <div className="relative h-[55vh] min-h-[400px]">
          <Image
            src={allImages[selectedImage]}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-[#0A0A0A]/60" />

          {/* Category badge */}
          <div className="absolute top-6 left-6">
            <span className="bg-[#D9001B] text-white text-xs font-bold px-3 py-1.5 rounded-full">{project.category}</span>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-6 flex gap-2">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative w-16 h-12 rounded overflow-hidden border-2 transition-all ${i === selectedImage ? "border-[#D9001B] scale-110" : "border-white/20 hover:border-white/50"}`}
              >
                <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>

        {/* Title block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.2s" }}
          >
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><MapPin size={13} />{project.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} />Completed in {project.duration}</span>
              <span className="text-white/30">|</span>
              <span>{project.scope}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div ref={contentRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left — story */}
            <div
              className="lg:col-span-2"
              style={{ opacity: contentRef.inView ? 1 : 0, transform: contentRef.inView ? "translateX(0)" : "translateX(-20px)", transition: "all 0.6s ease" }}
            >
              <h2 className="text-2xl font-black text-gray-900 mb-5">About this project</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{project.fullDescription}</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="text-[#D9001B] text-xs font-bold uppercase tracking-wider mb-2">The Challenge</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                </div>
                <div className="bg-[#0A0A0A] rounded-xl p-6">
                  <div className="text-[#D9001B] text-xs font-bold uppercase tracking-wider mb-2">The Result</div>
                  <p className="text-white/70 text-sm leading-relaxed">{project.result}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((t) => (
                  <span key={t} className="bg-[#D9001B]/8 text-[#D9001B] font-semibold text-xs px-4 py-1.5 rounded-full border border-[#D9001B]/15">{t}</span>
                ))}
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-6 text-7xl text-white/5 font-black leading-none select-none">&quot;</div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed mb-5 italic">&quot;{project.testimonial.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#D9001B] rounded-full flex items-center justify-center text-white font-black text-sm">
                      {project.testimonial.name[0]}
                    </div>
                    <span className="text-white/60 text-sm font-medium">{project.testimonial.name}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right — sidebar with lead form */}
            <div
              style={{ opacity: contentRef.inView ? 1 : 0, transform: contentRef.inView ? "translateX(0)" : "translateX(20px)", transition: "all 0.6s ease 0.2s" }}
            >
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden">
                  <LeadForm
                    service={project.category}
                    title={`Interested in ${project.category}?`}
                    subtitle="Get a free quote for your own project."
                    dark={true}
                  />
                </div>

                <div className="border border-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm">Project Summary</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Service", value: project.category },
                      { label: "Location", value: project.location },
                      { label: "Duration", value: project.duration },
                      { label: "Scope", value: project.scope },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-start gap-3">
                        <span className="text-gray-400 text-xs uppercase tracking-wide font-semibold shrink-0">{row.label}</span>
                        <span className="text-gray-800 text-sm text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    {[
                      "10-Year Guarantee",
                      "Fully Insured",
                      "FENSA Registered",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 mb-2">
                        <CheckCircle2 size={14} className="text-[#D9001B]" />
                        <span className="text-gray-600 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div ref={relatedRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="mb-10"
              style={{ opacity: relatedRef.inView ? 1 : 0, transform: relatedRef.inView ? "translateY(0)" : "translateY(20px)", transition: "all 0.5s ease" }}
            >
              <p className="text-[#D9001B] text-sm font-bold uppercase tracking-[0.2em] mb-2">More Like This</p>
              <h2 className="text-3xl font-black text-gray-900">Related {project.category} Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p, i) => (
                <Link
                  href={`/projects/${p.slug}`}
                  key={p.id}
                  className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-[#D9001B]/20 hover:shadow-xl transition-all duration-400 bg-white"
                  style={{ opacity: relatedRef.inView ? 1 : 0, transform: relatedRef.inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${i * 0.1}s` }}
                >
                  <div className="relative h-52 overflow-hidden bg-[#1A1A1A]">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/80 text-xs">
                      <MapPin size={10} /> {p.location}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#D9001B] transition-colors mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-1 mb-3">{p.shortDescription}</p>
                    <span className="text-[#D9001B] text-sm font-semibold flex items-center gap-1">
                      View Project <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/projects" className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#D9001B] text-gray-700 hover:text-[#D9001B] font-semibold px-8 py-4 rounded transition-all">
                <ChevronLeft size={15} /> All Projects
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
