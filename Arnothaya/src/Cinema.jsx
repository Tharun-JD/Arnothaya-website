import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import move2 from './assets/move2.png';

function Cinema() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
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

  const cinemas = [
    { name: 'IMAX Experience', seats: 500, type: 'Premium' },
    { name: '4DX Theater', seats: 300, type: 'Premium' },
    { name: 'Standard Hall A', seats: 200, type: 'Standard' },
    { name: 'Standard Hall B', seats: 200, type: 'Standard' },
    { name: 'VIP Lounge', seats: 50, type: 'VIP' },
    { name: 'Family Theater', seats: 150, type: 'Family' }
  ];

  const handleNavigation = (page) => {
    console.log('Navigating to:', page);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm py-2">
        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {navItems.map((item, index) => (
              <Link 
                key={item.page}
                to={'/' + item.page}
                className="px-4 py-2 bg-transparent text-white hover:text-yellow-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
                style={{ 
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Theater Indoor Image */}
      <div className="relative h-[500px] mt-12 overflow-hidden">
        <img 
          src={move2} 
          alt="Theater Indoor" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 
              className="text-6xl font-bold mb-4"
              style={{ animation: 'bounceIn 0.8s ease-out', color: '#FFD700' }}
            >
              Welcome to Arnothaya Cinemas
            </h1>
            <p className="text-2xl text-gray-200">Experience Movies Like Never Before</p>
          </div>
        </div>
      </div>

      {/* Feature Content Sections */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section 1: Number of Screens */}
          <div className="flex flex-col md:flex-row gap-8 bg-gray-900/80 p-8 rounded-lg mb-16">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80" 
                alt="Multiple Screens" 
                className="w-full h-94 object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 text-pink-600">6 State-of-the-Art Screens</h2>
              <p className="text-lg text-gray-300">
                Arnothaya Cinemax features six state-of-the-art cinema screens designed to provide an exceptional movie experience for every visitor. Each screen is equipped with the latest digital projection technology that delivers crystal-clear visuals and vibrant colors, making every scene come to life.
The theatres are supported by advanced surround sound systems that create an immersive audio environment, allowing audiences to feel every moment of the movie. Comfortable seating, spacious halls, and modern interiors ensure that guests can relax and enjoy films in a premium atmosphere.
With multiple screens available, Arnothaya Cinemax is able to showcase a wide variety of movies simultaneously, including the latest blockbusters, family entertainment, and special screenings. This allows visitors to choose from different movie options and showtimes that best suit their schedule.
Arnothaya Cinemax is committed to delivering high-quality entertainment by combining modern cinema technology with a comfortable and enjoyable viewing environment.
              </p>
            </div>
          </div>

          {/* Section 2: Sound Quality */}
          <div className="flex flex-col md:flex-row-reverse gap-8 bg-gray-900/80 p-8 rounded-lg mb-16">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80" 
                alt="Sound System" 
                className="w-full h-90 object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 text-red-500">Dolby Atmos Immersive Sound</h2>
              <p className="text-lg text-gray-300">
                Arnothaya Cinemax features advanced Dolby Atmos immersive sound technology that delivers a powerful and realistic audio experience. This modern sound system allows sounds to move freely around the theatre, creating a three-dimensional audio environment that surrounds the audience from every direction.
With Dolby Atmos, viewers can hear every detail clearly—from quiet background sounds to powerful action scenes—making the movie experience more engaging and lifelike. The sound flows above, beside, and behind the audience, placing them right in the middle of the action.
Combined with high-quality cinema screens and comfortable seating, the Dolby Atmos system at Arnothaya Cinemax ensures that every movie is experienced with rich, dynamic, and immersive sound for an unforgettable cinematic journey. 🎬🔊
              </p>
            </div>
          </div>

          {/* Section 3: Premium Visual Experience */}
          <div className="flex flex-col md:flex-row gap-8 bg-gray-900/80 p-8 rounded-lg">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80" 
                alt="4K Visual Experience" 
                className="w-full h-90 object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 text-purple-400">4K Laser Projection Excellence</h2>
              <p className="text-lg text-gray-300">
                Unlike older single-screen theaters, Arnothaya Cinemax functions as a lifestyle hub. 
         It is the first in the immediate Palladam area to offer a combination of RGB Laser + Dolby Atmos + Gaming Zone,
            making it the go-to choice for major blockbuster releases in Tamil, English, and other regional languages.
            Arnothaya Cinemax is equipped with advanced 4K laser projection technology that delivers exceptional picture quality for every movie. This modern projection system produces ultra-sharp images, vibrant colors, and deep contrast, allowing audiences to enjoy a clear and visually stunning cinematic experience.
The 4K laser projection ensures brighter screens and more accurate color reproduction compared to traditional projectors. Every detail on the screen becomes more visible, making action scenes, landscapes, and visual effects appear more realistic and engaging.
Combined with comfortable seating and immersive sound systems, the 4K laser projection at Arnothaya Cinemax enhances the overall movie experience, allowing visitors to enjoy films with outstanding visual clarity and brilliance. 🎬✨
              </p>
              <Link to="/book" className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Book Your Movie Ticket
              </Link>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Cinema;
