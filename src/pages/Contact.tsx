// src/components/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full h-auto bg-gray-950 py-32 overflow-hidden">
      {/* Map as background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d169286.50601603856!2d23.71056856736508!3d37.963738505818114!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1745008948780!5m2!1sen!2sgr"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nea Smyrni Map"
        ></iframe>
      </div>

      {/* Content on top of the map */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-40">
        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Send a message
          </h2>
          <div className="w-8 sm:w-10 h-1 bg-blue-500 mb-4 sm:mb-6" />
          <form className="space-y-4 sm:space-y-5">
            <input
              type="text"
              placeholder="Name *"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <textarea
              rows="4"
              placeholder="Message *"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Get in touch
          </h2>
          <div className="w-8 sm:w-10 h-1 bg-blue-500 mb-4 sm:mb-6" />
          <div className="space-y-4 sm:space-y-6 text-gray-800 text-sm sm:text-base">
            <div>
              <p className="font-medium text-gray-900">Phone :</p>
              <p>+ (30) 6980303829</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Address :</p>
              <p>Nea Smyrni<br /> Athens, Greece</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Email :</p>
              <p>kosmaspapd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
