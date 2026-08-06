import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { buildMeta, jsonLd, breadcrumbSchema, SITE_URL } from "@/lib/seo";
import { BookOpen, Search, Calendar, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => {
    const m = buildMeta({
      path: "/insights",
      title: "Insights & Articles | Ambesh Tiwari",
      description:
        "Essays and case guides on delegation, operational design, workflow automation, and practical AI adoption for founder-led businesses.",
      keywords:
        "business systems blog, business scaling articles, founder dependency, SOP workflows, corporate AI adoption",
    });
    return {
      ...m,
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
        ),
      ],
    };
  },
  component: InsightsPage,
});

const categories = ["All", "Systems", "AI & Tech", "Strategy"] as const;
type Category = (typeof categories)[number];

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: Exclude<Category, "All">;
  slug: string;
}

const articles: Article[] = [
  {
    title: "Why Your Business is Stuck: The Founder Dependency Trap",
    excerpt:
      "If every decision, client issue, and operational query flows through you, you haven't built a company - you've built a high-paying job. Here is how to step out of the loop.",
    date: "July 12, 2026",
    readTime: "6 min read",
    category: "Systems",
    slug: "founder-dependency-trap",
  },
  {
    title: "Pragmatic AI: When to Use LLMs (And When to Avoid Them)",
    excerpt:
      "Most corporate AI implementations fail because leaders attempt to automate complex reasoning before stabilizing basic workflows. Let's look at the real opportunity.",
    date: "June 28, 2026",
    readTime: "8 min read",
    category: "AI & Tech",
    slug: "pragmatic-ai-use-cases",
  },
  {
    title: "The 90-Day Strategy Sprint: Aligning Team Workflows",
    excerpt:
      "How to translate long-term goals into clear, department-level weekly actions that teams can execute autonomously without constant leadership check-ins.",
    date: "May 15, 2026",
    readTime: "5 min read",
    category: "Strategy",
    slug: "90-day-strategy-sprint",
  },
  {
    title: "SOPs That Sell: Writing Workflows Your Team Will Actually Use",
    excerpt:
      "SOPs languish in shared drives because they are written like compliance manuals. Here is a framework for creating action-oriented guides that drive consistency.",
    date: "April 02, 2026",
    readTime: "7 min read",
    category: "Systems",
    slug: "writing-useful-sops",
  },
];

function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-premium-side-gradient py-14 md:py-20">
        <div className="home-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <div className="container-edit relative">
          <Reveal>
            <p className="eyebrow">Insights</p>
            <h1 className="mt-5 max-w-3xl font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl">
              Systems, scaling, and{" "}
              <span className="font-serif italic font-medium text-gradient-brand animate-gradient">
                practical AI leverage.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-ink-soft">
              Essays, frameworks, and guides on how to simplify operations, reduce founder
              dependence, and install automated leverage.
            </p>
          </Reveal>

          {/* Search and Filters */}
          <Reveal delay={150}>
            <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between border-b border-rule pb-8">
              {/* Category Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                      selectedCategory === cat
                        ? "bg-gradient-brand text-canvas shadow-lift"
                        : "border border-rule bg-canvas text-ink-soft hover:bg-sand"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full max-w-sm">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-rule bg-canvas py-2 pl-9 pr-4 text-xs text-ink outline-none focus:border-ink/30 focus:bg-canvas transition-colors"
                />
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <Reveal key={article.slug} delay={100}>
                  <article className="custom-theme-card group flex h-full flex-col justify-between rounded-2xl p-7">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full border border-rule bg-sand px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-ink-muted">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      <h2 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.025em] text-ink leading-[1.2] group-hover:text-accent transition-colors">
                        {article.title}
                      </h2>
                      <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-8 border-t border-rule pt-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                        Read essay{" "}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <div className="col-span-full rounded-2xl border border-dashed border-rule custom-theme-card-static py-16 text-center">
                  <p className="text-sm text-ink-muted">
                    No articles found matching your criteria.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter signup banner */}
      <section className="relative overflow-hidden bg-canvas py-16 md:py-20 border-t border-rule">
        <div className="container-edit relative max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Newsletter</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Get systems advice directly in your inbox.
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              Every fortnight, I share practical SOP templates, automation ideas, and AI prompts
              that founders are using to scale operations and reclaim their time.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col gap-2 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="rounded-full border border-rule bg-canvas px-5 py-3 text-xs text-ink outline-none focus:border-ink/30 w-full sm:max-w-xs transition-colors"
              />
              <button
                type="submit"
                className="btn-premium rounded-full px-6 py-3 text-xs font-semibold text-canvas shadow-lift transition-all hover:-translate-y-0.5"
              >
                Join Private Letter
              </button>
            </form>
            <p className="mt-3 text-xs text-ink-muted">Zero spam. Unsubscribe in a single click.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
