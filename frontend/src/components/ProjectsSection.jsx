import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ProjectsSection = ({ data }) => {
  return (
    <section id="projects" className="section-container section-alt">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider"></div>
        
        <div className="projects-grid">
          <Card className="project-card">
            <div className="project-image-container">
              <img src="https://images.unsplash.com/photo-1725800066480-7ccf189e9513?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxjb2RpbmclMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNzcwMTQ0ODIzfDA&ixlib=rb-4.1.0&q=85" alt="Pidhi" className="project-image" />
              <div className="project-overlay">
                <Badge className="project-status-badge">In Development</Badge>
              </div>
            </div>
            <CardContent className="project-card-content">
              <div className="project-header">
                <h3 className="project-name">Pidhi</h3>
                <Badge variant="secondary">Personal Project</Badge>
              </div>
              
              <p className="project-description">A passion project being developed from scratch with a focus on backend architecture, scalability, and clean design principles.</p>
              
              <div className="project-highlights">
                <h4 className="project-highlights-title">Highlights:</h4>
                <ul className="project-highlights-list">
                  <li>Built entirely from the ground up</li>
                  <li>Emphasis on scalable architecture patterns</li>
                  <li>Clean code and design principles</li>
                  <li>Modern backend technologies</li>
                </ul>
              </div>
              
              <div className="project-technologies">
                <Badge variant="outline" className="tech-badge">Python</Badge>
                <Badge variant="outline" className="tech-badge">Backend Architecture</Badge>
                <Badge variant="outline" className="tech-badge">Scalable Systems</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
