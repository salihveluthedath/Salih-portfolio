"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import dynamic from "next/dynamic";
import Image from "next/image";

const StarBorder = dynamic(() => import("../utils/StarBorder"));

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
    description: "A responsive frontend for a healthcare appointment platform.",
    techStack: "Frontend, React, Bootstrap, Redux, authentication",
    link: "https://my-health-com-project.vercel.app/",
    backgroundImage: "/assets/doctor.png",
  },
  {
    title: "Vezto Realty - 360° Virtual Tour",
    description: "A static website for showcasing virtual tour services.",
    techStack: "React, Bootstrap",
    link: "https://vezto-reality.vercel.app/",
    backgroundImage: "/assets/vezto.png",
  },
  {
    title: "ECommerce Demo frontend",
    description: "Amazon-style frontend with cart, product listing, and details.",
    techStack: "React, Bootstrap, Context API / Redux",
    link: "https://ecommerce-demo-virid-eight.vercel.app/",
    backgroundImage: "/assets/ecommerce-demo.png",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = projects.length + 1;

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!section || !scrollContainer) return;

    const slides = scrollContainer.querySelectorAll(".slide");

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
          const current = Math.round(self.progress * (totalSlides - 1));
          setActiveSlide(current);
        },
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollTrigger = ScrollTrigger.getById("projects-scroll");

    if (scrollTrigger) {
      const totalScroll = scrollTrigger.end - scrollTrigger.start;
      const clampedIndex = Math.max(0, Math.min(index, totalSlides - 1));
      const targetProgress = clampedIndex / (totalSlides - 1);
      const targetScroll = scrollTrigger.start + totalScroll * targetProgress;

      gsap.to(window, {
        scrollTo: { y: targetScroll },
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [totalSlides]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section projects-carousel relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        ref={scrollContainerRef}
        className="flex h-full"
        style={{ width: `${totalSlides * 100}vw` }}
      >
        {/* Intro Slide */}
        <div
          className="slide w-screen h-screen flex flex-col justify-center items-center bg-cover bg-center relative text-white px-6 text-center "
          style={{
            backgroundImage: "url('/assets/intro-bg.jpg')",
            backgroundColor: "#111",
          }}
        >
          <div className="bg-black absolute inset-0"></div>
          <div className="relative z-10 max-w-2xl space-y-6 ">
            <h2 className="text-3xl sm:text-4xl font-bold">
              My Portfolio & Projects
            </h2>
            <p className="text-sm sm:text-md text-gray-300">
              I build modern, scalable, and user-friendly web applications.
              Below are some highlights of my recent work.
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
        </div>

        {/* Project Slides */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="slide w-screen h-screen flex items-center justify-center bg-black relative p-6"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl h-auto md:h-3/4 space-y-8 md:space-y-0 md:space-x-8">
              {/* Text Side */}
              <div className="flex-1 text-white text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mb-6">
                  {project.techStack}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-lg"
                >
                  View Project
                </a>
              </div>

              {/* Image Side */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 aspect-[16/9] sm:w-80 md:w-96">
                  <Image
                    src="/assets/laptop-frame.png"
                    alt="Laptop Frame"
                    fill
                    className="absolute inset-0 object-contain z-10 pointer-events-none"
                  />
                  <div
                    className="absolute z-0 overflow-hidden flex items-center justify-center"
                    style={{
                      top: "15%",
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
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4 z-20">
        {Array.from({ length: projects.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={`w-4 h-4 rounded-full ${
              activeSlide === index + 1 ? "bg-cyan-400" : "bg-gray-700"
            } hover:scale-110 transition-transform`}
          />
        ))}
      </div>

      {/* Back / Next Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={() => goToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="text-white text-3xl px-2 py-1 bg-gray-800 bg-opacity-60 rounded hover:bg-opacity-90"
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={() => goToSlide(activeSlide + 1)}
          disabled={activeSlide === totalSlides - 1}
          className="text-white text-3xl px-2 py-1 bg-gray-800 bg-opacity-60 rounded hover:bg-opacity-90"
        >
          →
        </button>
      </div>
    </section>
  );
}
