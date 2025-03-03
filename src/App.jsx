import React, { useState, useEffect } from 'react';
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Designs from './Pages/Designs';
import Footer from './Pages/Footer';
import Loading from './Loading/Loading'; 
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before showing the main content
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <div className="app">
      {loading ? <Loading name="SACHIN KUMAR" /> : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Designs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;