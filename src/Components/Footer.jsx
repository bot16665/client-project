import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4 sm:px-8 md:px-16 lg:px-24 mt-130">
      {/* Top section - Reach Me Out + contact info */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-4 md:gap-12 mb-8">
        <h2 className="text-6xl font-bold text-yellow-400">Reach Me Out</h2>
      </div>

      <div className="flex flex-col sm:flex-row  text-xl sm:gap-6 md:gap-12 ">
          <span>Email: <a href="anasshaikh.author@gmail.com" className="text-yellow-400 hover:underline">anasshaikh.author@gmail.com</a></span>
          <span>Phone: <a href="tel:+91 xxxxxxx" className="text-yellow-400 hover:underline">+91 xxxxxxxx</a></span>

        </div>

      {/* Bottom section - social icons centered */}
      <div className="flex justify-center gap-6 text-2xl mt-4">
        <a href="https://www.facebook.com/share/1B3BBZjLNH/" className="text-gray-300 hover:text-yellow-400"><FaFacebook /></a>
        <a href="https://www.instagram.com/anasshaikh__._?igsh=b2x1dWd2ZjZ1ZGEy" className="text-gray-300 hover:text-yellow-400"><FaInstagram /></a>
        <a href="https://youtube.com/@prodbykemani?si=TjAoNF-OAZm0aaXt" className="text-gray-300 hover:text-yellow-400"><FaYoutube /></a>
      </div>

     
    </footer>
  );
};

export default Footer;
