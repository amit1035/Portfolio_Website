import React from "react";
import avatarImg from "../../assets/avtart2.png";
import TextChange from "../TextChange";

const Home = ({ onContactClick }) => {
  return (
    <section className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20 gap-10 md:gap-0">
      {/* Left */}
      <div className="md:w-1/2 md:pt-10 text-center md:text-left max-w-xl mx-auto md:mx-0">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide mb-10">
          <TextChange />
        </h1>
        <p className="text-gray-300 text-base md:text-xl leading-relaxed tracking-normal">
          I'm passionate about crafting modern and responsive user interfaces that
          enhance user experience and bring ideas to life through code.
        </p>
        <button
          type="button"
          onClick={onContactClick}
          className="group mt-8 text-white py-3 px-6 md:px-8 text-base md:text-lg rounded-3xl bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Contact Me
          <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
          </span>
        </button>
      </div>

      {/* Right */}
      <div className="mb-6 md:mb-0 flex justify-center md:justify-end w-full md:w-1/2">
        <img
          className="max-w-[280px] md:max-w-[400px] rounded-full shadow-xl"
          src={avatarImg}
          alt="Amit Gupta's avatar"
        />
      </div>
    </section>
  );
};

export default Home;
