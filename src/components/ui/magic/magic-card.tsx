
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
}

export const MagicCard = ({
  children,
  className,
  cardClassName,
  ...props
}: MagicCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden",
        "group transition duration-200",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(800px)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 z-[1]",
          "blur-lg pointer-events-none",
        )}
        style={{
          opacity: opacity * 0.4,
          transform: `translate(${position.x / 10}px, ${position.y / 10}px)`,
        }}
      />
      <div
        className={cn(
          "h-full w-full rounded-xl transition duration-200 relative z-[2]",
          cardClassName
        )}
        style={{
          transform: `translate(${position.x / 40}px, ${position.y / 40}px) rotateX(${(position.y - 150) / 40}deg) rotateY(${-(position.x - 150) / 40}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
