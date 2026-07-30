import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface StrategyCallButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function StrategyCallButton({
  className = "",
  size = "lg",
  onClick,
}: StrategyCallButtonProps) {
  const sizeClasses = {
    sm: "h-10 px-5 text-xs",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
    <Link
      to="/contact"
      search={{ service: "strategy" }}
      onClick={onClick}
      className={`btn-premium group inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        Book a Strategy Call
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
