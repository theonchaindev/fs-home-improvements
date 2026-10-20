import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fshome-improvements.co.uk"),
  title: {
    default: "FS Home Improvements | Windows, Doors & Conservatories",
    template: "%s | FS Home Improvements",
  },
  description:
    "Trusted home improvement specialists. Expert installation of windows, doors, conservatories, bi-fold doors and roofline products. Get your free quote today.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "FS Home Improvements",
    url: "https://fshome-improvements.co.uk",
    images: [
      {
        url: "/images/projects/showcase-large-house.jpg",
        width: 1200,
        height: 630,
        alt: "A completed FS Home Improvements installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "FS Home Improvements",
  url: "https://fshome-improvements.co.uk",
  image: "https://fshome-improvements.co.uk/logo.png",
  telephone: "+447412027802",
  email: "fshomeimprovements@hotmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Cambridgeshire",
    addressCountry: "GB",
  },
  areaServed: ["Cambridgeshire", "Bedfordshire", "Northamptonshire"],
  priceRange: "££",
  description:
    "Expert installation of windows, doors, conservatories, bi-fold doors and roofline products with a 10-year guarantee.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <GoogleTagManager gtmId="GTM-5L3LZRBC" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18296594975"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18296594975');`}
      </Script>
      <body className="min-h-screen flex flex-col bg-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5L3LZRBC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
