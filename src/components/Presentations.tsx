import { motion } from "framer-motion";
import { Presentation, Calendar, MapPin } from "lucide-react";

const presentations = [
  {
    title:
      "Deep Learning Based Multi-Label Classification of Lumbar Spine Degenerative Diseases Using EfficientNet",
    conference:
      "International Conference on Intelligent Communication Networks and Computational Techniques (ICICNCT-2025)",
    year: "2025",
    type: "Research Paper",
    description:
      "Presented research on applying deep learning techniques for medical image analysis, specifically focusing on multi-label classification of lumbar spine degenerative conditions using EfficientNet architecture.",
    topics: [
      "Deep Learning",
      "Medical Imaging",
      "EfficientNet",
      "Multi-Label Classification",
    ],
  },
  {
    title: "AutoGrader: ML & NLP-Based Handwritten Exam Evaluation System",
    conference:
      "International Conference for Women in Innovation, Technology and Entrepreneurship (ICWITE 2025)",
    year: "2025",
    type: "Research Paper",
    description:
      "Presented an innovative automated grading system that leverages machine learning and natural language processing to evaluate handwritten exam papers, improving efficiency and consistency in assessment.",
    topics: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Educational Technology",
    ],
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

export const Presentations = () => {
  return (
    <section
      className="py-16 px-4 bg-transparent relative overflow-hidden"
      id="presentations"
    >
      <div className="max-w-6xl mx-auto">
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
            Academic Contributions
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Presentations
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {presentations.map((presentation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/[0.02] backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover-scale hover-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Presentation className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                      {presentation.type}
                    </span>
                    <div className="flex items-center gap-1 text-neutral text-xs">
                      <Calendar className="w-3 h-3" />
                      {presentation.year}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-primary mb-2 leading-tight">
                    {presentation.title}
                  </h3>

                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                    <p className="text-neutral text-sm leading-relaxed">
                      {presentation.conference}
                    </p>
                  </div>

                  <p className="text-neutral text-sm mb-4 leading-relaxed">
                    {presentation.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {presentation.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs bg-primary/5 text-primary border border-primary/20 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
