import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Star,
  GraduationCap,
  Workflow,
  Compass,
  BookOpen,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { buildMeta, jsonLd, breadcrumbSchema, SITE_URL } from "@/lib/seo";


export const Route = createFileRoute("/")({
  head: () => {
    const m = buildMeta({
      path: "/",
      title: "Ambesh Tiwari | Business Operating Systems Consultant and AI Trainer",
      description:
        "Ambesh Tiwari helps founder-led businesses build SOPs, workflows, reporting systems and AI-enabled execution. Consulting and training led by Ambesh, with implementation from BDA Technologies.",
      keywords:
        "Business Systems Consultant, Business Operating System, SOPs and workflows, founder dependency, corporate AI training, Ambesh Tiwari, BDA Technologies",
    });
    return {
      ...m,
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Ambesh Tiwari",
          url: SITE_URL,
          inLanguage: "en-IN",
        }),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Ambesh Tiwari - Business Systems Consulting and AI Training",
          url: SITE_URL,
          areaServed: ["India", "United Arab Emirates", "Tanzania", "Africa"],
          serviceType: [
            "Business Operating Systems consulting",
            "SOPs and workflow design",
            "Corporate AI training",
          ],
          provider: { "@type": "Person", name: "Ambesh Tiwari" },
        }),
        jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }])),
      ],
    };
  },
  component: HomePage,
});

const heroStats = [
  { v: "5,000+", l: "Professionals trained" },
  { v: "150+", l: "Sessions and engagements" },
  { v: "11+", l: "Industries delivered in" },
  { v: "9.5/10", l: "Average session rating" },
];

const proofLogos = [
  "Landmark Group",
  "ICSI Delhi",
  "Ministry of Finance, Tanzania",
  "Indian School of Business",
];
const mediaLogos = ["Thrive Global", "Navbharat Times", "DailyHunt", "NewsTrack"];

const problems = [
  "You still approve too many small decisions",
  "Work is spread across WhatsApp, spreadsheets and different tools",
  "Follow-ups depend on memory",
  "Reports arrive late or do not show what needs attention",
];

const services = [
  {
    icon: Compass,
    eyebrow: "01 - Diagnose and Design",
    title: "Understand the real problem.",
    desc: "Ambesh studies how the business works today, where tasks get delayed, and where the team still depends on you.",
    bullets: [
      "Founder and leadership discussions",
      "Process and workflow mapping",
      "Bottleneck and dependency check",
      "Reporting and accountability design",
    ],
  },
  {
    icon: Workflow,
    eyebrow: "02 - Document and Train",
    title: "Design the right systems.",
    desc: "Ambesh helps convert the design into practical SOPs, team routines and training so people know how the business should run.",
    bullets: [
      "SOP structure and priorities",
      "Ownership and escalation rules",
      "Review and reporting rhythms",
      "Leadership and department training",
    ],
  },
  {
    icon: GraduationCap,
    eyebrow: "03 - Implement with BDA Technologies",
    title: "Train and implement.",
    desc: "When technical implementation is needed, the BDA Technologies team builds the dashboards, workflows, automations and AI tools designed in the engagement.",
    bullets: [
      "Dashboards and reporting systems",
      "Workflow automation and integrations",
      "AI assistants for daily work",
      "Documentation, handover and support",
    ],
  },
] as const;

const steps = [
  { n: "01", t: "Audit", d: "Map how your business runs today. Workflows, bottlenecks, tools and decision points." },
  { n: "02", t: "Design", d: "Create the blueprint. Clear SOPs, responsibilities, reports and review rhythms." },
  { n: "03", t: "Build", d: "Implement dashboards, workflows, automations, SOPs and AI assistants where needed." },
  { n: "04", t: "Adopt", d: "Train the team and install review rhythms so the system becomes part of daily work." },
];

const trainingPhotos = [
  { tag: "Workshop", caption: "Landmark Group, Dubai - Corporate AI and automation training" },
  { tag: "Professional body", caption: "ICSI, Delhi - AI session for CS professionals" },
  { tag: "Government", caption: "Ministry of Finance, Tanzania - Government AI enablement" },
];

