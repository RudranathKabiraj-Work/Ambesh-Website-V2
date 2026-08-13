import { cn } from "@/lib/utils";

const GEAR_TEETH_8 = [0, 45, 90, 135, 180, 225, 270, 315];
const GEAR_TEETH_6 = [0, 60, 120, 180, 240, 300];

type AboutLogoProps = {
  variant?: number;
  className?: string;
};

/** Capabilities 1 — "AI Training & Workshops"
 *  A training screen with a pulsing play pulse, circled by a rotating
 *  cadence ring of workshop participants. */
function WorkshopMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="AI training and workshops"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <rect
        x="18"
        y="20"
        width="28"
        height="20"
        rx="3.5"
        fill="var(--bl-ink, currentColor)"
        fillOpacity="0.18"
        stroke="var(--bl-ink, currentColor)"
        strokeOpacity="0.85"
        strokeWidth="2"
      />
      <g className="bl-breathe">
        <path d="M29 25.5 v9 l7.5 -4.5 Z" fill="var(--bl-accent, var(--accent))" />
      </g>
      <g className="bl-spin-cadence bl-origin-center" style={{ animationDuration: "5.5s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="21"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeDasharray="3 6"
            strokeLinecap="round"
          />
          <circle cx="46" cy="19" r="2.2" fill="var(--bl-accent, var(--accent))" opacity="0.8" />
          <circle cx="18" cy="19" r="2.2" fill="var(--bl-accent, var(--accent))" opacity="0.7" />
          <circle cx="18" cy="45" r="2.2" fill="var(--bl-accent, var(--accent))" opacity="0.7" />
          <circle cx="46" cy="45" r="2.2" fill="var(--bl-accent, var(--accent))" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
}

/** Capabilities 2 — "Workflow & Systems Strategy"
 *  A structured system of breathing nodes with a signal pulse circling
 *  the network — the operating cadence in motion. */
function WorkflowMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Workflow and systems strategy"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.5" opacity="0.5">
        <line x1="20" y1="22" x2="44" y2="22" />
        <line x1="20" y1="22" x2="20" y2="42" />
        <line x1="44" y1="22" x2="44" y2="42" />
        <line x1="20" y1="42" x2="44" y2="42" />
      </g>
      <g className="bl-breathe">
        <circle cx="20" cy="22" r="4" fill="var(--bl-ink, currentColor)" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <circle cx="44" cy="22" r="4" fill="var(--bl-ink, currentColor)" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <circle cx="20" cy="42" r="4" fill="var(--bl-ink, currentColor)" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-3.6s" }}>
        <circle cx="44" cy="42" r="4" fill="var(--bl-ink, currentColor)" />
      </g>
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "9s" }}>
        <g className="bl-burst">
          <circle cx="32" cy="12" r="2.6" fill="var(--bl-accent, var(--accent))" />
        </g>
      </g>
    </svg>
  );
}

/** Capabilities 3 — "Custom AI & Automation Install"
 *  An AI gear meshing in constant motion with a pulsing lightning bolt
 *  that removes manual work. */
function AutomateMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Custom AI and automation"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "13s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="12.5"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="4.2"
          />
          {GEAR_TEETH_8.map((a) => (
            <rect
              key={a}
              x="30.4"
              y="14.5"
              width="3.2"
              height="5"
              rx="0.8"
              fill="var(--bl-ink, currentColor)"
              transform={`rotate(${a} 32 32)`}
            />
          ))}
          <rect
            x="28.5"
            y="28.5"
            width="7"
            height="7"
            rx="1.8"
            fill="var(--bl-accent, var(--accent))"
          />
        </g>
      </g>
      <g className="bl-breathe">
        <path
          d="M42 16 L31 33 L36 33 L29 47 L45 29 L39 29 Z"
          fill="var(--bl-accent, var(--accent))"
        />
      </g>
    </svg>
  );
}

/** Roles 1 — "Entrepreneur"
 *  A rising growth line with a pulsing spark at its tip and an orbit
 *  of momentum circling the business. */
function EntrepreneurMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Entrepreneur"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <rect
        x="14"
        y="41"
        width="36"
        height="4.5"
        rx="2.2"
        fill="var(--bl-ink, currentColor)"
        opacity="0.85"
      />
      <g
        stroke="var(--bl-ink, currentColor)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M17 42 L36 23" />
        <path d="M36 23 L29 23 M36 23 L36 30" />
      </g>
      <g className="bl-breathe">
        <path
          d="M46 12 l1.9 4.4 4.4 1.9 -4.4 1.9 -1.9 4.4 -1.9 -4.4 -4.4 -1.9 4.4 -1.9 Z"
          fill="var(--bl-accent, var(--accent))"
        />
      </g>
      <g className="bl-spin-cadence bl-origin-center" style={{ animationDuration: "6.5s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="20"
            fill="none"
            stroke="var(--bl-accent, var(--accent))"
            strokeWidth="1.2"
            opacity="0.4"
            strokeDasharray="2 7"
            strokeLinecap="round"
          />
          <circle cx="32" cy="12" r="2.2" fill="var(--bl-accent, var(--accent))" />
          <circle cx="52" cy="32" r="2.2" fill="var(--bl-accent, var(--accent))" opacity="0.6" />
        </g>
      </g>
    </svg>
  );
}

/** Roles 2 — "Builder"
 *  Three shipped products breathing around a central spinning gear — the
 *  builder engine at the core. */
function BuilderMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("bl-anim", className)} role="img" aria-label="Builder">
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g className="bl-breathe">
        <rect
          x="13"
          y="14"
          width="11"
          height="11"
          rx="2.5"
          fill="var(--bl-ink, currentColor)"
          opacity="0.9"
        />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <rect
          x="40"
          y="14"
          width="11"
          height="11"
          rx="2.5"
          fill="var(--bl-ink, currentColor)"
          opacity="0.9"
        />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <rect
          x="26"
          y="39"
          width="12"
          height="12"
          rx="2.5"
          fill="var(--bl-ink, currentColor)"
          opacity="0.95"
        />
      </g>
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "11s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="10"
            fill="none"
            stroke="var(--bl-accent, var(--accent))"
            strokeWidth="3.4"
          />
          {GEAR_TEETH_6.map((a) => (
            <rect
              key={a}
              x="30.4"
              y="16.5"
              width="3.2"
              height="5"
              rx="1"
              fill="var(--bl-accent, var(--accent))"
              transform={`rotate(${a} 32 32)`}
            />
          ))}
          <circle
            cx="32"
            cy="32"
            r="4.2"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="2"
            opacity="0.85"
          />
          <circle cx="32" cy="32" r="1.6" fill="var(--bl-accent, var(--accent))" />
        </g>
      </g>
      <g className="bl-spin-cadence bl-origin-center" style={{ animationDuration: "6.5s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="21"
            fill="none"
            stroke="var(--bl-accent, var(--accent))"
            strokeWidth="1.2"
            opacity="0.4"
            strokeDasharray="2 8"
            strokeLinecap="round"
          />
          <circle cx="32" cy="11" r="2.2" fill="var(--bl-accent, var(--accent))" />
        </g>
      </g>
    </svg>
  );
}

/** Roles 3 — "Teacher"
 *  An open book with a pulsing light above and a rotating cadence ring of
 *  knowledge radiating outward. */
function TeacherMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("bl-anim", className)} role="img" aria-label="Teacher">
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g fill="var(--bl-ink, currentColor)" opacity="0.9">
        <path d="M32 27.5 C28 24 21 24 16 26 L16 39 C21 37 28 37 32 40.5 C36 37 43 37 48 39 L48 26 C43 24 36 24 32 27.5 Z" />
      </g>
      <path
        d="M32 28 L32 39.5"
        stroke="var(--bl-ink, currentColor)"
        strokeWidth="1.2"
        opacity="0.4"
      />
      <g className="bl-breathe">
        <circle cx="32" cy="17.5" r="3.4" fill="var(--bl-accent, var(--accent))" />
        <g
          stroke="var(--bl-accent, var(--accent))"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.75"
        >
          <line x1="32" y1="11.5" x2="32" y2="14" />
          <line x1="26" y1="14.5" x2="27.8" y2="16.2" />
          <line x1="38" y1="14.5" x2="36.2" y2="16.2" />
        </g>
      </g>
      <g className="bl-spin-cadence bl-origin-center" style={{ animationDuration: "7s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="20.5"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="1.2"
            opacity="0.3"
            strokeDasharray="1.5 6.5"
          />
          <circle cx="45" cy="14" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.6" />
          <circle cx="19" cy="14" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.6" />
        </g>
      </g>
    </svg>
  );
}

const MARKS = [
  WorkshopMark,
  WorkflowMark,
  AutomateMark,
  EntrepreneurMark,
  BuilderMark,
  TeacherMark,
];

export function AboutLogo({ variant = 0, className }: AboutLogoProps) {
  const Mark = MARKS[variant] ?? WorkshopMark;
  return <Mark className={className} />;
}
