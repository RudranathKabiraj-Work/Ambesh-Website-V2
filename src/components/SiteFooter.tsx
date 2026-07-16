import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Youtube, Instagram, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  const socials = [
    { Icon: Linkedin, href: "https://linkedin.com/in/ambeshtiwari", label: "LinkedIn" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com", label: "X" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const pages = [
    { l: "About", to: "/about" as const },
    { l: "Business OS", to: "/services" as const },
    { l: "AI Training", to: "/training" as const },
    { l: "Clients", to: "/clients" as const },
    { l: "Book", to: "/book" as const },
    { l: "Podcast", to: "/podcast" as const },
    { l: "Contact", to: "/contact" as const },
  ];

  const brands = [
    { l: "BDA Technologies", h: "https://bdatechnologies.com" },
    { l: "Accelerate with AI", h: "https://acceleratewithai.in" },
    { l: "Automation School", h: "https://automationschool.in" },
    { l: "LinkAssist.ai", h: "https://linkassist.ai" },
    { l: "HireAssist.co.in", h: "https://hireassist.co.in" },
  ];


  return (
    <footer className="mt-24 border-t border-rule bg-canvas">
      <div className="container-edit py-16 md:py-20">
        {/* Top: Brand + nav columns */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-[0.7rem] font-extrabold text-canvas">
                AT
              </span>
              <span className="font-display text-base font-bold tracking-tight text-ink">
                Ambesh Tiwari
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-[1.6] text-ink-soft">
              Ambesh Tiwari helps founder-led businesses reduce founder
              dependency through clear SOPs, workflows, reporting systems and
              team training. Technical implementation is delivered with the
              team at BDA Technologies.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink-muted transition-all hover:border-ink hover:bg-ink hover:text-canvas"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
              Pages
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2.5 text-sm md:grid-cols-1">
              {pages.map((p) => (
                <li key={p.l}>
                  <Link to={p.to} className="text-ink-soft transition-colors hover:text-ink">
                    {p.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div className="md:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted">
              Brands
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {brands.map((b) => (
                <li key={b.l}>
                  <a
                    href={b.h}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink"
                  >
                    {b.l}
                    <ArrowUpRight className="h-3 w-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-14 border-t border-rule pt-10 md:mt-16">
          <blockquote className="mx-auto max-w-3xl text-center font-serif text-lg italic leading-snug text-ink-soft md:text-2xl">
            "You don't need to be perfect in everything to achieve your dreams.
            You just have to find someone who knows what you don't."
          </blockquote>
          <p className="mt-4 text-center font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-muted">
            Ambesh Tiwari
          </p>
        </div>

        {/* Bottom legal */}
        <div className="mt-12 flex flex-col gap-4 border-t border-rule pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Ambesh Tiwari. All rights reserved.
            </p>
            <p className="mt-1 text-[11px] text-ink-muted/80">
              Business and implementation engagements are contracted and
              delivered through BDA Technologies Pvt. Ltd.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
            <Link to="/privacy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-ink">
              Terms of Use
            </Link>
            <Link to="/refund" className="transition-colors hover:text-ink">
              Refund Policy
            </Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
