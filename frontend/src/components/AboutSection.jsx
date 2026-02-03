import React from 'react';

const AboutSection = ({ data }) => {
  return (
    <section id="about" className="section-container">
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        
        <div className="about-grid">
          <div className="about-text">
            <p className="about-description">{data.about.description}</p>
            
            <div className="about-highlights">
              {data.about.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-bullet"></div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <img src={data.personal.profileImage} alt={data.personal.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
