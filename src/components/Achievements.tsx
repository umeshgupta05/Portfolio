import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";

export const Achievements = () => {
  return (
    <section className="py-20 px-4 relative" id="achievements">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-2xl bg-neutral-light/5 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-300 mx-auto"
        >
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Trophy className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-semibold mb-6 text-accent text-center">Achievements</h3>
          <div className="text-muted-foreground space-y-4">
            <div className="flex items-start gap-3 group hover:bg-accent/5 p-2 rounded-lg transition-colors">
              <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p>Top 2% in NPTEL Programming in Modern C++ and R Software certification exams</p>
            </div>
            <div className="flex items-start gap-3 group hover:bg-accent/5 p-2 rounded-lg transition-colors">
              <Trophy className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p>Led team to top 3 position in SIH Internal Hackathon 2024</p>
            </div>
            <div className="flex items-start gap-3 group hover:bg-accent/5 p-2 rounded-lg transition-colors">
              <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p>Solved 300+ algorithmic problems on LeetCode; participated in 30+ competitive coding contests</p>
            </div>
            <div className="flex items-start gap-3 group hover:bg-accent/5 p-2 rounded-lg transition-colors">
              <Trophy className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p>Winner of two consecutive coding events organized by the ACM chapter of my university, showcasing problem-solving and programming skills</p>
            </div>
            <div className="flex items-start gap-3 group hover:bg-accent/5 p-2 rounded-lg transition-colors">
              <Medal className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p>Awarded Rs 50,000 Merit Scholarship by Reliance Foundation for exceptional academic performance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};