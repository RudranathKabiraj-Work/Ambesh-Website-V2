import { useEffect } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCTABar } from "@/components/StickyCTABar";
import { useReveal } from "@/hooks/use-reveal";
import Lenis from "lenis";
import { SITE_URL, jsonLd, personSchema, organizationSchema } from "@/lib/seo";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-6 text-7xl font-extrabold tracking-tighter">
          <span className="text-gradient-brand">404</span>
        </h1>
        <p className="mt-4 text-sm text-ink-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-gradient-brand px-6 text-sm font-semibold text-white animate-gradient"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#071123" },
      { name: "format-detection", content: "telephone=no" },
      { httpEquiv: "x-ua-compatible", content: "IE=edge" },

      // Geo / locale signals (helpful for India-focused queries)
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Delhi" },
      { name: "language", content: "English" },

      // Sensible site-wide defaults - every leaf route overrides title/description
      { title: "Ambesh Tiwari - AI Trainer for Corporate Teams & Founders" },
      {
        name: "description",
        content:
          "Ambesh Tiwari is one of India's leading AI trainers. He has trained 5,000+ professionals across 50+ organisations in 11 industries.",
      },
      {
        property: "og:title",
        content: "Ambesh Tiwari - AI Trainer for Corporate Teams & Founders",
      },
      {
        name: "twitter:title",
        content: "Ambesh Tiwari - AI Trainer for Corporate Teams & Founders",
      },
      {
        name: "description",
        content:
          "Ambesh helps companies turn confused, overloaded teams into confident, AI-ready professionals using practical Agentic AI systems they can apply from day one.",
      },
      {
        property: "og:description",
        content:
          "Ambesh helps companies turn confused, overloaded teams into confident, AI-ready professionals using practical Agentic AI systems they can apply from day one.",
      },
      {
        name: "twitter:description",
        content:
          "Ambesh helps companies turn confused, overloaded teams into confident, AI-ready professionals using practical Agentic AI systems they can apply from day one.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/zfDSuVYBGngYqKphABVIppoL25e2/social-images/social-1776622875929-Ambesh__AI_Portfolio_2024_(1080_x_1080_px).webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/zfDSuVYBGngYqKphABVIppoL25e2/social-images/social-1776622875929-Ambesh__AI_Portfolio_2024_(1080_x_1080_px).webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      // Preconnect to Google Fonts to eliminate DNS + TCP + TLS round-trips before fonts load
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Load the two custom fonts the design system uses
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,600;0,700;0,800;0,900;1,500&family=Inter:wght@400;500;600&family=Fraunces:ital,wght@1,500&display=swap",
      },
      // Preload the hero image so the browser fetches it immediately (improves LCP)
      { rel: "preload", href: "/ambesh-tiwari.jpg", as: "image", fetchPriority: "high" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "alternate", hrefLang: "en", href: SITE_URL },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL },
    ],
    scripts: [jsonLd(personSchema), jsonLd(organizationSchema)],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ambesh-theme");if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useReveal();

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom smooth exponential easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-shell relative flex min-h-screen flex-col bg-canvas text-ink">
      <div
        className="home-top-grey pointer-events-none absolute top-0 left-0 right-0 z-40 h-16 md:h-20 xl:h-24"
        aria-hidden
      />
      <SiteHeader />
      <main className="flex-1 pt-16 md:pt-20 xl:pt-24">
        <Outlet />
      </main>
      <SiteFooter />
      <StickyCTABar />
    </div>
  );
}
