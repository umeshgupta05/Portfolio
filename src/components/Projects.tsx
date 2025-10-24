import { motion } from "framer-motion";
import { Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Collaborative DocX Editor",
    description:
      "Built a real-time collaborative document editor where multiple users can create, edit, and share documents simultaneously. Integrated Supabase for authentication and database management, ensuring version control, secure access, and seamless collaboration.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    tech: ["React.js", "Supabase", "Node.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/umeshgupta05/Collaborative-Docx",
    },
  },

  {
    title: "SmartPath AI - Adaptive Learning Platform",
    description:
      "Developed an AI-driven learning platform that provides personalized course recommendations, adaptive learning paths, chatbot assistance, and real-time performance tracking. Integrated IBM Watson, Gemini, and BERT models with Flask backend and MongoDB for dynamic data handling.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tech: ["Flask", "MongoDB", "IBM Watson", "Gemini", "BERT", "React.js"],
    links: {
      github: "https://github.com/umeshgupta05/SmartPathAI",
    },
  },
  {
    title: "College Blog Application",
    description:
      "Developed a blogging platform enabling students to register with institutional emails and publish academic posts with images. Implemented secure authentication, structured content management, and file upload functionality.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["PHP", "MySQL", "HTML/CSS"],
    links: {
      github: "https://github.com/umeshgupta05/college-blog",
    },
  },
  {
    title: "Food Donation Management System",
    description:
      "Built a web platform connecting food donors with NGOs/orphanages, enabling real-time donation tracking and reducing food waste. Implemented role-based authentication, NGO verification workflows, and integrated PostgreSQL for secure data management.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    tech: ["Django", "Bootstrap", "PostgreSQL"],
    links: {
      github: "https://github.com/umeshgupta05/food-donation-management",
    },
  },
  {
    title: "Lumbar Spine Degenerative Disease Classification",
    description:
      "Building an AI system to classify lumbar spine degenerative conditions using MRI image datasets. Focused on five conditions including neural foraminal narrowing, subarticular stenosis, and spinal canal stenosis.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tech: ["Python", "CNN", "Medical Imaging", "Deep Learning"],
    links: {
      github: "https://github.com/umeshgupta05/Lumbar-Spine-Classification",
    },
  },
  {
    title: "Audio-based Grammar Scoring System",
    description:
      "Developed an automated system to score spoken English grammar on a scale of 1-5 using .wav audio inputs, modeled as a regression task. Extracted diverse audio features including MFCCs, chroma, zero-crossing rate, spectral centroid, and deep speech embeddings from pretrained Wav2Vec2 models.",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0",
    tech: ["Python", "Wav2Vec2", "LightGBM", "MLP", "Librosa"],
    links: {
      github: "https://github.com/umeshgupta05/Grammer-Scoring",
    },
  },
  {
    title: "Attendance Management System using Face Recognition",
    description:
      "Developed a desktop-based attendance management system leveraging face recognition to automate student attendance. Utilized Haar Cascade classifiers with OpenCV for real-time face detection and recognition from webcam feeds.",
    image: "/project-images/attendance-system.png",
    tech: ["Python", "OpenCV", "PyMySQL", "Tkinter"],
    links: {
      github:
        "https://github.com/umeshgupta05/Attendence-Management-System-Using-Face-Recognition",
    },
  },
  {
    title: "TaskTime Alert",
    description:
      "Developed a smart alarm app that allows users to assign tasks to specific dates and times, triggering notifications as deadlines approach. Utilized AlarmManager with BroadcastReceiver to schedule precise, battery-efficient task reminders—even during idle modes.",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    tech: ["Android", "Kotlin", "AlarmManager", "BroadcastReceiver"],
    links: {
      github: "#",
    },
  },
  {
    title: "Intelligent Assistive Stick for Visually impaired and Elderly",
    description:
      "An innovative IoT-based smart stick that helps visually impaired individuals navigate safely using ultrasonic sensors and variable vibration intensity based on obstacle distance.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    tech: ["IoT", "Arduino", "Ultrasonic Sensors"],
    links: {
      github: "https://github.com/umeshgupta05/Smart-Stick-for-Visual-Impaired",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const imageVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const Projects = () => {
  return (
    <section
      className="py-16 px-4 bg-transparent relative overflow-hidden"
      id="projects"
    >
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
                <CarouselItem
                  key={project.title}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div variants={itemVariants}>
                    <Card className="bg-white/[0.02] backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale hover-glow">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2 text-primary line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral mb-3 line-clamp-2">
                          {project.description}
                        </p>
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
      </div>
    </section>
  );
};
