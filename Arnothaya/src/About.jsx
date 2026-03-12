import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import entry from './assets/entry.png';
import move from './assets/move.png';
import found from './assets/found.png';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Our Services', page: 'ourservices' },
    { name: 'Book Tickets', page: 'booktickets' },
    { name: 'Contact Us', page: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-yellow-400 selection:text-black z-10 relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/90 backdrop-blur-sm">
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
      <div className="relative min-h-screen flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0 h-screen bg-gray-900">
          <img 
            src={entry} 
            alt="TSR Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-relaxed">
                Welcome to Arnothaya
              </h1>
              <p className="text-xl md:text-2xl font-light text-yellow-400 mb-12 leading-relaxed">
                Where Entertainment Meets Excellence
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                Experience the future of entertainment at Arnothaya - your premier destination for movies, gaming, dining, and shopping under one roof.
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Step into a world of cinematic excellence with our state-of-the-art multiplex, featuring 5 screens with 4K laser projection and Dolby Atmos sound. Indulge in thrilling gaming adventures, savor delicious cuisines from around the world, and explore a wide range of shopping options.
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                At Arnothaya, we believe in creating unforgettable experiences for every visitor. From the moment you enter, you'll be surrounded by world-class amenities, warm hospitality, and a vibrant atmosphere that makes every visit special.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Button - Bottom Center */}
        <div className="relative z-10 pb-8 flex justify-center">
          <button 
            onClick={() => {
              const statisticsSection = document.querySelector('.statistics-section');
              if (statisticsSection) {
                statisticsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-4 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll down"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics-section bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">2024</div>
              <div className="text-gray-800 font-semibold uppercase tracking-widest">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">5</div>
              <div className="text-gray-800 font-semibold uppercase tracking-widest">Screens</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">100+</div>
              <div className="text-gray-800 font-semibold uppercase tracking-widest">Shops</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">★★★★</div>
              <div className="text-gray-800 font-semibold uppercase tracking-widest">Experience</div>
            </div>
          </div>
        </div>
      </div>

       {/* About Content Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Welcome to Arnothaya</h2>
            <div className="h-1 w-24 bg-green-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
                <p>
                  Welcome to Arnothaya, a premier entertainment destination that embodies Comfort, Quality, and Care — Creating Memorable Stays and Dining Experiences Every Day. Our state-of-the-art complex offers an unparalleled blend of entertainment, dining, and relaxation under one roof.
                </p>
                <p>
                  At Arnothaya, we pride ourselves on delivering exceptional experiences through our premium cinema screens, thrilling gaming zones, diverse culinary offerings, and world-class amenities. Every visit is crafted with meticulous attention to detail, ensuring moments of joy and satisfaction for families, friends, and individuals alike.
                </p>
                <p>
                  Our commitment to excellence extends beyond entertainment — we strive to create lasting memories through warm hospitality, clean surroundings, and personalized service. Discover why Arnothaya is the preferred destination for those seeking quality time and unforgettable experiences.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src={move} 
                alt="Arnothaya Entertainment" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Our Founder</h2>
            <div className="h-1 w-24 bg-green-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src={found} 
                alt="Our Founder" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
                <h3 className="text-2xl font-bold text-green-700">Mr.A.M.Tamilselvan</h3>
                <p>
                  Arnothaya is the result of a vision to create a world-class entertainment destination that combines modern amenities with traditional hospitality. Our founder's passion for creating memorable experiences has been instrumental in shaping Arnothaya into what it is today.
                </p>
                <p>
                  Under his guidance, Arnothaya has become a hub for entertainment, offering state-of-the-art cinemas, gaming zones, dining options, and event spaces. The focus on quality, innovation, and customer satisfaction continues to drive our success and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Experience Arnothaya</h2>
            <div className="h-1 w-24 bg-green-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/7IfTRP3z1eY?si=sxOgbeyQtOLv0qE6"
                  title="Experience Arnothaya"
                  className="w-full h-96 rounded-lg shadow-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
              Discover the magic of Arnothaya through our video. Experience the excitement of our cinemas, the thrill of our gaming zones, and the warmth of our hospitality. 
              Arnothaya is more than just an entertainment destination - it's a place where memories are made.
            </p>
          </div>
        </div>
      </div>



      {/* Our Services Section */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Our Services</h2>
            <div className="h-1 w-24 bg-green-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
                <p>
                  At Arnothaya, we offer a comprehensive range of services designed to make your visit unforgettable. From world-class cinemas and exciting gaming zones to delicious dining options and luxurious amenities, we have everything you need for a perfect day out.
                </p>
                <p>
                  Our services include premium cinema experiences with 4K laser projection and Dolby Atmos sound, state-of-the-art gaming zones with the latest consoles and VR technology, a variety of dining options from fast food to fine dining, and much more.
                </p>
              </div>
              
              <div className="mt-12">
                <Link 
                  to="/ourservices"
                  className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold transition-all duration-300 text-sm md:text-base uppercase tracking-widest"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <h3 className="font-bold text-green-700">Cinema</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-2">🎮</div>
                  <h3 className="font-bold text-green-700">Gaming</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-2">🍔</div>
                  <h3 className="font-bold text-green-700">Dining</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-2">🛍️</div>
                  <h3 className="font-bold text-green-700">Shopping</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
