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
      title: "Domain.com",
      description: "An HTML CSS domain .com web practice, first project execution.",
      technologies: ["HTML", "JavaScript", "CSS"],
      imageUrl: "/images/domain.png",
      liveUrl: "https://destiny653.github.io/Domain.com/",
      githubUrl: "https://github.com/Destiny653/Domain.com.git",
    }, 
    {
      title: "Custom Dashboard",
      description: "A custom dashboard with both UI/UX interface and interactive features.",
      technologies: ["React", "dummyJSON", "Tailwind CSS", "Vite", "Shadcn"],
      imageUrl: "/images/dashboard.png",
      liveUrl: "https://cfactorexi.vercel.app/#/login",
      githubUrl: "https://github.com/Destiny653/cfactorexi.git",
    },

  ];

  return (
    <div className="bg-white/65 px-4 py-20 w-full min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="relative flex flex-col justify-center items-center mb-16 h-[400px] text-center">
          {/* Soft Gradient Background Blurs */}
          <div className="-z-10 absolute inset-0 bg-gradient-to-r from-purple-400/40 via-pink-300/40 to-yellow-300/40 opacity-70 blur-3xl rounded-3xl" />

          <div className="top-0 right-1/4 -z-10 absolute bg-purple-500/40 blur-[120px] rounded-full w-40 h-40" />
          <div className="top-10 left-1/4 -z-10 absolute bg-yellow-500/40 blur-[120px] rounded-full w-40 h-40" />

          {/* Main Content */}
          <h1 className="drop-shadow-lg mb-6 font-extrabold text-white text-6xl">My Projects</h1>

          <p className="mx-auto max-w-2xl text-gray-700 text-xl leading-relaxed">
            Showcasing my latest web development projects and applications.
            Each project represents a unique challenge and solution.
          </p>
        </div>


        {/* Projects Grid - Modified to 3 columns */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/80 shadow-lg hover:shadow-xl backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-semibold text-xl">{project.title}</h3>
                <p className="mb-4 text-gray-600 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 px-3 py-1 rounded-full text-blue-600 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm"
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

        {/* Contact Section */}
        <div className="relative bg-white/80 shadow-lg backdrop-blur-sm mt-20 p-10 rounded-2xl overflow-hidden text-center">
          <div className="top-0 right-0 -z-10 absolute bg-green-300/30 blur-3xl rounded-full w-64 h-64" />
          <div className="bottom-0 left-0 -z-10 absolute bg-pink-300/30 blur-3xl rounded-full w-64 h-64" />
          <h2 className="mb-4 font-bold text-3xl">Interested in Working Together?</h2>
          <p className="mb-8 text-gray-700 text-xl">I'm always open to discussing new projects and opportunities.</p>
          <Link href={'/contact'}>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-white transition-colors">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}