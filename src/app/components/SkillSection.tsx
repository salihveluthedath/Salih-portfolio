"use client";

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
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 snap-start"
      >
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-4 text-white font-space">
          Skills & Experience
        </h2>

        <p className="max-w-xl text-gray-400 mb-4 italic text-[clamp(0.8rem,1.8vw,1rem)] leading-relaxed">
          &quot;The bigger the challenge, the greater the opportunity to grow.&quot;
        </p>

        <p className="max-w-2xl text-gray-400 mb-8 text-[clamp(0.85rem,1.8vw,1rem)] leading-relaxed">
          My main expertise lies in full-stack web development, building clean,
          interactive, and scalable web applications.
        </p>

        <a
          href="https://www.linkedin.com/in/salih-veluthedath-74592a317/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my LinkedIn profile"
          className="mb-8 inline-block px-4 py-1.5 border border-gray-500 text-sm text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-300 transition-all duration-300"
        >
          View my LinkedIn
        </a>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center text-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300 text-gray-300 cursor-pointer group"
              aria-label={skill.name}
            >
              <i
                className={`${skill.icon} text-3xl mb-1 group-hover:text-cyan-400 transition-colors duration-300`}
              ></i>
              <span className="text-xs md:text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </AnimatedContent>
  );
}
