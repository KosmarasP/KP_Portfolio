import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

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

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setIsOpen(false); // Close the mobile menu before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      }, 300); // Delay the scroll to ensure menu closes first
    }
  };

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
          <div className="flex items-center space-x-2 group flex-grow justify-center md:justify-start" aria-label="Homepage">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              {/* Add the logo image */}
              <img src={`${process.env.PUBLIC_URL}/KPLOGO3.png`} alt="Logo" className="h-16 w-16" />
            </motion.div>
            <span className="text-xl font-bold text-white">
              <span
                className="text-gray-600 cursor-pointer"
                onClick={() => handleScrollTo('home')}
              >
                Portfolio
              </span>
            </span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollTo('home')}
              className={`relative text-white hover:text-gray-600 transition group`}
            >
              Home
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <button
              onClick={() => handleScrollTo('services')}
              className={`relative text-white hover:text-gray-600 transition group`}
            >
              Services
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <button
              onClick={() => handleScrollTo('projects')}
              className={`relative text-white hover:text-gray-600 transition group`}
            >
              Projects
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className={`relative text-white hover:text-gray-600 transition group`}
            >
              Contact
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-600 focus:outline-none text-4xl" // Increased icon size
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <span className="h-8 w-8">X</span> : <span className="h-8 w-8">≡</span>} {/* Larger menu icon */}
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
              <button
                onClick={() => handleScrollTo('home')}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollTo('services')}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600"
              >
                Services
              </button>
              <button
                onClick={() => handleScrollTo('projects')}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600"
              >
                Projects
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
