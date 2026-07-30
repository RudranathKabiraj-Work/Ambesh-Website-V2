import type { ReactNode, CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "footer" | "h1" | "h2" | "h3" | "p" | "span";
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
