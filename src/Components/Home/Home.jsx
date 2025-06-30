import React, { useState } from "react";
import avatarImg from "../../assets/avtart2.png";
import TextChange from "../TextChange";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const [avatarPos, setAvatarPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    setAvatarPos({ x, y });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex flex-col md:flex-row justify-between items-center w-full min-h-screen px-6 md:px-20 py-20 md:py-32 gap-14 md:gap-0 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden text-white"
    >
      {/* Background Blurs */}
      <motion.div
        className="absolute top-[-5rem] left-[-5rem] w-[20rem] h-[20rem] bg-purple-700 opacity-20 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-8rem] right-[-8rem] w-[12rem] h-[12rem] bg-indigo-600 opacity-10 rounded-full blur-2xl -z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Mouse Glow Follower */}
      <motion.div
        className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl pointer-events-none -z-10"
        animate={{ x: avatarPos.x + 300, y: avatarPos.y + 300 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      />

      {/* Left: Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left max-w-xl mx-auto md:mx-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 mt-10 md:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-400">
          <TextChange />
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
          I design and build{" "}
          <span className="text-indigo-400 font-semibold">
            beautiful user interfaces
          </span>{" "}
          that are responsive, intuitive, and deliver real value.
        </p>

        {/* Parallax Social Icons */}
        <motion.div
          className="flex justify-center md:justify-start gap-5 mb-8 text-indigo-400 text-2xl"
          style={{
            transform: `translate(${avatarPos.x * 0.4}px, ${avatarPos.y * 0.4}px)`,
          }}
        >
          <a
            href="https://github.com/amit1035"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-gupta-87200a254/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/amit1035"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:amitguptak20@example.com"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Animated CTA Button */}
        <motion.button
          onClick={scrollToContact}
          whileHover={{
            y: -3,
            scale: 1.07,
            textShadow: "0px 0px 8px rgba(255,255,255,0.9)",
            boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
          }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
        >
          Let's Connect →
        </motion.button>
      </motion.div>

      {/* Right: Avatar + Status Badge */}
      <motion.div
        className="relative flex justify-center md:justify-end w-full md:w-1/2"
        style={{
          transform: `translate(${avatarPos.x}px, ${avatarPos.y}px)`,
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="relative">
          <img
            src={avatarImg}
            alt="Amit Gupta"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full transition-transform duration-300"
          />
          {/* Status Dot */}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-indigo-400 text-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Home;
