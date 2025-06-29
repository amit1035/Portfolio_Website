import React from "react";
import avatarImg from "../../assets/avtart2.png";
import TextChange from "../TextChange";
import { motion } from "framer-motion";

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-center px-6 md:px-20 py-16 md:py-32 gap-14 md:gap-0 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Left: Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left max-w-xl mx-auto md:mx-0"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide mb-6">
          <TextChange />
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed tracking-normal mb-6">
          I’m passionate about <span className="text-indigo-400 font-semibold">crafting modern UIs</span> that enhance
          user experience and bring ideas to life through code.
        </p>

        <button
          onClick={scrollToContact}
          className="group mt-6 inline-flex items-center text-white py-3 px-7 text-base md:text-lg rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 hover:scale-105 font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-400"
        >
          Contact Me
          <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </motion.div>

      {/* Right: Avatar */}
      <motion.div
        className="flex justify-center md:justify-end w-full md:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        // Removed the floating animation here:
        // animate={{ y: [0, -10, 0] }}
        // transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <img
          className="max-w-[260px] md:max-w-[400px] rounded-full border-4 border-indigo-500 shadow-xl"
          src={avatarImg}
          alt="Amit Gupta's avatar"
        />
      </motion.div>
    </section>
  );
};

export default Home;
