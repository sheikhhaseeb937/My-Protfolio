import React from 'react'
import reactimg from '../../assets/react.svg'
import jsimg from '../../assets/js.jpg'
import expressimg from '../../assets/expressjs.svg'
import githubimg from '../../assets/github.svg'
import nodejsimg from '../../assets/nodejs.svg'
import supabaseimg from '../../assets/supabase.svg'
import tailwindimg from '../../assets/tailwindcss.svg'
import mongodbimg from '../../assets/mongodb.svg'
import typescriptImg from '../../assets/tsimg.png'
import muiImg from '../../assets/muiImg.png'
import svgarrow from '../../assets/move-right.svg'
import { fadeIn } from '../../framermotion/variant'
import { motion} from "framer-motion";

const Skill = () => {
  const skillItem = [
    {
      imgSrc: jsimg,
      label: 'JavaScript',
      desc: 'JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic content on websites.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      imgSrc: reactimg,
      label: 'React.js',
      desc: 'React.js is a JavaScript library for building fast, interactive UIs using a component-based architecture.',
      url: 'https://reactjs.org/',
    },
    {
      imgSrc: expressimg,
      label: 'Express.js',
      desc: 'Express.js is a minimal and flexible Node.js web application framework for building APIs and web apps.',
      url: 'https://expressjs.com/',
    },
    {
      imgSrc: nodejsimg,
      label: 'Node.js',
      desc: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine, designed for building scalable network applications.',
      url: 'https://nodejs.org/',
    },
    {
      imgSrc: githubimg,
      label: 'GitHub',
      desc: 'GitHub is a platform for version control and collaboration, allowing developers to manage and share code.',
      url: 'https://github.com/',
    },
    {
      imgSrc: tailwindimg,
      label: 'Tailwind CSS',
      desc: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
      url: 'https://tailwindcss.com/',
    },
    {
      imgSrc: mongodbimg,
      label: 'MongoDB',
      desc: 'MongoDB is a NoSQL document database designed for scalability and developer agility.',
      url: 'https://www.mongodb.com/',
    },
    
    {
      imgSrc: supabaseimg,
      label: 'Supabase',
      desc: 'Supabase is an open-source Firebase alternative providing a backend with authentication, database, and storage.',
      url: 'https://supabase.com/',
    },
        {
      imgSrc: typescriptImg,
      label: 'Supabase',
      desc: 'Supabase is an open-source Firebase alternative providing a backend with authentication, database, and storage.',
      url: 'https://supabase.com/',
    },
        {
      imgSrc: muiImg,
      label: 'Supabase',
      desc: 'Supabase is an open-source Firebase alternative providing a backend with authentication, database, and storage.',
      url: 'https://supabase.com/',
    },
  ];

  return (
    <div className="py-10 px-4 md:px-20 bg-transparent">
      <h2 className="text-4xl md:text-6xl mb-10 text-center font-bold text-yellow-500">My Skills</h2>
      <p className="text-lg text-center px-2 md:px-20 mb-12 text-white">
        I not only work with these technologies but also excel in using them with best practices to deliver high-quality results.
      </p>
 <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
      <div className="grid gap-6 md:grid-cols-2">
        {skillItem.map((item, index) => (
          <div key={index} className="bg-black bg-opacity-30 hover:bg-opacity-50 transition rounded-2xl p-6 flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img className="w-full h-full object-contain" src={item.imgSrc} alt={item.label} />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">{item.label}</h3>
              <p className="text-sm">{item.desc}</p>
             
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mt-2 inline-block">
                <img src={svgarrow} className='text-white' alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  )
}

export default Skill
