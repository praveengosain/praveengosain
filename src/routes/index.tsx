import { Link, createFileRoute } from "@tanstack/react-router";

import portrait from "@/assets/portrait.asset.json";
import projectDatavane from "@/assets/project-datavane.jpg";
import projectNeuralsync from "@/assets/project-neuralsync.jpg";
import projectPrisma from "@/assets/project-prisma.jpg";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEV.CORE — Full-Stack AI Engineer" },
      {
        name: "description",
        content:
          "Full-stack AI engineer building production-grade applications where LLMs meet robust infrastructure. High-throughput AI pipelines and reactive interfaces.",
      },
      { property: "og:title", content: "DEV.CORE — Full-Stack AI Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack AI engineer building production-grade applications where LLMs meet robust infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    image: projectNeuralsync,
    alt: "NeuralSync Core AI dashboard with data visualizations",
    tag: "AI MODELING",
    year: "2026",
    title: "NeuralSync Core",
    description:
      "Distributed inference engine optimizing Llama-3 clusters for real-time edge computing.",
    stack: ["Python", "CUDA", "Next.js"],
  },
  {
    image: projectPrisma,
    alt: "Prisma E-comm headless commerce interface",
    tag: "FULL STACK",
    year: "2025",
    title: "Prisma E-comm",
    description:
      "Ultra-light headless commerce engine for luxury brands with sub-100ms TTI.",
    stack: ["Go", "Postgres", "TypeScript"],
  },
  {
    image: projectDatavane,
    alt: "DataVane Pipeline data stream visualization",
    tag: "PLATFORM",
    year: "2025",
    title: "DataVane Pipeline",
    description:
      "Automated vector embedding pipeline for enterprise knowledge retrieval systems.",
    stack: ["Rust", "Pinecone", "React"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30">
      {/* Grid Overlay */}
      <div className="bg-grid-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.03]" />

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-block border border-accent/20 bg-accent/5 px-3 py-1">
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-accent">
                Full-Stack AI Engineer
              </span>
            </div>
            <h1 className="animate-in text-balance font-display text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
              ENGINEERING <span className="text-muted-foreground">INTELLIGENT</span>{" "}
              SYSTEMS.
            </h1>
            <p className="animate-in mt-8 max-w-xl text-pretty text-lg text-muted-foreground [animation-delay:150ms]">
              I build production-grade applications where LLMs meet robust
              infrastructure. Specialized in high-throughput AI pipelines and
              reactive user interfaces.
            </p>
            <div className="animate-in mt-10 flex gap-4 [animation-delay:300ms]">
              <Link
                to="/projects"
                className="flex h-12 items-center border border-foreground bg-foreground px-8 font-display text-[11px] font-bold uppercase tracking-widest text-background transition-all hover:bg-transparent hover:text-foreground"
              >
                View Case Studies
              </Link>
              <Link
                to="/contact"
                className="group flex h-12 items-center gap-3 border border-border px-8 font-display text-[11px] font-bold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Portrait Area */}
          <div className="animate-in relative lg:col-span-5 [animation-delay:200ms]">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-secondary">
              <img
                src={portrait.url}
                alt="Portrait of the developer"
                className="absolute inset-0 z-10 h-full w-full object-cover object-top grayscale"
              />
              {/* Scanline Effect */}
              <div className="animate-scan absolute left-0 top-0 z-20 h-px w-full bg-accent shadow-[0_0_15px_var(--color-accent)]" />
              <div className="absolute bottom-4 left-4 z-30 font-display text-[10px] text-muted-foreground opacity-50">
                ID: 8829-XQ {"//"} SECTOR 7
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-accent/30" />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mt-48">
          <div className="flex items-center justify-between border-b border-border pb-8">
            <h2 className="font-display text-2xl font-bold tracking-tighter">
              SELECTED ARTIFACTS <span className="text-accent">[01]</span>
            </h2>
            <Link
              to="/projects"
              className="font-display text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              View Archive
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-2 font-display text-xl font-bold">{project.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
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
          </div>
        </section>

        {/* Stack / Technical Skills */}
        <section className="mt-48">
          <div className="grid grid-cols-1 border border-border lg:grid-cols-4">
            <div className="border-b border-border p-12 lg:border-b-0 lg:border-r">
              <h2 className="mb-8 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Core Stack
              </h2>
              <ul className="space-y-4 font-display text-xs">
                {["TypeScript / Node", "Rust / Go", "React / Next.js", "Postgres / Redis"].map(
                  (item, i) => (
                    <li
                      key={item}
                      className="flex justify-between border-b border-border/50 pb-2"
                    >
                      <span>{item}</span>
                      <span className="text-accent">0{i + 1}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="border-b border-border p-12 lg:border-b-0 lg:border-r">
              <h2 className="mb-8 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                AI Engineering
              </h2>
              <ul className="space-y-4 font-display text-xs">
                {["PyTorch / Scikit", "RAG Architecture", "LLM Fine-tuning", "Vector Databases"].map(
                  (item, i) => (
                    <li
                      key={item}
                      className="flex justify-between border-b border-border/50 pb-2"
                    >
                      <span>{item}</span>
                      <span className="text-accent">0{i + 1}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="col-span-1 bg-accent/5 p-12 lg:col-span-2">
              <h2 className="mb-8 font-display text-sm font-bold uppercase tracking-widest text-accent">
                Philosophy
              </h2>
              <p className="font-display text-2xl font-bold leading-tight tracking-tight text-foreground/90">
                "I don't just prompt AI; I engineer the substrates that allow
                artificial intelligence to solve complex human problems with 99.9%
                reliability."
              </p>
              <div className="mt-12 flex items-center gap-4">
                <div className="h-px flex-1 bg-accent/20" />
                <span className="font-display text-[10px] uppercase tracking-widest text-accent">
                  Architecting the future
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-48 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold tracking-tighter">
              READY TO BUILD?
            </h2>
            <p className="mt-6 text-muted-foreground">
              I'm currently taking on selective collaborations. Let's discuss your
              technical roadmap.
            </p>
            <form className="mt-12 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  className="h-14 border border-border bg-transparent px-4 font-display text-xs tracking-widest outline-none focus:border-accent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="h-14 border border-border bg-transparent px-4 font-display text-xs tracking-widest outline-none focus:border-accent"
                />
              </div>
              <textarea
                placeholder="Project Details"
                aria-label="Project Details"
                className="h-40 w-full border border-border bg-transparent p-4 font-display text-xs tracking-widest outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="h-14 w-full bg-accent font-display text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground transition-colors hover:bg-accent/80"
              >
                Initialize Transmission
              </button>
            </form>

            <div className="mt-24 flex justify-center gap-12 font-display text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">
                Github
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                LinkedIn
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                X / Twitter
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                CV.PDF
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
