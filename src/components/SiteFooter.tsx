import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Youtube, Instagram, Facebook, Twitter } from "lucide-react";
import { Reveal } from "@/components/Reveal";

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
    { l: "Book", to: "/book" as const },
    { l: "Contact", to: "/contact" as const },
  ];

  const brands = [
    { l: "BDA Technologies", h: "https://bdatechnologies.com" },
    { l: "Accelerate with AI", h: "https://acceleratewithai.in" },
    { l: "Automation School", h: "https://automationschool.in" },
    { l: "LinkAssist.ai", h: "https://linkassist.ai" },
    { l: "HireAssist.org", h: "https://hireassist.org" },
  ];

  return (
    <footer className="site-footer">
      <Reveal>
        <div className="container-edit relative pt-8 pb-20 md:pt-10 md:pb-20">
          {/* Top: Brand + nav columns */}
          <div className="grid gap-10 md:grid-cols-12 md:gap-10">
            {/* Brand block */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5">
                <img
                  src="/atlogo.jpeg"
                  alt="Ambesh Tiwari logo"
                  className="h-9 w-9 shrink-0 rounded-lg object-contain"
                />
                <span className="font-display text-base font-bold tracking-tight text-ink">
                  Ambesh Tiwari
                </span>
              </div>
              <p className="mt-5 max-w-md text-sm leading-[1.6] text-ink-soft">
                Ambesh Tiwari helps founder-led businesses reduce founder dependency through clear
                SOPs, workflows, reporting systems and team training. Technical implementation is
                delivered with the team at BDA Technologies.
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

            {/* Links Grid: Side-by-side on mobile, and aligned on desktop */}
            <div className="grid grid-cols-2 gap-6 sm:gap-10 md:col-span-7 md:grid-cols-7 w-full">
              {/* Pages */}
              <div className="md:col-span-3 md:mx-auto">
                <div className="mb-4">
                  <span className="eyebrow eyebrow-indigo">Pages</span>
                </div>
                <ul className="space-y-3 text-sm">
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
              <div className="md:col-span-4 md:ml-auto">
                <div className="mb-4">
                  <span className="eyebrow eyebrow-indigo">Brands</span>
                </div>
                <ul className="space-y-3 text-sm">
                  {brands.map((b) => (
                    <li key={b.l}>
                      <a
                        href={b.h}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink"
                      >
                        {b.l}
                        <ArrowRight className="h-3 w-3 opacity-50" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom legal */}
          <div className="mt-12 md:mt-4 flex flex-col gap-4 border-t border-rule pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} Ambesh Tiwari. All rights reserved.</p>
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
      </Reveal>
    </footer>
  );
}
