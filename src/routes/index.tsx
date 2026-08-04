import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
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
import { ServiceCarousel } from "@/components/ServiceCarousel";
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
  { name: "NewsTrack", src: "/logos/newstrack.jpg", className: "h-5 sm:h-8", solid: true },
];

const problems = [
  "Everything depends on me to keep the business running",
  "My team isn't productive without constant supervision",
  "We don't know where AI actually fits in our business",
  "Sales and marketing teams aren't aligned or connected",
  "We waste too much time on manual, repetitive tasks",
  "We have too many software tools but poor execution",
];

const beliefs = [
  { n: "01", icon: Workflow, title: "A business should not depend on the founder.", desc: "Founder dependency is structural, not personal. It is resolved with clear accountability, SOPs, and system design." },
  { n: "02", icon: Sparkles, title: "AI adoption matters more than AI awareness.", desc: "Workshops have limited value unless teams change how they work. Real training requires daily AI adoption rhythms." },
  { n: "03", icon: Compass, title: "Do not automate a process you do not understand.", desc: "Automation makes clean processes faster, but broken ones fail faster. Map the workflow manually before coding." },
  { n: "04", icon: Wrench, title: "Technology is only one part of the answer.", desc: "Clear roles and accountability matter more than new tools. Tech accelerates, but human execution is the foundation." },
];

