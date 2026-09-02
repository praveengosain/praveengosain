import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DEV.CORE" },
      {
        name: "description",
        content:
          "Start a conversation about AI engineering, full-stack builds, or infrastructure work.",
      },
      { property: "og:title", content: "Contact — DEV.CORE" },
      {
        property: "og:description",
        content: "Start a conversation about AI engineering and full-stack builds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30">
      <div className="bg-grid-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.03]" />

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24">
        <section className="text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 inline-block border border-accent/20 bg-accent/5 px-3 py-1">
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-accent">
                Uplink
              </span>
            </div>
            <h1 className="animate-in font-display text-5xl font-extrabold tracking-tighter sm:text-6xl">
              READY TO <span className="text-muted-foreground">BUILD?</span>
            </h1>
            <p className="animate-in mt-6 text-muted-foreground [animation-delay:150ms]">
              I'm currently taking on selective collaborations. Let's discuss your
              technical roadmap.
            </p>

            {sent ? (
              <div className="animate-in mt-12 border border-accent/30 bg-accent/5 p-12">
                <div className="font-display text-[10px] font-bold uppercase tracking-widest text-accent">
                  Transmission received
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Your message is in the queue. Expect a response within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="mt-12 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    required
                    className="h-14 border border-border bg-transparent px-4 font-display text-xs tracking-widest outline-none focus:border-accent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    required
                    className="h-14 border border-border bg-transparent px-4 font-display text-xs tracking-widest outline-none focus:border-accent"
                  />
                </div>
                <textarea
                  placeholder="Project Details"
                  aria-label="Project Details"
                  required
                  className="h-40 w-full border border-border bg-transparent p-4 font-display text-xs tracking-widest outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="h-14 w-full bg-accent font-display text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground transition-colors hover:bg-accent/80"
                >
                  Initialize Transmission
                </button>
              </form>
            )}

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
