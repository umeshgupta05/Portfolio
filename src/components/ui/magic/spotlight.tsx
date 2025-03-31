
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
}

export const Spotlight = ({
  children,
  className,
  size = 400,
}: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
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
      ref={containerRef}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300 ease-in-out"
        style={{
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(155, 135, 245, 0.15), transparent 80%)`,
          opacity,
        }}
      />
      {children}
    </div>
  );
};
