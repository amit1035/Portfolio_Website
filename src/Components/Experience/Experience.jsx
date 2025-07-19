import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaGithub, FaTrophy, FaCertificate } from "react-icons/fa";
import { SiAndroid } from "react-icons/si";

const experiences = [
  {
    name: "VAS Ventures Pvt. Ltd.",
    icon: <SiAndroid size={30} className="text-green-400" />,
    title: "Android Developer Intern",
    duration: "Sep 2024 – Present",
    details: [
      "Developed Android apps using Kotlin and XML layouts",
      "Integrated RESTful APIs to display user and product data",
      "Worked with JSON parsing and handled runtime permissions",
      "Built responsive UIs and managed navigation stack using Jetpack components",
    ],
  },
  {
    name: "Edunet Foundation (IBM SkillsBuild)",
    icon: <FaReact size={30} className="text-sky-400" />,
    title: "AI/ML Virtual Intern",
    duration: "Jul 2024 – Aug 2024",
    details: [
      "Completed restaurant review sentiment analysis using Python",
      "Performed data preprocessing and trained ML models using Scikit-learn",
      "Visualized ML report through React-based dashboard",
      "Received IBM SkillsBuild certificate on successful completion",
    ],
  },
  {
    name: "Freelance Developer",
    icon: <FaGithub size={30} className="text-white" />,
    title: "Full Stack Developer",
    duration: "2023 – Present",
    details: [
      "Created SwiftCard e-commerce site with product cart, coupons, and Firebase login",
      "Built responsive websites like Currency Converter, Login UI, and URL Shortener",
      "Used Firebase for real-time database and email authentication",
      "Designed using Tailwind CSS, Figma, and React Router",
    ],
  },
  {
    name: "BuildWithIndia Challenge",
    icon: <FaTrophy size={30} className="text-yellow-400" />,
    title: "Participant",
    duration: "2024",
    details: [
      "Participated in a national-level innovation and problem-solving competition",
      "Worked on scalable web ideas that impact the local ecosystem",
      "Enhanced collaborative and debugging skills through peer sessions",
      "Earned certificate of participation for completing the challenge",
    ],
  },
  {
    name: "Infosys Springboard",
    icon: <FaCertificate size={30} className="text-indigo-400" />,
    title: "Cyber Security & Data Science",
    duration: "2024",
    details: [
      "Completed foundational courses on Cyber Security and Introduction to Data Science",
      "Learned concepts like encryption, firewalls, classification algorithms",
      "Practiced case studies and assessments in simulated environments",
      "Earned official certificates from Infosys Springboard platform",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-16 text-white rounded-lg"
    >
      <h2 className="text-5xl font-bold text-indigo-400 mb-16 text-center relative w-fit mx-auto after:block after:mt-3 after:h-1 after:w-20 after:bg-indigo-500 after:rounded-full">
        My Experience
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`rounded-2xl shadow-lg p-6 cursor-pointer
                hover:scale-[1.04] hover:shadow-indigo-glow transition-transform duration-300 select-none`}
              onClick={() => setActiveIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              aria-controls={`exp-details-${idx}`}
            >
              <div className="flex items-center space-x-5 mb-4">
                <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 p-3 rounded-full shadow-lg flex items-center justify-center">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-indigo-500">{exp.name}</h3>
                  <h4 className="text-md font-semibold text-gray-300">{exp.title}</h4>
                  <p className="text-sm italic text-gray-400">{exp.duration}</p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.ul
                    id={`exp-details-${idx}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-gray-300 text-sm space-y-2 pl-6 list-disc"
                  >
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <div className="mt-4 text-indigo-400 font-semibold text-right select-none">
                {isOpen ? "Show Less ▲" : "Show More ▼"}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
