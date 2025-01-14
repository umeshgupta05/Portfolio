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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {[{
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
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-neutral-light/5 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300 mx-auto"
            >
              <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 text-${item.color} text-center`}>
                {item.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 p-6 rounded-2xl bg-neutral-light/5 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300 mx-auto"
        >
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Coffee className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-accent text-center">Achievements</h3>
          <p className="text-muted-foreground text-center">
            <p> Top 2% in NPTEL Programming in Modern C++ and R Software certification exams</p>
            <p> Led team to top 3 position in SIH Internal Hackathon 2024</p>
            <p> Solved 300+ algorithmic problems on LeetCode; participated in 30+ competitive coding contests</p>
            <p> Winner of two consecutive coding events organized by the ACM chapter of my university, showcasing problem-solving and programming skills</p>
            <p> Awarded Rs 50,000 Merit Scholarship by Reliance Foundation for exceptional academic performance</p>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
