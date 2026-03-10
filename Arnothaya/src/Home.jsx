import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Home as HomeIcon, Info, Phone, Wrench } from 'lucide-react';
import logo from './assets/logo.png';
import mall from './assets/mall.png';

function Home() {
  const navigate = useNavigate();
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Floating animation
    gsap.to(".floating-blob", {
      y: -20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

    return () => {};
  }, []);

  const handleExploreClick = () => {
    gsap.to(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        navigate('/about');
      }
    });
  };

  const navItems = [
    { name: 'Home', page: 'home', icon: <HomeIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'About', page: 'about', icon: <Info className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'Our Services', page: 'ourservices', icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'Contact Us', page: 'contact', icon: <Phone className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden text-white selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav className="nav-bar fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-700 opacity-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto animate-pulse transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                to={'/' + item.page}
                className="px-4 py-2 hover:text-yellow-400 font-bold transition-all duration-300 flex items-center gap-2 text-sm md:text-base group"
              >
                <span className="group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                <span className="hidden sm:inline uppercase tracking-widest">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Redesigned Grid Layout */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Hero Text */}
          <div 
            ref={contentRef}
            className="opacity-100 translate-y-0"
          >
            <div className="inline-block px-4 py-1.5 bg-red-600/10 border border-red-600/30 text-red-500 rounded-full text-sm font-black uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
              Welcome to the Future
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] tracking-tighter">
              Arnothaya <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-yellow-500 to-red-600 animatePulseGlow">
                Cinemax.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-10 leading-relaxed max-w-xl">
              Your ultimate destination for <span className="text-yellow-400 font-bold underline decoration-red-600 decoration-4">unrivaled cinematic excellence</span>. Experience earth-shaking sound, 4K laser clarity, and world-class luxury.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleExploreClick}
                className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all duration-300 transform hover:scale-[1.05] shadow-[0_10px_30px_rgba(220,38,38,0.4)] text-lg uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Explore Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side: Inline Mall Image (Redesigned) */}
          <div className="relative hidden lg:block perspective-1000">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-linear-to-tr from-red-600 to-yellow-500 rounded-[3rem] blur-3xl opacity-20 animatePulseGlow"></div>
            
            {/* Main Image */}
            <img 
              src={mall} 
              alt="Arnothaya Mall" 
              className="relative w-full aspect-[4/5] object-cover rounded-[3rem] border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-y-6 hover:rotate-y-0 transition-transform duration-700"
            />
            
            {/* Floating Glass Badge 1 Left */}
            <div className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl animateFloat">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-red-600/40">
                  5+
                </div>
                <div>
                  <p className="text-white font-black text-xl">Premium</p>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Cinema Screens</p>
                </div>
              </div>
            </div>

            {/* Floating Glass Badge 2 Right */}
            <div className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl animateFloat" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-black font-black text-2xl shadow-lg shadow-yellow-400/40">
                  ★
                </div>
                <div>
                  <p className="text-white font-black text-xl">4.9/5</p>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">User Rating</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
