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
                {data.skills.backend.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
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
                {data.skills.databases.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
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
                {data.skills.tools.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="skill-badge">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
