import React from 'react';

const SkillCard = ({ category, items }) => {
  return (
    <div className="bg-bg-secondary border border-border-color rounded-xl p-5 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 group hover:-translate-y-1">
      <h3 className="font-heading text-base font-bold text-text-primary mb-4 border-b border-border-color pb-2 group-hover:text-accent transition-colors duration-300 flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 inline-block"></span>
        {category}
      </h3>
      <div className="space-y-3">
        {items.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-text-secondary">
              <span className="font-mono text-text-primary">{skill.name}</span>
              <span className="text-accent/80 font-mono">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-border-color/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-full progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
