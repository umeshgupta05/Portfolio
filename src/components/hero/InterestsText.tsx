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
      setCurrentText(interests[currentIndex]);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, interests]);

  return (
    <span className="text-terra inline-flex">
      <AnimatePresence mode="wait">
        <motion.span key={currentText} className="inline-flex">
          {currentText.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 1.2,
                transition: {
                  duration: 0.3,
                  ease: "easeIn",
                },
              }}
              style={{
                display: "inline-block",
                position: "relative",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
