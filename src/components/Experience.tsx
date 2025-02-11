
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
        <p>• Developed an Android application using Jetpack Compose, implementing Material Design.</p>
        <p>• Optimized app performance using Coroutines and efficient state handling.</p>
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
        <p>• Built a cardiovascular risk assessment tool using IBM Watson.</p>
        <p>• Processed health metrics data and developed an intuitive interface.</p>
      </>
    ),
    icon: <Briefcase className="w-6 h-6" />,
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    duration: "2022 - Present",
    details: "CGPA: 9.49/10.0",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "K.B.N Junior College",
    duration: "2020 - 2022",
    details: "Percentage: 98.4%",
    icon: <GraduationCap className="w-6 h-6" />,
  }
];

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

const TimelineSection = ({ title, items, type }: { title: string; items: any[]; type: 'education' | 'experience' }) => (
  <div className="mb-16">
    <motion.h3
      variants={itemVariants}
      className="text-2xl font-semibold mb-8 text-primary text-center"
    >
      {title}
    </motion.h3>
    <div className="relative">
      <div className="absolute left-8 top-0 h-full w-0.5 bg-border"></div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4 relative"
          >
            <div className="p-2 bg-sage/10 rounded-lg z-10">
              {item.icon}
            </div>
            <div className="bg-background/10 backdrop-blur-sm p-6 rounded-lg border border-border flex-1">
              <h4 className="text-xl font-semibold text-primary">
                {type === 'education' ? item.degree : item.title}
              </h4>
              <p className="text-terra">
                {type === 'education' ? item.institution : item.company}
              </p>
              <p className="text-sm text-muted-foreground mb-2">{item.duration}</p>
              {type === 'education' ? (
                <p className="text-muted-foreground">{item.details}</p>
              ) : (
                <div className="text-muted-foreground">{item.description}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const Experience = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-background/5 backdrop-blur-sm" id="experience">
      <div className="absolute inset-0 opacity-10">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
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
            Journey
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Education & Experience
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <TimelineSection title="Education" items={education} type="education" />
          <TimelineSection title="Experience" items={experiences} type="experience" />
        </motion.div>
      </div>
    </section>
  );
};
