import React from 'react';
import { Link } from 'react-router-dom';

function ExploreMore() {
  return (
    <Link 
      to="/ourservices" 
      className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
    >
      <span>Explore More</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}

export default ExploreMore;
