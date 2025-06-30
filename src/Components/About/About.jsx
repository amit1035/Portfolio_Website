import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaReact, FaNodeJs, FaAndroid, FaFigma } from "react-icons/fa";

const aboutItems = [
  {
    title: "Frontend Developer",
    description:
      "I build modern, responsive UIs using React.js, Tailwind CSS, and JavaScript. I focus on clean, scalable, and accessible design systems.",
    icon: <FaReact size={22} />,
    iconColor: "text-cyan-300",
    skills: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend & Firebase",
    description:
      "Experienced in creating backend services using Node.js and Firebase — including authentication, Firestore, and cloud functions.",
    icon: <FaNodeJs size={22} />,
    iconColor: "text-green-300",
    skills: ["Node.js", "Firebase", "Express"],
  },
  {
    title: "Android Developer",
    description:
      "I develop Android apps using Kotlin and Java, with hands-on experience in API integration and performance optimization.",
    icon: <FaAndroid size={22} />,
    iconColor: "text-lime-300",
    skills: ["Kotlin", "Java", "API Integration"],
  },
  {
    title: "UI/UX & Project Builder",
    description:
      "From wireframing in Figma to complete product development, I enjoy crafting full-stack applications with seamless user experience.",
    icon: <FaFigma size={22} />,
    iconColor: "text-pink-300",
    skills: ["Figma", "Wireframing", "UX/UI Design"],
  },
];

const skillColors = {
  React: "bg-cyan-500 hover:bg-cyan-600",
  "Tailwind CSS": "bg-sky-500 hover:bg-sky-600",
  JavaScript: "bg-yellow-500 hover:bg-yellow-600 text-black",
  "Node.js": "bg-green-500 hover:bg-green-600",
  Firebase: "bg-amber-500 hover:bg-amber-600 text-black",
  Express: "bg-gray-700 hover:bg-gray-800",
  Kotlin: "bg-purple-500 hover:bg-purple-600",
  Java: "bg-red-500 hover:bg-red-600",
  "API Integration": "bg-emerald-500 hover:bg-emerald-600",
  Figma: "bg-pink-500 hover:bg-pink-600",
  Wireframing: "bg-indigo-500 hover:bg-indigo-600",
  "UX/UI Design": "bg-violet-500 hover:bg-violet-600",
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#0d0d0d] to-[#1b1b1b] text-white py-20 px-6 md:px-24 relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-8 relative mx-auto w-fit after:block after:mt-2 after:h-[3px] after:w-24 after:bg-indigo-500 after:mx-auto after:rounded-full"
      >
        About Me
      </motion.h2>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6 mb-16 text-center"
      >
        <p>
          Hi, I'm <span className="text-indigo-400 font-semibold">Amit Gupta</span>, a developer passionate about building meaningful digital experiences.
        </p>
        <p>
          I'm currently pursuing <span className="text-white font-medium">B.Tech in CSE</span> at <span className="text-white font-medium">Galgotias University</span>, and I love building responsive websites & mobile apps with clean code and a great UX.
        </p>
        <p>
          <strong className="text-white">📍 Address:</strong> Greater Noida, Uttar Pradesh, India
        </p>
      </motion.div>

      {/* Timeline with Icons */}
      <div className="relative max-w-4xl mx-auto pl-6">
        {/* Vertical Line */}
        <div className="absolute top-0 left-4 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-indigo-300 rounded-full" />

        <div className="space-y-16">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                transitionSpeed={800}
                glareEnable={true}
                glareMaxOpacity={0.1}
                className="bg-[#1e1e1e]/70 backdrop-blur-md hover:bg-[#282828]/80 transition-all duration-300 p-6 rounded-xl shadow-xl hover:scale-105"
              >
                {/* Icon Circle */}
                <div className="absolute left-[-1.6rem] top-4 w-10 h-10 rounded-full bg-[#1f1f1f] border-2 border-indigo-400 flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <span className={`text-xl ${item.iconColor}`}>{item.icon}</span>
                </div>

                <h4 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Skills Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className={`py-1 px-3 rounded-full text-xs font-medium shadow-sm transition duration-300 ease-in-out hover:scale-105 ${
                        skillColors[skill] || "bg-indigo-600"
                      }`}
                      whileHover={{ scale: 1.12 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
