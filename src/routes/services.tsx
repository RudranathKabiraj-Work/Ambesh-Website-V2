import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Plus,
  Minus,
  Check,
  Compass,
  Users,
  GraduationCap,
  Wrench,
  MessageCircle,
  Sparkles,
  Building2,
  Star,
  CalendarClock,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServicesLogo } from "@/components/ServicesLogos";
import { ProcessLogo } from "@/components/ProcessLogos";
import { buildMeta, jsonLd, breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/seo";
import { GridVignetteBackground } from "@/components/ui/vignette-grid-background";
import { ParticleField } from "@/components/ParticleField";

export const faqs = [
  {
    q: "Who is the Business OS built for?",
    a: "Founder-led businesses, usually between INR 5 crore and INR 100 crore, where the founder is still the ceiling on growth and systems live mostly in the founder's head.",
  },
  {
    q: "How long does an engagement take?",
    a: "A typical Business OS engagement runs across 8 to 12 weeks, with the initial OS installed in the first 4 to 6 weeks and adoption support layered on top.",
  },
  {
    q: "Do you replace our tools?",
    a: "Rarely. Most companies already have the tools they need. What is missing is the Operating System that connects them and the workflows that make them useful.",
  },
  {
    q: "How is AI used inside the Business OS?",
    a: "AI is installed as leverage inside the workflows your team already runs. It is never a separate track. If AI cannot make a workflow measurably better, we do not force it in.",
  },
  {
    q: "Do you also do standalone AI training?",
    a: "Yes. AI Training is a core standalone offer. Many companies start with training and later bring in the full Business OS engagement.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. NDAs are standard for any engagement that touches internal systems, workflows or data.",
  },
  {
    q: "Do you travel internationally?",
    a: "Yes. Ambesh works with teams across India, UAE and Africa.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => {
    const m = buildMeta({
      path: "/services",
      title: "Services | Practical AI Adoption & Workflow Strategy | Ambesh",
      description:
        "Build an AI-powered Operating System for your founder-led business. Systems across sales, delivery, operations and hiring, with practical AI leverage.",
      keywords:
        "Business Operating System, founder-led business systems, AI-powered business systems India, business systemisation, business scaling advisor",
    });
    return {
      ...m,
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "AI-powered Business Operating System",
          provider: { "@type": "Person", name: "Ambesh Tiwari" },
          areaServed: ["India", "United Arab Emirates", "Africa"],
          url: `${SITE_URL}/services`,
          description:
            "Business Operating System build for founder-led companies. Systems, workflows and AI leverage installed inside the team.",
        }),
        jsonLd(faqSchema(faqs)),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Business OS", path: "/services" },
          ]),
        ),
      ],
    };
  },
  component: BusinessOSPage,
});

const heroStats = [
  { end: 8, prefix: "", suffix: " to 12", decimals: 0, l: "Week engagements", icon: CalendarClock },
  { end: 50, prefix: "", suffix: "+", decimals: 0, l: "Organisations served", icon: Building2 },
  { end: 5000, prefix: "", suffix: "+", decimals: 0, l: "Team members trained", icon: Users },
  { end: 9.5, prefix: "", suffix: "", decimals: 1, l: "Average NPS rating", icon: Star },
];

const pillars = [
  {
    icon: Compass,
    n: "01",
    name: "Business Diagnosis",
    tagline: "See the business the way an outside operator would.",
    body: "A structured diagnosis of where the business is stuck, where the founder is trapped, and which systems are missing across sales, delivery, operations and hiring.",
    points: [
      "Founder and leadership interviews",
      "Systems and workflow audit",
      "Team dependency mapping",
      "Prioritised list of what to fix first",
    ],
    cta: "Book a Business Systems Diagnostic",
    search: { service: "diagnostic" },
  },
  {
    icon: Layers,
    n: "02",
    name: "Business OS Install",
    tagline: "Design and install the operating system the business actually needs.",
    body: "A custom Operating System across the core functions of the business. Simple enough for the team to actually run, structured enough to scale beyond the founder.",
    points: [
      "Sales, delivery, ops and hiring systems",
      "Documented workflows and SOPs",
      "AI leverage inside daily workflows",
      "Tooling stays lean and vendor-neutral",
    ],
    cta: "Talk about the OS",
    search: { service: "strategy" },
  },
  {
    icon: Users,
    n: "03",
    name: "Team Adoption",
    tagline: "The Operating System is worthless if the team does not run it.",
    body: "AI training and adoption support built into the engagement, so the OS becomes how the team actually works, not another document on a shared drive.",
    points: [
      "AI training for the team on real workflows",
      "Leadership adoption support",
      "30 and 60 day check-ins",
      "Handover so the business owns everything",
    ],
    cta: "Plan the adoption",
    search: { service: "training" },
  },
];

