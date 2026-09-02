import { createFileRoute } from "@tanstack/react-router";

import projectDatavane from "@/assets/project-datavane.jpg";
import projectNeuralsync from "@/assets/project-neuralsync.jpg";
import projectPrisma from "@/assets/project-prisma.jpg";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — DEV.CORE" },
      {
        name: "description",
        content:
          "Selected case studies: distributed AI inference engines, headless commerce platforms, and vector embedding pipelines.",
      },
      { property: "og:title", content: "Projects — DEV.CORE" },
      {
        property: "og:description",
        content: "Selected case studies in AI engineering and full-stack architecture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    image: projectNeuralsync,
    alt: "NeuralSync Core AI dashboard with data visualizations",
    tag: "AI MODELING",
    year: "2026",
    title: "NeuralSync Core",
    description:
      "Distributed inference engine optimizing Llama-3 clusters for real-time edge computing. Shard-aware request routing cut p95 latency by 62% while halving GPU spend.",
    stack: ["Python", "CUDA", "Next.js"],
  },
  {
    image: projectPrisma,
    alt: "Prisma E-comm headless commerce interface",
    tag: "FULL STACK",
    year: "2025",
    title: "Prisma E-comm",
    description:
      "Ultra-light headless commerce engine for luxury brands with sub-100ms TTI. Edge-cached catalog with optimistic cart state and zero layout shift.",
    stack: ["Go", "Postgres", "TypeScript"],
  },
  {
    image: projectDatavane,
    alt: "DataVane Pipeline data stream visualization",
    tag: "PLATFORM",
    year: "2025",
    title: "DataVane Pipeline",
    description:
      "Automated vector embedding pipeline for enterprise knowledge retrieval. Processes 40k documents per hour with incremental re-embedding and drift detection.",
    stack: ["Rust", "Pinecone", "React"],
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30">
      <div className="bg-grid-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.03]" />

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24">
        <section>
          <div className="mb-6 inline-block border border-accent/20 bg-accent/5 px-3 py-1">
            <span className="font-display text-[10px] font-bold uppercase tracking-widest text-accent">
              Archive
            </span>
          </div>
          <h1 className="animate-in text-balance font-display text-5xl font-extrabold tracking-tighter sm:text-7xl">
            SELECTED <span className="text-muted-foreground">ARTIFACTS</span>
          </h1>
          <p className="animate-in mt-8 max-w-xl text-pretty text-lg text-muted-foreground [animation-delay:150ms]">
            A curated set of systems shipped to production — each engineered for
            reliability, measured in latency budgets and uptime.
          </p>
        </section>

        <section className="mt-24 grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative bg-background p-8 transition-colors hover:bg-secondary"
            >
              <div className="mb-12 aspect-video overflow-hidden bg-secondary outline-1 -outline-offset-1 outline-white/5">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-80"
                />
              </div>
              <div className="flex justify-between">
                <span className="font-display text-[10px] font-bold text-accent">
                  {project.tag}
                </span>
                <span className="font-display text-[10px] text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <h2 className="mt-2 font-display text-xl font-bold">{project.title}</h2>
              <p className="mt-4 text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-8 flex gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border bg-secondary px-2 py-1 font-display text-[9px] uppercase tracking-tighter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
