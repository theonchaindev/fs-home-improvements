import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Our Services — Windows, Doors, Conservatories & Roofline",
  description:
    "Every service FS Home Improvements offers: uPVC and aluminium windows, composite doors, bi-fold doors, conservatories, orangeries and roofline. All installed with a 10-year guarantee.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <ServicesClient />
    </>
  );
}
