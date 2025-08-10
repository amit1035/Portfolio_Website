import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const achievements = [
  {
    title: "TATA Crucible Campus Quiz 2024",
    description:
      "Participated in India's largest campus business quiz organized by the Tata Group.",
    icon: <FaTrophy />,
    link: "https://drive.google.com/file/d/1RETSq9-Mvp9SrQiar9dLGbwEslaSXdqZ/view?usp=sharing",
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-400",
  },
  {
    title: "AI-ML Virtual Internship",
    description:
      "Completed 6-week internship at Edunet Foundation through IBM SkillsBuild.",
    icon: <FaCertificate />,
    link: "https://drive.google.com/file/d/1ZEZ5Lp3NRre8OLTmxjCwjw2jlCzUwPiC/view?usp=sharing",
    color: "from-green-400 to-green-600",
    iconColor: "text-green-400",
  },
  {
    title: "Cyber Security & Data Science",
    description:
      "Certified by Infosys Springboard in Cyber Security and Introduction to Data Science.",
    icon: <FaCertificate />,
    link: "https://drive.google.com/file/d/1Q-2arYlbegDH1VDw5Q4sKk_qVS_wVpOD/view?usp=sharing",
    color: "from-blue-400 to-blue-600",
    iconColor: "text-blue-400",
  },
  {
    title: "Competitive Programming",
    description:
      "Active participant on HackerRank & CodeChef to improve problem-solving skills.",
    icon: <FaMedal />,
    link: "https://www.hackerrank.com/amitguptak20",
    color: "from-orange-400 to-orange-600",
    iconColor: "text-orange-400",
  },
  {
    title: "BuildWithIndia Participant",
    description:
      "🚀 Participated in BuildWithIndia, celebrating innovation and tech talent across the nation.",
    icon: <FaTrophy />,
    link: "https://drive.google.com/file/d/1DGp8qHAvgy_Co9B8tT23QfFoSkP_RMMM/view?usp=sharing",
    color: "from-pink-400 to-pink-600",
    iconColor: "text-pink-400",
  },
];

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="achievements"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-6 md:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-16"
      >
        Achievements
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-indigo-700 to-indigo-900 opacity-30 rounded-full" />

        {achievements.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative mb-12 flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div className="relative w-full sm:w-1/2 px-4">
                {/* Timeline Dots */}
                <span
                  className={`absolute top-4 ${
                    isLeft ? "-left-3.5" : "-right-3.5"
                  } w-5 h-5 rounded-full bg-indigo-600 ring-4 ring-indigo-300 z-10`}
                ></span>

                {/* Card */}
                <div
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className={`bg-[#1f2937] p-6 rounded-xl border-l-4 border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/30 transition duration-300 cursor-pointer ${
                    isActive ? "ring-2 ring-indigo-400 scale-105" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`text-3xl ${item.iconColor}`}>{item.icon}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="desc"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full shadow-md bg-gradient-to-r ${item.color} text-white hover:scale-105 transition-transform`}
                          >
                            View Certificate <FaExternalLinkAlt size={14} />
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
