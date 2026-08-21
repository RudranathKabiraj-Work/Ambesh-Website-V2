import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Quote,
  Mic,
  BookOpen,
  Brain,
  Building2,
  Wrench,
  ExternalLink,
  GraduationCap,
  Compass,
  User,
  Info,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Monogram } from "@/components/Monogram";
import { AboutLogo } from "@/components/AboutLogos";
import { ParticleField } from "@/components/ParticleField";
import { BeliefLogo } from "@/components/BeliefLogos";
import { buildMeta, jsonLd, personSchema, breadcrumbSchema } from "@/lib/seo";
import { GridVignetteBackground } from "@/components/ui/vignette-grid-background";

export const Route = createFileRoute("/about")({
  head: () => {
    const m = buildMeta({
      path: "/about",
      title: "About Ambesh Tiwari | Practical AI & Operations Adoption Partner",
      description:
        "Ambesh Tiwari works with founder-led companies to design operating systems, document SOPs, and install practical AI leverage across departments.",
      keywords:
        "Ambesh Tiwari, business operating systems, AI adoption partner, BDA Technologies founder, Automation School founder, Accelerate with AI author",

      ogType: "profile",
    });
    return {
      ...m,
      scripts: [
        jsonLd(personSchema),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      ],
    };
  },
  component: AboutPage,
});

const hiredFor = [
  {
    icon: GraduationCap,
    label: "01",
    title: "AI Training & Workshops",
    body: "Hands-on, department-specific training programs designed to turn technology confusion into immediate daily usage. Built around your team's real workflows and actual tasks.",
  },
  {
    icon: Compass,
    label: "02",
    title: "Workflow & Systems Strategy",
    body: "Designing the operating cadence, documenting SOPs, and building management tracking systems so operations run smoothly without founder bottlenecks.",
  },
  {
    icon: Wrench,
    label: "03",
    title: "Custom AI & Automation Install",
    body: "Building lean, custom AI integrations and automation flows - supported by BDA Technologies - to eliminate repetitive manual work across departments.",
  },
];

const beliefs = [
  {
    n: "01",
    h: "AI needs a process, not just tools.",
    b: "An LLM is only as good as the workflow it sits in. If the process is broken, AI just makes mistakes faster.",
  },
  {
    n: "02",
    h: "Founders should not be the operating system.",
    b: "A business scales when decisions, guidelines and reviews are documented and owned by the team, not trapped in the founder's head.",
  },
  {
    n: "03",
    h: "Lean technology stacks beat complex ones.",
    b: "Most companies do not need expensive new enterprise software. They need their existing tools connected with simple, smart automation.",
  },
  {
    n: "04",
    h: "Adoption happens inside real work.",
    b: "Training is useless if the team does not apply it to their actual tasks in the first week. Every workshop must be built around live projects.",
  },
];

const roles = [
  {
    icon: Building2,
    label: "01",
    title: "Entrepreneur",
    body: "Founded BDA Technologies in 2017. Eight years of building a company, managing clients, growing revenue, making mistakes and learning from them. Everything Ambesh teaches about business comes from having done it.",
  },
  {
    icon: Wrench,
    label: "02",
    title: "Builder",
    body: "Shipped three AI-native products in the last year: LinkAssist (LinkedIn authority), HireAssist (recruitment AI), and TaskAssist (productivity AI). All built with the same tools and approach he teaches in workshops.",
  },
  {
    icon: BookOpen,
    label: "03",
    title: "Teacher",
    body: "Author of Accelerate with AI. Host of Inspire with Ambesh (30+ episodes). Founder of Automation School. Trained 5,000+ professionals across 50+ organisations in 11 industries.",
  },
];

const journey = [
  {
    year: "Small Town",
    t: "Where it started",
    d: "Grew up in a middle-class family. Curious, restless, never quite fit the mould. Tried joining the Indian Army. Did not make it. Kept the discipline.",
  },
  {
    year: "Engineering + MBA",
    t: "Building the foundation",
    d: "BTech in Electronics and Telecommunication (BPUT, Odisha). MBA in International Marketing (Symbiosis, Pune). Brand Management from the University of London.",
  },
  {
    year: "Zen Technologies",
    t: "First corporate chapter",
    d: "Three promotions in three years. Trained defence and police teams on simulators. Discovered a talent for business development. Resigned to build something of his own.",
  },
  {
    year: "2017",
    t: "BDA Technologies",
    d: "Founded Building Digital Arena in Delhi. A growth and digital transformation agency. StartupIndia recognised. Google, Meta and Shopify partnerships.",
  },
  {
    year: "2023",
    t: "AI pivot",
    d: "Built a working tool with AI in two minutes. Realised what had just changed. Shifted entirely to AI training and product development.",
  },
  {
    year: "2023",
    t: "Automation School",
    d: "Launched an online learning platform for professionals building AI and automation skills.",
  },
  {
    year: "2024",
    t: "Book + Podcast",
    d: "Published Accelerate with AI. Launched Inspire with Ambesh. 30+ podcast episodes with founders and operators.",
  },
  {
    year: "2025",
    t: "Products + International",
    d: "Shipped LinkAssist, HireAssist, TaskAssist. Delivered training at Landmark Group (Dubai), ISB (Hyderabad), Ministry of Finance (Tanzania).",
  },
];

