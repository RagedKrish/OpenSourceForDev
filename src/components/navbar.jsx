import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div>
      <header className="p-6 bg-darkBg fixed w-full z-10 top-0 left-0" >
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">AlgoCrux</h1>
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
    </div>
  )
}

export default navbar
