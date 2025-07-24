import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProfileCard from "../utils/PostCard";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 snap-start relative"
      aria-label="Hero section with title and profile"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20 lg:gap-28 mb-32 md:mb-36">
        {/* Left - Text */}
        <div className="flex-1 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-space leading-snug mb-4"
          >
            Full-Stack <br className="hidden sm:block" />
            Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mb-6"
          >
            Full-stack Developer crafting modern, interactive web experiences.
            Resolving design problems, building smart UIs and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </motion.p>

          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-white text-black rounded hover:bg-gray-200 transition flex items-center gap-2 text-sm font-medium"
            aria-label="Scroll to About section"
          >
            About Me
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </motion.button>
        </div>

        {/* Right - Card */}
        <div className="flex-1 flex justify-center">
          <ProfileCard
            name="Salih V"
            title="Full-Stack Developer"
            handle="salihcodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/Adobe Express - file.png"
            iconUrl="/assets/code.png"
            showUserInfo
            enableTilt
            onContactClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
}
