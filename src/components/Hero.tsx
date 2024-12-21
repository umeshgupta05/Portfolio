import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="text-sage inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-sage/10">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-terra">Your Name</span>
          <br />
          Aspiring Developer
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-8">
          Passionate about creating beautiful and functional web experiences.
          Currently seeking opportunities to grow and learn.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-sage text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-sage-light transition-colors"
        >
          View My Work
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="animate-bounce w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};