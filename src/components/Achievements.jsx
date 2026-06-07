import React from 'react';
import { FaUsers, FaLaptopCode, FaPuzzlePiece } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const achievements = portfolioData.achievements;
  
  const iconMap = [
    <FaUsers className="h-7 w-7 text-accent" />,
    <FaLaptopCode className="h-7 w-7 text-accent" />,
    <FaPuzzlePiece className="h-7 w-7 text-accent" />
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 border-t border-border-color/60">
      <SectionTitle 
        number="06" 
        title="Achievements" 
        subtitle="Key engineering milestones and analytical benchmarks I've achieved during my training." 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((ach, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden bg-bg-secondary border border-border-color rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-accent/25 transition-all duration-300 group text-left"
          >
            {/* Background glow accent */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300"></div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-bg border border-accent/10">
                {iconMap[index] || <FaPuzzlePiece className="h-7 w-7 text-accent" />}
              </div>
              
              <span className="font-heading text-3xl font-extrabold text-accent font-mono tracking-tight group-hover:scale-105 transition-transform duration-350">
                {ach.metric}
              </span>
            </div>

            <h3 className="font-heading text-base font-bold text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-200">
              {ach.title}
            </h3>
            
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed relative z-10">
              {ach.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
