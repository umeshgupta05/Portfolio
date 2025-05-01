
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Medi Collab",
    description: "A medical knowledge-sharing platform enabling healthcare professionals to collaborate, share research, and engage in clinical discussions.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    tech: ["React", "Tailwind CSS"],
    links: {
      github: "https://github.com/umeshgupta05/MediCollab",
      live: "https://medi-collab.vercel.app/",
    },
  },
  {
    title: "Lumbar Spine Degenerative Classification",
    description: "An AI-powered tool for classifying degenerative changes in lumbar spine MRI scans, enhancing diagnostic accuracy and efficiency for radiologists.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tech: ["Python", "TensorFlow", "Deep Learning", "Medical Imaging"],
    links: {
      github: "https://github.com/umeshgupta05/lumbar-classification",
      live: "#",
    },
  },
  {
    title: "ShopSphere",
    description: "An e-commerce application developed as a prototype for the Walmart Sparkathon, featuring seamless shopping experience with modern UI/UX design.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/umeshgupta05/shopsphere",
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
    title: "Attendance Management System using Face Recognition",
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
    title: "Intelligent Assistive Stick for Visually impaired and Elderly",
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
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
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
    <section className="py-16 px-4 bg-transparent relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-primary inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-primary/10"
          >
            Journey
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Projects
          </motion.h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={itemVariants}>
                    <Card className="bg-white/[0.02] backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
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
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2 text-primary line-clamp-1">{project.title}</h3>
                        <p className="text-sm text-neutral mb-3 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs bg-secondary/10 text-secondary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={project.links.github}
                            className="flex items-center gap-1.5 text-sm text-neutral hover:text-primary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={project.links.live}
                            className="flex items-center gap-1.5 text-sm text-neutral hover:text-secondary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(3).map((project, index) => (
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
              <div className="p-4">
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
                    className="flex items-center gap-1.5 text-xs text-neutral hover:text-secondary transition-colors"
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
