import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ContactSection = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contact form submission will be available when backend is integrated!');
  };

  return (
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
              <a href={`mailto:${data.personal.email}`} className="contact-method">
                <Mail size={24} />
                <span>{data.personal.email}</span>
              </a>
              
              <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="contact-method">
                <Github size={24} />
                <span>GitHub Profile</span>
              </a>
              
              <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                <Linkedin size={24} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
          
          <Card className="contact-form-card">
            <CardContent className="contact-form-content">
              <form className="contact-form" onSubmit={handleSubmit}>
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
  );
};

export default ContactSection;
