import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import mall from './assets/mall.png';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { name: 'About Us', page: 'about' },
    { name: 'Our Services', page: 'ourservices' },
    { name: 'Book Tickets', page: 'booktickets' },
    { name: 'Contact Us', page: 'contact' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden z-10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex items-center gap-2 md:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                to={'/' + item.page}
                className="px-4 py-2 text-gray-800 hover:text-gray-600 font-semibold transition-all duration-300 text-sm md:text-base uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

       {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 h-screen bg-gray-900">
          <img 
            src={mall} 
            alt="Arnothaya Cinemax" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-8 leading-relaxed drop-shadow-lg">
              A Place Where Entertainment Comes Alive,
              <br />and Every Visit Becomes an Experience.
            </h1>
            
             <Link 
               to="/about"
               className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold transition-all duration-300 text-sm md:text-base uppercase tracking-widest"
             >
               About Us
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
