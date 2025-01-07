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
    <section className="py-20 px-4 bg-black text-white" id="certifications">
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
              className="flex items-start gap-4 p-6 rounded-lg border border-border hover:shadow-md transition-shadow bg-black/50"
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