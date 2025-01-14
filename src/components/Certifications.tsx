import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Data Science with Python",
      issuer: "edX",
      description: "Comprehensive course covering Python fundamentals for data science",
    },
    {
      title: "Complete Responsive Web Development",
      issuer: "Udemy",
      description: "Mastered modern web development techniques and responsive design",
    },
    {
      title: "Android Basics with Compose",
      issuer: "Google Developers",
      description: "Learned modern Android development using Jetpack Compose",
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS Academy",
      description: "Fundamental understanding of AWS cloud services and architecture",
    },
    {
      title: "Java Basic Certification",
      issuer: "Hackerrank",
      description: "Solid foundation in Java programming with essential skills and knowledge",
    },
    {
      title: "Programming in Modern C++",
      issuer: "NPTEL",
      description: "Advanced concepts and practices in modern C++ programming",
    },
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      description: "Fundamentals of Python programming for real-world applications",
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      description: "Acquired skills in AI and machine learning with Salesforce tools",
    },
    {
      title: "Introduction to Networks",
      issuer: "Cisco Networking Academy",
      description: "In-depth understanding of networking principles and protocols",
    },
    {
      title: "Foundation of R Software",
      issuer: "NPTEL",
      description: "Introduction to R programming for data analysis and statistical modeling",
    },
    {
      title: "SQL Intermediate Certification",
      issuer: "Hackerrank",
      description: "Intermediate level SQL knowledge, including queries, joins, and data manipulation",
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
    <section className="py-20 px-4 bg-transparent" id="certifications">
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
            Certifications
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Professional Development
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 rounded-lg border border-border hover:shadow-md transition-shadow bg-white/[0.02] backdrop-blur-[2px]"
            >
              <div className="mt-1 p-2 bg-sage/10 rounded-lg">
                <Award className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-terra">{cert.issuer}</p>
                <p className="text-muted-foreground mt-2">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
