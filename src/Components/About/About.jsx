import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaReact, FaNodeJs, FaAndroid, FaFigma } from "react-icons/fa";

const aboutItems = [
  {
    title: "Frontend Developer",
    description:
      "I build modern, responsive UIs using React.js, Tailwind CSS, and JavaScript. I focus on clean, scalable, and accessible design systems.",
    icon: <FaReact size={28} className="text-cyan-400" />,
  },
  {
    title: "Backend & Firebase",
    description:
      "Experienced in creating backend services using Node.js and Firebase — including authentication, Firestore, and cloud functions.",
    icon: <FaNodeJs size={28} className="text-green-400" />,
  },
  {
    title: "Android Developer",
    description:
      "I develop Android apps using Kotlin and Java, with hands-on experience in API integration and performance optimization.",
    icon: <FaAndroid size={28} className="text-lime-400" />,
  },
  {
    title: "UI/UX & Project Builder",
    description:
      "From wireframing in Figma to complete product development, I enjoy crafting full-stack applications with seamless user experience.",
    icon: <FaFigma size={28} className="text-pink-400" />,
  },
];

const About = () => {
  return (
    <section
      id="About"
      className="text-white bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-20 px-6 md:px-24 rounded-xl shadow-2xl"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-4 relative w-fit mx-auto after:block after:mt-2 after:h-[3px] after:w-24 after:bg-indigo-500 after:mx-auto after:rounded-full"
      >
        About Me
      </motion.h2>

      {/* Introduction */}
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
          Currently pursuing my <span className="text-white font-medium">B.Tech in CSE</span> at <span className="text-white font-medium">Galgotias University</span>, I specialize in building responsive websites and mobile apps with clean code and great UX.
        </p>
        <p>
          <strong className="text-white">📍 Address:</strong> Greater Noida, Uttar Pradesh, India
        </p>
      </motion.div>

      {/* Skill Timeline */}
      <div className="relative border-l-2 border-indigo-500 pl-6 space-y-10 max-w-4xl mx-auto">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={800}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              className="bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-all duration-300 p-6 rounded-xl shadow-lg relative group"
            >
              {/* Pulse dot */}
              <div className="absolute -left-3 top-6 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center animate-pulse shadow-lg z-10">
                {item.icon}
              </div>

              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-white">
                {item.title}
              </h4>
              <p className="text-gray-400 group-hover:text-gray-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
