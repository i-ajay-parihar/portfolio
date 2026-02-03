import React from 'react';
import { Code2 } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

  return (
    <nav className="portfolio-nav">
      <div className="nav-content">
        <div className="nav-logo">
          <Code2 className="nav-logo-icon" />
          <span className="nav-logo-text">AP</span>
        </div>
        
        <div className="nav-links">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link ${activeSection === section ? 'nav-link-active' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
