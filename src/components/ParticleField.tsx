import { useMemo } from "react";
import type { CSSProperties } from "react";

interface Particle {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rise: number;
  opacity: number;
}

interface ParticleFieldProps {
  /** number of dots to render */
  count?: number;
  className?: string;
  /** css color of the dots */
  color?: string;
  minSize?: number;
  maxSize?: number;
  /** seed for deterministic positions (keeps SSR + client identical) */
  seed?: number;
}

export function ParticleField({
  count = 18,
  className = "",
  color = "var(--accent)",
  minSize = 2,
  maxSize = 5,
  seed = 1,
}: ParticleFieldProps) {
  const particles = useMemo<Particle[]>(() => {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    const rand = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: minSize + rand() * (maxSize - minSize),
      duration: 8 + rand() * 14,
      delay: -rand() * 22,
      drift: (rand() * 2 - 1) * 60,
      rise: -(10 + rand() * 30),
      opacity: 0.2 + rand() * 0.5,
    }));
  }, [count, minSize, maxSize, seed]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {particles.map((p, i) => {
        const style = {
          left: `${p.left}%`,
          top: `${p.top}%`,
          width: p.size,
          height: p.size,
          background: color,
          opacity: p.opacity,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          "--particle-drift": `${p.drift}px`,
          "--particle-rise": `${p.rise}px`,
        } as CSSProperties;
        return <span key={i} className="particle absolute rounded-full" style={style} />;
      })}
    </div>
  );
}
