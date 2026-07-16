import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { buildMeta, jsonLd, breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/clients")({
  head: () => {
    const m = buildMeta({
      path: "/clients",
      title: "Clients and Engagements - Ambesh Tiwari",
      description:
        "Selected engagements across India, UAE and Africa. Corporate teams, professional bodies, and government programs served by Ambesh Tiwari.",
      keywords:
        "Ambesh Tiwari clients, corporate AI training clients India, Landmark Group AI, ICSI AI training, Ministry of Finance Tanzania",
    });
    return {
      ...m,
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Clients", path: "/clients" },
          ]),
        ),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Clients and Engagements",
          url: `${SITE_URL}/clients`,
        }),
      ],
    };
  },
  component: ClientsPage,
});

const heroStats = [
  { v: "50+", l: "Organisations served" },
  { v: "5,000+", l: "Professionals trained" },
  { v: "11+", l: "Industries" },
  { v: "9.5", l: "Average NPS" },
];

const engagements = [
  { name: "Landmark Group", location: "Dubai, UAE", format: "Corporate AI and automation training", tag: "Retail" },
  { name: "ICSI", location: "Delhi, India", format: "AI session for CS professionals", tag: "Professional body" },
  { name: "Ministry of Finance", location: "Dar es Salaam, Tanzania", format: "Government AI adoption program", tag: "Government" },
  { name: "Indian School of Business", location: "Hyderabad, India", format: "AI for executives session", tag: "Business school" },
];

const industries = [
  "Fintech", "SaaS", "Manufacturing", "Retail", "FMCG", "Edtech",
  "Logistics", "Real estate", "Legal", "Consulting", "Media",
];

const logos = [
  "Landmark Group", "ICSI Delhi", "Ministry of Finance, Tanzania",
  "Indian School of Business", "Automation School", "LinkAssist",
];

const testimonials = [
  { quote: "The team stopped asking which tool to use and started building workflows around their own work.", name: "Head of People Operations", role: "Enterprise team" },
  { quote: "Ambesh helped our leadership see where AI actually belongs in the business.", name: "Business Leader", role: "Mid-market company" },
  { quote: "Practical, calm and zero hype. The team left with things they could keep using.", name: "Marketing Leader", role: "Consumer brand" },
];

function ClientsPage() {
  return (
    <>
      {/* HERO */}
      <section className="premium-canvas relative isolate overflow-hidden">
        <div className="container-edit pt-20 pb-16 md:pt-28 md:pb-20">
          <Reveal><p className="eyebrow">Clients</p></Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4rem]">
              Recognisable rooms.{" "}
              <span className="font-serif italic font-medium">Real teams. Quiet adoption.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-ink-soft md:text-xl">
              A selection of the organisations Ambesh has worked with across
              India, UAE and Africa. Some engagements are training. Some are
              Business OS builds. All of them share the same goal: teams that
              actually use what gets installed.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((s, i) => (
              <Reveal key={s.l} delay={i * 60}>
                <div className="h-full bg-canvas p-6 transition-colors hover:bg-sand">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">{s.v}</p>
                  <p className="mt-2 text-xs text-ink-muted">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="relative border-y border-rule bg-canvas py-12">
        <div className="container-edit">
          <Marquee
            fade={32}
            speed={55}
            items={logos.map((l) => (
              <span key={l} className="font-display text-lg font-bold tracking-tight text-ink/55 sm:text-xl">
                {l}
              </span>
            ))}
          />
        </div>
      </section>

      {/* NAMED ENGAGEMENTS */}
      <section className="relative overflow-hidden bg-sand py-24 md:py-28">
        <div className="tex-grid tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">Selected engagements</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              A few of the rooms.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {engagements.map((e) => (
              <Reveal key={e.name}>
                <article className="group flex h-full flex-col rounded-2xl border border-rule bg-canvas p-7 transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex w-fit items-center rounded-full border border-rule bg-sand px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                    {e.tag}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.02em] text-ink">
                    {e.name}
                  </h3>
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-ink-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {e.location}
                  </p>
                  <div className="mt-auto border-t border-rule pt-5">
                    <p className="text-sm text-ink-soft">{e.format}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden bg-canvas py-24 md:py-28">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              11 industries. One playbook.
            </h2>
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {industries.map((i) => (
                <span key={i} className="inline-flex items-center rounded-full border border-rule bg-canvas px-5 py-2.5 text-sm font-medium text-ink hover:-translate-y-0.5 hover:border-ink">
                  {i}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-sand py-24 md:py-28">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">In their words</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              The strongest feedback lands{" "}
              <span className="font-serif italic font-medium">weeks after the room.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <figure className="flex h-full flex-col rounded-2xl border border-rule bg-canvas p-7">
                  <Quote className="h-6 w-6" style={{ color: "var(--accent)" }} />
                  <blockquote className="mt-5 flex-1 text-[15px] leading-[1.65] text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-rule pt-5">
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-ink-muted">
              <Star className="h-4 w-4" style={{ fill: "var(--accent)", color: "var(--accent)" }} />
              <span>Average NPS <span className="font-semibold text-ink">9.5</span> across 150+ engagements.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-canvas">
        <div className="container-edit relative py-24 md:py-28">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-canvas/50">
              Join the list
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-canvas md:text-6xl">
              Bring the Operating System, or the training, to your team.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/contact?service=diagnostic" className="inline-flex h-14 items-center gap-2 rounded-full bg-canvas px-8 text-base font-semibold text-ink hover:-translate-y-0.5">
                Book a Business Systems Diagnostic <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/training" className="inline-flex h-14 items-center gap-2 rounded-full border border-canvas/20 px-8 text-base font-semibold text-canvas hover:bg-canvas/10">
                See AI Training
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
