import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const GetStarted = () => {
  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center p-8">
      <Navbar/>
      <div className="bg-cardBg p-12 rounded-md max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get Started with Open Source Community</h2>
        <p className="mb-4">
          Ready to dive into the world of open source? Join us today and become a part of a community that is building the future together.
        </p>
        <p className="mb-4">
          Whether you want to contribute to existing projects, learn new skills, or connect with other developers, we’ve got something for you.
        </p>
        <Link to="/signup">
          <button className="bg-primaryPurple text-black font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-opacity duration-300">
            Join Now
          </button>
        </Link>
        <p className="mt-6 text-gray-400">
          Already a member? <Link to="/login" className="text-primaryPurple hover:underline">Login here</Link>.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
