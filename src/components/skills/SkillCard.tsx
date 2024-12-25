import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: string;
}

export const SkillCard = ({ name, icon }: SkillCardProps) => {
  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <motion.div
      variants={skillVariants}
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col items-center gap-3">
        <img 
          src={icon} 
          alt={name} 
          className="w-12 h-12 object-contain"
        />
        <motion.span 
          variants={skillVariants}
          className="font-medium text-foreground"
        >
          {name}
        </motion.span>
      </div>
    </motion.div>
  );
};