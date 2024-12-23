import { motion } from "framer-motion";

const skills = [
  // Programming Languages
  { name: "Python", level: 90, category: "Programming Languages" },
  { name: "C++", level: 85, category: "Programming Languages" },
  { name: "Java", level: 80, category: "Programming Languages" },
  { name: "C", level: 75, category: "Programming Languages" },
  { name: "R", level: 65, category: "Programming Languages" },
  
  // Web Development
  { name: "React.js", level: 85, category: "Web Technologies" },
  { name: "Angular", level: 80, category: "Web Technologies" },
  { name: "Node.js", level: 85, category: "Web Technologies" },
  { name: "Express.js", level: 80, category: "Web Technologies" },
  { name: "JavaScript", level: 90, category: "Web Technologies" },
  { name: "TypeScript", level: 85, category: "Web Technologies" },
  { name: "HTML5", level: 90, category: "Web Technologies" },
  { name: "CSS3", level: 85, category: "Web Technologies" },
  
  // Frameworks & Tools
  { name: "Flask", level: 80, category: "Frameworks & Tools" },
  { name: "Docker", level: 75, category: "Frameworks & Tools" },
  { name: "Git", level: 85, category: "Frameworks & Tools" },
  { name: "Machine Learning", level: 80, category: "AI & ML" },
  { name: "Computer Vision", level: 75, category: "AI & ML" },
  
  // Cloud Technologies
  { name: "AWS", level: 70, category: "Cloud Technologies" },
  { name: "IBM Cloud", level: 65, category: "Cloud Technologies" },
  
  // Database Systems
  { name: "MongoDB", level: 80, category: "Database Systems" },
  { name: "SQL", level: 85, category: "Database Systems" },
  { name: "Database Design", level: 80, category: "Database Systems" },
  
  // Development Tools
  { name: "VS Code", level: 90, category: "Development Tools" },
  { name: "IntelliJ IDE", level: 85, category: "Development Tools" },
  { name: "Linux", level: 80, category: "Development Tools" },
];

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
              <h3 className="text-xl font-semibold text-terra mb-4">{category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="relative"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-sage/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-sage rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
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