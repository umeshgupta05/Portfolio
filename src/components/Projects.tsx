import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Brain,
  Globe,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

type Project = {
  title: string;
  description: string;
  details: string[];
  tech: string[];
  github: string;
};

const mlProjects: Project[] = [
  {
    title: "Sepsis Prediction Using Multi-Scale Temporal Convolutional Transformer (MSTCT)",
    description:
      "Designed and trained a hybrid Multi-Scale TCN + Transformer architecture on 40,336 ICU patients (1.5M rows) from the PhysioNet Sepsis dataset for early sepsis onset prediction.",
    details: [
      "Engineered missingness indicators, time-since-observed features, and 6-hour rolling statistics to handle sparse clinical time-series data, expanding the feature set from 40 to 94 features.",
      "Implemented a sliding window pipeline (48-hour windows, stride 12) with weighted random sampling and BCEWithLogitsLoss positive-class weighting to address severe class imbalance (5% sepsis prevalence).",
      "Achieved an AUROC of 0.882, demonstrating strong predictive performance.",
    ],
    tech: ["Python", "PyTorch", "Deep Learning", "Time-Series"],
    github: "https://github.com/umeshgupta05/Major-Project",
  },
  {
    title: "SmartPath AI",
    description:
      "AI-driven learning assistant providing personalized course and certification recommendations using quiz analytics and user intent analysis.",
    details: [
      "Integrated adaptive feedback loops and a real-time chatbot leveraging Gemini API and IBM Watson NLU for continuous personalization and academic support.",
    ],
    tech: ["Django", "Oracle", "React", "Gemini API", "IBM Watson NLU"],
    github: "https://github.com/umeshgupta05/SmartPathAI",
  },
  {
    title: "Lumbar Spine Degenerative Disease Classification",
    description:
      "Convolutional neural networks trained on annotated lumbar spine MRI datasets for multi-label classification of degenerative conditions.",
    details: [
      "Achieved 85% accuracy with image preprocessing and augmentation to improve detection performance across intervertebral disc levels.",
    ],
    tech: ["Python", "CNN", "Deep Learning", "TensorFlow"],
    github: "https://github.com/umeshgupta05/Lumbar-Spine-Classification",
  },
  {
    title: "Audio-based Grammar Scoring System",
    description:
      "Automated system to score spoken English grammar (scale 1–5) using .wav inputs with advanced audio feature extraction.",
    details: [
      "Developed modular ML pipeline with LightGBM and MLPRegressor, achieving RMSE of 0.8000 and Pearson correlation of 0.7319.",
    ],
    tech: ["Python", "Wav2Vec2", "LightGBM", "Librosa", "MLP"],
    github: "https://github.com/umeshgupta05/Grammer-Scoring",
  },
  {
    title: "Attendance Management System using Face Recognition",
    description:
      "Desktop-based system automating student attendance using real-time face detection and recognition with Haar Cascade classifiers.",
    details: [
      "Designed Tkinter-based interface integrated with MySQL database via PyMySQL for secure record management and date-wise filtering.",
    ],
    tech: ["Python", "OpenCV", "PyMySQL", "Tkinter"],
    github:
      "https://github.com/umeshgupta05/Attendence-Management-System-Using-Face-Recognition",
  },
];

