"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, GitBranch, Star, Users } from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";

interface GitHubData {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  public_repos: number;
  totalCommits?: number;
  pullRequests?: number;
  issues?: number;
}

interface LanguageData {
  name: string;
  value: number;
  percentage: string;
}

interface ContributionDay {
  date: string;
  count: number;
}

const COLORS = [
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#06b6d4",
  "#6366f1",
  "#14b8a6",
];

export const GitHubContributions = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [recentContributions, setRecentContributions] = useState<
    { type: string; count: number; date: string }[]
  >([]);
  const [contributionStreak, setContributionStreak] = useState({
    current: 0,
    longest: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user profile data
        const response = await fetch(
          "https://api.github.com/users/umeshgupta05",
        );
        const data = await response.json();

        // Fetch repos and calculate stars + languages
        const reposResponse = await fetch(
          "https://api.github.com/users/umeshgupta05/repos?per_page=100",
        );
        const repos = await reposResponse.json();
        const totalStars = repos.reduce(
          (sum: number, repo: { stargazers_count: number }) =>
            sum + repo.stargazers_count,
          0,
        );

        setGithubData({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          stars: totalStars,
          public_repos: data.public_repos,
        });

        // Fetch language data from all repos
        const languageMap: { [key: string]: number } = {};

        for (const repo of repos) {
          if (repo.language) {
            languageMap[repo.language] = (languageMap[repo.language] || 0) + 1;
          }
        }

        // Convert to array and calculate percentages
        const totalRepos = Object.values(languageMap).reduce(
          (a, b) => a + b,
          0,
        );
        const langData = Object.entries(languageMap)
          .map(([name, count]) => ({
            name,
            value: count,
            percentage: ((count / totalRepos) * 100).toFixed(1),
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 8); // Top 8 languages

        setLanguages(langData);

        // Fetch recent events for contribution activity
        const eventsResponse = await fetch(
          "https://api.github.com/users/umeshgupta05/events/public?per_page=100",
        );
        const events = await eventsResponse.json();

        // Count recent contributions by type
        const contributionMap: { [key: string]: number } = {};
        const dateMap: { [key: string]: number } = {};

        events.forEach((event: { type: string; created_at: string }) => {
          const type = event.type;
          contributionMap[type] = (contributionMap[type] || 0) + 1;

          const date = new Date(event.created_at).toLocaleDateString();
          dateMap[date] = (dateMap[date] || 0) + 1;
        });

        // Get contribution streak
        const sortedDates = Object.keys(dateMap).sort(
          (a, b) => new Date(b).getTime() - new Date(a).getTime(),
        );
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 1;

        for (let i = 0; i < sortedDates.length - 1; i++) {
          const current = new Date(sortedDates[i]);
          const next = new Date(sortedDates[i + 1]);
          const dayDiff =
            (current.getTime() - next.getTime()) / (1000 * 60 * 60 * 24);

          if (dayDiff === 1) {
            tempStreak++;
          } else {
            longestStreak = Math.max(longestStreak, tempStreak);
            tempStreak = 1;
          }
        }
        currentStreak = tempStreak;
        longestStreak = Math.max(longestStreak, tempStreak);

        setContributionStreak({
          current: currentStreak,
          longest: longestStreak,
        });

        // Get recent contributions summary
        const recentContributions = Object.entries(contributionMap)
          .map(([type, count]) => ({
            type: type.replace("Event", ""),
            count,
            date: new Date().toLocaleDateString(),
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        setRecentContributions(recentContributions);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const stats = [
    {
      icon: GitBranch,
      label: "Public Repositories",
      value: githubData?.repos || 0,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      label: "Total Stars",
      value: githubData?.stars || 0,
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      label: "Followers",
      value: githubData?.followers || 0,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      label: "Following",
      value: githubData?.following || 0,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="github"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            GitHub Activity
          </h2>
          <p className="text-gray-600">
            Open source contributions and projects
          </p>
        </div>

        {/* Main GitHub Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
          <div className="relative bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                <Github size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  umeshgupta05
                </h3>
                <p className="text-gray-600">
                  <a
                    href="https://github.com/umeshgupta05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    github.com/umeshgupta05 ↗
                  </a>
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-12">
              Full Stack Developer & AI Enthusiast. Building innovative projects
              with Python, React, and Machine Learning.
            </p>

            {/* Detailed Stats Grid */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                GitHub Statistics
              </h4>
              <div className="grid md:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}
                        >
                          <IconComponent size={20} className="text-gray-700" />
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs font-medium mb-2">
                        {stat.label}
                      </p>
                      <div className="text-3xl font-bold text-gray-900">
                        {loading ? "..." : <NumberTicker value={stat.value} />}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid md:grid-cols-3 gap-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-gray-600 text-sm mb-2">Public Repos</p>
                <p className="text-4xl font-bold text-blue-600">
                  {githubData?.public_repos || 0}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <p className="text-gray-600 text-sm mb-2">Total Stars</p>
                <p className="text-4xl font-bold text-yellow-600">
                  {githubData?.stars || 0}⭐
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <p className="text-gray-600 text-sm mb-2">Community</p>
                <p className="text-4xl font-bold text-purple-600">
                  {githubData?.followers || 0}👥
                </p>
              </motion.div>
            </div>
            <p className="text-gray-700 text-center mt-6">
              <a
                href="https://github.com/umeshgupta05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition underline"
              >
                View full profile on GitHub →
              </a>
            </p>
          </div>
        </motion.div>

        {/* Contribution Streak & Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Contribution Streak */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contribution Streak
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Current Streak</p>
                  <p className="text-4xl font-bold text-orange-600">
                    {contributionStreak.current}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">days</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Longest Streak</p>
                  <p className="text-4xl font-bold text-red-600">
                    {contributionStreak.longest}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">days</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Contributions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Recent Activity
              </h3>
              <div className="space-y-3">
                {recentContributions.map((contrib, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-700 font-medium">
                      {contrib.type}
                    </span>
                    <span className="text-lg font-bold text-purple-600">
                      {contrib.count}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Languages Used */}
        {languages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Languages Used
              </h3>

              {/* Language List */}
              <div className="pt-0 border-t-0">
                <div className="grid md:grid-cols-2 gap-4">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                        <span className="font-medium text-gray-900">
                          {lang.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {lang.percentage}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
