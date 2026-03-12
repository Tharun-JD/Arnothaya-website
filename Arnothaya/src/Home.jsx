import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import mall from './assets/mall.png';
import dining from './assets/dining.png';
import gaming_zone from './assets/gaming_zone.png';
import laser from './assets/laser.png';
import mov from './assets/mov.png';
import rest from './assets/rest.png';
import shop from './assets/shop.png';
import sound from './assets/sound.png';
import ticket from './assets/ticket.png';
import Play from './assets/Play.png';
import head from './assets/head.png';
import food from './assets/food.png';
import found from './assets/found.png';
import spa from './assets/spa.png';

// SVG Icons as components
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const TicketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
    <path d="m10 15 5-3-5-3z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

// Feature Card Component
function FeatureCard({ icon, title, description, delay }) {
  return (
    <div className="glass-card text-center p-8 group animate-slide-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img src={icon} alt={title} className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}

// Brand Logo Component
function BrandLogo({ name, color }) {
  return (
    <div className="flex items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4af37]/30 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
      <span className={`text-2xl font-bold ${color} group-hover:scale-110 transition-transform duration-300`}>{name}</span>
    </div>
  );
}

// Event Card Component
function EventCard({ image, title, date }) {
  return (
    <div className="glass-card overflow-hidden group cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[#d4af37] text-sm font-medium mb-1">{date}</p>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}

// Restaurant Card Component
function RestaurantCard({ image, name, cuisine }) {
  return (
    <div className="glass-card overflow-hidden group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-[#d4af37] transition-colors">{name}</h3>
        <p className="text-white/60 text-sm">{cuisine}</p>
      </div>
    </div>
  );
}

function Home() {
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
    { icon: shop, title: '120+ Stores', description: 'Explore our curated collection of international and local premium brands' },
    { icon: dining, title: 'Premium Dining', description: 'Gourmet restaurants and cafes offering diverse culinary experiences' },
    { icon: ticket, title: 'Cinemax Theatre', description: 'State-of-the-art screens with immersive Dolby sound experience' },
    { icon: gaming_zone, title: 'Gaming Zone', description: 'Latest VR games and classic arcade for endless fun' }
  ];

  const brands = [
    { name: 'Nike', color: 'text-orange-500' },
    { name: 'Adidas', color: 'text-blue-400' },
    { name: 'Apple', color: 'text-gray-300' },
    { name: 'Lifestyle', color: 'text-pink-400' },
    { name: 'H&M', color: 'text-red-500' },
    { name: 'Zara', color: 'text-white' },
    { name: 'Samsung', color: 'text-blue-500' },
    { name: 'Sony', color: 'text-purple-400' },
    { name: 'Puma', color: 'text-yellow-500' },
    { name: 'Levis', color: 'text-blue-600' },
    { name: 'UNIQLO', color: 'text-gray-400' },
    { name: 'Sephora', color: 'text-red-400' }
  ];

  const events = [
    { image: shop, title: 'Fashion Week 2026', date: 'March 15 - 20, 2026' },
    { image: sound, title: 'Weekend Live Music', date: 'Every Saturday & Sunday' },
    { image: Play, title: 'Kids Festival', date: 'April 1 - 7, 2026' },
    { image: found, title: 'Festival Offers', date: 'Up to 70% Off' }
  ];

  const restaurants = [
    { image: food, name: 'Pizza & Fast Food', cuisine: 'Italian • Quick Bites' },
    { image: found, name: 'Coffee Lounge', cuisine: 'Premium Coffees & Pastries' },
    { image: rest, name: 'Fine Dining', cuisine: 'Multi-cuisine Luxury' },
    { image: spa, name: 'Dessert Bar', cuisine: 'Sweets & Ice Creams' }
  ];

  const entertainment = [
    { icon: Play, title: 'Bowling Arena', description: '12 premium lanes with automatic scoring', image: Play },
    { icon: gaming_zone, title: 'VR Gaming', description: 'Immersive virtual reality experiences', image: gaming_zone },
    { icon: found, title: 'Family Play Area', description: 'Safe & fun environment for kids', image: Play }
  ];

  const visitors = [
    { icon: <MapPinIcon />, title: 'Location & Map', description: 'Find your way around Arnothaya Mall' },
    { icon: <ClockIcon />, title: 'Opening Hours', description: 'Mon-Sun: 10:00 AM - 10:00 PM' },
    { icon: <CarIcon />, title: 'Free Parking', description: '5000+ parking spaces available' }
  ];

  const instagramImages = [shop, dining, gaming_zone, rest, food, found, Play, spa];

  return (
    <div className="min-h-screen relative overflow-hidden">
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
                className="relative px-4 py-2 text-white/80 hover:text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
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

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 h-screen">
          <img src={mall} alt="Arnothaya Mall" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-[#0a1628]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#0a1628]/80"></div>
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute bottom-0 right-0 md:right-10 lg:right-20 w-80 md:w-96 hidden md:block">
          <img src={head} alt="Shopping" className="w-full h-auto object-contain animate-float" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-3xl">
            <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4 animate-slide-up">Welcome to Luxury</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight animate-slide-up delay-100">
              Experience Shopping Like <span className="text-[#d4af37] font-medium">Never Before</span>
              <br /><span className="text-3xl sm:text-4xl md:text-5xl">— Arnothaya Mall</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-6 max-w-xl animate-slide-up delay-200">
              Shop • Dine • Watch • Enjoy
            </p>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl animate-slide-up delay-300">
              Discover a world of luxury, entertainment, and culinary excellence under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
              <Link to="/ourservices" className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all">
                Explore Stores
              </Link>
              <Link to="/booktickets" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-widest border border-white/20 backdrop-blur-sm transition-all">
                Book Movie Tickets
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#d4af37] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Cinema Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1628 100%)' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                <span className="text-[#d4af37] text-sm uppercase tracking-wider">Premium Experience</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}>
                Arnothaya <span className="text-[#d4af37]">Cinemax</span>
              </h2>
              <p className="text-xl text-gray-300">The Ultimate Cinema Experience</p>
              
              <ul className="space-y-4">
                {[
                  '6 State-of-the-Art Screens',
                  'Dolby Atmos Immersive Sound',
                  '4K Laser Projection'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(212, 175, 55, 0.2)', border: '1px solid rgba(212, 175, 55, 0.5)' }}>
                      <svg className="w-3 h-3 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #d4af37, #aa8c2c)',
                  color: '#0a1628',
                  fontFamily: 'Montserrat, sans-serif',
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
                }}
              >
                View Showtimes
              </button>
            </div>
            
            {/* Right - Cinema Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden" style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.02))',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                <div className="aspect-[16/10] flex items-center justify-center relative">
                  {/* Screen */}
                  <div className="absolute top-4 left-4 right-4 h-32 rounded-lg" style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    boxShadow: '0 0 50px rgba(212, 175, 55, 0.2)'
                  }}></div>
                  
                  {/* Seats */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-10 h-8 rounded-t-lg" style={{
                        background: i < 3 ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0.4)',
                        boxShadow: '0 -5px 15px rgba(0,0,0,0.3)'
                      }}></div>
                    ))}
                  </div>
                  
                  {/* Light beams */}
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(180deg, transparent 40%, rgba(212, 175, 55, 0.1) 100%)'
                  }}></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)' }}></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full blur-xl" style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Cards Section */}
      <section className="py-16 relative" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1b3d 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}>
              Now <span className="text-[#d4af37]">Showing</span>
            </h3>
            <p className="text-gray-400">Book your tickets for the latest blockbusters</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'The Batman', genre: 'Action', color: '#ff6b35' },
              { title: 'Avatar', genre: 'Sci-Fi', color: '#00d4ff' },
              { title: 'Doctor Strange', genre: 'Marvel', color: '#ffd700' },
              { title: 'Spider-Man', genre: 'Action', color: '#e63946' }
            ].map((movie, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: `radial-gradient(circle at center, ${movie.color}20 0%, transparent 70%)`
                }}></div>
                
                {/* Poster placeholder */}
                <div className="aspect-[2/3] relative" style={{
                  background: `linear-gradient(135deg, ${movie.color}30 0%, ${movie.color}10 100%)`
                }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🎬</span>
                  </div>
                  {/* Genre tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium" style={{
                    background: movie.color,
                    color: '#0a1628'
                  }}>
                    {movie.genre}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {movie.title}
                  </h4>
                  <button 
                    className="w-full py-2.5 rounded-xl font-medium text-sm transition-all duration-300"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(212, 175, 55, 0.5)',
                      color: '#d4af37'
                    }}
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1b3d] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        <div className="absolute inset-0 dot-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-light text-white">World-Class <span className="text-[#d4af37] font-medium">Amenities</span></h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="py-20 bg-[#0d1b3d] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-light text-white">Top Brands at <span className="text-[#d4af37] font-medium">Arnothaya Mall</span></h2>
            <Link to="/stores" className="flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors group">
              View All Stores <ArrowRightIcon />
            </Link>
          </div>
          
          {/* Automatic Roller/Marquee Effect */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(90deg, #0d1b3d 0%, transparent 100%)' }}></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(270deg, #0d1b3d 0%, transparent 100%)' }}></div>
            
            <div className="flex animate-marquee gap-4">
              {/* First set */}
              {brands.map((brand, index) => (
                <BrandLogo key={`first-${index}`} name={brand.name} color={brand.color} />
              ))}
              {/* Duplicate for seamless loop */}
              {brands.map((brand, index) => (
                <BrandLogo key={`second-${index}`} name={brand.name} color={brand.color} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cinema Section */}
      <section className="py-24 bg-gradient-to-b from-[#0d1b3d] to-[#0a1628] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full blur-3xl opacity-20">
          <div className="w-full h-full bg-[#d4af37] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <img src={mov} alt="Cinemax Theatre" className="relative w-full h-96 object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[#d4af37] text-sm font-medium tracking-wider uppercase">Premium Experience</span>
                <h3 className="text-white text-2xl font-semibold mt-1">Arnothaya Cinemax</h3>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Luxury Cinema <span className="text-[#d4af37] font-medium">Experience</span></h2>
                <p className="text-white/70 leading-relaxed">Indulge in the ultimate movie-watching experience with our premium facilities.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={ticket} alt="Screen" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">6 State-of-the-Art Screens</h3>
                    <p className="text-white/60 text-sm">Featuring the latest in projection technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={sound} alt="Sound" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Dolby Atmos Sound</h3>
                    <p className="text-white/60 text-sm">Immersive audio that moves around you</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={laser} alt="Laser" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">4K Laser Projection</h3>
                    <p className="text-white/60 text-sm">Crystal-clear picture with stunning clarity</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/booktickets" className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all">
                  Book Tickets
                </Link>
                <Link to="/booktickets" className="px-8 py-4 glass-btn text-white font-semibold text-sm uppercase tracking-widest">
                  Now Showing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Zone Section */}
      <section className="py-24 bg-[#0a1628] relative">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm mb-3">Entertainment</p>
            <h2 className="text-3xl md:text-5xl font-light text-white">Endless <span className="text-[#d4af37] font-medium">Fun & Games</span></h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {entertainment.map((item, index) => (
              <div key={index} className="glass-card overflow-hidden group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                    <img src={item.icon} alt="" className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Experience Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1b3d] relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm mb-3">Culinary Delights</p>
              <h2 className="text-3xl md:text-5xl font-light text-white">Dining <span className="text-[#d4af37] font-medium">Experience</span></h2>
            </div>
            <Link to="/dining" className="flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors group">
              Explore Restaurants <ArrowRightIcon />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} image={restaurant.image} name={restaurant.name} cuisine={restaurant.cuisine} />
            ))}
          </div>
        </div>
      </section>

      {/* Events and Offers Section */}
      <section className="py-24 bg-[#0d1b3d] relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm mb-3">Whats Happening</p>
            <h2 className="text-3xl md:text-5xl font-light text-white">Events & <span className="text-[#d4af37] font-medium">Offers</span></h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {events.map((event, index) => (
              <EventCard key={index} image={event.image} title={event.title} date={event.date} />
            ))}
          </div>
        </div>
      </section>

      {/* Mall Experience Section */}
      <section className="py-24 bg-gradient-to-b from-[#0d1b3d] to-[#0a1628] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-2xl blur-2xl"></div>
              <img src={rest} alt="Mall Experience" className="relative w-full h-[500px] object-cover rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#d4af37]">500+</p>
                    <p className="text-white/60 text-sm">Brands</p>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#d4af37]">50+</p>
                    <p className="text-white/60 text-sm">Restaurants</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm">The Ultimate Lifestyle Destination</p>
              <h2 className="text-3xl md:text-5xl font-light text-white">Your <span className="text-[#d4af37] font-medium">Premium</span> Mall Experience</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Arnothaya Mall is more than just a shopping destination, it is a complete lifestyle experience.
              </p>
              <p className="text-white/60 leading-relaxed">
                Whether you are seeking the latest fashion trends, craving exquisite cuisines, looking for family fun, 
                or simply wanting to unwind, Arnothaya Mall offers an unparalleled blend of luxury and entertainment.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 glass-btn rounded-full text-sm">Shopping</span>
                <span className="px-4 py-2 glass-btn rounded-full text-sm">Dining</span>
                <span className="px-4 py-2 glass-btn rounded-full text-sm">Entertainment</span>
                <span className="px-4 py-2 glass-btn rounded-full text-sm">Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Information Section */}
      <section className="py-20 bg-[#0a1628] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {visitors.map((item, index) => (
              <div key={index} className="glass-card p-8 text-center group hover:border-[#d4af37]/30">
                <div className="w-16 h-16 mx-auto mb-6 text-[#d4af37] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1b3d] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm mb-3">Follow Us</p>
            <h2 className="text-3xl md:text-5xl font-light text-white">#<span className="text-[#d4af37] font-medium">ArnothayaMoments</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {instagramImages.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden group cursor-pointer relative">
                <img src={img} alt={`Instagram ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#050d1a] pt-20 pb-8 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Mall</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-white/60 hover:text-[#d4af37] transition-colors">About Us</Link></li>
                <li><Link to="/ourservices" className="text-white/60 hover:text-[#d4af37] transition-colors">Stores</Link></li>
                <li><Link to="/ourservices" className="text-white/60 hover:text-[#d4af37] transition-colors">Events</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-[#d4af37] transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Visitor</h3>
              <ul className="space-y-4">
                <li><Link to="/parkingticket" className="text-white/60 hover:text-[#d4af37] transition-colors">Parking</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-[#d4af37] transition-colors">Mall Map</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-[#d4af37] transition-colors">Contact Us</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-[#d4af37] transition-colors">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 glass-btn rounded-full flex items-center justify-center text-white/80 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                  <InstagramIcon />
                </a>
                <a href="#" className="w-10 h-10 glass-btn rounded-full flex items-center justify-center text-white/80 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                  <FacebookIcon />
                </a>
                <a href="#" className="w-10 h-10 glass-btn rounded-full flex items-center justify-center text-white/80 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                  <YoutubeIcon />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-white/60 mb-4">Subscribe for latest updates and offers</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold rounded-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all">
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </div>
            <p className="text-white/40 text-sm">2026 Arnothaya Mall. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-[#d4af37] transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-[#d4af37] transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
