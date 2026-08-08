import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Users,
  Workflow,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buildMeta, jsonLd, breadcrumbSchema, SITE_URL } from "@/lib/seo";
import { whatsappUrl, WA_MESSAGES } from "@/lib/wa";

export const Route = createFileRoute("/training")({
  head: () => {
    const m = buildMeta({
      path: "/training",
      title: "Corporate AI Training | India, UAE, Africa | Ambesh",
      description:
        "Hands-on corporate AI training for leadership, departments and professionals. Three formats. 5,000+ trained across 50+ organisations.",
      keywords:
        "corporate AI training India, leadership AI workshop, department AI training, AI workflow bootcamp, Ambesh Tiwari training",
    });
    return {
      ...m,
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Corporate AI Training",
          provider: { "@type": "Person", name: "Ambesh Tiwari", url: SITE_URL },
          description:
            "Hands-on AI workshops for leadership, departments and professionals. Built around real work, not generic demos.",
          url: `${SITE_URL}/training`,
        }),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Training", path: "/training" },
          ]),
        ),
      ],
    };
  },
  component: TrainingPage,
});

const heroStats = [
  { v: "5,000+", l: "Professionals trained" },
  { v: "50+", l: "Organisations served" },
  { v: "150+", l: "Sessions and engagements" },
  { v: "11+", l: "Industries delivered in" },
  { v: "9.5", l: "Average NPS rating" },
];

const formats = [
  {
    icon: GraduationCap,
    title: "Leadership AI Workshop",
    tagline: "For CXOs, founders and senior teams.",
    body: "A focused session that gives leadership direction, risk clarity, and a 90-day view of where AI fits in the business.",
    bullets: [
      "Half-day or full-day format",
      "Leadership only, decision-focused",
      "AI opportunity and risk framing",
      "Leaves with a 90-day adoption view",
    ],
  },
  {
    icon: Users,
    title: "Department AI Workshop",
    tagline: "For sales, marketing, HR, operations, finance and support teams.",
    body: "Practical workshops that put AI inside the daily work of a specific department. Participants practise on their own tasks.",
    bullets: [
      "Built around the department's real workflows",
      "Live practice on actual tools and tasks",
      "Department-specific use cases",
      "Post-session resource kit",
    ],
  },
  {
    icon: Workflow,
    title: "AI Workflow Bootcamp",
    tagline: "For teams that need deeper hands-on practice.",
    body: "A longer engagement covering prompts, workflows, automation and internal use cases your team will keep using.",
    bullets: [
      "Multi-day, hands-on format",
      "Prompts, workflows and automation depth",
      "Internal use cases built during the session",
      "Optional roadmap for next steps",
    ],
  },
];

const engagements = [
  {
    name: "Landmark Group",
    location: "Dubai",
    format: "Corporate AI and automation training",
    tag: "Retail",
  },
  {
    name: "ICSI",
    location: "Delhi",
    format: "AI session for CS professionals",
    tag: "Professional body",
  },
  {
    name: "Ministry of Finance",
    location: "Dar es Salaam, Tanzania",
    format: "Government AI adoption program",
    tag: "Government",
  },
];

const outcomes = [
  "AI workflows for their actual work",
  "Better prompts for research, writing, analysis and decision-making",
  "Clarity on where AI helps and where it does not",
  "Practical use cases for their department",
  "Resource kit for continued practice",
  "Optional roadmap for deeper automation",
];

const themes = [
  {
    quote: "It was practical, not theoretical.",
    body: "Participants repeatedly note that the session focused on their real work rather than generic demos. The strongest sessions are the ones where people leave having already used AI on something they care about.",
  },
  {
    quote: "Everyone in the room could follow along.",
    body: "Sponsors often comment on the range of participants, from nervous first-time users to confident early adopters, and how both groups leave engaged. The training is designed for mixed-skill rooms.",
  },
  {
    quote: "We left with things we could use immediately.",
    body: "The most common pattern after a session is teams applying specific prompts, workflows or tools within the first week. Whether that adoption sticks depends on leadership follow through, which is why a strategy sprint exists alongside training.",
  },
];

const industries = [
  "Fintech",
  "SaaS",
  "Manufacturing",
  "Retail",
  "FMCG",
  "Edtech",
  "Logistics",
  "Real estate",
  "Legal",
  "Consulting",
  "Media",
];

