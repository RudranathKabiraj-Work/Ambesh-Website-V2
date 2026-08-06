import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface Props {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
}

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function GradientButton({
  to,
  href,
  children,
  className = "",
  size = "md",
  variant = "solid",
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5";

  const variantClasses =
    variant === "solid"
      ? "bg-gradient-brand text-white shadow-glow hover:shadow-glow-pink animate-gradient"
      : variant === "outline"
        ? "border border-ink/15 bg-canvas text-ink hover:border-ink/40 hover:bg-ink hover:text-canvas"
        : "text-ink hover:text-violet";

  const cls = `${base} ${sizes[size]} ${variantClasses} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "solid" && (
        <span
          className="absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70 bg-gradient-brand"
          aria-hidden
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} className={cls}>
      {content}
    </a>
  );
}
