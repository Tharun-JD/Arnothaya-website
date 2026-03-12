import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ParkingTicket from './ParkingTicket';
import ContactUs from './ContactUs';
import Stores from './Stores';
import Cinema from './Cinema';
import Dining from './Dining';
import Entertainment from './Entertainment';
import Offers from './Offers';
import BookTickets from './BookTickets';
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
        <Route path="/stores" element={
          <>
            <Stores />
          </>
        } />
        <Route path="/cinema" element={
          <>
            <Cinema />
          </>
        } />
        <Route path="/booktickets" element={
          <>
            <BookTickets />
          </>
        } />
        <Route path="/dining" element={
          <>
            <Dining />
          </>
        } />
        <Route path="/entertainment" element={
          <>
            <Entertainment />
          </>
        } />
        <Route path="/offers" element={
          <>
            <ParticleBackground />
            <Offers />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
