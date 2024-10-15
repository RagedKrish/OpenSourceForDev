import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-darkBg text-darkText min-h-screen">
            {/* Navbar Section */}
            <header className="p-6 bg-darkBg fixed w-full z-10 top-0 left-0">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">Open Source Community</h1>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6 md:items-center">
                        <Link to="/about" className="hover:text-primaryPurple">About</Link>
                        <Link to="/features" className="hover:text-primaryPurple">Features</Link>
                        <Link to="/projects" className="hover:text-primaryPurple">Projects</Link>
                        <Link to="/contact" className="hover:text-primaryPurple">Contact</Link>
                        <Link to="/signup" className="bg-primaryPurple px-4 py-2 rounded-md text-black">Join Us</Link>
                    </nav>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4">
                        <ul className="space-y-4">
                            <li><Link to="/about" className="hover:text-primaryPurple">About</Link></li>
                            <li><Link to="/features" className="hover:text-primaryPurple">Features</Link></li>
                            <li><Link to="/projects" className="hover:text-primaryPurple">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-primaryPurple">Contact</Link></li>
                            <li><Link to="/signup" className="block bg-primaryPurple px-4 py-2 rounded-md text-center text-black">Join Us</Link></li>
                        </ul>
                    </nav>
                )}
            </header>

            {/* Main Content */}
            <div className="pt-20">
                {/* Hero Section */}
                <section className="text-center p-20">
                    <h2 className="text-5xl font-bold mb-4 text-white">Connect & Contribute to Open Source</h2>
                    <p className="text-lg mb-6">Empowering developers to build the future together.</p>
                    <Link to='/getstarted'><button className="bg-primaryPurple px-8 py-4 rounded-md text-black text-xl">Get Started</button></Link>
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
