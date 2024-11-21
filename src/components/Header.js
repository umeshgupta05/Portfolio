import React from 'react';
import $ from 'jquery';

const Header = () => {
  // jQuery smooth scroll
  const handleScroll = (id) => {
    $('html, body').animate(
      {
        scrollTop: $(id).offset().top,
      },
      1000
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <ul className="flex space-x-6">
          <li><button onClick={() => handleScroll('#home')}>Home</button></li>
          <li><button onClick={() => handleScroll('#about')}>About</button></li>
          <li><button onClick={() => handleScroll('#projects')}>Projects</button></li>
          <li><button onClick={() => handleScroll('#contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
