"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const SkillsSection = dynamic(() => import("./components/SkillSection"));
const ContactSection = dynamic(() => import("./components/ContactSection"));
const ProjectsSection = dynamic(() => import("./components/ProjectSection"), { ssr: false });

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
      <ProjectsSection />
      <section className="section h-screen flex justify-center items-center">
        <ContactSection />
      </section>
    </main>
  );
}