const audiences = {
  founders: {
    label: "Founders",
    title: "Get out of the daily fires. Get back to building the business.",
    body: "For founders whose businesses have grown past what one person can hold together. The Business OS gives you back your calendar and your focus.",
    bullets: [
      "Clarity on where you are the ceiling",
      "Systems that do not depend on you being in every meeting",
      "Leverage from AI without becoming a tech company",
    ],
  },
  leadership: {
    label: "Leadership",
    title: "Give your leadership team an operating system, not more initiatives.",
    body: "For leadership teams inside founder-led businesses. Align on how the business actually runs, before adding another tool or hire.",
    bullets: [
      "Shared language for how the business operates",
      "Fewer overlapping initiatives",
      "AI adoption aligned to real business goals",
    ],
  },
  operators: {
    label: "Operators",
    title: "Turn a busy operations team into a compounding one.",
    body: "For heads of operations, COOs and integrators who need to install real systems, not just fix fires. The OS gives you a spine to hang everything else on.",
    bullets: [
      "Workflow-first operating cadence",
      "Documented systems the team owns",
      "AI installed where it earns its keep",
    ],
  },
} as const;

const processSteps = [
  {
    step: "01",
    title: "Audit",
    body: "A structured 2-week diagnosis of the business. Founder interviews, team interviews, workflow audit. You get an honest picture of where the business is stuck.",
  },
  {
    step: "02",
    title: "Design",
    body: "The Operating System is designed for your business. Sales, delivery, operations and hiring workflows, with AI leverage installed where it earns its keep. Nothing generic.",
  },
  {
    step: "03",
    title: "Build",
    body: "The OS is built and customized for your business. Documented, trained and running. Leadership is aligned. Existing tools are used where they work, replaced only when they do not.",
  },
  {
    step: "04",
    title: "Adopt",
    body: "30 and 60 day adoption check-ins. The team is trained on the OS. The business is handed over to run and improve without ongoing dependency on Ambesh.",
  },
];

function ProcessStepCard({
  p,
  i,
  active,
}: {
  p: (typeof processSteps)[number];
  i: number;
  active: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.15 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const lift = useTransform(scrollYProgress, [0, 0.5, 1], [36, 0, -36]);

  return (
    <div ref={cardRef} data-step={i} className="relative scroll-mt-28 md:pl-10">
      <span
        className={`absolute left-0 top-9 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 transition-all duration-500 md:block ${
          active ? "border-accent bg-accent shadow-glow" : "border-rule bg-canvas"
        }`}
        aria-hidden
      />
      <motion.div style={{ y: lift }}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
          className={`process-card relative overflow-hidden rounded-3xl border p-7 transition-colors duration-500 md:p-9 ${
            active
              ? "border-accent/40 bg-canvas/90 shadow-[0_20px_60px_-24px_var(--accent)]"
              : "border-rule bg-canvas/60"
          }`}
        >
          <span
            className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[7rem] font-black leading-none tracking-tighter text-ink/[0.05] md:text-[9rem]"
            aria-hidden
          >
            {p.step}
          </span>
          <div className="relative flex items-center gap-4">
            <div className="icon-box flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rule transition-colors duration-300">
              <ProcessLogo variant={i} className="process-card-logo h-11 w-11 md:h-12 md:w-12" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-ink">{p.title}</h3>
            </div>
          </div>

          <p className="relative mt-5 text-[15px] leading-[1.65] text-ink-soft">{p.body}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProcessTimeline() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const steps = Array.from(el.querySelectorAll<HTMLElement>("[data-step]"));
      const mid = window.innerHeight * 0.45;
      let best = 0;
      let bestDist = Infinity;
      for (let idx = 0; idx < steps.length; idx++) {
        const r = steps[idx].getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = idx;
        }
      }
      setActiveStep(best);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={railRef} className="relative mt-16">
      <div className="relative flex flex-col gap-6 md:gap-10">
        {processSteps.map((p, i) => (
          <ProcessStepCard key={p.step} p={p} i={i} active={i === activeStep} />
        ))}
      </div>
    </div>
  );
}

