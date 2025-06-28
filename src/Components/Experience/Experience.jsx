import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiAndroid,
  SiKotlin,
} from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { icon: <FaHtml5 color="#E34F26" size={40} />, name: "HTML5" },
  { icon: <FaCss3 color="#1572B6" size={40} />, name: "CSS3" },
  { icon: <FaJs color="#F7DF1E" size={40} />, name: "JavaScript" },
  { icon: <FaReact color="#61DAFB" size={40} />, name: "React.js" },
  { icon: <SiTailwindcss color="#38B2AC" size={40} />, name: "Tailwind" },
  { icon: <SiMongodb color="#47A248" size={40} />, name: "MongoDB" },
  { icon: <SiFirebase color="#FFCA28" size={40} />, name: "Firebase" },
  { icon: <SiAndroid color="#3DDC84" size={40} />, name: "Android" },
  { icon: <SiKotlin color="#7F52FF" size={40} />, name: "Kotlin" },
];

const experiences = [
  {
    name: "VAS Ventures Pvt. Ltd.",
    icon: <SiAndroid size={60} className="text-green-400" />,
    title: "Android Developer Intern",
    duration: "Sep 2024 – Present",
    details: [
      " Developed Android apps using Kotlin & XML",
      " Integrated REST APIs to fetch dynamic user data",
      " Built clean and responsive UI using Android Studio",
      " Optimized app lifecycle handling for performance",
    ],
  },
  {
    name: "Edunet Foundation (AI-ML Internship)",
    icon: <FaReact size={60} className="text-sky-400" />,
    title: "AI/ML Intern",
    duration: "Feb 2024 – Apr 2024",
    details: [
      " Worked on restaurant sentiment analysis dataset",
      " Implemented ML models using Python libraries",
      " Built React UI dashboard for ML report display",
      " Learned collaboration and Git version control",
    ],
  },
  {
    name: "Freelance Projects",
    icon: <FaGithub size={60} className="text-white" />,
    title: "Full Stack Developer",
    duration: "2023 – Present",
    details: [
      " Built SwiftCard e-commerce site with cart & auth",
      " Developed React apps (URL shortener, currency converter)",
      " Used Firebase for login & real-time storage",
      " Designed responsive UI with Tailwind & Figma",
    ],
  },
  {
    name: "Freelance Projects",
    icon: <FaGithub size={60} className="text-white" />,
    title: "Full Stack Developer",
    duration: "2023 – Present",
    details: [
      " Built SwiftCard e-commerce site with cart & auth",
      " Developed React apps (URL shortener, currency converter)",
      " Used Firebase for login & real-time storage",
      " Designed responsive UI with Tailwind & Figma",
    ],
  },
  {
    name: "Freelance Projects",
    icon: <FaGithub size={60} className="text-white" />,
    title: "Full Stack Developer",
    duration: "2023 – Present",
    details: [
      " Built SwiftCard e-commerce site with cart & auth",
      " Developed React apps (URL shortener, currency converter)",
      " Used Firebase for login & real-time storage",
      " Designed responsive UI with Tailwind & Figma",
    ],
  },
];

// Variants for list items fade in
const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Experience = () => {
  return (
    <section
      id="Experience"
      className="p-10 md:p-24 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <h1 className="text-4xl font-bold text-white mb-16 text-center tracking-wide">
        My Experience
      </h1>

      {/* Tech stack icons with tooltips */}
      <motion.div
        className="flex flex-wrap gap-6 justify-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            className="relative p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 flex flex-col items-center shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            {tech.icon}
            <span className="text-white text-sm mt-2">{tech.name}</span>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none">
              {tech.name}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Experience cards */}
      <div className="grid gap-10 md:grid-cols-3">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-950 hover:bg-zinc-900 rounded-xl p-6 transition-all duration-300 shadow-xl hover:shadow-2xl border border-zinc-700 hover:border-indigo-400 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {exp.icon}
              <div>
                <h2 className="text-white text-lg font-semibold">{exp.title}</h2>
                <p className="text-gray-300 text-sm">{exp.name}</p>
                <p className="text-gray-500 text-xs">{exp.duration}</p>
              </div>
            </div>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white text-sm list-disc list-inside space-y-1"
            >
              {exp.details.map((point, i) => (
                <motion.li key={i} custom={i} variants={listItemVariants}>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
