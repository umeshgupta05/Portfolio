import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Meteors } from "@/components/magicui/meteors";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden"
    >
      <Meteors number={30} />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-0 -z-10 opacity-40",
        )}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <BlurFade delay={0.1} inView>
            <SparklesText 
              text="Umesh Gupta Pedamallu"
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4"
              colors={{ first: "#9333ea", second: "#ec4899" }}
            />
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <AnimatedGradientText className="text-xl">
              Computer Science Student | Full Stack Developer | AI Enthusiast
            </AnimatedGradientText>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
              Enthusiastic and detail-oriented Computer Science student with a
              strong interest in software development, cloud technologies, and
              problem-solving. Experienced in building full-stack applications,
              developing AI-powered tools, and working with databases.
            </p>
          </BlurFade>
        </div>

        {/* Contact Info */}
        <BlurFade delay={0.4} inView>
          <div className="flex flex-wrap gap-6">
            <span className="text-gray-600">
              Vijayawada, Andhra Pradesh, India
            </span>
          </div>
        </BlurFade>

        {/* Social Links */}
        <BlurFade delay={0.5} inView>
          <div className="flex gap-4 flex-wrap">
            <motion.a
              href="https://github.com/umeshgupta05"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <Github size={20} className="relative z-10" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/umesh-gupta-pedamallu-9504b825a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <Linkedin size={20} className="relative z-10" />
            </motion.a>
            <motion.a
              href="https://portfolio-umeshgupta05s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <ExternalLink size={20} className="relative z-10" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/SaiUmeshGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-4 py-3 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 rounded-lg overflow-hidden transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10">LeetCode</span>
            </motion.a>
          </div>
        </BlurFade>
      </motion.div>
    </section>
  );
};
