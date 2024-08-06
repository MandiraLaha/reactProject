import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="bg-zinc-100">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".1"
        className="w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]"
      >
        <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[17vw] leading-none font=['Founders_Grotesk_X_Condensed'] uppercase font-bold pr-10"
          >
            WE ARE OCHI
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[17vw] leading-none font=['Founders_Grotesk_X_Condensed'] uppercase font-bold pr-10"
          >
            WE ARE OCHI
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
