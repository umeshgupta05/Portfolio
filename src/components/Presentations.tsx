import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const presentations = [
  {
    title:
      "Deep Learning Based Multi-Label Classification of Lumbar Spine Degenerative Diseases Using EfficientNet",
    conference:
      "International Conference on Intelligent Communication Networks and Computational Techniques (ICICNCT-2025)",
    status: "Published in IEEE",
    doi: "https://doi.org/10.1109/ICICNCT66124.2025.11233218",
  },
  {
    title: "AutoGrader: ML & NLP-Based Handwritten Exam Evaluation System",
    conference:
      "International Conference for Women in Innovation, Technology and Entrepreneurship (ICWITE 2025)",
    status: "Presented",
    doi: "https://doi.org/10.1109/ICWITE64848.2025.11307133",
  },
];

export const Presentations = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Research & Presentations
        </h2>

        <div className="space-y-6">
          {presentations.map((pres, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-purple-500 pl-6"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {pres.title}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {pres.conference}
                  </p>
                  <p className="text-gray-600 text-sm">{pres.status}</p>
                </div>
                {pres.doi && (
                  <motion.a
                    href={pres.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-4 py-2 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    DOI <ExternalLink size={16} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
