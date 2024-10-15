import React from 'react';

const Contact = () => {
  return (
    <div className="bg-darkBg text-darkText min-h-screen flex items-center justify-center p-8">
      <div className="bg-cardBg p-12 rounded-md max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
        <p className="mb-4">
          Have questions or want to get in touch? Feel free to reach out to us.
        </p>
        <form className="space-y-6 mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 text-white rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 text-white rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 bg-gray-800 text-white rounded-md"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primaryPurple p-4 rounded-md text-black font-bold"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6">Alternatively, email us at <a href="mailto:contact@opensourcecommunity.org" className="text-primaryPurple">contact@opensourcecommunity.org</a></p>
      </div>
    </div>
  );
};

export default Contact;
