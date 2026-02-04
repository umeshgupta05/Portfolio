import { motion } from "framer-motion";

const experiences = [
  {
    title: "Mobile Application Developer",
    company: "DeepMediQ",
    period: "May 2025 – July 2025",
    location: "Remote",
    points: [
      "Developed the frontend of DeepMediQ, a cross-platform mobile application using React Native to interface with a health-focused AI chatbot.",
      "Designed intuitive UI components for smooth user interaction, enabling users to input medical queries and receive detailed, AI-generated responses.",
      "Integrated the mobile interface with a backend chatbot supporting DeepMediQ, an AI-powered health assistant by a US-based startup.",
    ],
  },
  {
    title: "Python Full Stack Development Intern",
    company: "Eduskills Foundation",
    period: "March 2025 – May 2025",
    location: "Remote",
    points: [
      "Trained in Python, Django, REST API development, database integration, and responsive frontend design.",
      "Developed mini-projects using Django MVT architecture, implementing authentication, CRUD operations, and structured backend logic.",
      "Gained hands-on experience with Git, virtual environments, JSON-based APIs, and deployment-ready project structuring.",
    ],
  },
  {
    title: "AI Virtual Intern",
    company: "TechSaksham (A joint initiative by Microsoft and SAP)",
    period: "November 2024 – December 2024",
    location: "Remote",
    points: [
      "Designed and developed an Attendance Management System using Face Recognition with Python.",
      "Implemented Haar Cascade classifier and image processing using OpenCV and Pillow for accurate facial detection.",
      "Integrated attendance recording with a backend database using PyMySQL for efficient data management.",
    ],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-blue-500 pl-6 pb-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-blue-600 font-medium text-lg">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">
                {exp.period} • {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-700 flex gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
