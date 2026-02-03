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
          <Card className="experience-card">
            <CardContent className="experience-card-content">
              <div className="experience-header">
                <div>
                  <h3 className="experience-company">Thoughtwin IT Solutions</h3>
                  <p className="experience-role">Software Developer</p>
                  <div className="experience-meta">
                    <span className="experience-duration">2+ Years</span>
                    <span className="experience-separator">•</span>
                    <span className="experience-location">Neemuch, Madhya Pradesh</span>
                    <Badge className="experience-badge">Current</Badge>
                  </div>
                </div>
                <Briefcase size={48} className="experience-icon" />
              </div>
              
              <p className="experience-description">Working on AI Agent-based projects utilizing cutting-edge technologies</p>
              
              <div className="experience-responsibilities">
                <h4 className="responsibilities-title">Key Responsibilities:</h4>
                <ul className="responsibilities-list">
                  <li>Developing scalable backend systems using Python and microservices architecture</li>
                  <li>Implementing AI Agent systems with MCP server and gRPC communication</li>
                  <li>Working with voice/speech processing using Deepgram</li>
                  <li>Building and maintaining schedulers for automated workflows</li>
                  <li>Designing and optimizing database schemas across PostgreSQL, MongoDB, and Neo4j</li>
                </ul>
              </div>
              
              <div className="experience-technologies">
                <Badge variant="outline" className="tech-badge">Python</Badge>
                <Badge variant="outline" className="tech-badge">FastAPI</Badge>
                <Badge variant="outline" className="tech-badge">gRPC</Badge>
                <Badge variant="outline" className="tech-badge">MCP Server</Badge>
                <Badge variant="outline" className="tech-badge">Deepgram</Badge>
                <Badge variant="outline" className="tech-badge">Microservices</Badge>
                <Badge variant="outline" className="tech-badge">AI Agents</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
