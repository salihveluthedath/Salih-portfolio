export default function AboutSection() {
  return (

      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 snap-start relative py-12"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-32 text-center md:text-left">
          {/* Left */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white font-space leading-snug">
              Hi, I&apos;m <span className="text-primary">Salih</span> <br /> Web Developer
            </h2>
            <p className="max-w-xl text-sm lg:text-base text-gray-400">
              Front End Developer / JavaScript Enthusiast / MERN Stack Developer
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="max-w-xl space-y-4 text-gray-400 text-sm lg:text-base">
              <p>
                Professionally connected with the web development industry. Problem solver, well-organised person, loyal employee with high attention to detail.
              </p>
              <p>
                Passionate about technology, continuous learning, and building useful things for the web.
              </p>
              <p>
                Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
}