function HomePage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Card 1 starts at y=0, scales down as others arrive
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.4, 0.7, 1.0], [1, 0.95, 0.90, 0.85]);

  // Card 2
  const y2 = useTransform(scrollYProgress, [0, 0.1, 0.4], [800, 800, 20]);
  const scale2 = useTransform(scrollYProgress, [0.4, 0.7, 1.0], [1, 0.95, 0.90]);

  // Card 3
  const y3 = useTransform(scrollYProgress, [0, 0.4, 0.7], [800, 800, 40]);
  const scale3 = useTransform(scrollYProgress, [0.7, 1.0], [1, 0.95]);

  // Card 4
  const y4 = useTransform(scrollYProgress, [0, 0.7, 1.0], [800, 800, 60]);
  const scale4 = useTransform(scrollYProgress, [1.0], [1]);

  const cardsTransforms = [
    { y: y1, scale: scale1 },
    { y: y2, scale: scale2 },
    { y: y3, scale: scale3 },
    { y: y4, scale: scale4 },
  ];

  return (
    <>
      {/* HERO */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit pt-10 pb-20 md:pt-14 md:pb-24">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-canvas px-3 py-1 text-xs text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                  AI Strategist · Author · Entrepreneur
                </span>
              </div>

              <h1 className="animate-fade-in-up delay-80 mt-6 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink dark:text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
                I Help Founders Scale Their{" "}
                <span className="relative inline-block">
                  <span className="font-serif italic font-medium text-ink dark:text-white">Service Business</span>
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

                {/* Floating circle 1: 13+ Years (Bottom-left) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-12 z-20 w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-full bg-canvas/40 backdrop-blur-md border border-rule shadow-lift hover:scale-105 hover:border-accent transition-all duration-300 flex flex-col items-center justify-center p-1 text-center"
                >
                  <span className="font-display text-[15px] md:text-lg font-extrabold text-gradient-brand animate-gradient">13+</span>
                  <span className="text-[7.5px] md:text-[8px] uppercase tracking-wider font-extrabold text-ink leading-tight mt-1 max-w-[70px] md:max-w-[80px]">Years of Experience</span>
                </motion.div>

                {/* Floating circle 2: 100+ Businesses (Bottom-right) */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -right-8 z-20 w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-full bg-canvas/40 backdrop-blur-md border border-rule shadow-lift hover:scale-105 hover:border-accent transition-all duration-300 flex flex-col items-center justify-center p-1 text-center"
                >
                  <span className="font-display text-[15px] md:text-lg font-extrabold text-gradient-brand animate-gradient">100+</span>
                  <span className="text-[7.5px] md:text-[8px] uppercase tracking-wider font-extrabold text-ink leading-tight mt-1 max-w-[70px] md:max-w-[80px]">Businesses Scaled</span>
                </motion.div>

                {/* Floating circle 3: 5,000+ Trained (Right side middle) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[35%] -right-12 z-20 w-[84px] h-[84px] md:w-[96px] md:h-[96px] rounded-full bg-canvas/40 backdrop-blur-md border border-rule shadow-lift hover:scale-105 hover:border-accent transition-all duration-300 flex flex-col items-center justify-center p-1 text-center"
                >
                  <span className="font-display text-[15px] md:text-lg font-extrabold text-gradient-brand animate-gradient">5,000+</span>
                  <span className="text-[7.5px] md:text-[8px] uppercase tracking-wider font-extrabold text-ink leading-tight mt-1 max-w-[70px] md:max-w-[80px]">Professionals Trained</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className="relative bg-canvas py-6 featured-bar">
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
                  className={`${l.className} w-auto object-contain opacity-80 ${l.solid ? "featured-logo-solid" : "featured-logo"}`}
                  loading="lazy"
                />
              ))}
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-20 md:py-32 lg:py-36 optimize-render">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:items-start lg:gap-16">
            <Reveal className="md:col-span-5">
              <p className="eyebrow eyebrow-indigo">The Problems I Solve</p>
              <h2 className="mt-4 pb-2 font-display text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
                Running a business<br />
                shouldn't feel like<br />
                <span className="font-serif italic font-medium text-gradient-brand pr-1">
                  putting out fires<br />
                  every day.
                </span>
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
      <section className="relative overflow-hidden bg-canvas bg-premium-side-gradient py-16 md:py-24">
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
                    <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">{desc}</p>
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
      <section id="services" className="relative overflow-hidden bg-canvas py-16 md:py-24">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
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

          <div className="mt-12 flex flex-col gap-4 md:mt-16 lg:h-[430px] lg:flex-row w-full">
            {[
              {
                num: "01",
                title: "Build",
                eyebrow: "Operating Systems",
                desc: "I build practical AI products to turn messy business operations into systems people actually use.",
                image: "/service-os.jpg",
                href: "/services",
              },
              {
                num: "02",
                title: "Advice",
                eyebrow: "Better Ways of Working",
                desc: "I help founders improve systems, align execution rhythms, and drive practical AI adoption across the team.",
                image: "/service-transformation.jpg",
                href: "/services",
              },
              {
                num: "03",
                title: "Train",
                eyebrow: "Practical AI Training",
                desc: "I help teams & professionals to use AI in their daily work, not only learn about new tools.",
                image: "/service-ai-training.jpg",
                href: "/services",
              },
            ].map(({ num, title, eyebrow, desc, image, href }, i) => {
              const isHovered = hoveredService === i;
              return (
                <Link
                  key={title}
                  to={href}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  onFocus={() => setHoveredService(i)}
                  onBlur={() => setHoveredService(null)}
                  className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 shadow-soft transition-all duration-700 ease-out sm:min-h-[360px] lg:min-h-0 w-full"
                  style={{
                    flexGrow: isHovered ? 2.4 : 1,
                    flexBasis: 0,
                    transition: "flex-grow 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Background Image */}
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${isHovered ? "scale-100" : "scale-105"
                      }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${isHovered
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
                    <p className="inline-flex w-fit items-center gap-1.5 border-l-2 pl-2.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/70 mb-2" style={{ borderColor: "var(--accent)" }}>
                      {eyebrow}
                    </p>

                    <h3 className={`font-display leading-tight tracking-tight text-white transition-all duration-500 ${isHovered ? "text-2xl md:text-[30px] font-extrabold" : "text-xl md:text-2xl font-bold"
                      }`}>
                      {title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80 transition-all duration-500 md:text-base">
                      {desc}
                    </p>

                    {/* Bottom row CTA */}
                    <div className="mt-6 flex items-center gap-3 text-sm font-medium text-white">
                      <span className="transition-opacity duration-500">Explore Service</span>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW I THINK */}
      <section
        id="beliefs"
        ref={sectionRef}
        className="relative h-[115vh] md:h-[250vh] bg-canvas bg-premium-side-gradient"
      >
        <div className="relative sticky top-[80px] md:top-[100px] h-[calc(100vh-80px)] md:h-[520px] flex md:items-center overflow-hidden">
          <div className="container-edit w-full h-full flex flex-col justify-center gap-20 pb-10 md:h-auto md:grid md:grid-cols-12 md:gap-12 md:items-start md:pb-0">

            {/* Left Column (Header) */}
            <div className="md:col-span-5 pb-4 md:pb-0">
              <p className="eyebrow eyebrow-indigo">How I Think</p>
              <h2 className="mt-4 pb-2 font-display text-[1.8rem] sm:text-2xl md:text-[2.2rem] font-extrabold leading-[1.15] tracking-[-0.03em] md:leading-[1.1] md:text-5xl text-ink">
                Ideas that guide{" "}<br className="hidden sm:block" /><span className="font-serif italic font-medium text-gradient-brand">my work.</span>
              </h2>
              <p className="mt-3 md:mt-6 text-sm md:text-lg leading-[1.5] md:leading-[1.6] text-ink-soft">
                These core beliefs shape how I help founders automate operations, scale teams, and build self-managing companies.
              </p>
            </div>

            {/* Stacking Cards Right Column */}
            <div className="md:col-span-7 relative flex items-center justify-center md:mt-0">
              {/* Absolutely positioned stacking cards driven by viewport scroll */}
              <div className="relative h-[300px] md:h-[380px] w-full max-w-2xl mt-2 md:mt-[45px]">
                {[
                  { n: "01", icon: Workflow, title: "A business should not depend on the founder.", desc: "Founder dependency is structural, not personal. It is resolved with clear accountability, SOPs, and system design." },
                  { n: "02", icon: Sparkles, title: "AI adoption matters more than AI awareness.", desc: "Workshops have limited value unless teams change how they work. Real training requires daily AI adoption rhythms." },
                  { n: "03", icon: Compass, title: "Do not automate a process you do not understand.", desc: "Automation makes clean processes faster, but broken ones fail faster. Map the workflow manually before coding." },
                  { n: "04", icon: Wrench, title: "Technology is only one part of the answer.", desc: "Clear roles and accountability matter more than new tools. Tech accelerates, but human execution is the foundation." },
                ].map(({ n, icon: Icon, title, desc }, idx) => {
                  return (
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
                        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-[850ms] ease-out group-hover:opacity-50" style={{ background: "var(--accent-soft)" }} aria-hidden />
                        <div>
                          <div className="flex items-center justify-between mb-5">
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent bg-accent-soft">Belief {n}</span>
                            <div className="icon-box flex h-10 w-10 items-center justify-center rounded-xl border border-rule transition-colors">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>
                          <h3 className="font-display text-lg font-extrabold tracking-tight text-ink leading-snug">{title}</h3>
                          <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">{desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* WHAT I HAVE BUILT */}
      <section id="built" className="relative overflow-hidden bg-canvas pt-8 pb-16 md:py-24">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-12 mb-12">
            <Reveal className="md:col-span-6">
              <p className="eyebrow eyebrow-indigo">Brands and Products</p>
              <h2 className="mt-4 pb-2 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl text-ink">
                I do not only advise.{" "}<br className="hidden sm:block" /><span className="font-serif italic font-medium text-gradient-brand">I build.</span>
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-6">
              <div className="space-y-2 text-[15px] leading-[1.5] text-ink-soft md:text-base">
                <p>Building products has taught me lessons that cannot be learned from presentations.</p>
                <p>You have to understand customers, make difficult choices, work with a team, manage costs and make the product useful enough for people to keep using it.</p>
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
                <div className="custom-theme-card group relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] backdrop-blur-md p-7 md:p-8">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-full pointer-events-none" />
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-[850ms] ease-out group-hover:opacity-50" style={{ background: "var(--accent-soft)" }} aria-hidden />
                  <div>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent">{n}</span>
                    <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">{title}</h3>
                    <p className="mt-2 inline-flex w-fit items-center gap-1.5 border-l-2 pl-2.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent border-accent">{eyebrow}</p>
                    <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">{desc}</p>
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
      <section className="relative overflow-hidden bg-canvas py-12 md:py-16">
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
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
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

      {/* SELECTED WORK */}
      <section id="work" className="relative overflow-hidden bg-canvas py-16 md:py-24">
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

          {/* 3D Service Carousel */}
          <ServiceCarousel
            cards={[
              { title: "Landmark Group, Dubai", desc: "Practical AI & automation training for retail operations teams.", image: "/training/landmark-group-dubai.jpg", href: "/services" },
              { title: "TATA Digital", desc: "AI consulting & training program for cross-functional digital teams.", image: "/service-transformation.jpg", href: "/services" },
              { title: "NICASA of NIRC of ICAI", desc: "AI training for finance professionals across ICAI chapters.", image: "/training/icai-nirc-new-delhi.jpg", href: "/services" },
              { title: "Ministry of Finance, Tanzania", desc: "AI awareness & practical use program for government officials.", image: "/training/ministry-of-finance-tanzania.jpg", href: "/services" },
              { title: "Future Engagements", desc: "New case studies and training programs are added regularly.", image: "/service-os.jpg", href: "/services" },
              { title: "Recent Workshops", desc: "Fresh AI workshops and consulting across emerging industries.", image: "/service-ai-training.jpg", href: "/services" },
            ]}
          />

          {/* Training/Speaking Stats Strip */}
          <div className="mt-20 md:mt-8">
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
              {heroStats.map((s, i) => (
                <Reveal key={s.l} delay={120}>
                  <div className="custom-theme-card p-5 h-full text-center">
                    <p className="stats-value font-display text-2xl font-extrabold tracking-tight text-gradient-brand animate-gradient md:text-3xl">{s.v}</p>
                    <p className="stats-label mt-2 text-xs uppercase tracking-wider font-semibold text-ink-muted leading-tight">{s.l}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-dark relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ background: "var(--accent)" }} aria-hidden />
        <div className="container-edit relative py-16 md:py-24">
          <Reveal>
            <h2 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl md:text-7xl">
              Ready to Build a Business <span className="font-serif italic font-medium text-gradient-brand">That Runs Better?</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.65] text-white/70 md:text-xl">
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
              <a href="https://wa.me/918929465115?text=Hi%20Ambesh%2C%20I%20want%20to%20book%20a%20strategy%20call." target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center gap-2 rounded-full border border-white/20 px-8 text-base font-semibold text-white transition-all hover:bg-white/10">
                WhatsApp Ambesh
              </a>
            </div>
            <p className="mt-5 text-xs text-white/50">Responds within 24 hours. No sales script. Just a real conversation.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}