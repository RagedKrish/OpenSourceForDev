import React from 'react';

const Features = () => {
  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center p-8">
      <div className="bg-cardBg p-12 rounded-md max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Our Features</h2>
        <p className="mb-4">
          We offer a range of features that make it easy for developers to collaborate and contribute to open source projects.
        </p>
        <ul className="text-left list-disc list-inside space-y-4 mt-6">
          <li>💻 <span className="text-primaryPurple">Collaborative Projects:</span> Work together with other developers on exciting open-source projects.</li>
          <li>📚 <span className="text-primaryPurple">Learning Resources:</span> Access tutorials, guides, and resources to boost your skills.</li>
          <li>👥 <span className="text-primaryPurple">Community Events:</span> Participate in hackathons, workshops, and networking events.</li>
          <li>🤝 <span className="text-primaryPurple">Mentorship Programs:</span> Get guidance from experienced developers to help you grow.</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
