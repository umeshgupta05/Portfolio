import { motion } from "framer-motion";

const achievements = [
  "Reliance Foundation Scholarship (2022–2026) and LIC Golden Jubilee Foundation Scholarship (2022–2026) in recognition of academic excellence",
  "Led team to top 3 position in SIH Internal Hackathon 2024",
  "Winner of two consecutive coding events organized by the ACM chapter, VRSEC",
  "Secured Rank 567 out of 1,94,752 candidates in AP EAPCET 2022 (Top 0.3% statewide)",
  "Achieved 96.79% in Joint Entrance Examination (IIT-JEE 2022) with 10 medals for academic excellence during intermediate studies",
];

const responsibilities = [
  {
    title: "NSS Volunteer – VRSEC",
    desc: "Participated in community outreach initiatives and environmental awareness drives under National Service Scheme, mentored Cyber Security Awareness Program in government school",
  },
  {
    title: "AI Hackathon Volunteer – VRSEC",
    desc: "Organized and managed AI-focused hackathon with 1000+ participants, ensuring smooth logistics and participant support",
  },
  {
    title: "GSSoC Contributor – GirlScript Summer of Code 2025",
    desc: "Selected as open-source contributor exploring repositories and preparing to make impactful contributions",
  },
];

const workshops = [
  {
    title: "Design Thinking: Creative Problem Solving and Ideation",
    organization: "VRSEC",
    date: "March 2024",
    description:
      "One-week workshop gaining hands-on experience in structured problem-solving, innovative thinking, and ideation techniques for real-world applications.",
  },
  {
    title: "Finishing School for Employability – Phase 2",
    organization: "VRSEC with Infosys Foundation and ICT Academy",
    date: "September 2025",
    description:
      "Two-week AI certification program organized by Infosys Foundation in collaboration with ICT Academy, acquiring foundational knowledge in AI, practical experience with Azure AI services, and exposure to applications in generative AI.",
  },
];

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
              >
                <span className="text-yellow-600 text-2xl font-bold">★</span>
                <p className="text-gray-700">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Positions of Responsibility
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((resp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {resp.title}
                </h4>
                <p className="text-gray-600">{resp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Workshops & Training
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-blue-200 rounded-lg p-6 bg-blue-50 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                  {workshop.title}
                </h4>
                <p className="text-blue-600 font-medium text-sm mb-1">
                  {workshop.organization}
                </p>
                <p className="text-gray-500 text-sm mb-3">{workshop.date}</p>
                <p className="text-gray-700">{workshop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
