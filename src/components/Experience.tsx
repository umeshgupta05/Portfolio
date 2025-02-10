
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Math Tutor",
    company: "Outlier.ai",
    duration: "November 2024 - Present",
    description: (
      <>
        <p>• Gained exposure to creating test cases for validating AI model outputs.</p>
        <p>• Learned the basics of evaluating AI models' performance for mathematical problem-solving.</p>
      </>
    ),
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Android Developer Intern",
    company: "Eduskills Foundation - AICTE Virtual Internship",
    duration: "July 2024 - August 2024",
    description: (
      <>
        <p>• Gained hands-on experience in Jetpack Compose, focusing on declarative UI development, state management, and component-based architecture.</p>
        <p>• Developed an Android application using Jetpack Compose, implementing Material Design, navigation components, and interactive UI elements.</p>
        <p>• Optimized app performance by leveraging asynchronous programming (Coroutines) and efficient state handling techniques.</p>
      </>
    ),
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "AI & Cloud Intern",
    company: "Edunet Foundation - AICTE Virtual Internship",
    duration: "July 2024 - August 2024",
    description: (
      <>
        <p>• Built a cardiovascular risk assessment tool using IBM Watson and foundational machine learning models.</p>
        <p>• Processed health metrics data and developed an intuitive interface for real-time risk prediction.</p>
        <p>• Gained hands-on experience with IBM Watson, AutoML provided by IBM Cloud for building predictive models.</p>
      </>
    ),
    icon: <Briefcase className="w-6 h-6" />,
  },
];

const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
  duration: "2022 - Present",
  cgpa: "9.49/10.0",
};

export const Experience = () => {
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
    <section className="py-20 px-4 relative overflow-hidden bg-background/5 backdrop-blur-sm" id="experience">
      <div className="absolute inset-0 opacity-10">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-primary/10"
          >
            Experience
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary"
          >
            Professional Journey
          </motion.h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8 max-w-4xl w-full"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <GraduationCap className="w-8 h-8 text-sage" />
              <div>
                <h3 className="text-xl font-semibold text-primary">{education.degree}</h3>
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
                className="flex items-start gap-4 p-6 rounded-lg border border-border hover:shadow-md transition-shadow bg-background/10 backdrop-blur-sm"
              >
                <div className="mt-1 p-2 bg-sage/10 rounded-lg">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-terra">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                  <div className="text-muted-foreground">{exp.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
