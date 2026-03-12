import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Home, Info, Phone, Wrench } from 'lucide-react';
import logo from './assets/logo.png';
import mall from './assets/mall.png';
import food from './assets/food.png';
import dining from './assets/dining.png';
import rest from './assets/rest.png';
import movie from './assets/move.png';
import playImg from './assets/Play.png';
import ticket from './assets/ticket.png';
import shop from './assets/shop.png';
import parking from './assets/parking.png';
import gaming from './assets/entry.png';
import spa from './assets/spa.png';
import gamingZone from './assets/gaming_zone.png';

function OurServices() {
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { 
      title: 'Premium Cinema', 
      img: movie, 
      desc: 'Experience the pinnacle of filmmaking with our world-class 4K laser projection systems and earth-shaking Dolby Atmos 360° audio suites, designed for absolute immersion.',
      timing: '09:00 AM - 01:00 AM',
      highlights: ['4K Laser Projection', 'Dolby Atmos Surround', 'Luxury Recliner Seats', '5 Massive Screens', 'Acoustically Treated Halls', 'Premium Concierge Service']
    },
    { 
      title: 'Online Booking', 
      img: ticket, 
      desc: 'Skip the queues with our seamless digital ticketing platform. Secure your favorite seats and pre-book gourmet meals instantly through our user-friendly mobile service.',
      timing: '24/7 Available',
      highlights: ['Instant E-Tickets', 'Advanced Seat Selection', 'Gourmet Meal Pre-order', 'Mobile App Exclusive Deals', 'Secure Payment Gateway', 'Paperless Entry System']
    },
    { 
      title: 'Food Court', 
      img: food, 
      desc: 'Savor a world of flavors at our curated food destination, featuring everything from traditional local delicacies to international street food and artisanal snacks.',
      timing: '10:00 AM - 11:30 PM',
      highlights: ['Multi-cuisine Menu', 'Premium Movie Snacks', 'Fresh Juice & Mocktails', 'Express Service Counters', 'Live Kitchen Experience', 'Hygienic Dining Area']
    },
    { 
      title: 'Rest Area', 
      img: rest, 
      desc: 'Relax in our elegantly designed waiting lounges, equipped with high-speed charging hubs, climate control, and plush seating for a truly premium experience.',
      timing: 'Patrons Priority',
      highlights: ['Climate Controlled Lounge', 'Comfortable VIP Seating', 'High-speed Wi-Fi & Charging', 'Peaceful Atmosphere', 'Premium Reading Nook', 'Relaxing Background Music']
    },
    { 
      title: 'Kids Play Area', 
      img: playImg, 
      desc: 'A safe and vibrant paradise for children, featuring the latest interactive arcade games, VR experiences, and monitored activity zones for family fun.',
      timing: '11:00 AM - 10:00 PM',
      highlights: ['Interactive Arcade Games', 'Safe & Monitored Zone', 'VR Simulation Pods', 'Family Friendly Fun', 'Creative Workshop Corner', 'Toddler-Safe Soft Play']
    },
    { 
      title: 'Shopping', 
      img: shop, 
      desc: 'Explore a curated collection of fashion, electronics, and lifestyle brands. Our boutique retail space offers the perfect blend of luxury and convenience under one roof.',
      timing: '10:00 AM - 09:30 PM',
      highlights: ['Global Fashion Brands', 'Premium Electronics', 'Exclusive Lifestyle Retail', 'Convenient Mall Location', 'Personal Shopper Assistance', 'Multi-brand Tech Hub']
    },
    { 
      title: 'Free Parking', 
      img: parking, 
      desc: 'Enjoy peace of mind with our multi-level secure parking facility, offering space for 500+ vehicles with 24/7 CCTV surveillance and valet assistance.',
      timing: '24/7 Secure Access',
      highlights: ['500+ Vehicle Capacity', '24/7 CCTV Surveillance', 'Valet Assistance', 'Safe Multi-level Deck', 'Designated EV Charging', 'Real-time Slot Tracking']
    },
    { 
      title: 'Gaming Zone', 
      img: gamingZone, 
      desc: 'Level up in our high-octane gaming arena, featuring the latest PlayStation and Xbox consoles, ultra-high-end PC stations, and competitive esports tournaments.',
      timing: '10:30 AM - 11:30 PM',
      highlights: ['High-end PC Gaming', 'PS5 & Xbox Stations', 'VR Simulator Pods', 'Competitive Esports Arena', 'High-speed LAN Network', 'Professional Gaming Gear']
    },
    { 
      title: 'Salon & Spa', 
      img: spa, 
      desc: 'Indulge in a world-class relaxation experience. Our professional therapists and stylists offer premium grooming, therapeutic massages, and complete makeover services.',
      timing: '10:00 AM - 08:30 PM',
      highlights: ['Professional Grooming', 'Therapeutic Massage', 'Expert Hair Styling', 'Refreshing Spa Treatments', 'Aromatherapy Sessions', 'Bridal & Groom Packages']
    },
    { 
      title: 'Dining Spot', 
      img: dining, 
      desc: 'Experience a culinary journey with our diverse dining options. From casual cafes to fine dining restaurants, we offer an array of cuisines to satisfy every palate.',
      timing: '10:00 AM - 11:00 PM',
      highlights: ['Multi-cuisine Restaurants', 'Fine Dining Experience', 'Casual Cafes', 'Gourmet Food Court', 'Live Kitchen', 'Vegetarian & Vegan Options']
    }
  ];

  useEffect(() => {
    if (selectedService && modalRef.current) {
      gsap.fromTo(modalRef.current, 
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [selectedService]);

  const navItems = [
    { name: 'About Us', page: 'about' },
    { name: 'Our Services', page: 'ourservices' },
    { name: 'Book Tickets', page: 'booktickets' },
    { name: 'Contact Us', page: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex items-center gap-2 md:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                to={'/' + item.page}
                className="px-4 py-2 text-gray-800 hover:text-green-700 font-semibold transition-all duration-300 text-sm md:text-base uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 h-[60vh] bg-gray-900">
          <img 
            src={mall} 
            alt="Arnothaya Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            Explore Offerings
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-tighter">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
            Welcome to Arnothaya Cinemax - Your Premier Entertainment Destination in Palladam. 
            Experience the perfect blend of cinema, dining, shopping, and fun all under one roof.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-700 uppercase tracking-widest">
              Explore Every Kind<br />Of Service We Offer
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-24 bg-green-700"></div>
              <div className="h-4 w-4 rotate-45 border-2 border-green-700"></div>
              <div className="h-px w-24 bg-green-700"></div>
            </div>
            <p className="text-gray-600 mt-6 text-lg">
              Each service offers a perfect blend of comfort, elegance, and functionality, designed to enhance your entertainment experience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                {/* Image */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                    <span className="font-bold text-green-700 uppercase text-sm">{service.title}</span>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-700 font-bold mt-1">•</span>
                        <span className="text-gray-700 font-semibold">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-bold transition-all duration-300 uppercase tracking-widest rounded"
                  >
                    View Highlights
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Book Your Ticket Section */}
          <div className="mt-32 py-20 bg-green-50 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 uppercase tracking-widest mb-4">
                Book Your Ticket
              </h2>
              <p className="text-gray-600 text-lg">
                Get your tickets now and enjoy a seamless entertainment experience
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Link 
                to="/booktickets" 
                className="px-12 py-6 bg-green-700 hover:bg-green-800 text-white font-bold text-xl uppercase tracking-widest rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <span className="text-2xl">🎟️</span>
                Book Ticket
              </Link>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-24">
            <div className="h-px w-24 bg-green-700"></div>
            <div className="h-4 w-4 rotate-45 border-2 border-green-700"></div>
            <div className="h-px w-24 bg-green-700"></div>
          </div>

          {/* Highlights Modal (Pop-up) */}
          {selectedService && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 transition-all duration-300">
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer transition-opacity duration-500"
                style={{ opacity: selectedService ? 1 : 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(null);
                }}
              ></div>
              
              <div 
                ref={modalRef}
                className="relative bg-white border border-gray/20 rounded-4xl max-w-lg w-full overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.2)] z-10"
              >
                <div className="relative aspect-video">
                  <img src={selectedService.img} alt={selectedService.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
                  
                  {/* Timing Badge over Image */}
                  <div className="absolute bottom-4 left-6 px-4 py-2 bg-green-700 text-white font-black rounded-xl text-xs flex items-center gap-2 shadow-2xl">
                    <span>🕒</span>
                    <span>{selectedService.timing}</span>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(null);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-xl group cursor-pointer z-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block px-3 py-1 bg-green-700/10 text-green-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-green-700/20">
                      Service Highlight
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight italic">
                    {selectedService.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gray/5 p-3 rounded-xl border border-gray/5 hover:border-green-700/30 transition-colors group">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:bg-green-700 transition-colors"></div>
                        <span className="font-bold text-gray/80 text-[11px] tracking-wide">{point}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-gray/40 text-[11px] leading-relaxed border-t border-gray/10 pt-6 italic">
                    {selectedService.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
