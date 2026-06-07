import React from 'react';

const SectionTitle = ({ title, subtitle, number }) => {
  return (
    <div className="mb-12 text-left">
      <div className="flex items-center space-x-3">
        {number && (
          <span className="font-mono text-base font-semibold text-accent">
            {number}.
          </span>
        )}
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-text-primary md:text-3xl">
          {title}
        </h2>
        <div className="h-[1px] flex-grow bg-border-color relative overflow-hidden max-w-xs md:max-w-md">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-accent to-transparent"></div>
        </div>
      </div>
      {subtitle && (
        <p className="font-sans text-sm text-text-secondary max-w-2xl mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
