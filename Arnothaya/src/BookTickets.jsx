import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowLeft, Printer, Car, Bike, Truck, Bus, SquareParking } from 'lucide-react';
import logo from './assets/logo.png';
import head from './assets/head.png';
import mall from './assets/mall.png';

const generateBookingId = () => 'ARN-' + (Date.now().toString(36) + Math.random().toString(36).substring(2, 5)).toUpperCase();

function BookTickets() {
  const [bookingType, setBookingType] = useState('movie'); // 'movie' or 'parking'
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  
  // Parking state
  const [parkingStep, setParkingStep] = useState(1);
  const [selectedParkingDate, setSelectedParkingDate] = useState(null);
  const [selectedParkingSlot, setSelectedParkingSlot] = useState(null);
  const [vehicleType, setVehicleType] = useState('car');
  const [selectedParkingSpots, setSelectedParkingSpots] = useState([]);
  const [parkingShowConfirmDialog, setParkingShowConfirmDialog] = useState(false);
  const [parkingBookingConfirmed, setParkingBookingConfirmed] = useState(false);
  const [parkingBookingDetails, setParkingBookingDetails] = useState(null);

  const heroRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const contentRef = useRef(null);
  const movieCardsRef = useRef([]);
  const ticketRef = useRef(null);
  const [row1Page, setRow1Page] = useState(0);
  const [row2Page, setRow2Page] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Hero Entrance
    gsap.fromTo(heroRef.current, 
      { opacity: 0, scale: 1.1 }, 
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  // Sync dot indicators with native manual scroll
  useEffect(() => {
    const attachScrollListener = (rowRef, setPage, totalCards, cardsPerPage = 3) => {
      const el = rowRef.current;
      if (!el) return;
      const handler = () => {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll <= 0) return;
        const totalDots = Math.ceil(totalCards / cardsPerPage);
        const currentPage = Math.round((el.scrollLeft / maxScroll) * (totalDots - 1));
        setPage(Math.max(0, Math.min(currentPage, totalDots - 1)));
      };
      el.addEventListener('scroll', handler, { passive: true });
      return () => el.removeEventListener('scroll', handler);
    };
    // Attach for both rows (9 movies each)
    const cleanup1 = attachScrollListener(row1Ref, setRow1Page, 9);
    const cleanup2 = attachScrollListener(row2Ref, setRow2Page, 9);
    return () => { cleanup1?.(); cleanup2?.(); };
  }, [step]);

  // Animate Movie Cards on Step 1
  useEffect(() => {
    if (step === 1 && !bookingConfirmed) {
      gsap.fromTo(".movie-card", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );
    }
  }, [step, bookingConfirmed]);

  // Animate Steps 2 Content (Dates & Shows)
  useEffect(() => {
    if (step === 2 && !bookingConfirmed) {
      gsap.fromTo(".animate-date",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: "back.out(1.5)", delay: 0.3 }
      );
    }
  }, [step, bookingConfirmed]);

  // Animate Showtimes when date selected
  useEffect(() => {
    if (selectedDate) {
      gsap.fromTo(".animate-show",
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [selectedDate]);

  // Animate Seats when show selected
  useEffect(() => {
    if (selectedShow && selectedDate) {
      gsap.fromTo(".animate-seat",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, stagger: 0.01, ease: "back.out(2)", delay: 0.1 }
      );
    }
  }, [selectedShow, selectedDate]);

  // Handle Step Transitions
  const changeStep = (newStep) => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setStep(newStep);
        gsap.fromTo(contentRef.current, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      }
    });
  };

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Our Services', page: 'ourservices' },
    { name: 'Book Tickets', page: 'booktickets' },
    { name: 'Contact Us', page: 'contact' }
  ];

  const movies = [
    { id: 1, title: 'Dragon', genre: 'Action', rating: 'UA', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=80' },
    { id: 2, title: 'Vaalthaikumaran', genre: 'Drama', rating: 'U', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&q=80' },
    { id: 3, title: 'Mahaan', genre: 'Thriller', rating: 'UA', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&q=80' },
    { id: 4, title: 'Zero', genre: 'Comedy', rating: 'U', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&q=80' },
    { id: 5, title: 'Captain America', genre: 'Action', rating: 'UA', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&q=80' },
    { id: 6, title: 'Devara', genre: 'Action', rating: 'UA', image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b13?w=300&q=80' },
    { id: 7, title: 'Kantara', genre: 'Adventure', rating: 'UA', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&q=80' },
    { id: 8, title: 'Jawan', genre: 'Action', rating: 'UA', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&q=80' },
    { id: 9, title: 'Leo', genre: 'Thriller', rating: 'UA', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80' },
    { id: 10, title: 'Salar', genre: 'Action', rating: 'UA', image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&q=80' },
    { id: 11, title: 'Animal', genre: 'Drama', rating: 'A', image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&q=80' },
    { id: 12, title: 'Dunki', genre: 'Comedy', rating: 'UA', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=80' },
    { id: 13, title: 'Viduthalai', genre: 'Drama', rating: 'UA', image: 'https://images.unsplash.com/photo-1547700055-b61cacebece9?w=300&q=80' },
    { id: 14, title: 'Ponniyin Selvan 2', genre: 'Epic', rating: 'UA', image: 'https://images.unsplash.com/photo-1456827764773-1ed1a8b55ef1?w=300&q=80' },
    { id: 15, title: 'Adipurush', genre: 'Mythology', rating: 'UA', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=300&q=80' },
    { id: 16, title: 'Thunivu', genre: 'Thriller', rating: 'UA', image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&q=80' },
    { id: 17, title: 'Varisu', genre: 'Family', rating: 'U', image: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=300&q=80' },
    { id: 18, title: 'Vikram', genre: 'Action', rating: 'UA', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&q=80' },
  ];

  const dates = [
    { day: 'Mon', date: '10' },
    { day: 'Tue', date: '11' },
    { day: 'Wed', date: '12' },
    { day: 'Thu', date: '13' },
    { day: 'Fri', date: '14' },
    { day: 'Sat', date: '15' },
    { day: 'Sun', date: '16' },
  ];

  const shows = [
    { time: '09:00 AM', type: 'MORNING' },
    { time: '12:30 PM', type: 'MATINEE' },
    { time: '03:30 PM', type: 'AFTERNOON' },
    { time: '06:30 PM', type: 'EVENING' },
    { time: '09:30 PM', type: 'NIGHT' },
  ];

  // Parking Data
  const vehicleTypes = [
    { id: 'car', name: 'Car', icon: <Car className="w-12 h-12 mx-auto" />, price: 50 },
    { id: 'bike', name: 'Bike', icon: <Bike className="w-12 h-12 mx-auto" />, price: 20 },
    { id: 'suv', name: 'SUV', icon: <Truck className="w-12 h-12 mx-auto" />, price: 75 },
    { id: 'auto', name: 'Auto', icon: <Bus className="w-12 h-12 mx-auto" />, price: 40 },
  ];

  const parkingTimeSlots = [
    { time: '06:00 AM', type: 'EARLY BIRD' },
    { time: '10:00 AM', type: 'MORNING' },
    { time: '02:00 PM', type: 'AFTERNOON' },
    { time: '06:00 PM', type: 'EVENING' },
    { time: '10:00 PM', type: 'NIGHT' },
  ];

  const parkingSpots = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    spot: `P-${(i + 1).toString().padStart(2, '0')}`
  }));

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatPrice = (row) => {
    if (row === 'A' || row === 'B') return 350;
    if (row === 'C' || row === 'D' || row === 'E') return 250;
    return 200;
  };

  const totalPrice = selectedSeats.reduce((total, seat) => {
    return total + getSeatPrice(seat.charAt(0));
  }, 0);

  // Parking helper functions
  const getVehiclePrice = () => {
    const v = vehicleTypes.find(v => v.id === vehicleType);
    return v ? v.price : 50;
  };

  const toggleParkingSpot = (spot) => {
    if (selectedParkingSpots.includes(spot)) {
      setSelectedParkingSpots(selectedParkingSpots.filter(s => s !== spot));
    } else {
      setSelectedParkingSpots([...selectedParkingSpots, spot]);
    }
  };

  const totalParkingPrice = selectedParkingSpots.length * getVehiclePrice();

  const handleParkingBooking = () => {
    const details = {
      date: selectedParkingDate,
      slot: selectedParkingSlot,
      vehicle: vehicleType,
      spots: selectedParkingSpots,
      total: totalParkingPrice,
      pricePerHour: getVehiclePrice(),
      bookingId: generateBookingId()
    };
    
    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      onComplete: () => {
        setParkingBookingDetails(details);
        setParkingBookingConfirmed(true);
        setTimeout(() => {
          gsap.fromTo(".parking-ticket", 
            { y: 100, opacity: 0, rotateY: -15 }, 
            { y: 0, opacity: 1, rotateY: 0, duration: 1, ease: "power4.out" }
          );
        }, 100);
      }
    });
  };

  const resetParkingBooking = () => {
    gsap.to(".parking-ticket", {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      onComplete: () => {
        setSelectedParkingDate(null);
        setSelectedParkingSlot(null);
        setVehicleType('car');
        setSelectedParkingSpots([]);
        setParkingStep(1);
        setParkingBookingConfirmed(false);
        setParkingBookingDetails(null);
      }
    });
  };

  const handleBooking = () => {
    const details = {
      movie: selectedMovie,
      date: selectedDate,
      show: selectedShow,
      seats: selectedSeats,
      total: totalPrice,
      bookingId: generateBookingId()
    };
    
    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      onComplete: () => {
        setBookingDetails(details);
        setBookingConfirmed(true);
        // Animate ticket reveal
        setTimeout(() => {
          gsap.fromTo(".ticket-box", 
            { y: 100, opacity: 0, rotateX: 45 }, 
            { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: "back.out(1.7)" }
          );
        }, 100);
      }
    });
  };

  const printTicket = () => {
    window.print();
  };

  const scrollRow = (rowRef, direction, setPage, totalCards) => {
    if (!rowRef.current) return;
    const el = rowRef.current;
    const scrollAmount = direction === 'left' ? -el.clientWidth * 0.8 : el.clientWidth * 0.8;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const jumpToPage = (rowRef, pageIndex, dotsCount) => {
    if (!rowRef.current) return;
    const el = rowRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = (pageIndex / Math.max(dotsCount - 1, 1)) * maxScroll;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  const resetBooking = () => {
    gsap.to(".ticket-box", {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => {
        setSelectedMovie(null);
        setSelectedDate(null);
        setSelectedShow(null);
        setSelectedSeats([]);
        setStep(1);
        setSearchQuery('');
        setBookingConfirmed(false);
        setBookingDetails(null);
      }
    });
  };

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
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 h-[60vh] bg-gray-900">
          <img 
            src={mall} 
            alt="Arnothaya Cinemax" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            Cinemax Portal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-tighter">
            Book Tickets
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
            Experience the magic of cinema with our seamless online booking system. Choose from a wide selection of movies and secure your seats instantly.
          </p>
        </div>
      </div>

      <div ref={contentRef} className="py-12 px-6 max-w-6xl mx-auto">
        {/* Booking Type Toggle */}
        <div className="py-8 px-6 max-w-6xl mx-auto mb-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setBookingType('movie')}
              className={`px-8 py-4 font-black rounded-2xl transition-all duration-300 flex items-center gap-3 ${
                bookingType === 'movie' 
                ? 'bg-green-700 text-white shadow-lg shadow-green-700/30 scale-105' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              🎬 Movie Tickets
            </button>
            <button
              onClick={() => setBookingType('parking')}
              className={`px-8 py-4 font-black rounded-2xl transition-all duration-300 flex items-center gap-3 ${
                bookingType === 'parking' 
                ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30 scale-105' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              🚗 Parking Spot
            </button>
          </div>
        </div>
        {bookingType === 'movie' && !bookingConfirmed && step === 1 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 uppercase tracking-widest">Select a Movie</h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="h-px w-24 bg-green-700"></div>
                <div className="h-4 w-4 rotate-45 border-2 border-green-700"></div>
                <div className="h-px w-24 bg-green-700"></div>
              </div>
              <p className="text-gray-600 mt-6 text-lg">Browse our latest movie selection and book your tickets online</p>
            </div>
            
            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search for a movie..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-white border-2 border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-700 transition-all duration-300 shadow-lg"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Two independent scrollable rows */}
            {(() => {
              const filteredMovies = movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()));
              const mid = Math.ceil(filteredMovies.length / 2);
              const row1Movies = filteredMovies.slice(0, mid);
              const row2Movies = filteredMovies.slice(mid);
              const dotsCount1 = Math.max(1, Math.ceil(row1Movies.length / 3));
              const dotsCount2 = Math.max(1, Math.ceil(row2Movies.length / 3));

              const ArrowBtn = ({ onClick, dir }) => (
                <button onClick={onClick}
                  className={`absolute ${dir === 'left' ? 'left-0 -translate-x-4' : 'right-0 translate-x-4'} top-1/2 -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 active:scale-90 text-black p-3 rounded-full transition-all duration-200 opacity-0 group-hover/slider:opacity-100 cursor-pointer shadow-xl`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={dir === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
                  </svg>
                </button>
              );

              const Dots = ({ count, page, onDotClick }) => (
                <div className="flex justify-center gap-2 mt-3">
                  {Array.from({ length: count }).map((_, i) => (
                    <button key={i} onClick={() => onDotClick(i)}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${page === i ? 'w-6 h-3 bg-green-700 shadow-md shadow-green-700/40' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'}`}
                    />
                  ))}
                </div>
              );

              return (
                <div className="space-y-6">
                  {/* Row 1 */}
                  <div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => scrollRow(row1Ref, 'left', setRow1Page, row1Movies.length)}
                        className="shrink-0 bg-yellow-400 hover:bg-yellow-500 active:scale-90 text-black p-3 rounded-full transition-all duration-200 cursor-pointer shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <div ref={row1Ref} className="flex gap-4 overflow-x-auto scrollbar-hide pb-1 flex-1">
                        {row1Movies.map(movie => (
                          <div key={movie.id} onClick={() => { setSelectedMovie(movie); changeStep(2); }}
                            className="movie-card shrink-0 w-[170px] md:w-[200px] bg-white rounded-2xl overflow-hidden cursor-pointer hover:border-green-700 border-2 border-transparent transition-all duration-500 group/card relative shadow-xl">
                            <div className="aspect-2/3 overflow-hidden">
                              <img src={movie.image} alt={movie.title} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="p-3">
                              <h3 className="font-black text-sm mb-1 group-hover/card:text-green-700 transition-colors uppercase truncate text-gray-900">{movie.title}</h3>
                              <div className="flex items-center gap-1">
                                <span className="text-gray-500 text-[10px] font-bold truncate">{movie.genre}</span>
                                <span className="ml-auto px-1.5 py-0.5 bg-gray-100 text-gray-700 text-[9px] font-black rounded uppercase shrink-0">{movie.rating}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button onClick={() => scrollRow(row1Ref, 'right', setRow1Page, row1Movies.length)}
                        className="shrink-0 bg-yellow-400 hover:bg-yellow-500 active:scale-90 text-black p-3 rounded-full transition-all duration-200 cursor-pointer shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <Dots count={dotsCount1} page={row1Page} onDotClick={i => { jumpToPage(row1Ref, i, dotsCount1); setRow1Page(i); }} />
                  </div>

                  {/* Row 2 */}
                  <div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => scrollRow(row2Ref, 'left', setRow2Page, row2Movies.length)}
                        className="shrink-0 bg-yellow-400 hover:bg-yellow-500 active:scale-90 text-black p-3 rounded-full transition-all duration-200 cursor-pointer shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <div ref={row2Ref} className="flex gap-4 overflow-x-auto scrollbar-hide pb-1 flex-1">
                        {row2Movies.map(movie => (
                          <div key={movie.id} onClick={() => { setSelectedMovie(movie); changeStep(2); }}
                            className="movie-card shrink-0 w-[170px] md:w-[200px] bg-white rounded-2xl overflow-hidden cursor-pointer hover:border-green-700 border-2 border-transparent transition-all duration-500 group/card relative shadow-xl">
                            <div className="aspect-2/3 overflow-hidden">
                              <img src={movie.image} alt={movie.title} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="p-3">
                              <h3 className="font-black text-sm mb-1 group-hover/card:text-green-700 transition-colors uppercase truncate text-gray-900">{movie.title}</h3>
                              <div className="flex items-center gap-1">
                                <span className="text-gray-500 text-[10px] font-bold truncate">{movie.genre}</span>
                                <span className="ml-auto px-1.5 py-0.5 bg-gray-100 text-gray-700 text-[9px] font-black rounded uppercase shrink-0">{movie.rating}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button onClick={() => scrollRow(row2Ref, 'right', setRow2Page, row2Movies.length)}
                        className="shrink-0 bg-yellow-400 hover:bg-yellow-500 active:scale-90 text-black p-3 rounded-full transition-all duration-200 cursor-pointer shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <Dots count={dotsCount2} page={row2Page} onDotClick={i => { jumpToPage(row2Ref, i, dotsCount2); setRow2Page(i); }} />
                  </div>
                </div>
              );
            })()}

          </div>
        )}

        {bookingType === 'movie' && !bookingConfirmed && step === 2 && selectedMovie && (
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => changeStep(1)} 
              className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl mb-8 flex items-center gap-2 transition-all"
            >
              <span>←</span> Back to Movies
            </button>
            
            <div className="bg-gray-900 p-8 rounded-[3rem] border border-white/5 shadow-3xl mb-12">
              <h2 className="text-4xl font-black text-yellow-400 mb-8 uppercase italic">{selectedMovie.title}</h2>
              
              <div className="mb-12">
                <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.3em] mb-4">Select Date</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {dates.map((date, index) => (
                    <button 
                      key={index} 
                      onClick={() => setSelectedDate(date)} 
                      className={`animate-date shrink-0 w-20 h-24 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                        selectedDate?.date === date.date 
                        ? 'border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/30' 
                        : 'border-white/5 bg-black/40 text-gray-500 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-black uppercase tracking-widest">{date.day}</span>
                      <span className="text-2xl font-black">{date.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.3em] mb-4">Select Showtime</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {shows.map((show, index) => (
                      <button 
                        key={index} 
                        onClick={() => setSelectedShow(show)} 
                        className={`animate-show opacity-0 p-5 rounded-2xl border-2 transition-all duration-300 ${
                          selectedShow?.time === show.time 
                          ? 'border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/30' 
                          : 'border-white/5 bg-black/40 text-gray-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl'
                        }`}
                      >
                        <span className="block text-xl font-black">{show.time}</span>
                        <span className="text-[10px] font-black uppercase opacity-60 tracking-wider">{show.type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Seat Selection */}
            {selectedShow && selectedDate && (
              <div className="bg-gray-900 p-8 rounded-[3rem] border border-white/5 shadow-3xl">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-black text-white uppercase mb-8">Select Your Seats</h2>
                  <div className="max-w-md mx-auto relative">
                    <div className="w-full h-2 bg-linear-to-r from-transparent via-red-600/50 to-transparent rounded-full"></div>
                    <div className="h-12 bg-linear-to-b from-red-600/20 to-transparent blur-xl"></div>
                    <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em] -mt-10">SCREEN</p>
                  </div>
                </div>

                <div className="flex justify-center gap-8 mb-12 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-800 rounded-md border border-white/5"></div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-600 rounded-md shadow-lg shadow-red-600/20"></div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Selected</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 mb-12">
                  {rows.map((row) => (
                    <div key={row} className="flex items-center gap-4">
                      <span className="w-6 text-gray-700 font-black text-sm">{row}</span>
                      <div className="flex gap-2">
                        {Array.from({ length: seatsPerRow }, (_, i) => {
                          const seatNumber = row + (i + 1);
                          const isSelected = selectedSeats.includes(seatNumber);
                          return (
                            <button 
                              key={seatNumber} 
                              onClick={() => toggleSeat(seatNumber)} 
                              className={`animate-seat opacity-0 w-9 h-9 rounded-lg text-xs font-black transition-all duration-300 ${
                                isSelected 
                                ? 'bg-red-600 text-white scale-110 shadow-lg shadow-red-600/30' 
                                : 'bg-gray-800 text-gray-500 hover:bg-gray-700 hover:scale-110 hover:shadow-md'
                              }`}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                      </div>
                      <span className="w-6 text-gray-700 font-black text-sm">{row}</span>
                    </div>
                  ))}
                </div>

                {selectedSeats.length > 0 && (
                  <div className="text-center pt-8 border-t border-white/5">
                    <div className="flex justify-between items-center max-w-sm mx-auto mb-8">
                      <div className="text-left">
                        <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Total Bill</p>
                        <p className="text-4xl font-black text-white">Rs.{totalPrice}</p>
                      </div>
                      <p className="px-4 py-2 bg-white/5 rounded-xl text-yellow-400 font-black">{selectedSeats.length} Seats</p>
                    </div>
                    <button 
                      onClick={() => setShowConfirmDialog(true)} 
                      className="w-full px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-3xl text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/20 uppercase italic tracking-wider"
                    >
                      Confirm Booking
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-white/10 rounded-3xl max-w-md w-full p-6 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  ?
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">Confirm Booking</h3>
                <p className="text-gray-500 text-sm mt-2">Please review your booking details</p>
              </div>
              
              <div className="bg-black/30 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Movie</span>
                  <span className="text-white font-bold">{selectedMovie?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Date</span>
                  <span className="text-white font-bold">{selectedDate?.day}, {selectedDate?.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Show</span>
                  <span className="text-white font-bold">{selectedShow?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Seats</span>
                  <span className="text-white font-bold">{selectedSeats.join(', ')}</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3 flex justify-between">
                  <span className="text-gray-500 text-sm">Total</span>
                  <span className="text-red-500 font-black text-xl">Rs.{totalPrice}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setShowConfirmDialog(false)} 
                  className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setShowConfirmDialog(false);
                    handleBooking();
                  }} 
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl transition-all"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Booking Confirmation Ticket */}
        {bookingType === 'movie' && bookingConfirmed && bookingDetails && (
          <div className="max-w-2xl mx-auto py-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-glow">
                ✓
              </div>
              <h2 className="text-4xl font-black text-white uppercase italic mb-2">Booking Success!</h2>
              <p className="text-gray-500 font-bold">Your cinematic journey begins now</p>
            </div>

            <div className="ticket-box opacity-0 perspective-1000">
              <div className="bg-white text-black rounded-4xl overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.1)]">
                <div className="bg-red-600 text-white p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">Arnothaya Cinemax</h3>
                  <p className="text-xs font-black opacity-60 tracking-[0.3em] uppercase mt-2">Premium Movie Experience</p>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8 border-b border-black/5 pb-8">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Booking ID</p>
                      <p className="font-black text-2xl tracking-tight">{bookingDetails.bookingId}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Movie</p>
                      <p className="font-black text-2xl tracking-tight uppercase italic text-red-600">{bookingDetails.movie.title}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Performance</p>
                      <p className="font-black text-lg">{bookingDetails.date.day}, {bookingDetails.date.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Curtain Rise</p>
                      <p className="font-black text-lg">{bookingDetails.show.time}</p>
                    </div>
                  </div>

                  <div className="mb-8 p-6 bg-black/5 rounded-3xl print:bg-transparent print:p-0 print:border print:border-gray-200">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Boarding Passes (Seats)</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {bookingDetails.seats.map((seat) => (
                        <span key={seat} className="bg-black text-white px-4 py-2 rounded-xl font-black text-sm italic print:bg-gray-200 print:text-black">{seat}</span>
                      ))}
                    </div>
                    {/* Visual Seat Map */}
                    <div className="flex flex-col items-center gap-1 scale-90">
                      <div className="w-full max-w-[150px] h-1 bg-gray-300 rounded-full mb-1"></div>
                      <p className="text-[6px] font-black text-gray-400 uppercase tracking-widest mb-2">Screen</p>
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((row) => (
                        <div key={row} className="flex gap-1 items-center">
                          <span className="text-[8px] font-black w-2 text-right mr-1 text-gray-400">{row}</span>
                          {Array.from({ length: 12 }, (_, i) => {
                            const seatNumber = row + (i + 1);
                            const isSelected = bookingDetails.seats.includes(seatNumber);
                            return (
                              <div 
                                key={seatNumber} 
                                className={`w-3 h-3 rounded-[3px] transition-colors ${isSelected ? 'bg-red-600 print:bg-black outline-2 outline-offset-1 outline-red-600/50 print:outline-black' : 'bg-gray-200 print:bg-gray-100'}`}
                              />
                            );
                          })}
                          <span className="text-[8px] font-black w-2 text-left ml-1 text-gray-400">{row}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t-2 border-dashed border-gray-200 pt-8 mb-8 text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Premium Fee</p>
                    <p className="text-5xl font-black text-black tracking-tighter italic">Rs.{bookingDetails.total}</p>
                  </div>

                  <div className="text-center text-[9px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                    <p>Enter 15 minutes prior • Non-refundable • Keep this digital pass</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-12 print:hidden">
              <button 
                onClick={printTicket} 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl flex items-center gap-3 transition-all transform hover:scale-105"
              >
                <Printer className="w-5 h-5" />
                <span>Print Pass</span>
              </button>
              <button 
                onClick={resetBooking} 
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all transform hover:scale-105 shadow-2xl shadow-red-600/20"
              >
                Book Another
              </button>
            </div>
          </div>
        )}

         {/* Parking Booking Section */}
        {bookingType === 'parking' && !parkingBookingConfirmed && parkingStep === 1 && (
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-700 uppercase tracking-widest">Select Vehicle</h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="h-px w-24 bg-green-700"></div>
                <div className="h-4 w-4 rotate-45 border-2 border-green-700"></div>
                <div className="h-px w-24 bg-green-700"></div>
              </div>
              <p className="text-gray-600 mt-6 text-lg">Choose your vehicle type and book your parking spot</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {vehicleTypes.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  onClick={() => setVehicleType(vehicle.id)}
                  className={`vehicle-card bg-white rounded-4xl p-8 cursor-pointer transition-all duration-500 border-2 shadow-2xl ${
                    vehicleType === vehicle.id 
                    ? 'border-green-700 bg-green-50 shadow-green-700/10' 
                    : 'border-gray-300 hover:border-green-700'
                  }`}
                >
                  <div className="text-green-700 mb-6 flex justify-center">{vehicle.icon}</div>
                  <h3 className="font-black text-center text-xl uppercase tracking-tighter mb-2 text-gray-900">{vehicle.name}</h3>
                  <p className="text-green-700 text-center font-black italic">Rs.{vehicle.price}/hr</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button 
                onClick={() => setParkingStep(2)}
                className="px-12 py-5 bg-green-700 hover:bg-green-800 text-white font-black rounded-3xl text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-green-700/20 uppercase italic tracking-wider"
              >
                Proceed to Dates
              </button>
            </div>
          </div>
        )}

        {bookingType === 'parking' && !parkingBookingConfirmed && parkingStep === 2 && (
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setParkingStep(1)} 
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl mb-8 flex items-center gap-2 transition-all"
            >
              <span>←</span> Back to Vehicle
            </button>

            <div className="bg-black p-8 md:p-12 rounded-4xl border border-white/10 shadow-3xl mb-12">
              <h2 className="text-4xl font-black text-yellow-400 mb-8 uppercase italic">Secure Your Slot</h2>
              
              <div className="mb-12">
                <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-4">Choose Date</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {dates.map((date, index) => (
                    <button 
                      key={index} 
                      onClick={() => setSelectedParkingDate(date)} 
                      className={`animate-date shrink-0 w-20 h-24 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                        selectedParkingDate?.date === date.date 
                        ? 'border-yellow-400 bg-yellow-400 text-black shadow-lg shadow-yellow-400/30' 
                        : 'border-white/5 bg-gray-900 text-gray-500 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-black text-inherit opacity-60 uppercase tracking-widest">{date.day}</span>
                      <span className="text-2xl font-black">{date.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedParkingDate && (
                <div>
                  <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-4">Select Arrival Time</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {parkingTimeSlots.map((slot, index) => (
                      <button 
                        key={index} 
                        onClick={() => setSelectedParkingSlot(slot)} 
                        className={`animate-slot opacity-0 p-5 rounded-2xl border-2 transition-all duration-300 ${
                          selectedParkingSlot?.time === slot.time 
                          ? 'border-yellow-400 bg-yellow-400 text-black shadow-lg shadow-yellow-400/30' 
                          : 'border-white/5 bg-gray-900 text-gray-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl'
                        }`}
                      >
                        <span className="block text-xl font-black">{slot.time}</span>
                        <span className="text-[10px] font-black uppercase opacity-60 tracking-wider text-inherit">{slot.type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {selectedParkingSlot && selectedParkingDate && (
              <div className="bg-black p-8 md:p-12 rounded-4xl border border-white/10 shadow-3xl">
                <h2 className="text-2xl font-black text-white uppercase mb-8 text-center italic">Pick Your Premium Spot</h2>
                
                <div className="bg-gray-900/50 rounded-3xl p-8 mb-12 border border-white/5">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <h3 className="text-2xl font-black text-yellow-400 uppercase italic mb-2 tracking-tighter">Availability Scan</h3>
                      <p className="text-white/40 font-bold flex items-center gap-2">
                        <span>📅 {selectedParkingDate.day}, {selectedParkingDate.date}</span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                        <span>🕒 {selectedParkingSlot.time}</span>
                      </p>
                      <p className="text-white/60 font-black mt-1 uppercase tracking-widest text-[10px]">{vehicleType} Category</p>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Est. Hourly Fee</p>
                      <p className="text-4xl font-black text-white italic">Rs.{totalParkingPrice || getVehiclePrice()}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-12">
                  {parkingSpots.map((spot) => (
                    <button 
                      key={spot.id} 
                      onClick={() => toggleParkingSpot(spot.spot)}
                      className={`animate-spot opacity-0 h-12 rounded-xl text-xs font-black transition-all duration-300 ${
                        selectedParkingSpots.includes(spot.spot) 
                        ? 'bg-yellow-400 text-black scale-110 shadow-lg shadow-yellow-400/30' 
                        : 'bg-gray-800 text-gray-500 hover:bg-gray-700 border border-white/5 hover:scale-110 hover:shadow-md'
                      }`}
                    >
                      {spot.spot}
                    </button>
                  ))}
                </div>

                <div className="flex justify-center gap-8 mb-12 flex-wrap border-t border-white/5 pt-12">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-800 rounded-md border border-white/5"></div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-md shadow-lg shadow-yellow-400/20"></div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Selected</span>
                  </div>
                </div>

                {selectedParkingSpots.length > 0 && (
                  <div className="text-center">
                    <button 
                      onClick={() => setParkingShowConfirmDialog(true)} 
                      className="w-full px-12 py-5 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-3xl text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-yellow-400/20 uppercase italic tracking-wider"
                    >
                      Finalize Booking • Rs.{totalParkingPrice}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Parking Confirmation Dialog */}
        {bookingType === 'parking' && parkingShowConfirmDialog && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-white/10 rounded-3xl max-w-md w-full p-6 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  ?
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">Confirm Parking</h3>
                <p className="text-gray-500 text-sm mt-2">Please review your parking details</p>
              </div>
              
              <div className="bg-black/30 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Vehicle</span>
                  <span className="text-white font-bold uppercase">{vehicleType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Date</span>
                  <span className="text-white font-bold">{selectedParkingDate?.day}, {selectedParkingDate?.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Slot</span>
                  <span className="text-white font-bold">{selectedParkingSlot?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Parking Spots</span>
                  <span className="text-white font-bold">{selectedParkingSpots.join(', ')}</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3 flex justify-between">
                  <span className="text-gray-500 text-sm">Total</span>
                  <span className="text-yellow-400 font-black text-xl">Rs.{totalParkingPrice}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setParkingShowConfirmDialog(false)} 
                  className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setParkingShowConfirmDialog(false);
                    handleParkingBooking();
                  }} 
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl transition-all"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Parking Booking Confirmation */}
        {bookingType === 'parking' && parkingBookingConfirmed && parkingBookingDetails && (
          <div className="max-w-2xl mx-auto py-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white uppercase italic mb-2 tracking-tighter">Confirmed</h2>
              <p className="text-yellow-400 font-black tracking-widest uppercase text-xs">Your spot is secured and monitored</p>
            </div>

            <div className="parking-ticket opacity-0 perspective-1000 bg-white text-black rounded-4xl overflow-hidden shadow-[0_0_80px_rgba(234,179,8,0.1)]">
              <div className="bg-yellow-400 text-black p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-16 -mt-16 blur-3xl"></div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Arnothaya Parking</h3>
                <p className="text-xs font-black opacity-60 tracking-[0.3em] uppercase mt-2">Secure Parking Terminal</p>
              </div>
              
              <div className="p-10">
                <div className="flex justify-between items-start mb-10 border-b border-black/5 pb-10">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Pass ID</p>
                    <p className="font-black text-2xl tracking-tight">{parkingBookingDetails.bookingId}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Vehicle Category</p>
                    <p className="font-black text-2xl tracking-tight uppercase italic text-yellow-600">{parkingBookingDetails.vehicle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 mb-10">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Arrival Date</p>
                    <p className="font-black text-lg">{parkingBookingDetails.date.day}, {parkingBookingDetails.date.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Window</p>
                    <p className="font-black text-lg">{parkingBookingDetails.slot.time}</p>
                  </div>
                </div>

                <div className="mb-10 p-8 bg-black/5 rounded-3xl">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 border-b border-black/5 pb-2">Assigned Bay Zones</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {parkingBookingDetails.spots.map((spot) => (
                      <span key={spot} className="bg-black text-white px-4 py-3 rounded-2xl font-black text-center text-sm italic border-2 border-yellow-400/20">{spot}</span>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-dashed border-gray-200 pt-10 mb-10 text-center">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Credit Fee</p>
                  <p className="text-6xl font-black text-black tracking-tighter italic">Rs.{parkingBookingDetails.total}</p>
                </div>

                <div className="text-center text-[9px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                  <p>Park within assigned bays only • 24/7 CCTV surveillance</p>
                  <p className="mt-1">Digital receipt required for exit validation</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <button 
                onClick={printTicket} 
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-3xl flex items-center gap-3 transition-all transform hover:scale-105"
              >
                <Printer className="w-5 h-5" />
                <span>Save Receipt</span>
              </button>
              <button 
                onClick={resetParkingBooking} 
                className="px-10 py-5 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-3xl transition-all transform hover:scale-105 shadow-3xl shadow-yellow-400/20"
              >
                New Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookTickets;
