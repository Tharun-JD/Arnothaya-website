import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Home, Info, Phone, ArrowLeft, Car, Bike, Truck, Bus, Printer } from 'lucide-react';
import logo from './assets/logo.png';
import parking from './assets/parking.png';

const generateBookingId = () => 'PARK-' + (Date.now().toString(36) + Math.random().toString(36).substring(2, 5)).toUpperCase();

function ParkingTicket() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [vehicleType, setVehicleType] = useState('car');
  const [selectedSpots, setSelectedSpots] = useState([]);
  const [step, setStep] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Hero Entrance
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    // Navbar scroll behavior - only show when at top
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 100) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Staggered Vehicle Entrance
  useEffect(() => {
    if (step === 1 && !bookingConfirmed) {
      gsap.fromTo(".vehicle-card", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)", delay: 0.3 }
      );
    }
  }, [step, bookingConfirmed]);

  // Animate Dates on Step 2
  useEffect(() => {
    if (step === 2 && !bookingConfirmed) {
      gsap.fromTo(".animate-date",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.05, ease: "back.out(1.5)", delay: 0.3 }
      );
    }
  }, [step, bookingConfirmed]);

  // Animate Time Slots when date selected
  useEffect(() => {
    if (selectedDate) {
      gsap.fromTo(".animate-slot",
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [selectedDate]);

  // Animate Parking Spots when slot selected
  useEffect(() => {
    if (selectedSlot && selectedDate) {
      gsap.fromTo(".animate-spot",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, stagger: 0.01, ease: "back.out(2)", delay: 0.1 }
      );
    }
  }, [selectedSlot, selectedDate]);

  // Handle Step Transitions
  const changeStep = (newStep) => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.3,
      onComplete: () => {
        setStep(newStep);
        gsap.fromTo(contentRef.current, 
          { opacity: 0, x: 30 }, 
          { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }
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

  const vehicleTypes = [
    { id: 'car', name: 'Car', icon: <Car className="w-16 h-16 mx-auto" />, price: 50 },
    { id: 'bike', name: 'Bike', icon: <Bike className="w-16 h-16 mx-auto" />, price: 20 },
    { id: 'suv', name: 'SUV', icon: <Truck className="w-16 h-16 mx-auto" />, price: 75 },
    { id: 'auto', name: 'Auto', icon: <Bus className="w-16 h-16 mx-auto" />, price: 40 },
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

  const timeSlots = [
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

  const getVehiclePrice = () => {
    const v = vehicleTypes.find(v => v.id === vehicleType);
    return v ? v.price : 50;
  };

  const toggleSpot = (spot) => {
    if (selectedSpots.includes(spot)) {
      setSelectedSpots(selectedSpots.filter(s => s !== spot));
    } else {
      setSelectedSpots([...selectedSpots, spot]);
    }
  };

  const totalPrice = selectedSpots.length * getVehiclePrice();

  const handleBooking = () => {
    const details = {
      date: selectedDate,
      slot: selectedSlot,
      vehicle: vehicleType,
      spots: selectedSpots,
      total: totalPrice,
      pricePerHour: getVehiclePrice(),
      bookingId: generateBookingId()
    };

    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      onComplete: () => {
        setBookingDetails(details);
        setBookingConfirmed(true);
        // Animate parking ticket
        setTimeout(() => {
          gsap.fromTo(".parking-ticket", 
            { y: 100, opacity: 0, rotateY: -15 }, 
            { y: 0, opacity: 1, rotateY: 0, duration: 1, ease: "power4.out" }
          );
        }, 100);
      }
    });
  };

  const printTicket = () => {
    window.print();
  };

  const resetBooking = () => {
    gsap.to(".parking-ticket", {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      onComplete: () => {
        setSelectedDate(null);
        setSelectedSlot(null);
        setVehicleType('car');
        setSelectedSpots([]);
        setStep(1);
        setBookingConfirmed(false);
        setBookingDetails(null);
      }
    });
  };

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-yellow-400 selection:text-black">
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 bg-white/90 backdrop-blur-sm shadow-md print:hidden transition-transform duration-300 ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="px-6 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex items-center gap-2 md:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.page} 
                to={'/' + item.page} 
                className="px-4 py-2 text-gray-800 hover:text-gray-600 font-semibold transition-all duration-300 text-sm md:text-base uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden print:hidden">
        {/* Background Image */}
        <div className="absolute inset-0 h-[60vh] bg-gray-900">
          <img 
            src={parking} 
            alt="Parking Ticket" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/30 text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Secure Terminal
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Parking Spot
          </h1>
        </div>
      </div>

      <div ref={contentRef} className="py-12 px-6 max-w-6xl mx-auto">
        {!bookingConfirmed && step === 1 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em]">Select Vehicle</h2>
              <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {vehicleTypes.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  onClick={() => setVehicleType(vehicle.id)}
                  className={`vehicle-card bg-gray-900 rounded-4xl p-8 cursor-pointer transition-all duration-500 border-2 shadow-2xl ${
                    vehicleType === vehicle.id 
                    ? 'border-yellow-400 bg-yellow-400/5 shadow-yellow-400/10' 
                    : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="text-yellow-400 mb-6 flex justify-center">{vehicle.icon}</div>
                  <h3 className="font-black text-center text-xl uppercase tracking-tighter mb-2">{vehicle.name}</h3>
                  <p className="text-yellow-400 text-center font-black italic">Rs.{vehicle.price}/hr</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button 
                onClick={() => changeStep(2)}
                className="px-12 py-5 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-3xl text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-yellow-400/20 uppercase italic tracking-wider"
              >
                Proceed to Dates
              </button>
            </div>
          </div>
        )}

        {!bookingConfirmed && step === 2 && (
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => changeStep(1)} 
              className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl mb-8 flex items-center gap-2 transition-all"
            >
              <span>←</span> Back to Vehicle
            </button>

            <div className="bg-gray-900 p-8 md:p-12 rounded-4xl border border-white/5 shadow-3xl mb-12">
              <h2 className="text-4xl font-black text-yellow-400 mb-8 uppercase italic">Secure Your Slot</h2>
              
              <div className="mb-12">
                <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-4">Choose Date</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {dates.map((date, index) => (
                    <button 
                      key={index} 
                      onClick={() => setSelectedDate(date)} 
                      className={`animate-date shrink-0 w-20 h-24 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                        selectedDate?.date === date.date 
                        ? 'border-yellow-400 bg-yellow-400 text-black shadow-lg shadow-yellow-400/30' 
                        : 'border-white/5 bg-black/40 text-gray-500 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-black text-inherit opacity-60 uppercase tracking-widest">{date.day}</span>
                      <span className="text-2xl font-black">{date.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-4">Select Arrival Time</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {timeSlots.map((slot, index) => (
                      <button 
                        key={index} 
                        onClick={() => setSelectedSlot(slot)} 
                        className={`animate-slot opacity-0 p-5 rounded-2xl border-2 transition-all duration-300 ${
                          selectedSlot?.time === slot.time 
                          ? 'border-yellow-400 bg-yellow-400 text-black shadow-lg shadow-yellow-400/30' 
                          : 'border-white/5 bg-black/40 text-gray-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl'
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

            {/* Parking Spot Selection */}
            {selectedSlot && selectedDate && (
              <div className="bg-gray-900 p-8 md:p-12 rounded-4xl border border-white/5 shadow-3xl">
                <h2 className="text-2xl font-black text-white uppercase mb-8 text-center italic">Pick Your Premium Spot</h2>
                
                <div className="bg-black/40 rounded-3xl p-8 mb-12 border border-white/5">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <h3 className="text-2xl font-black text-yellow-400 uppercase italic mb-2 tracking-tighter">Availability Scan</h3>
                      <p className="text-white/40 font-bold flex items-center gap-2">
                        <span>📅 {selectedDate.day}, {selectedDate.date}</span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                        <span>🕒 {selectedSlot.time}</span>
                      </p>
                      <p className="text-white/60 font-black mt-1 uppercase tracking-widest text-[10px]">{vehicleType} Category</p>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Est. Hourly Fee</p>
                      <p className="text-4xl font-black text-white italic">Rs.{totalPrice || getVehiclePrice()}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-12">
                  {parkingSpots.map((spot) => (
                    <button 
                      key={spot.id} 
                      onClick={() => toggleSpot(spot.spot)}
                      className={`animate-spot opacity-0 h-12 rounded-xl text-xs font-black transition-all duration-300 ${
                        selectedSpots.includes(spot.spot) 
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

                {selectedSpots.length > 0 && (
                  <div className="text-center">
                    <button 
                      onClick={() => setShowConfirmDialog(true)} 
                      className="w-full px-12 py-5 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-3xl text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-yellow-400/20 uppercase italic tracking-wider"
                    >
                      Finalize Booking • Rs.{totalPrice}
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
                  <span className="text-white font-bold">{selectedDate?.day}, {selectedDate?.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Slot</span>
                  <span className="text-white font-bold">{selectedSlot?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Parking Spots</span>
                  <span className="text-white font-bold">{selectedSpots.join(', ')}</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3 flex justify-between">
                  <span className="text-gray-500 text-sm">Total</span>
                  <span className="text-yellow-400 font-black text-xl">Rs.{totalPrice}</span>
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
        {bookingConfirmed && bookingDetails && (
          <div className="max-w-2xl mx-auto py-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-white uppercase italic mb-2 tracking-tighter">Confirmed</h2>
              <p className="text-yellow-400 font-black tracking-widest uppercase text-xs">Your spot is secured and monitored</p>
            </div>

            <div className="parking-ticket opacity-0 perspective-1000">
              <div className="bg-white text-black rounded-4xl overflow-hidden shadow-[0_0_80px_rgba(234,179,8,0.1)]">
                <div className="bg-yellow-400 text-black p-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-16 -mt-16 blur-3xl"></div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">Arnothaya Parking</h3>
                  <p className="text-xs font-black opacity-60 tracking-[0.3em] uppercase mt-2">Secure Parking Terminal</p>
                </div>
                
                <div className="p-10">
                  <div className="flex justify-between items-start mb-10 border-b border-black/5 pb-10">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Pass ID</p>
                      <p className="font-black text-2xl tracking-tight">{bookingDetails.bookingId}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Vehicle Category</p>
                      <p className="font-black text-2xl tracking-tight uppercase italic text-yellow-600">{bookingDetails.vehicle}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-10 mb-10">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Arrival Date</p>
                      <p className="font-black text-lg">{bookingDetails.date.day}, {bookingDetails.date.date}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Window</p>
                      <p className="font-black text-lg">{bookingDetails.slot.time}</p>
                    </div>
                  </div>

                  <div className="mb-10 p-8 bg-black/5 rounded-3xl print:bg-transparent print:border print:border-gray-200 print:p-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 border-b border-black/5 pb-2">Assigned Bay Zones</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                      {bookingDetails.spots.map((spot) => (
                        <span key={spot} className="bg-black text-white px-4 py-3 rounded-2xl font-black text-center text-sm italic border-2 border-yellow-400/20 print:bg-gray-200 print:text-black print:border-none">{spot}</span>
                      ))}
                    </div>
                    
                    {/* Visual Parking Map */}
                    <div className="flex flex-col items-center gap-1 scale-90 opacity-80">
                      <p className="text-[6px] font-black text-gray-500 uppercase tracking-widest mb-2">Facility Entrance</p>
                      {Array.from({ length: 4 }, (_, rowIndex) => (
                        <div key={rowIndex} className="flex gap-1 items-center mb-1">
                          {Array.from({ length: 10 }, (_, colIndex) => {
                            const spotNumber = `P${(rowIndex * 10) + colIndex + 1}`;
                            const isSelected = bookingDetails.spots.includes(spotNumber);
                            return (
                              <div 
                                key={spotNumber} 
                                className={`w-4 h-6 flex items-center justify-center rounded-[2px] transition-colors border ${isSelected ? 'bg-yellow-400 border-yellow-400 text-black print:bg-black print:text-white font-black text-[5px]' : 'bg-transparent border-gray-300 print:border-gray-200'}`}
                              >
                                {isSelected ? '★' : ''}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t-2 border-dashed border-gray-200 pt-10 mb-10 text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Credit Fee</p>
                    <p className="text-6xl font-black text-black tracking-tighter italic">Rs.{bookingDetails.total}</p>
                  </div>

                  <div className="text-center text-[9px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                    <p>Park within assigned bays only • 24/7 CCTV surveillance</p>
                    <p className="mt-1">Digital receipt required for exit validation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-12 print:hidden">
              <button 
                onClick={printTicket} 
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-3xl flex items-center gap-3 transition-all transform hover:scale-105"
              >
                <Printer className="w-5 h-5" />
                <span>Save Receipt</span>
              </button>
              <button 
                onClick={resetBooking} 
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

export default ParkingTicket;
