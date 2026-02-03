import React from 'react';
import { Github, Linkedin, Instagram, Mail, MapPin, Briefcase, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ data, scrollToSection, isVisible }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${data.personal.heroBackground})` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'hero-content-visible' : ''}`}>
        <div className="hero-badge">
          <Briefcase size={16} />
          <span>{data.personal.experience} Experience</span>
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">{data.personal.name}</span>
        </h1>
        
        <p className="hero-role">{data.personal.role}</p>
        <p className="hero-tagline">{data.personal.tagline}</p>
        
        <div className="hero-location">
          <MapPin size={18} />
          <span>{data.personal.location}</span>
        </div>
        
        <div className="hero-actions">
          <Button 
            size="lg" 
            className="hero-btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            <Mail size={20} />
            Contact Me
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="hero-btn-secondary"
            onClick={() => scrollToSection('projects')}
          >
            <ExternalLink size={20} />
            View Projects
          </Button>
        </div>
        
        <div className="hero-social">
          <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={24} />
          </a>
          <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href={data.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
            <Instagram size={24} />
          </a>
        </div>
      </div>
      
      <button className="hero-scroll" onClick={() => scrollToSection('about')}>
        <ChevronDown size={32} className="hero-scroll-icon" />
      </button>
    </section>
  );
};

export default HeroSection;
