import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

const TextChange = () => {
  const texts = [
    { text: "Hi, I'm Amit Gupta", color: "text-indigo-400" },
    { text: "Frontend Developer", color: "text-purple-400" },
    { text: "Android Developer", color: "text-pink-400" },
  ];

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (phase === "typing") {
      if (displayed.length < texts[index].text.length) {
        const timeout = setTimeout(() => {
          setDisplayed(texts[index].text.slice(0, displayed.length + 1));
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => setPhase("deleting"), 1500);
        return () => clearTimeout(pause);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        const next = (index + 1) % texts.length;
        setIndex(next);
        setPhase("typing");
      }
    }
  }, [displayed, phase, index, texts]);

  return (
    <div className="min-h-[3.5rem] md:min-h-[4.5rem]">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={classNames(
            "font-extrabold text-3xl md:text-5xl tracking-tight relative inline-block",
            texts[index].color
          )}
        >
          {displayed}
          <span className="ml-1 border-r-2 border-white animate-blink" />
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default TextChange;
