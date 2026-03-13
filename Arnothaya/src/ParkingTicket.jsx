import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CreditCard, User, Car, Plus, X, Truck, Bike, Check } from 'lucide-react';
import logo from './new_assets/logo.png';

const ParkingTicket = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState(['02B', '02C', '02D']);
  const [currentStep, setCurrentStep] = useState(1);
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [vehicles, setVehicles] = useState([
    { id: 1, type: 'car', model: 'Toyota Camry', number: 'KA 01 AB 1234' }
  ]);
  const [newVehicle, setNewVehicle] = useState({ type: 'car', model: '', number: '' });

  const timeSlots = [
    { id: 1, time: '3:00 PM - 6:00 PM', price: 9 },
    { id: 2, time: '6:00 PM - 9:00 PM', price: 12 },
    { id: 3, time: '9:00 PM - 12:00 AM', price: 15 },
    { id: 4, time: '12:00 AM - 3:00 AM', price: 10 },
  ];

  const rows = ['A', 'B', 'C', 'D'];
  const slotsPerRow = 4;
  const occupiedSlots = ['01A', '01C', '03B', '03D', '04A', '04C'];

  const isSlotOccupied = (slot) => occupiedSlots.includes(slot);
  const isSlotSelected = (slot) => selectedSlots.includes(slot);

  const toggleSlot = (slot) => {
    if (!isSlotOccupied(slot)) {
      if (isSlotSelected(slot)) {
        setSelectedSlots(selectedSlots.filter(s => s !== slot));
      } else {
        setSelectedSlots([...selectedSlots, slot]);
      }
    }
  };

  const formatSlot = (row, num) => String(num).padStart(2, '0') + row;

  const totalPrice = selectedSlots.length * (selectedTime?.price || 9);
  const convenienceFee = 1;
  const total = totalPrice + convenienceFee;

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

  const getVehicleIcon = (type) => {
    switch (type) {
      case 'bike': return <Bike className="w-5 h-5" />;
      case 'truck': return <Truck className="w-5 h-5" />;
      default: return <Car className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 pb-12">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-amber-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={logo} alt="Arnothaya Mall" className="w-8 h-8 object-contain" />
                </div>
              <span className="text-white text-xl font-bold">Arnothaya Mall</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Stores', 'Cinema', 'Dining', 'Entertainment', 'Offers', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : '/' + item.toLowerCase()}
                  className={item === 'Cinema'
                    ? 'text-amber-400 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-amber-400 after:shadow-[0_0_10px_amber-400] text-sm font-medium transition-colors'
                    : 'text-slate-300 hover:text-white text-sm font-medium transition-colors'}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <User className="w-5 h-5 text-slate-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Book Your Parking Ticket
          </h1>
          <p className="text-slate-400">Secure your spot at Arnothaya Mall</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {['Select Time', 'Choose Slot', 'Add-ons', 'Payment'].map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2">
                  <div className={currentStep > index + 1
                    ? 'w-10 h-10 rounded-full flex items-center justify-center font-bold bg-amber-500 text-slate-900'
                    : currentStep === index + 1
                    ? 'w-10 h-10 rounded-full flex items-center justify-center font-bold bg-amber-500 text-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                    : 'w-10 h-10 rounded-full flex items-center justify-center font-bold bg-slate-800 text-slate-500 border border-slate-700'}>
                    {currentStep > index + 1 ? '✓' : index + 1}
                  </div>
                  <span className={currentStep >= index + 1 ? 'text-white text-sm font-medium hidden md:block' : 'text-slate-500 text-sm font-medium hidden md:block'}>
                    {step}
                  </span>
                </div>
                {index < 3 && (
                  <div className={currentStep > index + 1 ? 'w-12 md:w-24 h-0.5 bg-amber-500' : 'w-12 md:w-24 h-0.5 bg-slate-700'} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Container - Select Time */}
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-amber-400" />
              Select Time
            </h2>
            
            <div className="mb-6">
              <label className="text-slate-400 text-sm mb-2 block">Zone</label>
              <div className="inline-flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-xl border border-amber-500/30">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 font-bold">P2</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-slate-400 text-sm mb-3 block">Date</label>
              <div className="flex items-center gap-3 bg-slate-700/30 px-4 py-3 rounded-xl border border-slate-600">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span className="text-white">24 Apr 2026</span>
              </div>
            </div>

            <div>
              <label className="text-slate-400 text-sm mb-3 block">Time Slots</label>
              <div className="space-y-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => {
                      setSelectedTime(slot);
                      setCurrentStep(2);
                    }}
                    className={selectedTime?.id === slot.id
                      ? 'w-full p-4 rounded-xl border bg-amber-500/20 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300'
                      : 'w-full p-4 rounded-xl border bg-slate-700/30 border-slate-600 hover:border-amber-500/50 transition-all duration-300'}
                  >
                    <div className="flex justify-between items-center">
                      <span className={selectedTime?.id === slot.id ? 'font-medium text-amber-400' : 'font-medium text-white'}>
                        {slot.time}
                      </span>
                      <span className="text-slate-400">${slot.price}/hr</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center Container - Choose Slot */}
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Car className="w-6 h-6 text-amber-400" />
              Choose Your Slot
            </h2>

            {/* Parking Image */}
            <div className="relative rounded-2xl overflow-hidden mb-6 h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80"
                alt="Luxury Parking"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-white font-medium">Underground Parking - P2</span>
              </div>
            </div>

            {/* Parking Slot Grid */}
            <div className="mb-6">
              <div className="grid grid-cols-5 gap-2">
                {/* Header row */}
                <div className="col-span-1"></div>
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="text-center text-slate-500 text-sm font-medium">
                    {String(num).padStart(2, '0')}
                  </div>
                ))}

                {/* Slot rows */}
                {rows.map((row) => (
                  <React.Fragment key={row}>
                    <div className="text-amber-400 font-bold flex items-center">{row}</div>
                    {Array.from({ length: slotsPerRow }, (_, i) => {
                      const slot = formatSlot(row, i + 1);
                      const occupied = isSlotOccupied(slot);
                      const selected = isSlotSelected(slot);
                      
                      return (
                        <button
                          key={slot}
                          onClick={() => toggleSlot(slot)}
                          disabled={occupied}
                          className={occupied
                            ? 'p-3 rounded-lg font-bold text-sm bg-slate-700/50 text-slate-600 cursor-not-allowed transition-all duration-300'
                            : selected
                            ? 'p-3 rounded-lg font-bold text-sm bg-amber-500 text-slate-900 shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-300'
                            : 'p-3 rounded-lg font-bold text-sm bg-blue-500/30 text-blue-400 border border-blue-500/50 hover:bg-blue-500/50 transition-all duration-300'}
                        >
                          {row}
                        </button>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500/50 border border-blue-500" />
                <span className="text-slate-400 text-sm">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                <span className="text-amber-400 text-sm">Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-700/50" />
                <span className="text-slate-500 text-sm">Occupied</span>
              </div>
            </div>
          </div>

          {/* Right Container - Booking Summary */}
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-amber-400" />
              Booking Summary
            </h2>

            {/* My Vehicles Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-slate-400 text-sm">My Vehicles</label>
                <button 
                  onClick={() => setShowAddVehicle(true)}
                  className="flex items-center gap-1 text-amber-400 text-sm hover:text-amber-300 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Vehicle
                </button>
              </div>
              
              {/* Vehicle List */}
              <div className="space-y-2">
                {vehicles.map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className="flex items-center justify-between bg-slate-700/30 p-3 rounded-xl border border-slate-600"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                        {getVehicleIcon(vehicle.type)}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{vehicle.model}</p>
                        <p className="text-slate-400 text-xs">{vehicle.number}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteVehicle(vehicle.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Vehicle Form */}
            {showAddVehicle && (
              <div className="mb-6 bg-slate-700/30 p-4 rounded-xl border border-amber-500/30">
                <h3 className="text-white font-medium mb-3">Add New Vehicle</h3>
                
                {/* Vehicle Type */}
                <div className="mb-3">
                  <label className="text-slate-400 text-xs mb-2 block">Vehicle Type</label>
                  <div className="flex gap-2">
                    {['car', 'bike', 'truck'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setNewVehicle({ ...newVehicle, type })}
                        className={newVehicle.type === type
                          ? 'flex-1 py-2 rounded-lg text-sm font-medium bg-amber-500 text-slate-900 flex items-center justify-center gap-2 transition-all'
                          : 'flex-1 py-2 rounded-lg text-sm font-medium bg-slate-600 text-slate-300 hover:bg-slate-500 flex items-center justify-center gap-2 transition-all'}
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
                <div className="mb-3">
                  <label className="text-slate-400 text-xs mb-2 block">Model Name</label>
                  <input
                    type="text"
                    value={newVehicle.model}
                    onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
                    placeholder="e.g., Honda City"
                    className="w-full bg-slate-600 text-white px-3 py-2 rounded-lg text-sm border border-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                {/* Number Input */}
                <div className="mb-4">
                  <label className="text-slate-400 text-xs mb-2 block">Vehicle Number</label>
                  <input
                    type="text"
                    value={newVehicle.number}
                    onChange={(e) => setNewVehicle({ ...newVehicle, number: e.target.value })}
                    placeholder="e.g., KA 01 AB 1234"
                    className="w-full bg-slate-600 text-white px-3 py-2 rounded-lg text-sm border border-slate-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowAddVehicle(false)}
                    className="flex-1 py-2 bg-slate-600 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addVehicle}
                    className="flex-1 py-2 bg-amber-500 text-slate-900 rounded-lg text-sm font-medium hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Parking Ticket</span>
                <span className="text-white font-medium">Zone P2</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Date and time</span>
                <span className="text-white">
                  {selectedTime ? '24 Apr · ' + selectedTime.time : 'Select time'}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Selected Slot</span>
                <span className="text-amber-400 font-bold">
                  {selectedSlots.length > 0 ? selectedSlots.join(', ') : 'None'}
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Tickets price</span>
                <span className="text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Convenience fee</span>
                <span className="text-white">${convenienceFee.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8 pt-4 border-t border-slate-700">
              <span className="text-xl text-white font-bold">Total</span>
              <span className="text-3xl text-amber-400 font-bold">${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={() => setCurrentStep(4)}
              className="w-full py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-900 font-bold text-lg rounded-xl hover:from-amber-400 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
            >
              Proceed to Payment
            </button>

            <p className="text-center text-slate-500 text-xs mt-4">
              Secure payment powered by SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingTicket;
