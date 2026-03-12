import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const offers = [
    {
      id: 1,
      brand: "Nike",
      logo: "✓",
      offer: "30% Off",
      description: "Extra savings on selected running shoes and athletic wear",
      validUntil: "Valid until March 31",
      category: "Sportswear"
    },
    {
      id: 2,
      brand: "H&M",
      logo: "H",
      offer: "Buy 2 Get 1",
      description: "Buy any 2 items and get the 3rd absolutely free",
      validUntil: "Valid until April 15",
      category: "Fashion"
    },
    {
      id: 3,
      brand: "Apple Store",
      logo: "🍎",
      offer: "Student Discount",
      description: "Special pricing on MacBooks and iPads for students",
      validUntil: "Valid until December 31",
      category: "Electronics"
    },
    {
      id: 4,
      brand: "Zara",
      logo: "Z",
      offer: "Seasonal Sale",
      description: "Up to 50% off on new spring collection",
      validUntil: "Valid until March 20",
      category: "Fashion"
    },
    {
      id: 5,
      brand: "Samsung",
      logo: "S",
      offer: "Galaxy Deal",
      description: "Save $200 on latest Galaxy smartphones",
      validUntil: "Valid until April 1",
      category: "Electronics"
    },
    {
      id: 6,
      brand: "Adidas",
      logo: "A",
      offer: "2For1 Shoes",
      description: "Buy any 2 pairs of shoes and get 50% off",
      validUntil: "Valid until March 25",
      category: "Sportswear"
    },
    {
      id: 7,
      brand: "Sephora",
      logo: "S",
      offer: "Gift Set",
      description: "Spend $100+ and receive a luxury gift set",
      validUntil: "Valid until March 18",
      category: "Beauty"
    },
    {
      id: 8,
      brand: "UNIQLO",
      logo: "U",
      offer: "Spring Special",
      description: "20% off on all basic essentials",
      validUntil: "Valid until April 10",
      category: "Fashion"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #0a1628 0%, #0d1b3d 50%, #152238 100%)' 
    }}>
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ 
        background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' 
      }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ 
        background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' 
      }}></div>

      {/* Navigation Bar */}
      <nav className="relative z-50 px-6 py-4 glass-navbar">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text">
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
                className="relative text-white hover:text-gold transition-all duration-300 font-medium"
              >
                {item.name}
                {item.name === 'Offers' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-gold"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full" style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))',
            border: '1px solid rgba(212, 175, 55, 0.3)'
          }}>
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-gold font-medium tracking-wider uppercase text-sm">Exclusive Deals</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{
            fontFamily: 'Montserrat, sans-serif',
            background: 'linear-gradient(135deg, #ffffff 0%, #d4af37 50%, #f0d875 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Latest Offers & Promotions
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover amazing deals and exclusive discounts from your favorite brands
          </p>

          {/* Filter Tags */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {['All Offers', 'Fashion', 'Electronics', 'Sportswear', 'Beauty'].map((filter, index) => (
              <button 
                key={filter}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0 ? 'text-primary-dark' : 'text-white glass-btn'
                }`}
                style={{
                  background: index === 0 
                    ? 'linear-gradient(135deg, #d4af37, #f0d875)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, index) => (
              <div 
                key={offer.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(offer.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Glow */}
                <div 
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(240, 216, 117, 0.1))' 
                  }}
                ></div>
                
                {/* Main Card */}
                <div className="relative h-full p-6 rounded-2xl transition-all duration-500 group-hover:-translate-y-2 glass-card">
                  {/* Category Tag */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{
                      background: 'rgba(212, 175, 55, 0.15)',
                      color: '#d4af37',
                      border: '1px solid rgba(212, 175, 55, 0.2)'
                    }}>
                      {offer.category}
                    </span>
                    <span className="text-xs text-gray-400">{offer.validUntil}</span>
                  </div>

                  {/* Logo & Brand */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: '#d4af37'
                    }}>
                      {offer.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {offer.brand}
                      </h3>
                    </div>
                  </div>

                  {/* Offer Badge */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold" style={{
                      background: 'linear-gradient(135deg, #f0d875, #d4af37)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                    }}>
                      {offer.offer}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* View Offer Button */}
                  <button 
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(212, 175, 55, 0.5)',
                      color: '#d4af37',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                  >
                    View Offer
                  </button>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24" style={{
                      background: 'linear-gradient(135deg, transparent 50%, rgba(212, 175, 55, 0.1) 50%)'
                    }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#f0d875'
              }}>
                Get Exclusive Offers First
              </h3>
              <p className="text-gray-400">Subscribe to receive the latest deals and promotions</p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-xl text-white placeholder-gray-400 focus:outline-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  fontFamily: 'Poppins, sans-serif'
                }}
              />
              <button 
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #d4af37, #aa8c2c)',
                  color: '#0a1628',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8" style={{
        background: 'rgba(10, 22, 40, 0.95)',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">© 2024 Arnothaya Mall. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-gold transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Offers;