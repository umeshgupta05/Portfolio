import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { CodingStats } from "@/components/CodingStats";
import { GitHubContributions } from "@/components/GitHubContributions";
import { Certifications } from "@/components/Certifications";
import { Presentations } from "@/components/Presentations";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CodingStats />
      <GitHubContributions />
      <Presentations />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
