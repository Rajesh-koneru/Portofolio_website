import React from 'react';
import { FaServer, FaLaptopCode, FaBrain, FaUsers } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { summary } = portfolioData.personalInfo;

  const highlights = [
    {
      icon: <FaServer className="h-6 w-6 text-accent" />,
      title: "Backend Architecture",
      description: "Developing robust API endpoints, secure auth, and databases using Spring Boot, Flask, and Django."
    },
    {
      icon: <FaLaptopCode className="h-6 w-6 text-accent" />,
      title: "Full-Stack Capability",
      description: "Bridging solid backend layers with modern React interfaces for streamlined user experiences."
    },
    {
      icon: <FaBrain className="h-6 w-6 text-accent" />,
      title: "Algorithmic Focus",
      description: "Applying strong OOP principles, DBMS, and algorithms to build clean, maintainable systems."
    },
    {
      icon: <FaUsers className="h-6 w-6 text-accent" />,
      title: "Mentorship & Collaboration",
      description: "Mentored 20+ students in React and API concepts, conducting reviews and pair programming."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-border-color/60">
      <SectionTitle 
        number="01" 
        title="About Me" 
        subtitle="Learn about my background, software engineering journey, and technical focus." 
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* Bio text */}
        <div className="space-y-6 lg:col-span-6 text-left">
          <h3 className="font-heading text-xl font-bold text-text-primary">
            Engineering robust systems, one service at a time.
          </h3>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            {summary}
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            Coming from an **Electronics & Communication Engineering (ECE)** background, I approach software construction with an analytical, hardware-software integration mindset. I enjoy understanding the entire stack—from high-level React UI logic down to optimized query plan execution in MySQL and resource scheduling in Docker containers.
          </p>
          <div className="p-4 rounded-xl border border-border-color bg-bg-secondary/40">
            <h4 className="font-heading text-sm font-bold text-text-primary mb-1">
              Core Strengths
            </h4>
            <p className="text-xs text-text-secondary">
              RESTful API Engineering • Relational Database Design • Docker Containers • Problem Solving & DSA • Peer Mentorship & Code Reviews
            </p>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-6">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="bg-bg-secondary border border-border-color rounded-xl p-5 shadow-sm hover:shadow-md hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300 text-left"
            >
              <div className="mb-3.5 inline-flex items-center justify-center p-2 rounded-lg bg-accent-bg border border-accent/10">
                {item.icon}
              </div>
              <h4 className="font-heading text-sm font-bold text-text-primary mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
