"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);

  return (
    <>
      <section className="relative bg-[#0A0A0A] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#85152C]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}>
            <p className="text-[#85152C] text-sm font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Let&apos;s talk about<br /><span className="text-[#85152C]">your project.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Get your free, no-obligation quote today. We&apos;ll visit your home at a time that suits you and provide a transparent, competitive price.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left col */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {[
                    { icon: <Phone size={18} />, label: "Phone", value: "07412 027802", href: "tel:+447412027802" },
                    { icon: <Mail size={18} />, label: "Email", value: "fshomeimprovements@hotmail.com", href: "mailto:fshomeimprovements@hotmail.com" },
                    { icon: <MapPin size={18} />, label: "Service Area", value: "Serving all surrounding areas", href: undefined },
                    { icon: <Clock size={18} />, label: "Hours", value: "Mon–Fri 8am–6pm | Sat 9am–4pm", href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#85152C]/10 rounded-lg flex items-center justify-center text-[#85152C] shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-gray-800 font-medium hover:text-[#85152C] transition-colors text-sm">{item.value}</a>
                        ) : (
                          <div className="text-gray-800 font-medium text-sm">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0A0A0A] rounded-2xl p-7">
                <div className="text-white font-bold text-lg mb-5">What happens next?</div>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "We receive your enquiry", desc: "We'll acknowledge receipt within a few hours." },
                    { step: "2", title: "We call you back", desc: "A member of our team will call to discuss your requirements." },
                    { step: "3", title: "Free home survey", desc: "We visit at your convenience and take measurements." },
                    { step: "4", title: "Detailed quote", desc: "We provide a clear, itemised quote with no hidden costs." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-[#85152C] rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5">{s.step}</div>
                      <div>
                        <div className="text-white text-sm font-semibold">{s.title}</div>
                        <div className="text-white/50 text-xs mt-0.5">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                {["Free, no-obligation survey", "No-pressure sales approach", "Transparent, itemised pricing", "Fully insured & FENSA registered", "10-year insurance-backed guarantee"].map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#85152C] shrink-0" />
                    <span className="text-gray-600 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right col — form */}
            <div className="lg:col-span-3">
              <div className="bg-[#0A0A0A] rounded-2xl p-8">
                <LeadForm
                  service="General Enquiry"
                  title="Request Your Free Quote"
                  subtitle="Fill in the form and we'll be in touch within 24 hours."
                  dark={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
