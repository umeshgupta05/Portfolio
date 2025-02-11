
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Rocket, Cpu, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "Medi Collab",
    description: "A medical knowledge-sharing platform enabling healthcare professionals to collaborate, share research, and engage in clinical discussions.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    tech: ["React.js", "Node.js", "MongoDB", "WebSocket"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "Hackathon Management Dashboard (HackHub)",
    description: "A responsive platform for managing and exploring hackathons, featuring event tracking, real-time notifications, and submission management.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    title: "SmartPath AI",
    description: "An AI-powered personalized learning assistant that recommends courses based on user interests, certifications, and quiz performance.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0",
    tech: ["Python", "Machine Learning", "Flask", "React.js"],
    links: {
      github: "#",
      live: "#",
    },
  },
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
    title: "Smart Stick for Visually Impaired Persons",
    description: "An innovative IoT-based smart stick that helps visually impaired individuals navigate safely using ultrasonic sensors and variable vibration intensity based on obstacle distance.",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    tech: ["IoT", "Arduino", "Ultrasonic Sensors"],
    links: {
      github: "https://github.com/umeshgupta05/smart-stick",
      live: "#",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
    <section className="py-12 px-4 bg-transparent" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-5">
          <Code className="absolute top-1/4 left-1/4 w-12 h-12 text-primary/10 transform -rotate-12" />
          <Rocket className="absolute top-1/3 right-1/4 w-16 h-16 text-secondary/10 transform rotate-12" />
          <Cpu className="absolute bottom-1/4 left-1/3 w-20 h-20 text-accent/10 transform -rotate-6" />
          <ShoppingCart className="absolute bottom-1/3 right-1/3 w-12 h-12 text-primary/10 transform rotate-12" />
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-white/[0.02] backdrop-blur-[2px] border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
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
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1 text-primary line-clamp-1">{project.title}</h3>
                <p className="text-xs text-neutral mb-2 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 text-[10px] bg-secondary/10 text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.links.github}
                    className="flex items-center gap-1 text-xs text-neutral hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3 h-3" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.links.live}
                    className="flex items-center gap-1 text-xs text-neutral hover:text-secondary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
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
