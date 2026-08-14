import { useEffect, useRef, useState } from "react";

interface TypeLineProps {
  text: string;
  className?: string;
  loop?: boolean;
}

export function TypeLine({ text, className = "", loop = false }: TypeLineProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let alive = true;

    const type = (count: number) => {
      if (!alive) return;
      if (count <= text.length) {
        setShown(count);
        window.setTimeout(() => type(count + 1), 28);
      } else if (loop) {
        // Typing finished: hold for a moment, then retype continuously.
        window.setTimeout(() => {
          if (!alive) return;
          setShown(0);
          window.setTimeout(() => type(1), 28);
        }, 3200);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            type(1);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -30px 0px" },
    );
    observer.observe(el);
    return () => {
      alive = false;
      observer.disconnect();
    };
  }, [text, loop]);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {text.slice(0, shown)}
      <span
        className="inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-current"
        aria-hidden
      />
    </p>
  );
}
