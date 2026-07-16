import { useEffect, useState } from "react";
import { ArrowRight, X, Calendar, MessageCircle } from "lucide-react";
import { whatsappUrl, WA_MESSAGES } from "@/lib/wa";

export function StickyCTABar() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? scrolled / max : 0;
      setShow(ratio > 0.35);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !show) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 animate-slide-up">
      <div className="pointer-events-auto flex w-full max-w-2xl items-center gap-2 rounded-full border border-rule bg-canvas/95 p-1.5 pl-5 shadow-lift backdrop-blur-xl">
        <Calendar className="h-4 w-4 shrink-0 text-ink" />
        <p className="flex-1 truncate text-xs sm:text-sm text-ink">
          <span className="font-semibold">Free 30-minute Business Systems Diagnostic.</span>
          <span className="hidden text-ink-muted sm:inline">
            {" "}
            Practical conversation. No pitch.
          </span>
        </p>
        <a
          href={whatsappUrl(WA_MESSAGES.diagnostic)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Ambesh"
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-rule text-ink-soft transition hover:bg-sand sm:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
        </a>
        <a
          href="/contact?service=diagnostic"
          className="btn-premium inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-xs font-semibold sm:text-sm"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Book a Diagnostic <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="rounded-full p-2 text-ink-muted hover:text-ink"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
