import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaChevronDown } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, headline, subHeadline, email, linkedin, github, summary, resumeUrl } = portfolioData.personalInfo;
  const roles = portfolioData.roles;

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === currentRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentRole.substring(0, currentText.length - 1)
            : currentRole.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  const handleScrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // Navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 md:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        {/* Left Column: Headline and CTAs */}
        <div className="space-y-6 text-left lg:col-span-7">
          <div className="inline-flex items-center space-x-2 rounded-full bg-accent-bg px-3 py-1 text-xs font-semibold text-accent border border-accent/10">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Available for Internships (Graduating 2027)</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
              Hi, I'm <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">{name}</span>
            </h1>
            
            {/* Animated Typing Text */}
            <div className="h-8 md:h-10 flex items-center">
              <p className="font-mono text-lg font-semibold text-text-primary md:text-xl">
                Aspiring <span className="text-accent typing-caret pr-1">{currentText}</span>
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">
            {summary}
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-lg border border-border-color p-2.5 text-text-secondary hover:bg-accent-bg hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-lg border border-border-color p-2.5 text-text-secondary hover:bg-accent-bg hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${email}`} 
              className="rounded-lg border border-border-color p-2.5 text-text-secondary hover:bg-accent-bg hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-pointer"
              aria-label="Email Me"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => handleScrollToSection('projects')}
              className="flex items-center justify-center rounded-lg bg-accent py-3 px-6 text-sm font-semibold text-white hover:bg-accent-hover shadow-md hover:shadow-lg hover:shadow-accent/15 transition-all duration-200 cursor-pointer text-center"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="flex items-center justify-center rounded-lg bg-bg-secondary border border-border-color py-3 px-6 text-sm font-semibold text-text-primary hover:bg-accent-bg hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-pointer text-center"
            >
              Contact Me
            </button>
            <a
              href={resumeUrl}
              download="Rajesh_Resume_1.pdf"
              className="flex items-center justify-center space-x-2 rounded-lg bg-bg-primary border border-border-color py-3 px-6 text-sm font-semibold text-text-secondary hover:bg-accent-bg hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-pointer text-center"
            >
              <FaFileDownload className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Inline SVG Terminal */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-bg-secondary rounded-2xl p-1 border border-border-color shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <svg viewBox="0 0 500 390" className="w-full h-auto text-accent">
              {/* Window Header Frame */}
              <rect x="0" y="0" width="500" height="40" fill="var(--bg-secondary)" />
              {/* Window Buttons */}
              <circle cx="25" cy="20" r="5" fill="#ef4444" />
              <circle cx="41" cy="20" r="5" fill="#f59e0b" />
              <circle cx="57" cy="20" r="5" fill="#10b981" />
              {/* Header Title */}
              <text x="250" y="24" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)" textAnchor="middle">rajesh_koneru_terminal.sh</text>
              
              {/* Inner Area */}
              <rect x="10" y="45" width="480" height="335" rx="8" fill="var(--bg-primary)" />
              
              {/* Logs */}
              <text x="30" y="80" fontFamily="monospace" fontSize="13" fill="var(--text-secondary)">$ whoami</text>
              <text x="30" y="105" fontFamily="monospace" fontSize="14" fill="var(--text-primary)" fontWeight="bold">rajesh-koneru-ece-2027</text>
              
              <text x="30" y="140" fontFamily="monospace" fontSize="13" fill="var(--text-secondary)">$ cat info.json</text>
              <text x="30" y="165" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)">{"{"}</text>
              
              <text x="50" y="185" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)">"education": <tspan fill="var(--text-primary)">"B.Tech (ECE)"</tspan>,</text>
              <text x="50" y="205" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)">"gpa": <tspan fill="var(--text-primary)">"8.3 CGPA"</tspan>,</text>
              <text x="50" y="225" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)">"role": <tspan fill="var(--accent)">"Backend Developer"</tspan>,</text>
              
              <text x="50" y="245" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)">"skills": [</text>
              <text x="70" y="265" fontFamily="monospace" fontSize="11" fill="var(--text-primary)">"Java", "Spring Boot", "Python",</text>
              <text x="70" y="285" fontFamily="monospace" fontSize="11" fill="var(--text-primary)">"Flask", "Django", "SQL", "React"</text>
              <text x="50" y="305" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)">],</text>
              
              <text x="50" y="325" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)">"status": <tspan fill="#10b981">"Seeking Internships"</tspan></text>
              
              <text x="30" y="345" fontFamily="monospace" fontSize="11" fill="var(--text-secondary)">{"}"}</text>
              
              {/* Bottom blinking terminal input */}
              <text x="30" y="370" fontFamily="monospace" fontSize="13" fill="var(--accent)">$ <tspan fill="var(--text-primary)" className="animate-pulse">_</tspan></text>
            </svg>
          </div>
        </div>
      </div>

      {/* Down arrow link to scroll to next section */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
        <button
          onClick={() => handleScrollToSection('about')}
          className="flex flex-col items-center justify-center space-y-1.5 text-text-secondary hover:text-accent transition-colors duration-250 cursor-pointer"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Learn More</span>
          <FaChevronDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
