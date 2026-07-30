import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Workflow,
  Compass,
  BookOpen,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { StrategyCallButton } from "@/components/StrategyCallButton";
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
  { name: "Forbes India", src: "/logos/forbes-india.svg", className: "h-5 sm:h-8" },
  { name: "Mid-day", src: "/logos/mid-day.png", className: "h-5 sm:h-8" },
  { name: "Disrupt", src: "/logos/disrupt.png", className: "h-10 sm:h-14" },
  { name: "Navbharat Times", src: "/logos/navbharat-times.png", className: "h-5 sm:h-8" },
  { name: "Dailyhunt", src: "/logos/dailyhunt-full.png", className: "h-8 sm:h-16" },
  { name: "Thrive Global", src: "/logos/thrive-global.svg", className: "h-4 sm:h-6" },
  { name: "NewsTrack", src: "/logos/newstrack.jpg", className: "h-5 sm:h-8" },
];

const problems = [
  "Everything depends on me to keep the business running",
  "My team isn't productive without constant supervision",
  "We don't know where AI actually fits in our business",
  "Sales and marketing teams aren't aligned or connected",
  "We waste too much time on manual, repetitive tasks",
  "We have too many software tools but poor execution",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden">
        <div className="container-edit pt-10 pb-20 md:pt-14 md:pb-24">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-canvas px-3 py-1 text-xs text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                  AI Strategist · Author · Entrepreneur
                </span>
              </div>

              <h1 className="animate-fade-in-up delay-80 mt-6 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4rem]">
                I Help Founders Scale Their{" "}
                <span className="relative inline-block">
                  <span className="font-serif italic font-medium text-ink">Service Business</span>
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full" style={{ background: "var(--accent)" }} />
                </span>{" "}
                <span className="font-serif italic font-medium text-gradient-brand">Without Depending on Them.</span>
              </h1>

              <p className="animate-fade-in-up delay-150 mt-4 max-w-2xl text-base leading-[1.6] text-ink-soft md:text-lg">
                For over 13 years, I've worked across business development, sales, marketing, branding, operations, technology, and entrepreneurship. Today, I help founders simplify their business, build better systems, and use AI where it creates real business value.
              </p>

              <div className="animate-fade-in-up delay-280 mt-6 flex flex-col items-start">
                <StrategyCallButton size="lg" />
              </div>
            </div>

            <div className="animate-fade-in-up delay-200 lg:col-span-5">
              <div className="relative">
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-rule shadow-lift">
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
                    src="/ambesh-tiwari.jpg"
                    alt="Ambesh Tiwari"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
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
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[20px]" style={{ background: "var(--accent-soft)" }} aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative bg-canvas pt-4 pb-10 md:pt-6 md:pb-14">
        <div className="container-edit">
          <div className="grid gap-8 md:gap-12 sm:grid-cols-3 max-w-5xl mx-auto">
            {[
              { v: "13+", l: "Years of Experience" },
              { v: "100+", l: "Businesses Scaled" },
              { v: "5,000+", l: "Professionals Trained" },
            ].map(({ v, l }, i) => (
              <Reveal key={l} delay={80 + i * 80} eager>
                <div className="custom-theme-card p-6 text-center">
                  <p className="font-display text-3xl font-extrabold tracking-tight text-gradient-brand animate-gradient md:text-4xl">{v}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-ink-muted">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="relative bg-canvas py-6">
        <div className="container-edit">
          <Reveal eager>
            <p className="text-center text-xs uppercase tracking-widest text-ink-muted">Featured In</p>
          </Reveal>
          <div className="mt-4">
            <Marquee
              fade={32}
              speed={60}
              items={proofLogos.map((l) => (
                <img
                  key={l.name}
                  src={l.src}
                  alt={l.name}
                  title={l.name}
                  className={`${l.className} w-auto object-contain opacity-80`}
                  loading="lazy"
                />
              ))}
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-20 md:py-32 lg:py-36 optimize-render">
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:items-start lg:gap-16">
            <Reveal className="md:col-span-5">
              <p className="eyebrow eyebrow-indigo">The Problems I Solve</p>
              <h2 className="mt-4 font-display text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
                Running a business shouldn't feel like{" "}
                <span className="font-serif italic font-medium text-gradient-brand">putting out fires every day.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div className="space-y-4 text-ink-soft">
                <p className="text-ink text-xl md:text-2xl font-bold tracking-tight">I help founders solve problems like:</p>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-[20px] custom-theme-card-static pointer-events-none p-5 md:p-6 text-[15px] md:text-base leading-relaxed text-ink-soft">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: "var(--accent)" }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MY APPROACH & EASE FRAMEWORK */}
      <section className="relative overflow-hidden bg-canvas py-16 md:py-24 optimize-render">
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12 mb-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow eyebrow-indigo">My Approach</p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl text-ink">
                Better businesses aren't built by <span className="font-serif italic font-medium text-gradient-brand">adding more tools.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft md:text-lg">
                They're built by improving the way work gets done. The EASE Framework is a structured path to simplification, clarity, and automation.
              </p>
            </Reveal>
          </div>

          <div className="text-center mb-12">
            <Reveal>
              <h3 className="font-display text-2xl font-extrabold text-ink tracking-tight">The EASE Framework</h3>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stage: "Stage 01", label: "Eliminate", desc: "Remove work that doesn't create value." },
              { stage: "Stage 02", label: "Automate", desc: "Use AI only after the process is clear." },
              { stage: "Stage 03", label: "Streamline", desc: "Connect people, processes, and technology." },
              { stage: "Stage 04", label: "Execute", desc: "Turn ideas into consistent business results." },
            ].map(({ stage, label, desc }, i) => (
              <Reveal key={label} delay={80}>
                <div className="custom-theme-card group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] backdrop-blur-md p-6">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full pointer-events-none" />
                  <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-[850ms] ease-out group-hover:opacity-50" style={{ background: "var(--accent-soft)" }} aria-hidden />
                  <div>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent">{stage}</span>
                    <h4 className="mt-3 font-display text-lg font-extrabold tracking-tight text-ink">{label}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-10 text-center">
              <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:opacity-70">
                Learn More About EASE <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW I HELP */}
      <section id="services" className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-16 md:py-24 optimize-render">
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow eyebrow-indigo">How I Help</p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                I Build. I Advise. <span className="font-serif italic font-medium text-gradient-brand">I Train.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft md:text-lg">
                Practical, hands-on support for founder-led businesses. Building software-driven operations, advising on management processes, and training teams for AI adoption.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-3">
            {[
              {
                title: "Build", icon: Workflow, eyebrow: "Operating Systems",
                desc: "I build practical AI products to turn messy business operations into systems people actually use.",
                bullets: ["Founder & executive scorecards", "Custom workflow automations", "Custom internal AI assistants"],
              },
              {
                title: "Advice", icon: Compass, eyebrow: "Better Ways of Working",
                desc: "I help founders improve systems, align execution rhythms, and drive practical AI adoption across the team.",
                bullets: ["Process & bottleneck audits", "SOPs & accountability setup", "Sales, ops & marketing alignment"],
              },
              {
                title: "Train", icon: GraduationCap, eyebrow: "Practical AI Training",
                desc: "I help teams & professionals to use AI in their daily work, not only learn about new tools.",
                bullets: ["Custom team AI training", "Real-world AI workflows", "Weekly AI adoption rhythms"],
              },
            ].map(({ title, icon: Icon, eyebrow, desc, bullets }, i) => (
              <Reveal key={title} delay={120}>
                <div className="custom-theme-card group relative flex h-full flex-col overflow-hidden rounded-[20px] backdrop-blur-md p-7 md:p-8">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full pointer-events-none" />
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-[850ms] ease-out group-hover:opacity-50" style={{ background: "var(--accent-soft)" }} aria-hidden />
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em] leading-[1.2] text-ink md:text-[1.85rem]">{title}</h3>
                    <div className="icon-box flex h-12 w-12 items-center justify-center rounded-xl border border-rule transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-6 inline-flex w-fit items-center gap-1.5 border-l-2 pl-2.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent border-accent">{eyebrow}</p>
                  <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft md:mt-4">{desc}</p>
                  <ul className="mt-5 space-y-3 md:mt-6">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm leading-[1.5] text-ink-soft">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 transition-colors" style={{ color: "var(--accent)" }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-12 md:mt-16 grid gap-6 grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {heroStats.map((s, i) => (
              <Reveal key={s.l} delay={120}>
                <div className="custom-theme-card p-5 h-full text-center">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-gradient-brand animate-gradient md:text-3xl">{s.v}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-ink-muted leading-tight">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I THINK */}
      <section id="beliefs" className="relative overflow-hidden bg-canvas py-12 md:py-16 optimize-render">
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12 mb-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow eyebrow-indigo">How I Think</p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl text-ink">
                Ideas that guide <span className="font-serif italic font-medium text-gradient-brand">my work.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft md:text-lg">
                These core beliefs shape how I help founders automate operations, scale teams, and build self-managing companies.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { n: "01", icon: Workflow, title: "A business should not depend on the founder.", desc: "Founder dependency is a structural issue, not a personal one. It is resolved by setting clear accountability, SOPs, and system design." },
              { n: "02", icon: Sparkles, title: "AI adoption matters more than AI awareness.", desc: "A workshop has limited value unless the team changes how they work. Real training requires ongoing execution and daily AI adoption rhythms." },
              { n: "03", icon: Compass, title: "Do not automate a process you do not understand.", desc: "Automation makes a clean process faster, but makes a broken one fail faster. We must map out the workflow manually before writing any code." },
              { n: "04", icon: Wrench, title: "Technology is only one part of the answer.", desc: "Clear roles, metrics, and accountability matter more than new tools. Technology is a strong accelerator, but human execution is the foundation." },
            ].map(({ n, icon: Icon, title, desc }, i) => (
              <Reveal key={n} delay={100}>
                <div className="custom-theme-card group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] backdrop-blur-md p-6">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full pointer-events-none" />
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-[850ms] ease-out group-hover:opacity-50" style={{ background: "var(--accent-soft)" }} aria-hidden />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent bg-accent-soft">Belief {n}</span>
                      <div className="icon-box flex h-10 w-10 items-center justify-center rounded-xl border border-rule transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-ink leading-snug">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-16 md:py-24 optimize-render">
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow eyebrow-indigo">Selected Work</p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Work across companies, <span className="font-serif italic font-medium text-gradient-brand">teams and institutions.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft md:text-lg">
                I have worked with founders, corporate teams, professional bodies, educational institutions and government organisations.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-12 custom-theme-card-static p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-accent">Core Focus</p>
                <p className="mt-1 text-sm text-ink-soft">The subject may change, but my role remains similar:</p>
              </div>
              <blockquote className="font-serif text-lg italic md:text-xl text-ink md:max-w-xl md:text-right">
                &ldquo;Make a complex problem easier to understand and easier to act on.&rdquo;
              </blockquote>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              { n: "01", title: "Landmark Group, Dubai", eyebrow: "Practical AI & automation training", color: "to-amber-500/15", desc: "Designed and delivered an AI and automation program for a team of 40 non-technical professionals." },
              { n: "02", title: "TATA Digital", eyebrow: "AI Consulting & Training", color: "to-blue-500/15", desc: "Research & Build Assignments - Capstone projects for AI Course on TATA Digital platform and live sessions on AI." },
              { n: "03", title: "NICASA of NIRC of ICAI", eyebrow: "AI training for finance professionals", color: "to-emerald-500/15", desc: "Delivered practical sessions on using AI for research, communication, analysis and professional productivity." },
              { n: "04", title: "Ministry of Finance, Tanzania", eyebrow: "AI awareness & practical use", color: "to-violet-500/15", desc: "Delivered an AI enablement program helping professionals understand the practical and responsible use of AI." },
            ].map(({ n, title, eyebrow, color, desc, extra }: { n: string; title: string; eyebrow: string; color: string; desc: string; extra?: string }, i) => (
              <Reveal key={n} delay={100}>
                <div className={`custom-theme-card group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] backdrop-blur-md p-7 md:p-8`}>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full pointer-events-none" />
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-[850ms] ease-out group-hover:opacity-50" style={{ background: "var(--accent-soft)" }} aria-hidden />
                  <div>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent">Case Study {n}</span>
                    <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">{title}</h3>
                    <p className="mt-2 inline-flex w-fit items-center gap-1.5 border-l-2 pl-2.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent border-accent">{eyebrow}</p>
                    <div className="mt-4 space-y-3.5 text-[14px] md:text-base leading-relaxed text-ink-soft">
                      <p>{desc}</p>
                      {extra && <p className="text-sm border-t border-rule pt-3 text-ink-muted">{extra}</p>}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I HAVE BUILT */}
      <section id="built" className="relative overflow-hidden bg-canvas py-16 md:py-24">
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-12 mb-12">
            <Reveal className="md:col-span-6">
              <p className="eyebrow eyebrow-indigo">Brands and Products</p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl text-ink">
                I do not only advise. <span className="font-serif italic font-medium text-gradient-brand">I build.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-6">
              <div className="space-y-4 text-base leading-[1.65] text-ink-soft md:text-lg">
                <p>Building products has taught me lessons that cannot be learned from presentations.</p>
                <p className="text-sm text-ink-muted">You have to understand customers, make difficult choices, work with a team, manage costs and make the product useful enough for people to keep using it.</p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "01 / Product", title: "BDA Technologies", eyebrow: "Business systems & automation", color: "to-cyan-500/15", desc: "BDA Technologies helps founder-led businesses improve reporting, workflows, dashboards, automation and use of AI.", link: { href: "https://bdatechnologies.com", label: "Visit BDA Technologies" } },
              { n: "02 / Product", title: "LinkAssist", eyebrow: "AI support for LinkedIn authority", color: "to-accent-soft/30", desc: "LinkAssist helps professionals find ideas, write stronger LinkedIn content and build authority with more consistency.", link: { href: "https://linkassist.ai/", label: "Explore LinkAssist" } },
              { n: "03 / Platform", title: "Automation School", eyebrow: "AI Training For Professionals", color: "to-amber-500/15", desc: "Practical AI training courses and customized corporate programs designed for hands-on operational adoption.", link: { href: "https://automationschool.in/", label: "Explore Automation School" } },
            ].map(({ n, title, eyebrow, color, desc, link }, i) => (
              <Reveal key={n} delay={100}>
                <div className={`custom-theme-card group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] backdrop-blur-md p-7 md:p-8`}>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full pointer-events-none" />
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-[850ms] ease-out group-hover:opacity-50" style={{ background: "var(--accent-soft)" }} aria-hidden />
                  <div>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent">{n}</span>
                    <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">{title}</h3>
                    <p className="mt-2 inline-flex w-fit items-center gap-1.5 border-l-2 pl-2.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent border-accent">{eyebrow}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">{desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-rule">
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                      {link.label} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-12 md:py-16">
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <p className="eyebrow eyebrow-indigo">About</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl text-ink">
                Meet <span className="font-serif italic font-medium text-gradient-brand">Ambesh.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <p className="text-base text-ink leading-relaxed font-semibold">
                I am Ambesh Tiwari, an AI Trainer, Business Systems Consultant, author and founder of BDA Technologies.
              </p>
              <hr className="border-rule my-3" />
              <div className="space-y-3.5 text-[15px] md:text-base leading-[1.6] text-ink-soft">
                <p>I started my career in business development and marketing.</p>
                <p>Over time, I realised that most business problems weren't caused by technology.</p>
                <blockquote className="border-l-2 pl-4 font-serif text-lg md:text-xl italic leading-snug text-ink my-3" style={{ borderColor: "var(--accent)" }}>
                  &ldquo;They were caused by unclear systems and inconsistent execution.&rdquo;
                </blockquote>
                <p>This taught me how founders think, how teams work and how businesses grow.</p>
                <p>I saw the same problem again and again.</p>
                <p>Companies were buying more tools, but people were still working through WhatsApp, spreadsheets and repeated follow-ups.</p>
                <p>The problem was often not a lack of technology.</p>
                <p>The problem was the gap between people, process and technology.</p>
                <p className="text-ink font-semibold">Today, I help businesses close that gap. I help founders build businesses that are simpler to run and easier to grow.</p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="btn-premium group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Read My Story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section className="relative overflow-hidden bg-canvas py-16 md:py-24">
        <div className="container-edit relative">
          <div className="grid gap-12 rounded-[20px] custom-theme-card-static p-8 md:grid-cols-12 md:items-center md:gap-16 md:p-14 shadow-sm">
            <Reveal className="md:col-span-5">
              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="aspect-2/3 overflow-hidden rounded-r-md rounded-l shadow-lift">
                  <img
                    src="https://acceleratewithai.in/wp-content/uploads/2023/11/Kindle-cover-1600-x-2500-px-1.jpg"
                    alt="Accelerate with AI - book cover by Ambesh Tiwari"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-r-md rounded-l bg-accent-soft" aria-hidden />
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <p className="eyebrow eyebrow-indigo flex items-center gap-2"><BookOpen className="h-3.5 w-3.5" /> THE BOOK</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl text-ink">
                Accelerate <span className="font-serif italic font-medium text-gradient-brand">with AI.</span>
              </h2>
              <p className="mt-3 font-serif text-xl italic text-ink-soft">A simple guide to using AI in business.</p>
              <div className="mt-6 max-w-xl text-[15px] md:text-base leading-[1.65] text-ink-soft space-y-4">
                <p><span className="italic font-medium text-ink">Accelerate with AI</span> helps founders and professionals understand what AI can do and how they can start using it in practical work.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://www.amazon.in/dp/B0CLKZK6JS" target="_blank" rel="noopener noreferrer" className="btn-premium group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold">
                  <span className="relative z-10 flex items-center gap-2">Get the Book <ArrowRight className="h-4 w-4" /></span>
                </a>
                <Link to="/book" className="inline-flex h-12 items-center gap-2 rounded-full border border-rule bg-canvas px-6 text-sm font-semibold text-ink hover:bg-sand transition-colors">
                  See What Is Inside
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink text-canvas">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ background: "var(--accent)" }} aria-hidden />
        <div className="container-edit relative py-16 md:py-24">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-canvas/50">
              <Sparkles className="mr-2 inline h-3.5 w-3.5" />
              Final CTA
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-canvas sm:text-5xl md:text-7xl">
              Ready to Build a Business <span className="font-serif italic font-medium text-gradient-brand">That Runs Better?</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.65] text-canvas/70 md:text-xl">
              Let&rsquo;s talk about your business, your goals, and where AI and better systems can create the biggest impact.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ service: "strategy" }}
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-canvas px-8 text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="https://wa.me/918929465115?text=Hi%20Ambesh%2C%20I%20want%20to%20book%20a%20strategy%20call." target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center gap-2 rounded-full border border-canvas/20 px-8 text-base font-semibold text-canvas transition-all hover:bg-canvas/10">
                WhatsApp Ambesh
              </a>
            </div>
            <p className="mt-5 text-xs text-canvas/50">Responds within 24 hours. No sales script. Just a real conversation.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
