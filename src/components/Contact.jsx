import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import DotGrid from "./ui/DotGrid";
import Carousel from "./ui/Carousel";

const Contact = () => {
    return (
        <section className="relative min-h-screen text-white px-20 py-32 overflow-hidden">

            {/* BACKGROUND DOT GRID */}
            <div className="absolute  inset-1 z-10">
                <DotGrid
                    dotSize={5}
                    gap={15}
                    baseColor="#271E37"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-wrap gap-10">

                <div className="max-w-6xl">
                    <h1 className="text-[120px] font-extrabold leading-[110px]">
                        <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
                            I'M
                        </span>

                        <br />
                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        // className="text-6xl font-extrabold mb-16"
                        >AVAILABLE<br /></motion.h2>


                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4 }}
                        // className="text-6xl font-extrabold mb-16"
                        >FOR NEW <br /></motion.h2>

                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6 }}
                        // className="text-6xl font-extrabold mb-16"
                        >PROJECT</motion.h2>


                    </h1>

                    {/* Social Links */}
                    <div className="flex gap-10 mt-20 text-gray-300">

                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        // className="text-6xl font-extrabold mb-16"
                        >
                            <a href="/" className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                                GitHub<FiArrowUpRight />
                            </a>
                        </motion.h2>

                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        // className="text-6xl font-extrabold mb-16"
                        >
                            <a href="/" className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                                Leet Code <FiArrowUpRight />
                            </a>
                        </motion.h2>



                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        // className="text-6xl font-extrabold mb-16"
                        >
                            <a href="/" className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                                LinkedIn <FiArrowUpRight />
                            </a>
                        </motion.h2>

                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        // className="text-6xl font-extrabold mb-16"
                        >
                            <a href="/" className="flex items-center gap-2 cursor-pointer hover:text-white transition">
                                Instagram <FiArrowUpRight />
                            </a>
                        </motion.h2>



                    </div>
                </div>

                <div className="max-w-7xl flex items-center justify-center ml-20 relative">
                    <div className="">
                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6 }}
                         className="text-6xl font-extrabold mt-30 flex items-center justify-center"
                        >

                            <div className="h-[600px]">
                                <Carousel
                                    baseWidth={300}
                                    autoplay={false}
                                    autoplayDelay={3000}
                                    pauseOnHover={false}
                                    loop={false}
                                    round={false}
                                />
                            </div>

                        </motion.h2>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Contact;