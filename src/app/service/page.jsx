'use client';
import React from 'react';
import { Code, Globe, Database, Smartphone, Palette, Server, Search, Gauge } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like React, Next.js, Node.js, and MongoDB.",
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with responsive designs and smooth user experiences.",
    },
    {
      icon: <Server className="w-12 h-12 text-green-600" />,
      title: "Backend Development",
      description: "Building robust server-side applications, RESTful APIs, and database architecture.",
    },
    {
      icon: <Database className="w-12 h-12 text-yellow-600" />,
      title: "Database Management",
      description: "Designing and optimizing database structures, data modeling, and implementing efficient queries.",
    },
    {
      icon: <Search className="w-12 h-12 text-red-600" />,
      title: "SEO Optimization",
      description: "Implementing best practices for search engine optimization to improve website visibility and ranking.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-indigo-600" />,
      title: "Responsive Design",
      description: "Ensuring applications work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Code className="w-12 h-12 text-teal-600" />,
      title: "Code Review & Optimization",
      description: "Analyzing and improving code quality, performance, and maintainability.",
    },
    {
      icon: <Gauge className="w-12 h-12 text-orange-600" />,
      title: "Performance Optimization",
      description: "Enhancing application speed, efficiency, and overall user experience.",
    },
  ];

  return (
    <div className="bg-white/65 px-4 py-20 w-full min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}

        <div className="relative h-[500px]">

          {/* Gradient Overlay */}
          <div className="absolute inset-0" />

          {/* Content */}
          <div className="relative flex items-center h-full">
            <div className="mx-auto px-6 container">
              <div className="max-w-3xl">
                <Link href={'/contact'}>
                  <div className="inline-block bg-[#9900ff] backdrop-blur-sm mb-4 px-4 py-2 rounded-full font-medium text-white text-sm">
                    GET IN TOUCH
                  </div>
                </Link>
                <h1 className="drop-shadow-lg mb-6 font-extrabold text-white text-6xl">
                  My Services
                </h1>
                <p className="text-gray-700 text-xl">
                  Delivering comprehensive web development solutions with a focus on quality,
                  performance, and user experience.</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="right-0 bottom-0 left-0 absolute">
            <svg
              className="fill-current w-full h-24 text-gray-100"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 100 C 20 0 50 0 100 100 Z" />
            </svg>
          </div>
        </div>

        {/* Services Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 shadow-lg hover:shadow-xl backdrop-blur-sm p-6 rounded-xl transition-all hover:-translate-y-1 duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-3 font-semibold text-xl">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="top-0 left-0 -z-10 absolute bg-gradient-to-br from-transparent via-transparent to-blue-100/30 opacity-0 group-hover:opacity-100 rounded-xl w-full h-full transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="relative bg-white/80 shadow-lg backdrop-blur-sm mt-20 p-10 rounded-2xl overflow-hidden text-center">
          <div className="top-0 right-0 -z-10 absolute bg-yellow-300/30 blur-3xl rounded-full w-64 h-64" />
          <div className="bottom-0 left-0 -z-10 absolute bg-blue-300/30 blur-3xl rounded-full w-64 h-64" />
          <h2 className="mb-4 font-bold text-3xl">Ready to Start Your Project?</h2>
          <p className="mb-8 text-gray-700 text-xl">Let's collaborate to bring your ideas to life!</p>
          <Link href={'/contact'}>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-white transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}