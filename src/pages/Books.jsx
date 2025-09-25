import React from 'react';
import { motion } from 'framer-motion';
import book3d from "../assets/books1d.png"; // replace with your 3D book image

const Books = () => {
  return (

    <motion.section 
      className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 md:py-16 bg-black text-center lg:text-left "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-4 md:gap-12 mb-8">
        <h2 className="text-6xl font-bold text-yellow-400">My Books</h2>
      </div>
      {/* Left Side - Book Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-6 md:mb-8 lg:mb-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={book3d}
          alt="The Unseen Crown Book 3D"
          className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto drop-shadow-2xl"
        />
      </motion.div>

      {/* Right Side - Text & Button */}
      <motion.div
        className="w-full lg:w-1/2 lg:pl-8 xl:pl-12 flex flex-col justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >

        
        {/* Page Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-4 md:mb-6">
          The Unseen Crown
        </h1>

        {/* Book Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
          <span className="italic">The Unseen Crown</span> is my debut book — a journey of resilience, 
          self-discovery, and the unseen strength we all carry within us. 
          This book was born during the silence of the pandemic, and it speaks 
          to anyone searching for hope, purpose, and inner courage.
        </p>

        {/* Buy Now Button */}
        <a href="https://amzn.in/d/3TPlYwl" target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg font-body font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg mt-4 sm:mt-6 text-sm sm:text-base md:text-lg"
          >
            Buy Now
          </motion.button>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Books;