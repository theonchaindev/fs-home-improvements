import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us — Free Quotes",
  description:
    "Get a free, no-obligation quote for windows, doors, conservatories or roofline work. Call FS Home Improvements on 07412 027802 or send us your project details.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <ContactClient />
    </>
  );
}
