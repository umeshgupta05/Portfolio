
import { motion } from "framer-motion";
import { Code2, Braces, Database, Cloud, Terminal, Wrench } from "lucide-react";

const skills = [
  // Programming Languages
  { name: "Python", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "SQL", category: "Programming Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
  
  // Web Development
  { name: "HTML", category: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", category: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", category: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", category: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "JSP", category: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Servlets", category: "Web Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  
  // Frameworks & Tools
  { name: "AWS", category: "Frameworks & Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Flask", category: "Frameworks & Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Git", category: "Frameworks & Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Machine Learning", category: "Frameworks & Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Android", category: "Frameworks & Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  
  // Databases
  { name: "MongoDB", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  
  // Development Tools
  { name: "Visual Studio Code", category: "Development Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Google Colab", category: "Development Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Android Studio", category: "Development Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "Linux", category: "Development Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  
  // Professional Skills
  { name: "Project Leadership", category: "Professional Skills", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  { name: "Technical Problem-Solving", category: "Professional Skills", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Team Collaboration", category: "Professional Skills", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Attention to detail", category: "Professional Skills", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Programming Languages":
      return <Code2 className="w-6 h-6" />;
    case "Web Development":
      return <Braces className="w-6 h-6" />;
    case "Databases":
      return <Database className="w-6 h-6" />;
    case "Frameworks & Tools":
      return <Cloud className="w-6 h-6" />;
    case "Development Tools":
      return <Terminal className="w-6 h-6" />;
    case "Professional Skills":
      return <Wrench className="w-6 h-6" />;
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
    <section className="py-20 px-4 bg-transparent" id="skills">
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
            className="text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-primary/10"
          >
            Skills
          </motion.span>
          <motion.h2
            variants={skillVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary"
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
            <div key={category} className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-sage/10">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 rounded-lg bg-primary/10 text-primary"
                >
                  {getCategoryIcon(category)}
                </motion.div>
                <h3 className="text-2xl font-semibold text-primary">{category}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                     <motion.div
                       key={skill.name}
                       variants={skillVariants}
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-sage/10 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 hover-scale hover-glow"
                     >
                      <div className="flex-shrink-0">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="font-medium text-foreground text-sm">{skill.name}</span>
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
