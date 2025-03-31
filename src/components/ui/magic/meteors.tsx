
import { cn } from "@/lib/utils";
import React from "react";

export interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#ffffff00] before:to-white before:right-0",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 1.9 + "s",
            animationDuration: Math.floor(Math.random() * 10) + 2 + "s",
          }}
        ></span>
      ))}
    </>
  );
};
