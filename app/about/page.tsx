import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "About Us — Trusted Local Installers",
  description:
    "Meet FS Home Improvements: experienced window, door and conservatory installers serving Cambridgeshire, Bedfordshire and Northamptonshire. Built on trust, driven by quality.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About Us", path: "/about" }])} />
      <AboutClient />
    </>
  );
}
