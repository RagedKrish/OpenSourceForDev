import React from 'react';

const Signup = () => {
  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center">
      <div className="bg-cardBg p-8 rounded-md w-96">
        <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-primaryPurple p-3 rounded-md text-black font-bold"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <a href="/login" className="text-primaryPurple">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
