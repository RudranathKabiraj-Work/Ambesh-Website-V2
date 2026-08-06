interface Props {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Lightweight static mesh gradient background.
 * Animated blobs were removed for mobile FPS / battery; only desktop with
 * a fine pointer + no reduced motion preference gets a subtle hover hint.
 */
export function MeshBackground({ variant = "dark", className = "" }: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {isDark && <div className="absolute inset-0 bg-night" />}
      <div
        className="absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "oklch(0.55 0.25 295 / 0.55)" }}
      />
      <div
        className="absolute -right-32 top-20 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "oklch(0.66 0.26 0 / 0.5)" }}
      />
      {isDark && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      )}
    </div>
  );
}
