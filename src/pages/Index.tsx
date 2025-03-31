
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Achievements } from "@/components/Achievements";
import { NavMenu } from "@/components/NavMenu";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative w-full"
    >
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/b8468dcc-701f-4bd5-8695-e17a7bdc9cf6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15
        }}
      />
      <NavMenu />
      <div className="relative z-10 bg-white/10 backdrop-blur-[2px]">
        <Hero />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
