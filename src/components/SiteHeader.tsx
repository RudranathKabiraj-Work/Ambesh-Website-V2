import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { StrategyCallButton } from "./StrategyCallButton";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/training", label: "Training" },
  { to: "/book", label: "Book" },
  { to: "/podcast", label: "Podcast" },
  { to: "/insights", label: "Insights" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full p-3 md:px-10 md:py-4 pointer-events-none">
      <div
        style={{
          willChange: "width, max-width, padding",
          backgroundImage: open
            ? "var(--header-bg-open)"
            : scrolled
              ? "var(--header-bg-scrolled)"
              : "var(--header-bg-top)",
          boxShadow: scrolled ? "var(--header-shadow)" : "var(--header-shadow-top)",
        }}
        className={`mx-auto w-full pointer-events-auto border transition-[width,max-width,padding,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-[28px] [-webkit-backdrop-filter:blur(28px)_saturate(200%)_brightness(1.08)] [backdrop-filter:blur(28px)_saturate(200%)_brightness(1.08)] ${
          open
            ? "max-w-2xl rounded-2xl p-5 border-white/40"
            : scrolled
              ? "max-w-4xl rounded-full py-2 px-3 min-[400px]:px-4 md:px-6 border-white/40"
              : "max-w-[70rem] rounded-full py-3.5 px-4 min-[400px]:px-6 md:px-8 border-white/25"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)} className="group flex items-center gap-2.5">
            <img
              src="/atlogo.jpeg"
              alt="Ambesh Tiwari logo"
              className={`h-9 w-9 shrink-0 rounded-lg object-contain transition-transform duration-500 group-hover:scale-105 ${
                scrolled ? "scale-85" : "scale-100"
              }`}
            />
            <span className="font-display text-sm font-bold tracking-tight text-ink md:text-base">
              Ambesh Tiwari
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{
                  className: "bg-accent text-accent-foreground shadow-lift font-semibold",
                }}
                inactiveProps={{
                  className: "text-ink-soft hover:text-ink hover:bg-accent/10",
                }}
                className="whitespace-nowrap rounded-full border border-transparent px-3 py-1.5 lg:px-3.5 lg:py-2 text-[13px] font-medium transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <div className="hidden lg:block">
              <StrategyCallButton size="sm" />
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-full p-1.5 text-ink transition-colors hover:bg-sand lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`overflow-y-auto transition-all duration-300 ease-in-out lg:hidden ${
            open ? "mt-4 max-h-[calc(100dvh-120px)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-rule/60 pt-4">
            <nav className="flex flex-col gap-1 py-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeProps={{
                    className: "bg-accent text-accent-foreground shadow-lift font-semibold",
                  }}
                  inactiveProps={{ className: "text-ink hover:bg-accent/10" }}
                  className="rounded-lg border border-transparent px-4 py-2.5 text-[15px] font-medium transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex justify-center">
                <StrategyCallButton size="md" onClick={() => setOpen(false)} />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
