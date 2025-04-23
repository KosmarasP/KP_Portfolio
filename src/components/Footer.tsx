import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 mt-2">
        {/* Section: Let's Connect */}
        <div className="text-center mb-3">
          <h2 className="text-lg font-semibold text-white mb-1">Let’s Connecttttttttt</h2>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            I'm always open to new opportunities or collaboration. Reach out to me!
          </p>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* Section: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold mb-1">Contact</h3>
            <div className="space-y-1 text-gray-400">
              <div className="flex justify-center items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-white">(+30) 6980303829</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="text-white">kosmaspapd@gmail.com</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span className="text-white">Athens, Greece</span>
              </div>
            </div>
          </div>

          {/* Section: Follow Me */}
          <div className="space-y-2 text-center">
            <h3 className="text-sm font-semibold mb-1">Follow Me</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/kosmas-papadopoulos-5995631b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/kosmas-papadopoulos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* Section: Call to Action */}
        <div className="text-center mt-4 py-3 bg-gray-950 rounded-lg">
          <h3 className="text-md font-semibold text-white mb-1">Let's Work Together!</h3>
          <p className="text-gray-300 mb-2">I’m excited to work on your next project!</p>
          <Link
            to="/contact" // Link now directs to the Contact page
            className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm font-semibold hover:bg-blue-600 transition duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Section: Footer Bottom */}
      <div className="bg-black text-center text-xs text-gray-400 py-2">
        <p>&copy; 2025 Kosmas Papadopoulos. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
