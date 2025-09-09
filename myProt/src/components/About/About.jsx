import React from "react";
import aboutImg from "../../assets/about-me.jpg"; 
import { fadeIn } from "../../framermotion/variant";
import { motion} from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-transparent mt-10 text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-10">
        
        {/* Text Section */}
         <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
         <div className="md:w-1/1">
          <h2 className="text-7xl font-bold text-yellow-400 mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm <span className="font-semibold">Muhammad Haseeb Sheikh</span>, a web developer instructor with a passion
            for teaching and coding. I specialize in React and front-end development,
            helping students build real-world projects and master modern web technologies.
            I love sharing knowledge and guiding aspiring developers toward successful careers.
            Outside of coding, I enjoy continuous learning and inspiring others to grow.
          </p>
          <button className="border border-yellow-500 text-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
            My Projects
          </button>
        </div>
      </motion.div>
       

        {/* Image Section */}
           
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
  <div className="md:w-[300px] flex justify-center">
          <div className="relative">
            <div className="absolute -left-4 top-4 w-full h-full bg-yellow-500 rounded-br-[100px] rounded-tl-[100px] -z-10"></div>
            <img
              src={aboutImg}
              alt="About section visual"
              className="rounded-br-[100px] rounded-tl-[100px] w-full h-full max-w-sm shadow-lg"
            />
          </div>
        </div>
      </motion.div>
       
      </div>
    </section>
  );
}
