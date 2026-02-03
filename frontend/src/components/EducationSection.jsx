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
          <Card className="education-card">
            <CardContent className="education-card-content">
              <div className="education-icon-container">
                <GraduationCap size={48} className="education-icon" />
              </div>
              
              <div className="education-details">
                <h3 className="education-degree">Master of Computer Applications</h3>
                <p className="education-abbreviation">(MCA)</p>
                <p className="education-institution">Gyanodaya Institute of Professional Studies</p>
                <p className="education-location">Neemuch</p>
                
                <div className="education-footer">
                  <div className="education-cgpa">
                    <Award size={20} />
                    <span>CGPA: <strong>8.3</strong></span>
                  </div>
                  <Badge variant="secondary">Completed</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
