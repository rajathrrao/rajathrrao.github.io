import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'experience', label: 'Experience' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'achievements', label: 'Achievements' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="home" className="nav-logo" smooth={true} duration={500}>
          <span>RRR</span>
        </Link>
        
        <div className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-mobile ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link-mobile"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 