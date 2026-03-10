import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import SplitText from "./ui/SplitText";
import BlogSection from "./BlogSection";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Works from "./Work";
import Footer from "./Footer";
import HelpSection from "./HelpSection";
// import ProjectCard from "./ProjectCard";


const Hero = () => {
    let handleAnimationComplete =()=>{
        console.log("this is atul singh")
    }
  return (
    <div>
    <section className="relative min-h-screen px-16 py-10 bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
            <a href="/"><SplitText
                text="Atul Singh"
                className="text-3xl cursor-pointer font-semibold text-center"
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
                /></a>
            </h1>

        <div className="space-x-8 text-sm">
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
                /></a>
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
      </nav>

      {/* Small top text */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-xs text-gray-400 text-center">
        Currently Web Developer <br /> at Ortix Studio
      </div>

      {/* Big Text */}
      <div className="text-center mt-32 relative">

        {/* <h1 className="text-[130px] font-extrabold opacity-10 leading-none">
            </h1> */}
        
            <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[130px] font-extrabold leading-none"
        >
          I'M A -------
        </motion.h1>
        

        {/* <h1 className="text-[150px] font-extrabold leading-none">
          DESI
          <span className="bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text text-transparent">
            GN
          </span>
          ER
        </h1> */}

        <motion.h1
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[150px] font-extrabold"
        >
          DEVE
          <span className="bg-gradient-to-r from-yellow-200 to-orange-400 bg-clip-text text-transparent">
            LO
          </span>
          PER

          
        </motion.h1>

        
        <span className="absolute right-[30%] top-[-40px] text-[130px] font-extrabold bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
           <span></span>WEB
        </span>

        {/* Profile Image */}
        {/* <img
          src={profile}
          alt="profile"
          className="absolute left-1/2 -translate-x-1/2 top-10 w-[320px]"
        /> */}

        <motion.img
          src={profile}
          alt="profile"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 top-10 h-130 "
        />
      </div>

      {/* Left Description */}
      <div className="absolute bottom-20 left-16 text-gray-400 text-sm">
        Specialized in Mern Stack,
        <br />
        Web App, and front
        <br />
        end Development.
      </div>

      {/* Chat Button */}
      <button className="absolute bottom-16 right-16 bg-white font-semibold text-black px-4 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition">
        Get In Toutch
        <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center">
          →
        </span>
      </button>
    </section>
    <Projects/>
     <Contact/>
     <BlogSection/>
     <Skills/>
     <HelpSection/>
     <Works/>
     <Footer/>
    </div>
  );
};

export default Hero;