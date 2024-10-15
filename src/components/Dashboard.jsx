import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center p-8">
      <div className="bg-cardBg p-12 rounded-md max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Welcome to the Open Source Community!</h2>
        <p className="mb-4">
          Thank you for joining us! You are now part of a vibrant community of developers committed to collaboration and innovation.
        </p>
        <p className="mb-4">
          Here are some resources to get you started:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <Link to="/projects" className="text-primaryPurple hover:underline">Explore Projects</Link> - Check out the projects you can contribute to.
          </li>
          <li>
            <Link to="/features" className="text-primaryPurple hover:underline">Discover Features</Link> - Learn about the tools and resources available to you.
          </li>
          <li>
            <Link to="/contact" className="text-primaryPurple hover:underline">Contact Us</Link> - Reach out if you have any questions or need help.
          </li>
        </ul>
        <Link to="/get-started">
          <button className="bg-primaryPurple text-black font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-opacity duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
