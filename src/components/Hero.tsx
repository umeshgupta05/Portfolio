import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SpaceBackground } from "./hero/SpaceBackground";
import { HeroContent } from "./hero/HeroContent";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-background">
      <SpaceBackground />
      <HeroContent />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};