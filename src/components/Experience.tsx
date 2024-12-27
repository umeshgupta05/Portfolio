import { motion } from "framer-motion";
import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Math Tutor",
      company: "Outlier.ai",
      duration: "June 2023 - Present",
      description: "Tutored students in advanced mathematics, focusing on calculus and linear algebra. Maintained a 95% student satisfaction rate.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "AI & Cloud Intern",
      company: "Edunet Foundation",
      duration: "May 2023 - July 2023",
      description: "Developed and deployed AI models on cloud platforms. Worked with cutting-edge technologies in machine learning and cloud computing.",
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const education = {
    degree: "B.Tech in Computer Science",
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    duration: "2021 - 2025",
    cgpa: "9.49/10.0",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-white" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-terra inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-terra/10"
          >
            Experience
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Professional Journey
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <GraduationCap className="w-8 h-8 text-sage" />
              <div>
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <p className="text-muted-foreground">{education.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {education.duration} | CGPA: {education.cgpa}
                </p>
              </div>
            </motion.div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="mt-1 p-2 bg-sage/10 rounded-lg">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-terra">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative h-[600px] rounded-lg overflow-hidden border border-border shadow-lg"
          >
            <motion.div variants={itemVariants} className="absolute top-4 right-4 z-10">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sage text-white rounded-lg hover:bg-sage-light transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Resume Preview"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};