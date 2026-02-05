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
            <Card className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay">
                  <Badge className="project-status-badge">{project.status}</Badge>
                </div>
              </div>
              <CardContent className="project-card-content">
                <div className="project-header">
                  <h3 className="project-name">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-name-link"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <Badge variant="secondary" className="project-type-badge">
                    {project.type}
                  </Badge>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  <h4 className="project-highlights-title">Highlights:</h4>
                  <ul className="project-highlights-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <Badge variant="outline" className="tech-badge" key={tech}>{tech}</Badge>
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
