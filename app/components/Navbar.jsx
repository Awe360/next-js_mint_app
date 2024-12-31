import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-white text-2xl font-bold hover:text-gray-200">
              TV Manager
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link href="/login" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link href="/signup" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-gray-200 focus:outline-none"
              id="mobile-menu-button"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-blue-500" id="mobile-menu">
        <Link href="/" className="block text-white px-3 py-2 hover:bg-blue-700 text-sm font-medium">
          Home
        </Link>
        <Link href="/about" className="block text-white px-3 py-2 hover:bg-blue-700 text-sm font-medium">
          About
        </Link>
        <Link href="/contact" className="block text-white px-3 py-2 hover:bg-blue-700 text-sm font-medium">
          Contact
        </Link>
        <Link href="/login" className="block text-white px-3 py-2 hover:bg-blue-700 text-sm font-medium">
          Login
        </Link>
        <Link href="/signup" className="block text-white px-3 py-2 hover:bg-blue-700 text-sm font-medium">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
