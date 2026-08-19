import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Book3D } from "@/components/Book3D";

interface BookStickySectionProps {
  cardClass?: string;
  sectionClass?: string;
  children: React.ReactNode;
}

export function BookStickySection({
  cardClass = "custom-theme-card-static",
  sectionClass = "home-section-alt",
  children,
}: BookStickySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile device size on mount & resize
  useEffect(() => {
    let currentWidth = window.innerWidth;

    const checkMobile = () => {
      const newWidth = window.innerWidth;
      // CRITICAL MOBILE PERFORMANCE FIX: Only trigger state update if the screen WIDTH changes.
      // Mobile browsers fire resize events when the address bar hides/shows on scroll.
      // Checking width changes prevents layout recalculation/stutter during scrolling.
      if (newWidth !== currentWidth) {
        currentWidth = newWidth;
        setIsMobile(newWidth < 1024);
      }
    };

    setIsMobile(currentWidth < 1024);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // If mobile, do not run the scroll loop to prevent lagging and preserve battery
    if (isMobile) return;

    const el = sectionRef.current;
    if (!el) return;
    let frame = 0;
    let targetProgress = 0;
    let currentProgress = 0;

    const loop = () => {
      const total = el.offsetHeight - window.innerHeight;
      if (total > 0) {
        const rect = el.getBoundingClientRect();
        targetProgress = Math.min(1, Math.max(0, -rect.top / total));
      }

      // Linear interpolation (lerp) for smooth trailing inertia/dampening on desktop
      currentProgress += (targetProgress - currentProgress) * 0.08;

      // Update state if there's a meaningful change
      if (Math.abs(currentProgress - targetProgress) > 0.0001) {
        setProgress(currentProgress);
      } else {
        setProgress(targetProgress);
      }

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [isMobile]);

  // Mobile Render: Shows the same 3D front cover as desktop, but fully static (no animation, no tap-to-open)
  // Uses GPU hardware acceleration layers for butter-smooth mobile compositing
  if (isMobile) {
    return (
      <section
        className={`relative overflow-hidden bg-canvas py-16 md:py-24 border-t border-b border-rule/30 ${sectionClass}`}
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <div className="container-edit relative">
          <div
            className={`grid gap-12 rounded-[20px] p-8 md:grid-cols-12 md:items-center md:gap-16 md:p-14 shadow-sm ${cardClass}`}
          >
            {/* 3D Book front cover — static, same look as desktop, no animation */}
            <div className="md:col-span-5">
              <Book3D progress={0} isMobile={false} />
            </div>

            {/* Description Text Column */}
            <div className="md:col-span-7">{children}</div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Render: Sticky scroll layout with progressive opening animation
  return (
    <section
      ref={sectionRef}
      className={`relative h-[200dvh] sm:h-[280dvh] bg-canvas overflow-visible ${sectionClass}`}
    >
      {/* Sticky viewport content block */}
      <div className="sticky top-0 flex min-h-[550px] h-[100dvh] items-center overflow-hidden w-full">
        <div className="container-edit relative w-full">
          <div
            className={`grid gap-12 rounded-[20px] p-8 md:grid-cols-12 md:items-center md:gap-16 md:p-14 shadow-sm ${cardClass}`}
          >
            {/* 3D Book Presentation Column */}
            <Reveal className="md:col-span-5">
              <Book3D progress={progress} isMobile={false} />
            </Reveal>

            {/* Description Text Column */}
            <Reveal delay={120} className="md:col-span-7">
              {children}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
