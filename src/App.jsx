import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup'; // Import the Signup component
import Login from './components/Login';   // Import the Login component
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Projects from './components/Projects';
import GetStarted from './components/GetStarted';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

