import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".-3"
      className="w-full h-screen bg-zinc-100 text-[#212121] pt-1"
    >
      <div className="textStructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end ">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  >
                    <img
                      className=" mr-[1vw] w-[7.5vw] rounded-md h-[5vw]  relative -top-[1.5vw] "
                      src="https://www.clipartbest.com/cliparts/pT5/Xod/pT5Xodbqc.jpg"
                    ></img>
                  </motion.div>
                )}
                <h1 className=" pt-[-2vw] -mb-[1vw] uppercase text-[7.5vw]  leading-[7vw]  font-['Founders_Grotesk_X_Condensed'] font-bold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex font-['Neue_Montreal'] font-lighter justify-between items-center py-5 px-20 text-lg">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[2px] border-zinc-700 font-light text-md capitalize rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-700 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
