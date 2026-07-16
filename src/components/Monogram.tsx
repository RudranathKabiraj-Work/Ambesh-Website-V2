interface MonogramProps {
  caption?: string;
  className?: string;
  location?: string;
  since?: string;
  name?: string;
}

/**
 * Modern portrait placeholder. Vibrant gradient surface with monogram + grid.
 */
export function Monogram({
  className = "",
  location = "Delhi · India",
  since = "Training since 2019",
  name = "Ambesh Tiwari",
}: MonogramProps) {
  return (
    <figure className={`relative overflow-hidden rounded-3xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-brand animate-gradient opacity-90" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />

      <div className="relative flex h-full w-full flex-col items-center justify-center p-10 text-white">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/80">
          {name}
        </span>
        <span className="mt-6 text-[10rem] font-black leading-none tracking-tighter md:text-[14rem]">
          AT
        </span>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[0.65rem] uppercase tracking-[0.2em] text-white/70">
          <span>{location}</span>
          <span>{since}</span>
        </div>
      </div>
    </figure>
  );
}
