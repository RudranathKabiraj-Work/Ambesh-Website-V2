/**
 * SEO + AEO helpers.
 * Centralised so every route stays consistent and JSON-LD stays valid.
 */

export const SITE_URL = "https://ambeshtiwari.com";
export const SITE_NAME = "Ambesh Tiwari";
export const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/88f53b97-d45a-45fa-a7ca-901676d1bd9d/id-preview-8a37ae12--8aebadb7-530d-40cf-a5a1-3e8c40bb2385.lovable.app-1776533653876.png";

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "book" | "profile";
};

/**
 * Build a canonical, OpenGraph, Twitter, robots and keywords meta block
 * for any route. Title/description deduplicate against root by name/property.
 */
export function buildMeta(m: RouteMeta) {
  const url = `${SITE_URL}${m.path === "/" ? "" : m.path}`;
  const image = m.ogImage ?? DEFAULT_OG_IMAGE;
  const ogType = m.ogType ?? "website";
  return {
    meta: [
      { title: m.title },
      { name: "description", content: m.description },
      ...(m.keywords ? [{ name: "keywords", content: m.keywords }] : []),
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "Ambesh Tiwari" },

      // OpenGraph
      { property: "og:type", content: ogType },
      { property: "og:url", content: url },
      { property: "og:title", content: m.title },
      { property: "og:description", content: m.description },
      { property: "og:image", content: image },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: SITE_NAME },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: m.title },
      { name: "twitter:description", content: m.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/**
 * JSON-LD script tag - inject via head().scripts.
 * AEO engines (ChatGPT, Perplexity, Google AI Overviews) prefer schema.org
 * structured data when deciding what to cite.
 */
export function jsonLd(data: Record<string, unknown> | Array<Record<string, unknown>>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

/* ============== Reusable schema fragments ============== */

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ambesh Tiwari",
  alternateName: "Ambesh",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  jobTitle: "Business Operating Systems Consultant, AI Trainer, Author",
  description:
    "Ambesh Tiwari is a Business Operating Systems consultant, AI trainer, author and founder of BDA Technologies. He has trained 5,000+ professionals across 50+ organisations in 11 industries.",
  worksFor: {
    "@type": "Organization",
    name: "BDA Technologies",
    url: "https://bdatechnologies.com",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Symbiosis Institute, Pune" },
    { "@type": "CollegeOrUniversity", name: "BPUT, Odisha" },
    { "@type": "CollegeOrUniversity", name: "University of London" },
  ],
  knowsAbout: [
    "Business Operating Systems",
    "SOPs and Workflows",
    "Founder-led business scaling",
    "Artificial Intelligence",
    "AI Training",
    "AI Automation",
    "Corporate Training",
  ],
  nationality: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/in/ambeshtiwari",
    "https://youtube.com/@ambeshtiwari",
    "https://twitter.com/ambeshtiwari",
    "https://instagram.com/ambeshtiwari",
    "https://bdatechnologies.com",
    "https://acceleratewithai.in",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ambesh Tiwari",
  legalName: "BDA Technologies Pvt. Ltd.",
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  founder: { "@type": "Person", name: "Ambesh Tiwari" },
  foundingLocation: { "@type": "Place", name: "Delhi, India" },
  areaServed: ["IN", "AE", "TZ"],
  email: "hello@ambesh.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  description:
    "Ambesh Tiwari helps founder-led businesses build clear SOPs, workflows, reporting systems and AI-enabled execution. Consulting and training led by Ambesh, with implementation support from BDA Technologies.",
  sameAs: [
    "https://ambesh.com",
    "https://ambesh.in",
    "https://ambeshtiwari.com",
    "https://acceleratewithai.in",
    "https://bdatechnologies.com",
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: i.name,
      item: `${SITE_URL}${i.path === "/" ? "" : i.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
