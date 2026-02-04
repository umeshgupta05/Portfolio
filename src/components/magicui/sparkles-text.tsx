"use client";

import { CSSProperties, ReactElement, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  text: string;
  colors?: {
    first: string;
    second: string;
  };
  className?: string;
  sparklesCount?: number;
}

export function SparklesText({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
}: SparklesTextProps): ReactElement {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateStar = (): Sparkle => {
      return {
        id: `${Date.now()}-${Math.random()}`,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: Math.random() > 0.5 ? colors.first : colors.second,
        delay: Math.random() * 2,
        scale: Math.random() * 1 + 0.3,
        lifespan: Math.random() * 10 + 5,
      };
    };

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar);
      setSparkles(newSparkles);
    };

    initializeStars();

    const interval = setInterval(() => {
      setSparkles((currentSparkles) => {
        return currentSparkles.map((sparkle) => {
          if (Math.random() > 0.8) {
            return generateStar();
          }
          return sparkle;
        });
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div
      className={cn("relative inline-block", className)}
      style={
        {
          "--sparkles-first-color": colors.first,
          "--sparkles-second-color": colors.second,
        } as CSSProperties
      }
    >
      <span className="relative z-10">{text}</span>
      <span className="pointer-events-none absolute inset-0">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
      </span>
    </div>
  );
}

function Sparkle({ x, y, color, delay, scale, lifespan }: Sparkle) {
  return (
    <svg
      className="absolute animate-sparkle"
      style={
        {
          left: x,
          top: y,
          animationDelay: `${delay}s`,
          animationDuration: `${lifespan}s`,
        } as CSSProperties
      }
      width={scale * 14}
      height={scale * 14}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M7 0L7.5798 4.91587L11.6569 2.34315L9.08413 6.4202L14 7L9.08413 7.5798L11.6569 11.6569L7.5798 9.08413L7 14L6.4202 9.08413L2.34315 11.6569L4.91587 7.5798L0 7L4.91587 6.4202L2.34315 2.34315L6.4202 4.91587L7 0Z"
        fill={color}
      />
    </svg>
  );
}
