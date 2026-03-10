import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Phone, Wrench } from 'lucide-react';
import logo from './assets/logo.png';
import entry from './assets/entry.png';
import movie from './assets/mov.png';
import move2 from './assets/move2.png';
import sound from './assets/sound.png';
import laser from './assets/laser.png';
import ExploreMore from './ExploreMore';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home', icon: <Home className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'About', page: 'about', icon: <Info className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'Our Services', page: 'ourservices', icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'Contact Us', page: 'contact', icon: <Phone className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  const mallParagraphs = [
    "In <span class='text-yellow-400 font-bold'>Palladam (Tiruppur District)</span> is a <span class='text-yellow-400 font-bold'>premier entertainment destination</span> that has significantly elevated the movie-watching experience for the local community since its grand opening in <span class='text-yellow-400 font-bold'>October 2024</span>.",
    "Arnothaya Cinemax is located inside a <span class='text-yellow-400 font-bold'>vibrant and modern shopping mall</span> that serves as a major entertainment destination for visitors. The mall is designed to provide a <span class='text-yellow-400 font-bold'>comfortable and enjoyable environment</span>.",
    "Visitors can enjoy a <span class='text-yellow-400 font-bold'>complete leisure experience</span> by combining shopping, dining, and movie entertainment in one convenient location.",
    "The mall regularly attracts large crowds due to its variety of attractions. Families, students, and professionals often visit the mall to relax and enjoy their free time.",
    "The presence of Arnothaya Cinemax inside the mall enhances the overall entertainment value by providing <span class='text-yellow-400 font-bold'>high-quality cinematic experiences</span>."
  ];

  const movieParagraphs = [
    "At Arnothaya Cinemax, we redefine the art of cinema by blending architectural grandeur with cutting-edge technology. Our philosophy is simple: every screening should be a transformative journey that transcends the boundaries of ordinary entertainment.",
    "Each of our five premium halls is a masterpiece of design, meticulously tuned for perfect acoustics and visual precision. From the deep vibrations of a cinematic score to the finest details on screen, we ensure that every moment is felt as much as it is seen.",
    "Whether you're visiting for a blockbuster premiere or an intimate art-house film, our commitment to excellence ensures an atmosphere of pure luxury and storytelling magic. This is where stories come alive, and memories are made in 4K clarity."
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-yellow-400 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md py-3 transition-opacity duration-700 opacity-100 line-border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                to={'/' + item.page}
                className="px-4 py-2 text-gray-300 hover:text-yellow-400 font-bold transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
              >
                <span>{item.icon}</span>
                <span className="hidden sm:inline uppercase tracking-widest">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <div className="relative z-10 transition-all duration-1000 opacity-100 translate-x-0">
            <div className="inline-block px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-full text-sm font-black uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              Discover Our Story
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              About <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-red-600 animatePulseGlow">Arnothaya</span>
            </h1>
            <div className="space-y-6">
              {mallParagraphs.map((para, i) => (
                <p key={i} className="text-lg text-gray-400 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative hidden lg:block perspective-1000">
            <div className="absolute inset-0 bg-linear-to-tr from-yellow-400 to-red-600 rounded-[3rem] blur-3xl opacity-15 animatePulseGlow"></div>
            <img 
              src={entry} 
              alt="Arnothaya Entry" 
              className="relative w-full aspect-square object-cover rounded-[3rem] border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700" 
            />
            
            {/* Floating Glass Badge */}
            <div className="absolute bottom-10 -left-10 bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl animateFloat">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-black font-black text-xl shadow-lg shadow-yellow-400/40 tracking-tighter italic">
                  EST.
                </div>
                <div>
                  <p className="text-white font-black text-xl">Since 2024</p>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Established</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Section */}
      <div className="min-h-screen relative flex items-center py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Video & Image Gallery */}
          <div className="order-2 lg:order-1 relative perspective-1000">
            <div className="absolute inset-0 bg-linear-to-tl from-red-600 to-yellow-500 rounded-[3rem] blur-3xl opacity-15 animatePulseGlow"></div>
            
            <div className="relative bg-black/60 backdrop-blur-xl p-6 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
               <img src={movie} alt="Cinemax" className="w-full aspect-video object-cover rounded-[2rem] mb-6 shadow-xl" />
               <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/7IfTRP3z1eY" 
                    title="Arnothaya Cinemax" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
               </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 transition-all duration-1000 delay-300 opacity-100 translate-y-0">
            <div className="inline-block px-4 py-1.5 bg-red-600/10 border border-red-600/30 text-red-500 rounded-full text-sm font-black uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
              Next-Gen Tech
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">
              Arnothaya <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-yellow-500 to-red-600 animatePulseGlow">Cinemax</span>
            </h2>
            <div className="space-y-6">
              {movieParagraphs.map((para, i) => (
                <p key={i} className="text-lg text-gray-400 leading-relaxed font-medium pl-6 border-l-2 border-red-600/30" dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">Premium Experiences</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-400/50 transition-all duration-500 flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img src={move2} alt="5 Screens" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 grow">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">5 Screens</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Arnothaya Cinemax proudly features five distinct, state-of-the-art auditoriums designed to cater to diverse cinematic tastes. From blockbuster epics to intimate indie films, our screens utilize the latest 4K digital projection technology to ensure staggering detail and fluid motion. 
                  <br/><br/>
                  Each hall is engineered with premium acoustic treatments and ergonomically designed luxury seating, providing an unrivaled level of comfort and focus for every moviegoer. Our multi-screen setup allows us to offer a wider variety of showtimes and genres, ensuring there's always something spectacular for everyone.
                </p>
              </div>
            </div>

            <div className="group bg-gray-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-400/50 transition-all duration-500 flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img src={sound} alt="Dolby Atmos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 grow">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Dolby Atmos</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Step beyond traditional surround sound and into the future of audio with our flagship Dolby Atmos installations. This 360-degree soundstage allows creators to place every sound with pinpoint precision anywhere in the room—above you, behind you, and all around you. 
                  <br/><br/>
                  Whether it's the subtle rustle of leaves or the earth-shaking rumble of a jet engine, you'll experience every acoustic nuance with lifelike clarity and power. The result is a truly immersive environment that bridges the gap between the screen and reality, making you feel like you've stepped right into the movie itself.
                </p>
              </div>
            </div>

            <div className="group bg-gray-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-400/50 transition-all duration-500 flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img src={laser} alt="4K Laser" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 grow">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">4K Laser</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Our signature 4K Laser Projection system represents the gold standard in modern theater technology. By replacing traditional lamps with high-efficiency laser light sources, we achieve a spectrum of color and a level of contrast that was once thought impossible. 
                  <br/><br/>
                  Witness deeper, true-to-life blacks and a level of brightness that reveals hidden details in every shadow, regardless of the screen size. This isn't just watching a movie; it's seeing a masterpiece rendered with the highest possible fidelity, ensuring every frame is a feast for the eyes and a testament to cinematic excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link 
              to="/ourservices" 
              className="px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3"
            >
              Explore More Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
