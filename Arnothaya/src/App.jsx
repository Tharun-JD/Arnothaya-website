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
      <Routes>
        <Route path="/" element={
          <>
            <ParticleBackground />
            <Home />
          </>
        } />
        <Route path="/home" element={
          <>
            <ParticleBackground />
            <Home />
          </>
        } />
        <Route path="/about" element={
          <>
            <ParticleBackground />
            <About />
          </>
        } />
        <Route path="/ourservices" element={
          <>
            <ParticleBackground />
            <OurServices />
          </>
        } />
         <Route path="/booktickets" element={<BookTickets />} />
        <Route path="/parkingticket" element={
          <>
            <ParticleBackground />
            <ParkingTicket />
          </>
        } />
        <Route path="/contact" element={
          <>
            <ContactUs />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
