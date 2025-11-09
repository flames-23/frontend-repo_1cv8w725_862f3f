import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="border-t border-white/10 bg-black py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
