import React from 'react';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const categories = portfolioData.skills;

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border-color/60">
      <SectionTitle 
        number="02" 
        title="Technical Skills" 
        subtitle="My proficiency levels across backend systems, databases, programming paradigms, and web frontend tools." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <SkillCard 
            key={index}
            category={cat.category}
            items={cat.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