const webProjects: Project[] = [
  {
    title: "LuxeStay – Hotel Booking Platform",
    description:
      "Production-grade hotel booking platform with Spring Boot RESTful APIs powering search, reservations, payments, and admin operations.",
    details: [
      "Implemented stateless JWT authentication with RBAC and Resilience4j rate limiting (10 req/s), securing all auth endpoints against brute-force attacks.",
      "Built a concurrency-safe reservation system using optimistic/pessimistic locking and a 60-second expiry scheduler, eliminating double-booking under high load.",
      "Optimized performance with Spring Cache and read-only transactions; enforced pagination (50 records) with controlled sorting to reduce DB load.",
      "Integrated Razorpay with server-side signature verification and 3 payment modes within atomic transactions; used async processing (5-thread pool, 100 queue) to maintain p95 latency under 200ms.",
    ],
    tech: ["Spring Boot", "React", "PostgreSQL", "Razorpay"],
    github: "https://github.com/umeshgupta05/Hotel-Booking-System",
  },
  {
    title: "TravelLoop – Full-Stack Travel Planning Platform",
    description:
      "Production-ready travel planning application with 2 independently deployable services (React SPA + Express REST API) managed in a pnpm monorepo with shared TypeScript configuration.",
    details: [
      "Designed a type-safe data layer using Drizzle ORM + PostgreSQL with automatic schema migration and seed scripts, eliminating runtime type errors across 100% of the codebase.",
      "Built a shared API client with auto-generated React Query hooks and TypeScript interfaces from the backend contract, enforcing type safety across service boundaries.",
      "Delivered 6 core modules — multi-stop itinerary builder, curated city guide, activity assignment, smart checklists, rich trip notes, and a community inspiration hub — with RBAC and admin dashboard.",
      "Deployed to Render cloud with managed PostgreSQL and automated DB migration on every deploy.",
    ],
    tech: ["React 19", "Express 5", "PostgreSQL", "TypeScript"],
    github: "https://github.com/umeshgupta05/TravelLoop",
  },
  {
    title: "FoodBridge – Food Donation & Distribution",
    description:
      "Web platform bridging food donors with verified NGOs and orphanages, enabling end-to-end donation management and reducing food waste.",
    details: [
      "Engineered secure backend using Django with role-based authentication, NGO verification workflows, and MySQL-based data storage.",
      "Designed intuitive and mobile-responsive UI with Bootstrap for seamless accessibility across devices.",
    ],
    tech: ["Django", "Bootstrap", "MySQL"],
    github: "https://github.com/umeshgupta05/food-donation-management",
  },
  {
    title: "Collaborative Docx",
    description:
      "Real-time document editing platform with multi-user collaboration, seamless synchronization, and low-latency updates.",
    details: [
      "Implemented role-based access control using Supabase to ensure secure and controlled document sharing.",
    ],
    tech: ["React", "Supabase", "WebSockets"],
    github: "https://github.com/umeshgupta05/Collaborative-Docx",
  },
  {
    title: "Draftory",
    description:
      "Architected a secure MERN-based content publishing platform with JWT authentication, RESTful APIs, server-side validation, and hardened HTTP security headers.",
    details: [
      "Implemented multi-tier rate limiting (5 attempts / 15 minutes) to prevent brute-force attacks and introduced TTL-based in-memory caching, reducing repeated feed retrieval latency by 80%.",
      "Designed efficient paginated content delivery for blog feeds, improving average blog load time by 60%.",
    ],
    tech: ["React", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/umeshgupta05/Draftory",
  },
];

type Category = "all" | "ml" | "web";

const categories: { key: Category; label: string; icon: React.ReactNode; color: string }[] = [
  { key: "all", label: "All Projects", icon: <Sparkles size={15} />, color: "from-amber-500 to-orange-500" },
  { key: "ml", label: "ML & AI", icon: <Brain size={15} />, color: "from-violet-500 to-purple-600" },
  { key: "web", label: "Web Development", icon: <Globe size={15} />, color: "from-sky-500 to-blue-600" },
];

const categoryStyles = {
  ml: {
    badge: "bg-violet-50 text-violet-600 border-violet-200",
    card: "border-gray-200 hover:border-violet-300",
    dot: "bg-violet-500",
    tag: "bg-violet-50 text-violet-600 border-violet-100",
    beam: { from: "#a855f7", to: "#7c3aed" },
    gradient: "from-violet-500 to-purple-600",
    featuredBg: "from-violet-50 via-purple-50/50 to-white",
    featuredBorder: "border-violet-200 hover:border-violet-400",
    featuredGlow: "bg-gradient-to-br from-violet-400/20 to-purple-400/10",
  },
  web: {
    badge: "bg-sky-50 text-sky-600 border-sky-200",
    card: "border-gray-200 hover:border-sky-300",
    dot: "bg-sky-500",
    tag: "bg-sky-50 text-sky-600 border-sky-100",
    beam: { from: "#0ea5e9", to: "#3b82f6" },
    gradient: "from-sky-500 to-blue-600",
    featuredBg: "from-sky-50 via-blue-50/50 to-white",
    featuredBorder: "border-sky-200 hover:border-sky-400",
    featuredGlow: "bg-gradient-to-br from-sky-400/20 to-blue-400/10",
  },
};

function getProjectCategory(project: Project): "ml" | "web" {
  return mlProjects.includes(project) ? "ml" : "web";
}

/* ── Featured Project Card (first project in each category) ── */
const FeaturedProjectCard = ({
  project,
  index,
  category,
  onClick,
}: {
  project: Project;
  index: number;
  category: "ml" | "web";
  onClick: () => void;
}) => {
  const styles = categoryStyles[category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={onClick}
      className={`group relative col-span-1 md:col-span-2 rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer ${styles.featuredBorder}`}
    >
      <BorderBeam
        size={350}
        duration={10}
        delay={0}
        colorFrom={styles.beam.from}
        colorTo={styles.beam.to}
      />

      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${styles.featuredBg} opacity-60`}
      />
      {/* Decorative glow orb */}
      <div
        className={`absolute -top-24 -right-24 w-72 h-72 ${styles.featuredGlow} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
      />

      <div className="relative p-8 md:p-10">
        {/* Top badges row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border ${styles.badge}`}
            >
              {category === "ml" ? (
                <Brain size={12} />
              ) : (
                <Globe size={12} />
              )}
              {category === "ml" ? "ML & AI" : "Web Dev"}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
              Click to collapse
            </span>
          </div>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-900/10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} />
            <span className="hidden sm:inline">View Code</span>
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Title + Tech */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h3>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${styles.tag}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: All points as highlight cards */}
          <div className="md:col-span-3">
            <div className="grid gap-3">
              {[project.description, ...project.details].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex gap-3 p-3.5 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-colors duration-300"
                >
                  <span
                    className={`mt-1 w-2 h-2 rounded-full shrink-0 ${styles.dot}`}
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Standard Project Card ── */
const ProjectCard = ({
  project,
  index,
  category,
  onClick,
}: {
  project: Project;
  index: number;
  category: "ml" | "web";
  onClick: () => void;
}) => {
  const styles = categoryStyles[category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={onClick}
      className={`group relative bg-white rounded-2xl p-6 border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer ${styles.card}`}
    >
      <BorderBeam
        size={250}
        duration={12}
        delay={index * 2}
        colorFrom={styles.beam.from}
        colorTo={styles.beam.to}
      />

      {/* Subtle gradient glow on hover */}
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${styles.gradient} rounded-full opacity-0 group-hover:opacity-[0.06] blur-3xl transition-opacity duration-700`}
      />

      {/* Header row */}
      <div className="flex items-center justify-between mb-4 relative">
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${styles.badge}`}
        >
          {category === "ml" ? <Brain size={12} /> : <Globe size={12} />}
          {category === "ml" ? "ML & AI" : "Web Dev"}
        </span>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="p-2.5 rounded-xl bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shadow-sm"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={18} />
        </motion.a>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 relative">
        {project.title}
      </h3>

      {/* All Points (description + details) */}
      <ul className="space-y-2 mb-5 relative">
        {[project.description, ...project.details].map((point, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-gray-500">
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${styles.dot}`}
            />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100 relative">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border ${styles.tag}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

/* ── Main Projects Section ── */
export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const getFilteredProjects = () => {
    if (activeCategory === "ml") return mlProjects;
    if (activeCategory === "web") return webProjects;
    return [...mlProjects, ...webProjects];
  };

  const filteredProjects = getFilteredProjects();

  const handleCardClick = (title: string) => {
    setExpandedProject((prev) => (prev === title ? null : title));
  };

  // Reset expanded project when switching tabs
  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setExpandedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        {/* ── Header ── */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-sm font-medium"
          >
            <Sparkles size={14} className="text-amber-500" />
            Portfolio
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Technical Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            A curated collection of projects spanning machine learning,
            artificial intelligence, and full-stack web development.
          </p>
        </div>

        {/* ── Premium Tab Switcher ── */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-gray-50/80 border border-gray-200/80 shadow-sm backdrop-blur-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              const count =
                cat.key === "all"
                  ? mlProjects.length + webProjects.length
                  : cat.key === "ml"
                    ? mlProjects.length
                    : webProjects.length;

              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 rounded-xl bg-white shadow-md border border-gray-200/80"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 28,
                      }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? cat.key === "ml"
                            ? "text-violet-500"
                            : cat.key === "web"
                              ? "text-sky-500"
                              : "text-amber-500"
                          : ""
                      }`}
                    >
                      {cat.icon}
                    </span>
                    <span className="hidden sm:inline">{cat.label}</span>
                    <span
                      className={`text-[11px] min-w-[22px] text-center px-1.5 py-0.5 rounded-md font-bold transition-all duration-300 ${
                        isActive
                          ? cat.key === "ml"
                            ? "bg-violet-100 text-violet-600"
                            : cat.key === "web"
                              ? "bg-sky-100 text-sky-600"
                              : "bg-gray-100 text-gray-700"
                          : "bg-gray-100/80 text-gray-400"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Category Legend ── */}
        <div className="flex justify-center gap-8">
          <motion.div
            animate={{
              opacity: activeCategory === "web" ? 0.4 : 1,
            }}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <div className="w-2 h-2 rounded-full bg-violet-500" />
            <span>
              {mlProjects.length} ML & AI Project
              {mlProjects.length !== 1 ? "s" : ""}
            </span>
          </motion.div>
          <motion.div
            animate={{
              opacity: activeCategory === "ml" ? 0.4 : 1,
            }}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <div className="w-2 h-2 rounded-full bg-sky-500" />
            <span>
              {webProjects.length} Web Project
              {webProjects.length !== 1 ? "s" : ""}
            </span>
          </motion.div>
        </div>

        {/* ── Projects Grid ── */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const category = getProjectCategory(project);
              const isExpanded = expandedProject === project.title;

              return isExpanded ? (
                <FeaturedProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  category={category}
                  onClick={() => handleCardClick(project.title)}
                />
              ) : (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  category={category}
                  onClick={() => handleCardClick(project.title)}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};
