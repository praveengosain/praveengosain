import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DEV.CORE" },
      {
        name: "description",
        content:
          "AI engineering services: LLM orchestration, RAG architecture, full-stack product builds, and performance-hardened infrastructure.",
      },
      { property: "og:title", content: "Services — DEV.CORE" },
      {
        property: "og:description",
        content:
          "AI engineering services: LLM orchestration, RAG architecture, and full-stack product builds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "SVC-01",
    title: "AI Product Engineering",
    description:
      "End-to-end build of LLM-powered products — from prompt architecture and retrieval pipelines to hardened production APIs.",
    items: ["RAG Architecture", "LLM Orchestration", "Eval Harnesses"],
  },
  {
    id: "SVC-02",
    title: "Full-Stack Development",
    description:
      "Reactive interfaces on typed backends. Design systems, server functions, and databases wired for correctness from day one.",
    items: ["React / Next.js", "TypeScript / Node", "Postgres / Redis"],
  },
  {
    id: "SVC-03",
    title: "Infrastructure & Performance",
    description:
      "Latency budgets, edge caching, and observability. Systems that stay fast and debuggable under real traffic.",
    items: ["Edge Deployment", "Tracing & Metrics", "Load Hardening"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30">
      <div className="bg-grid-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.03]" />

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24">
        <section>
          <div className="mb-6 inline-block border border-accent/20 bg-accent/5 px-3 py-1">
            <span className="font-display text-[10px] font-bold uppercase tracking-widest text-accent">
              Capabilities
            </span>
          </div>
          <h1 className="animate-in text-balance font-display text-5xl font-extrabold tracking-tighter sm:text-7xl">
            SERVICES <span className="text-muted-foreground">&</span> SCOPE
          </h1>
          <p className="animate-in mt-8 max-w-xl text-pretty text-lg text-muted-foreground [animation-delay:150ms]">
            Three engagement tracks. Each scoped in weeks, delivered with tests,
            docs, and a handover that doesn't require me to be around.
          </p>
        </section>

        <section className="mt-24 grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-background p-10 transition-colors hover:bg-secondary"
            >
              <span className="font-display text-[10px] font-bold text-accent">
                {service.id}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tighter">
                {service.title}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-10 space-y-3 font-display text-xs">
                {service.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex justify-between border-b border-border/50 pb-2"
                  >
                    <span>{item}</span>
                    <span className="text-accent">0{i + 1}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-32 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tighter">
            READY TO BUILD?
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex h-12 items-center border border-foreground bg-foreground px-8 font-display text-[11px] font-bold uppercase tracking-widest text-background transition-all hover:bg-transparent hover:text-foreground"
          >
            Start a Project
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
