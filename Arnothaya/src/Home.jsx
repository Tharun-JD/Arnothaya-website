import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import mall from './assets/mall.png';

function Home() {
  const [visible, setVisible] = useState(false);
  const [showBottomContent, setShowBottomContent] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
    // Refresh page on mount
    window.scrollTo(0, 0);
  }, []);

  const handleExploreClick = () => {
    navigate('/about');
  };

  const navItems = [
    { name: 'Home', page: 'home', icon: '🏠' },
    { name: 'About', page: 'about', icon: 'ℹ️' },
    { name: 'Cinema', page: 'cinema', icon: '🎬' },
    { name: 'Book Ticket', page: 'book', icon: '🎟️' },
    { name: 'Location', page: 'location', icon: '📍' },
    { name: 'Contact Us', page: 'contact', icon: '📞' }
  ];

  return (
    <div 
      className="min-h-screen bg-black"
      style={{
        backgroundImage: `url(${mall})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Navigation Bar - Transparent without border */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm py-2">
        <div className="px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Buttons - No border, gold text on hover */}
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

      {/* Hero Section - With Colored Text and Animations
      <div className={`flex flex-col items-center justify-center min-h-screen text-center px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 
          className="text-5xl md:text-7xl font-bold text-red-500 mb-4 drop-shadow-lg"
          style={{ animation: 'bounceIn 1s ease-out' }}
        >
          Welcome to Arnothaya
        </h1>
        <p 
          className="text-xl md:text-2xl text-yellow-400 mb-8 drop-shadow-md"
          style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}
        >
          Experience the best cinema and entertainment
        </p>
        <p 
          className="text-lg md:text-xl text-white/80 max-w-2xl"
          style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}
        >
          Your premier destination for blockbuster movies, premium viewing experience, and unforgettable moments
        </p>
      </div> */}

      {/* Bottom Left Content - Slide Up Animation */}
      {showBottomContent && (
        <div 
          className={`absolute bottom-20 left-4 md:left-10 max-w-xl lg:max-w-2xl transition-all duration-700 ${isExiting ? 'slideOutDown' : 'slideInUp'}`}
          style={{ animationDelay: '1s' }}
        >
          <div className="bg-black/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
              Welcome to Arnothaya
            </h2>
            <p className="text-yellow-400 text-2xl mb-4">
              Experience the best cinema and entertainment
            </p>
            <p className="text-white/90 text-xl mb-6">
              Your premier destination for blockbuster movies, premium viewing experience, and unforgettable moments
            </p>
            <button 
              onClick={handleExploreClick}
              className="flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
            >
              <span>Explore More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-4 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-2 h-3 bg-white rounded-full"></div>
        </div>
      </div> */}

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
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideOutDown {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(50px); }
        }
        .slideInUp {
          animation: slideInUp 0.7s ease-out forwards;
        }
        .slideOutDown {
          animation: slideOutDown 0.5s ease-in forwards;
        }
      `}</style>
    </div>
  );
}

export default Home;
