import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-4 bg-transparent" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sage inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-sage/10">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-2 rounded-lg border border-border bg-white/[0.02] backdrop-blur-[2px] focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-2 rounded-lg border border-border bg-white/[0.02] backdrop-blur-[2px] focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-border bg-white/[0.02] backdrop-blur-[2px] focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-sage text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-sage-light transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
