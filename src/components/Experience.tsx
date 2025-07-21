import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Qualcomm',
      location: 'Bangalore, India',
      period: '2024 Oct - Present',
      description: [
        'Designed and built a full-stack self-service portal from scratch, reducing loading time by ~90% and improved action time by ~15% to ~25% and 10% ticket reduction',
      ],
      technologies: ['Python', 'Redis', 'MySQL', 'FastAPI', 'Angular']
    },
    {
      id: 2,
      title: 'Software Developer, Associate',
      company: 'Qualcomm',
      location: 'Bangalore, India',
      period: '2022 June - 2024 Oct',
      description: [
        'Optimized and maintained the Storage Allocation Service, reducing response time by 40%.',
        'Developed key features for a configuration generation tool, reducing manual effort by ~90%.',
        'Gave 4 learning sessions and proposed workflow improvements.'
      ],
      technologies: ['Java', 'Spring Boot', 'JPA', 'Oracle DB', 'React']
    },
    {
      id: 3,
      title: 'Interim Intern',
      company: 'Qualcomm',
      location: 'Bangalore, India',
      period: '2022 Jan - 2022 June',
      description: [
        'Designed a unified view for cloud-enabled paths, improving data access to 1000s of paths.',
      ],
      technologies: ['Java', 'Spring Boot', 'AngularJS', 'JPA/Hibernate', 'Oracle DB']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Work Experience</h2>
          <p>My professional journey</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <div className="company-name">
                      <FaBriefcase />
                      <span>{exp.company}</span>
                    </div>
                    <div className="company-location">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                    <div className="company-period">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-description">
                  <ul>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="timeline-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 