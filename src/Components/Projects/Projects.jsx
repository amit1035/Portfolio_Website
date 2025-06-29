import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const projectList = [
  {
    title: "SwiftCard (E-Commerce)",
    main: "A full-featured e-commerce platform with real-time cart updates, user authentication, and secure payments using React, Firebase, and Context API.",
    demoLink: "https://github.com/amit1035/Ecommerce_Website",
    codeLink: "https://github.com/amit1035/Ecommerce_Website",
    image: "/src/assets/Ecommerce.png",
  },
  {
    title: "Currency Converter",
    main: "Convert currencies instantly using a live exchange rate API. Responsive UI with light/dark mode toggle for better UX.",
    demoLink: "https://amit1035.github.io/Currency_Converter",
    codeLink: "https://github.com/amit1035/Currency_Converter",
    image: "/src/assets/currecny.png",
  },
  {
    title: "Flutter OTP Auth System",
    main: "A mobile-first OTP authentication system built in Flutter using Firebase Auth. Clean design and robust verification logic.",
    demoLink: "https://github.com/amit1035/flutter_mobile_auth",
    codeLink: "https://github.com/amit1035/flutter_mobile_auth",
    image: "/src/assets/login.png",
  },
  {
    title: "To-Do Reminder App",
    main: "Task management app that lets users add, edit, and receive reminders for tasks. Features local storage and a clean UI.",
    demoLink: "https://amit1035.github.io/project-todo-reminder",
    codeLink: "https://github.com/amit1035/project-todo-reminder",
    image: "/src/assets/todoApp.png",
  },
  {
    title: "Landing Page",
    main: "A modern, responsive landing page template built with HTML, CSS, and JavaScript. Ideal for startups or personal portfolios.",
    demoLink: "https://amit1035.github.io/landingPage",
    codeLink: "https://github.com/amit1035/landingPage",
    image: "/src/assets/landing.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-black via-[#0f0f1d] to-black text-white py-20 px-6 md:px-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-16 tracking-wide drop-shadow-lg">
        My Projects
      </h2>

      <div className="grid gap-12 md:grid-cols-3 sm:grid-cols-2">
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            className="rounded-3xl"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
