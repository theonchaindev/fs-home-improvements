import Link from "next/link";
import { Phone, Mail, MapPin, Share2, MessageCircle, Star } from "lucide-react";

const services = [
  { name: "Windows", href: "/services/windows" },
  { name: "Doors", href: "/services/doors" },
  { name: "Conservatories", href: "/services/conservatories" },
  { name: "Bi-Fold Doors", href: "/services/bifold-doors" },
  { name: "Roofline", href: "/services/roofline" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* CTA Banner */}
      <div className="bg-[#D9001B] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Ready to transform your home?</h2>
            <p className="text-white/80 mt-1">Get your free, no-obligation quote today.</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-white text-[#D9001B] font-bold px-8 py-4 rounded hover:bg-gray-100 transition-colors text-sm uppercase tracking-wide">
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#D9001B] flex items-center justify-center font-black text-white text-lg">FS</div>
              <div>
                <div className="text-white font-bold leading-none">FS HOME</div>
                <div className="text-[#D9001B] text-xs font-semibold tracking-[0.2em] uppercase">Improvements</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Trusted home improvement specialists serving homeowners across the region. Quality you can see, service you can trust.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-[#D9001B] rounded flex items-center justify-center transition-colors">
                <Share2 size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-[#D9001B] rounded flex items-center justify-center transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/50 hover:text-[#D9001B] text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#D9001B] rounded-full" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
                { name: "Get a Quote", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-[#D9001B] text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#D9001B] rounded-full" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#D9001B] mt-0.5 shrink-0" />
                <a href="tel:+441234567890" className="text-white/50 hover:text-white text-sm transition-colors">01234 567 890</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#D9001B] mt-0.5 shrink-0" />
                <a href="mailto:info@fshomeimprovements.co.uk" className="text-white/50 hover:text-white text-sm transition-colors">info@fshomeimprovements.co.uk</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#D9001B] mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">Serving all surrounding areas</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-white/50 text-xs ml-1">5.0 · 150+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} FS Home Improvements. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
