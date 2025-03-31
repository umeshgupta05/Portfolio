
import { cn } from "@/lib/utils";
import React from "react";

interface TextGlowProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const TextGlow = ({
  children,
  className,
  color = "rgba(155, 135, 245, 0.35)",
}: TextGlowProps) => {
  return (
    <span
      className={cn(
        "animate-text-glow text-primary relative inline-block transition-all duration-300",
        className
      )}
      style={{
        textShadow: `0 0 10px ${color}, 0 0 150px ${color}`,
      }}
    >
      {children}
    </span>
  );
};
