"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface LeadFormProps {
  service?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function LeadForm({
  service = "General Enquiry",
  title = "Get Your Free Quote",
  subtitle = "No obligation. Response within 24 hours.",
  dark = true,
}: LeadFormProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `w-full px-4 py-3 rounded text-sm outline-none transition-all border focus:border-[#85152C] ${
    dark
      ? "bg-white/5 border-white/10 text-white placeholder-white/30 focus:bg-white/8"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white"
  }`;

  const labelClass = `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${dark ? "text-white/60" : "text-gray-500"}`;

  if (submitted) {
    return (
      <div className={`rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px] ${dark ? "bg-white/5 border border-white/10" : "bg-gray-50 border border-gray-200"}`}>
        <CheckCircle2 size={48} className="text-[#85152C] mb-4" />
        <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>Message Received!</h3>
        <p className={`text-sm ${dark ? "text-white/60" : "text-gray-500"}`}>
          Thank you for your enquiry about our {service} service. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl p-6 md:p-8 ${dark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200 shadow-lg"}`}>
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-1 ${dark ? "text-white" : "text-gray-900"}`}>{title}</h3>
        <p className={`text-sm ${dark ? "text-white/50" : "text-gray-500"}`}>{subtitle}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="w-6 h-0.5 bg-[#85152C]" />
          <span className={`text-xs font-medium ${dark ? "text-[#85152C]" : "text-[#85152C]"}`}>{service}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input
              type="text"
              required
              placeholder="John Smith"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              type="tel"
              required
              placeholder="07700 000000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Tell us more (optional)</label>
          <textarea
            rows={3}
            placeholder={`Tell us about your ${service.toLowerCase()} requirements...`}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-none`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#85152C] hover:bg-[#6a1023] text-white font-bold py-4 rounded text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            "Get Free Quote →"
          )}
        </button>
        <p className={`text-xs text-center ${dark ? "text-white/30" : "text-gray-400"}`}>
          By submitting you agree to be contacted regarding your enquiry.
        </p>
      </form>
    </div>
  );
}
