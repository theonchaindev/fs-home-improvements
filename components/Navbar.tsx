"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  { name: "Windows", href: "/services/windows" },
  { name: "Doors", href: "/services/doors" },
  { name: "Conservatories", href: "/services/conservatories" },
  { name: "Bi-Fold Doors", href: "/services/bifold-doors" },
  { name: "Roofline", href: "/services/roofline" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#85152C] py-2 px-4 flex justify-end items-center gap-6 text-white text-sm">
        <a href="tel:+447412027802" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium">
          <Phone size={13} />
          07412 027802
        </a>
        <Link href="/contact" className="hover:opacity-80 transition-opacity hidden sm:block">
          Free Quote →
        </Link>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.png" alt="FS Home Improvements" width={44} height={44} className="h-11 w-auto object-contain" priority />
            <div>
              <div className="text-white font-black text-base leading-none tracking-wide">FS HOME</div>
              <div className="text-[#85152C] text-xs font-bold tracking-[0.15em] uppercase">Improvements</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-[#85152C]" : "text-white/80 hover:text-white"}`}>
              Home
            </Link>
            <Link href="/about" className={`text-sm font-medium transition-colors ${pathname === "/about" ? "text-[#85152C]" : "text-white/80 hover:text-white"}`}>
              About
            </Link>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${pathname.startsWith("/services") ? "text-[#85152C]" : "text-white/80 hover:text-white"}`}>
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden shadow-2xl min-w-[180px]">
                  <Link href="/services" className="block px-5 py-3 text-sm text-[#85152C] font-semibold border-b border-white/10 hover:bg-white/5 transition-colors">
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className={`block px-5 py-3 text-sm transition-colors hover:bg-white/5 ${pathname === s.href ? "text-[#85152C]" : "text-white/70 hover:text-white"}`}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/projects" className={`text-sm font-medium transition-colors ${pathname === "/projects" ? "text-[#85152C]" : "text-white/80 hover:text-white"}`}>
              Projects
            </Link>
            <Link href="/contact" className={`text-sm font-medium transition-colors ${pathname === "/contact" ? "text-[#85152C]" : "text-white/80 hover:text-white"}`}>
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#85152C] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#6a1023] transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-[#0A0A0A] border-t border-white/10 overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 py-4 space-y-1">
          {[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Contact", href: "/contact" }].map((l) => (
            <Link key={l.href} href={l.href} className="block py-2.5 px-3 text-white/80 hover:text-white hover:bg-white/5 rounded text-sm font-medium transition-colors">
              {l.name}
            </Link>
          ))}
          <div className="pt-1 pb-1">
            <div className="px-3 py-2 text-[#85152C] text-xs font-bold uppercase tracking-wider">Services</div>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block py-2 px-5 text-white/70 hover:text-white text-sm transition-colors">
                {s.name}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link href="/contact" className="block bg-[#85152C] text-white text-center py-3 rounded font-semibold text-sm hover:bg-[#6a1023] transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
