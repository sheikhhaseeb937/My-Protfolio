import React from "react";
import heroImg from "../../assets/developer-with-ai-generated-free-png.webp"; 
import { motion} from "framer-motion";
import { fadeIn } from "../../framermotion/variant.js";

export default function Home() {
    const openWhatsApp = () => {
const message = "Hello, I want to know more!";
const url = `https://wa.me/923150006458?text=${encodeURIComponent(message)}`;
window.open(url, "_blank");


  };
  return (
    <section className="bg-transparent  text-white py-12">
      <div className="max-w-7xl mt-[100px] mx-auto flex flex-col items-center justify-between md:flex-row px-[45px]">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          {/* <p className="ulg:text-2xl sm:text-xl  uppercase text-gray-400">MERN Stack Developer</p> */}
             <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        MERN Stack Developer
      </motion.h2>

            <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl md:text-5xl  font-bold text-yellow-400 leading-tight mt-2"
      >
       Muhammad  <br className="sm:hidden md:block" />
     Haseeb Sheikh
      </motion.h1>
        

              <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 text-[1.1rem] text-gray-200"
      >
        A Passionate Web Developer and Instructor  with 3 years of
        experience.
 
      </motion.p>
       <div className="mt-5">
                        <a
          onClick={openWhatsApp}
            href="#hire"
            className=" px-6 py-4  bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full text-black font-semibold hover:brightness-110 transition"
          >
            Hire Me →
          </a>
       </div>
          {/* <p className="mt-4 text-lg text-gray-200">
            A Passionate Web Developer and Instructor with 3 years of experience.
          </p> */}
        </div>

        {/* Image Section */}
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-end "
    >
           <div className="md:w-1/2">
          <img src={heroImg} alt="Hero" className="rounded-xl shadow-lg" />
        </div>
    </motion.div>

     
      </div>
    </section>
  );
}
