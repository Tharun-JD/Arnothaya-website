import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import mall from './assets/mall.png';
import food from './assets/food.png';
import rest from './assets/rest.png';
import movie from './assets/move.png';
import playImg from './assets/Play.png';
import ticket from './assets/ticket.png';
import shop from './assets/shop.png';
import parking from './assets/parking.png';

function OurServices() {
  const [visible, setVisible] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(function() {
    setVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const scrollLeft = function() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = function() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  useEffect(function() {
    setVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home', icon: '🏠' },
    { name: 'About', page: 'about', icon: 'ℹ️' },
    { name: 'Cinema', page: 'cinema', icon: '🎬' },
    { name: 'Book Ticket', page: 'book', icon: '🎟️' },
    { name: 'Location', page: 'location', icon: '📍' },
    { name: 'Contact Us', page: 'contact', icon: '📞' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm py-2">
        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {navItems.map(function(item, index) {
              return (
                <Link 
                  key={item.page}
                  to={'/' + item.page}
                  className="px-4 py-2 bg-transparent text-white hover:text-yellow-400 font-semibold rounded-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
                  style={{ animation: visible ? 'fadeIn 0.5s ease-out ' + (index * 0.1) + 's both' : 'none' }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div 
        className="min-h-[50vh] pt-20"
        style={{
          backgroundImage: 'url(' + mall + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-black/60 min-h-[20vh] pt-15 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-6xl font-bold text-center mb-4"
              style={{ animation: visible ? 'bounceIn 0.8s ease-out' : 'none', color: '#FFD700' }}
            >
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
              Welcome to Arnothaya Cinemax - Your Premier Entertainment Destination in Palladam. 
              Experience the perfect blend of cinema, dining, shopping, and fun all under one roof.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8">Our Services</h2>
          {/* Container with Navigation Buttons on sides */}
          <div className="relative">
            {/* Left Navigation Button */}
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Navigation Button */}
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Horizontal Scrolling Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide mx-8 mt-8 px-2"
              style={{ 
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch'
              }}
            >
            <div 
              className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:shadow-yellow-400/50 hover:bg-gray-800/95 transition-all duration-300 transform hover:scale-110 flex-shrink-0 w-[350px] h-[500px] flex flex-col items-center justify-start"
              style={{ animation: visible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none' }}
            >
              <div 
                className="mb-15 rounded-2xl overflow-hidden shrink-0 w-full"
                style={{
                  backgroundImage: 'url(' + movie + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '16px'
                }}
              />
              <h3 className="text-xl font-bold mb-2 text-yellow-400 text-center">Premium Cinema Experience</h3>
              <p className="text-gray-300 leading-relaxed text-center text-sm">
                Experience movies in state-of-the-art digital projection with surround sound technology. 
                Our theatres offer comfortable seating and immersive audio-visual quality.
              </p>
            </div>

            <div 
              className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:shadow-yellow-400/50 hover:bg-gray-800/95 transition-all duration-300 transform hover:scale-110 flex-shrink-0 w-[350px] h-[500px] flex flex-col items-center justify-start group"
              style={{ animation: visible ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none' }}
            >
              <div 
                className="mb-15 rounded-2xl overflow-hidden flex-shrink-0 w-full"
                style={{
                  backgroundImage: 'url(' + ticket + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '16px'
                }}
              />
              <h3 className="text-xl font-bold mb-2 text-yellow-400 text-center">Online Ticket Booking</h3>
              <p className="text-gray-300 leading-relaxed text-center text-sm">
                Book your favorite movie tickets conveniently through our online platform via your Phone also. 
                Choose your preferred showtime and seats.
              </p>
            </div>

            <div 
              className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:shadow-yellow-400/50 hover:bg-gray-800/95 transition-all duration-300 transform hover:scale-110 flex-shrink-0 w-[350px] h-[500px] flex flex-col items-center justify-start group"
              style={{ animation: visible ? 'fadeInUp 0.6s ease-out 0.4s both' : 'none' }}
            >
              <div 
                className="mb-15 rounded-2xl overflow-hidden flex-shrink-0 w-full"
                style={{
                  backgroundImage: 'url(' + food + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '16px'
                }}
              />
              <h3 className="text-xl font-bold mb-2 text-yellow-400 text-center">Food Court</h3>
              <p className="text-gray-300 leading-relaxed text-center text-sm mb-4">
                Our multi-cuisine food court offers a delightful variety of Indian and international dishes.
              </p>
              <div className="bg-black p-10 rounded-2xl opacity-0 group-hover:opacity-200 transition-opacity duration-300 absolute bottom-4 left-4 right-4">
                <h4 className="text-yellow-300 font-semibold mb-2">Dining Options:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>* South Indian Specialties</li>
                  <li>* North Indian Cuisine</li>
                  <li>* Chinese and Continental</li>
                  <li>* Fast Food and Beverages</li>
                  <li>* Ice Cream and Desserts</li>
                </ul>
              </div>
            </div>

            <div 
              className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:shadow-yellow-400/50 hover:bg-gray-800/95 transition-all duration-300 transform hover:scale-110 flex-shrink-0 w-[350px] h-[500px] flex flex-col items-center justify-start group relative"
              style={{ animation: visible ? 'fadeInUp 0.6s ease-out 0.45s both' : 'none' }}
            >
              <div 
                className="mb-4 rounded-2xl overflow-hidden shrink-0 w-full"
                style={{
                  backgroundImage: 'url(' + rest + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '16px'
                }}
              />
              <h3 className="text-xl font-bold mt-11 mb-2 text-yellow-400 text-center">Rest Area</h3>
              <p className="text-gray-300 leading-relaxed text-center text-sm mb-2">
                Relax and unwind in our comfortable rest areas designed for visitors.
              </p>
              <div className="bg-black p-12 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-4 right-4">
                <h4 className="text-yellow-300 font-semibold mb-2">Rest Area Features:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>* Comfortable Seating</li>
                  <li>* Air Conditioned Spaces</li>
                  <li>* Quiet Zones</li>
                  <li>* Charging Points</li>
                  <li>* Clean Restrooms</li>
                </ul>
              </div>
            </div>

            <div 
              className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:shadow-yellow-400/50 hover:bg-gray-800/95 transition-all duration-300 transform hover:scale-110 flex-shrink-0 w-[350px] h-[500px] flex flex-col items-center justify-start group relative"
              style={{ animation: visible ? 'fadeInUp 0.6s ease-out 0.5s both' : 'none' }}
            >
              <div 
                className="mb-4 rounded-2xl overflow-hidden shrink-0 w-full"
                style={{
                  backgroundImage: 'url(' + playImg + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '16px'
                }}
              />
              <h3 className="text-xl font-bold mt-11 mb-2 text-yellow-400 text-center">Play Area</h3>
              <p className="text-gray-300 leading-relaxed text-center text-sm mb-4">
                An exciting entertainment zone for children and families.
              </p>
              <div className="bg-black p-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-4 right-4">
                <h4 className="text-yellow-300 font-semibold mb-2">Fun Activities:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>* Latest Arcade Games</li>
                  <li>* Virtual Reality Experiences</li>
                  <li>* Kids Play Zone</li>
                  <li>* Family Gaming Area</li>
                  <li>* Supervised Activities</li>
                </ul>
              </div>
            </div>

            <div 
              className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:shadow-yellow-400/50 hover:bg-gray-800/95 transition-all duration-300 transform hover:scale-110 flex-shrink-0 w-[350px] h-[500px] flex flex-col items-center justify-start group relative"
              style={{ animation: visible ? 'fadeInUp 0.6s ease-out 0.6s both' : 'none' }}
            >
              <div 
                className="mb-4 rounded-2xl overflow-hidden shrink-0 w-full"
                style={{
                  backgroundImage: 'url(' + shop + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '16px'
                }}
              />
              <h3 className="text-xl font-bold mt-11 mb-2 text-yellow-400 text-center">Shopping Area</h3>
              <p className="text-gray-300 leading-relaxed text-center text-sm mb-4">
                Explore a wide range of retail stores offering various products.
              </p>
              <div className="bg-black p-11 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-4 right-4">
                <h4 className="text-yellow-300 font-semibold mb-2">Shop Categories:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>* Fashion and Clothing</li>
                  <li>* Electronics and Gadgets</li>
                  <li>* Beauty and Cosmetics</li>
                  <li>* Footwear and Accessories</li>
                  <li>* Home and Lifestyle</li>
                </ul>
              </div>
            </div>

            <div 
              className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:shadow-yellow-400/50 hover:bg-gray-800/95 transition-all duration-300 transform hover:scale-110 flex-shrink-0 w-[350px] h-[500px] flex flex-col items-center justify-start"
              style={{ animation: visible ? 'fadeInUp 0.6s ease-out 0.7s both' : 'none' }}
            >
              <div 
                className="mb-4 rounded-2xl overflow-hidden shrink-0 w-full"
                style={{
                  backgroundImage: 'url(' + parking + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '16px'
                }}
              />
              <div className="flex flex-col items-center justify-center flex-1 w-full">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-yellow-400">Free Parking Available</h3>
                  <p className="text-gray-300 mt-2 text-sm">
                    Convenient and secure parking facilities available for all visitors completely FREE of cost. 
                    Easy access to the cinema and mall entrance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/cinema" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Book Your Tickets Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default OurServices;
