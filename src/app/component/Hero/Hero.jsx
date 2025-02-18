'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Github, Code, Database, Layout, Server, Globe, Smartphone, Search, Gauge } from 'lucide-react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expertise = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "JavaScript & React",
      description: "Building interactive and dynamic web applications with modern frameworks."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Next.js",
      description: "Creating fast, SEO-friendly server-rendered applications."
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Node.js & Express",
      description: "Developing robust backend services and RESTful APIs."
    },
    {
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      title: "MongoDB, MyQSL & Python",
      description: "Managing databases and data manipulation with modern tools."
    },
    {
      icon: <Layout className="w-8 h-8 text-pink-500" />,
      title: "UI/UX Design",
      description: "Creating beautiful, responsive interfaces with Tailwind CSS."
    },
    {
      icon: <Gauge className="w-8 h-8 text-indigo-500" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency."
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background Elements */}
      <div className="-z-10 fixed inset-0 overflow-hidden">
        <div className="top-0 -left-4 absolute bg-blue-400/30 opacity-70 blur-xl rounded-full w-72 h-72 animate-blob mix-blend-multiply filter" />
        <div className="top-0 -right-4 absolute bg-purple-400/30 opacity-70 blur-xl rounded-full w-72 h-72 animate-blob animation-delay-2000 mix-blend-multiply filter" />
        <div className="-bottom-8 left-20 absolute bg-pink-400/30 opacity-70 blur-xl rounded-full w-72 h-72 animate-blob animation-delay-4000 mix-blend-multiply filter" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 lg:pt-32 overflow-hidden">
        <div className="mx-auto px-4 container">
          <div className="flex lg:flex-row flex-col items-center gap-16">
            {/* Text Content */}
            <div className="flex-1 lg:text-left text-center">
              <div className="inline-block relative">
                <span className="block mb-4 font-semibold text-blue-600 text-sm uppercase tracking-wider">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 font-bold text-transparent text-5xl lg:text-7xl">
                Mbahmukong Destiny
              </h1>
              <p className="mb-8 text-gray-600 text-2xl leading-relaxed">
                Fullstack Developer transforming ideas into exceptional digital experiences
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href={'/contact'}>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg px-8 py-4 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300">
                    Get in Touch
                  </button>
                </Link>
                <Link href={'/projects'}>
                  <button className="hover:bg-blue-50 px-8 py-4 border-2 border-blue-600 rounded-full font-semibold text-blue-600 hover:scale-105 transition-all duration-300">
                    View Projects
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex-1">
              <div className="relative mx-auto w-[400px] h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-[3rem] rotate-6 scale-105 transform" />
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-[3rem] overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="Destiny Mbahmukong"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <section className="py-32">
        <div className="mx-auto px-4 container">
          <h2 className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-20 font-bold text-transparent text-4xl lg:text-5xl text-center">
            Areas of Expertise
          </h2>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/80 hover:shadow-xl backdrop-blur-sm p-8 rounded-2xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 transform">
                  {skill.icon}
                </div>
                <h3 className="mb-4 font-bold text-xl">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="relative py-[40px] overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50" />
        <div className="top-0 -right-48 absolute bg-blue-200/20 blur-3xl rounded-full w-96 h-96" />
        <div className="bottom-0 -left-48 absolute bg-purple-200/20 blur-3xl rounded-full w-96 h-96" />

        <div className="relative mx-auto px-4 container">
          <div className="mb-20 text-center">
            <span className="inline-block bg-blue-100/50 mb-4 px-4 py-2 rounded-full font-semibold text-blue-600 text-sm">
              VISION & OBJECTIVES
            </span>
            <h2 className="bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-bold text-transparent text-4xl lg:text-5xl">
              My Professional Goals
            </h2>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl">
            {/* Goal Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative bg-white/80 shadow-lg hover:shadow-2xl backdrop-blur-sm p-8 border border-blue-100 rounded-2xl transition-all group-hover:translate-x-2 group-hover:-translate-y-2 duration-300">
                <div className="bg-blue-50 mb-6 p-4 rounded-xl w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="group-hover:text-white mb-4 font-bold text-gray-800 text-2xl transition-colors duration-300">
                  Continuous Learning
                </h3>
                <p className="group-hover:text-white/90 text-gray-600 transition-colors duration-300">
                  Committed to mastering emerging technologies and staying ahead in the ever-evolving web development landscape.
                </p>
              </div>
            </div>

            {/* Goal Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative bg-white/80 shadow-lg hover:shadow-2xl backdrop-blur-sm p-8 border border-purple-100 rounded-2xl transition-all group-hover:translate-x-2 group-hover:-translate-y-2 duration-300">
                <div className="bg-purple-50 mb-6 p-4 rounded-xl w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="group-hover:text-white mb-4 font-bold text-gray-800 text-2xl transition-colors duration-300">
                  Quality First
                </h3>
                <p className="group-hover:text-white/90 text-gray-600 transition-colors duration-300">
                  Building exceptional web applications that prioritize user experience and exceed client expectations.
                </p>
              </div>
            </div>

            {/* Goal Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative bg-white/80 shadow-lg hover:shadow-2xl backdrop-blur-sm p-8 border border-pink-100 rounded-2xl transition-all group-hover:translate-x-2 group-hover:-translate-y-2 duration-300">
                <div className="bg-pink-50 mb-6 p-4 rounded-xl w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="group-hover:text-white mb-4 font-bold text-gray-800 text-2xl transition-colors duration-300">
                  Collaboration
                </h3>
                <p className="group-hover:text-white/90 text-gray-600 transition-colors duration-300">
                  Fostering meaningful partnerships and working alongside talented individuals to create innovative solutions.
                </p>
              </div>
            </div>

            {/* Goal Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative bg-white/80 shadow-lg hover:shadow-2xl backdrop-blur-sm p-8 border border-indigo-100 rounded-2xl transition-all group-hover:translate-x-2 group-hover:-translate-y-2 duration-300">
                <div className="bg-indigo-50 mb-6 p-4 rounded-xl w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="group-hover:text-white mb-4 font-bold text-gray-800 text-2xl transition-colors duration-300">
                  Innovation
                </h3>
                <p className="group-hover:text-white/90 text-gray-600 transition-colors duration-300">
                  Pushing the boundaries of web development to create cutting-edge digital experiences that inspire and engage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Connect Section */}
      <section className="py-32">
        <div className="mx-auto px-4 text-center container">
          <h2 className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 font-bold text-transparent text-4xl lg:text-5xl">
            Let's Connect
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-gray-600 text-xl">
            Ready to start your next project? Let's create something amazing together.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: <Facebook className="w-6 h-6" />, href: "https://www.facebook.com/destiny.mbahmukong", color: "text-blue-600" },
              { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/destiny-mbahmukong-a8a98b1b4/", color: "text-blue-700" },
              { icon: <Github className="w-6 h-6" />, href: "#", color: "text-gray-800" },
              { icon: <Youtube className="w-6 h-6" />, href: "https://www.youtube.com/channel/UC9gJ6o436p4yZ3q_h5z6-HA", color: "text-red-600" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className={`p-4 bg-white/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${social.color} hover:scale-110`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}