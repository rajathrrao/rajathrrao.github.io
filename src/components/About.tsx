import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const personalInfo = [
    { icon: <FaUser />, label: 'Name', value: 'Rajath R Rao' },
    { icon: <FaGraduationCap />, label: 'Degree', value: 'B.E. in Computer Science and Engineering' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Bangalore, India' },
    { icon: <FaCalendarAlt />, label: 'Experience', value: '3+ Years' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
            I'm a Software Engineer with over 3+ years of experience at Digicert and Qualcomm, where I've developed microservices, full-stack applications, automated systems, and optimized backend services. 
            My passion for technology grew from a curiosity about how things work into a drive to build scalable, user-focused solutions using Java, Python, Spring Boot, Angular, and FastAPI.
            </p>
            
            <p>
            Outside of work, I'm an avid artist who enjoys painting and visual design. 
            I actively contribute to organizational events by creating posters and visuals, blending creativity with technology to enhance engagement and communication within teams.
            </p>

            <p>
            I value continuous learning and community involvement—having solved 900+ LeetCode problems, and published research in deep learning. 
            Recognitions like Qualcomm's Impact and Rookie Maestro awards reflect my commitment to excellence and growth.
            </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Personal Information</h3>
            <div className="info-grid">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 