import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './new_assets/logo.png';
import mall from './new_assets/mall.png';
import dining from './new_assets/Café & Coffee.png';
import gaming_zone from './new_assets/VR Gaming.png';
import laser from './new_assets/laser.png';
import mov from './new_assets/mov.png';
import rest from './new_assets/rest.png';
import shop from './new_assets/shop.png';
import sound from './new_assets/sound.png';
import dolbyAtmos from './new_assets/Dolby Atmos Sound.png';
import premiumRecliners from './new_assets/Premium Recliners.png';
import fashionApparel from './new_assets/Fashion & Apparel.png';
import beautyCosmetics from './new_assets/Beauty & Cosmetics .png';
import electronics from './new_assets/Electronics.png';
import homeLifestyle from './new_assets/Home & Lifestyle.png';
import bowlingArena from './new_assets/Bowling Arena.png';
import arcadeGames from './new_assets/Arcade Games.png';
import familyPlayArea from './new_assets/Family Play Area.png';
import valetServiceImg from './new_assets/Valet Service.png';
import evChargingImg from './new_assets/EV Charging.png';
import priorityParkingImg from './new_assets/Priority Parking.png';
import ticket from './new_assets/ticket.png';
import Play from './new_assets/Play.png';
import head from './new_assets/head.png';
import food from './new_assets/food.png';
import spa from './new_assets/spa.png';
import parking from './new_assets/parking.png';
import premiumDining from './new_assets/Premium Dining.png';
import quickBites from './new_assets/Quick Bites.png';
import cafeCoffee from './new_assets/Café & Coffee.png';
import dessertBar from './new_assets/Dessert Bar.png';
import valetService from './new_assets/parking.png';
import evCharging from './new_assets/parking.png';
import priorityParking from './new_assets/parking.png';

// Loader Images
import loader1 from './loader/load1.png';
import loader2 from './loader/load2.png';
import loader3 from './loader/load3.png';
import loader4 from './loader/load4.png';
import loader5 from './loader/load5.png';

// Lazy Loaded Image Component
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(imgRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : null}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

// SVG Icons
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

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

