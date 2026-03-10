"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const skills = [
  "Java",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "REST APIs",
  "RBAC",
  "JWT Authentication",
  "Git & GitHub",
  "MongoDB"
  
];

const Skills = () => {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24">

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 tracking-wide"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.08 }}
            className="bg-zinc-900 border border-zinc-700 px-8 py-6 rounded-xl text-center text-lg font-semibold hover:border-white transition-all duration-300 shadow-lg"
          >
            {skill}
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Skills;