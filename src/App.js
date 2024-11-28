import React from 'react';
import './Styles/styleport.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/navbar';
// In your App.js or App component
<a href="https://reactjs.org">Learn React</a>


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
