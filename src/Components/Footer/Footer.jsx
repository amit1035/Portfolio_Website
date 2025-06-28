import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3b4b80] to-[#465697] text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">Let’s Connect</h1>
        <p className="text-sm md:text-lg text-gray-300 max-w-xl">
          Whether you want to collaborate, chat, or just say hello — feel free to drop a message or connect through any platform below.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="mailto:amitguptak20@gmail.com"
            className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
            title="Email"
          >
            <MdOutlineEmail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-gupta-87200a254/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            title="LinkedIn"
          >
            <CiLinkedin size={24} />
          </a>
          <a
            href="https://github.com/amit1035"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Email Display (optional) */}
        <p className="mt-4 text-sm text-gray-300">
          amitguptak20@gmail.com
        </p>

        {/* Footer Note */}
        <div className="text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} Amit Gupta. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
