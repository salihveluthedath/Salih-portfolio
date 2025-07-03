"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-center px-6 py-4 transition backdrop-blur-md ${
          scrolled ? "bg-black/40" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl w-full flex justify-between items-center text-sm text-gray-300 uppercase">
          {/* Centered Links for Desktop */}
          <div className="hidden md:flex gap-8 mx-auto">
            <Link href="#about" className="hover:text-white transition">About</Link>
            <Link href="#projects" className="hover:text-white transition">Projects</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <HiMenu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="absolute top-6 right-6 text-white">
            <HiX className="w-7 h-7" />
          </button>
          <div className="flex flex-col gap-8 text-xl text-gray-300 uppercase">
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition">About</Link>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition">Projects</Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
