"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const projects = ["Intro", "Project 1", "Project 2", "Project 3"];

  const slidesContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".section");

    sections.forEach((section) => {
      if (!section.classList.contains("projects-carousel")) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          snap: 1,
        });
      }
    });

    const projectsContainer = document.querySelector(".projects-carousel");
    const projectSlides = gsap.utils.toArray<HTMLElement>(".project-slide");

    if (projectsContainer && projectSlides.length && slidesContainerRef.current) {
      const totalSlides = projectSlides.length;

      gsap.set(slidesContainerRef.current, {
        width: `${totalSlides * window.innerWidth}px`,
      });

      const tween = gsap.to(projectSlides, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          id: "projects-scroll",
          trigger: projectsContainer,
          start: "top top",
          end: () => `+=${projectsContainer.offsetWidth}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          snap: 1 / (totalSlides - 1),
          onUpdate: (self) => {
            const progress = self.progress;
            const slideIndex = Math.min(Math.round(progress * (totalSlides - 1)), totalSlides - 1);
            setActiveSlide(slideIndex);
          },
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        tween.kill();
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const goToSlide = (index: number) => {
    const scrollTrigger = ScrollTrigger.getById("projects-scroll");

    if (scrollTrigger) {
      const totalSlides = gsap.utils.toArray<HTMLElement>(".project-slide").length;
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
    <main className="main-container font-inter bg-black">
      <section className="section h-screen flex justify-center items-center">
        <HeroSection />
      </section>
      <section className="section h-screen flex justify-center items-center">
        <AboutSection />
      </section>

      <section className="section h-screen flex justify-center items-center">
        <SkillsSection />
      </section>

<ProjectsSection/>
      <section className="section h-screen flex justify-center items-center">
        <ContactSection />
      </section>
    </main>
  );
}
