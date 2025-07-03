"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AnimatedContent from "../utils/AnimatedContent";
import StarBorder from "../utils/StarBorder";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      title: "Social Media App",
      description: "A full-stack social platform with posts, stories, chat, and notifications.",
      techStack: "MERN Stack, Redux, Socket.io, Tailwind CSS",
      link: "https://social-media-frontend-5264.onrender.com/",
      backgroundImage: "/assets/loopgram.png",
    },
    {
      title: "Doctor-Patient Frontend",
      description: "A responsive frontend for a healthcare appointment platform where patients can browse doctors and book appointments.",
      techStack: "Frontend, React, Bootstrap, Redux, authentication",
      link: "https://my-health-com-project.vercel.app/",
      backgroundImage: "/assets/doctor.png",
    },
    {
      title: "Vezto Realty - 360° Virtual Tour",
      description: "A modern static website for Vezto Realty, showcasing their 360° virtual tour services for real estate and businesses.",
      techStack: "React, Bootstrap",
      link: "https://vezto-reality.vercel.app/",
      backgroundImage: "/assets/vezto.png",
    },
  ];

  const totalSlides = projects.length + 1;

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const slides = scrollContainer.querySelectorAll<HTMLDivElement>(".slide");

    gsap.to(slides, {
      xPercent: -100 * (totalSlides - 1),
      ease: "none",
      scrollTrigger: {
        id: "projects-scroll",
        trigger: section,
        start: "top top",
        end: () => `+=${section.offsetWidth + window.innerWidth}`,
        scrub: 1,
        pin: true,
        snap: 1 / (totalSlides - 1),
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const current = Math.round(progress * (totalSlides - 1));
          setActiveSlide(current);
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollTrigger = ScrollTrigger.getById("projects-scroll");

    if (scrollTrigger) {
      const totalScroll = scrollTrigger.end - scrollTrigger.start;
      const targetScroll = scrollTrigger.start + (totalScroll * index) / (totalSlides - 1);

      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 1,
        ease: "power2.out",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        ref={scrollContainerRef}
        className="flex h-full"
        style={{ width: `${totalSlides * 100}vw` }}
      >
        {/* Intro Slide */}
        <div
          className="slide w-screen h-screen flex flex-col justify-center items-center bg-cover bg-center relative text-white px-6 text-center"
          style={{ backgroundImage: "url('/your-intro-image.jpg')" }}
        >
          <div className="bg-black bg-opacity-60 absolute inset-0"></div>
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
            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-5xl font-bold">My Portfolio & Projects</h2>
              <p className="text-lg text-gray-300">
                I build modern, scalable, and user-friendly web applications tailored to meet client needs.
                Below are some highlights of my recent work. Feel free to explore and reach out if you'd like to collaborate!
              </p>
              <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="5s"
                onClick={() => goToSlide(1)}
              >
                See Projects
              </StarBorder>
            </div>
          </AnimatedContent>
        </div>

        {/* Project Slides */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="slide w-screen h-screen flex items-center justify-center bg-black relative p-6"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl h-3/4 space-y-8 md:space-y-0 md:space-x-8">
              
              {/* Left - Text */}
              <div className="flex-1 text-white text-center md:text-left">
                <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-6">{project.techStack}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-lg"
                >
                  View Project
                </a>
              </div>

              {/* Right - Image with Laptop Frame */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-80 h-48 md:w-96 md:h-60">
                  
                  {/* Laptop Frame with 'fill' prop */}
                  <Image
                    src="/assets/laptop-frame.png"
                    alt="Laptop Frame"
                    fill
                    className="absolute inset-0 object-contain z-10 pointer-events-none"
                  />

                  {/* Project Screenshot inside laptop screen */}
                  <div
                    className="absolute z-0 overflow-hidden flex items-center justify-center"
                    style={{
                      top: "5%",
                      left: "11.5%",
                      width: "77%",
                      height: "70%",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <Image
                      src={project.backgroundImage}
                      alt={`${project.title} preview`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4 z-20">
        {Array.from({ length: projects.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={`w-4 h-4 rounded-full ${
              activeSlide === index + 1 ? "bg-neutral-900" : "bg-gray-800"
            } hover:scale-110 transition-transform`}
          ></button>
        ))}
      </div>
    </section>
  );
}
