import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Phone, Wrench, MapPin, Mail } from 'lucide-react';
import logo from './assets/logo.png';
import mall from './assets/mall.png';

function ContactUs() {
  const [visible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const navItems = [
    { name: 'Home', page: 'home', icon: <Home className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'About', page: 'about', icon: <Info className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'Our Services', page: 'ourservices', icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: 'Contact Us', page: 'contact', icon: <Phone className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-yellow-400 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md py-3 transition-opacity duration-700 opacity-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.page}
                to={'/' + item.page}
                className="px-4 py-2 text-white hover:text-yellow-400 font-bold transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
              >
                <span>{item.icon}</span>
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="min-h-screen relative flex items-center pt-32 pb-12">
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="text-center mb-16 transition-all duration-1000 opacity-100 translate-y-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Reach out to our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
              <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">Reach Us Directly</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-400/10 p-3 rounded-2xl text-yellow-500">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Location</p>
                        <p className="text-white/70">Arnothaya Mall, Palladam, Tiruppur</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-400/10 p-3 rounded-2xl text-yellow-500">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Phone</p>
                        <p className="text-white/70">+91 12345 67890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-400/10 p-3 rounded-2xl text-yellow-500">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Email</p>
                        <p className="text-white/70">hello@arnothaya.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">Follow Our Journey</h4>
                  <div className="flex gap-4">
                    {[
                      { 
                        name: 'FB', 
                        path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      },
                      { 
                        name: 'IG', 
                        path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      },
                      { 
                        name: 'TW', 
                        path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      },
                      { 
                        name: 'YT', 
                        path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      }
                    ].map(social => (
                      <a key={social.name} href="#" className="w-12 h-12 bg-white/5 hover:bg-yellow-400 hover:text-black rounded-2xl flex items-center justify-center transition-all duration-300 group">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d={social.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="bg-gray-900/50 backdrop-blur-md p-4 rounded-3xl border border-white/5 h-64 overflow-hidden">
                <iframe 
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2183394970043!2d77.2570456750454!3d11.02223858914187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9ab505e68aced%3A0x7af39dc9a0944c50!2sArnothaya%20Mall!5e0!3m2!1sen!2sin!4v1773124704502!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 transition-all duration-1000 delay-500 opacity-100 translate-x-0">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-4xl">✓</div>
                  <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                  <p className="text-white/70">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-yellow-400 outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Email</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-yellow-400 outline-none transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-yellow-400 outline-none transition-all duration-300 appearance-none">
                      <option>General Inquiry</option>
                      <option>Theater Booking</option>
                      <option>Mall Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/50 uppercase tracking-wider">Message</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleChange} required rows="5"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-yellow-400 outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-xl uppercase tracking-widest"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
