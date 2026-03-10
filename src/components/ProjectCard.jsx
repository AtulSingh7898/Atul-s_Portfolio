import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.5 }}
      className="bg-[#111] border border-gray-800 rounded-2xl p-8 cursor-pointer hover:border-yellow-400"
    >

      <h3 className="text-2xl font-bold mb-4">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-6">
        {project.desc}
      </p>

      <button className="text-yellow-400 font-semibold">
        View Project →
      </button>

    </motion.div>
  );
};

export default ProjectCard;