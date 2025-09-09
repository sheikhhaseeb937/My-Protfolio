
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-[100px] backdrop-blur-md bg-white/30 shadow-md text-black text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Bas. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
