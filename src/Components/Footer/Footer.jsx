import React, { forwardRef, useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import {
  MdOutlineEmail,
  MdLocationOn,
  MdPhone,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsCode, BsPerson, BsTrophy } from "react-icons/bs";
import { motion } from "framer-motion";

const glowEffect = {
  boxShadow: "0 0 20px #8b5cf6",
  scale: 1.05,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const Footer = forwardRef((props, ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setProgress(Math.min(Math.max(pct, 0), 1));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer ref={ref} className="relative bg-[#0a0c1a] text-white overflow-hidden pt-32">
      {/* Blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-72 h-72 bg-purple-600 rounded-full opacity-40 blur-2xl animate-blob"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-64 h-64 bg-indigo-500 rounded-full opacity-40 blur-2xl animate-blob animation-delay-3000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
            <Typewriter
              words={["Let’s Connect", "Work Together", "Create Magic"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-gray-400 mt-2">Excited to collaborate or chat!</p>
        </div>

        {/* Footer Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <Tilt glareEnable glareMaxOpacity={0.12} glareColor="#8b5cf6" glarePosition="all" tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1}>
            <motion.div
              whileHover={glowEffect}
              className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-3xl space-y-4 cursor-pointer h-full"
            >
              <h3 className="text-xl font-semibold text-indigo-400">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <MdOutlineEmail size={24} className="text-indigo-400" />
                  <a href="mailto:amitguptak20@gmail.com" className="group-hover:underline">
                    amitguptak20@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <MdPhone size={24} className="text-indigo-400" />
                  <a href="tel:+917479474629" className="group-hover:underline">
                    +91‑7479474629
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MdLocationOn size={24} className="text-indigo-400" />
                  <p>New Delhi, India</p>
                </div>
              </div>
            </motion.div>
          </Tilt>

          {/* Quick Links */}
          <Tilt glareEnable glareMaxOpacity={0.12} glareColor="#8b5cf6" glarePosition="all" tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1}>
            <motion.div
              whileHover={glowEffect}
              className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-3xl cursor-pointer h-full"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Projects", href: "#projects", icon: <BsCode size={24} /> },
                  { title: "Skills", href: "#skills", icon: <BsPerson size={24} /> },
                  { title: "Contact", href: "#contact", icon: <MdOutlineEmail size={24} /> },
                  { title: "Achievements", href: "#achievements", icon: <BsTrophy size={24} /> },
                ].map(({ title, href, icon }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                    }}
                    className="flex items-center justify-center bg-white/10 p-3 rounded-lg transition text-white font-medium"
                  >
                    {icon}
                    <span className="ml-2">{title}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Tilt>

          {/* Connect Online */}
          <Tilt glareEnable glareMaxOpacity={0.12} glareColor="#8b5cf6" glarePosition="all" tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1}>
            <motion.div
              whileHover={glowEffect}
              className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-3xl cursor-pointer h-full"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">Connect Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    comp: MdOutlineEmail,
                    href: "mailto:amitguptak20@gmail.com",
                    title: "Email",
                  },
                  {
                    comp: CiLinkedin,
                    href: "https://www.linkedin.com/in/amit-gupta-87200a254/",
                    title: "LinkedIn",
                  },
                  {
                    comp: FaGithub,
                    href: "https://github.com/amit1035",
                    title: "GitHub",
                  },
                  {
                    comp: FiInstagram,
                    href: "https://www.instagram.com/amit_gupta055/",
                    title: "Instagram",
                  },
                ].map(({ comp: Icon, href, title }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    title={title}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                    }}
                    className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg transition"
                  >
                    <Icon size={24} className="text-white" />
                    <span className="text-white font-medium">{title}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Tilt>
        </div>

        {/* Scroll to Top + Copyright */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative transform hover:scale-110 transition"
            aria-label="Scroll to top"
          >
            <svg width="48" height="48">
              <circle
                className="stroke-purple-400"
                strokeWidth="4"
                cx="24"
                cy="24"
                r="20"
                strokeDasharray={2 * Math.PI * 20}
                strokeDashoffset={(1 - progress) * 2 * Math.PI * 20}
                fill="none"
              />
            </svg>
            <MdKeyboardArrowUp className="absolute top-2 left-2 text-white" size={24} />
          </button>

          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Amit Gupta. All rights reserved.
          </p>
        </div>
      </div>

      {/* Blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
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
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </footer>
  );
});

export default Footer;
