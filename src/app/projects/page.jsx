'use client';
import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment integration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Payunit", "Express"],
      imageUrl: "/images/bliss.png",
      liveUrl: "https://babyblissl.vercel.app",
      githubUrl: "#",
    },
    {
      title: "E-commerce Application",
      description: "A complete full-stack e-commerce liquor store with full Api intergration, fully functional.",
      technologies: ["Next.js", "Google Auth", "MongoDB", "Crypto"],
      imageUrl: "/images/liquor.png",
      liveUrl: "https://liquorluxx.vercel.app/",
      githubUrl: "https://github.com/Destiny653/Liquor.git",
    },
    {
      title: "Api Intergrated Image Gellery",
      description: "Real-time pixaby images Api intergrated with limitless lively images including anims.",
      technologies: ["React", "Tailwind CSS"],
      imageUrl: "/images/gallery.png",
      liveUrl: "https://gallerylive.vercel.app/",
      githubUrl: "https://github.com/Destiny653/Gallery.git",
    }, 
    {
      title: "Restaurant Management",
      description: "Collaborative task management platform with real-time updates and team features.",
      technologies: ["Next.js", "MongoDB", "Express", "Tailwind CSS"],
      imageUrl: "/images/restaurant.png",
      liveUrl: "https://restaurantemo.vercel.app/",
      githubUrl: "https://github.com/Destiny653/restaurant-mgt.git",
    },
    {
      title: "E-commerce Application",
      description: "An e-commerce grocery store for managing and boosting sales both online and locally.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      imageUrl: "/images/emo.png",
      liveUrl: "https://emocommerce.vercel.app",
      githubUrl: "https://github.com/Destiny653/project-level2.git",
    },
    {
      title: "A simple CSS animation",
      description: "An e-commerce detail animation card.",
      technologies: ["HTML", "JavaScript", "CSS"],
      imageUrl: "/images/shoe.png",
      liveUrl: "https://destiny653.github.io/JSshoe-Animation/",
      githubUrl: "https://github.com/Destiny653/JSshoe-Animation.git",
    },
    {
      title: "Weather Application",
      description: "Weather forecast application with interactive maps and location-based services.",
      technologies: ["React Native", "OpenWeather API", "Maps"],
      imageUrl: "/images/weather.png",
      liveUrl: "https://destiny653.github.io/Weather-card-anim/",
      githubUrl: "https://github.com/Destiny653/Weather-card-anim.git",
    },
    {
      title: "Marketplace",
      description: "A marketplace platform for buying and selling multi products with user reviews.",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Stripe", "Shadcn"],
      imageUrl: "/images/marketplace.png",
      liveUrl: "https://marketplace-five-gold.vercel.app/",
      githubUrl: "https://github.com/Destiny653/marketplace.git",
    },
    {
      title: "Domain.com",
      description: "An HTML CSS domain .com web practice, first project execution.",
      technologies: ["HTML", "JavaScript", "CSS"],
      imageUrl: "/images/domain.png",
      liveUrl: "https://destiny653.github.io/Domain.com/",
      githubUrl: "https://github.com/Destiny653/Domain.com.git",
    }, 
    {
      title: "A complete E-commerce application with dashboard",
      description: "A custom dashboard with both UI/UX interface and interactive features.",
      technologies: ["React", "NestJs", "Tailwind CSS", "Vite", "Shadcn", "Tanstack Query", "MongoDB"],
      imageUrl: "/images/dashboard.png",
      liveUrl: "https://cfactorexi.vercel.app/#/login",
      githubUrl: "https://github.com/Destiny653/cfactorexi.git",
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
          
          {/* Floating logo */}
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
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              My <span className="text-purple-300">Projects</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-purple-100 leading-relaxed">
              Showcasing innovative solutions and cutting-edge web applications.
              Each project represents unique challenges and creative solutions.
            </p>
            
            {/* Animated scroll indicator */}
            <div className="mt-12 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/90 shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project image with overlay */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <h3 className="mb-3 font-bold text-xl text-gray-800">{project.title}</h3>
                <p className="mb-4 text-gray-600 text-sm">{project.description}</p>
                
                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 px-3 py-1 rounded-full text-blue-600 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <div className="relative mt-20 p-10 rounded-2xl overflow-hidden text-center bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat opacity-5"></div>
          
          <h2 className="mb-4 font-bold text-3xl text-white">Let's Build Something Amazing</h2>
          <p className="mb-8 text-indigo-100 text-xl max-w-2xl mx-auto">
            I'm passionate about creating exceptional digital experiences. Reach out to discuss your next project.
          </p>
          
          <Link href="/contact">
            <button className="relative z-10 bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Contact Me
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