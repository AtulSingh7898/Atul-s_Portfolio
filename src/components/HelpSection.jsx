"use client";

import { motion } from "framer-motion";

export default function HelpSection() {
  return (
    <section className="min-h-screen bg-[#c9c6c6ec] border-8 text-black font rounded-4xl border-black flex flex-col items-center justify-center px-6 py-20">

      {/* Title */}
      <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-extrabold mb-16"
            >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
             I can help <br /> you with
           </h2>
        </motion.h2>
      {/* Cards Container */}
      <div className="relative flex flex-col md:flex-row gap-6 items-center">

        {/* Center Arrow Circle */}
        {/* <div className="absolute z-20 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
          ↓
        </div> */}

        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -10 }}
          className="w-80 h-110 bg-black text-white rounded-3xl p-8 flex flex-col justify-between"
        >
          <span className="text-3xl opacity-20 font-bold">001</span>
          <div className="px-20 flex items-center justify-center">
            <h1 className="text-5xl font-bold">LET'S</h1>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Website <br /> Design
            </h3>

            <p className="text-sm opacity-70">
              Creating modern digital experiences that transform brands.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -10 }}
          className="w-80 h-110 bg-yellow-400 text-black rounded-3xl p-8 flex flex-col justify-between"
        >
          <span className="text-3xl opacity-30 font-bold">002</span>
          <div className="px-20 flex items-center justify-center">
            <h1 className="text-5xl font-bold">START</h1>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Branding <br /> Design
            </h3>

            <p className="text-sm opacity-70">
              Our collaboration here brings together elements.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -10 }}
          className="w-80 h-110 bg-[#e9dfd6] text-black rounded-3xl p-8 flex flex-col justify-between"
        >
          <span className="text-3xl opacity-30 font-bold">003</span>
          <div className="px-20 flex items-center justify-center">
            <h1 className="text-5xl font-bold">CREATE</h1>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Mobile <br /> App
            </h3>

            <p className="text-sm opacity-70">
              Our mobile design focuses on intuitive interfaces.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Bottom Section */}
      <div className="mt-24 w-full max-w-6xl flex justify-between items-end">

        <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-extrabold mb-16"
            >
            <h3 className="text-4xl md:text-5xl font-semibold">
             Clients <br /> Review
           </h3>
        </motion.h2>
        

        {/* <div className="flex gap-4">
        <button className="border-2 font-semibold text-xl rounded-full px-6 py-2">
            ←
          </button>
           <button className="border-2 rounded-full px-6 py-2">
            →
          </button>
        </div> */}
        <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" font-extrabold mb-16"
            >
            <div className="flex gap-4">
        <button className="border-2 font-semibold text-xl rounded-full px-6 py-2">
            ←
          </button>
           <button className="border-2 rounded-full px-6 py-2">
            →
          </button>
        </div>
        </motion.h2>

      </div>

    </section>
  );
}