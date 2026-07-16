import type { ReactNode } from "react";

interface Props {
  items: ReactNode[];
  className?: string;
  /** width of the edge fade in px; set to 0 to disable */
  fade?: number;
  /** seconds for one full loop */
  speed?: number;
}

export function Marquee({ items, className = "", fade = 48, speed = 50 }: Props) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {fade > 0 && (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{
              width: fade,
              background:
                "linear-gradient(to right, var(--canvas), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10"
            style={{
              width: fade,
              background:
                "linear-gradient(to left, var(--canvas), transparent)",
            }}
          />
        </>
      )}
      <div
        className="flex w-max gap-12 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused] sm:gap-16"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
