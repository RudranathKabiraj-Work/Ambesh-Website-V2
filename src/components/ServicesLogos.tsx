import { cn } from "@/lib/utils";

type ServicesLogoProps = {
  variant?: number;
  className?: string;
};

/** Pillar 1 — "Business Diagnosis"
 *  A magnifying lens sweeping over a business dashboard, with a light glint
 *  scanning across the lens — seeing the business like an outside operator. */
function DiagnosisMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Business diagnosis"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <rect
        x="16"
        y="40"
        width="7"
        height="10"
        rx="1.5"
        fill="var(--bl-ink, currentColor)"
        opacity="0.5"
      />
      <rect
        x="27"
        y="34"
        width="7"
        height="16"
        rx="1.5"
        fill="var(--bl-ink, currentColor)"
        opacity="0.7"
      />
      <rect x="38" y="30" width="7" height="20" rx="1.5" fill="var(--bl-ink, currentColor)" />
      <g className="bl-sway bl-origin-30-30">
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
            d="M39.5 40.5 L51 52"
            stroke="var(--bl-ink, currentColor)"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}

/** Pillar 2 — "Business OS Install"
 *  Three breathing layers connected by a vertical spine, with a pulse
 *  travelling up the system — the operating stack being installed. */
function OSInstallMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Business OS install"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.5" opacity="0.5">
        <line x1="32" y1="14" x2="32" y2="48" />
      </g>
      <g className="bl-breathe">
        <rect
          x="18"
          y="15"
          width="28"
          height="7"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.5"
        />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <rect
          x="13"
          y="26"
          width="38"
          height="7"
          rx="2"
          fill="var(--bl-ink, currentColor)"
          opacity="0.7"
        />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <rect x="20" y="37" width="24" height="7" rx="2" fill="var(--bl-ink, currentColor)" />
      </g>
      <g className="bl-spin bl-origin-center" style={{ animationDuration: "7s" }}>
        <g className="bl-burst">
          <circle cx="32" cy="11" r="2.6" fill="var(--bl-accent, var(--accent))" />
        </g>
      </g>
    </svg>
  );
}

/** Pillar 3 — "Team Adoption"
 *  A central hub with four breathing team nodes connected to it, circled by
 *  a cadence ring of adoption spreading outward. */
function TeamAdoptionMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("bl-anim", className)}
      role="img"
      aria-label="Team adoption"
    >
      <circle cx="32" cy="32" r="18" className="bl-glow" />
      <g stroke="var(--bl-ink, currentColor)" strokeWidth="1.4" opacity="0.45">
        <line x1="18" y1="22" x2="29" y2="30" />
        <line x1="46" y1="22" x2="35" y2="30" />
        <line x1="18" y1="42" x2="29" y2="34" />
        <line x1="46" y1="42" x2="35" y2="34" />
      </g>
      <circle
        cx="32"
        cy="32"
        r="9"
        fill="none"
        stroke="var(--bl-ink, currentColor)"
        strokeWidth="1.6"
        opacity="0.4"
      />
      <circle cx="32" cy="32" r="5.5" fill="var(--bl-accent, var(--accent))" />
      <g className="bl-breathe">
        <circle cx="15" cy="18" r="3.6" fill="var(--bl-ink, currentColor)" opacity="0.55" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-2.4s" }}>
        <circle cx="49" cy="18" r="3.6" fill="var(--bl-ink, currentColor)" opacity="0.7" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-4.8s" }}>
        <circle cx="15" cy="46" r="3.6" fill="var(--bl-ink, currentColor)" opacity="0.7" />
      </g>
      <g className="bl-breathe" style={{ animationDelay: "-3.6s" }}>
        <circle cx="49" cy="46" r="3.6" fill="var(--bl-ink, currentColor)" opacity="0.55" />
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

const MARKS = [DiagnosisMark, OSInstallMark, TeamAdoptionMark];

export function ServicesLogo({ variant = 0, className }: ServicesLogoProps) {
  const Mark = MARKS[variant] ?? DiagnosisMark;
  return <Mark className={className} />;
}
