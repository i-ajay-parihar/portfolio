import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 {data.personal.name}. Built with React & FastAPI.
        </p>
        
        <div className="footer-social">
          <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <Github size={20} />
          </a>
          <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <Linkedin size={20} />
          </a>
          <a href={data.social.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
