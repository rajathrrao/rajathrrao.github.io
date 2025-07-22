import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/rajathrrao', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/rajath-r-rao-b0916b1b9/', label: 'LinkedIn' },
    { icon: <TbBrandLeetcode />, url: 'https://leetcode.com/u/RajathRRao', label: 'Leetcode' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Rajath R Rao</h3>
            <p>Software Developer</p>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Rajath R Rao. All rights reserved. Made with{' '}
            <FaHeart className="heart-icon" /> using React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 