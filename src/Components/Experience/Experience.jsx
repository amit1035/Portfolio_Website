import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaTrophy,
  FaCertificate,
} from "react-icons/fa";
import { SiAndroid } from "react-icons/si";

// Tech stack colors
const stackColors = {
  Kotlin: "bg-[#7F52FF]",
  "Android Studio": "bg-[#3DDC84]",
  "Jetpack": "bg-[#1F1F1F]",
  React: "bg-[#61DAFB]",
  "Scikit-learn": "bg-[#F7931E]",
  Python: "bg-[#3776AB]",
  Firebase: "bg-[#FFCA28]",
  Tailwind: "bg-[#38BDF8]",
  Figma: "bg-[#F24E1E]",
  "Cyber Security": "bg-[#7F7F7F]",
  "Data Science": "bg-[#7FBB60]",
  HTML: "bg-[#E34F26]",
  CSS: "bg-[#264DE4]",
  JS: "bg-[#F7DF1E]",
};

const experiences = [
  {
    name: "VAS Ventures Pvt. Ltd.",
    icon: <SiAndroid className="text-green-400" />,
    title: "Android Developer Intern",
    duration: "Sep 2024 – Present",
    details: [
      "Developed Android apps using Kotlin and XML layouts",
      "Integrated RESTful APIs for dynamic data",
      "Handled JSON parsing and runtime permissions",
      "Used Jetpack for navigation and UI management",
    ],
    stack: ["Kotlin", "Android Studio", "Jetpack", "REST API"],
  },
  {
    name: "Edunet Foundation (IBM SkillsBuild)",
    icon: <FaReact className="text-sky-400" />,
    title: "AI/ML Virtual Intern",
    duration: "Jul 2024 – Aug 2024",
    details: [
      "Built sentiment analysis model using Python",
      "Used Scikit-learn, Pandas, and Matplotlib",
      "Created dashboard using React",
      "Earned IBM certificate on completion",
    ],
    stack: ["Python", "Scikit-learn", "React", "Pandas"],
  },
  {
    name: "Freelance Developer",
    icon: <FaGithub className="text-white" />,
    title: "Full Stack Developer",
    duration: "2023 – Present",
    details: [
      "Built SwiftCard e-commerce app with Firebase auth",
      "Developed apps like Currency Converter, URL Shortener",
      "Used Tailwind, React Router, and Figma for design",
    ],
    stack: ["React", "Firebase", "Tailwind", "Figma"],
  },
  {
    name: "BuildWithIndia Challenge",
    icon: <FaTrophy className="text-yellow-400" />,
    title: "Participant",
    duration: "2024",
    details: [
      "Participated in national innovation challenge",
      "Developed scalable solution for social impact",
      "Earned certificate of participation",
    ],
    stack: ["HTML", "CSS", "JS"],
  },
  {
    name: "Infosys Springboard",
    icon: <FaCertificate className="text-indigo-400" />,
    title: "Cyber Security & Data Science",
    duration: "2024",
    details: [
      "Completed foundational cybersecurity & data science",
      "Worked on encryption, firewalls, ML concepts",
      "Earned certificates via assessments & projects",
    ],
    stack: ["Cyber Security", "Data Science", "Springboard"],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-6 md:px-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-16">
        My Experience
      </h2>

      <div className="relative border-l-4 border-indigo-500 pl-6 space-y-14 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => {
          const isOpen = activeIndex === idx;

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[33px] top-3 w-9 h-9 rounded-full bg-[#1e293b] border-4 border-indigo-500 flex items-center justify-center shadow-md">
                {exp.icon}
              </div>

              {/* Card */}
              <div
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className={`bg-white/10 backdrop-blur-md rounded-xl px-6 py-5 border border-indigo-700 transition duration-300 hover:shadow-xl cursor-pointer ${
                  isOpen ? "ring-2 ring-indigo-400 scale-[1.01]" : ""
                }`}
              >
                <div>
                  <h3 className="text-lg font-bold text-indigo-300">
                    {exp.name}
                  </h3>
                  <p className="text-sm text-gray-200">{exp.title}</p>
                  <p className="text-xs text-gray-400 italic">{exp.duration}</p>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.stack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={`${
                        stackColors[tech] || "bg-gray-500"
                      } text-white px-3 py-1 text-xs rounded-full border border-indigo-500 
                      hover:scale-105 hover:opacity-80 transition-all duration-300`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-200 text-sm list-disc pl-5 mt-4 space-y-2"
                    >
                      {exp.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <div className="mt-4 text-right text-sm text-indigo-400 select-none">
                  {isOpen ? "Show Less ▲" : "Show More ▼"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
