import React, { useState, useEffect } from "react";
import classNames from "classnames";

const TextChange = () => {
  const texts = [
    { text: "Hi, I'm Amit Gupta", color: "text-indigo-400" },
    { text: "Frontend Developer", color: "text-pink-400" },
    { text: "Android Developer", color: "text-green-400" },
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [fadeClass, setFadeClass] = useState("opacity-100");

  const current = texts[textIndex];

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 100;
    let timeout;

    if (!isDeleting && charIndex === current.text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setCharIndex(nextIndex);
        setDisplayText(current.text.substring(0, nextIndex));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Fade effect when switching texts
  useEffect(() => {
    setFadeClass("opacity-0");
    const fadeTimeout = setTimeout(() => {
      setFadeClass("opacity-100");
    }, 150);
    return () => clearTimeout(fadeTimeout);
  }, [textIndex]);

  return (
    <span
      className={classNames(
        "font-bold text-3xl md:text-5xl transition-all duration-500 ease-in-out",
        current.color,
        fadeClass
      )}
    >
      {displayText}
      <span className="ml-1 border-r-2 border-white animate-blink" />
    </span>
  );
};

export default TextChange;
