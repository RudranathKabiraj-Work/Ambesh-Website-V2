interface MonogramProps {
  caption?: string;
  className?: string;
  location?: string;
  since?: string;
  name?: string;
}

export function Monogram({
  className = "",
  location = "Delhi · India",
  since = "Training since 2019",
  name = "Ambesh Tiwari",
}: MonogramProps) {
  return (
    <figure className={`group relative overflow-hidden rounded-3xl ${className}`}>
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <img
        src="/ambesh-image.png"
        alt={name}
        className="absolute bottom-0 left-0 w-full h-auto object-contain object-bottom scale-125 translate-y-8 transition-transform duration-500 group-hover:scale-130 group-hover:translate-y-7 origin-bottom"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />

      <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
        <span>{location}</span>
        <span>{since}</span>
      </div>
    </figure>
  );
}
