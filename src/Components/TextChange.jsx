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

  useEffect(() => {
    const currentTextObj = texts[textIndex];
    const typingSpeed = isDeleting ? 40 : 120;
    let timeout;

    if (!isDeleting && charIndex === currentTextObj.text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setCharIndex(nextCharIndex);
        setDisplayText(currentTextObj.text.substring(0, nextCharIndex));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    setCharIndex(0);
  }, [textIndex]);

  const currentColor = texts[textIndex].color;

  return (
    <span
      className={classNames(
        "font-bold text-3xl md:text-5xl transition-colors duration-500 ease-in-out",
        currentColor
      )}
    >
      {displayText}
      <span className="border-r-2 border-white ml-1 animate-blink" />
    </span>
  );
};

export default TextChange;
