import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <p className="text-blue-600 font-medium">
              Velagapudi Ramakrishna Siddhartha Engineering College
            </p>
            <p className="text-gray-600">2022 – Present</p>
            <p className="text-gray-700 font-medium mt-2">
              CGPA: 9.36/10.0 | Honors in Full Stack Development
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Intermediate (Mathematics, Physics, Chemistry)
            </h3>
            <p className="text-blue-600 font-medium">
              Kakaraparti Bhavanarayana Junior College
            </p>
            <p className="text-gray-600">2020 – 2022</p>
            <p className="text-gray-700 font-medium mt-2">Score: 98.4%</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
