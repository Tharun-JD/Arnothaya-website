import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

function Location() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar - Faded Black Background with Golden Border */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm py-2 border-b-2 border-yellow-500">
        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link to="/home" className="px-3 py-1 text-sm bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <span>🏠</span><span>Home</span>
            </Link>
            <Link to="/about" className="px-3 py-1 text-sm bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <span>ℹ️</span><span>About</span>
            </Link>
            <Link to="/cinema" className="px-3 py-1 text-sm bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <span>🎬</span><span>Cinema</span>
            </Link>
            <Link to="/location" className="px-3 py-1 text-sm bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <span>📍</span><span>Location</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Location Content */}
      <div className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">Our Location</h1>
          <div className="bg-gray-900/80 p-8 rounded-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Arnothaya Mall</h2>
              <p className="text-xl text-gray-300 mb-2">123 Cinema Street</p>
              <p className="text-xl text-gray-300 mb-2"> Entertainment District</p>
              <p className="text-xl text-gray-300 mb-6">City - 123456</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
              <p className="text-gray-400">Email: info@arnothaya.com</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Link to="/cinema" className="px-6 py-3 bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-110">
                View Cinemas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
