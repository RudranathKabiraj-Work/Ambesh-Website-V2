import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/react-start";
import { SITE_URL } from "@/lib/seo";

const PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/training", priority: "0.9", changefreq: "monthly" },
  { path: "/clients", priority: "0.8", changefreq: "monthly" },
  { path: "/results", priority: "0.7", changefreq: "monthly" },
  { path: "/book", priority: "0.8", changefreq: "monthly" },
  { path: "/podcast", priority: "0.7", changefreq: "weekly" },
  { path: "/contact", priority: "0.7", changefreq: "yearly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/refund", priority: "0.3", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const urls = PAGES.map(
          (p) => `  <url>
    <loc>${SITE_URL}${p.path === "/" ? "" : p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
