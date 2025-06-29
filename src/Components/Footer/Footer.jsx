import React, { forwardRef } from "react";
import { MdOutlineEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const glowEffect = {
  textShadow: "0 0 12px #7c3aed, 0 0 20px #8b5cf6",
  boxShadow: "0 0 15px #7c3aed, 0 0 25px #8b5cf6",
  transition: { type: "spring", stiffness: 300, damping: 20 },
  scale: 1.15,
};

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      className="relative bg-[#0a0c1a] text-white px-10 md:px-36 py-24 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-purple-700 rounded-full opacity-30 filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-indigo-600 rounded-full opacity-30 filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-indigo-500 to-indigo-700 bg-clip-text text-transparent tracking-wider drop-shadow-lg">
            Let’s Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mt-4 font-light">
            Always excited to collaborate or chat about new projects and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-gray-300">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="glassmorphism p-8 rounded-3xl bg-white/5 border border-white/10 shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-indigo-400 border-b-2 border-indigo-400 pb-2 tracking-wide">
              Contact Info
            </h3>
            <div className="space-y-8 text-lg font-semibold">
              <div className="flex items-center gap-6">
                <motion.span whileHover={glowEffect} className="text-indigo-400">
                  <MdOutlineEmail size={32} />
                </motion.span>
                <a href="mailto:amitguptak20@gmail.com" className="hover:text-indigo-400 transition">
                  amitguptak20@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-6">
                <motion.span whileHover={glowEffect} className="text-indigo-400">
                  <MdPhone size={32} />
                </motion.span>
                <a href="tel:+917479474629" className="hover:text-indigo-400 transition">
                  +91-7479474629
                </a>
              </div>
              <div className="flex items-center gap-6">
                <motion.span whileHover={glowEffect} className="text-indigo-400">
                  <MdLocationOn size={32} />
                </motion.span>
                <p>New Delhi, India</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="glassmorphism p-8 rounded-3xl bg-white/5 border border-white/10 shadow-xl flex flex-col"
          >
            <h3 className="text-3xl font-bold mb-8 text-indigo-400 border-b-2 border-indigo-400 pb-2 tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-6 text-lg font-semibold">
              {["projects", "skills", "contact"].map((section) => (
                <motion.li
                  key={section}
                  whileHover={{
                    color: "#8b5cf6",
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                >
                  <a
                    href={`#${section}`}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Icons with Labels */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="glassmorphism p-8 rounded-3xl bg-white/5 border border-white/10 shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-indigo-400 border-b-2 border-indigo-400 pb-2 tracking-wide">
              Connect Online
            </h3>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-6">
              {[
                {
                  href: "mailto:amitguptak20@gmail.com",
                  icon: <MdOutlineEmail size={28} />,
                  bg: "bg-yellow-400",
                  hoverBg: "hover:bg-yellow-500",
                  title: "Email",
                },
                {
                  href: "https://www.linkedin.com/in/amit-gupta-87200a254/",
                  icon: <CiLinkedin size={28} />,
                  bg: "bg-blue-700",
                  hoverBg: "hover:bg-blue-800",
                  title: "LinkedIn",
                },
                {
                  href: "https://github.com/amit1035",
                  icon: <FaGithub size={28} />,
                  bg: "bg-purple-700",
                  hoverBg: "hover:bg-purple-800",
                  title: "GitHub",
                },
                {
                  href: "https://www.instagram.com/amit_gupta055/",
                  icon: <FiInstagram size={28} />,
                  bg: "bg-pink-500",
                  hoverBg: "hover:bg-pink-600",
                  title: "Instagram",
                },
              ].map(({ href, icon, bg, hoverBg, title }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  title={title}
                  className="flex flex-col items-center space-y-2"
                >
                  <motion.div
                    className={`rounded-full p-4 shadow-lg text-white flex items-center justify-center cursor-pointer transition-colors duration-300 ${bg} ${hoverBg}`}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 20px #7c3aed, 0 0 30px #8b5cf6",
                      transition: { type: "spring", stiffness: 400, damping: 15 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                  </motion.div>
                  <span className="text-sm font-medium text-gray-300">{title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-28 text-center text-indigo-400 select-none tracking-wide font-semibold text-sm"
        >
          © {new Date().getFullYear()} <span className="font-bold">Amit Gupta</span>. All rights reserved.
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.95);
          }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
});

export default Footer;
