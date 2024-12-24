import { motion } from "framer-motion";
import { Code2, Braces, Database, Cloud, Terminal, Wrench } from "lucide-react";

const skills = [
  // Programming Languages
  { name: "Python", category: "Programming Languages" },
  { name: "C++", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  { name: "C", category: "Programming Languages" },
  { name: "R", category: "Programming Languages" },
  
  // Web Development
  { name: "React.js", category: "Web Technologies" },
  { name: "Angular", category: "Web Technologies" },
  { name: "Node.js", category: "Web Technologies" },
  { name: "Express.js", category: "Web Technologies" },
  { name: "JavaScript", category: "Web Technologies" },
  { name: "TypeScript", category: "Web Technologies" },
  { name: "HTML5", category: "Web Technologies" },
  { name: "CSS3", category: "Web Technologies" },
  
  // Frameworks & Tools
  { name: "Flask", category: "Frameworks & Tools" },
  { name: "Docker", category: "Frameworks & Tools" },
  { name: "Git", category: "Frameworks & Tools" },
  { name: "Machine Learning", category: "AI & ML" },
  { name: "Computer Vision", category: "AI & ML" },
  
  // Cloud Technologies
  { name: "AWS", category: "Cloud Technologies" },
  { name: "IBM Cloud", category: "Cloud Technologies" },
  
  // Database Systems
  { name: "MongoDB", category: "Database Systems" },
  { name: "SQL", category: "Database Systems" },
  { name: "Database Design", category: "Database Systems" },
  
  // Development Tools
  { name: "VS Code", category: "Development Tools" },
  { name: "IntelliJ IDE", category: "Development Tools" },
  { name: "Linux", category: "Development Tools" },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Programming Languages":
      return <Code2 className="w-6 h-6" />;
    case "Web Technologies":
      return <Braces className="w-6 h-6" />;
    case "Database Systems":
      return <Database className="w-6 h-6" />;
    case "Cloud Technologies":
      return <Cloud className="w-6 h-6" />;
    case "Development Tools":
      return <Terminal className="w-6 h-6" />;
    default:
      return <Wrench className="w-6 h-6" />;
  }
};

const categories = Array.from(new Set(skills.map(skill => skill.category)));

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

  return (
    <section className="py-20 px-4 bg-sage/5" id="skills">
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
            <div key={category} className="space-y-6">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-terra"
                >
                  {getCategoryIcon(category)}
                </motion.div>
                <h3 className="text-xl font-semibold text-terra">{category}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-sage/20 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};