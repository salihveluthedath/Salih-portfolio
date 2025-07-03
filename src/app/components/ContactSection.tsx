"use client";

import { motion } from "framer-motion";
import AnimatedContent from "../utils/AnimatedContent";
import StarBorder from "../utils/StarBorder";

export default function ContactSection() {
  return (
    <AnimatedContent
  distance={260}
  direction="horizontal"
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
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 snap-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-space">
        Let’s Work Together
      </h2>

      <p className="max-w-xl text-gray-400 mb-4">
        What would you do if you had a software expert available at your fingertips?
      </p>

      <p className="max-w-xl text-gray-400 mb-4">
        Want to start a new project? Or just say hey. You can also follow me on Instagram.
      </p>

      <p className="text-gray-300 font-semibold mb-8">salihveluthedath@gmail.com</p>

      <div className="flex space-x-6">

  
<StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="5s"
>
      <a
          href="mailto:salihveluthedath@gmail.com"
        >
          Say Hello
        </a>
</StarBorder>
  
<StarBorder
  as="button"
  className="custom-class"
  color="magenta"
  speed="5s"
><a
          href="https://www.instagram.com/s_a_l_i__v/?igsh=MTMwZzRnNm84c2pibg%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a></StarBorder>
        
      </div>
    </motion.section>
    </AnimatedContent>
  );
}
