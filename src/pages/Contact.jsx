import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1srskdk',     // replace with your EmailJS service ID
      'template_fvzhi1t',    // replace with your EmailJS template ID
      formRef.current,
      'BycAbkWdTLr3B73Vs'      // replace with your EmailJS public key
    ).then(
      () => {
        setSent(true);
        formRef.current.reset();
        setTimeout(() => setSent(false), 5000);
      },
      (error) => {
        alert('Oops! Something went wrong...', error);
      }
    );
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Me",
      detail: "anasshaikh.author@gmail.com",
      description: "I respond within 24 hours"
    },
   
    {
      icon: FaClock,
      title: "Response Time",
      detail: "Within 24 Hours",
      description: "Quick response guaranteed"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 bg-black mt-130"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-8 text-center">
        Get In Touch
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form - Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-yellow-400/30 flex flex-col gap-4 h-full"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Send a Message</h2>
            <p className="text-gray-300 mb-4">Have questions about my books or want to collaborate? I'd love to hear from you!</p>
            
            <input
              type="text"
              name="from-name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-gray-800 text-white border border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
            />
            <input
              type="email"
              name="from-Email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-gray-800 text-white border border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
            />
            <textarea
              name="Message"
              placeholder="Your message here... Tell me about your thoughts, questions, or collaboration ideas!"
              required
              rows="5"
              className="p-3 rounded-md bg-gray-800 text-white border border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all resize-none"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 mt-2 flex items-center justify-center gap-2"
            >
              Send Message
              <FaCheckCircle />
            </motion.button>

            {sent && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 font-medium mt-2 text-center flex items-center justify-center gap-2"
              >
                <FaCheckCircle /> Message sent successfully!
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Contact Information - Right Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-yellow-400/30">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Let's Connect</h2>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all"
                >
                  <div className="p-2 bg-yellow-400/20 rounded-full mt-1">
                    <item.icon className="text-yellow-400 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-yellow-300 font-medium">{item.detail}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;