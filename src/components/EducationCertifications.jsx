import React from 'react';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaAward } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { portfolioData } from '../data/portfolioData';

const EducationCertifications = () => {
  const { degree, institute, duration, cgpa } = portfolioData.education;
  const certs = portfolioData.certifications;

  return (
    <section id="education" className="py-16 md:py-24 border-t border-border-color/60">
      <SectionTitle 
        number="05" 
        title="Education & Certifications" 
        subtitle="My academic foundation in engineering and specialized certifications in full-stack and software development." 
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Education column */}
        <div className="md:col-span-6 space-y-4">
          <h3 className="font-heading text-lg font-bold text-text-primary flex items-center mb-6">
            <FaGraduationCap className="h-5 w-5 mr-2 text-accent" />
            Education
          </h3>

          <div className="bg-bg-secondary border border-border-color rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-xs font-semibold text-accent bg-accent-bg px-2.5 py-0.5 rounded border border-accent/10">
                B.Tech (ECE)
              </span>
              <span className="flex items-center space-x-1 font-mono text-xs text-text-secondary">
                <FaCalendarAlt className="h-3 w-3 text-accent/70" />
                <span>{duration}</span>
              </span>
            </div>

            <h4 className="font-heading text-base font-bold text-text-primary mt-3 leading-snug">
              {degree}
            </h4>
            <p className="text-sm text-text-secondary mt-1">
              {institute}
            </p>

            <div className="h-[1px] bg-border-color my-4"></div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Performance Metric</span>
              <span className="font-mono font-bold text-text-primary bg-bg-primary border border-border-color px-3 py-1 rounded-lg">
                {cgpa}
              </span>
            </div>
          </div>
        </div>

        {/* Certifications column */}
        <div className="md:col-span-6 space-y-4">
          <h3 className="font-heading text-lg font-bold text-text-primary flex items-center mb-6">
            <FaCertificate className="h-5 w-5 mr-2 text-accent" />
            Certifications
          </h3>

          <div className="space-y-3">
            {certs.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 bg-bg-secondary border border-border-color rounded-xl p-4 shadow-sm hover:shadow-md hover:border-accent/15 transition-all duration-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg border border-accent/10">
                  <FaAward className="h-5 w-5 text-accent" />
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-heading text-sm font-bold text-text-primary leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {cert.issuer} • <span className="font-mono">{cert.date}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
