import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const InterestsText = () => {
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
      setCurrentText(interests[(currentIndex + 1) % interests.length]);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, interests]);

  return (
    <span className="text-terra inline-flex">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          className="inline-flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.1
          }}
        >
          {/* Splitting by words, then rendering each word with spaces */}
          {currentText.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-flex">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: letterIndex * 0.05,
                    ease: "easeInOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              {/* Add space between words */}
              <motion.span
                key={`space-${wordIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: word.length * 0.05,
                  ease: "easeInOut"
                }}
              >
                {" "}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
