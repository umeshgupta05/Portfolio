import { motion } from "framer-motion";
import { InterestsText } from "./InterestsText";

export const HeroContent = () => {
  const sentence = "Hi, I'm Umesh Gupta Pedamallu";
  const subtitle = "Computer Science Student";

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
      className="text-center max-w-3xl mx-auto z-10 backdrop-blur-sm bg-white/5 p-8 rounded-2xl"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-sage inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-sage/10"
      >
        Welcome to my portfolio
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-white"
      >
        <div>{sentence}</div>
        <div className="text-terra">{subtitle}</div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-300 text-lg md:text-xl mb-4"
      >
        A passionate developer with expertise in AI, Web Development, and Cloud Technologies.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-300 text-lg md:text-xl mb-8"
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
        className="bg-sage text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-sage-light transition-colors duration-300 inline-block"
      >
        View My Resume
      </motion.a>
    </motion.div>
  );
};