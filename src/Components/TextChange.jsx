import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Amit Gupta", "Frontend Developer", "Android Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 40 : 120;

    let timeout;

    if (!isDeleting && charIndex === currentText.length) {
      // Pause before starting to delete
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      // Done deleting: move to next text and start typing again
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Normal typing or deleting action
      timeout = setTimeout(() => {
        const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setCharIndex(nextCharIndex);
        setDisplayText(currentText.substring(0, nextCharIndex));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Reset charIndex whenever textIndex changes to start typing fresh
  useEffect(() => {
    setCharIndex(0);
  }, [textIndex]);

  return (
    <span className="border-r-2 border-indigo-400 pr-1 animate-blink">{displayText}</span>
  );
};

export default TextChange;