const builds = [
  {
    name: "BDA Technologies",
    year: "2017",
    desc: "AI transformation and growth agency. The home base.",
    link: "bdatechnologies.com",
    href: "https://bdatechnologies.com",
  },
  {
    name: "Automation School",
    year: "2023",
    desc: "Online learning for professionals. Structured courses on AI and automation.",
    link: "automationschool.in",
    href: "https://automationschool.in",
  },
  {
    name: "LinkAssist",
    year: "2025",
    desc: "AI-powered LinkedIn authority building.",
    link: "linkassist.ai",
    href: "https://linkassist.ai",
  },
  {
    name: "HireAssist",
    year: "2025",
    desc: "AI assistant for recruitment workflows.",
    link: "hireassist.org",
    href: "https://hireassist.org",
  },
  {
    name: "TaskAssist",
    year: "2025",
    desc: "AI productivity tool for overwhelmed professionals.",
    link: "Coming soon",
    href: "#",
  },
  {
    name: "BDA OS",
    year: "2026",
    desc: "An AI-powered business operating system designed to streamline workflows, automate operations, and help organizations scale with intelligent processes.",
    link: "Coming soon",
    href: "https://bdatechnologies.com",
  },
];

const placeholderTestimonials = [
  {
    q: "One specific observation from a real client.",
    r: "VP, Financial Services (name withheld)",
  },
  {
    q: "Another quiet, weeks-after-the-session note from a team lead.",
    r: "Director, Retail Group (name withheld)",
  },
  {
    q: "A third real, permissioned quote will replace this once collected.",
    r: "Head of L&D, Public Sector (name withheld)",
  },
];

const knowables = [
  "Grew up in small-town. The first person in many rooms who understands both sides of the technology divide.",
  "Three promotions in three years at his first job. Then he quit to build his own thing. That tells you something about how he thinks.",
  "Tried joining the Indian Army. Multiple times. Did not make it. Kept the discipline. Named his company's logo colour dark olive green because of it.",
  "He believes the best way to learn AI is to build something useless with it first. The useful things come later.",
  "Based in Delhi. Happy to travel for a room worth being in.",
];

