import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote, Mic, BookOpen, Building2, Wrench, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Monogram } from "@/components/Monogram";
import { buildMeta, jsonLd, personSchema, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => {
    const m = buildMeta({
      path: "/about",
      title: "About Ambesh Tiwari - AI Trainer, Founder & Author",
      description:
        "Entrepreneur, product builder and AI trainer based in Delhi. Founder of BDA Technologies. Author of Accelerate with AI. 5,000+ trained.",
      keywords:
        "Ambesh Tiwari, AI trainer India biography, BDA Technologies founder, Automation School founder, Accelerate with AI author",

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

const beliefs = [
  {
    n: "01",
    h: "AI is powerful, but tools alone do not transform a business.",
    b: "",
  },
  {
    n: "02",
    h: "Founders should not be the only source of clarity inside the company.",
    b: "",
  },
  {
    n: "03",
    h: "A business scales better when work is visible, owned, reviewed, and improved consistently.",
    b: "",
  },
  {
    n: "04",
    h: "Systems are not bureaucracy when designed well. They create freedom.",
    b: "",
  },
  {
    n: "05",
    h: "The best AI adoption happens inside real workflows, not isolated experiments.",
    b: "",
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
  { year: "Bihar", t: "Where it started", d: "Grew up in a middle-class family. Curious, restless, never quite fit the mould. Tried joining the Indian Army. Did not make it. Kept the discipline." },
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
  { name: "HireAssist", year: "2025", desc: "AI assistant for recruitment workflows.", link: "hireassist.co.in", href: "https://hireassist.co.in" },
  { name: "TaskAssist", year: "2025", desc: "AI productivity tool for overwhelmed professionals.", link: "Coming soon", href: "#" },
];

const placeholderTestimonials = [
  { q: "One specific observation from a real client.", r: "VP, Financial Services (name withheld)" },
  { q: "Another quiet, weeks-after-the-session note from a team lead.", r: "Director, Retail Group (name withheld)" },
  { q: "A third real, permissioned quote will replace this once collected.", r: "Head of L&D, Public Sector (name withheld)" },
];

const knowables = [
  "Grew up in small-town Bihar. The first person in many rooms who understands both sides of the technology divide.",
  "Three promotions in three years at his first job. Then he quit to build his own thing. That tells you something about how he thinks.",
  "Tried joining the Indian Army. Multiple times. Did not make it. Kept the discipline. Named his company's logo colour dark olive green because of it.",
  "He believes the best way to learn AI is to build something useless with it first. The useful things come later.",
  "Based in Delhi. Happy to travel for a room worth being in.",
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden premium-canvas">
        <div className="absolute inset-0 tex-dots-soft opacity-60" />
        <div className="container-edit relative grid items-center gap-12 pt-10 pb-24 md:grid-cols-12 md:gap-16 md:pt-14 md:pb-32">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">About</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
                I help founders turn business chaos into systems.
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-8 max-w-xl text-lg text-ink-soft">
                I am Ambesh Tiwari, AI trainer, automation expert, author, and founder of BDA Technologies. My work sits at the intersection of AI, business systems, automation, and founder-led growth.
              </p>
            </Reveal>
            <Reveal delay={420} className="mt-10">
              <Link
                to="/contact"
                className="btn-premium inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Work With Ambesh <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={200} className="md:col-span-5">
            <Monogram className="aspect-[4/5] w-full" since="Building since 2017" />
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="relative bg-canvas py-14 md:py-20">
        <div className="absolute inset-0 tex-grid opacity-40" />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">A line he keeps coming back to</p>
            <Quote className="mt-8 h-12 w-12 text-violet" />
            <blockquote className="mt-6 max-w-5xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
              <span className="italic">"AI will not take your job.</span>{" "}
              <span className="text-gradient-brand animate-gradient italic">
                Someone using AI better than you, will."
              </span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* THE STORY - editorial narrative */}
      <section className="relative bg-sand py-14 md:py-16">
        <div className="absolute inset-0 tex-diagonal opacity-50" />
        <div className="container-edit relative grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <p className="eyebrow">The story</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-ink md:text-4xl">
                From Bihar to building across{" "}
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

      {/* WHAT HE BELIEVES */}
      <section className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow">What he believes</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Five beliefs that shape{" "}
              <span className="text-gradient-brand animate-gradient italic">every engagement.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((b, i) => (
              <Reveal key={b.n} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-rule bg-sand/50 p-7 transition-all hover:-translate-y-1 hover:border-ink/20 hover:bg-canvas hover:shadow-lift">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
                    Belief {b.n}
                  </p>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-ink">{b.h}</h3>
                  {b.b && <p className="mt-4 text-sm leading-relaxed text-ink-soft">{b.b}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THREE ROLES */}
      <section className="relative bg-sand py-14 md:py-16">
        <div className="absolute inset-0 tex-dots-soft opacity-50" />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">Three roles, one thread</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Entrepreneur. Builder.{" "}
              <span className="text-gradient-brand animate-gradient italic">Teacher.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Not a typical trainer. Someone who builds what he teaches, and teaches what he builds.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-rule bg-canvas p-8 transition-all hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white animate-gradient">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
                    {r.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">{r.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow">The journey</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              From Bihar to training teams across{" "}
              <span className="text-gradient-brand animate-gradient italic">three continents.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-rule bg-rule md:grid-cols-2">
            {journey.map((j, i) => (
              <Reveal key={`${j.year}-${j.t}`} delay={(i % 2) * 80}>
                <div className="h-full bg-canvas p-8 transition-colors hover:bg-sand">
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
      <section className="relative bg-sand py-14 md:py-16">
        <div className="absolute inset-0 tex-grid opacity-40" />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">Built along the way</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              One company. One school.{" "}
              <span className="text-gradient-brand animate-gradient italic">Three products.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Everything here started as something Ambesh needed for his own work.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {builds.map((b, i) => (
              <Reveal key={b.name} delay={i * 70}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full overflow-hidden rounded-3xl border border-rule bg-canvas p-8 transition-all hover:-translate-y-1 hover:border-ink/20 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-ink">{b.name}</h3>
                      <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
                        {b.year}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">{b.desc}</p>
                  <p className="mt-6 font-mono text-xs text-violet">{b.link}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-canvas py-14 md:py-16">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow">What people say</p>
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
              <Reveal key={i} delay={i * 100}>
                <div className="h-full rounded-3xl border border-dashed border-rule bg-sand/40 p-8">
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
      <section className="relative bg-sand py-14 md:py-16">
        <div className="container-edit grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">A few things worth knowing</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-ink md:text-4xl">
              Small details that shape{" "}
              <span className="italic text-gradient-brand animate-gradient">how Ambesh works.</span>
            </h2>
          </Reveal>
          <ul className="md:col-span-7 md:col-start-6 space-y-5">
            {knowables.map((k, i) => (
              <Reveal key={i} delay={i * 60} as="li">
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
      <section className="relative isolate overflow-hidden premium-canvas py-14 md:py-16">
        <div className="absolute inset-0 tex-dots-soft opacity-60" />
        <div className="container-edit relative text-center">
          <Reveal>
            <p className="eyebrow">Final word</p>
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
                className="btn-premium inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a 30-minute call <ArrowUpRight className="h-4 w-4" />
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
    </>
  );
}
