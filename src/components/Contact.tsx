import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-900 text-white rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Feel free to reach out. I'm always open to discussing new projects,
          creative ideas, or opportunities.
        </p>

        <div className="flex justify-center">
          <ShinyButton
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            onClick={() =>
              (window.location.href = "mailto:saiumeshgupta@gmail.com")
            }
          >
            <Mail className="inline-block mr-2" size={16} />
            Get In Touch
          </ShinyButton>
        </div>

        <div className="flex justify-center gap-3 text-gray-400">
          <MapPin size={20} />
          <span>Vijayawada, Andhra Pradesh, India</span>
        </div>
      </motion.div>
    </section>
  );
};
