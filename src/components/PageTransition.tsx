import { useRef } from "react";
import { motion } from "framer-motion";

// Helper component to freeze the route rendering during transitions
export function FrozenRoute({ children, freeze }: { children: React.ReactNode; freeze: boolean }) {
  const copy = useRef<React.ReactNode>(null);
  if (!freeze) {
    copy.current = children;
  }
  return <>{copy.current}</>;
}

interface PageTransitionProps {
  state: "closing" | "opening";
  title: string;
  direction: "forward" | "backward";
}

export function PageTransition({ state, title, direction }: PageTransitionProps) {
  // Determine starting and ending positions based on travel direction
  const xInitial = direction === "forward" ? "-140%" : "140%";
  const xExit = direction === "forward" ? "140%" : "-140%";
  const skewAngle = direction === "forward" ? "-15deg" : "15deg";

  const curtainVariants = {
    initial: {
      x: xInitial,
    },
    closing: {
      x: "0%",
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    opening: {
      x: xExit,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  const initialLetter = title.charAt(0);

  const xWordInitial = direction === "forward" ? -40 : 40;
  const xWordExit = direction === "forward" ? 40 : -40;

  return (
    <>
      {/* Hardware-Accelerated Textured Diagonal Curtain with theme adaptive background */}
      <motion.div
        variants={curtainVariants}
        initial="initial"
        animate={state}
        className="fixed inset-y-0 -left-[20vw] w-[140vw] z-[9998] bg-[#f8fafc] dark:bg-[#030712] border-r border-l border-white/5 pointer-events-none overflow-hidden"
        style={{
          transform: `skewX(${skewAngle})`,
          boxShadow: "0 0 100px rgba(0, 0, 0, 0.15) dark:boxShadow: 0 0 100px rgba(0, 0, 0, 0.7)",
          willChange: "transform",
        }}
      >
        {/* Slanted Dot Grid Pattern inside the curtain using themed var(--ink) color */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(var(--ink) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Glowing brand spotlight - softer in light mode */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-gradient-brand opacity-[0.07] dark:opacity-25 rounded-full blur-[140px]" />
      </motion.div>

      {/* Editorial Left-Aligned bottom-offset Page Name overlay */}
      <div className="fixed inset-0 z-[9999] flex flex-col justify-end items-start p-10 md:p-24 pb-20 md:pb-28 pointer-events-none">
        <div className="text-left relative flex flex-col items-start">
          {/* Giant background watermark letter - theme adaptive opacity */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: state === "closing" ? 1 : 0.8,
              opacity: state === "closing" ? 1 : 0,
            }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="absolute font-serif text-[28rem] sm:text-[36rem] md:text-[44rem] font-bold text-ink/5 dark:text-white/5 select-none pointer-events-none leading-none z-0 -left-14 -bottom-24 sm:-bottom-36 md:-bottom-48"
          >
            {initialLetter}
          </motion.div>

          {/* Foreground content card - Left Aligned */}
          <div className="relative z-10 flex flex-col items-start pl-2">
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              animate={{ 
                opacity: state === "closing" ? 0.6 : 0,
                y: state === "closing" ? 0 : -8
              }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-ink-muted dark:text-white/60 mb-3 block"
            >
              Entering Section
            </motion.span>
            
            {/* Outlined-to-Solid Glowing Title Transition with dynamic horizontal sweep */}
            <motion.h1 
              initial={{ 
                opacity: 0, 
                x: xWordInitial, 
                letterSpacing: "-0.05em",
                backgroundPosition: "200% 0",
              }}
              animate={{
                opacity: state === "closing" ? 1 : 0,
                x: state === "closing" ? 0 : xWordExit,
                letterSpacing: state === "closing" ? "0.08em" : "-0.05em",
                backgroundPosition: state === "closing" ? "-200% 0" : "200% 0",
              }}
              transition={{ 
                opacity: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                x: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                letterSpacing: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                backgroundPosition: { duration: 2.2, ease: "linear", repeat: Infinity }, // Infinite reflection sweep
              }}
              className="font-display text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black uppercase py-1 select-none text-transparent bg-clip-text whitespace-nowrap"
              style={{
                backgroundImage: "var(--curtain-text-gradient)",
                backgroundSize: "200% auto",
                WebkitTextStroke: "1px var(--curtain-text-stroke)",
                textShadow: "0 0 20px var(--curtain-text-shadow)",
              }}
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
}
