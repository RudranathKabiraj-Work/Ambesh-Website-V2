import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ServiceCarouselCard = {
  image: string;
  title: string;
  desc: string;
  href: string;
  badge?: string;
  accent?: string;
  ctaLabel?: string;
};

type ServiceCarouselProps = {
  cards: ServiceCarouselCard[];
  className?: string;
};

const HEX_ROTATE_SPRING = { type: "spring", stiffness: 110, damping: 20, mass: 0.9 } as const;

export function ServiceCarousel({ cards, className = "" }: ServiceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const check = () => setIsMobile(mq.matches);
    check();
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  // Auto-rotate to the next card; resets after any manual navigation.
  useEffect(() => {
    const timer = setTimeout(goNext, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const count = cards.length;
  const angleStep = 360 / count;
  const cardW = isMobile ? 290 : 365;
  const cardH = isMobile ? 230 : 255;
  // Distance from the hexagon centre to each face; slightly larger than a tight
  // hexagon so there is a small, even gap between every card.
  const radius = (cardW / (2 * Math.tan(Math.PI / count))) * 1.08;
  const containerH = cardH * 1.7;

  const goNext = () => {
    setRotation((r) => r + angleStep);
    setActiveIndex((p) => (p + 1) % count);
  };
  const goPrev = () => {
    setRotation((r) => r - angleStep);
    setActiveIndex((p) => (p - 1 + count) % count);
  };
  const goTo = (i: number) => {
    if (i === activeIndex) return;
    let delta = i - activeIndex;
    if (delta > count / 2) delta -= count;
    if (delta < -count / 2) delta += count;
    setRotation((r) => r + delta * angleStep);
    setActiveIndex(i);
  };

  const renderCardShell = (card: ServiceCarouselCard, isActive: boolean) => (
    <div className="group relative h-full w-full">
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          borderRadius: 22,
          backgroundColor: "#0a0a0a",
          boxShadow: isActive
            ? "0 10px 28px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.1)"
            : "0 5px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* Gradient-rotate ring (CodeFronts card-21) — fades in and spins on hover */}
        <div
          className="card-21-ring pointer-events-none absolute inset-0 z-20 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:[animation-play-state:running]"
          aria-hidden
        />
        {/* Full-bleed image — object-cover always fills 100%, leaving absolutely zero left or right borders */}
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

      {/* Subtle gradient only at very bottom for text legibility */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "55%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
        }}
      />

      {/* Text overlaid at bottom */}
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
        <h3
          className="font-display font-extrabold leading-tight tracking-tight text-white"
          style={{ fontSize: isActive ? "1rem" : "0.875rem" }}
        >
          {card.title}
        </h3>
        <p className="mt-1 text-white/70 leading-snug text-[0.72rem]">{card.desc}</p>

        {isActive && !isMobile && (
          <div className="mt-2.5 flex items-center gap-1.5">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`relative h-1 cursor-pointer overflow-hidden rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "carousel-dot-track" : ""
                }`}
                style={{
                  width: activeIndex === idx ? 18 : 5,
                  backgroundColor:
                    activeIndex === idx ? undefined : "rgba(255,255,255,0.35)",
                }}
              >
                {activeIndex === idx && (
                  <span className="carousel-dot-progress carousel-dot-fill absolute inset-y-0 left-0 rounded-full" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );

  return (
    <div className={`mt-7 md:mt-14 ${className}`}>
      {/* Hexagonal 3D stage */}
      <div
        className="relative mx-auto"
        style={{
          width: "100%",
          maxWidth: isMobile ? cardW * 2 : cardW * 2.6,
          height: containerH,
          perspective: 1400,
        }}
      >
        {/* Rotating hexagon — each card is a face of the hexagon */}
        <motion.div
          className="absolute"
          style={{
            width: cardW,
            height: cardH,
            left: "50%",
            top: "50%",
            marginLeft: -cardW / 2,
            marginTop: -cardH / 2,
            transformStyle: "preserve-3d",
          }}
          animate={{ rotateY: -rotation }}
          transition={HEX_ROTATE_SPRING}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="absolute cursor-pointer"
              style={{
                inset: 0,
                transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
              onClick={() => goTo(i)}
            >
              {renderCardShell(card, i === activeIndex)}
            </div>
          ))}
        </motion.div>

        {/* Left arrow — outside left edge (desktop) */}
        {!isMobile && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous card"
              className="absolute z-40 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/70"
              style={{ left: 0, top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next card"
              className="absolute z-40 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/70"
              style={{ right: 0, top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {/* Mobile arrows */}
      {isMobile && (
        <div className="mt-0 flex items-center justify-center">
          <div className="flex items-center gap-1.5">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "carousel-dot-track" : ""
                }`}
                style={{
                  width: activeIndex === idx ? 20 : 6,
                  backgroundColor:
                    activeIndex === idx ? undefined : "var(--ink-muted)",
                }}
              >
                {activeIndex === idx && (
                  <span className="carousel-dot-progress carousel-dot-fill absolute inset-y-0 left-0 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
