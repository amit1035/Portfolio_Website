import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiJira } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava,
  FaGithub, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiFirebase, SiMongodb, SiKotlin, SiAndroid,
} from "react-icons/si";

const allSkills = [
  { name: "HTML5", icon: <FaHtml5 />, category: "Frontend", color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend", color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, category: "Frontend", color: "text-yellow-300" },
  { name: "React.js", icon: <FaReact />, category: "Frontend", color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend", color: "text-teal-300" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", color: "text-green-500" },
  { name: "Firebase", icon: <SiFirebase />, category: "Backend", color: "text-yellow-400" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Backend", color: "text-green-400" },
  { name: "Java", icon: <FaJava />, category: "Mobile", color: "text-red-400" },
  { name: "Kotlin", icon: <SiKotlin />, category: "Mobile", color: "text-purple-500" },
  { name: "Android", icon: <SiAndroid />, category: "Mobile", color: "text-lime-400" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools", color: "text-white" },
  { name: "VS Code", icon: <FaReact />, category: "Tools", color: "text-sky-400" },
  { name: "Postman", icon: <FaJs />, category: "Tools", color: "text-orange-500" },
  { name: "Xcode", icon: <FaApple />, category: "Tools", color: "text-gray-300" },
  { name: "Android Studio", icon: <SiAndroid />, category: "Tools", color: "text-lime-400" },
  { name: "Jira", icon: <SiJira />, category: "Tools", color: "text-blue-400" },
];

const categories = [
  { name: "All", color: "bg-indigo-500" },
  { name: "Frontend", color: "bg-cyan-500" },
  { name: "Backend", color: "bg-green-500" },
  { name: "Mobile", color: "bg-purple-500" },
  { name: "Tools", color: "bg-pink-500" },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#0f0f0f] to-[#1b1b1b] text-white py-20 px-6 md:px-24 text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12"
      >
        Tech Stack & Skills
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.name}
            aria-label={`Filter by ${cat.name}`}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm backdrop-blur-md border border-indigo-500/30 transition-all duration-200
              ${selectedCategory === cat.name
                ? `${cat.color} text-white shadow-md scale-105`
                : "bg-zinc-800 text-zinc-300 hover:bg-indigo-600/60 hover:text-white"}
            `}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] hover:bg-[#262626] backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10 flex flex-col items-center transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className={`text-4xl mb-2 ${skill.color} drop-shadow-md`}>
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
