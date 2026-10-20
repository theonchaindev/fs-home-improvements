import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Recent Projects & Installations",
  description:
    "Browse recent FS Home Improvements installations across Cambridgeshire and beyond — windows, bi-fold doors, conservatories and full-house replacements, with photos and customer reviews.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Projects", path: "/projects" }])} />
      <ProjectsClient />
    </>
  );
}
