import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const projectList = portfolioData.projects;

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border-color/60">
      <SectionTitle
        number="04"
        title="Projects"
        subtitle="Sleek, recruiter-oriented cards of backend and full-stack applications showcasing API design, SQL query optimizations, and container setups."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((proj) => (
          <ProjectCard
            key={proj.id}
            title={proj.title}
            date={proj.date}
            description={proj.description}
            highlights={proj.highlights}
            techStack={proj.techStack}
            githubUrl={proj.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
