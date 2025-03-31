
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Spotlight } from "./ui/magic/spotlight";
import { NeonCard } from "./ui/magic/neon-card";
import { Meteors } from "./ui/magic/meteors";
import { TextGlow } from "./ui/magic/text-glow";

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

// Define animation variants
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

const TimelineSection = ({ title, items, type }: { title: string; items: any[]; type: 'education' | 'experience' }) => {
  return (
    <div className="mb-16">
      <motion.h3
        variants={itemVariants}
        className="text-2xl font-semibold mb-8 text-center"
      >
        <TextGlow>{title}</TextGlow>
      </motion.h3>
      <div className="relative">
        <div className="absolute left-8 top-0 h-full w-0.5 bg-primary/30"></div>
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 relative"
            >
              <div className="p-2 bg-primary/10 rounded-lg z-10">
                {item.icon}
              </div>
              <NeonCard 
                gradient={index % 2 === 0 ? "purple" : "blue"} 
                className="flex-1"
              >
                <h4 className="text-xl font-semibold text-primary">
                  {type === 'education' ? item.degree : item.title}
                </h4>
                <p className="text-secondary">
                  {type === 'education' ? item.institution : item.company}
                </p>
                <p className="text-sm text-muted-foreground mb-2">{item.duration}</p>
                {type === 'education' ? (
                  <p className="text-muted-foreground">{item.details}</p>
                ) : (
                  <div className="text-muted-foreground">{item.description}</div>
                )}
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-black/90" id="experience">
      <Meteors number={15} />
      <Spotlight className="max-w-4xl mx-auto relative z-10">
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
            className="text-3xl md:text-4xl font-bold"
          >
            <TextGlow>Education & Experience</TextGlow>
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
      </Spotlight>
    </section>
  );
};
