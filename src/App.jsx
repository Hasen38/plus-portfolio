// filepath: src/App.js
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./index.css";
import Footer from "./components/Footer";
import "./App.css";


import Projects from "./components/projects";

import Hitup from "./components/Hitup";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />

      <Projects />
      <Hitup />
      <Footer />
    </div>
  );
}

export default App;
