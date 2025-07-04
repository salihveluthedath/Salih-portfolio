"use client";

import { motion } from "framer-motion";
import AnimatedContent from "../utils/AnimatedContent";

export default function AboutSection() {
  return (
    <AnimatedContent
      distance={260}
      direction="vertical"
      reverse={true}
      duration={3}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <motion.section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 snap-start relative py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-32 text-center md:text-left">
          
          {/* Left */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-space leading-snug text-center md:text-left">
              Hi, I&apos;m <span className="text-primary">Salih</span> <br /> Web Developer
            </h2>
            <p className="max-w-xl text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 text-center md:text-left">
              Front End Developer / JavaScript Enthusiast / MERN Stack Developer
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="max-w-xl space-y-3 text-gray-400 text-center md:text-left">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                Professionally connected with the web development industry. Problem solver, well-organised person, loyal employee with high attention to detail.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                Passionate about technology, continuous learning, and building useful things for the web.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
              </p>
            </div>
          </div>
          
        </div>
      </motion.section>
    </AnimatedContent>
  );
}
