"use client";

import { motion } from "framer-motion";
import AnimatedContent from "../utils/AnimatedContent";
import StarBorder from "../utils/StarBorder";

export default function ContactSection() {
  return (
    <AnimatedContent
      distance={260}
      direction="vertical"
      reverse={false}
      duration={3}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <motion.section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 snap-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-space leading-tight animate-item">
          Let’s Work Together
        </h2>

        <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-4 animate-item">
          What would you do if you had a software expert available at your fingertips?
        </p>

        <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-4 animate-item">
          Want to start a new project? Or just say hey. You can also follow me on Instagram.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-semibold mb-8 animate-item">
          salihveluthedath@gmail.com
        </p>

        <div className="flex flex-wrap justify-center gap-6 animate-item">
          <StarBorder as="button" className="custom-class" color="cyan" speed="5s">
            <a href="mailto:salihveluthedath@gmail.com" className="text-sm sm:text-base md:text-lg">
              Say Hello
            </a>
          </StarBorder>

          <StarBorder as="button" className="custom-class" color="magenta" speed="5s">
            <a
              href="https://www.instagram.com/s_a_l_i__v/?igsh=MTMwZzRnNm84c2pibg%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base md:text-lg"
            >
              Instagram
            </a>
          </StarBorder>
        </div>
      </motion.section>
    </AnimatedContent>
  );
}
