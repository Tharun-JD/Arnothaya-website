import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Home, Info, Phone, Wrench } from 'lucide-react';
import logo from './assets/logo.png';
import mall from './assets/mall.png';
import food from './assets/food.png';
import rest from './assets/rest.png';
import movie from './assets/move.png';
import playImg from './assets/Play.png';
import ticket from './assets/ticket.png';
import shop from './assets/shop.png';
import parking from './assets/parking.png';
import gaming from './assets/entry.png';
import salon from './assets/head.png';
import gamingZone from './assets/gaming_zone.png';

function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const scrollContainerRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.offsetWidth;
      const index = Math.round(scrollLeft / 412); // Card width (380) + Gap (32)
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const scrollAmount = index * 412;
      scrollContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (selectedService && modalRef.current) {
      gsap.fromTo(modalRef.current, 
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [selectedService]);

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
      img: salon, 
      desc: 'Indulge in a world-class relaxation experience. Our professional therapists and stylists offer premium grooming, therapeutic massages, and complete makeover services.',
      timing: '10:00 AM - 08:30 PM',
      highlights: ['Professional Grooming', 'Therapeutic Massage', 'Expert Hair Styling', 'Refreshing Spa Treatments', 'Aromatherapy Sessions', 'Bridal & Groom Packages']
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -412, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 412, behavior: 'smooth' });
    }
  };

  const movieBtnRef = useRef(null);
  const parkingBtnRef = useRef(null);

  useEffect(() => {
    // Entrance Animation - Using fromTo for absolute visibility guarantee
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Set initial state explicitly
    gsap.set([movieBtnRef.current, parkingBtnRef.current], { opacity: 0, y: 50 });

    tl.to([movieBtnRef.current, parkingBtnRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.2, // Faster arrival
      onComplete: () => {
        // Continuous Floating Animation - Start only after entrance
        if (movieBtnRef.current) {
          gsap.to(movieBtnRef.current, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }

        if (parkingBtnRef.current) {
          gsap.to(parkingBtnRef.current, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.5
          });
        }
      }
    });
  }, []);

  const navItems = [
    { name: 'Home', page: 'home', icon: <Home className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'About', page: 'about', icon: <Info className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'Our Services', page: 'ourservices', icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'Contact Us', page: 'contact', icon: <Phone className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-yellow-400 selection:text-black pb-40">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-md py-3 transition-opacity duration-700 opacity-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                to={'/' + item.page}
                className="px-4 py-2 text-white hover:text-yellow-400 font-bold transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
              >
                <span>{item.icon}</span>
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="relative pt-32 pb-16 flex items-center justify-center">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            Explore Offerings
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-red-600 leading-tight uppercase tracking-tighter animatePulseGlow">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
            Welcome to Arnothaya Cinemax - Your Premier Entertainment Destination in Palladam. 
            Experience the perfect blend of cinema, dining, shopping, and fun all under one roof.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">What We Offer</h2>
            <p className="text-white/50 mt-4 uppercase tracking-[0.3em] font-black text-sm">Click any service to view highlights</p>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative group">
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-6 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-6 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto pb-12 scroll-smooth scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((service, i) => (
                <div 
                  key={i}
                  onClick={() => setSelectedService(service)}
                  className="bg-gray-900/50 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-400/50 transition-all duration-500 min-w-[320px] md:min-w-[380px] group/card shadow-xl cursor-pointer hover:scale-[1.02]"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-6 py-2 bg-yellow-400 text-black font-black uppercase tracking-widest text-sm rounded-full">View Highlights</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">{service.title}</h3>
                    <p className="text-white/70 leading-relaxed text-lg line-clamp-3">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots (Circles) */}
            <div className="flex justify-center items-center gap-3 mt-4">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-3 rounded-full transition-all duration-500 cursor-pointer ${
                    activeIndex === i 
                      ? 'w-8 bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]' 
                      : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>
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
                className="relative bg-gray-900 border border-white/20 rounded-4xl max-w-lg w-full overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)] z-10"
              >
                <div className="relative aspect-video">
                  <img src={selectedService.img} alt={selectedService.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Timing Badge over Image */}
                  <div className="absolute bottom-4 left-6 px-4 py-2 bg-yellow-400 text-black font-black rounded-xl text-xs flex items-center gap-2 shadow-2xl">
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
                    <div className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-yellow-400/20">
                      Service Highlight
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight italic">
                    {selectedService.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-yellow-400/30 transition-colors group">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:bg-yellow-400 transition-colors"></div>
                        <span className="font-bold text-white/80 text-[11px] tracking-wide">{point}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-white/40 text-[11px] leading-relaxed border-t border-white/10 pt-6 italic">
                    {selectedService.desc}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Guaranteed Booking Button Section */}
          <div className="mt-24 flex flex-col sm:flex-row justify-center items-center gap-8 relative z-20 pb-12">
            <Link 
              ref={movieBtnRef}
              to="/booktickets" 
              className="w-full sm:w-auto px-12 py-6 bg-yellow-500 hover:bg-yellow-600 text-black font-black rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(234,179,8,0.3)] text-center text-xl hover:scale-110 active:scale-95 flex items-center justify-center gap-4 group opacity-0 translate-y-12"
            >
              <span className="text-3xl group-hover:rotate-12 transition-transform">🎟️</span>
              Book Movie Tickets
            </Link>
            <Link 
              ref={parkingBtnRef}
              to="/parking" 
              className="w-full sm:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] text-center text-xl hover:scale-110 active:scale-95 flex items-center justify-center gap-4 group opacity-0 translate-y-12"
            >
              <span className="text-3xl group-hover:rotate-12 transition-transform">🅿️</span>
              Parking Ticket Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
