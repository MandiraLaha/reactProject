import React from "react";

function About() {
  return (
    <div className="bg-zinc-100">
      <div className="w-full p-20 bg-[#CDEA68]  rounded-tl-2xl rounded-tr-2xl text-black ">
        <h1 className="font-['Neue_Montreal'] text-[3.8vw] leading-[4vw] traking-tight ">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
        <div className="w-full flex gap-5 border-t-[2px] pt-[2vw] mt-20 border-[#A5BC57]">
          <div className="w-1/2 ">
            <h1 className="text-6xl">Our approach:</h1>
            <button className="flex uppercase gap-10 items-center px-9 py-5 bg-zinc-900 mt-10 rounded-full text-white">
              READ MORE
              <div className="w-2.5 h-2.5 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-3xl">
            <div>
              <img
                className="w-full h-full bg-cover rounded-xl"
                src=" https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
