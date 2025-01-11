import { motion } from "framer-motion";
import { InterestsText } from "./InterestsText";

export const HeroContent = () => {
  const sentence = "Hi, I'm Umesh Gupta Pedamallu";
  const subtitle = "Computer Science Student";

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 * i }
    })
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-center max-w-3xl mx-auto z-10 backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.span
        custom={0}
        variants={containerVariants}
        className="text-sage inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-sage/10"
      >
        Welcome to my portfolio
      </motion.span>
      
      <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          {sentence.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-terra"
        >
          {subtitle.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.h1>

      <motion.p
        custom={3}
        variants={containerVariants}
        className="text-gray-300 text-lg md:text-xl mb-4"
      >
        A passionate developer with expertise in AI, Web Development, and Cloud Technologies.
      </motion.p>
      <motion.p
        custom={4}
        variants={containerVariants}
        className="text-gray-300 text-lg md:text-xl mb-8"
      >
        Currently interested in: <InterestsText />
      </motion.p>
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        custom={5}
        variants={containerVariants}
        className="bg-sage text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-sage-light transition-colors duration-300 inline-block"
      >
        View My Resume
      </motion.a>
    </motion.div>
  );
};