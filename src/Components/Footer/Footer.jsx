import React, { forwardRef } from "react";
import { MdOutlineEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="bg-gradient-to-br from-[#1f2a47] to-[#3b4b80] text-white px-6 md:px-20 py-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s Connect
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
            I’d love to hear from you! Whether it's a project, opportunity, or just a hello — let's get in touch.
          </p>
        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-gray-200">
          {/* CONTACT INFO */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">Contact Info</h3>
            <p className="flex items-center gap-3">
              <MdOutlineEmail size={20} /> amitguptak20@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <MdPhone size={20} /> +91-7479474629
            </p>
            <p className="flex items-center gap-3">
              <MdLocationOn size={20} /> New Delhi, India
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="/resume.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">Download Resume</a></li>
              <li><a href="mailto:amitguptak20@gmail.com" className="hover:underline">Hire Me</a></li>
            </ul>
          </div>

          {/* SOCIAL PROFILES */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">Connect Online</h3>
            <div className="flex gap-5 mt-3">
              <a
                href="mailto:amitguptak20@gmail.com"
                className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow hover:scale-110"
                title="Email"
              >
                <MdOutlineEmail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-gupta-87200a254/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow hover:scale-110"
                title="LinkedIn"
              >
                <CiLinkedin size={24} />
              </a>
              <a
                href="https://github.com/amit1035"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 shadow hover:scale-110"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold">Amit Gupta</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

export default Footer;
