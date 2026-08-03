import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
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

export function ServiceCarousel({ cards, className = "" }: ServiceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const check = () => setIsMobile(mq.matches);
    check();
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  const count = cards.length;
  const goNext = () => setActiveIndex((p) => (p + 1) % count);
  const goPrev = () => setActiveIndex((p) => (p - 1 + count) % count);
  const goTo = (i: number) => setActiveIndex(i);

  // Card dimensions — slightly larger overall
  const cardW = isMobile ? 300 : 420;
  const cardH = isMobile ? 220 : 300;

  // Layout constants
  const sideScale = 0.92; // scale down slightly to offset 3D rotation bulge as center
  const sideRotateY = 28; // stronger outward tilt for more perspective
  const sideOffset = isMobile ? 0 : cardW * 0.90; // even smaller offset for tighter gap

  const getCardState = (cardIndex: number) => {
    const offset = (((cardIndex - activeIndex) % count) + count) % count;

    if (offset === 0) {
      // Active (center) card
      return {
        x: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        visible: true,
        isActive: true,
        isSide: false,
      };
    } else if (offset === 1) {
      // Card to the right — tilts outward
      return {
        x: sideOffset,
        rotateY: sideRotateY,
        scale: sideScale,
        opacity: 0.85,
        zIndex: 20,
        visible: true,
        isActive: false,
        isSide: true,
      };
    } else if (offset === count - 1) {
      // Card to the left — tilts outward
      return {
        x: -sideOffset,
        rotateY: -sideRotateY,
        scale: sideScale,
        opacity: 0.85,
        zIndex: 20,
        visible: true,
        isActive: false,
        isSide: true,
      };
    } else {
      // Back / background card — sits behind center card, scaled down
      return {
        x: 0,
        rotateY: 0,
        scale: 0.72,
        opacity: 0.3,
        zIndex: 10,
        visible: false,
        isActive: false,
        isSide: false,
      };
    }
  };

  const containerH = cardH + 80;

  return (
    <div className={`mt-14 ${className}`}>
      {/* 3D Stage */}
      <div
        className="relative mx-auto select-none"
        style={{
          width: "100%",
          maxWidth: isMobile ? cardW + 32 : cardW * 3,
          height: containerH,
          perspective: 1200,
          perspectiveOrigin: "50% 50%",
        }}
      >
        {cards.map((card, index) => {
          const state = getCardState(index);
          if (isMobile && !state.isActive) return null;
          const accent = card.accent ?? "var(--accent)";

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{
                width: cardW,
                height: cardH,
                left: "50%",
                top: 0,
                marginLeft: -cardW / 2,
                transformStyle: "preserve-3d",
                pointerEvents: state.visible ? "auto" : "none",
              }}
              initial={false}
              animate={{
                x: state.x,
                rotateY: state.rotateY,
                scale: state.scale,
                opacity: state.opacity,
                zIndex: state.zIndex,
              }}
              transition={{ type: "spring", stiffness: 130, damping: 22, mass: 0.85 }}
              onClick={() => !state.isActive && goTo(index)}
            >
              {/* Card shell — image fills 100% of card, zero black bars */}
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  borderRadius: 22,
                  backgroundColor: "#0a0a0a",
                  boxShadow: state.isActive
                    ? "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.1)"
                    : "0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
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
                    background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
                  }}
                />

                {/* Text overlaid at bottom */}
                <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                  <h3
                    className="font-display font-extrabold leading-tight tracking-tight text-white"
                    style={{ fontSize: state.isActive ? "1rem" : "0.875rem" }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-1 text-white/70 leading-snug text-[0.72rem]">
                    {card.desc}
                  </p>

                  {state.isActive && (
                    <div className="flex items-center gap-1.5 mt-2.5">
                      {cards.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); goTo(idx); }}
                          aria-label={`Go to slide ${idx + 1}`}
                          className="h-1 rounded-full transition-all duration-300"
                          style={{
                            width: activeIndex === idx ? 18 : 5,
                            backgroundColor: activeIndex === idx ? "#fff" : "rgba(255,255,255,0.35)",
                          }}
                        />
                      ))}
                    </div>
                  )}

                </div>
              </div>


            </motion.div>
          );
        })}

        {/* Left arrow — outside left edge */}
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
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            aria-label="Previous card"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === idx ? 20 : 6,
                  backgroundColor: activeIndex === idx ? "var(--accent)" : "var(--ink-muted)",
                }}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            aria-label="Next card"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
