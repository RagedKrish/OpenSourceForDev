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
        <Route path="/OpenSourcefordev/" element={<LandingPage />} />
        <Route path="/OpenSourcefordev/signup" element={<Signup />} />
        <Route path="/OpenSourcefordev/login" element={<Login />} />
        <Route path="/OpenSourcefordev/about" element={<About />} />
        <Route path="/OpenSourcefordev/features" element={<Features />} />
        <Route path="/OpenSourcefordev/contact" element={<Contact />} />
        <Route path="/OpenSourcefordev/projects" element={<Projects />} />
        <Route path="/OpenSourcefordev/getstarted" element={<GetStarted />} />
        <Route path="/OpenSourcefordev/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

