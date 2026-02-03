import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ExperienceSection = ({ data }) => {
  return (
    <section id="experience" className="section-container">
      <div className="section-content">
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-divider"></div>
        
        <div className="experience-timeline">
          {data.experience.map((exp) => (
            <Card key={exp.id} className="experience-card">
              <CardContent className="experience-card-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-role">{exp.role}</p>
                    <div className="experience-meta">
                      <span className="experience-duration">{exp.duration}</span>
                      <span className="experience-separator">•</span>
                      <span className="experience-location">{exp.location}</span>
                      {exp.current && <Badge className="experience-badge">Current</Badge>}
                    </div>
                  </div>
                  <Briefcase size={48} className="experience-icon" />
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-responsibilities">
                  <h4 className="responsibilities-title">Key Responsibilities:</h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