export function BusinessOSPage() {
  const [audience, setAudience] = useState<keyof typeof audiences>("founders");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const a = audiences[audience];

  return (
    <>
      {/* HERO */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden">
        <GridVignetteBackground
          className="hidden dark:block opacity-40"
          x={50}
          y={50}
          intensity={100}
          size={48}
          horizontalVignetteSize={80}
          verticalVignetteSize={60}
        />
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative pt-10 pb-20 md:pt-14 md:pb-24">
          <Reveal eager>
            <p className="eyebrow eyebrow-indigo flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" /> Business OS
            </p>
          </Reveal>
          <Reveal delay={100} eager>
            <h1 className="mt-6 max-w-5xl font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Build the operating system your business needs to{" "}
              <span className="text-gradient-brand animate-gradient">scale without you.</span>
            </h1>
          </Reveal>
          <Reveal delay={250} eager>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft">
              A structured, hands-on partnership for founder-led companies. We design your workflow
              strategy, document functional SOPs, and install practical AI tools directly into your
              team so operations run smoothly.
            </p>
          </Reveal>
          <Reveal delay={320} eager>
            <div className="mt-10 flex flex-nowrap items-center gap-1.5 sm:gap-3">
              <Link
                to="/contact"
                search={{ service: "strategy" }}
                className="btn-premium inline-flex h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 text-xs font-semibold sm:h-14 sm:flex-none sm:gap-2 sm:justify-start sm:px-8 sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                  Book a strategy call <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </span>
              </Link>
              <Link
                to="/training"
                className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-ink/15 bg-canvas/80 px-3 text-xs font-semibold text-ink hover:border-ink/40 sm:h-14 sm:flex-none sm:justify-start sm:px-8 sm:text-base"
              >
                See AI Training
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400} eager>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroStats.map((s) => (
                <div
                  key={s.l}
                  className="custom-theme-card-static relative h-full overflow-hidden rounded-[20px] p-4 text-center backdrop-blur shadow-soft"
                >
                  <div
                    className="stat-aurora pointer-events-none absolute inset-0 opacity-50"
                    aria-hidden
                  />
                  <div className="relative flex items-center justify-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow">
                      <s.icon className="h-3.5 w-3.5" />
                    </div>
                    <p className="stats-value font-display text-2xl font-extrabold tracking-tight text-gradient-brand animate-gradient md:text-3xl">
                      <AnimatedCounter
                        end={s.end}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        decimals={s.decimals}
                      />
                    </p>
                  </div>
                  <p className="stats-label relative mt-2 text-xs uppercase tracking-wider font-semibold text-ink-muted leading-tight">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="relative overflow-hidden py-14 md:py-20 bg-canvas">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Wrench className="h-3.5 w-3.5" /> What gets built
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              Three layers.{" "}
              <span className="text-gradient-brand animate-gradient">One Operating System.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Every engagement follows the same three layers, sized to the business. Some companies
              need the full OS. Others need one layer deeply installed. The diagnosis decides.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {pillars.map((p, i) => {
              return (
                <Reveal key={p.n} delay={100}>
                  <div className="custom-theme-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-8">
                    <div className="flex items-start justify-between">
                      <div className="icon-box flex h-12 w-12 items-center justify-center rounded-2xl border border-rule">
                        <ServicesLogo variant={i} className="h-8 w-8 md:h-9 md:w-9" />
                      </div>
                      <span className="font-mono text-xs text-ink-muted">{p.n}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-base font-semibold text-ink">{p.tagline}</p>
                    <p className="mt-3 text-sm text-ink-muted">{p.body}</p>
                    <ul className="mt-6 space-y-2 border-t border-rule pt-6">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-ink-soft">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: "var(--accent)" }}
                          />{" "}
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      search={p.search}
                      className="btn-premium mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {p.cta} <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="relative isolate overflow-hidden bg-canvas bg-premium-side-gradient py-14 md:py-20">
        <GridVignetteBackground
          className="hidden dark:block opacity-40"
          x={50}
          y={50}
          intensity={100}
          size={48}
          horizontalVignetteSize={80}
          verticalVignetteSize={60}
        />
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Users className="h-3.5 w-3.5" /> Who this is for
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              Built for founder-led <span className="text-gradient-brand">businesses.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              The Business OS is not for early-stage startups looking for product-market fit, and
              not for large corporates with layers of structure. It is for founder-led businesses
              that have grown past what one person can hold together.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-2 border-b border-rule">
            {(Object.keys(audiences) as Array<keyof typeof audiences>).map((key) => (
              <button
                key={key}
                onClick={() => setAudience(key)}
                className={`relative rounded-t-xl px-5 py-3 text-sm font-semibold transition-colors ${audience === key ? "text-ink" : "text-ink-muted hover:text-ink"}`}
              >
                {audiences[key].label}
                {audience === key && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-brand animate-gradient" />
                )}
              </button>
            ))}
          </div>

          <div
            key={audience}
            className="mt-12 grid animate-[fade-in_0.4s_ease-out] gap-12 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <h3 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                {a.title}
              </h3>
              <p className="mt-6 text-lg text-ink-soft">{a.body}</p>
            </div>
            <div className="md:col-span-5">
              <ul className="space-y-4">
                {a.bullets.map((b) => (
                  <li
                    key={b}
                    className="custom-theme-card-static flex items-start gap-3 rounded-2xl p-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative overflow-hidden bg-canvas py-16 md:py-24">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Compass className="h-3.5 w-3.5" /> The process
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              How an OS engagement{" "}
              <span className="text-gradient-brand animate-gradient">actually runs.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Every engagement follows the same four steps, sized to the business. Typical duration
              is 8 to 12 weeks.
            </p>
          </Reveal>

          <ProcessTimeline />
        </div>
      </section>

      {/* TRAINING CROSSLINK */}
      <section className="relative isolate overflow-hidden bg-canvas bg-premium-side-gradient py-14">
        <GridVignetteBackground
          className="hidden dark:block opacity-40"
          x={50}
          y={50}
          intensity={100}
          size={48}
          horizontalVignetteSize={80}
          verticalVignetteSize={60}
        />
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <div className="grid gap-8 rounded-3xl custom-theme-card-static p-8 md:grid-cols-12 md:items-center md:gap-12 md:p-12">
              <div className="md:col-span-7">
                <p className="eyebrow flex items-center gap-2">
                  <GraduationCap className="h-3 w-3" /> AI Training
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Need AI training without the full OS build?
                </h2>
                <p className="mt-4 text-base text-ink-soft">
                  AI Training is a standalone offer. Leadership workshops, department workshops, and
                  multi-day team bootcamps. Many companies start here and later bring in the full
                  Business OS engagement.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <Link
                  to="/training"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-ink bg-canvas px-6 text-sm font-semibold text-ink hover:bg-ink hover:text-canvas"
                >
                  Explore AI Training <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-canvas py-16">
        <div className="container-edit relative grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow flex items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5" /> Common questions
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-5xl">
              Before you <span className="text-gradient-brand animate-gradient">ask.</span>
            </h2>
          </Reveal>
          <div className="md:col-span-8">
            <ul className="divide-y divide-rule border-y border-rule">
              {faqs.map((f, i) => (
                <li key={f.q}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-lg font-semibold md:text-xl">{f.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand">
                      {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="animate-[fade-in_0.3s_ease-out] pb-6 pr-12">
                      <p className="text-base text-ink-muted">{f.a}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="cta-dark relative overflow-hidden text-center">
        <ParticleField className="opacity-70" color="rgba(255,255,255,0.8)" count={26} seed={11} />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--accent)" }}
          aria-hidden
        />
        <div className="container-edit relative py-12 md:py-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Start with a diagnosis
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-white md:text-6xl">
              The strongest engagements begin with an{" "}
              <span className="text-gradient-brand">honest audit</span>, not a proposal.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              A 30-minute Business Systems Diagnostic is usually enough to know whether we should
              work together, and where the leverage is.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                to="/contact"
                search={{ service: "diagnostic" }}
                className="btn-premium inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-semibold text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Business Systems Diagnostic <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <p className="text-xs text-white/50">
                Responds within 24 hours · No sales script · Just a real conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
