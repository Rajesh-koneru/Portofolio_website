import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaFileDownload } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Navbar = ({ darkTheme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Achievements', target: 'achievements' },
    { label: 'Contact', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      
      // Special case: if scrolled to the bottom of the page, set active to 'contact'
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const item of navItems) {
        const el = document.getElementById(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (targetId) => {
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-color bg-bg-secondary/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Title */}
          <div 
            className="flex flex-shrink-0 cursor-pointer items-center" 
            onClick={() => handleScrollToSection('home')}
          >
            <span className="font-heading text-xl font-bold tracking-tight text-text-primary">
              Rajesh<span className="text-accent">.Koneru</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleScrollToSection(item.target)}
                  className={`nav-link text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    activeSection === item.target
                      ? 'text-accent active font-semibold'
                      : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Resume Download (Desktop) */}
            <a
              href={portfolioData.personalInfo.resumeUrl}
              download="Rajesh_Resume_1.pdf"
              className="border border-accent/40 text-accent hover:bg-accent-bg hover:text-accent font-semibold px-3 py-1.5 rounded-lg text-xs transition-all duration-200 cursor-pointer flex items-center gap-1.5 ml-2 shrink-0"
            >
              <FaFileDownload className="h-3 w-3" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle (Desktop) */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-text-secondary hover:bg-accent-bg hover:text-accent focus:outline-none cursor-pointer transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {darkTheme ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-text-secondary hover:bg-accent-bg hover:text-accent focus:outline-none cursor-pointer transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {darkTheme ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-accent-bg hover:text-accent focus:outline-none cursor-pointer transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border-color bg-bg-secondary ${
          isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleScrollToSection(item.target)}
              className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors cursor-pointer ${
                activeSection === item.target
                  ? 'bg-accent-bg text-accent font-semibold'
                  : 'text-text-secondary hover:bg-accent-bg hover:text-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-[1px] bg-border-color/60 my-2 mx-3"></div>
          <a
            href={portfolioData.personalInfo.resumeUrl}
            download="Rajesh_Resume_1.pdf"
            className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-semibold text-accent hover:bg-accent-bg cursor-pointer"
          >
            <FaFileDownload className="h-4 w-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
