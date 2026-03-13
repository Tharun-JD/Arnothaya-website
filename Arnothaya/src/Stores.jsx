import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './new_assets/logo.png';

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

const StoreIcon = ({ category }) => {
  const icons = {
    Fashion: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
      </svg>
    ),
    Electronics: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="20" x="3" y="2" rx="2" ry="2"></rect>
        <path d="M8 6h.01"></path>
        <path d="M16 6h.01"></path>
        <path d="M12 6h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 10h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M8 14h.01"></path>
      </svg>
    ),
    Beauty: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.06 11.9 8 10.36a3.47 3.47 0 0 0-5.14-.66 3.47 3.47 0 0 0 .08.85L3.5 12.5"></path>
        <path d="m11.9 9.06.84-1.72a3.47 3.47 0 0 1 5.14-.66 3.47 3.47 0 0 1-.08.85l.55.91"></path>
        <path d="m12.5 10.5.63-.63a3.47 3.47 0 0 1 5.14.66 3.47 3.47 0 0 1-.08.85l-.55.91"></path>
        <path d="m14.4 10.9-.63.63a3.47 3.47 0 0 1-5.14-.66 3.47 3.47 0 0 1 .08-.85l.55-.91"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    Footwear: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 13 5c1.08-1 2.42-1.5 4-1.5 3.5 0 6 3 6 8v8"></path>
        <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6-1.87 0-3.5 1.8-5 3-1.08-1-2.42-1.5-4-1.5-3.5 0-6 3-6 8v8"></path>
      </svg>
    ),
    Lifestyle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
        <path d="M10 6h4"></path>
        <path d="M10 10h4"></path>
        <path d="M10 14h4"></path>
        <path d="M10 18h4"></path>
      </svg>
    ),
  };
  return icons[category] || icons.Lifestyle;
};

// Store Card Component
function StoreCard({ store, index }) {
  return (
    <div 
      className="glass-card p-6 group cursor-pointer animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 rounded-2xl flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
          <StoreIcon category={store.category} />
        </div>
        <div className="px-3 py-1 bg-[#d4af37]/10 rounded-full text-[#d4af37] text-xs font-medium">
          {store.floor}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
        {store.name}
      </h3>
      <p className="text-white/60 text-sm mb-4 leading-relaxed">
        {store.description}
      </p>
      <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
        <MapPinIcon />
        <span>{store.floor}</span>
      </div>
      
      <button className="w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] font-semibold text-sm rounded-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 group-hover:scale-[1.02]">
        View Store
      </button>
    </div>
  );
}

