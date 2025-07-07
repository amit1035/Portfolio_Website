import React from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectCard = ({ title, main, demoLink, codeLink, image }) => {
  return (
    <div className="bg-glassDark backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-indigo-glow transition-transform duration-300 hover:scale-[1.04] cursor-pointer">
      {/* Image Section */}
      <div className="overflow-hidden rounded-xl mb-5 h-48 md:h-60">
  <img
  src={image}
  alt={`${title} banner`}
  className={`w-full h-full ${
    title === "AI Voice Assistant"
      ? "object-cover object-[center_15%] p-1 rounded-md"
      : "object-cover"
  } transition-transform duration-500 ease-in-out hover:scale-110`}
  loading="lazy"
/>


      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold text-indigo-400 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed flex-grow">{main}</p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 justify-center md:justify-start">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-colors duration-300"
          >
            Demo <FaExternalLinkAlt size={14} />
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-colors duration-300"
          >
            Code <FaCode size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
