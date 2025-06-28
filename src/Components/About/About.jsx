import React from "react";
import { IoArrowForward } from "react-icons/io5";

const aboutItems = [
  {
    title: "Frontend Developer",
    description:
      "I build modern, responsive UIs using React.js, Tailwind CSS, and JavaScript. I focus on clean, scalable, and accessible design systems.",
  },
  {
    title: "Backend & Firebase",
    description:
      "Experienced in creating backend services using Node.js and Firebase — including authentication, Firestore, and cloud functions.",
  },
  {
    title: "Android Developer",
    description:
      "I develop Android apps using Kotlin and Java, with hands-on experience in API integration and performance optimization.",
  },
  {
    title: "UI/UX & Project Builder",
    description:
      "From wireframing in Figma to complete product development, I enjoy crafting full-stack applications with seamless user experience.",
  },
];

const About = () => {
  return (
    <section
      id="About"
      className="text-white bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-20 px-6 md:px-24 rounded-xl shadow-xl"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-12">
        About Me
      </h2>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6 mb-12">
        <p>
          Hi, I'm <span className="text-indigo-400 font-semibold">Amit Gupta</span>, a passionate developer currently pursuing my{" "}
          <span className="text-white font-medium">B.Tech in Computer Science & Engineering</span> from{" "}
          <span className="text-white font-medium">Galgotias University (Batch 2022–2026)</span>.
        </p>
        <p>
          I specialize in building user-centric web and mobile apps, with a strong foundation in both frontend and backend technologies.
          I'm a self-learner who loves turning creative ideas into real-world applications through clean code and intuitive design.
        </p>
        <p>
          <strong className="text-white">📍 Address :</strong> Greater Noida, Uttar Pradesh, India
        </p> 
      </div>

      {/* Skills */}
      <div className="space-y-5 max-w-4xl mx-auto">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="group flex items-start gap-4 bg-[#1f1f1f] hover:bg-[#292929] p-5 rounded-lg transition-all duration-300 shadow-md"
          >
            <IoArrowForward
              className="text-teal-400 mt-1 transition-transform duration-300 group-hover:translate-x-1"
              size={24}
            />
            <div>
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="text-sm mt-1 text-gray-400 group-hover:text-gray-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
