import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorCircle = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const move = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 80,
        y: position.y - 80
      }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed w-[160px] h-[160px] rounded-full bg-[#eae6df] text-black flex items-center justify-center pointer-events-none z-[9999]"
    >
      <div className="text-center font-semibold">
        ↗ <br />
        Let's Chat
      </div>
    </motion.div>
  );
};

export default CursorCircle;