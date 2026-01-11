import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';
import { TbBrandLeetcode } from 'react-icons/tb';
import RRR from '../assets/RRR.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Rajath R Rao</span>
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer
          </motion.h2>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Skilled Software Engineer with 3+ years of experience at Digicert and Qualcomm. 
            Experienced in microservices, full-stack development, system optimization, and automation. 
            Proficient in Python, Java, Angular, and Spring Boot. 
            Known for delivering impactful solutions and recognized with multiple awards for excellence.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn btn-primary">View My Work</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn btn-secondary">Get In Touch</button>
            </Link>
          </motion.div>
          
          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://github.com/rajathrrao" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/rajath-r-rao-b0916b1b9/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:rajath642000@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
            <a href="https://leetcode.com/u/RajathRRao" className="social-link">
              <TbBrandLeetcode />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-placeholder">
            <div className="profile-circle">
              {/* <span>RRR</span> */}
              <img src={RRR} alt="RRR" />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Link to="about" smooth={true} duration={500}>
          <div className="scroll-arrow"></div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero; 