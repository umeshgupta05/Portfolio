import { motion } from "framer-motion";
import { GraduationCap, Heart, Coffee } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 relative" id="about">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #243949 0%, #517fa4 100%)`,
          opacity: 0.02
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-primary/10">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Journey So Far
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              description:
                "B.Tech in Computer Science from Velagapudi Ramakrishna Siddhartha Engineering College with 9.49 CGPA",
              color: "primary"
            },
            {
              icon: Heart,
              title: "Experience",
              description:
                "Math Tutor at Outlier.ai and AI & Cloud Intern at Edunet Foundation, working on AI models and cloud solutions",
              color: "secondary"
            },
            {
              icon: Coffee,
              title: "Achievements",
              description:
                "Top 2% in NPTEL C++, Rs 50,000 Merit Scholarship, 300+ LeetCode problems solved",
              color: "accent"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-neutral-light/5 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 text-${item.color}`}>
                {item.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};