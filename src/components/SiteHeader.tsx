import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Business OS" },
  { to: "/training", label: "AI Training" },
  { to: "/clients", label: "Clients" },
  { to: "/book", label: "Book" },
  { to: "/podcast", label: "Podcast" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-rule/80 bg-canvas/85 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-canvas/60 backdrop-blur-md"
      }`}
    >
      <div className="container-edit flex h-16 items-center justify-between xl:h-20">
        <Link to="/" onClick={() => setOpen(false)} className="group flex items-center gap-2.5">
          <img
            src="/atlogo.jpeg"
            alt="Ambesh Tiwari logo"
            className="h-9 w-9 shrink-0 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-base font-bold tracking-tight text-ink">
            Ambesh Tiwari
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full bg-sand/40 p-1 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-gradient-brand text-canvas shadow-lift font-semibold" }}
              inactiveProps={{ className: "text-ink-soft hover:text-ink hover:bg-canvas/80" }}
              className="whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-medium transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="/contact?service=diagnostic"
          className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-brand px-4 py-2.5 text-[13px] font-semibold text-canvas shadow-lift transition-all hover:-translate-y-0.5 hover:shadow-xl xl:inline-flex"
        >
          Book a Business Systems Diagnostic <ArrowUpRight className="h-3.5 w-3.5" />
        </a>



        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-1.5 text-ink transition-colors hover:bg-sand xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-rule bg-canvas xl:hidden">
          <nav className="container-edit flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-gradient-brand text-canvas shadow-lift font-semibold" }}
                inactiveProps={{ className: "text-ink hover:bg-sand" }}
                className="rounded-lg px-4 py-3 text-base font-medium transition-all"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/contact?service=diagnostic"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-canvas shadow-lift"
            >
              Book a Business Systems Diagnostic <ArrowUpRight className="h-4 w-4" />
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
