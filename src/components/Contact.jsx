import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import DotGrid from "./ui/DotGrid";
import Carousel from "./ui/Carousel";

const Contact = () => {
    return (
        <section className="relative min-h-screen text-white px-4 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-20 lg:py-32 overflow-hidden">

            {/* BACKGROUND DOT GRID */}
            <div className="absolute inset-1 z-10">
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
            <div className="relative z-10 flex flex-col lg:flex-wrap lg:flex-row gap-8 lg:gap-10">

                {/* Left: Heading + Social Links */}
                <div className="max-w-6xl w-full flex ">
                    <div>
                        <h1 className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold leading-[1] lg:leading-[110px]">
                        <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
                            I'M
                        </span>

                        <br />
                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >AVAILABLE<br /></motion.h2>

                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4 }}
                        >FOR NEW <br /></motion.h2>

                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6 }}
                        >PROJECT</motion.h2>
                    </h1>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-5 sm:gap-8 lg:gap-10 mt-10 lg:mt-20 text-gray-300 text-sm sm:text-base">

                        {[
                            { label: "GitHub", href: "/" },
                            { label: "Leet Code", href: "/" },
                            { label: "LinkedIn", href: "/" },
                            { label: "Instagram", href: "/" },
                        ].map((item, i) => (
                            <motion.h2
                                key={item.label}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 + i * 0.1 }}
                            >
                                <a
                                    href={item.href}
                                    className="flex items-center gap-2 cursor-pointer hover:text-white transition"
                                >
                                    {item.label}<FiArrowUpRight />
                                </a>
                            </motion.h2>
                        ))}

                    </div>
                    </div>

                <div className="w-full lg:max-w-7xl flex items-center justify-center lg:ml-20 relative mt-8 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6 }}
                        className="flex items-center justify-center w-full"
                    >
                        <div className="h-[250px] sm:h-[250px] lg:h-[250px] min-w-80 p-4 flex items-center justify-center bg-red-600">
                            <Carousel
                                baseWidth={300}
                                autoplay={false}
                                autoplayDelay={3000}
                                pauseOnHover={false}
                                loop={false}
                                round={false}
                            />
                        </div>
                    </motion.div>
                </div>
                    
                </div>

                {/* Right: Carousel */}

            </div>

        </section>
    );
};

export default Contact;