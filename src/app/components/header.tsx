"use client";

import Link from 'next/link';
import { useState } from 'react';
import "../globals.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold  text-white font-arial">Programming Blog</h1>

        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="material-icons">menu</span> {/* You can use your preferred icon */}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-lg font-medium hover:text-blue-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-blue-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-blue-300 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <ul className="flex flex-col items-center space-y-4 py-4 bg-blue-800">
          <li>
            <Link
              href="/"
              className="text-lg font-medium text-white hover:text-blue-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-medium text-white hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-medium text-white hover:text-blue-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
