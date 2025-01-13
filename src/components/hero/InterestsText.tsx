import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const InterestsText = () => {
  const [currentText, setCurrentText] = useState([]);
  const interests = [
    "Artificial Intelligence",
    "Web Development",
    "Cloud Computing",
    "Machine Learning",
    "Android Development"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interests.length);
      setCurrentText(interests[(currentIndex + 1) % interests.length].split(" "));
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, interests]);

  return (
    <span className="text-terra inline-flex">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="inline-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.1,
          }}
          style={{ display: "inline-flex", gap: "0.2rem" }} // Add space between words
        >
          {currentText.map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              style={{ display: "inline-flex" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: letterIndex * 0.05,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
