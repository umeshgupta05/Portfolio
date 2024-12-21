import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto"
      >
        <motion.span
          custom={0}
          variants={textVariants}
          className="text-sage inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-sage/10"
        >
          Welcome to my portfolio
        </motion.span>
        <motion.h1
          custom={1}
          variants={textVariants}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-terra">Your Name</span>
          <br />
          Aspiring Developer
        </motion.h1>
        <motion.p
          custom={2}
          variants={textVariants}
          className="text-muted-foreground text-lg md:text-xl mb-8"
        >
          Passionate about creating beautiful and functional web experiences.
          Currently seeking opportunities to grow and learn.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          custom={3}
          variants={textVariants}
          className="bg-sage text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-sage-light transition-colors"
        >
          View My Work
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="animate-bounce w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};