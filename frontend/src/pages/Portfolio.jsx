import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, MapPin, Briefcase, ExternalLink, Code2, Database, Layers, Award, GraduationCap, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { portfolioData } from '../data/mock';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <Code2 className="nav-logo-icon" />
            <span className="nav-logo-text">AP</span>
          </div>
          
          <div className="nav-links">
            {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
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

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background" style={{ backgroundImage: `url(${portfolioData.personal.heroBackground})` }}>
          <div className="hero-overlay"></div>
        </div>
        
        <div className={`hero-content ${isVisible ? 'hero-content-visible' : ''}`}>
          <div className="hero-badge">
            <Briefcase size={16} />
            <span>{portfolioData.personal.experience} Experience</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">{portfolioData.personal.name}</span>
          </h1>
          
          <p className="hero-role">{portfolioData.personal.role}</p>
          <p className="hero-tagline">{portfolioData.personal.tagline}</p>
          
          <div className="hero-location">
            <MapPin size={18} />
            <span>{portfolioData.personal.location}</span>
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
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href={portfolioData.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <button className="hero-scroll" onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} className="hero-scroll-icon" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          
          <div className="about-grid">
            <div className="about-text">
              <p className="about-description">{portfolioData.about.description}</p>
              
              <div className="about-highlights">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <div className="highlight-bullet"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-image">
              <img src={portfolioData.personal.profileImage} alt="Ajay Parihar" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
                  {portfolioData.skills.backend.map((skill) => (
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
                  {portfolioData.skills.databases.map((skill) => (
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
                  {portfolioData.skills.tools.map((skill) => (
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

      {/* Experience Section */}
      <section id="experience" className="section-container">
        <div className="section-content">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider"></div>
          
          <div className="experience-timeline">
            {portfolioData.experience.map((exp) => (
              <Card key={exp.id} className="experience-card">
                <CardContent className="experience-card-content">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-company">{exp.company}</h3>
                      <p className="experience-role">{exp.role}</p>
                      <div className="experience-meta">
                        <span className="experience-duration">{exp.duration}</span>
                        <span className="experience-separator">•</span>
                        <span className="experience-location">{exp.location}</span>
                        {exp.current && <Badge className="experience-badge">Current</Badge>}
                      </div>
                    </div>
                    <Briefcase size={48} className="experience-icon" />
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="experience-responsibilities">
                    <h4 className="responsibilities-title">Key Responsibilities:</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="experience-technologies">
                    {exp.technologies.map((tech) => (
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

      {/* Projects Section */}
      <section id="projects" className="section-container section-alt">
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          
          <div className="projects-grid">
            {portfolioData.projects.map((project) => (
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

      {/* Education Section */}
      <section id="education" className="section-container">
        <div className="section-content">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
          
          <div className="education-grid">
            {portfolioData.education.map((edu) => (
              <Card key={edu.id} className="education-card">
                <CardContent className="education-card-content">
                  <div className="education-icon-container">
                    <GraduationCap size={48} className="education-icon" />
                  </div>
                  
                  <div className="education-details">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-abbreviation">({edu.abbreviation})</p>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-location">{edu.location}</p>
                    
                    <div className="education-footer">
                      <div className="education-cgpa">
                        <Award size={20} />
                        <span>CGPA: <strong>{edu.cgpa}</strong></span>
                      </div>
                      <Badge variant="secondary">{edu.duration}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container section-alt">
        <div className="section-content">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          
          <div className="contact-container">
            <div className="contact-info">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-text">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="contact-methods">
                <a href={`mailto:${portfolioData.personal.email}`} className="contact-method">
                  <Mail size={24} />
                  <span>{portfolioData.personal.email}</span>
                </a>
                
                <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="contact-method">
                  <Github size={24} />
                  <span>GitHub Profile</span>
                </a>
                
                <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                  <Linkedin size={24} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
            
            <Card className="contact-form-card">
              <CardContent className="contact-form-content">
                <form className="contact-form" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Contact form submission will be available when backend is integrated!');
                }}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="contact-submit-btn">
                    <Mail size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 {portfolioData.personal.name}. Built with React & FastAPI.
          </p>
          
          <div className="footer-social">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Github size={20} />
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Linkedin size={20} />
            </a>
            <a href={portfolioData.social.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
