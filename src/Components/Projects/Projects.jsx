import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ProjectCard from "./ProjectCard";

// Assets
import EcommerceImg from "../../assets/Ecommerce.png";
import CurrencyImg from "../../assets/currecny.png";
import LoginImg from "../../assets/login.png";
import TodoImg from "../../assets/todoApp.png";
import LandingImg from "../../assets/landing.png";
import ai from "../../assets/img.png";

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const projectList = [
  {
    title: "AI Voice Assistant",
    main: "A voice-enabled AI assistant that can listen, respond, and perform tasks like answering questions.",
    demoLink: "https://amit1035.github.io/ai-assistant",
    codeLink: "https://github.com/amit1035/zia-ai-assistant",
    image: ai,
    tags: ["React.js", "JavaScript", "Speech Recognition API"],
  },
  {
    title: "SwiftCard (E-Commerce)",
    main: "A full-featured e-commerce platform with real-time cart updates, user authentication, and payments.",
    demoLink: "https://github.com/amit1035/Ecommerce_Website",
    codeLink: "https://github.com/amit1035/Ecommerce_Website",
    image: EcommerceImg,
    tags: ["React.js", "Firebase", "Context API", "Tailwind CSS"],
  },
  {
    title: "Currency Converter",
    main: "Instantly convert currencies using live API. Responsive UI with dark mode support.",
    demoLink: "https://amit1035.github.io/Currency_Converter",
    codeLink: "https://github.com/amit1035/Currency_Converter",
    image: CurrencyImg,
    tags: ["React js", "Tailwind", "Exchange Rate API"],
  },
  {
    title: "Flutter OTP Auth System",
    main: "Mobile-first OTP login using Firebase Auth. Simple UI and strong backend logic.",
    demoLink: "https://github.com/amit1035/flutter_mobile_auth",
    codeLink: "https://github.com/amit1035/flutter_mobile_auth",
    image: LoginImg,
    tags: ["Flutter", "Firebase Auth", "Dart", "Mobile App"],
  },
  {
    title: "To-Do Reminder App",
    main: "Add, edit, and manage tasks with local storage and reminders. Simple productivity UI.",
    demoLink: "https://amit1035.github.io/project-todo-reminder",
    codeLink: "https://github.com/amit1035/project-todo-reminder",
    image: TodoImg,
    tags: ["Java", "LocalStorage", "Mobile App"],
  },
  {
    title: "Landing Page",
    main: "Clean, responsive landing page built with HTML, CSS and JS. Ideal for portfolios or startups.",
    demoLink: "https://amit1035.github.io/landingPage",
    codeLink: "https://github.com/amit1035/landingPage",
    image: LandingImg,
    tags: ["React", "Tailwind", "JavaScript", "Responsive Design"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-black via-[#0f0f1d] to-black text-white py-20 px-6 md:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-16 tracking-wide drop-shadow-lg"
      >
        My Projects
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-3 sm:grid-cols-2">
        {projectList.map((project, idx) => (
          <Tilt
            key={idx}
            glareEnable={true}
            glareMaxOpacity={0.1}
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            scale={1.02}
          >
            <motion.div
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              className="rounded-3xl"
            >
              <ProjectCard {...project} />
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
