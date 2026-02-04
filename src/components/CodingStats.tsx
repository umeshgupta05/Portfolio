"use client";

import { motion } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";
import {
  Code2,
  TrendingUp,
  Zap,
  Award,
  Target,
  Flame,
} from "lucide-react";

const codolioStats = {
  questionsAttempted: 1405,
  problemsSolved: 1125,
  activeContestDays: 85,
  maxStreak: 60,
  currentStreak: 35,
  rating: 1856,
  globalRank: 1180,
  submissions: 1042,
  activeDays: 591,
};

export const CodingStats = () => {
  const stats = codolioStats;

  const statsList = [
    {
      icon: Code2,
      label: "Problems Solved",
      value: stats.problemsSolved,
      color: "from-blue-500 to-cyan-500",
      suffix: "+",
    },
    {
      icon: Award,
      label: "Global Rank",
      value: stats.globalRank,
      color: "from-purple-500 to-pink-500",
      suffix: "",
    },
    {
      icon: TrendingUp,
      label: "Current Rating",
      value: stats.rating,
      color: "from-orange-500 to-red-500",
      suffix: "",
    },
    {
      icon: Zap,
      label: "Max Streak",
      value: stats.maxStreak,
      color: "from-yellow-400 to-orange-500",
      suffix: " days",
    },
    {
      icon: Flame,
      label: "Current Streak",
      value: stats.currentStreak,
      color: "from-red-500 to-pink-500",
      suffix: " days",
    },
    {
      icon: Target,
      label: "Contests Participated",
      value: stats.activeContestDays,
      color: "from-green-500 to-emerald-500",
      suffix: "",
    },
  ];

  return (
    <section id="coding-stats" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Competitive Programming Stats</h2>
          <p className="text-gray-600">Codolio Profile Performance Metrics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsList.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300`}
                />
                <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-4`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">
                        <NumberTicker value={stat.value} />
                      </span>
                      {stat.suffix && (
                        <span className="text-lg text-gray-600">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
          <div className="relative bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Practice Intensity</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2 border-l-4 border-indigo-500 pl-4">
                <p className="text-gray-600 text-sm font-medium">Questions Attempted</p>
                <p className="text-3xl font-bold text-gray-900">
                  <NumberTicker value={stats.questionsAttempted} />+
                </p>
              </div>
              <div className="space-y-2 border-l-4 border-cyan-500 pl-4">
                <p className="text-gray-600 text-sm font-medium">Active Days</p>
                <p className="text-3xl font-bold text-gray-900">
                  <NumberTicker value={stats.activeDays} />
                </p>
              </div>
              <div className="space-y-2 border-l-4 border-blue-500 pl-4">
                <p className="text-gray-600 text-sm font-medium">Total Submissions</p>
                <p className="text-3xl font-bold text-gray-900">
                  <NumberTicker value={stats.submissions} />
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
