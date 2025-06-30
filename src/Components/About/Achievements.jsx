import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const achievements = [
  {
    title: "TATA Crucible Campus Quiz 2024",
    description:
      "Participated in India's largest campus business quiz organized by the Tata Group.",
    icon: <FaTrophy className="text-yellow-400 text-3xl" title="Quiz Achievement" />,
    link: "https://drive.google.com/file/d/1RETSq9-Mvp9SrQiar9dLGbwEslaSXdqZ/view?usp=sharing", 
  },
  {
    title: "AI-ML Virtual Internship",
    description:
      "Completed 6-week internship at Edunet Foundation through IBM SkillsBuild.",
    icon: <FaCertificate className="text-green-400 text-3xl" title="Internship Certificate" />,
    link: "https://drive.google.com/file/d/1ZEZ5Lp3NRre8OLTmxjCwjw2jlCzUwPiC/view?usp=sharing", 
  },
  {
    title: "Cyber Security & Data Science",
    description:
      "Certified by Infosys Springboard in Cyber Security and Introduction to Data Science.",
    icon: <FaCertificate className="text-blue-400 text-3xl" title="Infosys Certificates" />,
    link: "https://drive.google.com/file/d/1Q-2arYlbegDH1VDw5Q4sKk_qVS_wVpOD/view?usp=sharing",
  },
  {
    title: "Competitive Programming",
    description:
      "Active participant on HackerRank & CodeChef to improve problem-solving skills.",
    icon: <FaMedal className="text-orange-400 text-3xl" title="Coding Practice" />,
    link: "https://www.hackerrank.com/amitguptak20",
  },
  {
    title: "BuildWithIndia Participant",
    description:
      "🚀 Participated in BuildWithIndia, celebrating innovation and tech talent across the nation.",
    icon: <FaTrophy className="text-yellow-400 text-3xl" />,
    link: "https://drive.google.com/file/d/1DGp8qHAvgy_Co9B8tT23QfFoSkP_RMMM/view?usp=sharing",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-6 md:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-12"
      >
        Achievements
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.15}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.02}
              className="group relative bg-[#1e293b] hover:bg-[#2a364b] p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-indigo-500/30 overflow-hidden"
            >
              {/* Animated Border Glow on Hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 pointer-events-none" />

              <div className="flex gap-4 items-start relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-1 group-hover:scale-110 transition-all duration-300"
                >
                  {item.icon}
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    whileHover={{ scale: 1.1, color: "#6366F1" }}
                    className="text-lg font-semibold mb-1 text-white transition-all duration-300"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 text-sm mb-4 group-hover:text-gray-100 transition-all duration-300"
                  >
                    {item.description}
                  </motion.p>
                  {item.link && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full text-white transition-all duration-200 hover:scale-105 transform group-hover:scale-110"
                    >
                      View Certificate <FaExternalLinkAlt size={14} />
                    </motion.a>
                  )}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