// Glass Card Component with Image, Title, Text, and Gold Button
function GlassCard({ image, title, description, buttonText, delay }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Gold glow border on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          border: '2px solid rgba(212, 175, 55, 0.5)',
          borderRadius: '1rem',
          boxShadow: '0 0 30px rgba(212, 175, 55, 0.2), inset 0 0 30px rgba(212, 175, 55, 0.05)'
        }}
      ></div>
      
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 
          className="text-lg font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {title}
        </h3>
        <p className="text-white/60 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Gold Button */}
        <button 
          className="w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
          style={{
            background: 'linear-gradient(135deg, #d4af37, #aa8c2c)',
            color: '#0a1628',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          {buttonText}
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

// Brand Logo Component
function BrandLogo({ name, color }) {
  return (
    <div 
      className="flex-shrink-0 flex items-center justify-center p-6 rounded-xl transition-all duration-300 cursor-pointer group"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
      }}
    >
      <span 
        className="text-2xl font-bold transition-transform duration-300 group-hover:scale-110" 
        style={{ color, fontFamily: 'Montserrat, sans-serif' }}
      >
        {name}
      </span>
    </div>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentLoaderIndex, setCurrentLoaderIndex] = useState(0);
  
  // Loader images array
  const loaderImages = [loader1, loader2, loader3, loader4, loader5];
  
  // Rotate loader image every 40 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoaderIndex((prevIndex) => (prevIndex + 1) % loaderImages.length);
    }, 40000); // 40 seconds = 40000ms
    
    return () => clearInterval(interval);
  }, [loaderImages.length]);
  
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

  // Why Choose Us Data
  const whyChooseUs = [
    { 
      image: shop, 
      title: '120+ Premium Stores', 
      description: 'Explore international luxury brands and local favorites under one roof',
      buttonText: 'Explore Stores'
    },
    { 
      image: dining, 
      title: 'World-Class Dining', 
      description: 'Gourmet restaurants and cafes offering diverse culinary experiences',
      buttonText: 'View Dining'
    },
    { 
      image: laser, 
      title: 'Cinemax Theatre', 
      description: 'State-of-the-art 4K screens with immersive Dolby Atmos sound',
      buttonText: 'Book Tickets'
    },
    { 
      image: gaming_zone, 
      title: 'VR Gaming Zone', 
      description: 'Experience cutting-edge virtual reality entertainment',
      buttonText: 'Play Now'
    }
  ];

  // Cinemax Data
  const cinemax = [
    { 
      image: mov, 
      title: 'IMAX Experience', 
      description: 'Largest screen in the region with laser projection technology',
      buttonText: 'View Showtimes'
    },
    { 
      image: dolbyAtmos, 
      title: 'Dolby Atmos Sound', 
      description: 'Immersive 360° audio experience for ultimate movie magic',
      buttonText: 'Book Now'
    },
    { 
      image: laser, 
      title: '4K Laser Projection', 
      description: 'Crystal clear visuals with enhanced color accuracy',
      buttonText: 'View All Screens'
    },
    { 
      image: premiumRecliners, 
      title: 'Premium Recliners', 
      description: 'Luxury seating with personal armrests and cup holders',
      buttonText: 'Reserve Seats'
    }
  ];

  // Top Brands Data
  const brands = [
    { name: 'Nike', color: '#ff6b35' },
    { name: 'Adidas', color: '#00d4ff' },
    { name: 'Apple', color: '#a0a0a0' },
    { name: 'Lifestyle', color: '#ff69b4' },
    { name: 'H&M', color: '#ff0000' },
    { name: 'Zara', color: '#ffffff' },
    { name: 'Samsung', color: '#0066ff' },
    { name: 'Sony', color: '#9945ff' },
    { name: 'Puma', color: '#ffd700' },
    { name: 'Levis', color: '#1e90ff' },
    { name: 'UNIQLO', color: '#808080' },
    { name: 'Sephora', color: '#ff1493' }
  ];

  // Stores Data - Using available images
  const stores = [
    { 
      image: fashionApparel, 
      title: 'Fashion & Apparel', 
      description: 'Latest trends from international fashion houses',
      buttonText: 'Browse Stores'
    },
    { 
      image: beautyCosmetics, 
      title: 'Beauty & Cosmetics', 
      description: 'Premium beauty products and luxury skincare',
      buttonText: 'Explore Brands'
    },
    { 
      image: electronics, 
      title: 'Electronics', 
      description: 'Cutting-edge gadgets and consumer electronics',
      buttonText: 'View Products'
    },
    { 
      image: homeLifestyle, 
      title: 'Home & Lifestyle', 
      description: 'Elegant home décor and lifestyle products',
      buttonText: 'Shop Now'
    }
  ];

  // Entertainment Data
  const entertainment = [
    { 
      image: gaming_zone, 
      title: 'VR Gaming', 
      description: 'Immersive virtual reality experiences with latest VR technology',
      buttonText: 'Book Session'
    },
    { 
      image: bowlingArena, 
      title: 'Bowling Arena', 
      description: '12 premium lanes with automatic scoring and cosmic bowling',
      buttonText: 'Reserve Lanes'
    },
    { 
      image: arcadeGames, 
      title: 'Arcade Games', 
      description: 'Classic arcade games and modern interactive experiences',
      buttonText: 'Get Tokens'
    },
    { 
      image: familyPlayArea, 
      title: 'Family Play Area', 
      description: 'Safe and fun indoor play zone for children of all ages',
      buttonText: 'Visit Zone'
    }
  ];

  // Dining Data
  const diningData = [
    { 
      image: premiumDining, 
      title: 'Premium Dining', 
      description: 'Luxury fine dining restaurants with international cuisines',
      buttonText: 'Reserve Table'
    },
    { 
      image: quickBites, 
      title: 'Quick Bites', 
      description: 'Fast food and casual dining options for quick meals',
      buttonText: 'View Options'
    },
    { 
      image: cafeCoffee, 
      title: 'Café & Coffee', 
      description: 'Premium coffee shops and bakeries for relaxed moments',
      buttonText: 'Find Café'
    },
    { 
      image: dessertBar, 
      title: 'Dessert Bar', 
      description: 'Artisan desserts, ice creams, and sweet treats',
      buttonText: 'Explore'
    }
  ];

  // Parking Data
  const parkingData = [
    { 
      image: parking, 
      title: 'Underground Parking', 
      description: 'Secure underground parking with 5000+ spaces available',
      buttonText: 'View Location'
    },
    { 
      image: valetServiceImg, 
      title: 'Valet Service', 
      description: 'Professional valet parking for premium shopping experience',
      buttonText: 'Book Service'
    },
    { 
      image: evChargingImg, 
      title: 'EV Charging', 
      description: 'Electric vehicle charging stations on all parking levels',
      buttonText: 'Find Stations'
    },
    { 
      image: priorityParkingImg, 
      title: 'Priority Parking', 
      description: 'Dedicated parking spots for families and disabled access',
      buttonText: 'Learn More'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
        style={{
          background: scrolled ? 'linear-gradient(180deg, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.85) 100%)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Arnothaya Mall" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
            />
          </div>
          
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                to={item.page === 'home' ? '/' : '/' + item.page}
                className="relative px-4 py-2 text-white/80 hover:text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 group"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
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
          <LazyImage src={mall} alt="Arnothaya Mall" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-[#0a1628]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#0a1628]/80"></div>
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Rotating Loader Image - Changes every 40 seconds */}
        <div className="absolute bottom-8 right-0 md:right-10 lg:right-20 w-80 md:w-96 hidden md:block z-10">
          <img 
            src={loaderImages[currentLoaderIndex]} 
            alt="Loader" 
            className="w-full h-auto object-contain animate-bounce-slow rounded-2xl"
            key={currentLoaderIndex} // Force re-render on index change
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-3xl">
            <p 
              className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4 animate-slide-up"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Welcome to Luxury
            </p>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight animate-slide-up delay-100"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
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
              <Link 
                to="/stores" 
                className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all flex items-center gap-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Explore Stores
                <ArrowRightIcon />
              </Link>
              <Link 
                to="/booktickets" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-widest border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Movie Tickets
                <ArrowRightIcon />
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

      {/* Why Choose Us Section */}
      <section 
        className="py-24 relative"
        style={{ 
          background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1628 100%)',
          minHeight: '100vh'
        }}
      >
        {/* Background Effects */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-30" 
          style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)' }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Premium Experience</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Why Choose <span className="text-[#d4af37]">Arnothaya Mall</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Discover unparalleled luxury shopping, entertainment, and dining experiences
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <GlassCard 
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cinemax Section */}
      <section 
        className="py-24 relative"
        style={{ 
          background: 'linear-gradient(180deg, #0d1b3d 0%, #0a1628 100%)',
          minHeight: '100vh'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Entertainment</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Arnothaya <span className="text-[#d4af37]">Cinemax</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              The ultimate movie experience with cutting-edge technology
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cinemax.map((item, index) => (
              <GlassCard 
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section 
        className="py-24 relative"
        style={{ 
          background: 'linear-gradient(180deg, #0a1628 0%, #0d1b3d 100%)',
          minHeight: '80vh'
        }}
      >
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Shopping</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Top <span className="text-[#d4af37]">Brands</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Discover world-renowned brands at Arnothaya Mall
            </p>
          </div>
          
          {/* Brand Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {brands.map((brand, index) => (
              <BrandLogo key={index} name={brand.name} color={brand.color} />
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            <Link 
              to="/stores" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all rounded-xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              View All Stores
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section 
        className="py-24 relative"
        style={{ 
          background: 'linear-gradient(180deg, #0d1b3d 0%, #0a1628 100%)',
          minHeight: '100vh'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Shopping</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Browse <span className="text-[#d4af37]">Stores</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Find your favorite stores across various categories
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stores.map((item, index) => (
              <GlassCard 
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section 
        className="py-24 relative"
        style={{ 
          background: 'linear-gradient(180deg, #0a1628 0%, #1a0a2e 100%)',
          minHeight: '100vh'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Fun & Games</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="text-[#d4af37]">Entertainment</span> Zone
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Endless fun and excitement for the whole family
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entertainment.map((item, index) => (
              <GlassCard 
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section 
        className="py-24 relative"
        style={{ 
          background: 'linear-gradient(180deg, #1a0a2e 0%, #0d1b3d 100%)',
          minHeight: '100vh'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Culinary</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Premium <span className="text-[#d4af37]">Dining</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Savor exquisite cuisines from around the world
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diningData.map((item, index) => (
              <GlassCard 
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parking Section */}
      <section 
        className="py-24 relative"
        style={{ 
          background: 'linear-gradient(180deg, #0d1b3d 0%, #0a1628 100%)',
          minHeight: '100vh'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span className="text-[#d4af37] text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Convenience</span>
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="text-[#d4af37]">Parking</span> Facilities
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Hassle-free parking with premium services
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parkingData.map((item, index) => (
              <GlassCard 
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-16 relative"
        style={{ 
          background: 'linear-gradient(180deg, #0a1628 0%, #050d1a 100%)',
          borderTop: '1px solid rgba(212, 175, 55, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img src={logo} alt="Arnothaya Mall" className="h-16 w-auto mb-4" />
              <p className="text-white/60 text-sm">
                Experience luxury shopping, entertainment, and dining at Arnothaya Mall - your premier destination for world-class experiences.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quick Links</h4>
              <ul className="space-y-2">
                {['Stores', 'Cinema', 'Dining', 'Entertainment', 'Offers'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-white/60 hover:text-[#d4af37] transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>123 Luxury Avenue</li>
                <li>Arnothaya City, AC 12345</li>
                <li>+1 234 567 8900</li>
                <li>info@arnothayamall.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Hours</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Mon - Fri: 10:00 AM - 10:00 PM</li>
                <li>Saturday: 10:00 AM - 11:00 PM</li>
                <li>Sunday: 10:00 AM - 11:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              © 2026 Arnothaya Mall. All rights reserved. Designed with Luxury in Mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
