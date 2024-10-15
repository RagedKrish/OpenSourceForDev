import React from 'react';

const Projects = () => {
  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center p-8">
      <div className="bg-cardBg p-12 rounded-md max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Our Projects</h2>
        <p className="mb-4">
          Explore some of the amazing projects our community is working on. Contribute to existing projects or start your own.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-darkBg rounded-md hover:bg-primaryPurple transition-colors duration-300">
            <h4 className="text-xl font-bold text-white">Project One</h4>
            <p>Open-source project focusing on web development with React and Node.js.</p>
          </div>
          <div className="p-6 bg-darkBg rounded-md hover:bg-primaryPurple transition-colors duration-300">
            <h4 className="text-xl font-bold text-white">Project Two</h4>
            <p>Collaborative effort to create a machine learning library in Python.</p>
          </div>
          <div className="p-6 bg-darkBg rounded-md hover:bg-primaryPurple transition-colors duration-300">
            <h4 className="text-xl font-bold text-white">Project Three</h4>
            <p>Mobile app development using Flutter for cross-platform support.</p>
          </div>
          <div className="p-6 bg-darkBg rounded-md hover:bg-primaryPurple transition-colors duration-300">
            <h4 className="text-xl font-bold text-white">Project Four</h4>
            <p>Building an open-source design system for modern web interfaces.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
