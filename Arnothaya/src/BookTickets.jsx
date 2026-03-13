import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, X, Car, Bike, Truck, Check } from 'lucide-react';
import logo from './new_assets/logo.png';

const BookTickets = () => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState(['D7', 'D8', 'D9']);
  const [selectedTime, setSelectedTime] = useState('5:00 PM');
  const [selectedScreen, setSelectedScreen] = useState('Screen 1');
  const [selectedHall, setSelectedHall] = useState('Dolby Atmos');
  const [selectedDate, setSelectedDate] = useState('2026-03-15');
  const [hoveredSeat, setHoveredSeat] = useState(null);
  
  // Vehicle state
  const [vehicles, setVehicles] = useState([
    { id: 1, type: 'car', model: 'Toyota Camry', number: 'KA 01 AB 1234' }
  ]);
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [newVehicle, setNewVehicle] = useState({ type: 'car', model: '', number: '' });

  // Generate seat layout
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const seatsPerRow = 10;
  const reservedSeats = ['B3', 'B4', 'C6', 'C7', 'E2', 'E3', 'F5', 'F6', 'G8', 'G9'];

  const isReserved = (seat) => reservedSeats.includes(seat);
  const isSelected = (seat) => selectedSeats.includes(seat);

  const toggleSeat = (seat) => {
    if (isReserved(seat)) return;
    
    if (isSelected(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const ticketPrice = 350;
  const convenienceFee = 50;
  const totalPrice = (selectedSeats.length * ticketPrice) + convenienceFee;

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Stores', path: '/stores' },
    { name: 'Cinema', path: '/cinema' },
    { name: 'Dining', path: '/dining' },
    { name: 'Entertainment', path: '/entertainment' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  const showtimes = ['10:00 AM', '1:30 PM', '5:00 PM', '8:30 PM', '11:00 PM'];
  const screens = ['Screen 1', 'Screen 2', 'Screen 3', 'Screen 4', 'Screen 5'];
  const hallTypes = ['Dolby Atmos', 'IMAX', '4DX', 'Standard'];

  // Vehicle functions
  const getVehicleIcon = (type) => {
    switch (type) {
      case 'bike': return <Bike className="w-5 h-5" />;
      case 'truck': return <Truck className="w-5 h-5" />;
      default: return <Car className="w-5 h-5" />;
    }
  };

  const addVehicle = () => {
    if (newVehicle.model && newVehicle.number) {
      setVehicles([...vehicles, { ...newVehicle, id: vehicles.length + 1 }]);
      setNewVehicle({ type: 'car', model: '', number: '' });
      setShowAddVehicle(false);
    }
  };

  const deleteVehicle = (id) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-premium relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="glass-navbar fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center overflow-hidden">
               <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white font-montserrat">Arnothaya Mall</h1>
              <p className="text-xs text-gold">CINEMAX</p>
            </div>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="px-4 py-2 text-sm text-gray-300 hover:text-gold transition-all duration-300 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Account Icon */}
          <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold/50 transition-all duration-300 group">
            <svg className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 pb-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split Layout - Two Columns */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* LEFT SIDE - Movie Ticket Booking */}
            <div className="animate-slide-left">
              {/* Main Heading */}
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-2">
                  Book Your Movie Ticket
                </h1>
                <p className="text-gray-400">Experience cinema like never before</p>
              </div>

              {/* Movie Step Progress Bar */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {['Select Movie', 'Choose Seats', 'Payment'].map((step, index) => (
                  <React.Fragment key={index}>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ${
                      index <= 1 ? 'bg-gold/20 border border-gold/50' : 'bg-white/5 border border-white/10'
                    }`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        index <= 1 ? 'bg-gold text-primary-dark' : 'bg-white/10 text-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                      <span className={`text-xs hidden sm:inline ${index <= 1 ? 'text-gold' : 'text-gray-400'}`}>
                        {step}
                      </span>
                    </div>
                    {index < 2 && (
                      <div className={`w-6 md:w-10 h-0.5 ${index < 1 ? 'bg-gold/50' : 'bg-white/10'}`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Movie Card */}
              <div className="glass-card p-5">
                <div className="relative rounded-xl overflow-hidden mb-4 group">
                  <img 
                    src="https://images.unsplash.com/photo-1535016120720-40c6874c3b13?w=400&h=600&fit=crop" 
                    alt="The Batman" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="px-2 py-1 bg-gold/20 border border-gold/50 rounded text-gold text-xs">NOW SHOWING</span>
                  </div>
                </div>

                {/* Movie Info */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">The Batman</h4>
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                      </svg>
                      Action
                    </span>
                    <span>•</span>
                    <span>2h 56m</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 border border-red-500/50 rounded text-red-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L12.39 5.61L16.5 6.11L13 9.39L13.79 13.5L10 11.39L6.21 13.5L7 9.39L3.5 6.11L7.61 5.61L10 2Z" />
                    </svg>
                    PG-13
                  </div>
                </div>

                {/* Showtime Buttons */}
                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2 block">Select Showtime</label>
                  <div className="grid grid-cols-3 gap-2">
                    {showtimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-2 text-xs rounded-lg transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-gold text-primary-dark font-semibold'
                            : 'bg-white/5 border border-white/10 text-gray-300 hover:border-gold/50 hover:text-gold'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dropdown Fields */}
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Screen</label>
                    <select
                      value={selectedScreen}
                      onChange={(e) => setSelectedScreen(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold/50 focus:outline-none transition-all"
                    >
                      {screens.map((screen) => (
                        <option key={screen} value={screen} className="bg-secondary-dark">{screen}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Hall Type</label>
                    <select
                      value={selectedHall}
                      onChange={(e) => setSelectedHall(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold/50 focus:outline-none transition-all"
                    >
                      {hallTypes.map((hall) => (
                        <option key={hall} value={hall} className="bg-secondary-dark">{hall}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Select Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold/50 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Cinema Seat Layout */}
              <div className="glass-card p-6 mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white font-montserrat">Choose Your Seats</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-white/20"></div>
                      <span className="text-gray-400">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-gold"></div>
                      <span className="text-gold">Selected</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-gray-500"></div>
                      <span className="text-gray-400">Reserved</span>
                    </div>
                  </div>
                </div>

                {/* Screen Indicator */}
                <div className="relative mb-8">
                  <div className="h-2 bg-gradient-to-r from-transparent via-gold/50 to-transparent rounded-full"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gold text-sm font-semibold tracking-widest">
                    SCREEN
                  </div>
                </div>

                {/* Seat Grid */}
                <div className="flex flex-col items-center gap-2">
                  {rows.map((row, rowIndex) => (
                    <div key={row} className="flex items-center gap-1">
                      <span className="w-6 text-gold text-sm font-semibold">{row}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: seatsPerRow }, (_, i) => {
                          const seatNumber = `${row}${i + 1}`;
                          const isRowWide = rowIndex < 2;
                          return (
                            <button
                              key={seatNumber}
                              onClick={() => toggleSeat(seatNumber)}
                              disabled={isReserved(seatNumber)}
                              onMouseEnter={() => setHoveredSeat(seatNumber)}
                              onMouseLeave={() => setHoveredSeat(null)}
                              className={`
                                w-8 h-8 rounded-t-lg text-xs font-medium transition-all duration-300
                                ${isReserved(seatNumber) 
                                  ? 'bg-gray-500/50 cursor-not-allowed text-gray-400' 
                                  : isSelected(seatNumber)
                                    ? 'bg-gold text-primary-dark shadow-lg shadow-gold/30'
                                    : 'bg-white/20 text-white hover:bg-white/40 hover:scale-110'
                                }
                                ${hoveredSeat === seatNumber && !isReserved(seatNumber) ? 'bg-gold/30 scale-110' : ''}
                              `}
                              style={{
                                marginLeft: isRowWide && i === 4 ? '20px' : '0',
                              }}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                      </div>
                      <span className="w-6 text-gold text-sm font-semibold text-right">{row}</span>
                    </div>
                  ))}
                </div>

                {/* Seat Legend */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-400">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <div key={num} className="text-gray-500">{num}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="glass-card p-5 mt-4">
                <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">Booking Summary</h3>

                <div className="flex gap-4 mb-4 pb-4 border-b border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1535016120720-40c6874c3b13?w=200&h=300&fit=crop" 
                    alt="The Batman" 
                    className="w-16 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">The Batman</h4>
                    <p className="text-gray-400 text-sm mb-1">{selectedScreen}</p>
                    <p className="text-gold text-sm">{selectedDate}</p>
                    <p className="text-gold text-sm">{selectedTime}</p>
                    <p className="text-gray-400 text-xs mt-1">{selectedHall}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm text-gray-400 mb-2">Selected Seats</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSeats.map((seat) => (
                      <span 
                        key={seat}
                        className="px-3 py-1 bg-gold/20 border border-gold/50 rounded-full text-gold text-sm font-semibold"
                      >
                        {seat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Tickets ({selectedSeats.length})</span>
                    <span className="text-white">₹{selectedSeats.length * ticketPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Convenience Fee</span>
                    <span className="text-white">₹{convenienceFee}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">Total Price</span>
                      <span className="text-gold font-bold text-xl">₹{totalPrice}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => alert('Proceeding to Payment...')}
                  className="w-full py-3 bg-gradient-gold rounded-xl text-primary-dark font-bold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span>Proceed to Payment</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Parking Ticket Section */}
            <div className="animate-slide-right">
              {/* Heading */}
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-2">
                  Book Your Parking Ticket
                </h1>
                <p className="text-gray-400">Secure your parking spot</p>
              </div>

              {/* Parking Step Progress Bar */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {['Select Time', 'Choose Slot', 'Add-ons', 'Payment'].map((step, index) => (
                  <React.Fragment key={index}>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ${
                      index === 0 ? 'bg-gold/20 border border-gold/50' : 'bg-white/5 border border-white/10'
                    }`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-gold text-primary-dark' : 'bg-white/10 text-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                      <span className={`text-xs hidden sm:inline ${index === 0 ? 'text-gold' : 'text-gray-400'}`}>
                        {step}
                      </span>
                    </div>
                    {index < 3 && (
                      <div className={`w-6 md:w-10 h-0.5 ${index === 0 ? 'bg-gold/50' : 'bg-white/10'}`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Vehicle Section - Shows when vehicles exist */}
              {vehicles.length > 0 && !showAddVehicle ? (
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white font-montserrat">My Vehicles</h3>
                    <button 
                      onClick={() => setShowAddVehicle(true)}
                      className="flex items-center gap-1 text-gold text-sm hover:text-gold/80 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add More
                    </button>
                  </div>
                  
                  {/* Vehicle List */}
                  <div className="space-y-3">
                    {vehicles.map((vehicle) => (
                      <div 
                        key={vehicle.id}
                        className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                            {getVehicleIcon(vehicle.type)}
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{vehicle.model}</p>
                            <p className="text-gray-400 text-xs">{vehicle.number}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => deleteVehicle(vehicle.id)}
                          className="text-gray-500 hover:text-red-400 transition-colors p-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Parking Slot Selection */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <h4 className="text-sm text-gray-400 mb-3">Select Parking Slot</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {['P1', 'P2', 'P3', 'P4'].map((slot) => (
                        <button
                          key={slot}
                          className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-gold/50 hover:text-gold transition-all"
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => alert('Proceeding to Payment...')}
                    className="w-full mt-6 py-3 bg-gradient-gold rounded-xl text-primary-dark font-bold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Book Parking</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              ) : showAddVehicle ? (
                /* Add Vehicle Form */
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">Add New Vehicle</h3>
                  
                  {/* Vehicle Type */}
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 mb-2 block">Vehicle Type</label>
                    <div className="flex gap-2">
                      {['car', 'bike', 'truck'].map((type) => (
                        <button
                          key={type}
                          onClick={() => setNewVehicle({ ...newVehicle, type })}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                            newVehicle.type === type
                              ? 'bg-gold text-primary-dark'
                              : 'bg-white/5 border border-white/10 text-gray-300 hover:border-gold/50'
                          }`}
                        >
                          {type === 'car' && <Car className="w-4 h-4" />}
                          {type === 'bike' && <Bike className="w-4 h-4" />}
                          {type === 'truck' && <Truck className="w-4 h-4" />}
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Model Input */}
                  <div className="mb-4">
                    <label className="text-sm text-gray-400 mb-2 block">Model Name</label>
                    <input
                      type="text"
                      value={newVehicle.model}
                      onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
                      placeholder="e.g., Honda City"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold/50 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Number Input */}
                  <div className="mb-6">
                    <label className="text-sm text-gray-400 mb-2 block">Vehicle Number</label>
                    <input
                      type="text"
                      value={newVehicle.number}
                      onChange={(e) => setNewVehicle({ ...newVehicle, number: e.target.value })}
                      placeholder="e.g., KA 01 AB 1234"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold/50 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowAddVehicle(false)}
                      className="flex-1 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl font-medium hover:bg-white/10 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={addVehicle}
                      className="flex-1 py-3 bg-gradient-gold rounded-xl text-primary-dark font-bold hover:shadow-lg hover:shadow-gold/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              ) : (
                /* Empty State Card */
                <div className="glass-card p-8 text-center">
                {/* Car Icon with Disabled Symbol */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-32 h-32 rounded-full bg-white/5 flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  {/* Disabled Symbol Overlay */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-red-500/80 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                </div>

                {/* Message Text */}
                <h3 className="text-xl font-bold text-white mb-2">No Vehicle Registered</h3>
                
                {/* Description Text */}
                <p className="text-gray-400 mb-6 max-w-sm mx-auto">
                  It looks like you don't have any vehicle registered in your account. Add your vehicle details to reserve a parking slot.
                </p>

                {/* Primary Button */}
                <button 
                  onClick={() => setShowAddVehicle(true)}
                  className="px-6 py-3 bg-gradient-gold rounded-xl text-primary-dark font-bold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 mx-auto"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Vehicle
                </button>

                {/* Secondary Text Link */}
                <div className="mt-4">
                  <button className="text-gold hover:text-gold/80 text-sm underline underline-offset-4 transition-colors">
                    Skip Parking
                  </button>
                </div>
              </div>)}
            </div>

          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed bottom-10 left-10 w-20 h-20 border border-gold/20 rounded-full animate-float"></div>
      <div className="fixed top-40 right-10 w-14 h-14 border border-gold/10 rounded-full animate-float delay-300"></div>
    </div>
  );
};

export default BookTickets;
