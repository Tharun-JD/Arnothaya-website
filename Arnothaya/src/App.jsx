import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cinema from './Cinema';
import Location from './Location';
import OurServices from './Our Services';
import BookTickets from './Book tickets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/location" element={<Location />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/book" element={<BookTickets />} />
      </Routes>
    </Router>
  );
}

export default App;
