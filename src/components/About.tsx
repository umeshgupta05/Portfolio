import { motion } from "framer-motion";
import { GraduationCap, Heart, Coffee } from "lucide-react";

export const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-terra inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-terra/10 hover:bg-terra/20 transition-colors">
            About Me
          </span>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sage to-terra bg-clip-text text-transparent"
          >
            My Journey So Far
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              description:
                "B.Tech in Computer Science from Velagapudi Ramakrishna Siddhartha Engineering College with 9.49 CGPA",
              color: "sage"
            },
            {
              icon: Heart,
              title: "Experience",
              description:
                "Math Tutor at Outlier.ai and AI & Cloud Intern at Edunet Foundation, working on AI models and cloud solutions",
              color: "terra"
            },
            {
              icon: Coffee,
              title: "Achievements",
              description:
                "Top 2% in NPTEL C++, Rs 50,000 Merit Scholarship, 300+ LeetCode problems solved",
              color: "sage"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <motion.div 
                className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 mx-auto`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </motion.div>
              <motion.h3 
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`text-xl font-semibold mb-3 text-center text-${item.color}`}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-muted-foreground text-center hover:text-foreground transition-colors"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};