import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, Play, Mail, Mic, Star, MessageCircle, User } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buildMeta, jsonLd, breadcrumbSchema, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { GridVignetteBackground } from "@/components/ui/vignette-grid-background";

export const Route = createFileRoute("/podcast")({
  head: () => {
    const m = buildMeta({
      path: "/podcast",
      title: "Inspire with Ambesh - The Ambesh Tiwari Show Podcast",
      description:
        "Conversations with founders, operators and builders about ambition, decisions, setbacks, and what it takes to build something real. Hosted by Ambesh Tiwari.",
      keywords:
        "Ambesh Tiwari Show podcast, Inspire with Ambesh, AI podcast India, founder podcast India, business podcast India",
    });
    return {
      ...m,
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "PodcastSeries",
          name: "Inspire with Ambesh",
          alternateName: "The Ambesh Tiwari Show",
          url: `${SITE_URL}/podcast`,
          image: DEFAULT_OG_IMAGE,
          inLanguage: "en",
          description:
            "Conversations with founders, operators and builders. No predictions. No hot takes. Just field notes from people doing the work.",
          author: { "@type": "Person", name: "Ambesh Tiwari", url: SITE_URL },
        }),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Podcast", path: "/podcast" },
          ]),
        ),
      ],
    };
  },
  component: PodcastPage,
});

const featuredEpisodes = [
  {
    title: "Seize the opportunity as you live only once",
    guest: "Saji Mathews",
    blurb:
      "Saji is a seasoned integrated marketing executive with over two decades of experience in people management and performance leadership. A conversation about seizing moments and making the most of the one life you get.",
    color: "from-violet to-pink",
  },
  {
    title: "Don't follow your passion blindly",
    guest: "Amitabh Tiwari, aka Political Baaba",
    blurb:
      "A counterintuitive take on passion, career choices, and why the advice everyone gives might be exactly wrong. Amitabh shares his own unconventional path with brutal honesty.",
    color: "from-pink to-amber",
  },
  {
    title: "When life gives you lemons, make a lemonade",
    guest: "Rishi Tanna",
    blurb:
      "Rishi is on a mission to help young entrepreneurs kickstart their journeys. A conversation about resilience, starting again, and what it actually takes to turn setbacks into momentum.",
    color: "from-amber to-cyan",
  },
];

const platforms = [
  { name: "Spotify", color: "bg-[#1DB954]" },
  { name: "Apple Podcasts", color: "bg-[#A855F7]" },
  { name: "YouTube", color: "bg-[#FF0000]" },
  { name: "JioSaavn", color: "bg-[#1DB954]" },
];

const topics = [
  "Entrepreneurship",
  "Career decisions",
  "AI and technology",
  "Personal growth",
  "Marketing and branding",
  "Resilience and setbacks",
  "Building a business in India",
];

