 'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/service', label: 'Services' }, 
    { href: '/projects', label: 'Realisations' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex flex-shrink-0 items-center space-x-3">
            <Image 
              src="/images/logo.png" 
              alt="logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain"
            />
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-transparent text-xl">
              Flow Web Service
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg px-6 py-2 rounded-full font-medium text-white hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center items-center hover:bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset text-gray-600 hover:text-blue-600"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block w-6 h-6" />
              ) : (
                <Menu className="block w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 bg-white/80 shadow-lg backdrop-blur-md px-2 pt-2 pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block hover:bg-gray-50 px-3 py-2 rounded-md font-medium text-gray-600 hover:text-blue-600 text-base transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg px-6 py-2 rounded-full w-full font-medium text-white transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}