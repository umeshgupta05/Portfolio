
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Mobile Application Developer",
    company: "DeepMediQ",
    duration: "January 2025 – June 2025",
    description: (
      <>
        <p>• Developed the frontend of DeepMediQ, a cross-platform mobile application using React Native to interface with a health-focused AI chatbot.</p>
        <p>• Designed intuitive UI components for smooth user interaction, enabling users to input medical queries and receive detailed, AI-generated responses.</p>
        <p>• Integrated the mobile interface with a backend chatbot supporting DeepMediQ, an AI-powered health assistant by a US-based startup.</p>
      </>
    ),
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Python Full Stack Development Intern",
    company: "Eduskills Foundation",
    duration: "March 2025 – May 2025",
    description: (
      <>
        <p>• Trained in full stack web development with a focus on Python, Django, and RESTful API integration.</p>
        <p>• Built responsive interfaces using HTML, CSS, JavaScript, and jQuery adhering to modern UI/UX practices.</p>
        <p>• Developed mini-projects integrating frontend and backend logic using the Django MVT framework.</p>
      </>
    ),
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Amazon AWS Virtual Intern",
    company: "Eduskills Foundation",
    duration: "April 2024 - June 2024",
    description: (
      <>
        <p>• Successfully completed the Amazon AWS Cloud Virtual Internship, gaining hands-on experience with core AWS services.</p>
        <p>• Deployed a static website using Amazon EC2, configuring security groups and load balancing for availability.</p>
        <p>• Utilized Amazon S3 for scalable object storage and hosted static content with public access configuration.</p>
        <p>• Understood practical implementation of cloud architecture, monitoring (CloudWatch), and cost management tools.</p>
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
    details: "CGPA: 9.38/10.0",
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
