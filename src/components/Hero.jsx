import React, { useState } from "react";
import profile from "../assets/profile.png";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "./ui/SplitText";
import BlogSection from "./BlogSection";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Works from "./Work";
import Footer from "./Footer";
import HelpSection from "./HelpSection";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  let handleAnimationComplete = () => {
    console.log("this is atul singh");
  };

  return (
    <div>
      <section className="relative min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 bg-black text-white overflow-hidden">

        {/* Navbar */}
        <nav className="flex justify-between items-center relative z-50">
          <h1 className="text-lg font-semibold">
            <a href="/">
              <SplitText
                text="Atul Singh"
                className="text-xl sm:text-2xl lg:text-3xl cursor-pointer font-semibold text-center"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
                showCallback
              />
            </a>
          </h1>

          {/* Desktop Nav Links — lg and above, untouched */}
          <div className="hidden lg:flex items-center space-x-8 text-sm">
            <a href="#">
              <SplitText
                text="Works"
                className="text-xl font-semibold text-center"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
                showCallback
              />
            </a>
            <a href="#">
              <SplitText
                text="About"
                className="text-xl font-semibold text-center"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
                showCallback
              />
            </a>
            <a href={BlogSection}>
              <SplitText
                text="Projects"
                className="text-xl font-semibold text-center cursor-pointer"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
                showCallback
              />
            </a>
          </div>

          {/* Hamburger Icon — visible only on sm and md */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[2px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[2px] bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[2px] bg-white rounded-full origin-center"
            />
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-16 sm:top-20 left-0 w-full bg-black/95 backdrop-blur-sm border-b border-white/10 z-40 flex flex-col items-center gap-6 py-8"
            >
              {[
                { label: "Works", href: "#" },
                { label: "About", href: "#" },
                { label: "Projects", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl font-semibold tracking-wide hover:text-yellow-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small top text */}
        <div className="absolute top-16 sm:top-20 lg:top-24 left-1/2 -translate-x-1/2 text-xs text-gray-400 text-center whitespace-nowrap">
          Currently Web Developer <br /> at Ortix Studio
        </div>

        {/* Big Text + Image Section */}
        <div className="text-center mt-24 sm:mt-28 lg:mt-32 relative">

          {/* Background faded text */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[48px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-extrabold leading-none"
          >
            I'M A -------
          </motion.h1>

          {/* DEVELOPER text */}
          <motion.h1
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[52px] sm:text-[90px] md:text-[110px] lg:text-[150px] font-extrabold"
          >
            DEVE
            <span className="bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text text-transparent">
              LO
            </span>
            PER
          </motion.h1>

          {/* WEB floating text */}
          <span className="absolute right-[5%] sm:right-[15%] md:right-[22%] lg:right-[30%] top-[-20px] sm:top-[-30px] lg:top-[-40px] text-[48px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-extrabold bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
            <span></span>WEB
          </span>

          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="profile"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 top-10 h-[280px] sm:h-[380px] md:h-[480px] lg:h-130"
          />
        </div>

        {/* Left Description */}
        <div className="absolute bottom-16 sm:bottom-18 lg:bottom-20 left-4 sm:left-8 lg:left-16 text-gray-400 text-xs sm:text-sm">
          Specialized in Mern Stack,
          <br />
          Web App, and front
          <br />
          end Development.
        </div>

        {/* Get In Touch Button */}
        <button className="absolute bottom-12 sm:bottom-14 lg:bottom-16 right-4 sm:right-8 lg:right-16 bg-white font-semibold text-black px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-full flex items-center gap-2 hover:scale-105 transition">
          Get In Touch
          <span className="bg-yellow-400 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs">
            →
          </span>
        </button>
      </section>

      <Projects />
      <Contact />
      <BlogSection />
      <Skills />
      <HelpSection />
      <Works />
      <Footer />
    </div>
  );
};

export default Hero;
