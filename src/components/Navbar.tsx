import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY < lastScrollY) {
          setShowNavbar(true); // scrolling up
        } else if (window.scrollY > lastScrollY) {
          setShowNavbar(false); // scrolling down
        }
      } else {
        setShowNavbar(true); // Always show on small screens
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/activities', label: 'Services' },
    { path: '/Projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.4 }}
      className="z-50 w-full top-0 left-0 md:fixed sticky bg-black"
    >
      <div className="max-w-[75vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 rounded-none md:rounded-3xl text-white px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" aria-label="Homepage">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              {/* Add the logo image */}
              <img src={`${process.env.PUBLIC_URL}/KPLOGO3.png`} alt="Logo" className="h-16 w-16" />
            </motion.div>
            <span className="text-xl font-bold text-white">
              <span className="text-gray-600"> Portfolio</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-white hover:text-gray-600 transition group ${
                  location.pathname === link.path ? 'text-gray-600' : ''
                }`}
              >
                {link.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-600 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black px-4 pb-4"
          >
            <div className="pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-gray-600'
                      : 'text-white hover:text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