function Stores() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
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

  const categories = ['All', 'Fashion', 'Electronics', 'Beauty', 'Footwear', 'Lifestyle'];

  const stores = [
    // Original Stores
    { name: 'Nike', description: 'Sportswear & Footwear', category: 'Footwear', floor: 'Ground Floor' },
    { name: 'Apple Store', description: 'Electronics', category: 'Electronics', floor: 'First Floor' },
    { name: 'Zara', description: 'Fashion Apparel', category: 'Fashion', floor: 'Second Floor' },
    { name: 'H&M', description: 'Clothing Brand', category: 'Fashion', floor: 'Second Floor' },
    { name: 'Lifestyle', description: 'Accessories & Fashion', category: 'Lifestyle', floor: 'First Floor' },
    { name: 'Adidas', description: 'Sports Fashion', category: 'Footwear', floor: 'Ground Floor' },
    { name: 'Samsung', description: 'Electronics & Gadgets', category: 'Electronics', floor: 'First Floor' },
    { name: 'Sephora', description: 'Beauty & Cosmetics', category: 'Beauty', floor: 'Second Floor' },
    { name: 'Puma', description: 'Sportswear & Accessories', category: 'Footwear', floor: 'Ground Floor' },
    // Fashion Brands (6 more)
    { name: 'Louis Vuitton', description: 'Luxury Fashion & Accessories', category: 'Fashion', floor: 'Third Floor' },
    { name: 'Gucci', description: 'Premium Fashion & Leather Goods', category: 'Fashion', floor: 'Third Floor' },
    { name: 'Prada', description: 'Luxury Fashion & Shoes', category: 'Fashion', floor: 'Third Floor' },
    { name: 'Burberry', description: 'British Luxury Fashion', category: 'Fashion', floor: 'Third Floor' },
    { name: 'Versace', description: 'Italian Luxury Fashion', category: 'Fashion', floor: 'Third Floor' },
    { name: 'Calvin Klein', description: 'Modern Fashion & Underwear', category: 'Fashion', floor: 'Second Floor' },
    // Electronics Brands (6 more)
    { name: 'Sony', description: 'Electronics & Gaming', category: 'Electronics', floor: 'First Floor' },
    { name: 'LG', description: 'Home Electronics & Appliances', category: 'Electronics', floor: 'First Floor' },
    { name: 'Dell', description: 'Computers & Laptops', category: 'Electronics', floor: 'First Floor' },
    { name: 'HP', description: 'Computers & Printers', category: 'Electronics', floor: 'First Floor' },
    { name: 'Xiaomi', description: 'Smartphones & Gadgets', category: 'Electronics', floor: 'First Floor' },
    { name: 'OnePlus', description: 'Smartphones & Accessories', category: 'Electronics', floor: 'First Floor' },
    // Beauty Brands (6 more)
    { name: 'MAC Cosmetics', description: 'Professional Makeup', category: 'Beauty', floor: 'Second Floor' },
    { name: 'L\'Occitane', description: 'Natural Skincare & Fragrances', category: 'Beauty', floor: 'Second Floor' },
    { name: 'The Body Shop', description: 'Ethical Beauty Products', category: 'Beauty', floor: 'Second Floor' },
    { name: 'Kiehl\'s', description: 'Premium Skincare', category: 'Beauty', floor: 'Second Floor' },
    { name: 'Estée Lauder', description: 'Luxury Skincare & Makeup', category: 'Beauty', floor: 'Third Floor' },
    { name: 'Nykaa', description: 'Beauty & Personal Care', category: 'Beauty', floor: 'Second Floor' },
    // Footwear Brands (6 more)
    { name: 'Reebok', description: 'Fitness & Sports Shoes', category: 'Footwear', floor: 'Ground Floor' },
    { name: 'New Balance', description: 'Athletic & Casual Footwear', category: 'Footwear', floor: 'Ground Floor' },
    { name: 'Converse', description: 'Casual Footwear & Apparel', category: 'Footwear', floor: 'Ground Floor' },
    { name: 'Vans', description: 'Skate & Street Footwear', category: 'Footwear', floor: 'Ground Floor' },
    { name: ' Skechers', description: 'Comfort & Performance Shoes', category: 'Footwear', floor: 'Ground Floor' },
    { name: 'Clarks', description: 'Premium Leather Shoes', category: 'Footwear', floor: 'Ground Floor' },
    // Lifestyle Brands (6 more)
    { name: 'IKEA', description: 'Home Furniture & Decor', category: 'Lifestyle', floor: 'Third Floor' },
    { name: 'Home Centre', description: 'Modern Home Furnishings', category: 'Lifestyle', floor: 'Third Floor' },
    { name: 'Urban Ladder', description: 'Premium Furniture', category: 'Lifestyle', floor: 'Third Floor' },
    { name: 'FabIndia', description: 'Indian Ethnic Wear & Home', category: 'Lifestyle', floor: 'Second Floor' },
    { name: 'Shoppers Stop', description: 'Department Store & Brands', category: 'Lifestyle', floor: 'First Floor' },
    { name: 'Westside', description: 'Fashion & Lifestyle Store', category: 'Lifestyle', floor: 'First Floor' },
  ];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          store.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || store.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
                  item.page === 'stores' ? 'text-[#d4af37]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#d4af37] transition-all duration-300 ${item.page === 'stores' ? 'w-full' : 'group-hover:w-full w-0'}`}></span>
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

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
              Explore Our <span className="text-[#d4af37] font-medium">Stores</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Discover top brands and exciting shopping experiences
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-[#aa8c2c]/20 rounded-2xl blur-xl"></div>
              <div className="relative glass-card flex items-center px-6 py-4">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search for a store..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-white/50 px-4 py-2 outline-none text-sm"
                />
              </div>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up delay-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a1628] shadow-[0_10px_30px_rgba(212,175,55,0.3)]'
                    : 'glass-card text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Store Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store, index) => (
              <StoreCard key={store.name} store={store} index={index} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredStores.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No stores found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 text-[#d4af37] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
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

export default Stores;
