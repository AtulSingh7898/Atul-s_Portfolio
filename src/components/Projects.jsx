import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const projects = [
    {
      title: "AI Chat App",
      desc: "Chat application using Gemini API with real-time responses."
    },
    {
      title: "Mentemnt",
      desc: "Modern developer portfolio with animations and responsive UI."
    },
    {
      title: "Fregrance",
      desc: "Perfumen for the Piece of World."
    },
    {
      title: "String Steck",
      desc: "Fullstack MERN task management system."
    },
    {
      title: "Grilly Restro",
      desc: "Restro. App Of Primium."
    },
    {
      title: "Fixint Movies",
      desc: "Large Movie ecosystem."
    }
  ];

  return (
    <section className="min-h-screen px-20 py-32 bg-black">

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold mb-16"
      >
        Selected Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;