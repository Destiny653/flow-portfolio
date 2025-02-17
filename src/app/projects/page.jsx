 'use client';
import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment integration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization.",
      technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and multi-language support.",
      technologies: ["React", "Python", "TensorFlow", "WebSocket"],
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with dynamic content management and animations.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates and team features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Application",
      description: "Weather forecast application with interactive maps and location-based services.",
      technologies: ["React Native", "OpenWeather API", "Maps"],
      imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="bg-white/65 px-4 py-20 w-full min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="relative flex flex-col justify-center items-center mb-16 h-[400px] text-center">
          <div className="top-0 right-1/4 -z-10 absolute bg-purple-400/50 blur-3xl rounded-full w-32 h-32" />
          <div className="top-10 left-1/4 -z-10 absolute bg-yellow-400/50 blur-3xl rounded-full w-32 h-32" />
          <h1 className="mb-6 font-bold text-5xl">My Projects</h1>
          <p className="mx-auto max-w-2xl text-gray-700 text-xl">
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
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-white transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}