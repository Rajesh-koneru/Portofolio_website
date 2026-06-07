import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border-color/60">
      <SectionTitle 
        number="03" 
        title="Experience" 
        subtitle="My professional developer internship history, emphasizing backend tasks, team collaboration, and mentor roles." 
      />

      <div className="max-w-3xl mx-auto text-left">
        {/* Timeline wrapper */}
        <div className="relative border-l border-border-color pl-6 ml-3 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg-primary border-2 border-accent group-hover:bg-accent group-hover:scale-110 transition-all duration-300"></div>

              {/* Experience Card */}
              <div className="bg-bg-secondary border border-border-color rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-250">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm font-semibold text-text-secondary mt-0.5">
                      <span className="text-text-primary">{exp.company}</span>
                    </div>
                  </div>
                  
                  {/* Meta items */}
                  <div className="flex flex-wrap gap-3 text-xs text-text-secondary font-mono">
                    <span className="flex items-center space-x-1">
                      <FaCalendarAlt className="h-3 w-3 text-accent/70" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaMapMarkerAlt className="h-3 w-3 text-accent/70" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-border-color/60 my-3.5"></div>

                {/* Highlights list */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-text-secondary leading-relaxed">
                      <span className="text-accent font-bold mr-2 mt-0.5 select-none">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
