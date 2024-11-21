import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header />
      
      {/* Home Section */}
      <Home />
      
      {/* About Section */}
      <About />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
