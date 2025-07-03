"use client";

import { motion } from "framer-motion";
import AnimatedContent from "../utils/AnimatedContent";

export default function AboutSection() {
  return (


<AnimatedContent
  distance={260}
  direction="horizontal"
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
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 snap-start relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 text-left">
        
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-space">
            Hi, I&apos;m Salih WebDeveloper
          </h2>
          <p className="max-w-xl text-gray-400">
            Front End Developer / JavaScript Fan / Mern Stack Developer
          </p>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center">
          <div className="flex-1">
            <p className="max-w-xl text-gray-400 mb-4">
              Professionally connected with the web development industry. Problem solver, well-organised person, loyal employee with high attention to detail.
            </p>
            <p className="max-w-xl text-gray-400 mb-4">
              Fan of Boxing, outdoor activities, video games, and coding of course.
            </p>
            <p className="max-w-xl text-gray-400">
              Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
</AnimatedContent>
   
  );
}
