import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: { absolute: "FS Home Improvements | Windows, Doors & Conservatories in Cambridgeshire" },
  description:
    "Trusted home improvement specialists serving Cambridgeshire, Bedfordshire and Northamptonshire. Expert installation of windows, doors, conservatories, bi-fold doors and roofline products with a 10-year guarantee. Get your free quote today.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomeClient />;
}
