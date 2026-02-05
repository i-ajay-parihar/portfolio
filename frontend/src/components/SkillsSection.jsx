import React from 'react';
import { Code2, Database, Layers } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const SkillsSection = ({ data }) => {
  const icons = [Code2, Database, Layers];
  return (
    <section id="skills" className="section-container section-alt">
      <div className="section-content">
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-divider"></div>
        
        <div className="skills-grid">
          {data.skills.categories.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card className="skill-card" key={category.title}>
                <CardContent className="skill-card-content">
                  <div className="skill-card-header">
                    <Icon size={32} className="skill-icon" />
                    <h3 className="skill-card-title">{category.title}</h3>
                  </div>
                  <ul className="skill-list-text">
                    {category.items.map((item) => (
                      <li className="skill-list-item" key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
