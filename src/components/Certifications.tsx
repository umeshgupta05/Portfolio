import { motion } from "framer-motion";

const certifications = [
  "Programming in Modern C++ - NPTEL (Score: 77/100, Top 2%)",
  "Foundations of R Software - NPTEL (Score: 97/100, Top 2%)",
  "AWS Cloud Foundations - AWS Academy",
  "Django Web Development - GeeksForGeeks",
  "SQL Proficiency Certification - HackerRank",
  "Database Management System - Infosys Springboard",
  "Data Structures and Algorithms using Java - Infosys Springboard",
  "Artificial Intelligence Foundation Certification - Infosys Springboard",
  "Agile Scrum in Practice - Infosys Springboard",
  "Design Technology and Innovation - NPTEL",
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50 rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <span className="text-blue-500 text-2xl font-bold mt-1">✓</span>
              <span className="text-gray-700">{cert}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
