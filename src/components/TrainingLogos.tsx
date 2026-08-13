import { cn } from "@/lib/utils";

type TrainingLogoProps = {
  variant?: number;
  className?: string;
};

/** Format 1 — "Leadership AI Workshop"
 *  A compass needle slowly setting direction over a 30/60/90-day roadmap:
 *  leadership gets decision clarity, not tooling noise. */
function LeadershipMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Leadership direction and 90-day view"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <circle
        cx="32"
        cy="32"
        r="16"
        fill="none"
        stroke="var(--bl-ink, currentColor)"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <line x1="32" y1="11" x2="32" y2="15" />
        <line x1="32" y1="49" x2="32" y2="53" />
        <line x1="11" y1="32" x2="15" y2="32" />
        <line x1="49" y1="32" x2="53" y2="32" />
      </g>
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "10s" }}>
        <g className="bl-burst">
          <path d="M32 11 L36.5 32 L32 32 Z" fill="var(--bl-accent, var(--accent))" />
          <path d="M32 53 L27.5 32 L32 32 Z" fill="var(--bl-ink, currentColor)" opacity="0.8" />
        </g>
      </g>
      <g className="bl-breathe">
        <circle cx="32" cy="32" r="4.2" fill="var(--bl-accent, var(--accent))" />
        <circle cx="32" cy="32" r="7.5" fill="var(--bl-accent, var(--accent))" opacity="0.22" />
      </g>
      <g className="bl-breathe">
        <circle cx="40.5" cy="13.5" r="2.2" fill="var(--bl-ink, currentColor)" opacity="0.5" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <circle cx="47" cy="19" r="2.2" fill="var(--bl-ink, currentColor)" opacity="0.65" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <circle cx="51" cy="26" r="2.2" fill="var(--bl-accent, var(--accent))" opacity="0.8" />
      </g>
    </svg>
  );
}

/** Format 2 — "Department AI Workshop"
 *  An AI chip at the centre of a department's team nodes, with a practice
 *  pulse running inside the chip and a cadence ring of daily use outside. */
function DepartmentMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Department teams practising on their real tasks"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.4" opacity="0.45">
        <line x1="16" y1="20" x2="28" y2="30" />
        <line x1="48" y1="20" x2="36" y2="30" />
        <line x1="16" y1="44" x2="28" y2="34" />
        <line x1="48" y1="44" x2="36" y2="34" />
      </g>
      <rect
        x="24"
        y="24"
        width="16"
        height="16"
        rx="3.5"
        fill="var(--bl-ink, currentColor)"
        opacity="0.14"
        stroke="var(--bl-ink, currentColor)"
        strokeWidth="1.8"
      />
      <g className="bl-breathe">
        <path d="M30.5 28.5 v7 l6 -3.5 Z" fill="var(--bl-accent, var(--accent))" />
      </g>
      <g fill="var(--bl-ink, currentColor)" opacity="0.85">
        <rect x="27" y="21" width="2.1" height="3.2" rx="1" />
        <rect x="34.9" y="21" width="2.1" height="3.2" rx="1" />
        <rect x="27" y="39.8" width="2.1" height="3.2" rx="1" />
        <rect x="34.9" y="39.8" width="2.1" height="3.2" rx="1" />
        <rect x="21" y="27" width="3.2" height="2.1" rx="1" />
        <rect x="21" y="34.9" width="3.2" height="2.1" rx="1" />
        <rect x="39.8" y="27" width="3.2" height="2.1" rx="1" />
        <rect x="39.8" y="34.9" width="3.2" height="2.1" rx="1" />
      </g>
      <g className="bl-breathe">
        <circle cx="14" cy="17" r="3.6" fill="var(--bl-ink, currentColor)" opacity="0.55" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <circle cx="50" cy="17" r="3.6" fill="var(--bl-ink, currentColor)" opacity="0.7" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <circle cx="14" cy="47" r="3.6" fill="var(--bl-ink, currentColor)" opacity="0.7" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-3.6s" }}>
        <circle cx="50" cy="47" r="3.6" fill="var(--bl-ink, currentColor)" opacity="0.55" />
      </g>
      <g className="bl-spin-cadence bl-origin-center" style={{ animationDuration: "6s" }}>
        <g className="bl-burst">
          <circle
            cx="32"
            cy="32"
            r="21.5"
            fill="none"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="1.2"
            opacity="0.3"
            strokeDasharray="1.5 7"
          />
          <circle cx="47" cy="14" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.6" />
          <circle cx="17" cy="14" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.6" />
          <circle cx="47" cy="50" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.6" />
          <circle cx="17" cy="50" r="2" fill="var(--bl-accent, var(--accent))" opacity="0.6" />
        </g>
      </g>
    </svg>
  );
}

/** Format 3 — "AI Workflow Bootcamp"
 *  A closed workflow loop (blocks connected back to back) with a pulse
 *  travelling the loop — a multi-day automation run in continuous motion. */
function WorkflowMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Hands-on AI workflow automation"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <line x1="23" y1="18.5" x2="40" y2="18.5" />
        <line x1="45.5" y1="23" x2="45.5" y2="40" />
        <line x1="40" y1="45.5" x2="23" y2="45.5" />
        <line x1="18.5" y1="40" x2="18.5" y2="23" />
      </g>
      <g fill="var(--bl-accent, var(--accent))" opacity="0.75">
        <path d="M33 17.5 l3.4 1.8 -3.4 1.8 Z" />
        <path d="M46.5 33 l-1.8 3.4 -1.8 -3.4 Z" />
        <path d="M33 46.5 l-3.4 -1.8 3.4 -1.8 Z" />
        <path d="M17.5 33 l1.8 -3.4 1.8 3.4 Z" />
      </g>
      <g className="bl-breathe">
        <rect
          x="14"
          y="14"
          width="9"
          height="9"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.55"
        />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <rect
          x="41"
          y="14"
          width="9"
          height="9"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.75"
        />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <rect
          x="41"
          y="41"
          width="9"
          height="9"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.75"
        />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-7.2s" }}>
        <rect
          x="14"
          y="41"
          width="9"
          height="9"
          rx="2"
          fill="var(--bl-accent, var(--accent))"
          opacity="0.85"
        />
      </g>
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "8s" }}>
        <g className="bl-burst">
          <circle cx="32" cy="13" r="2.8" fill="var(--bl-accent, var(--accent))" />
        </g>
      </g>
    </svg>
  );
}

const MARKS = [LeadershipMark, DepartmentMark, WorkflowMark];

export function TrainingLogo({ variant = 0, className }: TrainingLogoProps) {
  const Mark = MARKS[variant] ?? LeadershipMark;
  return <Mark className={className} />;
}
