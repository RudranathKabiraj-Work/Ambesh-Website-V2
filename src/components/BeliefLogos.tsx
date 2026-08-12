import { cn } from "@/lib/utils";

const GEAR_TEETH_8 = [0, 45, 90, 135, 180, 225, 270, 315];
const GEAR_TEETH_6 = [0, 60, 120, 180, 240, 300];

type BeliefLogoProps = {
  variant?: number;
  className?: string;
};

/**
 * Animated logo "marks" for the "How I Think" belief cards.
 * Each mark is built around its card's message and moves with
 * physical, realistic motion (continuous linear rotation, slow
 * pendulum sweeps, travelling cadence pulses) rather than
 * cartoonish bouncing.
 */

/** Card 1 — "A business should not depend on the founder."
 *  Distributed accountability nodes feed a structured system: a
 *  gear-driven hub with hollow centre (no single owner) that slowly meshes. */
function StructureMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Distributed business system"
    >
      <circle cx="32" cy="32" r="17" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.6" opacity="0.5">
        <line x1="16" y1="16" x2="27" y2="27" />
        <line x1="48" y1="16" x2="37" y2="27" />
        <line x1="32" y1="47" x2="32" y2="37" />
      </g>
      <g className="bl-breathe">
        <circle cx="13" cy="13" r="3.4" fill="var(--bl-ink, currentColor)" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <circle cx="51" cy="13" r="3.4" fill="var(--bl-ink, currentColor)" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <circle cx="32" cy="51" r="3.4" fill="var(--bl-ink, currentColor)" />
      </g>
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "16s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="13.5"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="5"
          />
          {GEAR_TEETH_8.map((a) => (
            <rect
              key={a}
              x="30"
              y="13"
              width="4"
              height="6"
              rx="1"
              fill="var(--bl-ink, currentColor)"
              transform={`rotate(${a} 32 32)`}
            />
          ))}
          <circle
            cx="32"
            cy="32"
            r="4.6"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="2.2"
          />
          <circle cx="32" cy="32" r="1.7" fill="var(--bl-ink, currentColor)" />
        </g>
      </g>
    </svg>
  );
}

/** Card 2 — "AI adoption matters more than AI awareness."
 *  AI chip with a rotating cadence ring — a daily rhythm pulse
 *  travelling around the chip so teams form work-change habits. */
function AiRhythmMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Daily AI adoption rhythm"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <rect
        x="21"
        y="21"
        width="22"
        height="22"
        rx="4.5"
        fill="var(--bl-ink, currentColor)"
        opacity="0.16"
        stroke="var(--bl-ink, currentColor)"
        strokeWidth="1.8"
      />
      <rect x="28" y="28" width="8" height="8" rx="2" fill="var(--bl-ink, currentColor)" />
      <g fill="var(--bl-ink, currentColor)" opacity="0.85">
        {[24, 32, 40].map((px) => (
          <rect key={`t${px}`} x={px - 1.1} y="18" width="2.2" height="3.4" rx="1.1" />
        ))}
        {[24, 32, 40].map((px) => (
          <rect key={`b${px}`} x={px - 1.1} y="42.6" width="2.2" height="3.4" rx="1.1" />
        ))}
        <rect x="18" y="27" width="3.4" height="2.2" rx="1.1" />
        <rect x="18" y="34.8" width="3.4" height="2.2" rx="1.1" />
        <rect x="42.6" y="27" width="3.4" height="2.2" rx="1.1" />
        <rect x="42.6" y="34.8" width="3.4" height="2.2" rx="1.1" />
      </g>
      <g className="bl-spin-cadence bl-origin-center" style={{ animationDuration: "4.8s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="20.5"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="1.4"
            opacity="0.4"
            strokeDasharray="1.5 6.5 1.5 6.5"
          />
          <circle cx="46.5" cy="17.5" r="2.1" fill="var(--bl-ink, currentColor)" opacity="0.5" />
          <circle cx="17.5" cy="17.5" r="2.1" fill="var(--bl-ink, currentColor)" opacity="0.5" />
          <circle cx="17.5" cy="46.5" r="2.1" fill="var(--bl-ink, currentColor)" opacity="0.5" />
          <circle cx="46.5" cy="46.5" r="2.1" fill="var(--bl-ink, currentColor)" opacity="0.5" />
          <circle cx="32" cy="11.5" r="5.2" fill="var(--bl-accent, var(--accent))" opacity="0.16" />
          <circle cx="32" cy="11.5" r="2.6" fill="var(--bl-accent, var(--accent))" />
        </g>
      </g>
    </svg>
  );
}

