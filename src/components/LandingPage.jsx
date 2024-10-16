import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const LandingPage = () => {
    

    

    return (
        <div className="bg-darkBg text-darkText min-h-screen">
            {/* Navbar Section */}
            <Navbar/>

            {/* Main Content */}
            <div className="pt-20 ">
                {/* Hero Section */}
                <section className="text-center md:pl-20 md:pr-20 min-h-screen w-full bg-dotted">
                    <div className='grid min-h-screen content-center'>
                    <h2 className="text-5xl font-bold mb-4 text-white">Connect & Contribute to Open Source</h2>
                    <p className="text-lg mb-6">Empowering developers to build the future together.</p>
                    <Link to='/OpenSourcefordev/getstarted'><button className="bg-primaryPurple px-8 py-4 rounded-md text-black text-xl">Get Started</button></Link>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="p-16 bg-cardBg">
                    <h3 className="text-3xl font-bold mb-4 text-white">What We Do</h3>
                    <p>We bring together passionate developers who want to collaborate on open-source projects and share their knowledge with the world.</p>
                </section>

                {/* Features Section */}
                <section id="features" className="p-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-cardBg rounded-md hover:bg-primaryPurple transition-colors duration-300">
                            <h4 className="text-xl font-bold text-white">Open Source Projects</h4>
                            <p>Contribute to exciting projects across various technologies.</p>
                        </div>
                        <div className="p-8 bg-cardBg rounded-md hover:bg-primaryPurple transition-colors duration-300">
                            <h4 className="text-xl font-bold text-white">Community Events</h4>
                            <p>Join events and hackathons to connect with other developers.</p>
                        </div>
                        <div className="p-8 bg-cardBg rounded-md hover:bg-primaryPurple transition-colors duration-300">
                            <h4 className="text-xl font-bold text-white">Resources & Mentorship</h4>
                            <p>Get access to resources and mentorship from experienced contributors.</p>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="p-16 bg-cardBg">
                    <h3 className="text-3xl font-bold mb-8 text-white">Projects</h3>
                    <p>Explore projects currently being developed by our community.</p>
                </section>

                {/* Team Section */}
                <section id="team" className="p-16">
                    <h3 className="text-3xl font-bold mb-8 text-white">Our Team</h3>
                    <p>Meet the contributors who make everything possible.</p>
                </section>

                {/* Contact Section */}
                <footer id="contact" className="p-16 bg-cardBg text-center">
                    <h3 className="text-3xl font-bold mb-4 text-white">Get in Touch</h3>
                    <p>Follow us on social media or send us an email at contact@opensourcecommunity.org</p>
                    <p className="mt-4">© 2024 Open Source Community. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
