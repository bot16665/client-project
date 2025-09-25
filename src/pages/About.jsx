import React from 'react';
import { motion } from 'framer-motion';
import authorImage from "../assets/author.jpeg";

const AboutMe = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-8 sm:py-12 md:py-16 min-h-screen flex flex-col justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Heading */}
      <motion.h1
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-yellow-400 text-center"
        variants={pulseVariants}
        initial="initial"
        animate="animate"
      >
        About Me
      </motion.h1>

      {/* Content Container */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
        {/* Image Section */}
        <motion.div 
          className="w-full xl:w-2/5 2xl:w-1/3 flex justify-center mb-4 sm:mb-6 xl:mb-0"
          variants={imageVariants}
        >
          <img
            src={authorImage}
            alt="Profile"
            className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 2xl:w-96 2xl:h-96 object-cover rounded-2xl border-4 border-yellow-400 shadow-xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full xl:w-3/5 2xl:w-2/3 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 text-gray-300"
          variants={containerVariants}
        >
          <motion.p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed" variants={itemVariants}>
            Hi, my name is Anas Shaikh, a writer from Mumbai, India, and the author of my debut book <span className="italic">The Unseen Crown</span>. My writing journey began during the COVID-19 lockdown on 30 January 2020, a time when the world was silent and we were all confined to our homes. What started as a way to express my thoughts soon became a source of strength and self-discovery, eventually transforming into a lifelong passion...
          </motion.p>

          <motion.p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed" variants={itemVariants}>
            Alongside my path as a writer, I hold a Bachelor of Commerce (Programming) degree, work in the IT field, and continue to pursue higher studies. I believe that learning never ends—for me, education is life itself.
          </motion.p>

          <motion.p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-yellow-300 font-medium italic text-center xl:text-left px-2 xs:px-0" variants={itemVariants}>
            "Education is the light that never fades; without it, life loses its direction."
          </motion.p>

          <motion.p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed" variants={itemVariants}>
            Beyond academics and professional life, creativity is my way of connecting with the world—whether through writing, music, photography, or continuous learning...
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;