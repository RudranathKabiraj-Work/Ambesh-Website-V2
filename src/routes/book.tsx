import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import type { FormEvent } from "react";
import { ArrowRight, BookOpen, Mail, Award, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { buildMeta, jsonLd, breadcrumbSchema, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { submitLeadToGHL } from "@/lib/ghl";

export const Route = createFileRoute("/book")({
  head: () => {
    const m = buildMeta({
      path: "/book",
      title: "Accelerate with AI - Book by Ambesh Tiwari",
      description:
        "Accelerate with AI: a simple book for a complicated world. By Ambesh Tiwari. Amazon bestseller. Available on Kindle and in print.",
      keywords:
        "Accelerate with AI book, Ambesh Tiwari book, AI book for professionals, AI book India, AI for business owners book",
      ogType: "book",
    });
    return {
      ...m,
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Accelerate with AI",
          alternateName: "Accelerate with AI: A Simple Book for a Complicated World",
          author: { "@type": "Person", name: "Ambesh Tiwari", url: SITE_URL },
          inLanguage: "en",
          datePublished: "2023-11-12",
          bookFormat: ["https://schema.org/EBook", "https://schema.org/Paperback"],
          image: DEFAULT_OG_IMAGE,
          url: `${SITE_URL}/book`,
          description:
            "A practical guide for business owners, founders and professionals on using AI to scale their work.",
          offers: {
            "@type": "Offer",
            url: "https://www.amazon.in/dp/B0CN8L7ZWP",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "120",
            bestRating: "5",
            worstRating: "1",
          },
        }),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book", path: "/book" },
          ]),
        ),
      ],
    };
  },
  component: BookPage,
});

const audiences = [
  {
    t: "Business owners and founders",
    b: "Who know AI matters but do not know where to start. A framework for thinking about AI as a business decision, not a technology decision.",
    c: "from-violet to-pink",
  },
  {
    t: "Team leads and managers",
    b: "Who need to help their teams adopt AI without disrupting what already works. Practical chapters on implementation, not theory.",
    c: "from-pink to-amber",
  },
  {
    t: "Professionals building their career",
    b: "Who want to be the person on their team who actually understands AI - not the one who is still thinking about it.",
    c: "from-amber to-cyan",
  },
];

const takeaways = [
  "How AI is transforming industries and what it means for your business",
  "How to navigate the AI tool landscape and pick what actually matters",
  "How to use AI to personalise customer experiences",
  "Common adoption challenges and how to work through them",
  "Where AI is heading and what to watch",
  "Real-world applications from automation to customer insights",
  "How to build an AI strategy that aligns with your business goals",
  "Using AI for better data-driven decisions",
  "Ethical considerations that actually matter in practice",
  "How to build a scalable, AI-powered business model",
];

const featuredEndorsement = {
  name: "William Koehler, Ph.D.",
  role: "Dean, Sloane School of Business & Communication, Regis College, Massachusetts, USA",
  q: "In his timely new book, Accelerate with AI, growth consultant and entrepreneur Ambesh Tiwari has provided something the business world sorely needs: a strategically focused, practical, and accessible guide to the myriad ways in which firms of all sizes can harness artificial intelligence to be more efficient and effective.",
};

const endorsements = [
  {
    name: "Madhu C Dutta-Koehler, PhD, MIT",
    role: "Founder and President, The Greener Health Corp.",
    q: "If businesses want to leverage AI to get ahead, Ambesh Tiwari's insights and takeaways are certainly a fundamental stepping stone in this field.",
  },
  {
    name: "Aditya Lohia",
    role: "Executive Director, Lohia Industries (P) Ltd.",
    q: "Ambesh has done an excellent job in making everyone aware of the fact that AI is not for the corporate houses only but of every businessperson.",
  },
  {
    name: "Shyam Sunder",
    role: "AI Researcher, CSIR-CEERI, Pilani",
    q: "The academic world often dwells on theory, but Ambesh's book is a refreshing pivot to action. It translates high-level concepts into actionable strategies that can be implemented from day one.",
  },
  {
    name: "Prabhat Sinha",
    role: "IT Expert, Entrepreneur & Best-selling Author",
    q: "In the book Accelerate with AI, Ambesh has tried to accumulate some highly effective AI tools, tips and tricks at one place for business owners.",
  },
];

