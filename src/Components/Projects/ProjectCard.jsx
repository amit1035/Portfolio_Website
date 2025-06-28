import React from "react";

const ProjectCard = ({ title, main, demoLink, codeLink, image }) => {
  return (
    <div>
      <img
  src={image}
  alt={`${title} banner`}
  className={`rounded-xl mb-4 w-full shadow-md ${
    title === "To-Do Reminder App"
      ? "h-40 md:h-60 object-contain"
      : "h-60 object-cover"
  }`}
      />
      <h3 className="text-xl font-bold text-indigo-300 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{main}</p>
      <div className="flex gap-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-md"
          >
            Demo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-700 hover:bg-zinc-600 transition-all duration-300 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-md"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
