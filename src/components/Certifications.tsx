
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Programming in Modern C++",
      issuer: "NPTEL",
      description: "Score: 77/100 Top 2%",
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS Academy",
      description: "Fundamental understanding of AWS cloud services and architecture",
    },
    {
      title: "Database Management System",
      issuer: "Infosys Springboard",
      description: "Comprehensive understanding of database design and management",
    },
    {
      title: "Data Structures and Algorithms using Java",
      issuer: "Infosys Springboard",
      description: "Advanced knowledge of data structures and algorithmic problem-solving in Java",
    },
    {
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      description: "Practical application of Agile and Scrum methodologies in software development",
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB Academy",
      description: "NoSQL database fundamentals and MongoDB operations",
    },
    {
      title: "React Certification",
      issuer: "GeeksforGeeks",
      description: "Modern React development patterns and best practices",
    },
    {
      title: "Design Technology and Innovation",
      issuer: "NPTEL",
      description: "Innovation principles and design thinking methodologies",
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-transparent" id="certifications">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.span
            variants={itemVariants}
            className="text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-primary/10"
          >
            Certifications
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary"
          >
            Professional Development
          </motion.h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6 flex flex-col items-center"
        >
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 max-w-xl w-full bg-white/[0.02] backdrop-blur-[2px] p-4 rounded-lg border border-border"
            >
              <div className="mt-1">
                <Award className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                <p className="text-sm text-terra">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
