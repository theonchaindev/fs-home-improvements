import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { areas, getArea, getAreaProjects } from "@/lib/areas";
import { altFor } from "@/lib/imageAlts";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/breadcrumbs";
import LeadForm from "@/components/LeadForm";

const services = [
  { name: "Windows", href: "/services/windows", desc: "uPVC, aluminium and timber — A-rated as standard." },
  { name: "Doors", href: "/services/doors", desc: "Composite, French and patio doors with multi-point locking." },
  { name: "Conservatories", href: "/services/conservatories", desc: "Bespoke conservatories, orangeries and garden rooms." },
  { name: "Bi-Fold Doors", href: "/services/bifold-doors", desc: "Slim aluminium bi-folds that open your home to the garden." },
  { name: "Roofline", href: "/services/roofline", desc: "Fascias, soffits and guttering — maintenance-free uPVC." },
];

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Windows, Doors & Conservatories in ${area.name}`,
    description: `Expert installation of uPVC and aluminium windows, composite doors, conservatories, bi-fold doors and roofline in ${area.name}. Free quotes, 10-year guarantee.`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const areaProjects = getAreaProjects(area);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Areas We Cover", path: "/areas" },
          { name: area.name, path: `/areas/${area.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            <MapPin size={14} /> Areas We Cover · {area.county}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 max-w-3xl">
            Windows, Doors &amp; Conservatories in <span className="text-[#85152C]">{area.name}</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-8">
            Trusted local installation in {area.name} — free surveys, honest quotes and a 10-year insurance-backed guarantee on every job.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#85152C] hover:bg-[#6a1023] text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors">
              Get a Free Quote
            </Link>
            <a href="tel:+447412027802" className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors">
              <Phone size={15} /> 07412 027802
            </a>
          </div>
        </div>
      </section>

      {/* Intro + form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Home improvements in {area.name}</h2>
            {area.intro.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg mb-5">{p}</p>
            ))}
            <ul className="grid sm:grid-cols-2 gap-3 mt-8">
              {[
                "Free, no-obligation site survey",
                "10-year insurance-backed guarantee",
                "Checkatrade & Assure certified",
                "Installed by our own fitters",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-[#85152C] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden sticky top-28">
              <LeadForm title={`Get a free quote in ${area.name}`} subtitle="No obligation. Response within 24 hours." dark />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-10">What we install in {area.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#85152C] transition-colors">
                <h3 className="font-bold text-gray-900 mb-1.5 flex items-center justify-between">
                  {s.name}
                  <ArrowRight size={16} className="text-[#85152C] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local projects */}
      {areaProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Recent work in {area.name}</h2>
            <p className="text-gray-500 mb-10">Real installations, photographed on the job.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {areaProjects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[16/10] block">
                  <Image
                    src={p.image}
                    alt={altFor(p.image, `${p.title}, ${p.location}`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#85152C] text-xs font-bold uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-white text-xl font-black mt-1">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other areas */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-6">We also cover</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.filter((a) => a.slug !== area.slug).map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="bg-white/5 border border-white/10 hover:border-[#85152C] rounded-full px-5 py-2.5 text-white text-sm font-semibold transition-colors">
                {a.name}
              </Link>
            ))}
          </div>
          <p className="text-white/40 text-sm mt-6">
            Serving Cambridgeshire, Bedfordshire and Northamptonshire.{" "}
            <Link href="/contact" className="text-[#85152C] hover:underline">Not listed? Get in touch.</Link>
          </p>
        </div>
      </section>
    </>
  );
}
