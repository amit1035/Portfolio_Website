import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiAndroid } from "react-icons/si";
import { motion } from "framer-motion";

const experiences = [
  {
    name: "VAS Ventures Pvt. Ltd.",
    icon: <SiAndroid size={50} className="text-green-400" />,
    title: "Android Developer Intern",
    duration: "Sep 2024 – Present",
    details: [
      "Developed Android apps using Kotlin & XML",
      "Integrated REST APIs to fetch dynamic user data",
      "Built clean and responsive UI using Android Studio",
      "Optimized app lifecycle handling for performance",
    ],
  },
  {
    name: "Edunet Foundation (AI-ML Internship)",
    icon: <FaReact size={50} className="text-sky-400" />,
    title: "AI/ML Intern",
    duration: "Feb 2024 – Apr 2024",
    details: [
      "Worked on restaurant sentiment analysis dataset",
      "Implemented ML models using Python libraries",
      "Built React UI dashboard for ML report display",
      "Learned collaboration and Git version control",
    ],
  },
  {
    name: "Freelance Projects",
    icon: <FaGithub size={50} className="text-white" />,
    title: "Full Stack Developer",
    duration: "2023 – Present",
    details: [
      "Built SwiftCard e-commerce site with cart & auth",
      "Developed React apps (URL shortener, currency converter)",
      "Used Firebase for login & real-time storage",
      "Designed responsive UI with Tailwind & Figma",
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
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-24 bg-gradient-to-br from-[#0d0d0d] via-[#121212] to-[#1a1a1a] text-white"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-16 relative w-fit mx-auto after:block after:mt-3 after:h-[3px] after:w-24 after:bg-indigo-500 after:mx-auto after:rounded-full"
      >
        My Experience
      </motion.h2>

      {/* Cards */}
      <div className="grid gap-12 md:grid-cols-3">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative bg-[#1b1b1b]/80 backdrop-blur-md border border-indigo-500/20 hover:border-indigo-400 transition-all duration-300 rounded-2xl p-6 pt-8 shadow-lg hover:shadow-indigo-700/30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Icon Badge */}
            <div className="absolute -top-6 left-6 bg-indigo-500 p-3 rounded-full shadow-md animate-bounce">
              {exp.icon}
            </div>

            <div className="pl-1 mt-6">
              <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              <p className="text-gray-300 text-sm">{exp.name}</p>
              <p className="text-gray-500 text-xs">{exp.duration}</p>
            </div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 text-gray-300 text-sm list-disc list-inside space-y-1"
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
