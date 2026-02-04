"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [positions, setPositions] = useState<
    Array<{ x: number; y: number; z: number }>
  >([]);

  useEffect(() => {
    // Generate random positions for icons
    const newPositions = iconSlugs.map(() => ({
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      z: Math.random() * 200 - 100,
    }));
    setPositions(newPositions);
  }, [iconSlugs]);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
      <div className="relative w-[400px] h-[400px]">
        {iconSlugs.map((slug, index) => {
          const pos = positions[index] || { x: 0, y: 0, z: 0 };
          return (
            <motion.div
              key={slug}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: pos.x,
                y: pos.y,
              }}
              transition={{
                duration: 1,
                delay: index * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            >
              <div className="px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:shadow-md transition-shadow">
                {slug}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
