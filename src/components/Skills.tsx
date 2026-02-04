import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Database,
  Wrench,
  Monitor,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "C", "C++"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "Django",
      "Spring Boot",
      "JSP",
      "Servlets",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Oracle SQL"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Tools & Frameworks",
    icon: Wrench,
    skills: ["AWS", "Git", "GitHub", "Machine Learning", "Linux"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Development Tools",
    icon: Monitor,
    skills: [
      "Visual Studio Code",
      "Google Colab",
      "Android Studio",
      "Postman",
      "IntelliJ IDEA",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    category: "Professional Skills",
    icon: Users,
    skills: [
      "Project Leadership",
      "Technical Problem-Solving",
      "Team Collaboration",
      "Attention to Detail",
    ],
    color: "from-indigo-500 to-blue-500",
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Skills</h2>
          <p className="text-gray-600">Technical expertise and professional competencies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--color-from), var(--color-to))`,
                    "--color-from": skillGroup.color.split(" ")[1],
                    "--color-to": skillGroup.color.split(" ")[3],
                  } as React.CSSProperties}
                />
                <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition backdrop-blur-xl">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skillGroup.color} text-white mb-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.02,
                        }}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-lg text-xs font-medium transition duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
