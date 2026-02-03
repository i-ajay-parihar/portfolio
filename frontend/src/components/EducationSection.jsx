import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const EducationSection = ({ data }) => {
  return (
    <section id="education" className="section-container">
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        <div className="section-divider"></div>
        
        <div className="education-grid">
          {data.education.map((edu) => (
            <Card key={edu.id} className="education-card">
              <CardContent className="education-card-content">
                <div className="education-icon-container">
                  <GraduationCap size={48} className="education-icon" />
                </div>
                
                <div className="education-details">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-abbreviation">({edu.abbreviation})</p>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-location">{edu.location}</p>
                  
                  <div className="education-footer">
                    <div className="education-cgpa">
                      <Award size={20} />
                      <span>CGPA: <strong>{edu.cgpa}</strong></span>
                    </div>
                    <Badge variant="secondary">{edu.duration}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