/** Card 3 — "Do not automate a process you do not understand."
 *  A loupe that slowly inspects the manually-mapped workflow steps,
 *  with a light glint sweeping across the lens. */
function InspectMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Understand the workflow before automating"
    >
      <circle cx="30" cy="31" r="15" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.5" opacity="0.8" fill="none">
        <rect x="8" y="44" width="11" height="7" rx="2" />
        <rect x="26" y="44" width="12" height="7" rx="2" />
        <rect x="45" y="44" width="11" height="7" rx="2" />
        <path
          d="M20 43.8 v3.6 l3.4 -1.8 Z"
          fill="var(--bl-ink, currentColor)"
          stroke="none"
          opacity="0.7"
        />
        <path
          d="M39 43.8 v3.6 l3.4 -1.8 Z"
          fill="var(--bl-ink, currentColor)"
          stroke="none"
          opacity="0.7"
        />
      </g>
      <g className="bl-sway bl-origin-52-53">
        <g className="bl-burst-sway">
          <circle
            cx="30"
            cy="30"
            r="11.5"
            fill="var(--bl-accent-soft, var(--accent-soft))"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="2.4"
          />
          <g className="bl-spin bl-origin-30-30" style={{ animationDuration: "8s" }} opacity="0.7">
            <path
              d="M21.5 25.5 A11.5 11.5 0 0 1 30 20"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <path
            d="M40.5 41.5 L52 53"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}

/** Card 4 — "Technology is only one part of the answer."
 *  Human execution stands on the foundation while technology
 *  (a small gear) orbits it — tech accelerates, humans anchor. */
function HumanTechMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Human execution with supportive technology"
    >
      <circle cx="32" cy="34" r="16" className="bl-glow" />
      <rect
        x="18"
        y="38"
        width="28"
        height="4.6"
        rx="2.3"
        fill="var(--bl-ink, currentColor)"
        opacity="0.9"
      />
      <g fill="var(--bl-ink, currentColor)">
        <circle cx="32" cy="15" r="4.8" />
        <path d="M32 23.5 L26 37.5 L38 37.5 Z" />
      </g>
      <g className="bl-spin bl-origin-32-38" style={{ animationDuration: "12s" }}>
        <g className="bl-burst-orb">
          <g transform="rotate(130 32 38)">
            <circle
              cx="32"
              cy="22"
              r="4.2"
              fill="none"
              stroke="var(--bl-ink, currentColor)"
              strokeWidth="2"
            />
            {GEAR_TEETH_6.map((a) => (
              <rect
                key={a}
                x="31"
                y="17.8"
                width="2"
                height="2.6"
                rx="0.6"
                fill="var(--bl-ink, currentColor)"
                transform={`rotate(${a} 32 22)`}
              />
            ))}
            <circle cx="32" cy="22" r="1.6" fill="var(--bl-accent, var(--accent))" />
          </g>
          <circle cx="32" cy="54" r="1.8" fill="var(--bl-accent, var(--accent))" opacity="0.85" />
        </g>
      </g>
    </svg>
  );
}

const MARKS = [StructureMark, AiRhythmMark, InspectMark, HumanTechMark];

export function BeliefLogo({ variant = 0, className }: BeliefLogoProps) {
  const Mark = MARKS[variant] ?? StructureMark;
  return <Mark className={className} />;
}
