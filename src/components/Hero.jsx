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
    const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  speed: Math.random() * 0.3 + 0.1,
  opacity: Math.random() * 0.4 + 0.1,
}));

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `floatUp ${8 / p.speed}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}


  const [menuOpen, setMenuOpen] = useState(false);

  let handleAnimationComplete = () => {
    console.log("this is atul singh");
  };

  return (
    <div>
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: inherit; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes slideDown { from { opacity:0; transform: translateY(-20px); } to { opacity:1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity:0; transform: translateY(40px); } to { opacity:1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes scaleIn { from { opacity:0; transform: scale(0.8); } to { opacity:1; transform: scale(1); } }
        @keyframes ping { 75%,100% { transform: scale(2); opacity: 0; } }
        @keyframes drawCheck { to { stroke-dashoffset: 0; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes borderGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); } 50% { box-shadow: 0 0 20px 2px rgba(255,255,255,0.05); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        .stagger-1 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .stagger-2 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .stagger-3 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .stagger-4 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .stagger-5 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both; }
        .stagger-6 { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both; }
        .header-anim { animation: slideDown 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .input-field {
          width: 100%; background: transparent; outline: none; color: #fff;
          font-size: 1rem; font-family: 'Georgia', serif;
          padding: 0; border: none;
        }
        .input-field::placeholder { color: #444; }
        .input-field:-webkit-autofill { -webkit-text-fill-color: #fff; -webkit-box-shadow: 0 0 0px 1000px #000 inset; }
        .field-wrap {
          position: relative; border-bottom: 1px solid;
          padding: 20px 0 12px; transition: border-color 0.3s ease;
        }
        .field-wrap.idle { border-color: #222; }
        .field-wrap.focused { border-color: #555; }
        .field-wrap.valid { border-color: #22c55e44; }
        .field-wrap.error { border-color: #ef444444; }
        .field-line {
          position: absolute; bottom: -1px; left: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #fff, transparent);
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .submit-btn {
          position: relative; overflow: hidden;
          background: #fff; color: #000;
          border: none; cursor: pointer;
          font-family: 'Georgia', serif;
          font-size: 1rem; font-weight: 600;
          padding: 18px 48px; border-radius: 2px;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          letter-spacing: 0.05em;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(255,255,255,0.15); }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          color: #555; font-size: 0.8rem; letter-spacing: 0.15em;
          text-transform: uppercase; text-decoration: none;
          cursor: pointer; transition: color 0.3s ease;
          background: none; border: none; font-family: 'Georgia', serif;
        }
        .back-btn:hover { color: #fff; }
        .back-btn:hover .arrow { transform: translateX(-4px); }
        .arrow { transition: transform 0.3s ease; display: inline-block; }
        .label-float {
          position: absolute; top: 20px; left: 0;
          font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          pointer-events: none;
        }
        .label-float.up { top: 0; font-size: 0.65rem; color: #555; }
        .label-float.up.focused-lbl { color: #888; }
        .label-float.up.valid-lbl { color: #22c55e88; }
        .label-float.up.error-lbl { color: #ef444488; }
        .label-float.down { color: #333; }
        .error-msg { font-size: 0.7rem; letter-spacing: 0.1em; color: #ef4444aa; margin-top: 6px; animation: slideDown 0.2s ease; }
        .valid-icon { color: #22c55e88; font-size: 0.8rem; }
        .char-count { font-size: 0.65rem; letter-spacing: 0.1em; color: #333; text-align: right; margin-top: 4px; transition: color 0.3s; }
        .char-count.warn { color: #f59e0b88; }
        textarea.input-field { resize: none; min-height: 100px; line-height: 1.6; }
      `}</style>

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
            <a href="/about">
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
              <FloatingParticles/>
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
          <FloatingParticles/>
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
            className="absolute left-1/2 -translate-x-1/2 top-0 h-[280px] sm:h-[380px] md:h-[480px] lg:h-130"
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
          <a href="getintouch">Get In Touch</a>
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
      {/* <Footer /> */}
    </div>
  );
};

export default Hero;
