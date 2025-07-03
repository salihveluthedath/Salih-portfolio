"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  direction?: "top" | "bottom";
  onAnimationComplete?: () => void;
  className?: string;
}

export default function BlurText({
  text,
  delay = 0,
  direction = "top",
  onAnimationComplete,
  className = "",
}: BlurTextProps) {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  return (
    <div className={`inline-flex flex-wrap justify-center ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{
            opacity: 0,
            y: direction === "top" ? -20 : 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: delay / 1000 + index * 0.05,
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1], // Cubic Bezier for smooth effect
          }}
          onAnimationComplete={() => {
            if (index === letters.length - 1 && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
