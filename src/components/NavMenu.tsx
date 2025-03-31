
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Cpu, 
  FolderKanban, 
  Trophy, 
  AtSign,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  sectionId: string;
}

export const NavMenu = ({ onSectionChange }: { onSectionChange: (sectionId: string) => void }) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { icon: <GraduationCap className="w-5 h-5" />, label: "Education", sectionId: "experience" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Experience", sectionId: "experience" },
    { icon: <Award className="w-5 h-5" />, label: "Certifications", sectionId: "certifications" },
    { icon: <Cpu className="w-5 h-5" />, label: "Skills", sectionId: "skills" },
    { icon: <FolderKanban className="w-5 h-5" />, label: "Projects", sectionId: "projects" },
    { icon: <Trophy className="w-5 h-5" />, label: "Achievements", sectionId: "achievements" },
    { icon: <AtSign className="w-5 h-5" />, label: "Contact", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Set hero as default active section
    onSectionChange("hero");
  }, [onSectionChange]);

  return (
    <>
      {/* Mobile hamburger button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-primary/10 backdrop-blur-sm p-2 rounded-full text-primary border border-primary/20"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed top-0 right-0 h-screen w-64 z-40 bg-black/80 backdrop-blur-lg md:hidden"
      >
        <div className="flex flex-col gap-4 p-8 mt-16">
          {navItems.map((item, index) => (
            <motion.button
              key={item.sectionId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => scrollToSection(item.sectionId)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all",
                activeSection === item.sectionId
                  ? "bg-primary text-white"
                  : "bg-white/5 text-white/80 hover:bg-white/10"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Desktop menu */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
      >
        <div className="bg-black/30 backdrop-blur-md rounded-full px-5 py-3 border border-white/10 shadow-xl">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.sectionId}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.sectionId)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium",
                  activeSection === item.sectionId
                    ? "bg-primary text-white"
                    : "text-white/80 hover:bg-white/10"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
