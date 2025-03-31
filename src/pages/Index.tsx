
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Achievements } from "@/components/Achievements";
import { NavMenu } from "@/components/NavMenu";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <Hero />;
      case "experience":
        return <Experience />;
      case "certifications":
        return <Certifications />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "achievements":
        return <Achievements />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

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
      <NavMenu onSectionChange={handleSectionChange} />
      <div className="relative z-10 bg-white/10 backdrop-blur-[2px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
