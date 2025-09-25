// src/App.jsx
import React from "react";
import Navbar from "./Components/Navbar"; // make sure folder name matches

// Import your sections
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Sections stacked for scroll */}
      <section id="home" className="h-screen flex items-center justify-center">
        <Home />
      </section>

      <section id="about" className="h-screen flex items-center justify-center">
        <About />
      </section>

      <section id="books" className="h-screen flex items-center justify-center">
        <Books />
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <Contact />
      </section>

      <section id="footer" className="">
        <Footer />
      </section>

    </div>
  );
};

export default App;
