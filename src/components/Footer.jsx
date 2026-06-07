import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name, email, github, linkedin } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="w-full border-t border-border-color bg-bg-secondary/30 py-8 mt-12 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Name */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer font-heading text-base font-bold text-text-primary tracking-tight"
          >
            Rajesh<span className="text-accent">.Koneru</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a 
              href={`mailto:${email}`}
              className="text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="Email"
            >
              <FaEnvelope className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright details */}
          <div className="text-xs text-text-secondary font-mono">
            &copy; {currentYear} {name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
