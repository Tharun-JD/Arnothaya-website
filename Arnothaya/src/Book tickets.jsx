import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import head from './assets/head.png';

function BookTickets() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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

  const movies = [
    { title: 'Latest Blockbuster', time: '10:00 AM', price: 250 },
    { title: 'Action Adventure', time: '1:00 PM', price: 250 },
    { title: 'Comedy Special', time: '4:00 PM', price: 200 },
    { title: 'Horror Night', time: '7:00 PM', price: 200 },
    { title: 'Romantic Drama', time: '10:00 PM', price: 250 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm py-2">
        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {navItems.map((item, index) => (
              <Link 
                key={item.page}
                to={'/' + item.page}
                className="px-4 py-2 bg-transparent text-white hover:text-yellow-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
                style={{ 
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[300px] mt-12 overflow-hidden">
        <img 
          src={head} 
          alt="Book Tickets" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ animation: 'bounceIn 0.8s ease-out', color: '#ef4444' }}
            >
              Book Your Movie Tickets
            </h1>
            <p className="text-xl text-gray-200">Select a movie and showtime to book your tickets</p>
          </div>
        </div>
      </div>

      {/* Movie Selection */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Now Showing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie, index) => (
              <div 
                key={index} 
                className="bg-gray-900/80 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                <h3 className="text-2xl font-bold mb-2 text-red-500">{movie.title}</h3>
                <p className="text-gray-400 mb-2">Show Time: {movie.time}</p>
                <p className="text-gray-400 mb-4">Price: ₹{movie.price}</p>
                <button className="w-full px-4 py-2 bg-red-600 text-white hover:bg-red-700 font-semibold rounded-lg transition-all duration-300">
                  Book Now
                </button>
              </div>
            ))}
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
      `}</style>
    </div>
  );
}

export default BookTickets;