function Waveform() {
  const bars = Array.from({ length: 60 }, (_, i) => {
    const h = 30 + Math.sin(i * 0.4) * 25 + Math.random() * 30;
    const dur = 0.9 + Math.sin(i * 0.7) * 0.35 + Math.random() * 0.3;
    return { h, dur };
  });
  return (
    <div className="flex h-32 items-center gap-1">
      {bars.map((b, i) => (
        <div
          key={i}
          className="eq-bar w-1.5 rounded-full bg-gradient-brand"
          style={{
            height: `${b.h}%`,
            animationDelay: `${i * 45}ms`,
            animationDuration: `${b.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

function PodcastPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden premium-canvas bg-premium-side-gradient">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <GridVignetteBackground
          className="hidden dark:block opacity-40"
          x={50}
          y={50}
          intensity={100}
          size={48}
          horizontalVignetteSize={80}
          verticalVignetteSize={60}
        />
        <div className="container-edit relative grid gap-12 pt-10 pb-12 md:grid-cols-12 md:gap-16 md:pt-16 md:pb-16">
          <div className="md:col-span-8">
            <Reveal eager>
              <p className="eyebrow flex items-center gap-2">
                <Headphones className="h-3.5 w-3.5" /> The podcast
              </p>
            </Reveal>
            <Reveal delay={100} eager>
              <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl lg:text-[7rem]">
                Inspire with <br />
                <span className="text-gradient-brand animate-gradient">Ambesh.</span>
              </h1>
            </Reveal>
            <Reveal delay={250} eager>
              <p className="mt-8 max-w-xl text-lg text-ink-muted">
                Conversations with founders, operators and builders about the things that actually
                matter: ambition, decisions, setbacks, and what it takes to build something real.
              </p>
            </Reveal>
            <Reveal delay={350} eager>
              <p className="mt-4 max-w-xl font-serif italic text-ink-muted">
                No predictions. No hot takes. Just field notes from people doing the work.
              </p>
            </Reveal>
            <Reveal delay={450} eager className="mt-10">
              <Waveform />
            </Reveal>
          </div>
          <Reveal delay={200} eager className="md:col-span-4">
            <div className="relative flex aspect-square w-full flex-col items-center justify-center rounded-3xl bg-gradient-brand text-white shadow-glow animate-gradient">
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <Headphones className="relative h-12 w-12" />
              <p className="relative mt-4 text-6xl font-extrabold tracking-tighter">30+</p>
              <p className="relative mt-1 px-6 text-center text-xs text-white/80">
                conversations published
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="relative isolate overflow-hidden border-y border-rule py-12">
        <div className="container-edit relative flex flex-wrap items-center gap-x-6 gap-y-4">
          <p className="eyebrow flex items-center gap-2 w-full md:w-auto">
            <Play className="h-3.5 w-3.5" /> Listen on
          </p>
          {platforms.map((p) => (
            <a
              key={p.name}
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-rule px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-ink hover:text-canvas"
            >
              <span className={`h-2 w-2 rounded-full ${p.color}`} />
              {p.name}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </section>

      {/* FEATURED EPISODES */}
      <section className="relative isolate overflow-hidden">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <GridVignetteBackground
          className="hidden dark:block opacity-40"
          x={50}
          y={50}
          intensity={100}
          size={48}
          horizontalVignetteSize={80}
          verticalVignetteSize={60}
        />
        <div className="container-edit relative py-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Star className="h-3.5 w-3.5" /> Featured conversations
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              A few worth{" "}
              <span className="text-gradient-brand animate-gradient">starting with.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              If you are new here, these three conversations are a good way in.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {featuredEpisodes.map((e, i) => (
              <Reveal key={e.title} delay={80}>
                <a
                  href="#"
                  className="custom-theme-card group flex h-full flex-col rounded-3xl p-6"
                >
                  <div
                    className={`relative flex h-32 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${e.color} text-white shadow-glow`}
                  >
                    <Play className="relative h-9 w-9 fill-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-violet">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-ink">with {e.guest}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{e.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet">
                    Listen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={250} className="mt-12">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-violet"
            >
              See all 30+ episodes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE TALK ABOUT */}
      <section className="relative isolate overflow-hidden">
        <div className="container-edit relative py-16">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="eyebrow flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5" /> What we talk about
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-5xl">
                The <span className="text-gradient-brand animate-gradient">territory.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <p className="text-lg text-ink-muted">
                This is not an AI podcast. It is a podcast about building things, making decisions,
                and staying honest about what that costs. AI shows up because it is part of the
                world now. But the conversations are always about the people, not the tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {topics.map((t, i) => (
                  <Reveal key={t} delay={40}>
                    <span className="inline-flex items-center rounded-full border border-rule bg-canvas px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-violet/40 hover:text-violet">
                      {t}
                    </span>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT THE HOST */}
      <section className="relative isolate overflow-hidden">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <GridVignetteBackground
          className="hidden dark:block opacity-40"
          x={50}
          y={50}
          intensity={100}
          size={48}
          horizontalVignetteSize={80}
          verticalVignetteSize={60}
        />
        <div className="container-edit relative py-16">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-5">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-brand animate-gradient shadow-glow">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative flex h-full w-full flex-col items-center justify-center text-white">
                  <Mic className="h-12 w-12" />
                  <p className="mt-6 text-[8rem] font-black leading-none tracking-tighter">AT</p>
                  <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/80">
                    Your Host
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <User className="h-3.5 w-3.5" /> Your host
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-5xl">
                Ambesh <span className="text-gradient-brand animate-gradient">Tiwari.</span>
              </h2>
              <p className="mt-6 text-lg text-ink-muted">
                Entrepreneur, AI trainer, author of{" "}
                <span className="font-semibold text-ink">Accelerate with AI</span>, and founder of
                BDA Technologies. Ambesh started this podcast because the most useful things he has
                learned came from conversations, not courses. This is his way of sharing those
                conversations with everyone who could not be in the room.
              </p>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-violet"
              >
                Read the full story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative isolate overflow-hidden py-16">
        <div className="container-edit relative">
          <Reveal className="relative overflow-hidden rounded-3xl border border-rule bg-canvas p-12 md:p-16">
            <div className="absolute inset-0 tex-dots-soft opacity-60" aria-hidden />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="eyebrow flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> Stay in the loop
                </p>
                <h3 className="mt-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
                  New conversations.{" "}
                  <span className="text-gradient-brand animate-gradient">In your inbox.</span>
                </h3>
                <p className="mt-4 text-ink-muted">
                  No schedule. No spam. Just a note when a new conversation drops, and occasionally
                  a short idea worth your time.
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = (new FormData(e.currentTarget).get("email") as string) || "";
                  window.location.href = `mailto:hello@ambesh.com?subject=Subscribe%20to%20podcast%20updates&body=Subscribe%20${encodeURIComponent(email)}`;
                }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="h-14 flex-1 rounded-full border border-rule bg-canvas px-6 text-ink placeholder:text-ink-muted/60 focus:border-violet focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-premium inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold"
                >
                  <Mail className="h-4 w-4" /> Subscribe
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING - GUEST PITCH */}
      <section className="relative isolate overflow-hidden">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <GridVignetteBackground
          className="hidden dark:block opacity-40"
          x={50}
          y={50}
          intensity={100}
          size={48}
          horizontalVignetteSize={80}
          verticalVignetteSize={60}
        />
        <div className="container-edit relative py-16 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              Got a story{" "}
              <span className="text-gradient-brand animate-gradient">worth sharing?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
              If you have built something interesting, lived through something worth telling, or
              have a perspective most people have not heard, Ambesh would love to talk. The best
              episodes come from people he was not expecting.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              to="/contact"
              search={{ type: "podcast" }}
              className="btn-premium mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold"
            >
              <Mic className="h-4 w-4" /> Pitch a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
