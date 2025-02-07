'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaCode, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
              <FaUser />
              About
            </Link>
            <Link href="/skills" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
              <FaCode />
              Skills
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
              <FaProjectDiagram />
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
              <FaEnvelope />
              Contact
            </Link>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://github.com/abduroo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-blue-600"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-blue-600"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaUser />
                About
              </Link>
              <Link 
                href="/skills" 
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaCode />
                Skills
              </Link>
              <Link 
                href="/projects" 
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaProjectDiagram />
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaEnvelope />
                Contact
              </Link>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/abduroo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
