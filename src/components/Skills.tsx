import { motion } from "framer-motion";
import { Code2, Braces, Database, Cloud, Terminal, Wrench } from "lucide-react";

const skills = [
  // Programming Languages
  { name: "Python", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "R", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  
  // Web Development
  { name: "React.js", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Node.js", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "JavaScript", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML5", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Web Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  
  // Frameworks & Tools
  { name: "Flask", category: "Frameworks & Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Docker", category: "Frameworks & Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", category: "Frameworks & Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Machine Learning", category: "AI & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Computer Vision", category: "AI & ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  
  // Cloud Technologies
  { name: "AWS", category: "Cloud Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "IBM Cloud", category: "Cloud Technologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg" },
  
  // Database Systems
  { name: "MongoDB", category: "Database Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "SQL", category: "Database Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
  
  // Development Tools
  { name: "VS Code", category: "Development Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "IntelliJ IDE", category: "Development Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
  { name: "Linux", category: "Development Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
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
                      <div className="flex flex-col items-center gap-3">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-12 h-12 object-contain"
                        />
                        <span className="font-medium text-foreground">{skill.name}</span>
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
