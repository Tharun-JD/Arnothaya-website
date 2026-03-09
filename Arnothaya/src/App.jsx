import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cinema from './Cinema';
import Location from './Location';
import OurServices from './Our Services';

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
      </Routes>
    </Router>
  );
}

export default App;
