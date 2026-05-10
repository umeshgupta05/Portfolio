import { motion } from "framer-motion";

const experiences = [
  {
    title: "Java Full Stack Virtual Intern",
    company: "Infosys Springboard",
    period: "February 2026 – Present",
    location: "Remote",
    points: [
      "Training in Java Full Stack development with hands-on practice in Core Java, Spring Boot, RESTful APIs, and backend application architecture.",
      "Developing full-stack applications with frontend–backend integration, database connectivity, and industry-standard coding practices.",
    ],
  },
  {
    title: "Web Developer & Cloud Integration Intern",
    company: "SkillDzire Technologies Pvt. Ltd",
    period: "November 2025 – March 2026",
    location: "Remote",
    points: [
      "Developed and deployed 3 full-stack applications, improving performance and responsiveness by 25%.",
      "Integrated cloud services (AWS/Cloud) for hosting, storage, and deployment, reducing manual effort by 40%.",
      "Designed 10 RESTful APIs with authentication and database integration, reducing data retrieval time by 30%.",
      "Improved scalability using modular architecture and clean code, reducing bug resolution time by 20%.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company: "DeepMediQ",
    period: "May 2025 – July 2025",
    location: "Remote",
    points: [
      "Engineered a cross-platform mobile application using React Native with Expo by migrating a React-based web chatbot, enabling seamless AI-driven healthcare interactions for 500+ users during testing.",
      "Designed and implemented responsive, user-centric UI components, improving user engagement.",
      "Integrated frontend with backend REST APIs, enabling real-time AI responses with an average latency of <2 seconds.",
      "Optimized app performance using efficient state management and API handling, reducing app load time by 30%.",
      "Collaborated in debugging and feature enhancements, improving app stability and reducing crash occurrences by 20%.",
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
    company: "TechSaksham",
    period: "November 2024 – December 2024",
    location: "Remote",
    points: [
      "Designed and developed an Attendance Management System using Face Recognition with Python.",
      "Implemented Haar Cascade classifier and image processing using OpenCV and Pillow for accurate facial detection.",
      "Integrated attendance recording with a backend database using PyMySQL for efficient data management.",
    ],
  },
  {
    title: "Amazon AWS Virtual Intern",
    company: "Eduskills Foundation",
    period: "April 2024 – June 2024",
    location: "Remote",
    points: [
      "Worked with key AWS services including EC2, S3, IAM, VPC, and CloudWatch for deployment and monitoring.",
      "Deployed a static website by configuring EC2 instances, security groups, and S3 storage, ensuring secure access and high availability.",
      "Learned cloud security basics, cost optimization techniques, and resource monitoring using CloudWatch dashboards.",
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
