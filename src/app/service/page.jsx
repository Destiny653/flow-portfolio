'use client';
import React from 'react';
import { Code, Globe, Database, Smartphone, Palette, Server, Search, Gauge } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
        {/* Enhanced Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl mb-16 h-[500px] flex flex-col justify-center items-center text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-contain opacity-10"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
          
          {/* Content container */}
          <div className="relative z-10 px-6">
            {/* Your logo */}
            <div className="mx-auto mb-8 w-32 h-32 relative">
              <Image 
                src="/images/logo.png" 
                alt="Your Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            <Link href="/contact">
              <span className="inline-block bg-indigo-500 hover:bg-indigo-600 mb-6 px-6 py-2 rounded-full font-medium text-white text-sm transition-colors duration-300">
                GET IN TOUCH
              </span>
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              My <span className="text-purple-300">Services</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-purple-100 leading-relaxed">
              Delivering comprehensive web development solutions with a focus on quality,
              performance, and exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/90 shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Icon with gradient background */}
              <div className="relative mb-6 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                {React.cloneElement(service.icon, {
                  className: "relative z-10 w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                })}
              </div>
              
              <h3 className="mb-3 font-bold text-xl text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              
              {/* Hover effect border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <div className="relative mt-20 p-10 rounded-2xl overflow-hidden text-center bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat opacity-5"></div>
          
          <h2 className="mb-4 font-bold text-3xl text-white">Ready to Start Your Project?</h2>
          <p className="mb-8 text-indigo-100 text-xl max-w-2xl mx-auto">
            Let's collaborate to transform your ideas into exceptional digital experiences.
          </p>
          
          <Link href="/contact">
            <button className="relative z-10 bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Get in Touch
            </button>
          </Link>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}