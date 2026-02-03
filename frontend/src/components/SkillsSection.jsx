import React from 'react';
import { Code2, Database, Layers } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const SkillsSection = ({ data }) => {
  return (
    <section id="skills" className="section-container section-alt">
      <div className="section-content">
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-divider"></div>
        
        <div className="skills-grid">
          <Card className="skill-card">
            <CardContent className="skill-card-content">
              <div className="skill-card-header">
                <Code2 size={32} className="skill-icon" />
                <h3 className="skill-card-title">Backend</h3>
              </div>
              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">Python</span>
                    <span className="skill-level">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">Django</span>
                    <span className="skill-level">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">Flask</span>
                    <span className="skill-level">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">FastAPI</span>
                    <span className="skill-level">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardContent className="skill-card-content">
              <div className="skill-card-header">
                <Database size={32} className="skill-icon" />
                <h3 className="skill-card-title">Databases</h3>
              </div>
              <div className="skill-list">
                <div className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">PostgreSQL</span>
                    <span className="skill-level">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">MongoDB</span>
                    <span className="skill-level">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-name">Neo4j</span>
                    <span className="skill-level">75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="skill-card">
            <CardContent className="skill-card-content">
              <div className="skill-card-header">
                <Layers size={32} className="skill-icon" />
                <h3 className="skill-card-title">Tools & Technologies</h3>
              </div>
              <div className="skill-badges">
                <Badge variant="secondary" className="skill-badge">Microservices</Badge>
                <Badge variant="secondary" className="skill-badge">gRPC</Badge>
                <Badge variant="secondary" className="skill-badge">MCP Server</Badge>
                <Badge variant="secondary" className="skill-badge">Schedulers</Badge>
                <Badge variant="secondary" className="skill-badge">AI Agents</Badge>
                <Badge variant="secondary" className="skill-badge">Deepgram</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
