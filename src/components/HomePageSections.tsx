import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Star,
  GraduationCap,
  Compass,
  BookOpen,
  Sparkles,
  AlertCircle,
  Brain,
  Briefcase,
  Package,
  User,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BeliefLogo } from "@/components/BeliefLogos";
import { Marquee } from "@/components/Marquee";
import { BookStickySection } from "@/components/BookStickySection";

const heroStats = [
  { v: "5,000+", l: "Professionals trained" },
  { v: "150+", l: "Sessions and engagements" },
  { v: "11+", l: "Industries delivered in" },
  { v: "9.5/10", l: "Average session rating" },
];

const problems = [
  "Everything depends on me",
  "My team isn't productive",
  "We don't know where AI actually fits",
  "Sales and marketing aren't connected",
  "We waste too much time on manual work",
  "We have too many tools but poor execution",
];

const credibility = [
  "Business Systems Consultant for founder-led companies",
  "Founder of BDA Technologies",
  "Author of Accelerate with AI",
  "Host of Inspire with Ambesh podcast",
  "Trained 5,000+ professionals across 50+ organisations",
  "Works with teams across India, UAE and Africa",
];

export default function HomePageSections() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  return (
    <>
      {/* PROBLEM */}
      <section className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-14 md:py-16">
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            <Reveal className="md:col-span-5">
              <p className="eyebrow flex items-center gap-2">
                <AlertCircle className="h-3.5 w-3.5" /> The Problems I Solve
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">
                Running a business shouldn't feel like{" "}
                <span className="font-serif italic font-medium">putting out fires</span> every day.
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div className="space-y-4 text-lg leading-[1.65] text-ink-soft">
                <p className="text-ink font-semibold">I help founders solve problems like:</p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {problems.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 rounded-[20px] custom-theme-card-static pointer-events-none p-4 text-sm text-ink-soft"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: "var(--accent)" }}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MY APPROACH & EASE FRAMEWORK */}
      <section className="relative overflow-hidden bg-canvas py-16 md:py-24">
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12 mb-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <Compass className="h-3.5 w-3.5" /> My Approach
              </p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl text-ink">
                Better businesses aren't built by adding more tools.
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft md:text-lg">
                They're built by improving the way work gets done. The EASE Framework is a
                structured path to simplification, clarity, and automation.
              </p>
            </Reveal>
          </div>

          <div className="text-center mb-12">
            <Reveal>
              <h3 className="font-display text-2xl font-extrabold text-ink tracking-tight uppercase tracking-widest text-xs font-mono text-ink-muted">
                The EASE Framework
              </h3>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stage: "Stage 01",
                label: "Eliminate",
                desc: "Remove work that doesn't create value.",
                color: "to-amber-500/15",
              },
              {
                stage: "Stage 02",
                label: "Automate",
                desc: "Use AI only after the process is clear.",
                color: "to-blue-500/15",
              },
              {
                stage: "Stage 03",
                label: "Streamline",
                desc: "Connect people, processes, and technology.",
                color: "to-emerald-500/15",
              },
              {
                stage: "Stage 04",
                label: "Execute",
                desc: "Turn ideas into consistent business results.",
                color: "to-violet-500/15",
              },
            ].map(({ stage, label, desc, color }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-ink/15 bg-gradient-to-r from-sand/90 via-sand/35 ${color} backdrop-blur-md p-6 transition-all duration-500 ease-out -translate-y-1.5 shadow-lift hover:translate-y-0 hover:scale-100 hover:border-ink/35 hover:bg-none hover:bg-canvas hover:shadow-none`}
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full pointer-events-none" />
                  <div>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent animate-gradient text-gradient-brand">
                      {stage}
                    </span>
                    <h4 className="mt-3 font-display text-lg font-extrabold tracking-tight text-ink">
                      {label}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:opacity-70"
              >
                Learn More About EASE <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW I HELP */}
      <section
        id="services"
        className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-16 md:py-24"
      >
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5" /> How I Help
              </p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                I Build. I Advise. I Train.
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft md:text-lg">
                Practical, hands-on support for founder-led businesses. Building software-driven
                operations, advising on management processes, and training teams for AI adoption.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-col gap-4 md:mt-16 lg:h-[520px] lg:flex-row">
            {[
              {
                num: "01",
                title: "Build",
                eyebrow: "Operating Systems",
                desc: "I build practical AI products to turn messy business operations into systems people actually use.",
                bullets: [
                  "Founder & executive scorecards",
                  "Custom workflow automations",
                  "Custom internal AI assistants",
                ],
                image: "/service-os.jpg",
                href: "/services",
              },
              {
                num: "02",
                title: "Advice",
                eyebrow: "Better Ways of Working",
                desc: "I help founders improve systems, align execution rhythms, and drive practical AI adoption across the team.",
                bullets: [
                  "Process & bottleneck audits",
                  "SOPs & accountability setup",
                  "Sales, ops & marketing alignment",
                ],
                image: "/service-transformation.jpg",
                href: "/services",
              },
              {
                num: "03",
                title: "Train",
                eyebrow: "Practical AI Training",
                desc: "I help teams & professionals to use AI in their daily work, not only learn about new tools.",
                bullets: [
                  "Custom team AI training",
                  "Real-world AI workflows",
                  "Weekly AI adoption rhythms",
                ],
                image: "/service-ai-training.jpg",
                href: "/services",
              },
            ].map(({ num, title, eyebrow, desc, bullets, image, href }, i) => {
              const isHovered = hoveredService === i;
              return (
                <Reveal
                  key={title}
                  delay={i * 80}
                  className="w-full h-full flex"
                  style={{
                    flexGrow: isHovered ? 2.4 : 1,
                    flexBasis: 0,
                    transition: "flex-grow 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <Link
                    to={href}
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                    onFocus={() => setHoveredService(i)}
                    onBlur={() => setHoveredService(null)}
                    className="group relative flex min-h-[360px] w-full flex-col justify-end overflow-hidden rounded-3xl border border-white/10 shadow-soft transition-all duration-700 ease-out sm:min-h-[420px] lg:min-h-0"
                  >
                    {/* Background Image */}
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                        isHovered ? "scale-100" : "scale-105"
                      }`}
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        isHovered
                          ? "bg-gradient-to-t from-black/95 via-black/55 to-black/15"
                          : "bg-gradient-to-t from-black/95 via-black/75 to-black/40"
                      }`}
                    />

                    {/* Service Number Badge */}
                    <span className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white backdrop-blur-sm md:left-8 md:top-8">
                      {num}
                    </span>

                    {/* Card Content */}
                    <div className="relative p-6 md:p-8 w-full">
                      <p
                        className="inline-flex w-fit items-center gap-1.5 border-l-2 pl-2.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/70 mb-2"
                        style={{ borderColor: "var(--accent)" }}
                      >
                        {eyebrow}
                      </p>

                      <h3
                        className={`font-display leading-tight tracking-tight text-white transition-all duration-500 ${
                          isHovered
                            ? "text-2xl md:text-[30px] font-extrabold"
                            : "text-xl md:text-2xl font-bold"
                        }`}
                      >
                        {title}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80 transition-all duration-500 md:text-base">
                        {desc}
                      </p>

                      {/* Bullet list sliding open */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          isHovered
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0 h-0 overflow-hidden"
                        }`}
                      >
                        <ul className="space-y-2">
                          {bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2.5 text-xs leading-[1.5] text-white/95"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white"
                                style={{ color: "var(--accent)" }}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom row CTA */}
                      <div className="mt-6 flex items-center gap-3 text-sm font-medium text-white">
                        <span className="transition-opacity duration-500">Explore Service</span>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Stats strip */}
          <div className="mt-12 md:mt-16 grid gap-6 grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {heroStats.map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="rounded-[20px] border border-rule bg-sand/30 p-5 hover:border-ink/20 transition-colors duration-300 h-full text-center">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-gradient-brand animate-gradient md:text-3xl">
                    {s.v}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-ink-muted leading-tight">
                    {s.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I THINK */}
      <section id="beliefs" className="relative overflow-hidden bg-canvas py-12 md:py-16">
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12 mb-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <Brain className="h-3.5 w-3.5" /> How I Think
              </p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl text-ink">
                Ideas that guide my work
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft md:text-lg">
                These core beliefs shape how I help founders automate operations, scale teams, and
                build self-managing companies.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                n: "01",
                color: "to-orange-500/15",
                title: "A business should not depend on the founder.",
                desc: "Founder dependency is a structural issue, not a people problem. It is resolved by clear accountability, SOPs, and system design.",
              },
              {
                n: "02",
                color: "to-purple-500/15",
                title: "AI adoption matters more than AI awareness.",
                desc: "A workshop has limited value unless people change how they work after it. Real training requires ongoing adoption rhythms and daily AI application.",
              },
              {
                n: "03",
                color: "to-teal-500/15",
                title: "Do not automate a process you do not understand.",
                desc: "Automation makes a good process faster, but a broken one fail faster. We must understand the workflow manually before writing code.",
              },
              {
                n: "04",
                color: "to-indigo-500/15",
                title: "Technology is only one part of the answer.",
                desc: "Clear roles, leadership & accountability matter more than another tool. Technology is an accelerator, but human execution remains the foundation.",
              },
            ].map(({ n, color, title, desc }, i) => (
              <Reveal key={n} delay={i * 80}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-ink/15 bg-gradient-to-r from-sand/90 via-sand/35 ${color} backdrop-blur-md p-6 transition-all duration-500 ease-out -translate-y-1.5 shadow-lift hover:translate-y-0 hover:scale-100 hover:border-ink/35 hover:bg-none hover:bg-canvas hover:shadow-none`}
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full pointer-events-none" />
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-0"
                    style={{ background: "var(--accent-soft)" }}
                    aria-hidden
                  />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em]"
                        style={{ color: "var(--accent)" }}
                      >
                        Belief {n}
                      </span>
                      <div className="icon-box flex h-12 w-12 items-center justify-center rounded-2xl border border-rule">
                        <BeliefLogo variant={i} className="h-9 w-9" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-ink leading-snug">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-16 md:py-24"
      >
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-12">
            <Reveal className="md:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5" /> Selected Work
              </p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Work across companies, teams and institutions.
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft md:text-lg">
                I have worked with founders, corporate teams, professional bodies, educational
                institutions and government organisations.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-12 rounded-[20px] border border-rule bg-canvas p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-accent">Core Focus</p>
                <p className="mt-1 text-sm text-ink-soft">
                  The subject may change, but my role remains similar:
                </p>
              </div>
              <blockquote className="font-serif text-lg italic md:text-xl text-ink md:max-w-xl md:text-right">
                &ldquo;Make a complex problem easier to understand and easier to act on.&rdquo;
              </blockquote>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                n: "01",
                title: "Landmark Group, Dubai",
                eyebrow: "Practical AI & automation training",
                color: "to-amber-500/15",
                desc: "Designed and delivered an AI and automation program for a team of 40 non-technical professionals.",
              },
              {
                n: "02",
                title: "TATA Digital",
                eyebrow: "AI Consulting & Training",
                color: "to-blue-500/15",
                desc: "Research & Build Assignments - Capstone projects for AI Course on TATA Digital platform tool live sessions on AI.",
              },
              {
                n: "03",
                title: "NICASA of NIRC of ICAI",
                eyebrow: "AI training for finance professionals",
                color: "to-emerald-500/15",
                desc: "Delivered practical sessions on using AI for research, communication, analysis and professional productivity.",
              },
              {
                n: "04",
                title: "Ministry of Finance, Tanzania",
                eyebrow: "AI awareness & practical use",
                color: "to-violet-500/15",
                desc: "Delivered an AI enablement program helping professionals understand the practical and responsible use of AI.",
              },
            ].map(
              (
                {
                  n,
                  title,
                  eyebrow,
                  color,
                  desc,
                  extra,
                }: {
                  n: string;
                  title: string;
                  eyebrow: string;
                  color: string;
                  desc: string;
                  extra?: string;
                },
                i,
              ) => (
                <Reveal key={n} delay={i * 80}>
                  <div
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-ink/15 bg-gradient-to-r from-sand/90 via-sand/35 ${color} backdrop-blur-md p-7 transition-all duration-500 ease-out -translate-y-1.5 shadow-lift hover:translate-y-0 hover:scale-100 hover:border-ink/35 hover:bg-none hover:bg-canvas hover:shadow-none md:p-8`}
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full pointer-events-none" />
                    <div
                      className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-0"
                      style={{ background: "var(--accent-soft)" }}
                      aria-hidden
                    />
                    <div>
                      <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent">
                        Case Study {n}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-2 inline-flex items-center gap-1.5 border-l-2 pl-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-ink-muted animate-gradient text-gradient-brand">
                        {eyebrow}
                      </p>
                      <div className="mt-4 space-y-3.5 text-[14px] md:text-base leading-relaxed text-ink-soft">
                        <p>{desc}</p>
                        {extra && (
                          <p className="text-sm border-t border-rule pt-3 text-ink-muted">
                            {extra}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* WHAT I HAVE BUILT */}
      <section id="built" className="relative overflow-hidden bg-canvas py-16 md:py-24">
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-12 mb-12">
            <Reveal className="md:col-span-6">
              <p className="eyebrow flex items-center gap-2">
                <Package className="h-3.5 w-3.5" /> Brands and Products
              </p>
              <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl text-ink">
                I do not only advise.{" "}
                <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                  I build.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-6">
              <div className="space-y-4 text-base leading-[1.65] text-ink-soft md:text-lg">
                <p>
                  Building products has taught me lessons that cannot be learned from presentations.
                </p>
                <p className="text-sm text-ink-muted">
                  You have to understand customers, make difficult choices, work with a team, manage
                  costs and make the product useful enough for people to keep using it.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01 / Product",
                title: "BDA Technologies",
                eyebrow: "Business systems & automation",
                color: "to-cyan-500/15",
                desc: "BDA Technologies helps founder-led businesses improve reporting, workflows, dashboards, automation and use of AI.",
                link: { href: "https://bdatechnologies.com", label: "Visit BDA Technologies" },
              },
              {
                n: "02 / Product",
                title: "LinkAssist",
                eyebrow: "AI support for LinkedIn authority",
                color: "to-accent-soft/30",
                desc: "LinkAssist helps professionals find ideas, write stronger LinkedIn content and build authority with more consistency.",
                link: { href: "https://linkassist.ai/", label: "Explore LinkAssist" },
              },
              {
                n: "03 / Platform",
                title: "Automation School",
                eyebrow: "AI Training For Professionals",
                color: "to-rose-500/15",
                desc: "Practical AI training courses and customized corporate enablement programs designed for hands-on operational adoption.",
                link: { href: "https://automationschool.in/", label: "Explore Automation School" },
              },
            ].map(({ n, title, eyebrow, color, desc, link }, i) => (
              <Reveal key={n} delay={i * 80}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-ink/15 bg-gradient-to-r from-sand/90 via-sand/35 ${color} backdrop-blur-md p-7 transition-all duration-500 ease-out -translate-y-1.5 shadow-lift hover:translate-y-0 hover:scale-100 hover:border-ink/35 hover:bg-none hover:bg-canvas hover:shadow-none md:p-8`}
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full pointer-events-none" />
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-0"
                    style={{ background: "var(--accent-soft)" }}
                    aria-hidden
                  />
                  <div>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent">
                      {n}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-2 inline-flex items-center gap-1.5 border-l-2 pl-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-ink-muted">
                      {eyebrow}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">{desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-rule">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-shiny transition-colors"
                    >
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
              <p className="eyebrow flex items-center gap-2">
                <User className="h-3.5 w-3.5" /> About
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl text-ink">
                Meet{" "}
                <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                  Ambesh.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <p className="text-base text-ink leading-relaxed font-semibold">
                I am Ambesh Tiwari, an AI Trainer, Business Systems Consultant, author and founder
                of BDA Technologies.
              </p>
              <hr className="border-rule my-3" />
              <div className="space-y-3.5 text-[15px] md:text-base leading-[1.6] text-ink-soft">
                <p>I started my career in business development and marketing.</p>
                <p>
                  Over time, I realised that most business problems weren't caused by technology.
                </p>
                <blockquote
                  className="border-l-2 pl-4 font-serif text-lg md:text-xl italic leading-snug text-ink my-3"
                  style={{ borderColor: "var(--accent)" }}
                >
                  &ldquo;They were caused by unclear systems and inconsistent execution.&rdquo;
                </blockquote>
                <p>This taught me how founders think, how teams work and how businesses grow.</p>
                <p>I saw the same problem again and again.</p>
                <p>
                  Companies were buying more tools, but people were still working through WhatsApp,
                  spreadsheets and repeated follow-ups.
                </p>
                <blockquote
                  className="border-l-2 pl-4 font-serif text-lg md:text-xl italic leading-snug text-ink my-3"
                  style={{ borderColor: "var(--accent)" }}
                >
                  &ldquo;The problem was often not a lack of technology. The problem was the gap
                  between people, process and technology.&rdquo;
                </blockquote>
                <p className="text-ink">
                  Today, I help businesses close that gap. I help founders build businesses that are
                  simpler to run and easier to grow.
                </p>
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

      {/* BOOK SECTION */}
      <BookStickySection cardClass="border border-rule bg-canvas" sectionClass="">
        <p className="eyebrow flex items-center gap-2 mb-4">
          <BookOpen className="h-3.5 w-3.5" /> THE BOOK
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-5xl text-ink">
          Accelerate<span className="text-gradient-brand animate-gradient"> With AI</span>
        </h2>
        <p className="mt-3 font-serif text-xl italic text-ink-soft">
          A simple guide to using AI in business.
        </p>
        <div className="mt-6 max-w-xl text-[15px] md:text-base leading-[1.65] text-ink-soft space-y-4">
          <p>AI can feel confusing because new tools appear every day.</p>
          <p>
            <span className="italic font-medium text-ink">Accelerate with AI</span> helps founders
            and professionals understand what AI can do and how they can start using it in practical
            work.
          </p>
          <p>The book focuses on business value, simple examples and clear action.</p>

          {/* Key pillars bullets in book section (Desktop Only) */}
          <ul className="hidden md:grid mt-6 grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-ink-soft pt-3 border-t border-rule/50">
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> No-Code Automation
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Practical Business Value
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> LLM Fine-Tuning Basics
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Operations Scaling
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://www.amazon.in/dp/B0CLKZK6JS?ref_=cm_sw_r_cp_ud_dp_YJBSASGYYGPGJ42PBTK2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get the Book <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <Link
            to="/book"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-rule bg-canvas px-6 text-sm font-semibold text-ink hover:bg-sand transition-colors"
          >
            See What Is Inside
          </Link>
        </div>
      </BookStickySection>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink text-canvas">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--accent)" }}
          aria-hidden
        />
        <div className="container-edit relative py-16 md:py-24">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-canvas/50">
              <Sparkles className="mr-2 inline h-3.5 w-3.5" />
              Final CTA
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-canvas sm:text-5xl md:text-7xl">
              Ready to Build a Business{" "}
              <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                That Runs Better?
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.65] text-canvas/70 md:text-xl">
              Let&rsquo;s talk about your business, your goals, and where AI and better systems can
              create the biggest impact.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                search={{ service: "strategy" }}
                className="btn-premium group inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-semibold text-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <a
                href="https://wa.me/918929465115?text=Hi%20Ambesh%2C%20I%20want%20to%20book%20a%20strategy%20call%20for%20my%20company.%20Please%20share%20the%20next%20steps."
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
