import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://your-backend-api.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Assume the response has a message or token indicating successful signup
        const data = await response.json();
        console.log('Signup successful:', data);
        navigate('/OpenSourcefordev/dashboard'); // Redirect to dashboard on successful signup
      } else {
        // Handle errors
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center">
      <Navbar/>
      <div className="bg-cardBg p-8 rounded-md w-96">
        <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-primaryPurple p-3 rounded-md text-black font-bold"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-primaryPurple">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

