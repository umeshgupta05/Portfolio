
import React from "react";
import { cn } from "@/lib/utils";

interface NeonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradient?: "blue" | "purple" | "cyan" | "pink" | "red" | "green";
  borderRadius?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  className?: string;
}

export const NeonCard = ({
  children,
  gradient = "purple",
  borderRadius = "xl",
  className,
  ...props
}: NeonCardProps) => {
  const gradientMap = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    cyan: "from-cyan-400 to-cyan-500",
    pink: "from-pink-500 to-pink-600",
    red: "from-red-500 to-red-600",
    green: "from-green-500 to-green-600",
  };

  const radiusMap = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "relative p-[1px] overflow-hidden group",
        radiusMap[borderRadius],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-60",
          gradientMap[gradient]
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br blur-xl",
          gradientMap[gradient]
        )}
      />
      <div
        className={cn(
          "relative h-full w-full backdrop-blur-md bg-black/70 p-6",
          radiusMap[borderRadius]
        )}
      >
        {children}
      </div>
    </div>
  );
};
