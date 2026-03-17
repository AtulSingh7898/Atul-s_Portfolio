import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
const blogs = [
  {
    id: "01",
    title: "2022 Design trend crafting minimalist web Started",
    time: "10 min read",
    img: "/blog1.jpg",
    link:"https://food-order-site-r122hl1dq-atul-kumar-manihars-projects.vercel.app/"
  },
  {
    id: "02",
    title: "Concept to crafting your webflow portfolio 7-day guide",
    time: "10 min read",
    img: "/blog2.jpg",
    link:"https://divine-fragrance-perfume.vercel.app/"
  },
  {
    id: "03",
    title: "2026 design trend crafting minimalist web experiences",
    time: "10 min read",
    img: "/blog3.jpg",
    link:"https://doctor-appointments-n8qgl6bh2-atul-kumar-manihars-projects.vercel.app/"
  },
  {
    id: "04",
    title: "Design insights into web design & Development",
    time: "10 min read",
    img: "/blog4.png",
    link:"https://github.com/AtulSingh7898/Spott"
  }
];

const BlogSection = () => {
  return (
    <section className="bg-[#f4f4f4] py-20 px-6 md:px-20 rounded-3xl">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-6">
        
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            // className="text-6xl font-extrabold mb-16"
            >My Project & <br /> Articles</motion.h2>
          
        </h1>

        <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            // className="text-6xl font-extrabold mb-16"
            > Our multidisciplinary team brings together diverse talents,
          allowing us to approach projects with a holistic perspective
          that fuses creativity and functionality.</motion.h2>
         
        </p>

      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {blogs.map((blog, index) => (

             <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            // className="text-6xl font-extrabold mb-16"
            >

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >

            {/* Image */}
            <div className="h-[220px] w-full overflow-hidden">
              <img
                src={blog.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <div className="flex justify-between text-xs text-gray-400 mb-4">
                <span>{blog.id}</span>
                <span>{blog.time}</span>
              </div>

              <div className="flex items-center justify-between gap-4">

                <h3 className="text-sm md:text-base font-semibold text-black leading-snug">
                  {blog.title}
                </h3>
                <a href={blog.link}>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                  <FiArrowUpRight />
                </button>
                </a>

              </div>

            </div>

          </div>
          </motion.h2>
        ))}

      </div>

    </section>
  );
};

export default BlogSection;