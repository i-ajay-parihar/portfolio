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
          {data.projects.map((project) => (
            <Card key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay">
                  <Badge className="project-status-badge">{project.status}</Badge>
                </div>
              </div>
              <CardContent className="project-card-content">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <Badge variant="secondary">{project.type}</Badge>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  <h4 className="project-highlights-title">Highlights:</h4>
                  <ul className="project-highlights-list">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
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

export default ProjectsSection;
