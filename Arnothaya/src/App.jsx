import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import OurServices from './OurServices';
import BookTickets from './BookTickets';
import ParkingTicket from './ParkingTicket';
import ContactUs from './ContactUs';
import ParticleBackground from './ParticleBackground';

function App() {
  return (
    <Router>
      <ParticleBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/booktickets" element={<BookTickets />} />
        <Route path="/parking" element={<ParkingTicket />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
