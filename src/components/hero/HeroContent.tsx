import { motion } from "framer-motion";
import { InterestsText } from "./InterestsText";

export const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-center max-w-3xl mx-auto z-10 p-8 rounded-2xl glass"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-primary-light text-primary"
      >
        Welcome to my portfolio
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        <div className="text-primary">Hi, I'm Umesh Gupta Pedamallu</div>
        <div className="text-secondary mt-2">Computer Science Student</div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-neutral text-lg md:text-xl mb-4"
      >
        A passionate developer with expertise in AI, Web Development, and Cloud Technologies.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-neutral text-lg md:text-xl mb-8"
      >
        Currently interested in: <InterestsText />
      </motion.p>
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-colors duration-300 inline-block"
      >
        View My Resume
      </motion.a>
    </motion.div>
  );
};