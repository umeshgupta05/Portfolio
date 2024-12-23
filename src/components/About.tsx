import { motion } from "framer-motion";
import { GraduationCap, Heart, Coffee } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 relative" id="about">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ee9ca7, #ffdde1)`,
          opacity: 0.05
        }}
      />
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05
        }}
      />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sage to-terra bg-clip-text text-transparent">
            My Journey So Far
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              description:
                "Currently pursuing [Your Degree] with a focus on web development and software engineering.",
              color: "sage"
            },
            {
              icon: Heart,
              title: "Passion",
              description:
                "Deeply passionate about creating intuitive user interfaces and solving complex problems.",
              color: "terra"
            },
            {
              icon: Coffee,
              title: "Learning",
              description:
                "Always eager to learn new technologies and stay updated with the latest industry trends.",
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
              className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <motion.div 
                className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 mx-auto`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className={`w-6 h-6 text-${item.color}`} />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-3 text-center text-${item.color}`}>
                {item.title}
              </h3>
              <p className="text-muted-foreground text-center hover:text-foreground transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};