import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

function Featured() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      className=" relative W-full py-20 bg-zinc-100 text-[#212121]"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-6xl ">Featured projects</h1>
      </div>
      <div className="px-20 bg-zinc-100">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[90vh] "
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] font-['Neue_Montreal'] font-semibold leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden pt-20">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              ></img>
            </div>
          </div>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[90vh] "
          >
            <h1 className="absolute flex  text-[#CDEA68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] font-['Neue_Montreal'] font-semibold leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "100%" } : { y: "0" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden pt-20">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
