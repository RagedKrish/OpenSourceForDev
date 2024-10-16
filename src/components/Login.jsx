import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Assume the response contains user data or a token on successful login
        const data = await response.json();
        console.log('Login successful:', data);
        // Save token or user information to localStorage or context if needed
        localStorage.setItem('userToken', data.token); // Example of saving token
        navigate('/OpenSourcefordev/dashboard'); // Redirect to the dashboard
      } else {
        // Handle errors
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center">
      <Navbar/>
      <div className="bg-cardBg p-8 rounded-md w-96">
        <h2 className="text-3xl font-bold text-white mb-6">Log In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
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
            Log In
          </button>
        </form>
        <p className="mt-4">
          Don't have an account? <Link to="/signup" className="text-primaryPurple">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

