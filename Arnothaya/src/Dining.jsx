import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import dining from './assets/dining.png';
import food from './assets/food.png';
import rest from './assets/rest.png';
import spa from './assets/spa.png';

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

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const UtensilsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
    <path d="M7 2v20"></path>
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
  </svg>
);

const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z"></path>
    <path d="M6 1v3"></path>
    <path d="M10 1v3"></path>
    <path d="M14 1v3"></path>
  </svg>
);

const WineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8"></path>
    <path d="M12 11v11"></path>
    <path d="M17 11h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2"></path>
  </svg>
);

const CakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
    <path d="M2 21h20"></path>
    <path d="M7 8v2"></path>
    <path d="M12 8v2"></path>
    <path d="M17 8v2"></path>
    <path d="M7 4h.01"></path>
    <path d="M12 4h.01"></path>
    <path d="M17 4h.01"></path>
  </svg>
);

// Restaurant Card Component
function RestaurantCard({ restaurant, index }) {
  const getIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'pizza': return <UtensilsIcon />;
      case 'coffee': return <CoffeeIcon />;
      case 'fine dining': return <WineIcon />;
      case 'dessert': return <CakeIcon />;
      default: return <UtensilsIcon />;
    }
  };

  return (
    <div 
      className="glass-card overflow-hidden group cursor-pointer animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 px-3 py-1 bg-[#d4af37]/90 text-[#0a1628] text-xs font-bold rounded-full">
          {restaurant.rating} ★
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 rounded-xl flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
            {getIcon(restaurant.cuisineType)}
          </div>
          <div className="flex items-center gap-1 text-white/50 text-sm">
            <ClockIcon />
            {restaurant.timing}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
          {restaurant.name}
        </h3>
        <p className="text-white/60 text-sm mb-4 leading-relaxed">
          {restaurant.description}
        </p>
        <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
          <MapPinIcon />
          <span>{restaurant.floor}</span>
        </div>
        
        <button className="w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm rounded-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 group-hover:scale-[1.02]">
          View Menu
        </button>
      </div>
    </div>
  );
}

