import { motion } from "framer-motion";
import { Code2, Braces, Database, Cloud, Terminal, Wrench } from "lucide-react";
import { skills } from "./skills/SkillsData";
import { SkillCategory } from "./skills/SkillCategory";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Programming Languages":
      return Code2;
    case "Web Technologies":
      return Braces;
    case "Database Systems":
      return Database;
    case "Cloud Technologies":
      return Cloud;
    case "Development Tools":
      return Terminal;
    default:
      return Wrench;
  }
};

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section className="py-20 px-4 bg-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={skillVariants}
            className="text-sage inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-sage/10"
          >
            Skills
          </motion.span>
          <motion.h2
            variants={skillVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Technical Expertise
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {categories.map((category) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills.filter(skill => skill.category === category)}
              icon={getCategoryIcon(category)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};