import React from 'react';
import Navbar from './navbar';

const About = () => {
  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center p-8">
      <Navbar/>
      <div className="bg-cardBg p-12 rounded-md max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">About Open Source Community</h2>
        <p className="mb-4">
          Open Source Community is a platform where developers from around the world can come together to collaborate, learn, and contribute to open-source projects. We believe in the power of collective knowledge and the impact that passionate developers can make when they work together.
        </p>
        <p className="mb-4">
          Our mission is to foster a supportive environment where developers of all skill levels can find meaningful projects to work on, connect with like-minded individuals, and access resources that help them grow their skills.
        </p>
        <p className="mb-4">
          Whether you are an experienced contributor or just starting out, our community offers opportunities for everyone to get involved, share ideas, and make a difference in the world of software development.
        </p>
        <p className="text-primaryPurple font-bold mt-6">Join us on this journey and help shape the future of open source.</p>
      </div>
    </div>
  );
};

export default About;
