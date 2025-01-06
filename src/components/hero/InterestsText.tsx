import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <span className="text-terra">{currentText}</span>
  );
};