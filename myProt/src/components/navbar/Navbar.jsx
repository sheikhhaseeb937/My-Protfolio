import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const openWhatsApp = () => {
const message = "Hello, I want to know more!";
const url = `https://wa.me/923150006458?text=${encodeURIComponent(message)}`;
window.open(url, "_blank");


  };


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/30 shadow-md text-black'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Muhammad Haseeb Sheikh</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#about" className="hover:text-cyan-500 transition">About Me</a>
          <a href="#skills" className="hover:text-yellow-500 transition">Skills</a>
          <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
          <a
          onClick={openWhatsApp}
            href="#hire"
            className="px-4 py-2 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full text-black font-semibold hover:brightness-110 transition"
          >
            Hire Me →
          </a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-4 py-4 space-y-4 transition ${
            isScrolled ? 'backdrop-blur-md bg-white/30 text-black' : 'bg-black/80 text-white'
          }`}
        >
          <a href="#about" className="block hover:text-yellow-500">About Me</a>
          <a href="#skills" className="block hover:text-yellow-500">Skills</a>
          <a href="#projects" className="block hover:text-yellow-500">Projects</a>
          <a href="#contact" className="block hover:text-yellow-500">Contact</a>
          <a
            href="#hire"
            className="inline-block px-4 py-2 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full text-black font-semibold"
          >
            Hire Me →
          </a>
        </div>
      )}
    </nav>
  );
}
