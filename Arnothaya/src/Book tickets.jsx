import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import head from './assets/head.png';

function BookTickets() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home', icon: '🏠' },
    { name: 'About', page: 'about', icon: 'ℹ️' },
    { name: 'Cinema', page: 'cinema', icon: '🎬' },
    { name: 'Book Ticket', page: 'book', icon: '🎟️' },
    { name: 'Location', page: 'location', icon: '📍' },
    { name: 'Contact Us', page: 'contact', icon: '📞' }
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

  const handleBooking = () => {
    alert('Booking Confirmed! Seats: ' + selectedSeats.join(', ') + '. Total: Rs.' + totalPrice);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm py-2">
        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {navItems.map((item, index) => (
              <Link key={item.page} to={'/' + item.page} className="px-4 py-2 text-white hover:text-yellow-400 font-semibold">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative h-[200px] mt-12">
        <img src={head} alt="Book Tickets" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-red-500">Book Your Movie Tickets</h1>
        </div>
      </div>

      <div className="py-8 px-4 max-w-4xl mx-auto">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">Select a Movie</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {movies.map((movie) => (
                <div key={movie.id} onClick={() => { setSelectedMovie(movie); setStep(2); }} className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:scale-105">
                  <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover" />
                  <div className="p-3">
                    <h3 className="font-bold">{movie.title}</h3>
                    <p className="text-gray-400 text-sm">{movie.genre} - {movie.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && selectedMovie && (
          <div>
            <button onClick={() => setStep(1)} className="text-yellow-400 mb-4">Back to Movies</button>
            <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">{selectedMovie.title}</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Select Date</h3>
              <div className="flex gap-2 overflow-x-auto">
                {dates.map((date, index) => (
                  <button key={index} onClick={() => setSelectedDate(date)} className="flex-shrink-0 w-16 h-20 rounded-lg border-2 flex flex-col items-center justify-center" style={{ borderColor: selectedDate?.date === date.date ? '#ef4444' : '#374151' }}>
                    <span className="text-sm text-gray-400">{date.day}</span>
                    <span className="text-xl font-bold">{date.date}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Select Showtime</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {shows.map((show, index) => (
                    <button key={index} onClick={() => { setSelectedShow(show); setStep(3); }} className="p-3 rounded-lg border-2" style={{ borderColor: selectedShow?.time === show.time ? '#ef4444' : '#374151' }}>
                      <span className="block text-lg font-bold">{show.time}</span>
                      <span className="text-xs text-gray-400">{show.type}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && selectedMovie && selectedDate && selectedShow && (
          <div>
            <button onClick={() => setStep(2)} className="text-yellow-400 mb-4">Back to Shows</button>
            
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-red-500">{selectedMovie.title}</h3>
                  <p className="text-gray-400">{selectedDate.day}, {selectedDate.date} - {selectedShow.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Selected: {selectedSeats.length} seats</p>
                  <p className="text-2xl font-bold text-yellow-400">Rs.{totalPrice}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="w-full h-2 bg-gray-500 rounded-full opacity-50"></div>
              <p className="text-center text-gray-500 text-sm mt-2">SCREEN</p>
            </div>

            <div className="flex justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-700 rounded"></div>
                <span className="text-sm text-gray-400">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-400">Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-600 rounded"></div>
                <span className="text-sm text-gray-400">Rs.350</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="text-sm text-gray-400">Rs.250</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 mb-6">
              {rows.map((row) => (
                <div key={row} className="flex items-center gap-2">
                  <span className="w-6 text-gray-400 text-sm">{row}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: seatsPerRow }, (_, i) => {
                      const seatNumber = row + (i + 1);
                      const isSelected = selectedSeats.includes(seatNumber);
                      return (
                        <button key={seatNumber} onClick={() => toggleSeat(seatNumber)} className={'w-8 h-8 rounded text-xs font-bold ' + (isSelected ? 'bg-red-500' : 'bg-gray-700 hover:bg-gray-600')}>
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                  <span className="w-6 text-gray-400 text-sm">{row}</span>
                </div>
              ))}
            </div>

            {selectedSeats.length > 0 && (
              <div className="text-center">
                <button onClick={handleBooking} className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-lg">
                  Confirm Booking - Rs.{totalPrice}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookTickets;
