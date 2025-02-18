'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' }, 
    { name: 'Services', href: '/services' },
    { name: 'Realisations', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Backend Development',
    'Database Management',
    'API Integration',
  ];

  const recentProjects = [
    {
      name: 'E-Commerce Application',
      image: '/images/liquor.png',
      href: 'https://liquorluxx.vercel.app'
    },
    {
      name: 'Restaurant Management',
      image: '/images/restaurant.png',
      href: 'https://restaurantemo.vercel.app/'
    },
    {
      name: 'E-commerce Application',
      image: '/images/bliss.png',
      href: 'https://babyblissl.vercel.app/'
    }
  ];

  return (
    <footer className="relative bg-white/80 backdrop-blur-md pt-16 pb-8 w-full overflow-hidden">
      {/* Decorative Elements */}
      <div className="top-0 right-0 -z-10 absolute bg-blue-300/30 blur-3xl rounded-full w-64 h-64" />
      <div className="bottom-0 left-0 -z-10 absolute bg-purple-300/30 blur-3xl rounded-full w-64 h-64" />
      
      <div className="mx-auto px-4 max-w-7xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://source.unsplash.com/100x100/?logo"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h3 className="font-bold text-xl">Mbahmukong Destiny</h3>
            </div>
            <p className="text-gray-600">
              Transforming ideas into exceptional digital experiences through innovative web development solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Projects */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Recent Projects</h3>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <Link href={project.href} key={index}>
                  <div className="group flex items-center gap-3">
                    <div className="relative rounded-lg w-16 h-16 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="group-hover:text-blue-600 text-gray-600 transition-colors">
                      {project.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="flex flex-wrap justify-between items-center py-6 border-gray-200 border-t">
          <div className="flex flex-wrap gap-6">
            <a href="mailto:contact@example.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              fokundem653@gmail.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Phone className="w-5 h-5" />
              +237 (53) 041-355
            </a>
            <span className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              Bamenda, Cameroon
            </span>
          </div>

          {/* Newsletter */}
          <div className="flex items-center gap-2 mt-4 lg:mt-0">
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              className="bg-white/50 px-4 py-2 border border-gray-200 focus:border-blue-500 rounded-lg focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-gray-200 border-t text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Mbahmukong Destiny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}