const insideExamples = [
  { tag: "Illustrative example", title: "Founder dashboard", desc: "One screen that shows the founder what is on track, what is stuck and what needs a decision this week." },
  { tag: "Illustrative example", title: "Weekly management report", desc: "A short weekly report that replaces the endless status calls. Same format every week." },
  { tag: "Illustrative example", title: "Department scorecard", desc: "Each department knows the three or four numbers they own, and how they are trending." },
  { tag: "Illustrative example", title: "SOP structure", desc: "SOPs organised by role and process, so a new hire can find what they need without asking you." },
  { tag: "Illustrative example", title: "Task escalation workflow", desc: "Clear rules for what gets escalated, to whom and when. No more surprises landing on your desk." },
  { tag: "Illustrative example", title: "AI-assisted reporting workflow", desc: "AI helps prepare the first draft of reports, briefs and summaries so the team spends time on decisions, not typing." },
];

const credibility = [
  "Business Systems Consultant for founder-led companies",
  "Founder of BDA Technologies",
  "Author of Accelerate with AI",
  "Host of Inspire with Ambesh podcast",
  "Trained 5,000+ professionals across 50+ organisations",
  "Works with teams across India, UAE and Africa",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="premium-canvas relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-40" aria-hidden />

        <div className="container-edit pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-canvas px-3 py-1 text-xs text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                  Business Systems Consultant · AI Trainer · Founder of BDA Technologies
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                  Your business should run on{" "}
                  <span className="relative inline-block">
                    <span className="font-serif italic font-medium text-ink">systems,</span>
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full" style={{ background: "var(--accent)" }} />
                  </span>{" "}
                  not stress.
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-ink-soft md:text-xl">
                  I help founder-led businesses build clear SOPs, workflows and
                  reporting systems so the team can work without waiting for the
                  founder every day. I also help teams use AI in their daily work.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-6 max-w-2xl text-sm text-ink-muted">
                  Founder of <span className="font-semibold text-ink">BDA Technologies</span>.
                  Author of <span className="font-semibold text-ink">Accelerate with AI</span>.
                  Builder of <span className="font-semibold text-ink">LinkAssist</span>.
                  AI trainer to <span className="font-semibold text-ink">5,000+</span> professionals.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-10 flex flex-col items-start gap-3">
                  <a
                    href="/contact?service=diagnostic"
                    className="btn-premium group inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book a Business Systems Diagnostic
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink"
                  >
                    See how the Business Operating System works
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="lg:col-span-5">
              <div className="relative">
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-rule shadow-lift">
                  <div className="absolute inset-0 bg-black" />
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                  <img
                    src="https://www.automationschool.in/AmbeshImage.png"
                    alt="Ambesh Tiwari"
                    className="absolute bottom-0 left-0 w-full h-auto object-contain object-bottom scale-125 translate-y-8 transition-transform duration-500 group-hover:scale-130 group-hover:translate-y-7 origin-bottom"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/0" aria-hidden />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                      
                      <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                    </div>
                    <div>
                      <div className="h-px w-16 bg-white/40" />
                      <p className="mt-4 font-serif text-xl italic text-white/90">
                        &ldquo;A business that only runs when the founder pushes it, is a job with extra steps.&rdquo;
                      </p>
                      <p className="mt-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white">
                        Ambesh Tiwari
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl" style={{ background: "var(--accent-soft)" }} aria-hidden />
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="h-full bg-canvas p-6 transition-colors hover:bg-sand">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">{s.v}</p>
                  <p className="mt-2 text-xs text-ink-muted">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="relative border-y border-rule bg-canvas py-14">
        <div className="tex-grid-fine tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit">
          <Reveal>
            <p className="text-center text-sm text-ink-muted">
              Trusted by teams at leading organisations across India, UAE and Africa.
            </p>
          </Reveal>
          <div className="mt-8 space-y-6">
            <Marquee
              fade={32}
              speed={55}
              items={proofLogos.map((l) => (
                <span key={l} className="font-display text-lg font-bold tracking-tight text-ink/55 transition-colors hover:text-ink sm:text-xl">
                  {l}
                </span>
              ))}
            />
            <Marquee
              fade={32}
              speed={65}
              items={mediaLogos.map((l) => (
                <span key={l} className="font-serif text-base italic text-ink-muted/70 transition-colors hover:text-ink sm:text-lg">
                  {l}
                </span>
              ))}
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative overflow-hidden bg-sand py-14 md:py-16">
        <div className="tex-diagonal pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-5">
              <p className="eyebrow">The problem</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
                Does your business still{" "}
                <span className="font-serif italic font-medium">depend too much on you?</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div className="space-y-4 text-lg leading-[1.65] text-ink-soft">
                <p>
                  Your team may be working hard, but you still have to ask for
                  updates, solve repeated problems and approve too many decisions.
                </p>
                <p>
                  AI tools may be available, but they are not yet part of the
                  team's daily work.
                </p>
                <p className="text-ink">
                  This is usually not only a people problem. It is a systems problem.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 rounded-2xl border border-rule bg-canvas p-4 text-sm text-ink-soft">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOLUTION / SERVICES */}
      <section id="services" className="relative overflow-hidden bg-canvas py-14 md:py-20">
        <div className="tex-dots-soft tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="eyebrow">How Ambesh helps</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
                Build a business that is{" "}
                <span className="font-serif italic font-medium">easier to manage.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-lg text-ink-soft">
                Three stages of one coordinated engagement. Ambesh leads the
                thinking, design and training. BDA Technologies handles
                technical implementation when required.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-canvas p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-lift">
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: "var(--accent-soft)" }} aria-hidden />
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rule" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">{s.eyebrow}</span>
                  </div>
                  <h3 className="mt-7 font-display text-[1.65rem] font-extrabold tracking-[-0.025em] leading-[1.15] text-ink md:text-[1.85rem]">{s.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">{s.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 max-w-3xl text-sm text-ink-muted">
              You can hire Ambesh for consulting and training without committing
              to a large technology project. BDA Technologies becomes involved
              when implementation is genuinely required.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8">
              <a
                href="/contact?service=diagnostic"
                className="btn-premium group inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Business Systems Diagnostic
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUR-STEP METHOD */}
      <section className="relative bg-sand py-14 md:py-20">
        <div className="tex-grid tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">The method</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              Diagnose. Design. Build.{" "}
              <span className="font-serif italic font-medium">Adopt.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              My approach is simple: diagnose the operating chaos, design the
              right system, implement it with your team, and train people to
              actually use it.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="h-full rounded-2xl border border-rule bg-canvas p-7 transition-all hover:-translate-y-1 hover:shadow-lift">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">Step {s.n}</p>
                  <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink">{s.t}</h3>
                  <p className="mt-3 text-sm leading-[1.65] text-ink-soft">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI TRAINING IN ACTION */}
      <section className="relative overflow-hidden bg-canvas py-14 md:py-20">
        <div className="tex-dots-soft tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">AI Training</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              Practical AI training for teams that need{" "}
              <span className="font-serif italic font-medium">adoption, not hype.</span>
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg text-ink-soft">
              <p>
                I help leadership teams and employees use AI for research,
                content, sales, operations, reporting and daily productivity.
              </p>
              <p>
                The goal is not just to show new tools. The goal is to help
                people use AI safely and consistently in their actual work.
              </p>
              <p className="text-sm text-ink-muted">
                AI Training can be booked as a separate program or included in
                a wider Business Systems engagement.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trainingPhotos.map((p, i) => (
              <Reveal key={p.caption} delay={i * 100}>
                <figure className="group overflow-hidden rounded-2xl border border-rule bg-canvas">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(135deg, oklch(0.22 0.04 265) 0%, oklch(0.16 0.012 265) 100%)" }} />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-full bg-canvas/95 px-3 py-1 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-ink">{p.tag}</span>
                      <span className="font-display text-2xl font-extrabold text-canvas/30">0{i + 1}</span>
                    </div>
                  </div>
                  <figcaption className="border-t border-rule px-5 py-4 text-sm text-ink-soft">{p.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10">
              <Link to="/training" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:opacity-70">
                Explore AI Training <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT THIS LOOKS LIKE INSIDE A REAL BUSINESS */}
      <section className="relative overflow-hidden bg-sand py-14 md:py-20">
        <div className="tex-grid-fine tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">Inside the engagement</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              What this looks like inside a{" "}
              <span className="font-serif italic font-medium">real business.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              A Business Operating System is the set of SOPs, workflows,
              reports, responsibilities and review routines that help a company
              run in a clear and consistent way. Below are the kinds of
              deliverables that typically get created.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {insideExamples.map((e, i) => (
              <Reveal key={e.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-rule bg-canvas p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex items-center rounded-full border border-rule bg-sand px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-muted">
                    {e.tag}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm leading-[1.6] text-ink-soft">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BDA TECHNOLOGIES CLARITY */}
      <section className="relative overflow-hidden bg-canvas py-14 md:py-20">
        <div className="tex-dots-soft tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">The implementation team</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
              Ambesh leads the thinking.{" "}
              <span className="font-serif italic font-medium">BDA Technologies builds the system.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Ambesh leads the diagnostic, process design, SOP planning and
              team training. When the business needs dashboards, automation,
              integrations or AI tools, the BDA Technologies team handles the
              implementation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-rule bg-canvas p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rule" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-ink">Led by Ambesh Tiwari</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">
                  Diagnostic, leadership consulting, process design, SOP
                  architecture, AI strategy, team training and major reviews.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-rule bg-canvas p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rule" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-ink">Implemented by BDA Technologies</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">
                  Dashboards, workflows, automations, integrations, AI systems,
                  documentation, handover and optimisation.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-8 flex flex-col items-start gap-3">
              <p className="text-sm text-ink-muted">
                You get one clear plan and one coordinated team.
              </p>
              <a
                href="https://bdatechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:opacity-70"
              >
                Meet the BDA Technologies team <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-sand py-14 md:py-20">
        <div className="tex-diagonal pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <p className="eyebrow">About</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
                Meet <span className="font-serif italic font-medium">Ambesh.</span>
              </h2>
              <Link to="/about" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:opacity-70">
                Read full story <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={120} className="md:col-span-7">
              <div className="space-y-5 text-lg leading-[1.65] text-ink-soft">
                <p>
                  I am Ambesh Tiwari, a Business Systems Consultant, AI Trainer,
                  author and founder of BDA Technologies.
                </p>
                <p>
                  I help founder-led businesses reduce daily chaos by creating
                  clear SOPs, workflows, reporting systems and practical AI
                  processes.
                </p>
                <blockquote className="border-l-2 pl-5 font-serif text-2xl italic leading-snug text-ink" style={{ borderColor: "var(--accent)" }}>
                  Most businesses are not slow. They are just running on the founder, not on systems.
                </blockquote>
                <p className="text-ink">
                  I lead the consulting, system design and team training. When
                  technical implementation is needed, my team at BDA Technologies
                  builds the required systems.
                </p>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {credibility.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STAT (no unverified testimonials) */}
      <section className="relative overflow-hidden bg-canvas py-14 md:py-16">
        <div className="tex-noise tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit">
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
              <Star className="h-5 w-5" style={{ fill: "var(--accent)", color: "var(--accent)" }} />
              <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                &ldquo;9.5 out of 10 average session rating across 150+ sessions and engagements.&rdquo;
              </p>
              <p className="text-xs text-ink-muted">Based on collected participant feedback.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOOK */}
      <section className="relative overflow-hidden bg-sand py-14 md:py-20">
        <div className="tex-grid-fine tex-fade pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <div className="grid gap-12 rounded-3xl border border-rule bg-canvas p-8 md:grid-cols-12 md:items-center md:gap-16 md:p-14">
            <Reveal className="md:col-span-5">
              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="aspect-[2/3] rounded-r-md rounded-l shadow-lift" style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 265) 0%, oklch(0.16 0.012 265) 100%)" }}>
                  <div className="flex h-full flex-col justify-between p-7 text-canvas">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-canvas/50">A book by Ambesh Tiwari</p>
                    <div>
                      <p className="font-display text-3xl font-extrabold leading-[1] tracking-[-0.02em]">
                        Accelerate<br />with{" "}
                        <span className="font-serif italic font-medium" style={{ color: "var(--accent-soft)" }}>AI</span>
                      </p>
                      <div className="mt-4 h-px w-10 bg-canvas/40" />
                      <p className="mt-3 text-xs text-canvas/70">A simple book for a complicated world.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-r-md rounded-l" style={{ background: "var(--accent-soft)" }} aria-hidden />
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <BookOpen className="h-3 w-3" /> The Book
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
                Accelerate with AI
              </h2>
              <p className="mt-3 font-serif text-xl italic text-ink-soft">A simple book for a complicated world.</p>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-ink-soft">
                A clear, practical entry into AI for founders and teams. Many
                clients start with the book, then bring Ambesh in to build the
                systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.in/dp/B0CN8L7ZWP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get the Book on Amazon
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <Link to="/book" className="inline-flex h-12 items-center gap-2 rounded-full border border-rule px-6 text-sm font-semibold text-ink hover:bg-sand">
                  Inside the book
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL OFF-RAMP */}
      <section className="relative bg-canvas pb-24 md:pb-32 pt-12">
        <div className="container-edit relative">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-rule bg-sand p-7 md:flex-row md:items-center md:p-8">
              <div className="max-w-2xl">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">For individuals</p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em] text-ink md:text-2xl">
                  Solo operator, not a team?
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Business Systems engagements are designed for founder-led
                  companies with a team. If you are a solo operator building AI
                  skills, Automation School offers structured learning for
                  individuals.
                </p>
              </div>
              <a
                href="https://automationschool.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full border border-ink bg-canvas px-5 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-canvas"
              >
                Visit AutomationSchool.in
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink text-canvas">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px)", backgroundSize: "22px 22px" }} aria-hidden />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ background: "var(--accent)" }} aria-hidden />
        <div className="container-edit relative py-14 md:py-20">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-canvas/50">
              <Sparkles className="mr-2 inline h-3 w-3" />
              Start with a conversation
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] text-canvas md:text-7xl">
              Let&rsquo;s build a business that{" "}
              <span className="font-serif italic font-medium">runs on systems.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-canvas/70 md:text-xl">
              Start with a 30-minute conversation to identify where the
              business depends too heavily on the founder, what systems may be
              missing, and whether Ambesh is the right person to help.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {["30-minute call", "Practical conversation", "No pitch", "Clear next steps"].map((p) => (
                <span key={p} className="inline-flex items-center gap-1.5 rounded-full border border-canvas/15 bg-canvas/5 px-4 py-1.5 text-xs text-canvas/80 backdrop-blur">
                  <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "var(--accent-soft)" }} />
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/contact?service=diagnostic" className="group inline-flex h-14 items-center gap-2 rounded-full bg-canvas px-8 text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-glow">
                Book a Business Systems Diagnostic
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/918929465115?text=Hi%20Ambesh%2C%20I%20want%20to%20book%20a%20Business%20Systems%20Diagnostic%20for%20my%20company.%20Please%20share%20the%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-canvas/20 px-8 text-base font-semibold text-canvas transition-all hover:bg-canvas/10"
              >
                WhatsApp Ambesh
              </a>
            </div>
            <p className="mt-5 text-xs text-canvas/50">
              Responds within 24 hours. No sales script. Just a real conversation.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

