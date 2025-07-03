import { motion } from "framer-motion";
import ProfileCard from "../utils/PostCard";

export default function HeroSection() {
  const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
  <section className="h-screen flex flex-col justify-center items-center text-center px-4 snap-start relative">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 text-left">
          
          {/* Left Side - Text */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-4 text-white font-space"
            >
             Full-Stack
Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl max-w-xl text-gray-400 mb-6"
            >
              Full-stack Developer crafting modern, interactive web experiences. Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Right Side - Image */}
          <ProfileCard
            name="Salih V"
            title="Full-Stack Developer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/Adobe Express - file.png"
            iconUrl="/assets/code.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={scrollToContact}
          />
        </div>
      </section>
  );
}
