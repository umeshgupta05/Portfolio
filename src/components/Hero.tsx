import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const interests = [
    "Artificial Intelligence",
    "Web Development",
    "Cloud Computing",
    "Machine Learning"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
      setCurrentText(interests[currentIndex]);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, interests]);

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
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-background">
      {/* Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
        <div className="planet" style={{ top: '10%', right: '15%' }}></div>
        <div className="rocket"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto z-10 backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Hi, I'm <span className="text-terra">Umesh Gupta Pedamallu</span>
          <br />
          <span className="text-terra">Computer Science Student</span>
        </motion.h1>
        <motion.p
          custom={2}
          variants={textVariants}
          className="text-gray-300 text-lg md:text-xl mb-4"
        >
          A passionate developer with expertise in AI, Web Development, and Cloud Technologies.
        </motion.p>
        <motion.p
          custom={3}
          variants={textVariants}
          className="text-gray-300 text-lg md:text-xl mb-8"
        >
          Currently interested in: <span className="text-terra">{currentText}</span>
        </motion.p>
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          custom={3}
          variants={textVariants}
          className="bg-sage text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-sage-light transition-colors duration-300 inline-block"
        >
          View My Resume
        </motion.a>
      </motion.div>
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