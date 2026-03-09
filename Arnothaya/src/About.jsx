import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import entry from './assets/entry.png';
import movie from './assets/mov.png';
import ExploreMore from './Explore more';

function About() {
  const [visible, setVisible] = useState(false);

  useEffect(function() {
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

  const getNavAnimationStyle = function(index) {
    return { animation: 'fadeIn 0.5s ease-out ' + (index * 0.1) + 's both' };
  };

  const getParaAnimationStyle = function(delay) {
    return { animation: 'fadeInUp 0.8s ease-out ' + delay + 's both' };
  };

  const mallParagraphs = [
    "In Palladam (Tiruppur District) is a premier entertainment destination that has significantly elevated the movie-watching experience for the local community since its grand opening in October 2024. Located at Kalivelampatti Pirivu on Poomalur Road, it is designed as a modern multiplex that blends high-end technology with a family-friendly atmosphere with a rich nature experience.",
    "Arnothaya Cinemax is located inside a vibrant and modern shopping mall that serves as a major entertainment destination for visitors. The mall is designed to provide a comfortable and enjoyable environment where people can spend quality time with friends and family. With a wide range of retail stores, dining options, and entertainment facilities, the mall creates a lively atmosphere throughout the day.",
    "Visitors coming to Arnothaya Cinemax can enjoy a complete leisure experience by combining shopping, dining, and movie entertainment in one convenient location. The mall's well-planned layout, spacious corridors, and modern infrastructure make it easy for customers to explore different areas without difficulty.",
    "In addition, the mall regularly attracts large crowds due to its variety of attractions and activities. Families, students, and professionals often visit the mall to relax and enjoy their free time. The presence of Arnothaya Cinemax inside the mall enhances the overall entertainment value by providing high-quality cinematic experiences for movie lovers.",
    "The mall also features comfortable seating areas, bright lighting, and a welcoming atmosphere that ensures visitors feel relaxed while exploring the space. Whether visitors come for shopping, dining, or watching a movie, the mall offers a perfect place to unwind and enjoy a memorable outing."
  ];

  const movieParagraphs = [
    "Arnothaya Cinemax is a modern movie theatre designed to provide an exceptional cinematic experience for visitors. The theatre is equipped with advanced digital projection systems and high-quality surround sound technology, ensuring that every movie is presented with outstanding picture and audio clarity.",
    "The theatre offers comfortable seating arrangements that allow viewers to relax and enjoy their favorite movies in a pleasant environment. The interior design of Arnothaya Cinemax is carefully planned to create a premium and immersive movie-watching atmosphere.",
    "Visitors can watch the latest blockbuster movies in a spacious and well-maintained theatre hall. The theatre also maintains high standards of cleanliness and safety to ensure a comfortable experience for all guests.",
    "Located inside the mall, Arnothaya Cinemax provides easy access to visitors who want to combine shopping, dining, and entertainment in a single destination. With its modern facilities and welcoming environment, the theatre has become a popular place for movie lovers.",
    "Arnothaya Cinemax aims to deliver unforgettable movie moments by offering high-quality entertainment, friendly service, and a relaxing cinematic atmosphere."
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm py-2">
        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {navItems.map(function(item, index) {
              return (
                <Link 
                  key={item.page}
                  to={'/' + item.page}
                  className="px-4 py-2 bg-transparent text-white hover:text-yellow-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
                  style={getNavAnimationStyle(index)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="min-h-screen">
        {/* First Section - Entry.png with Mall Content */}
        <div 
          className="min-h-screen pt-16"
          style={{
            backgroundImage: 'url(' + entry + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* First & Second Paragraph - Top Left */}
          <div className="absolute mt-3 left-2 max-w-xl">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ animation: 'bounceIn 0.8s ease-out', color: '#FFD700' }}
              >
                About Arnothaya
              </h1>
              <p className="text-lg text-white mb-4 leading-relaxed">
                <strong>Palladam (Tiruppur District)</strong>, is a premier entertainment destination that has significantly elevated the movie-watching experience for the local community since its grand opening in <strong>October 2024</strong>. <span style={{ color: '#FFD700' }}>Located at Kalivelampatti Pirivu on Poomalur Road</span>, it is designed as a modern multiplex that blends high-end technology with a family-friendly atmosphere with a rich nature experience.
              </p>
              <p className="text-lg text-white leading-relaxed">
                {mallParagraphs[1]}
              </p>
            </div>
          </div>

          {/* Third & Fourth Paragraph - Bottom Right */}
          <div className="absolute bottom-4 right-2 max-w-xl">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg text-white mb-4 leading-relaxed">
                {mallParagraphs[2]}
              </p>
              <p className="text-lg text-white leading-relaxed">
                {mallParagraphs[3]}
              </p>
            </div>
          </div>
        </div>

        {/* Second Section - Movie.png with Cinema Content */}
        <div 
          className="min-h-screen pt-20 pb-"
          style={{
            backgroundImage: 'url(' + movie + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="pt-10 px-4 flex justify-center">
            <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl max-w-xl w-full">
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-center"
                style={{ animation: 'bounceIn 0.8s ease-out', color: '#FFD700' }}
              >
                Arnothaya Cinemax
              </h1>
              {movieParagraphs.map(function(para, index) {
                return (
                  <p 
                    key={index}
                    className="text-lg text-white mb-4 leading-relaxed"
                    style={getParaAnimationStyle(0.3 + index * 0.2)}
                  >
                    {para}
                  </p>
                );
              })}
              <ExploreMore />
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

export default About;
