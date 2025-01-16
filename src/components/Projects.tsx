import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Rocket, Cpu, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "Attendance Management System",
    description: "A face recognition-based system to automate attendance tracking with real-time detection.",
    image: "/lovable-uploads/7900aada-266f-4c47-9bfc-cc9b56387ae4.png",
    tech: ["Python", "OpenCV", "PyMySQL"],
    links: {
      github: "https://github.com/umeshgupta05/Attendence-Management-System-Using-Face-Recognition",
      live: "#",
    },
  },
  {
    title: "Smart Summarizer",
    description: "A robust application prototype to generate concise summaries for PDF documents using state-of-the-art transformer models.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["Python", "Transformers", "NLP"],
    links: {
      github: "https://github.com/umeshgupta05/Smart-Summarizer",
      live: "#",
    },
  },
  {
    title: "ShopSphere: E-Commerce Platform",
    description: "A dynamic e-commerce website featuring seamless shopping experience with intelligent product recommendations.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    tech: ["React.js", "Node.js", "JavaScript"],
    links: {
      github: "https://github.com/umeshgupta05/ShopSphere",
      live: "#",
    },
  },
  {
    title: "Smart Stick for Visually Impaired Persons",
    description: "An innovative IoT-based smart stick that helps visually impaired individuals navigate safely using ultrasonic sensors and variable vibration intensity based on obstacle distance.",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    tech: ["IoT", "Arduino", "Ultrasonic Sensors"],
    links: {
      github: "https://github.com/umeshgupta05/smart-stick",
      live: "#",
    },
  },
  {
    title: "Credit Card Fraud Detection",
    description: "A machine learning-based project to predict fraudulent credit card transactions with high accuracy using advanced data analysis techniques.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    tech: ["Python", "Scikit-learn", "Pandas"],
    links: {
      github: "https://github.com/umeshgupta05/Credit-Card-Fraud-Detection",
      live: "#",
    },
  },
  {
    title: "Modern Resume Builder",
    description: "A web application to design professional resumes using interactive templates and real-time customization options.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    tech: ["Angular", "CSS"],
    links: {
      github: "https://github.com/umeshgupta05/Modern-Resume-Builder",
      live: "#",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const imageVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut"
    }
  }
};

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-transparent" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-5">
          <Code className="absolute top-1/4 left-1/4 w-16 h-16 text-primary/10 transform -rotate-12" />
          <Rocket className="absolute top-1/3 right-1/4 w-20 h-20 text-secondary/10 transform rotate-12" />
          <Cpu className="absolute bottom-1/4 left-1/3 w-24 h-24 text-accent/10 transform -rotate-6" />
          <ShoppingCart className="absolute bottom-1/3 right-1/3 w-16 h-16 text-primary/10 transform rotate-12" />
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-[2px] border border-border shadow-sm hover:shadow-md transition-all"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="aspect-video overflow-hidden"
              >
                <motion.img
                  variants={imageVariants}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-neutral mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.links.github}
                    className="flex items-center gap-2 text-neutral hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.links.live}
                    className="flex items-center gap-2 text-neutral hover:text-secondary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
