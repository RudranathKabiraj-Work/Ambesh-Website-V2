import { cn } from "@/lib/utils";

type ProcessLogoProps = {
  variant?: number;
  className?: string;
};

/** Step 1 — "Audit"
 *  A magnifying lens sweeping over a stacked document while a pulse
 *  travels through it — inspecting where the business is stuck. */
function AuditMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Audit - business diagnosis"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g className="bl-breathe" opacity="0.8">
        <rect
          x="20"
          y="20"
          width="26"
          height="4"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.45"
        />
        <rect
          x="20"
          y="28"
          width="26"
          height="4"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.6"
        />
        <rect
          x="20"
          y="36"
          width="18"
          height="4"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.75"
        />
      </g>
      <g className="bl-sway bl-origin-32-38">
        <g className="bl-burst-sway">
          <circle
            cx="38"
            cy="26"
            r="9"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="2.6"
          />
          <circle cx="38" cy="26" r="3.4" fill="var(--bl-accent, var(--accent))" />
          <path
            d="M44.5 32.5 L54 42"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}

/** Step 2 — "Design"
 *  A drafting pen drawing the skeleton of an operating system, with a
 *  rotating compass ring around it — designing, not generic. */
function DesignMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Design - operating system blueprint"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.5" opacity="0.5" fill="none">
        <path d="M16 40 L28 40 M16 46 L34 46" />
      </g>
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "10s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="15"
            fill="none"
            stroke="var(--bl-accent, var(--accent))"
            strokeWidth="1.4"
            opacity="0.5"
            strokeDasharray="2 6"
          />
          <circle cx="32" cy="17" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.7" />
        </g>
      </g>
      <g className="bl-sway bl-origin-30-30">
        <g className="bl-burst-sway">
          <path
            d="M34 18 L46 46 L42.5 48 L31 22 Z"
            fill="var(--bl-ink, currentColor)"
            opacity="0.8"
          />
          <path
            d="M30 20 L19 46 L22.5 48 L33 22 Z"
            fill="var(--bl-accent, var(--accent))"
            opacity="0.55"
          />
        </g>
      </g>
    </svg>
  );
}

/** Step 3 — "Build"
 *  A gear stack turning inside a build frame while a bolt tightens —
 *  the OS being assembled and wired in. */
function BuildMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Build - operating system assembly"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.5" opacity="0.45">
        <line x1="32" y1="14" x2="32" y2="20" />
        <line x1="32" y1="44" x2="32" y2="50" />
        <line x1="14" y1="32" x2="20" y2="32" />
        <line x1="44" y1="32" x2="50" y2="32" />
      </g>
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "7s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="11"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="3"
            strokeDasharray="5 4"
          />
          <circle cx="32" cy="32" r="4" fill="var(--bl-accent, var(--accent))" />
        </g>
      </g>
      <g className="bl-breathe">
        <circle cx="22" cy="22" r="2.6" fill="var(--bl-ink, currentColor)" opacity="0.55" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <circle cx="42" cy="22" r="2.6" fill="var(--bl-ink, currentColor)" opacity="0.7" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <circle cx="22" cy="42" r="2.6" fill="var(--bl-ink, currentColor)" opacity="0.7" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-3.6s" }}>
        <circle cx="42" cy="42" r="2.6" fill="var(--bl-ink, currentColor)" opacity="0.55" />
      </g>
    </svg>
  );
}

/** Step 4 — "Adopt"
 *  A rocket mid-liftoff circled by a cadence ring of orbit nodes —
 *  adoption spreading and the business flying on its own. */
function AdoptMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Adopt - team adoption and handover"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g className="bl-spin-cadence bl-origin-center" style={{ animationDuration: "6s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="20"
            fill="none"
            stroke="var(--bl-accent, var(--accent))"
            strokeWidth="1.3"
            opacity="0.4"
            strokeDasharray="1.5 7"
          />
          <circle cx="47" cy="14" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.7" />
          <circle cx="17" cy="14" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.7" />
        </g>
      </g>
      <g className="bl-breathe">
        <path d="M32 12 L36 24 L28 24 Z" fill="var(--bl-accent, var(--accent))" />
        <rect
          x="29"
          y="24"
          width="6"
          height="10"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.85"
        />
        <path d="M27 34 L24 40 L40 40 L37 34 Z" fill="var(--bl-ink, currentColor)" opacity="0.7" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-1.8s" }}>
        <path
          d="M29 34 L26 42 M35 34 L38 42"
          stroke="var(--bl-accent, var(--accent))"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>
      <circle cx="32" cy="45" r="2.2" fill="var(--bl-accent, var(--accent))" />
    </svg>
  );
}

const MARKS = [AuditMark, DesignMark, BuildMark, AdoptMark];

export function ProcessLogo({ variant = 0, className }: ProcessLogoProps) {
  const Mark = MARKS[variant] ?? AuditMark;
  return <Mark className={className} />;
}
