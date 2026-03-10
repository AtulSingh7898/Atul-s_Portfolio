"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
// import chintu from '../'

const works = [
    {
        id: "001",
        title: "Doctor Appointement Web",
        year: "2025–26",
        image: "/Chintu1.jpg",
    },
    {
        id: "002",
        title: "Next Framwork Design",
        year: "2025–26",
        image: "/chintu2.jpg",
    },
    {
        id: "003",
        title: "Amazing Backend Logic",
        year: "2025–26",
        image: "/chintu3.jpg",
    },
];

const Works = () => {
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.08,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <section className="bg-black text-white min-h-[120vh] px-10 py-32 relative">

            {/* Title */}
            <div className="flex justify-between items-center mb-24">

                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    <motion.h2
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-16 tracking-wide"
                    >
                        Selected <br /> Works
                    </motion.h2>

                </h2>

                 
                   <motion.h2
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-16 tracking-wide"
                    >
                    <button className="border border-zinc-700 px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
                  
                    View project
                    </button>
                    </motion.h2> 
                
            </div>

            {/* Works */}
            <div className="flex flex-col gap-16">

                {works.map((work, index) => (
                    <div
                        key={index}
                        className="relative border-b border-zinc-800 pb-10 cursor-pointer"
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >

                        {/* Hover Image */}
                        <AnimatePresence>
                            {hovered === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                    animate={{ opacity: 1, y: -40, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="absolute right-0 -top-24 z-20"
                                >
                                    <img
                                        src={work.image}
                                        className="w-56 h-36 object-cover rounded-xl shadow-2xl"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Row */}
                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-8">

                                <span className="text-zinc-500 text-sm">
                                    {work.id}
                                </span>

                                <motion.h3
                                    animate={{
                                        fontSize: hovered === index ? "3.4rem" : "3rem",
                                    }}
                                    transition={{ duration: 0.25 }}
                                    className="font-medium"
                                >
                                    {work.title}
                                </motion.h3>

                                <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">
                                    {work.year}
                                </span>

                            </div>

                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition">
                                →
                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Works;