import React from "react";
import { motion } from "framer-motion";
import book3d from "../assets/book3d.png";

const Home = () => {
  return (
    <section className="min-h-screen w-full bg-black px-4 xs:px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      {/* Text Content - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1"
      >
        <h1 className=" font-title text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight font-bold">
          Anas Shaikh – Author
          <br className="hidden xs:block" />& Writer from Mumbai
        </h1>
        <p className="text-gray-300 text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl">
          Author of <span className="italic">The Unseen Crown</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8 justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2 sm:py-3 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 shadow-md text-xs xs:text-sm sm:text-base"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* 3D Book Model - Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0"
      >
        {/* 3D Book Container */}
        <div className="w-40 h-52 xs:w-48 xs:h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-88 xl:w-80 xl:h-96 transform">
          <motion.img
            src={book3d}
            alt="The Unseen Crown - 3D Book"
            className="w-full h-full object-contain drop-shadow-2xl"
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              transition: { duration: 0.5 }
            }}
          />
        </div>

        {/* Buy Now Button */}
        <a href="https://amzn.in/d/3TPlYwl" target="_blank" rel="noopener noreferrer" className="mt-3 sm:mt-4 md:mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 px-5 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg text-xs xs:text-sm sm:text-base md:text-lg w-full xs:w-auto"
          >
            Buy Now
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};

export default Home;