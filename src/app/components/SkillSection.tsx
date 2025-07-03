"use client";

import { motion } from "framer-motion";
import AnimatedContent from "../utils/AnimatedContent";

export default function SkillsSection() {
  const skills = [
    { icon: "devicon-javascript-plain", name: "JavaScript" },
    { icon: "devicon-react-original", name: "React" },
    { icon: "devicon-nextjs-original-wordmark", name: "Next.js" },
    { icon: "devicon-nodejs-plain", name: "Node.js" },
    { icon: "devicon-express-original", name: "Express.js" },
    { icon: "devicon-mongodb-plain", name: "MongoDB" },
    { icon: "devicon-redux-original", name: "Redux" },
    { icon: "devicon-tailwindcss-plain", name: "Tailwind CSS" },
    { icon: "devicon-git-plain", name: "Git" },
    { icon: "devicon-html5-plain", name: "HTML5" },
    { icon: "devicon-css3-plain", name: "CSS3" },
    { icon: "devicon-bootstrap-plain", name: "Bootstrap" },
  ];

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
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 snap-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-space">
        Skills & Experience
      </h2>

      <p className="max-w-xl text-gray-400 mb-6 italic">
        &quot;The bigger the challenge, the greater the opportunity to grow.&quot;
      </p>

      <p className="max-w-2xl text-gray-400 mb-10">
        My main expertise lies in full-stack web development, crafting clean, interactive, and scalable web applications.
      </p>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-10 inline-block px-4 py-2 border border-gray-300 text-gray-300 rounded hover:bg-gray-700 transition"
      >
        View my LinkedIn
      </a>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center text-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center hover:scale-110 transition-transform text-gray-300"
          >
            <i className={`${skill.icon} text-4xl mb-2`}></i>
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
    </AnimatedContent>
  );
}
