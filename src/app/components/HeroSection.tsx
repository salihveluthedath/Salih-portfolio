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
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 snap-start relative">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between lg:gap-56 gap-16 text-left mb-36">
        
        {/* Left Side - Text */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 text-white font-space leading-snug animate-item"
          >
            Full-Stack <br className="hidden sm:block" /> Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg max-w-xl text-gray-400 mb-6 animate-item"
          >
            Full-stack Developer crafting modern, interactive web experiences. Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-5 py-2.5 bg-white text-black rounded hover:bg-gray-200 transition flex items-center gap-2 text-xs sm:text-sm animate-item"
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

        {/* Right Side - Image */}
        <div className="animate-item">
          <ProfileCard
            name="Salih V"
            title="Full-Stack Developer"
            handle="salihcodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/Adobe Express - file.png"
            iconUrl="/assets/code.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
}