function Dining() {
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState('All');
  
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

  const categories = ['All', 'Fast Food', 'Coffee', 'Fine Dining', 'Dessert', 'Quick Bites'];

  const restaurants = [
    // Fast Food
    { 
      name: 'Pizza Hub', 
      description: 'Authentic Italian pizzas with fresh ingredients and cheesy delights', 
      cuisineType: 'Fast Food', 
      floor: 'Food Court',
      timing: '10AM - 10PM',
      rating: '4.5',
      image: food 
    },
    { 
      name: 'Burger Barn', 
      description: 'Gourmet burgers with premium beef and creative toppings', 
      cuisineType: 'Fast Food', 
      floor: 'Food Court',
      timing: '11AM - 11PM',
      rating: '4.3',
      image: rest 
    },
    { 
      name: 'Taco Town', 
      description: 'Mexican street food with authentic flavors and spices', 
      cuisineType: 'Fast Food', 
      floor: 'Food Court',
      timing: '11AM - 10PM',
      rating: '4.4',
      image: food 
    },
    { 
      name: 'Wok & Roll', 
      description: 'Asian fusion cuisine with sizzling wok preparations', 
      cuisineType: 'Fast Food', 
      floor: 'Food Court',
      timing: '11AM - 10PM',
      rating: '4.2',
      image: rest 
    },
    // Coffee
    { 
      name: 'Coffee Lounge', 
      description: 'Premium coffees from around the world with cozy ambiance', 
      cuisineType: 'Coffee', 
      floor: 'First Floor',
      timing: '8AM - 12AM',
      rating: '4.7',
      image: dining 
    },
    { 
      name: 'Starbrew Café', 
      description: 'Artisan coffee blends and delicious pastries', 
      cuisineType: 'Coffee', 
      floor: 'First Floor',
      timing: '7AM - 11PM',
      rating: '4.6',
      image: dining 
    },
    { 
      name: 'Espresso Express', 
      description: 'Quick coffee fixes and light bites on the go', 
      cuisineType: 'Coffee', 
      floor: 'Ground Floor',
      timing: '6AM - 10PM',
      rating: '4.4',
      image: dining 
    },
    // Fine Dining
    { 
      name: 'Fine Dining Restaurant', 
      description: 'Exquisite multi-cuisine fine dining with elegant ambiance', 
      cuisineType: 'Fine Dining', 
      floor: 'Third Floor',
      timing: '12PM - 11PM',
      rating: '4.8',
      image: rest 
    },
    { 
      name: 'The Steakhouse', 
      description: 'Premium steaks and grilled specialties with vintage décor', 
      cuisineType: 'Fine Dining', 
      floor: 'Third Floor',
      timing: '12PM - 12AM',
      rating: '4.9',
      image: rest 
    },
    { 
      name: 'Ocean Catch', 
      description: 'Fresh seafood with ocean views and elegant plating', 
      cuisineType: 'Fine Dining', 
      floor: 'Third Floor',
      timing: '12PM - 11PM',
      rating: '4.7',
      image: rest 
    },
    { 
      name: 'Spice Garden', 
      description: 'Royal Indian cuisine with traditional recipes', 
      cuisineType: 'Fine Dining', 
      floor: 'Third Floor',
      timing: '12PM - 11PM',
      rating: '4.6',
      image: food 
    },
    // Dessert
    { 
      name: 'Dessert Bar', 
      description: 'Indulgent desserts, ice creams, and sweet treats', 
      cuisineType: 'Dessert', 
      floor: 'First Floor',
      timing: '11AM - 10PM',
      rating: '4.8',
      image: spa 
    },
    { 
      name: 'Sweet Dreams', 
      description: 'Handmade chocolates and confections', 
      cuisineType: 'Dessert', 
      floor: 'First Floor',
      timing: '10AM - 9PM',
      rating: '4.5',
      image: spa 
    },
    { 
      name: 'Frozen Fantasy', 
      description: 'Artisan ice creams with unique flavors', 
      cuisineType: 'Dessert', 
      floor: 'Food Court',
      timing: '11AM - 10PM',
      rating: '4.6',
      image: spa 
    },
    // Quick Bites
    { 
      name: 'Snack Corner', 
      description: 'Quick bites and chaat with authentic flavors', 
      cuisineType: 'Quick Bites', 
      floor: 'Food Court',
      timing: '10AM - 10PM',
      rating: '4.2',
      image: food 
    },
    { 
      name: 'Sushi Stop', 
      description: 'Fresh sushi rolls and Japanese snacks', 
      cuisineType: 'Quick Bites', 
      floor: 'Food Court',
      timing: '11AM - 10PM',
      rating: '4.4',
      image: food 
    },
  ];

  const filteredRestaurants = filter === 'All' 
    ? restaurants 
    : restaurants.filter(r => r.cuisineType === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1b3d] to-[#152238]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#d4af37]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0d1b3d]/50 rounded-full blur-3xl"></div>
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
                  item.page === 'dining' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#d4af37] transition-all duration-300 ${item.page === 'dining' ? 'w-full' : 'group-hover:w-full w-0'}`}></span>
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
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
              Dining at <span className="text-[#d4af37] font-medium">Arnothaya Mall</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Savor exquisite cuisines from around the world at our premium dining destinations
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up delay-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] shadow-[0_10px_30px_rgba(212,175,55,0.3)]'
                    : 'glass-card text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} index={index} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                Culinary <span className="text-[#d4af37]">Experience</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-light text-[#d4af37] mb-2">25+</div>
                  <div className="text-white/60 text-sm">Restaurants & Cafes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#d4af37] mb-2">15+</div>
                  <div className="text-white/60 text-sm">Cuisine Types</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#d4af37] mb-2">5000</div>
                  <div className="text-white/60 text-sm">Seating Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-[#d4af37] mb-2">4.5★</div>
                  <div className="text-white/60 text-sm">Average Rating</div>
                </div>
              </div>
            </div>
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

export default Dining;
