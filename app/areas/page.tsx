import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { areas, getAreaProjects } from "@/lib/areas";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Areas We Cover — Cambridgeshire, Bedfordshire & Northamptonshire",
  description:
    "FS Home Improvements installs windows, doors, conservatories and roofline across Cambridgeshire, Bedfordshire and Northamptonshire — Cambridge, Huntingdon, St Neots, Peterborough, Bedford and more.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Areas We Cover", path: "/areas" }])} />

      <section className="bg-[#0A0A0A] pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-4">Service Area</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Areas we cover</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Windows, doors, conservatories, bi-folds and roofline — installed across Cambridgeshire, Bedfordshire and Northamptonshire with a 10-year guarantee.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((a) => {
              const count = getAreaProjects(a).length;
              return (
                <Link key={a.slug} href={`/areas/${a.slug}`} className="group bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[#85152C] transition-colors">
                  <div className="flex items-center gap-2 text-[#85152C] text-xs font-bold uppercase tracking-wider mb-2">
                    <MapPin size={13} /> {a.county}
                  </div>
                  <h2 className="text-xl font-black text-gray-900 flex items-center justify-between">
                    {a.name}
                    <ArrowRight size={18} className="text-[#85152C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">
                    {count > 0 ? `${count} recent project${count > 1 ? "s" : ""} photographed in ${a.name}` : `Windows, doors & conservatories in ${a.name}`}
                  </p>
                </Link>
              );
            })}
          </div>
          <p className="text-gray-500 text-sm mt-10 text-center">
            Don&apos;t see your town? We cover the surrounding villages too —{" "}
            <Link href="/contact" className="text-[#85152C] font-semibold hover:underline">ask us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
