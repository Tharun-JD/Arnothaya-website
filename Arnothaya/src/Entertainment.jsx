import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Entertainment = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const attractions = [
    {
      id: 1,
      icon: "🎳",
      title: "Bowling Arena",
      description: "Experience the ultimate bowling adventure with 12 professional lanes, glow-in-the-dark environments, and state-of-the-art scoring systems. Perfect for casual players and competitive leagues alike.",
      color: "#ff00ff",
      accentColor: "#ff66ff"
    },
    {
      id: 2,
      icon: "🎮",
      title: "VR Gaming Zone",
      description: "Immerse yourself in cutting-edge virtual reality experiences. From thrilling adventures to mind-bending puzzles, our VR arena offers the latest in gaming technology for an unforgettable journey.",
      color: "#00f5ff",
      accentColor: "#66faff"
    },
    {
      id: 3,
      icon: "🕹️",
      title: "Arcade Games",
      description: "Relive the nostalgia with a modern twist. Featuring classic pinball, racing simulators, fighting games, and prize-winning claw machines. Fun for all ages and gaming preferences.",
      color: "#bf00ff",
      accentColor: "#d966ff"
    },
    {
      id: 4,
      icon: "👨‍👩‍👧‍👦",
      title: "Family Play Area",
      description: "A safe and exciting space designed for families with young children. Soft play structures, interactive zones, and engaging activities that spark imagination and create lasting memories.",
      color: "#00ff88",
      accentColor: "#66ffaa"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)' }}>
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Animated Neon Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #ff00ff 0%, transparent 70%)' }}></div>
      <div className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #bf00ff 0%, transparent 70%)' }}></div>

      {/* Navigation Bar */}
      <nav className="relative z-50 px-6 py-4" style={{
        background: 'rgba(10, 10, 26, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 245, 255, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold" style={{
            fontFamily: 'Montserrat, sans-serif',
            background: 'linear-gradient(135deg, #00f5ff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ARNOTHAYA MALL
          </Link>
          <div className="flex gap-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Stores', path: '/stores' },
              { name: 'Cinema', path: '/cinema' },
              { name: 'Dining', path: '/dining' },
              { name: 'Entertainment', path: '/entertainment' },
              { name: 'Offers', path: '/offers' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="relative text-white hover:text-cyan-400 transition-all duration-300 font-medium"
                style={{ 
                  textShadow: '0 0 10px rgba(0, 245, 255, 0.5)'
                }}
              >
                {item.name}
                {item.name === 'Entertainment' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5" style={{ 
                    background: 'linear-gradient(90deg, #00f5ff, #ff00ff)',
                    boxShadow: '0 0 10px #00f5ff'
                  }}></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-6 py-2 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(191, 0, 255, 0.2), rgba(0, 245, 255, 0.2))',
            border: '1px solid rgba(191, 0, 255, 0.3)'
          }}>
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">🎮 Welcome to Fun Zone</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{
            fontFamily: 'Montserrat, sans-serif',
            background: 'linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #ff00ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 60px rgba(0, 245, 255, 0.5)',
            animation: 'pulseGlow 2s ease-in-out infinite'
          }}>
            Entertainment & Fun Zone
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8" style={{
            textShadow: '0 0 20px rgba(0, 245, 255, 0.3)'
          }}>
            Experience the ultimate entertainment destination with cutting-edge attractions for all ages
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-12 mt-8 flex-wrap">
            {[
              { number: "4+", label: "Attractions", color: "#00f5ff" },
              { number: "50+", label: "Arcade Games", color: "#ff00ff" },
              { number: "24/7", label: "Gaming Hours", color: "#bf00ff" },
              { number: "100+", label: "VR Experiences", color: "#00ff88" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold" style={{ 
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}`
                }}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <div 
                key={attraction.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(attraction.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Card Glow Effect */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${attraction.color}40, ${attraction.accentColor}20)` 
                  }}
                ></div>
                
                {/* Main Card */}
                <div className="relative p-8 rounded-3xl transition-all duration-500 group-hover:transform group-hover:-translate-y-2" style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 40, 0.9) 0%, rgba(10, 10, 30, 0.95) 100%)',
                  border: `1px solid ${attraction.color}40`,
                  boxShadow: hoveredCard === attraction.id 
                    ? `0 0 40px ${attraction.color}30, inset 0 0 30px ${attraction.color}10`
                    : 'none'
                }}>
                  {/* Neon Border Accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${attraction.color}, transparent)`,
                      boxShadow: `0 0 20px ${attraction.color}`
                    }}
                  ></div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl" style={{
                      background: `linear-gradient(135deg, ${attraction.color}30, ${attraction.accentColor}10)`,
                      border: `1px solid ${attraction.color}40`,
                      boxShadow: `0 0 30px ${attraction.color}30`,
                      animation: hoveredCard === attraction.id ? 'pulseGlow 1.5s ease-in-out infinite' : 'none'
                    }}>
                      {attraction.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2" style={{
                        fontFamily: 'Montserrat, sans-serif',
                        color: attraction.color,
                        textShadow: `0 0 20px ${attraction.color}80`
                      }}>
                        {attraction.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ 
                          background: attraction.color,
                          boxShadow: `0 0 10px ${attraction.color}`
                        }}></span>
                        <span className="text-sm text-gray-400">Now Open</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8" style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
                  }}>
                    {attraction.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {['Premium Experience', 'All Ages', 'Modern Tech'].map((feature, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full text-sm" style={{
                        background: `${attraction.color}15`,
                        border: `1px solid ${attraction.color}30`,
                        color: attraction.accentColor
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <button 
                    className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${attraction.color}, ${attraction.accentColor})`,
                      color: '#0a0a1a',
                      boxShadow: `0 0 30px ${attraction.color}50`,
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      Explore Activity
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20" style={{
                    background: `radial-gradient(circle, ${attraction.color} 0%, transparent 70%)`
                  }}></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-10" style={{
                    background: `radial-gradient(circle, ${attraction.accentColor} 0%, transparent 70%)`
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(191, 0, 255, 0.1) 0%, rgba(0, 245, 255, 0.1) 100%)',
            border: '1px solid rgba(191, 0, 255, 0.3)'
          }}>
            <h2 className="text-4xl font-bold mb-4" style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#ffffff',
              textShadow: '0 0 30px rgba(0, 245, 255, 0.5)'
            }}>
              Ready to Play?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get your tickets now and experience the future of entertainment
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <Link 
                to="/booktickets"
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #00f5ff, #00a8ff)',
                  color: '#0a0a1a',
                  boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Book Tickets
              </Link>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'transparent',
                  border: '2px solid #ff00ff',
                  color: '#ff00ff',
                  boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                View Hours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8" style={{
        background: 'rgba(10, 10, 26, 0.95)',
        borderTop: '1px solid rgba(0, 245, 255, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">© 2024 Arnothaya Mall. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Entertainment;