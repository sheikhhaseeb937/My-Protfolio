import React from 'react';
import img1 from '../../assets/loan.webp';
import img2 from '../../assets/ticTakToe.jpeg';
import img3 from '../../assets/stranger.jpg';
import img4 from '../../assets/todo.webp';
import img5 from '../../assets/weather.jpg';
import img6 from '../../assets/quaiz.jpg';
import img7 from '../../assets/employee_management_system-500x500.webp';
import img8 from '../../assets/goods.jpg';

import arrowup from '../../assets/move-up-right.svg';
import { motion} from "framer-motion";
import { fadeIn } from '../../framermotion/variant';

const Project = () => {

  const projectItem = [
    {
      
      imgSrc: img7,
      label: 'Employment Management System',
      url: 'https://empolyement-mangement-frontend-git-main-haseeb-sheikh.vercel.app/',
    },
       {
      
      imgSrc: img8,
      label: 'E-commerce',
      url: 'https://leather-goods-sb-sflw.vercel.app/',
    },
    {
      
      imgSrc: img1,
      label: 'Loan Management System',
      url: 'https://loan-app-fullstact-2g9q.vercel.app/',
    },
        {
      imgSrc: img4,
      label: 'Todo App',
      url: 'https://todo-advance-beta.vercel.app/',
    },
    {
      imgSrc: img2,
      label: 'tic-tac-toe',
      url: 'https://sheikhhaseeb937.github.io/tik-tac-to-game-js/',
    },
    {
      imgSrc: img3,
      label: 'The Stranger Clone',
      url: 'https://sheikhhaseeb937.github.io/StrangerClone/',
    },

    {
      imgSrc: img5,
      label: 'Weather App',
      url: 'https://luminous-zabaione-cebcad.netlify.app/',
    },
     {
      imgSrc: img6,
      label: 'Quzi App',
      url: 'https://sheikhhaseeb937.github.io/QuziApp//',
    },
  ];

  return (
    <div className="py-16 px-4 md:px-12 bg-transparent">
      <h2 className="text-4xl md:text-6xl mb-10 text-center font-bold text-yellow-500">My Projects</h2>
      <p className="text-lg text-center px-2 md:px-20 mb-12 text-white">
        I have worked on a variety of web development projects, ranging from responsive websites for small businesses to full-stack applications and complex front-end interfaces.
      </p>
  <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
      {/* Grid Container */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projectItem.map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-40  rounded-3xl w-[90%] sm:w-[300px] hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="h-[200px] w-full overflow-hidden rounded-t-3xl">
              <img
                src={item.imgSrc}
                alt={item.label}
                className="w-full h-full object-fill"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center text-white text-center p-4">
              <h1 className="font-bold text-xl mb-2">{item.label}</h1>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-[100px] h-[45px] bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition"
              >
                View
                <img
                  src={arrowup}
                  className="w-6 h-6 p-1 bg-black bg-opacity-30 rounded-full"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default Project;