function TrainingPage() {
  return (
    <div className="relative w-full bg-canvas min-h-screen" style={{ backgroundImage: "none" }}>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative pt-10 pb-20 md:pt-14 md:pb-24">
          <Reveal eager>
            <p className="eyebrow eyebrow-orange flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5" /> Training
            </p>
          </Reveal>
          <Reveal delay={80} eager>
            <h1 className="mt-5 max-w-4xl font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink dark:text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
              Corporate AI training that turns{" "}
              <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                confusion into daily use.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={150} eager>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-ink-soft md:text-xl">
              Hands-on AI workshops for leadership teams, departments and professionals who need to
              use AI inside real work, not just hear about it.
            </p>
          </Reveal>
          <Reveal delay={220} eager>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                search={{ service: "training" }}
                className="btn-premium inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request a Corporate Training
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="#formats"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-canvas/80 px-6 text-[15px] font-semibold text-ink backdrop-blur transition-all hover:border-ink/40 hover:bg-canvas"
              >
                View Training Formats
              </a>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {heroStats.map((s, i) => (
              <Reveal key={s.l} delay={60 + i * 60} eager>
                <div className="h-full custom-theme-card-static p-6 rounded-2xl">
                  <p className="stats-value font-display text-2xl font-extrabold tracking-tight text-gradient-brand animate-gradient md:text-3xl">
                    {s.v}
                  </p>
                  <p className="stats-label mt-2 text-xs text-ink-muted">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section id="formats" className="relative overflow-hidden bg-canvas py-14 md:py-20">
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <Users className="h-3.5 w-3.5" /> Formats
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
                Three training formats.{" "}
                <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                  One practical method.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-lg text-ink-soft">
                Every engagement is shaped to the team in the room, but all of them follow the same
                principle: people must leave using AI, not just hearing about it.
              </p>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {formats.map((p, i) => {
              return (
                <Reveal key={p.title} delay={100}>
                  <div className="custom-theme-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-8">
                    <div
                      className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                      style={{ background: "var(--accent-soft)" }}
                      aria-hidden
                    />
                    <div className="icon-box flex h-12 w-12 items-center justify-center rounded-xl border border-rule">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-7 font-display text-[1.65rem] font-extrabold tracking-[-0.025em] leading-[1.15] text-ink md:text-[1.85rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-serif text-base italic text-ink-soft">{p.tagline}</p>
                    <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">{p.body}</p>
                    <ul className="mt-6 space-y-2.5">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: "var(--accent)" }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* NAMED ENGAGEMENTS */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-20">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Star className="h-3.5 w-3.5" /> Named engagements
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              Recognisable rooms.{" "}
              <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                Real teams.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {engagements.map((e) => (
              <Reveal key={e.name}>
                <article className="custom-theme-card group flex h-full flex-col rounded-2xl p-7">
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

      {/* OUTCOMES */}
      <section className="relative overflow-hidden bg-canvas py-14 md:py-20">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5" /> After the training
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              Your team should leave with{" "}
              <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                things they can use.
              </span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {outcomes.map((o, i) => (
              <Reveal key={o} delay={60}>
                <div className="custom-theme-card-static flex items-start gap-4 rounded-2xl p-5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <p className="text-base text-ink">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-20">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Feedback
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              The feedback teams share,{" "}
              <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                session after session.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {themes.map((t) => (
              <Reveal key={t.quote}>
                <figure className="custom-theme-card-static flex h-full flex-col rounded-2xl p-7">
                  <blockquote className="font-serif text-xl italic leading-snug text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-rule pt-5 text-[15px] leading-[1.65] text-ink-soft">
                    {t.body}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-ink-muted">
              <Star className="h-4 w-4" style={{ fill: "var(--accent)", color: "var(--accent)" }} />
              <span>
                Average NPS rating <span className="font-semibold text-ink">9.5</span> across 150+
                sessions and engagements.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden bg-canvas py-14 md:py-20">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Industries served
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              11 industries.{" "}
              <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                One playbook.
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="mt-12 flex flex-wrap gap-2.5">
              {industries.map((i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-rule bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-sm"
                >
                  {i}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-dark relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--accent)" }}
          aria-hidden
        />
        <div className="container-edit relative py-14 md:py-20">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-white/50">
              <Sparkles className="mr-2 inline h-3 w-3" />
              Bring training to your team
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] text-white md:text-7xl">
              Bring practical AI training{" "}
              <span className="font-serif italic font-medium text-gradient-brand">
                to your team.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-white/70 md:text-xl">
              Share your team size, department and goal. We will suggest the right format after a
              short discovery call.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ service: "training" }}
                className="btn-premium group inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-semibold text-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request a Training
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <a
                href={whatsappUrl(WA_MESSAGES.training)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-white/20 px-8 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] active:scale-[0.98]"
              >
                WhatsApp Ambesh
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
