import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Mic, BookOpen, Building2, Wrench, ExternalLink, GraduationCap, Compass } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Monogram } from "@/components/Monogram";
import { buildMeta, jsonLd, personSchema, breadcrumbSchema } from "@/lib/seo";

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
  { year: "Small Town", t: "Where it started", d: "Grew up in a middle-class family. Curious, restless, never quite fit the mould. Tried joining the Indian Army. Did not make it. Kept the discipline." },
  { year: "Engineering + MBA", t: "Building the foundation", d: "BTech in Electronics and Telecommunication (BPUT, Odisha). MBA in International Marketing (Symbiosis, Pune). Brand Management from the University of London." },
  { year: "Zen Technologies", t: "First corporate chapter", d: "Three promotions in three years. Trained defence and police teams on simulators. Discovered a talent for business development. Resigned to build something of his own." },
  { year: "2017", t: "BDA Technologies", d: "Founded Building Digital Arena in Delhi. A growth and digital transformation agency. StartupIndia recognised. Google, Meta and Shopify partnerships." },
  { year: "2023", t: "AI pivot", d: "Built a working tool with AI in two minutes. Realised what had just changed. Shifted entirely to AI training and product development." },
  { year: "2023", t: "Automation School", d: "Launched an online learning platform for professionals building AI and automation skills." },
  { year: "2024", t: "Book + Podcast", d: "Published Accelerate with AI. Launched Inspire with Ambesh. 30+ podcast episodes with founders and operators." },
  { year: "2025", t: "Products + International", d: "Shipped LinkAssist, HireAssist, TaskAssist. Delivered training at Landmark Group (Dubai), ISB (Hyderabad), Ministry of Finance (Tanzania)." },
];

const builds = [
  { name: "BDA Technologies", year: "2017", desc: "AI transformation and growth agency. The home base.", link: "bdatechnologies.com", href: "https://bdatechnologies.com" },
  { name: "Automation School", year: "2023", desc: "Online learning for professionals. Structured courses on AI and automation.", link: "automationschool.in", href: "https://automationschool.in" },
  { name: "LinkAssist", year: "2025", desc: "AI-powered LinkedIn authority building.", link: "linkassist.ai", href: "https://linkassist.ai" },
  { name: "HireAssist", year: "2025", desc: "AI assistant for recruitment workflows.", link: "hireassist.org", href: "https://hireassist.org" },
  { name: "TaskAssist", year: "2025", desc: "AI productivity tool for overwhelmed professionals.", link: "Coming soon", href: "#" },
  { name: "BDA OS", year: "2026", desc: "An AI-powered business operating system designed to streamline workflows, automate operations, and help organizations scale with intelligent processes.", link: "Coming soon", href: "https://bdatechnologies.com" },
];

const placeholderTestimonials = [
  { q: "One specific observation from a real client.", r: "VP, Financial Services (name withheld)" },
  { q: "Another quiet, weeks-after-the-session note from a team lead.", r: "Director, Retail Group (name withheld)" },
  { q: "A third real, permissioned quote will replace this once collected.", r: "Head of L&D, Public Sector (name withheld)" },
];

const knowables = [
  "Grew up in small-town. The first person in many rooms who understands both sides of the technology divide.",
  "Three promotions in three years at his first job. Then he quit to build his own thing. That tells you something about how he thinks.",
  "Tried joining the Indian Army. Multiple times. Did not make it. Kept the discipline. Named his company's logo colour dark olive green because of it.",
  "He believes the best way to learn AI is to build something useless with it first. The useful things come later.",
  "Based in Delhi. Happy to travel for a room worth being in.",
];

