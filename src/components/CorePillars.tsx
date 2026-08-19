import { useEffect, useRef, useState } from "react";

/** Deterministic pseudo-random per index so SSR and client agree. */
function seeded(i: number, salt = 1) {
  const x = Math.sin((i + 1) * 12.9898 * salt) * 43758.5453;
  return x - Math.floor(x);
}

const ITEMS = [
  { letter: "A", title: "Artificial Intelligence" },
  { letter: "M", title: "Marketing" },
  { letter: "B", title: "Branding" },
  { letter: "E", title: "Entrepreneurship" },
  { letter: "S", title: "Systems" },
  { letter: "H", title: "Human Potential" },
];

export function CorePillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let frame = 0;

    const loop = () => {
      const total = el.offsetHeight - window.innerHeight;
      if (total > 0) {
        const rect = el.getBoundingClientRect();
        setProgress(Math.min(1, Math.max(0, -rect.top / total)));
      }
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Smooth easing so the transition never snaps.
  const eased = progress * progress * (3 - 2 * progress);
  const mid = (ITEMS.length - 1) / 2;

  return (
    <section
      ref={sectionRef}
      className="core-pillars-section relative h-[110dvh] sm:h-[180dvh] -mt-[8dvh] sm:-mt-[15dvh] -mb-[15dvh] sm:-mb-[30dvh]"
    >
      <div className="sticky top-0 flex h-[100dvh] flex-col items-center justify-center overflow-hidden pb-0">
        <p className="mb-6 text-center font-mono text-[0.65rem] font-bold uppercase tracking-[0.25em] text-ink-muted">
          The Core Pillars
        </p>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-1.5 px-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-6 lg:gap-6">
          {ITEMS.map((item, i) => {
            const dir = i - mid;
            const rand = seeded(i);
            const rand2 = seeded(i, 2.7);

            const settle = 1 - eased;
            const x = dir * settle * 6 + (rand - 0.5) * settle * 20;
            const y = (rand2 - 0.5) * settle * 60;
            const blur = settle * 7 * (0.4 + rand);
            const opacity = 1 - settle * 0.4;
            const rotate = (rand - 0.5) * settle * 10;
            const blurFilter = blur > 0 ? `blur(${blur}px)` : "none";
            const willChange = "transform, opacity, filter";

            return (
              <div
                key={item.letter}
                className="group relative flex select-none flex-col items-center justify-center overflow-hidden rounded-[16px] border px-2 py-2 text-center sm:rounded-[20px] sm:min-h-[140px] sm:p-4 md:min-h-[160px]"
                style={{
                  backgroundColor: "var(--pillar-card-bg)",
                  borderColor: "var(--pillar-card-border)",
                  boxShadow: "var(--pillar-card-shadow)",
                  color: "var(--ink)",
                  transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`,
                  filter: blurFilter,
                  opacity,
                  willChange,
                }}
              >
                {/* Diagonal sweeping shine animation */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full pointer-events-none" />

                <span className="font-display text-2xl font-black tracking-tight text-ink transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-accent sm:text-5xl md:text-6xl">
                  {item.letter}
                </span>
                <span className="mt-1 font-sans text-[0.65rem] font-bold uppercase tracking-wide text-ink-soft leading-tight transition-colors duration-500 group-hover:text-ink sm:text-[0.65rem] sm:tracking-wider md:text-[0.7rem]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
