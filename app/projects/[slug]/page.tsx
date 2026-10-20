import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import ProjectDetailClient from "./ProjectDetailClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/breadcrumbs";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const titleWithLocation = project.location ? `${project.title} in ${project.location}` : project.title;
  return {
    title: titleWithLocation,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${titleWithLocation} | FS Home Improvements`,
      description: project.shortDescription,
      images: [{ url: project.image, alt: `${project.title}, ${project.location}` }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />
      <ProjectDetailClient slug={slug} />
    </>
  );
}
