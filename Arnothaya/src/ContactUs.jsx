import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: ["Arnothaya Mall", "Palladam Road", "Tiruppur - 641 664", "Tamil Nadu, India"]
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 1234567890", "+91 421 234 5678"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@arnothayamall.com", "support@arnothayamall.com"]
    },
    {
      icon: "🕐",
      title: "Opening Hours",
      details: ["Mon - Fri: 10:00 AM - 9:00 PM", "Sat - Sun: 10:00 AM - 10:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #0a1628 0%, #0d1b3d 50%, #152238 100%)' 
    }}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
        backgroundSize: '25px 25px'
      }}></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-15" style={{ 
        background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' 
      }}></div>
      <div className="absolute bottom-40 left-20 w-60 h-60 rounded-full blur-3xl opacity-10" style={{ 
        background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)' 
      }}></div>

      {/* Navigation Bar */}
      <nav className="relative z-50 px-6 py-4" style={{
        background: 'rgba(10, 22, 40, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text">
            ARNOTHAYA MALL
          </Link>
          <div className="flex gap-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Stores', path: '/stores' },
              { name: 'Cinema', path: '/cinema' },
              { name: 'Dining', path: '/dining' },
              { name: 'Entertainment', path: '/entertainment' },
              { name: 'Offers', path: '/offers' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="relative text-white hover:text-gold transition-all duration-300 font-medium"
              >
                {item.name}
                {item.name === 'Contact' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-gold"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{
            fontFamily: 'Montserrat, sans-serif',
            background: 'linear-gradient(135deg, #ffffff 0%, #d4af37 50%, #f0d875 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Contact Arnothaya Mall
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to our team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl" style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.15)'
              }}>
                <h2 className="text-2xl font-bold mb-8" style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#f0d875'
                }}>
                  Get In Touch
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                        border: '1px solid rgba(212, 175, 55, 0.3)'
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {item.title}
                        </h4>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-400 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="p-8 rounded-3xl" style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Follow Us
                </h3>
                <div className="flex gap-6">
                  <a 
                    href="#" 
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110" style={{
                      background: 'rgba(66, 103, 178, 0.2)',
                      border: '1px solid rgba(66, 103, 178, 0.3)'
                    }}>
                      📘
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Facebook</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110" style={{
                      background: 'rgba(225, 48, 108, 0.2)',
                      border: '1px solid rgba(225, 48, 108, 0.3)'
                    }}>
                      📸
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Instagram</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110" style={{
                      background: 'rgba(29, 161, 242, 0.2)',
                      border: '1px solid rgba(29, 161, 242, 0.3)'
                    }}>
                      🐦
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Twitter</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110" style={{
                      background: 'rgba(10, 102, 194, 0.2)',
                      border: '1px solid rgba(10, 102, 194, 0.3)'
                    }}>
                      💼
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="p-8 rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.15)'
            }}>
              <h2 className="text-2xl font-bold mb-6" style={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#f0d875'
              }}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37, #aa8c2c)',
                    color: '#0a1628',
                    fontFamily: 'Montserrat, sans-serif',
                    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  {isSubmitted ? '✓ Message Sent!' : 'Submit Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="p-2 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <div className="w-full h-96 rounded-2xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, #0d1b3d, #152238)'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2183394970048!2d77.2570456757138!3d11.022238589141837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9ab505e68aced%3A0x7af39dc9a0944c50!2sArnothaya%20Mall!5e0!3m2!1sen!2sin!4v1773314338705!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arnothaya Mall Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8" style={{
        background: 'rgba(10, 22, 40, 0.95)',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">© 2024 Arnothaya Mall. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-gold transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
