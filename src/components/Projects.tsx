import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const projects = [
  {
    title: "SmartPath AI",
    description:
      "AI-driven learning assistant providing personalized course and certification recommendations using quiz analytics and user intent analysis.",
    details: [
      "Integrated adaptive feedback loops and a real-time chatbot leveraging Gemini API and IBM Watson NLU for continuous personalization and academic support.",
    ],
    tech: ["Flask", "MongoDB", "React", "Gemini API", "IBM Watson NLU"],
    github: "https://github.com/umeshgupta05/SmartPathAI",
  },
  {
    title: "FoodBridge – Food Donation & Distribution",
    description:
      "Web platform bridging food donors with verified NGOs and orphanages, enabling end-to-end donation management and reducing food waste.",
    details: [
      "Engineered secure backend using Django with role-based authentication, NGO verification workflows, and MySQL-based data storage.",
      "Designed intuitive and mobile-responsive UI with Bootstrap for seamless accessibility across devices.",
    ],
    tech: ["Django", "Bootstrap", "MySQL"],
    github: "https://github.com/umeshgupta05/food-donation-management",
  },
  {
    title: "Lumbar Spine Degenerative Disease Classification",
    description:
      "Convolutional neural networks trained on annotated lumbar spine MRI datasets for multi-label classification of degenerative conditions.",
    details: [
      "Achieved 85% accuracy with image preprocessing and augmentation to improve detection performance across intervertebral disc levels.",
    ],
    tech: ["Python", "CNN", "Deep Learning", "TensorFlow"],
    github: "https://github.com/umeshgupta05/Lumbar-Spine-Classification",
  },
  {
    title: "Audio-based Grammar Scoring System",
    description:
      "Automated system to score spoken English grammar (scale 1–5) using .wav inputs with advanced audio feature extraction.",
    details: [
      "Developed modular ML pipeline with LightGBM and MLPRegressor, achieving RMSE of 0.8000 and Pearson correlation of 0.7319.",
    ],
    tech: ["Python", "Wav2Vec2", "LightGBM", "Librosa", "MLP"],
    github: "https://github.com/umeshgupta05/Grammer-Scoring",
  },
  {
    title: "Attendance Management System using Face Recognition",
    description:
      "Desktop-based system automating student attendance using real-time face detection and recognition with Haar Cascade classifiers.",
    details: [
      "Designed Tkinter-based interface integrated with MySQL database via PyMySQL for secure record management and date-wise filtering.",
    ],
    tech: ["Python", "OpenCV", "PyMySQL", "Tkinter"],
    github:
      "https://github.com/umeshgupta05/Attendence-Management-System-Using-Face-Recognition",
  },
  {
    title: "Collaborative Docx",
    description:
      "Real-time document editing platform with multi-user collaboration, seamless synchronization, and low-latency updates.",
    details: [
      "Implemented role-based access control using Supabase to ensure secure and controlled document sharing.",
    ],
    tech: ["React", "Supabase", "WebSockets"],
    github: "https://github.com/umeshgupta05/Collaborative-Docx",
  },
  {
    title: "Library Management System",
    description:
      "Enterprise-grade library management application using MVC architecture with secure authentication and automated lending workflows.",
    details: [
      "Integrated Spring Boot for streamlined configuration with Controller–Service–Repository pattern.",
      "Designed normalized relational schema and responsive JSP UI deployed on Apache Tomcat.",
    ],
    tech: ["Java EE", "Spring Boot", "JSP", "Oracle", "Tomcat"],
    github: "https://github.com/umeshgupta05/Library_Management_System/",
  },
  {
    title: "College Blog Application",
    description:
      "Blogging platform enabling students to register with institutional emails and publish academic posts with image uploads.",
    details: [
      "Implemented secure authentication, structured content management, and file upload functionality.",
    ],
    tech: ["PHP", "MySQL", "HTML/CSS"],
    github: "https://github.com/umeshgupta05/college-blog",
  },
  
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-gray-900">Technical Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative border border-gray-200 rounded-lg p-6 hover:shadow-lg transition overflow-hidden"
            >
              <BorderBeam size={250} duration={12} delay={index * 2} />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
              </div>

              <p className="text-gray-700 mb-3">{project.description}</p>

              {project.details.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 text-sm flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
