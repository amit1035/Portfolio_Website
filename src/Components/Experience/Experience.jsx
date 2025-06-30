import React, { useState } from "react";
import { FaReact, FaGithub, FaTrophy, FaCertificate } from "react-icons/fa";
import { SiAndroid } from "react-icons/si";
import { motion } from "framer-motion";

const experiences = [
  {
    name: "VAS Ventures Pvt. Ltd.",
    icon: <SiAndroid size={50} className="text-green-400" />,
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
    icon: <FaReact size={50} className="text-sky-400" />,
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
    icon: <FaGithub size={50} className="text-white" />,
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
    icon: <FaTrophy size={50} className="text-yellow-400" />,
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
    icon: <FaCertificate size={50} className="text-indigo-400" />,
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

const listItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 },
  }),
};

const Experience = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleDetails = (index) => {
    setExpandedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-24 bg-gradient-to-br from-[#0d0d0d] via-[#121212] to-[#1a1a1a] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-16 relative w-fit mx-auto after:block after:mt-3 after:h-[3px] after:w-24 after:bg-indigo-500 after:mx-auto after:rounded-full"
      >
        My Experience
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-3">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative bg-[#1b1b1b]/80 backdrop-blur-md border border-indigo-500/20 hover:border-indigo-400 transition-all duration-300 rounded-2xl p-6 pt-8 shadow-lg hover:scale-105 hover:shadow-lg hover:bg-[#2a2a2a]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="absolute -top-6 left-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-3 rounded-full shadow-md hover:scale-110 transition-all duration-300">
              {exp.icon}
            </div>

            <div className="pl-1 mt-6">
              <h3 className="text-xl font-semibold text-indigo-400">{exp.title}</h3>
              <p className="text-gray-300 text-sm">{exp.name}</p>
              <p className="text-gray-500 text-xs">{exp.duration}</p>
            </div>

            <div
              className={`mt-4 text-gray-300 text-sm space-y-3 pl-6 transition-all duration-300 ${
                expandedIndexes.includes(idx) ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <h4 className="text-indigo-400 font-semibold text-lg">Key Responsibilities:</h4>
              {exp.details.map((point, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2"
                  variants={listItemVariants}
                >
                  <div className="flex items-start space-x-2">
                    {/* Normal Bullet Point with color */}
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-1" />
                    <motion.p>{point}</motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => toggleDetails(idx)}
              className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm"
            >
              {expandedIndexes.includes(idx) ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
