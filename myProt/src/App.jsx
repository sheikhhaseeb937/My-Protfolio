import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Skill from './components/Skill/Skill.jsx'
import Project from './components/Project/Project.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import Footer from './components/Footer/Footer.jsx'
// import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
<div className=' bg-gradient-to-r from-teal-700 to-yellow-700 min-h-screen'>
  <Navbar />
  <Home/>
  <About />
  <Skill/>
  <Project/>
  <Contactus />
  <Footer/>
  {/* <Footer/> */}
</div>
  )
}

export default App
