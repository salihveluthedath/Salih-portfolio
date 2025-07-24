"use client";

import StarBorder from "../utils/StarBorder";

export default function ContactSection() {
  return (
      <section
        id="contact"
        aria-label="Contact Section"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 snap-start"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-space leading-tight">
          Let’s Work Together
        </h2>

        <p className="max-w-xl text-base lg:text-xl text-gray-400 mb-4">
          What would you do if you had a software expert available at your fingertips?
        </p>

        <p className="max-w-xl text-base lg:text-xl text-gray-400 mb-4">
          Want to start a new project? Or just say hey. You can also follow me on Instagram.
        </p>

        <p className="text-base text-gray-300 font-semibold mb-8">
          salihveluthedath@gmail.com
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <StarBorder className="custom-class" color="cyan">
            <a
              href="mailto:salihveluthedath@gmail.com"
              className="text-base"
              aria-label="Send an email to Salih"
            >
              Say Hello
            </a>
          </StarBorder>

          <StarBorder className="custom-class" color="magenta">
            <a
              href="https://www.instagram.com/s_a_l_i__v/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base"
              aria-label="Visit Salih's Instagram"
            >
              Instagram
            </a>
          </StarBorder>
        </div>
      </section>
  );
}