const pressLogos = [
  { name: "Forbes India", src: "/logos/forbes-india.svg", className: "h-5 sm:h-8" },
  { name: "Mid-day", src: "/logos/mid-day.png", className: "h-5 sm:h-8" },
  { name: "Disrupt", src: "/logos/disrupt.png", className: "h-10 sm:h-14" },
  { name: "Navbharat Times", src: "/logos/navbharat-times.png", className: "h-5 sm:h-8" },
  { name: "Dailyhunt", src: "/logos/dailyhunt-full.png", className: "h-8 sm:h-16" },
  { name: "Thrive Global", src: "/logos/thrive-global.svg", className: "h-4 sm:h-6" },
  { name: "NewsTrack", src: "/logos/newstrack.jpg", className: "h-5 sm:h-8", solid: true },
];

function BookCover() {
  return (
    <div className="group relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-3xl" style={{ background: "var(--accent-soft)" }} aria-hidden />
      <div className="relative aspect-2/3 w-full overflow-hidden rounded-2xl border border-rule shadow-lift transition-transform duration-500 group-hover:-translate-y-1">
        <img
          src="https://acceleratewithai.in/wp-content/uploads/2023/11/Kindle-cover-1600-x-2500-px-1.jpg"
          alt="Accelerate with AI - book cover by Ambesh Tiwari"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
}

function BookPage() {
  const submitChapterLeadFn = useServerFn(submitLeadToGHL);

  async function onChapterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (new FormData(e.currentTarget).get("email") as string) || "";

    try {
      await submitChapterLeadFn({
        data: {
          name: email.split("@")[0] || "Book reader",
          email,
          serviceLabel: "Book - Chapter 1 request",
          pageUrl: window.location.href,
        },
      });
    } catch (error) {
      console.error("GHL sync failed:", error);
    }

    window.location.href = `mailto:hello@ambesh.com?subject=Send%20me%20Chapter%201&body=Please%20send%20Chapter%201%20to%20${encodeURIComponent(email)}`;
  }

  return (
    <div className="premium-canvas book-page">
      {/* HERO */}
      <section className="premium-canvas bg-premium-side-gradient relative isolate overflow-hidden">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative grid items-center gap-16 pt-10 pb-16 md:grid-cols-12 md:gap-16 md:pt-14 md:pb-20">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">The book</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] text-ink md:text-7xl lg:text-[5.5rem]">
                Accelerate <br/>
                <span className="text-gradient-brand">With AI.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 font-serif text-2xl italic leading-snug text-ink-soft md:text-3xl">
                A simple book for a complicated world.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
                A must-read for those who not only want to understand AI but also apply it to scale their
                business.
              </p>
            </Reveal>
            <Reveal delay={400} className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-rule px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                <Award className="h-3.5 w-3.5" /> Amazon Bestseller
              </span>
              <span className="text-sm text-ink-muted">Kindle + Physical · English · 2023</span>
            </Reveal>
            <Reveal delay={500} className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.amazon.in/dp/B0CLKZK6JS?ref_=cm_sw_r_cp_ud_dp_YJBSASGYYGPGJ42PBTK2&asin=B0CLKZK6JS&revisionId=7bc12fe7&format=3&depth=1"
                target="_blank"
                rel="noreferrer"
                className="btn-premium inline-flex h-14 items-center gap-2 rounded-full px-8 text-base font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read on Kindle <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="https://www.amazon.in/dp/B0CLKZK6JS?ref_=cm_sw_r_cp_ud_dp_YJBSASGYYGPGJ42PBTK2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-ink/15 bg-canvas px-8 text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink/40"
              >
                <ShoppingBag className="h-4 w-4" /> Get a Physical Copy
              </a>
            </Reveal>
          </div>
          <Reveal delay={300} className="md:col-span-5">
            <BookCover />
          </Reveal>
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
              items={pressLogos.map((l) => (
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

      {/* WHO IT'S FOR */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-16">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">Who it is for</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              Written for people who <span className="text-gradient-brand animate-gradient">do real work.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {audiences.map((x, i) => (
              <Reveal key={x.t} delay={100}>
                <div className="custom-theme-card group h-full rounded-3xl p-8">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${x.c}`} />
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{x.t}</h3>
                  <p className="mt-4 text-base text-ink-muted">{x.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE BOOK COVERS */}
      <section className="relative bg-canvas py-16">
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">Inside the book</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              10 things this book will{" "}
              <span className="text-gradient-brand animate-gradient">teach you.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-muted">10 clear takeaways.</p>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {takeaways.map((t, i) => (
              <Reveal key={t} delay={60}>
                <div className="custom-theme-card group flex items-start gap-5 rounded-2xl p-5">
                  <span className="font-mono text-sm text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-semibold tracking-tight transition-colors group-hover:text-violet">
                    {t}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT EXPERTS SAY */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-16">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">What experts say</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              The people who <span className="text-gradient-brand animate-gradient">read it first.</span>
            </h2>
          </Reveal>

          {/* Featured endorsement */}
          <Reveal delay={150} className="mt-12">
            <div className="relative overflow-hidden rounded-3xl border border-rule bg-canvas p-10 shadow-lift md:p-14">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-muted">
                Featured endorsement
              </p>
              <p className="mt-6 font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                "{featuredEndorsement.q}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand font-mono text-sm font-bold text-white">
                  WK
                </div>
                <div>
                  <p className="text-lg font-bold tracking-tight">{featuredEndorsement.name}</p>
                  <p className="text-sm text-ink-muted">{featuredEndorsement.role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Other endorsements */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {endorsements.map((e, i) => (
              <Reveal key={e.name} delay={80}>
                <div className="custom-theme-card h-full rounded-3xl p-8">
                  <p className="font-serif text-lg italic leading-snug text-ink">"{e.q}"</p>
                  <div className="mt-6">
                    <p className="text-base font-bold tracking-tight">{e.name}</p>
                    <p className="text-sm text-ink-muted">{e.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE AUTHOR */}
      <section className="relative bg-canvas py-16">
        <div className="container-edit relative">
          <div className="grid gap-12 md:grid-cols-12 md:gap-20">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">About the author</p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-8">
            <p className="text-2xl font-medium leading-relaxed tracking-tight text-ink md:text-3xl">
              Ambesh Tiwari is the founder of BDA Technologies, host of the{" "}
              <em className="font-serif italic">Inspire with Ambesh</em> podcast, and an AI trainer who has
              worked with{" "}
              <span className="text-gradient-brand animate-gradient">5,000+ professionals</span> across 50+
              organisations in India, UAE and Africa. He blends an engineering background with an MBA in
              International Marketing, a decade of business building, and a practical, no-hype approach to
              AI that comes from using it in his own work every day.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-violet hover:text-pink"
            >
              Read the full story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative isolate overflow-hidden bg-premium-side-gradient pb-24 pt-16">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <div className="cta-dark overflow-hidden rounded-3xl p-12 md:p-16">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">Free</p>
                <h3 className="mt-4 text-4xl font-extrabold leading-tight tracking-tighter text-white md:text-5xl">
                  Get <span className="text-gradient-brand animate-gradient">Chapter 1</span> on us.
                </h3>
                <p className="mt-4 text-white/70">
                  Drop your email. We'll send the first chapter as a PDF - and an invite to the next AI
                  training cohort.
                </p>
                <Link
                  to="/training"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
                >
                  <BookOpen className="h-4 w-4" /> Or explore AI Knowledge programs
                </Link>
              </div>
              <form onSubmit={onChapterSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="h-14 flex-1 rounded-full border border-white/15 bg-white/5 px-6 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-premium inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Send it
                  </span>
                </button>
              </form>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
