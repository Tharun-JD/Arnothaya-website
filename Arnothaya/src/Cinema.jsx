import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './new_assets/logo.png';
import mov from './new_assets/mov.png';

// SVG Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const TicketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
  </svg>
);

const ScreenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="15" x="2" y="4" rx="2" ry="2"></rect>
    <path d="m10 9 5 3-5 3Z"></path>
  </svg>
);

const SoundIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-9 9 9 9"></path>
    <path d="M14 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
    <path d="M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
  </svg>
);

const ProjectorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18V6"></path>
    <path d="M4 6h16v12H4z"></path>
    <circle cx="10" cy="12" r="2"></circle>
    <path d="M20 6v3"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4"></path>
    <path d="M16 2v4"></path>
    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
    <path d="M3 10h18"></path>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

// Movie Card Component
function MovieCard({ movie, index }) {
  const firstLetter = movie.title.charAt(0).toUpperCase();
  return (
    <div 
      className="glass-card overflow-hidden group cursor-pointer animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-80 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1a2a4a] to-[#0a1628]">
        <div className="text-9xl font-bold text-[#d4af37] opacity-80 group-hover:scale-110 transition-transform duration-500">
          {firstLetter}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 px-3 py-1 bg-[#d4af37]/90 text-[#0a1628] text-xs font-bold rounded-full">
          {movie.rating}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            to="/booktickets"
            className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm rounded-xl shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transform hover:scale-105 transition-all"
          >
            Book Ticket
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors truncate">
          {movie.title}
        </h3>
        <div className="flex items-center gap-3 text-white/50 text-sm mb-3">
          <span className="flex items-center gap-1">
            <CalendarIcon />
            {movie.releaseDate}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre, i) => (
            <span key={i} className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-full">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, index }) {
  return (
    <div 
      className="glass-card text-center p-8 group animate-slide-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 rounded-full flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}

function Cinema() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Stores', page: 'stores' },
    { name: 'Cinema', page: 'cinema' },
    { name: 'Dining', page: 'dining' },
    { name: 'Entertainment', page: 'entertainment' },
    { name: 'Offers', page: 'offers' },
    { name: 'Contact', page: 'contact' }
  ];

  const features = [
    { 
      icon: <ScreenIcon />, 
      title: '6 State-of-the-Art Screens', 
      description: 'Experience movies on our ultra-wide screens with the latest projection technology' 
    },
    { 
      icon: <SoundIcon />, 
      title: 'Dolby Atmos Immersive Sound', 
      description: '360-degree surround sound that puts you inside the movie' 
    },
    { 
      icon: <ProjectorIcon />, 
      title: '4K Laser Projection', 
      description: 'Crystal clear visuals with laser-sharp brightness and contrast' 
    },
  ];

  const movies = [
    { 
      title: 'Cosmic Odyssey', 
      poster: mov, 
      rating: '9.2', 
      releaseDate: 'Mar 2026',
      genres: ['Sci-Fi', 'Adventure', 'Action'] 
    },
    { 
      title: 'The Last Kingdom', 
      poster: mov, 
      rating: '8.8', 
      releaseDate: 'Mar 2026',
      genres: ['Drama', 'History', 'War'] 
    },
    { 
      title: 'Midnight Dreams', 
      poster: mov, 
      rating: '8.5', 
      releaseDate: 'Mar 2026',
      genres: ['Romance', 'Drama'] 
    },
    { 
      title: 'Speed Racer X', 
      poster: mov, 
      rating: '8.3', 
      releaseDate: 'Mar 2026',
      genres: ['Action', 'Thriller'] 
    },
    { 
      title: 'Haunted Mansion', 
      poster: mov, 
      rating: '7.9', 
      releaseDate: 'Mar 2026',
      genres: ['Horror', 'Mystery'] 
    },
    { 
      title: 'Love in Paris', 
      poster: mov, 
      rating: '8.1', 
      releaseDate: 'Mar 2026',
      genres: ['Romance', 'Comedy'] 
    },
    { 
      title: 'Dragon Warriors', 
      poster: mov, 
      rating: '8.7', 
      releaseDate: 'Apr 2026',
      genres: ['Fantasy', 'Action', 'Adventure'] 
    },
    { 
      title: 'The Heist', 
      poster: mov, 
      rating: '8.4', 
      releaseDate: 'Apr 2026',
      genres: ['Thriller', 'Crime'] 
    },
    { 
      title: 'Space Station 9', 
      poster: mov, 
      rating: '9.0', 
      releaseDate: 'Apr 2026',
      genres: ['Sci-Fi', 'Drama'] 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0f2e] to-[#0a0a0a]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0d1b3d]/50 rounded-full blur-3xl"></div>
        {/* Screen glow effect */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#d4af37]/10 to-transparent blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-navbar py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto transition-transform duration-300 hover:scale-105" />
          </div>
          
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                to={item.page === 'home' ? '/' : '/' + item.page}
                className={`relative px-4 py-2 font-medium text-sm uppercase tracking-wider transition-all duration-300 group ${
                  item.page === 'cinema' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#d4af37] transition-all duration-300 ${item.page === 'cinema' ? 'w-full' : 'group-hover:w-full w-0'}`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <SearchIcon />
            </button>
            <Link to="/booktickets" className="p-2 text-white/80 hover:text-[#d4af37] transition-colors">
              <TicketIcon />
            </Link>
            <Link to="/contact" className="p-2 text-white/80 hover:text-[#d4af37] transition-colors">
              <UserIcon />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={mov} alt="Cinema Hall" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-[#0a1628]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#0a1628]/80"></div>
        </div>
        
        {/* Screen Light Effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-[#d4af37]/20 to-transparent blur-[100px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4 animate-slide-up">Entertainment</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 animate-slide-up delay-100">
            Arnothaya <span className="text-[#d4af37] font-medium">Cinemax</span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-white/80 mb-8 animate-slide-up delay-200">
            Ultimate Movie Experience
          </p>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up delay-300">
            Immerse yourself in state-of-the-art projection and sound technology for the ultimate cinematic experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
            <Link to="/booktickets" className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all">
              Book Tickets Now
            </Link>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-widest border border-white/20 backdrop-blur-sm transition-all">
              View Showtimes
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Experience <span className="text-[#d4af37]">Excellence</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              World-class cinema technology for an unparalleled movie experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Now Showing Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Now <span className="text-[#d4af37]">Showing</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Book your tickets for the latest blockbusters
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-widest border border-white/20 backdrop-blur-sm transition-all">
              View All Movies
            </button>
          </div>
        </div>
      </div>

      {/* Premium Experience Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Premium Cinema <span className="text-[#d4af37]">Experience</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto mb-8">
              Enjoy our luxury recliner seats, personal armrests, and dedicated service. 
              Choose from a variety of refreshments and snacks while watching your favorite films.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-light text-[#d4af37] mb-2">150+</div>
                <div className="text-white/60 text-sm">Seats per Screen</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-[#d4af37] mb-2">50+</div>
                <div className="text-white/60 text-sm">Shows Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-[#d4af37] mb-2">100%</div>
                <div className="text-white/60 text-sm">Digital Projection</div>
              </div>
            </div>
            <Link to="/booktickets" className="inline-block px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all">
              Book Your Experience
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <span className="text-white/60 text-sm">© 2026 Arnothaya Mall. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Cinema;