function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const scale1 = useTransform(
    scrollYProgress,
    [0, 0.45, 0.75, 0.98, 1.0],
    [1, 0.95, 0.9, 0.85, 0.85],
  );
  const y2 = useTransform(scrollYProgress, [0, 0.05, 0.45], [800, 800, 20]);
  const scale2 = useTransform(scrollYProgress, [0.45, 0.75, 0.98, 1.0], [1, 0.95, 0.9, 0.9]);
  const y3 = useTransform(scrollYProgress, [0, 0.45, 0.75], [800, 800, 40]);
  const scale3 = useTransform(scrollYProgress, [0.75, 0.98, 1.0], [1, 0.95, 0.95]);
  const y4 = useTransform(scrollYProgress, [0, 0.75, 0.98, 1.0], [800, 800, 60, 60]);
  const scale4 = useTransform(scrollYProgress, [0, 0.98, 1.0], [1, 1, 1]);

  const cardsTransforms = [
    { y: y1, scale: scale1 },
    { y: y2, scale: scale2 },
    { y: y3, scale: scale3 },
    { y: y4, scale: scale4 },
  ];

  return (
    <div className="min-h-screen w-full relative bg-canvas">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient">
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
        <div className="container-edit relative grid items-center gap-12 pt-10 pb-24 md:grid-cols-12 md:gap-16 md:pt-14 md:pb-32">
          <div className="md:col-span-7">
            <Reveal eager>
              <p className="eyebrow eyebrow-blue flex items-center gap-2">
                <User className="h-3.5 w-3.5" /> About
              </p>
            </Reveal>
            <Reveal delay={100} eager>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
                I help founders turn business chaos{" "}
                <span className="text-gradient-brand animate-gradient">into systems.</span>
              </h1>
            </Reveal>
            <Reveal delay={250} eager>
              <p className="mt-8 max-w-xl text-lg text-ink-soft">
                I am Ambesh Tiwari, a practical AI adoption partner, automation strategist, author,
                and founder of BDA Technologies. My work combines hands-on training, custom workflow
                design, and process implementation to help organizations run without founder
                dependency.
              </p>
            </Reveal>
            <Reveal delay={420} eager className="mt-10">
              <Link
                to="/contact"
                search={{ service: "strategy" }}
                className="btn-premium inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Work With Ambesh <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={200} eager className="md:col-span-5">
            <Monogram className="aspect-[4/5] w-full" since="Building since 2017" />
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative bg-canvas py-14 md:py-20">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow eyebrow-indigo flex items-center gap-2">
              <Quote className="h-3.5 w-3.5" /> A line he keeps coming back to
            </p>
            <Quote className="mt-8 h-12 w-12 text-violet" />
            <blockquote className="mt-6 max-w-5xl font-serif text-3xl font-medium leading-[1.2] tracking-tight text-ink md:text-5xl">
              <span className="italic">
                "You don't need to be perfect in everything to achieve your dreams.
              </span>{" "}
              <span className="text-gradient-brand animate-gradient italic">
                You just have to find someone who knows what you don't."
              </span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* THE STORY - editorial narrative */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
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
        <div className="container-edit relative grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <p className="eyebrow eyebrow-cyan flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" /> The story
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-ink md:text-4xl">
                From small town to building across{" "}
                <em className="text-gradient-brand animate-gradient">three continents.</em>
              </h2>
            </div>
          </Reveal>
          <div className="md:col-span-8 md:col-start-5">
            <Reveal delay={120}>
              <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
                <p>
                  I started by helping people understand AI and automation in a practical way. Over
                  time, one pattern became clear: most businesses do not struggle because they lack
                  tools. They struggle because their execution depends too much on the founder.
                </p>
                <p>
                  The founder knows what matters. The founder remembers the follow-ups. The founder
                  connects the dots. The founder checks progress. The founder becomes the operating
                  system.
                </p>
                <p>
                  That works in the beginning. But it becomes a bottleneck as the business grows.
                </p>
                <p>
                  Today, my work is focused on helping founder-led businesses build AI-powered
                  operating systems that bring visibility, accountability, workflows, SOPs,
                  automations, and execution routines into one practical structure.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW I THINK */}
      <section
        id="beliefs"
        ref={sectionRef}
        className="relative h-[320vh] md:h-[580vh] bg-canvas"
      >
        <div className="relative sticky top-[80px] md:top-[100px] h-[calc(100vh-80px)] md:h-[520px] flex md:items-center overflow-hidden">
          <div className="container-edit w-full h-full flex flex-col justify-center gap-4 min-[360px]:gap-8 sm:gap-14 pb-10 md:h-auto md:grid md:grid-cols-12 md:gap-12 md:items-start md:pb-0">
            {/* Left Column (Header) */}
            <div className="md:col-span-5 pb-4 md:pb-0">
              <p className="eyebrow eyebrow-indigo flex items-center gap-2">
                <Brain className="h-3.5 w-3.5" /> How I Think
              </p>
              <h2 className="mt-4 pb-2 font-display text-[1.8rem] sm:text-2xl md:text-[2.2rem] font-extrabold leading-[1.15] tracking-[-0.03em] md:leading-[1.1] md:text-5xl text-ink">
                Ideas that guide <br className="hidden sm:block" />
                <span className="font-serif italic font-medium text-gradient-brand">my work.</span>
              </h2>
              <p className="mt-3 md:mt-6 text-sm md:text-lg leading-[1.5] md:leading-[1.6] text-ink-soft">
                These core beliefs shape how I help founders automate operations, scale teams, and
                build self-managing companies.
              </p>
            </div>

            {/* Stacking Cards Right Column */}
            <div className="md:col-span-7 relative flex items-center justify-center md:mt-0">
              <div className="relative h-[220px] min-[360px]:h-[260px] min-[400px]:h-[300px] md:h-[380px] w-full max-w-2xl mt-2 md:mt-[45px]">
                {[
                  {
                    n: "01",
                    title: "A business should not depend on the founder.",
                    desc: "Founder dependency is structural, not personal. It is resolved with clear accountability, SOPs, and system design.",
                  },
                  {
                    n: "02",
                    title: "AI adoption matters more than AI awareness.",
                    desc: "Workshops have limited value unless teams change how they work. Real training requires daily AI adoption rhythms.",
                  },
                  {
                    n: "03",
                    title: "Do not automate a process you do not understand.",
                    desc: "Automation makes clean processes faster, but broken ones fail faster. Map the workflow manually before coding.",
                  },
                  {
                    n: "04",
                    title: "Technology is only one part of the answer.",
                    desc: "Clear roles and accountability matter more than new tools. Tech accelerates, but human execution is the foundation.",
                  },
                ].map(({ n, title, desc }, idx) => (
                  <motion.div
                    key={n}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      y: cardsTransforms[idx].y,
                      scale: cardsTransforms[idx].scale,
                      zIndex: 20 + idx,
                      transformOrigin: "top center",
                    }}
                  >
                    <div className="custom-theme-card group relative flex flex-col justify-between overflow-hidden rounded-[20px] backdrop-blur-md p-6 !bg-canvas !shadow-xl">
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full pointer-events-none" />
                      <div
                        className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-[850ms] ease-out group-hover:opacity-50"
                        style={{ background: "var(--accent-soft)" }}
                        aria-hidden
                      />
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] md:text-[0.78rem] font-bold uppercase tracking-[0.15em] text-accent bg-accent-soft">
                            Belief {n}
                          </span>
                          <div className="icon-box flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-rule transition-colors">
                            <BeliefLogo variant={idx} className="h-9 w-9 md:h-10 md:w-10" />
                          </div>
                        </div>
                        <h3 className="font-display text-lg md:text-xl font-extrabold tracking-tight text-ink leading-snug">
                          {title}
                        </h3>
                        <p className="mt-3 text-[15px] md:text-[16px] leading-[1.65] text-ink-soft">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HE IS HIRED FOR */}
      <section id="capabilities" className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow eyebrow-blue flex items-center gap-2">
              <Wrench className="h-3.5 w-3.5" /> Capabilities
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              What Ambesh is{" "}
              <span className="text-gradient-brand animate-gradient italic">hired for.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Providing a complete bridge between workflow strategy, people training, and automated
              systems implementation.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {hiredFor.map((h, idx) => (
              <Reveal key={h.title} delay={100}>
                <div className="custom-theme-card group h-full rounded-3xl p-8">
                  <div className="flex items-start justify-between">
                    <div className="icon-box flex h-12 w-12 items-center justify-center rounded-xl border border-rule transition-colors duration-300">
                      <AboutLogo
                        variant={idx}
                        className={`h-8 w-8 md:h-9 md:w-9 ${idx === 0 ? "capabilities-first" : ""}`}
                      />
                    </div>
                    <span className="font-mono text-xs text-ink-muted">{h.label}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">
                    {h.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HE BELIEVES */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
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
            <p className="eyebrow eyebrow-indigo flex items-center gap-2">
              <Info className="h-3.5 w-3.5" /> What he believes
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Four beliefs that shape{" "}
              <span className="text-gradient-brand animate-gradient italic">every engagement.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {beliefs.map((b) => {
              return (
                <Reveal key={b.n} delay={80}>
                  <div className="custom-theme-card group h-full rounded-3xl p-7">
                    <div className="flex items-start justify-between">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
                        Belief
                      </p>
                      <span className="font-mono text-xs text-ink-muted">{b.n}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold leading-snug text-ink">{b.h}</h3>
                    {b.b && <p className="mt-4 text-sm leading-relaxed text-ink-soft">{b.b}</p>}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* THREE ROLES */}
      <section id="roles" className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow eyebrow-cyan flex items-center gap-2">
              <Building2 className="h-3.5 w-3.5" /> Three roles, one thread
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Entrepreneur. Builder.{" "}
              <span className="text-gradient-brand animate-gradient italic">Teacher.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Not a typical trainer. Someone who builds what he teaches, and teaches what he builds.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {roles.map((r, idx) => (
              <Reveal key={r.title} delay={100}>
                <div className="custom-theme-card group h-full rounded-3xl p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="icon-box flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rule transition-colors duration-300">
                        <AboutLogo variant={3 + idx} className="h-11 w-11 md:h-12 md:w-12" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold tracking-tight text-ink leading-tight">
                          {r.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-ink-muted">{r.label}</span>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
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
            <p className="eyebrow eyebrow-blue flex items-center gap-2">
              <Compass className="h-3.5 w-3.5" /> The journey
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              From small town to training teams across{" "}
              <span className="text-gradient-brand animate-gradient italic">three continents.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-rule bg-rule md:grid-cols-2">
            {journey.map((j, i) => (
              <Reveal key={`${j.year}-${j.t}`} delay={80}>
                <div className="h-full bg-canvas/40 p-8 transition-colors hover:bg-sand/40">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                    {j.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink">{j.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{j.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HE HAS BUILT */}
      <section className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow eyebrow-indigo flex items-center gap-2">
              <ExternalLink className="h-3.5 w-3.5" /> Built along the way
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              One company. One school.{" "}
              <span className="text-gradient-brand animate-gradient italic">Three products.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Everything here started as something Ambesh needed for his own work.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {builds.map((b) => (
              <Reveal key={b.name} delay={80}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-theme-card group relative block h-full overflow-hidden rounded-3xl p-8"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-ink">{b.name}</h3>
                    </div>
                    <span className="font-mono text-xs text-ink-muted">{b.year}</span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">{b.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-mono text-xs text-accent">{b.link}</p>
                    <ExternalLink className="h-4 w-4 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
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
            <p className="eyebrow eyebrow-cyan flex items-center gap-2">
              <Mic className="h-3.5 w-3.5" /> What people say
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              About working{" "}
              <span className="text-gradient-brand animate-gradient italic">together.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              The best feedback arrives weeks after the session, when something in the team has
              quietly changed.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {placeholderTestimonials.map((t, i) => (
              <Reveal key={i} delay={100}>
                <div className="custom-theme-card-static h-full rounded-3xl p-8">
                  <Mic
                    className="h-5 w-5"
                    style={{
                      color: "var(--accent)",
                      animation: `mic-pulse 2s ease-in-out ${i * 0.5}s infinite`,
                    }}
                  />
                  <p className="mt-6 font-serif text-lg italic leading-snug text-ink">"{t.q}"</p>
                  <div className="mt-8 border-t border-rule pt-5">
                    <p className="text-xs text-ink-muted">{t.r}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A FEW THINGS WORTH KNOWING */}
      <section className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow eyebrow-blue flex items-center gap-2">
              <Info className="h-3.5 w-3.5" /> A few things worth knowing
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-ink md:text-4xl">
              Small details that shape{" "}
              <span className="italic text-gradient-brand animate-gradient">how Ambesh works.</span>
            </h2>
          </Reveal>
          <ul className="md:col-span-7 md:col-start-6 space-y-5">
            {knowables.map((k, i) => (
              <Reveal key={i} delay={60} as="li">
                <div className="flex gap-4 border-b border-rule pb-5">
                  <span className="font-mono text-xs text-violet">0{i + 1}</span>
                  <p className="text-base leading-relaxed text-ink-soft">{k}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="cta-dark relative overflow-hidden border-b border-white/10">
        <ParticleField className="opacity-70" color="rgba(255,255,255,0.8)" count={26} seed={11} />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--accent)" }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 md:hidden" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(125% 70% at 50% -12%, color-mix(in oklch, var(--accent) 28%, transparent) 0%, transparent 62%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(75% 45% at 100% 105%, color-mix(in oklch, var(--accent) 18%, transparent) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklch, var(--accent) 55%, transparent) 50%, transparent)",
            }}
            aria-hidden
          />
        </div>
        <div className="container-edit relative py-12 text-center md:py-20">
          <Reveal>
            <p className="eyebrow eyebrow-indigo flex items-center gap-2">
              <ArrowRight className="h-3.5 w-3.5" /> Final word
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl md:text-7xl">
              If any of this resonates,{" "}
              <span className="font-serif italic font-medium text-gradient-brand">
                let us have a conversation.
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
              Thirty minutes. No pitch deck. No pressure. Just a real discussion about what your
              team needs and whether we are the right fit for each other.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-12">
            <div className="flex flex-row items-center justify-center gap-1.5 sm:gap-4">
              <Link
                to="/contact"
                search={{ service: "strategy" }}
                className="btn-premium inline-flex h-12 min-w-0 flex-1 items-center justify-center gap-1 min-[375px]:gap-1.5 whitespace-nowrap rounded-full px-2 min-[375px]:px-4 text-[11px] min-[360px]:text-xs min-[400px]:text-sm font-semibold text-white sm:h-14 sm:flex-none sm:gap-2 sm:px-8 sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@ambesh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-email group inline-flex h-12 min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-full px-2 min-[375px]:px-4 text-[11px] min-[360px]:text-xs min-[400px]:text-sm font-semibold text-white sm:h-14 sm:flex-none sm:px-8 sm:text-base"
              >
                <span className="svg-wrapper relative z-10 flex shrink-0 items-center">
                  <img
                    src="/gmail-icon.png"
                    alt="Gmail"
                    className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8"
                  />
                </span>
                <span className="btn-email-text relative z-10 hidden min-[360px]:inline">hello@ambesh.com</span>
                <span className="btn-email-text relative z-10 min-[360px]:hidden">Email</span>
              </a>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Responds within 24 hours
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
