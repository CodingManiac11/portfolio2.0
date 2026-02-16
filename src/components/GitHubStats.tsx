import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, GitBranch, Star, Users, Code2, Flame, ExternalLink, Loader2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  language: string;
  html_url: string;
  description: string;
  fork: boolean;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

const GitHubStats: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const username = 'CodingManiac11';

  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [languages, setLanguages] = useState<{ name: string; percentage: number; color: string }[]>([]);
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(true);

  const languageColors: { [key: string]: string } = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    Java: '#B07219',
    'C++': '#00599C',
    C: '#555555',
    HTML: '#E34F26',
    CSS: '#1572B6',
    Jupyter: '#F37626',
    'Jupyter Notebook': '#F37626',
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        ]);

        if (userResponse.ok) {
          const user: GitHubUser = await userResponse.json();
          setUserData(user);
        }

        if (reposResponse.ok) {
          const reposData: GitHubRepo[] = await reposResponse.json();
          const ownRepos = reposData.filter(repo => !repo.fork);
          setRepos(ownRepos);

          const stars = ownRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
          setTotalStars(stars);

          const langStats: { [key: string]: number } = {};
          ownRepos.forEach(repo => {
            if (repo.language) {
              langStats[repo.language] = (langStats[repo.language] || 0) + 1;
            }
          });

          const totalLangRepos = Object.values(langStats).reduce((a, b) => a + b, 0);
          const sortedLanguages = Object.entries(langStats)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 6)
            .map(([name, count]) => ({
              name,
              percentage: Math.round((count / totalLangRepos) * 100),
              color: languageColors[name] || '#8B5CF6',
            }));

          setLanguages(sortedLanguages);
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const stats = [
    { label: 'Repositories', value: userData?.public_repos || 0, icon: GitBranch, color: 'from-cyan-500 to-blue-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (loading) {
    return (
      <section id="github" className={`py-24 px-4 ${isDark ? 'bg-transparent' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className={`w-12 h-12 animate-spin ${isDark ? 'text-green-400' : 'text-green-600'}`} />
          <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Loading GitHub stats...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className={`py-24 px-4 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-transparent via-gray-900/30 to-transparent' : 'bg-gradient-to-b from-transparent via-gray-100/50 to-transparent'}`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${isDark ? 'text-green-400' : 'text-green-600'}`}>
              Coding Activity
            </span>
            <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent mb-4 ${isDark ? 'bg-gradient-to-r from-white via-green-200 to-cyan-400' : 'bg-gradient-to-r from-gray-900 via-green-700 to-cyan-700'}`}>
              GitHub Stats
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Real-time stats from my GitHub profile — @{username}
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`backdrop-blur-xl rounded-2xl p-6 border text-center transition-all duration-300 min-w-[200px] ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10 hover:border-green-500/50' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 hover:border-green-500/50 shadow-lg'}`}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Language Stats */}
            <motion.div
              variants={itemVariants}
              className={`backdrop-blur-xl rounded-3xl p-8 border ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 shadow-xl'}`}
            >
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Code2 className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} size={24} />
                Most Used Languages
              </h3>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {lang.name}
                      </span>
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Language Pie Chart Visual */}
              <div className="mt-8 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                    {languages.map((lang, index) => {
                      const previousPercentage = languages
                        .slice(0, index)
                        .reduce((sum, l) => sum + l.percentage, 0);
                      const circumference = 2 * Math.PI * 45;
                      const strokeDasharray = `${(lang.percentage / 100) * circumference} ${circumference}`;
                      const strokeDashoffset = -(previousPercentage / 100) * circumference;

                      return (
                        <circle
                          key={index}
                          cx="64"
                          cy="64"
                          r="45"
                          fill="transparent"
                          stroke={lang.color}
                          strokeWidth="20"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Contribution Graph Placeholder */}
            <motion.div
              variants={itemVariants}
              className={`backdrop-blur-xl rounded-3xl p-8 border ${isDark ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-white/10' : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200 shadow-xl'}`}
            >
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <GitBranch className={`${isDark ? 'text-green-400' : 'text-green-600'}`} size={24} />
                Recent Repositories
              </h3>

              {/* Recent Repos List */}
              <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
                {repos.slice(0, 6).map((repo, index) => (
                  <motion.a
                    key={index}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className={`block p-3 rounded-xl border transition-all ${isDark ? 'bg-gray-800/50 border-gray-700 hover:border-green-500/50' : 'bg-white border-gray-200 hover:border-green-500 hover:shadow-md'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`font-semibold truncate ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                          {repo.name}
                        </span>
                        <ExternalLink size={12} className={`flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: languageColors[repo.language] || '#8B5CF6' }}
                            />
                            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{repo.language}</span>
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                            <Star size={12} fill="currentColor" />
                            {repo.stargazers_count}
                          </span>
                        )}
                      </div>
                    </div>
                    {repo.description && (
                      <p className={`text-xs mt-1 truncate ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        {repo.description}
                      </p>
                    )}
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-6 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${isDark ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white hover:from-green-500 hover:to-cyan-500' : 'bg-gradient-to-r from-green-600 to-cyan-600 text-white hover:from-green-500 hover:to-cyan-500'}`}
              >
                <Github size={20} />
                View Full Profile
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Achievement Badges */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className={`text-xl font-bold mb-6 text-center flex items-center justify-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Flame className="text-orange-400" size={24} />
              Coding Highlights
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Open Source Contributor', 'Active Developer', 'Code Enthusiast', 'Problem Solver', 'Tech Explorer'].map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`px-4 py-2 rounded-full border font-medium text-sm ${isDark ? 'bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-green-500/30 text-green-400' : 'bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-green-500/30 text-green-600'}`}
                >
                  ✨ {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
