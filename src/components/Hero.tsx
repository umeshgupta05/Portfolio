import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HeroContent } from "./hero/HeroContent";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-gradient-to-b from-white to-primary-light/20">
      <HeroContent />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="float"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};