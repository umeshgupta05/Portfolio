import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { SkillCard } from "./SkillCard";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  icon: LucideIcon;
}

export const SkillCategory = ({ category, skills, icon: Icon }: SkillCategoryProps) => {
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
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="text-terra"
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <motion.h3 
          variants={skillVariants}
          className="text-xl font-semibold text-terra"
        >
          {category}
        </motion.h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};