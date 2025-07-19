import React from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const tagColors = [
  "bg-indigo-600",
  "bg-green-600",
  "bg-pink-600",
  "bg-yellow-500",
  "bg-purple-600",
  "bg-red-600",
  "bg-blue-600",
  "bg-teal-600",
];

const ProjectCard = ({ title, main, demoLink, codeLink, image, tags }) => {
  return (
    <div
      className="bg-glassDark backdrop-blur-md rounded-2xl p-6 flex flex-col h-full shadow-indigo-glow transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl cursor-pointer relative overflow-hidden"
      onClick={(e) => {
        const ripple = document.createElement("span");
        ripple.className = "ripple-circle";
        ripple.style.left = `${e.nativeEvent.offsetX}px`;
        ripple.style.top = `${e.nativeEvent.offsetY}px`;
        e.currentTarget.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl mb-5 h-48 md:h-60">
        <img
          src={image}
          alt={`${title} banner`}
          className={`w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 ${
            title === "AI Voice Assistant" ? "object-[center_15%] p-1 rounded-md" : ""
          }`}
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold text-indigo-400 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed flex-grow">{main}</p>

      {/* Tags */}
      {tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              title={`Built with ${tag}`}
              className={`text-xs text-white px-2 py-1 rounded-full hover:opacity-90 transition ${
                tagColors[index % tagColors.length]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-6 flex gap-4 justify-center md:justify-start">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            Demo <FaExternalLinkAlt size={14} />
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            Code <FaCode size={14} />
          </a>
        )}
      </div>

      {/* Scroll Animation Progress Line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-indigo-500 w-0 hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default ProjectCard;
