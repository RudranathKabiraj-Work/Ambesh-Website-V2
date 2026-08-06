## Goal

Rewrite copy, positioning, and CTAs across the site for Ambesh Tiwari, repositioning from "AI trainer" to "practical AI adoption partner" (training + strategy + implementation). Keep the existing visual design intact. No em dashes anywhere.

## Scope of changes (copy + structure, no redesign)

### Global

- `src/components/SiteHeader.tsx`: nav links = About, Services, Training, Book, Podcast + "Book a call" button to `/contact`. Replace any `/clients` link with `/training`.
- `src/components/StickyCTABar.tsx`: copy = "Free 30-minute strategy call. Practical advice. No obligation." Button "Book now" to `/contact`. Add WhatsApp link (page-aware pre-filled message) to wa.me/918929465115, opens new tab.
- `src/components/SiteFooter.tsx`: one-liner + footer links (About, Services, Training, Book, Podcast, Contact). External links `target="_blank" rel="noopener"`.
- `src/lib/seo.ts`: keep entity info; minor copy tweaks if needed.

### Routes (rewrite copy per spec, keep layouts/components)

- `src/routes/index.tsx` — full Home rewrite per brief (hero, metrics, services preview 3 cards, 4-step "confusion → adoption", training-in-action, about preview, testimonials, book, individual/AutomationSchool, final CTA).
- `src/routes/about.tsx` — rewrite hero/story, add "What Ambesh is hired for" 3 cards, Beliefs (4), keep Entrepreneur/Builder/Teacher + journey, final CTA.
- `src/routes/services.tsx` — rewrite hero, metrics, 3 pillars, audience tabs, topics grid, 4-step process, formats, final CTA. CTAs use `/contact?service=...`.
- `src/routes/training.tsx` — replace clients page content; add route file (keep clients.tsx as redirect or delete, redirect via simple component).
- `src/routes/book.tsx` — rewrite per brief, keep endorsements structure, lead magnet form.
- `src/routes/podcast.tsx` — rewrite per brief.
- `src/routes/contact.tsx` — rewrite hero, form labels, FAQ, side card; add WhatsApp CTA; honor `?service=` and `?type=` query (prefill subject/message).
- `src/routes/clients.tsx` — convert to thin redirect to `/training` (or replace content with Training). Simpler: rewrite clients.tsx into Training page and add `src/routes/training.tsx` as the canonical route; have clients redirect.

### Routing

- Add `src/routes/training.tsx`. Update header/footer nav to point to `/training`. Keep `/clients` as a redirect to `/training` for SEO continuity (uses `useEffect` + `navigate`).

### Rules

- No em dashes anywhere; use commas, periods, or " - " (hyphen with spaces) sparingly. Prefer rewriting to avoid dashes.
- External links open in new tab.
- CTAs route as specified:
  - Training CTAs → `/contact?service=training`
  - Strategy CTAs → `/contact?service=strategy`
  - Automation CTAs → `/contact?service=automation`
  - Podcast guest → `/contact?type=podcast`
  - General "Book a call" → `/contact`
- WhatsApp: `https://wa.me/918929465115?text=<page-specific>` opens in new tab on Contact, sticky bar, final CTAs, mobile CTA, post-submit.

## Out of scope

- Visual redesign, color/typography changes, new components beyond a WhatsApp button helper.
- SEO schema overhaul (keep current per-route SEO, only update titles/descriptions where copy changed materially).

## Verification

- Build passes (tsc + vite).
- Quick grep for em dash characters returns zero.
- Nav links and CTAs route to specified paths.