function AboutPage() {
  return (
    <div className="min-h-screen w-full relative bg-canvas">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative grid items-center gap-12 pt-10 pb-24 md:grid-cols-12 md:gap-16 md:pt-14 md:pb-32">
          <div className="md:col-span-7">
            <Reveal eager>
              <p className="eyebrow eyebrow-blue">About</p>
            </Reveal>
            <Reveal delay={100} eager>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
                I help founders turn business chaos{" "}
                <span className="text-gradient-brand animate-gradient">into systems.</span>
              </h1>
            </Reveal>
            <Reveal delay={250} eager>
              <p className="mt-8 max-w-xl text-lg text-ink-soft">
                I am Ambesh Tiwari, a practical AI adoption partner, automation strategist, author, and founder of BDA Technologies. My work combines hands-on training, custom workflow design, and process implementation to help organizations run without founder dependency.
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
            <p className="eyebrow eyebrow-indigo">A line he keeps coming back to</p>
            <Quote className="mt-8 h-12 w-12 text-violet" />
            <blockquote className="mt-6 max-w-5xl font-serif text-3xl font-medium leading-[1.2] tracking-tight text-ink md:text-5xl">
              <span className="italic">"You don't need to be perfect in everything to achieve your dreams.</span>{" "}
              <span className="text-gradient-brand animate-gradient italic">
                You just have to find someone who knows what you don't."
              </span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* THE STORY - editorial narrative */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <p className="eyebrow eyebrow-cyan">The story</p>
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
                  I started by helping people understand AI and automation in a practical way. Over time, one pattern became clear: most businesses do not struggle because they lack tools. They struggle because their execution depends too much on the founder.
                </p>
                <p>
                  The founder knows what matters. The founder remembers the follow-ups. The founder connects the dots. The founder checks progress. The founder becomes the operating system.
                </p>
                <p>
                  That works in the beginning. But it becomes a bottleneck as the business grows.
                </p>
                <p>
                  Today, my work is focused on helping founder-led businesses build AI-powered operating systems that bring visibility, accountability, workflows, SOPs, automations, and execution routines into one practical structure.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT HE IS HIRED FOR */}
      <section className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow eyebrow-blue">Capabilities</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              What Ambesh is{" "}
              <span className="text-gradient-brand animate-gradient italic">hired for.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Providing a complete bridge between workflow strategy, people training, and automated systems implementation.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {hiredFor.map((h) => (
                <Reveal key={h.title} delay={100}>
                  <div className="custom-theme-card group h-full rounded-3xl p-8">
                    <div className="flex items-start justify-between">
                      <div
                        className="icon-box flex h-12 w-12 items-center justify-center rounded-xl border border-rule transition-colors duration-300"
                      >
                        <h.icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-ink-muted">{h.label}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">{h.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-soft">{h.body}</p>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* WHAT HE BELIEVES */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow eyebrow-indigo">What he believes</p>
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
      <section className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow eyebrow-cyan">Three roles, one thread</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Entrepreneur. Builder.{" "}
              <span className="text-gradient-brand animate-gradient italic">Teacher.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Not a typical trainer. Someone who builds what he teaches, and teaches what he builds.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {roles.map((r) => (
                <Reveal key={r.title} delay={100}>
                  <div className="custom-theme-card group h-full rounded-3xl p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-rule transition-colors duration-300"
                        >
                          <r.icon className="h-5 w-5" />
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
              )
            )}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow eyebrow-blue">The journey</p>
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
            <p className="eyebrow eyebrow-indigo">Built along the way</p>
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
              )
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow eyebrow-cyan">What people say</p>
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
                  <Mic className="h-5 w-5 text-ink-muted" />
                  <p className="mt-6 font-serif text-lg italic leading-snug text-ink">
                    "{t.q}"
                  </p>
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
            <p className="eyebrow eyebrow-blue">A few things worth knowing</p>
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
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-16">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative text-center">
          <Reveal>
            <p className="eyebrow eyebrow-indigo">Final word</p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
              If any of this resonates,{" "}
              <span className="italic text-gradient-brand animate-gradient">
                let us have a conversation.
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-ink-soft">
              Thirty minutes. No pitch deck. No pressure. Just a real discussion about what your
              team needs and whether we are the right fit for each other.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-12">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                search={{ service: "strategy" }}
                className="btn-premium inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="mailto:hello@ambesh.com"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-ink/15 bg-canvas px-8 text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink/40"
              >
                hello@ambesh.com
              </a>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              Responds within 24 hours
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
