import { createFileRoute } from "@tanstack/react-router";

import portrait from "@/assets/portrait.asset.json";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DEV.CORE" },
      {
        name: "description",
        content:
          "Full-stack AI engineer: background, engineering philosophy, and the systems mindset behind production-grade AI products.",
      },
      { property: "og:title", content: "About — DEV.CORE" },
      {
        property: "og:description",
        content:
          "Background and engineering philosophy of a full-stack AI engineer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2026",
    title: "Independent AI Engineer",
    description:
      "Consulting on LLM-powered products and high-throughput inference infrastructure.",
  },
  {
    year: "2024",
    title: "Staff Engineer, AI Platforms",
    description:
      "Led a team shipping retrieval and agent systems serving millions of daily queries.",
  },
  {
    year: "2021",
    title: "Full-Stack Engineer, Fintech",
    description:
      "Built transaction systems with strict correctness requirements and zero-downtime deploys.",
  },
  {
    year: "2018",
    title: "First Production System",
    description:
      "Shipped the first of many systems that had to keep working long after launch day.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30">
      <div className="bg-grid-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.03]" />

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24">
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-block border border-accent/20 bg-accent/5 px-3 py-1">
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-accent">
                Dossier
              </span>
            </div>
            <h1 className="animate-in text-balance font-display text-5xl font-extrabold tracking-tighter sm:text-7xl">
              THE <span className="text-muted-foreground">OPERATOR</span>
            </h1>
            <p className="animate-in mt-8 max-w-xl text-pretty text-lg text-muted-foreground [animation-delay:150ms]">
              I'm a full-stack engineer who treats AI as infrastructure, not magic.
              For the better part of a decade I've built systems where the model is
              one component in a larger machine that has to be observable, testable,
              and boring in the best way.
            </p>
            <p className="animate-in mt-6 max-w-xl text-pretty text-lg text-muted-foreground [animation-delay:250ms]">
              My work sits at the seam between probabilistic models and
              deterministic engineering: retrieval pipelines with eval gates,
              agents with hard failure modes, interfaces that make machine output
              trustworthy.
            </p>
          </div>

          <div className="animate-in relative lg:col-span-5 [animation-delay:200ms]">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-secondary">
              <img
                src={portrait.url}
                alt="Portrait of the developer"
                className="absolute inset-0 z-10 h-full w-full object-cover object-top grayscale"
              />
              <div className="animate-scan absolute left-0 top-0 z-20 h-px w-full bg-accent shadow-[0_0_15px_var(--color-accent)]" />
              <div className="absolute bottom-4 left-4 z-30 font-display text-[10px] text-muted-foreground opacity-50">
                ID: 8829-XQ {"//"} SECTOR 7
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-accent/30" />
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-48">
          <div className="flex items-center justify-between border-b border-border pb-8">
            <h2 className="font-display text-2xl font-bold tracking-tighter">
              SERVICE RECORD <span className="text-accent">[02]</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((entry) => (
              <div
                key={entry.year}
                className="bg-background p-8 transition-colors hover:bg-secondary"
              >
                <span className="font-display text-[10px] font-bold text-accent">
                  {entry.year}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold">{entry.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy block */}
        <section className="mt-48">
          <div className="border border-border bg-accent/5 p-12">
            <h2 className="mb-8 font-display text-sm font-bold uppercase tracking-widest text-accent">
              Philosophy
            </h2>
            <p className="max-w-4xl font-display text-2xl font-bold leading-tight tracking-tight text-foreground/90 sm:text-3xl">
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
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
