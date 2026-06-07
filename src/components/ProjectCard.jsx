import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, date, description, highlights, techStack, githubUrl, liveUrl }) => {
  return (
    <div className="flex flex-col h-full bg-bg-secondary border border-border-color rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-accent/25 hover:-translate-y-1 transition-all duration-300">
      {/* Accent Top Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-accent/50 to-accent"></div>

      <div className="flex flex-col flex-grow p-6">
        {/* Title and Date */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-heading text-lg font-bold text-text-primary hover:text-accent transition-colors duration-250">
            {title}
          </h3>
          <span className="font-mono text-xs text-text-secondary bg-bg-primary px-2.5 py-1 rounded border border-border-color shrink-0 ml-2">
            {date}
          </span>
        </div>

        {/* Short Description */}
        <p className="font-sans text-sm text-text-secondary mb-4 leading-relaxed">
          {description}
        </p>

        {/* Highlights List */}
        <div className="mb-6 flex-grow">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">Key Highlights:</h4>
          <ul className="space-y-1.5">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start text-xs text-text-secondary leading-relaxed">
                <span className="text-accent mr-2 mt-1 select-none font-bold">›</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="font-mono text-[10px] font-medium text-accent bg-accent-bg px-2 py-0.5 rounded border border-accent/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-border-color/60">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow flex items-center justify-center space-x-2 rounded-lg bg-bg-primary border border-border-color py-2 px-3 text-xs font-semibold text-text-primary hover:bg-accent-bg hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-pointer"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
