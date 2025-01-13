import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HeroContent } from "./hero/HeroContent";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-background/80 backdrop-blur-sm">
      <HeroContent />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 z-10"
      >
        <ArrowDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
};