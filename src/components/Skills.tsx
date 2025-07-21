import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 98 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      category: 'Backend Technologies',
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'FastAPI', level: 85 },
        { name: 'ARQ', level: 80 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      category: 'Frontend Technologies',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS/SCSS', level: 95 },
        { name: 'React', level: 80 },
        { name: 'Angular', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      category: 'Databases & ORMs',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'Redis', level: 90 },
        { name: 'SQLAlchemy', level: 85 },
        { name: 'JPA/Hibernate', level: 75 }
      ]
    },
    {
      category: 'Machine Learning and AI',
      skills: [
        { name: 'Deep Neural Networks', level: 50 },
        { name: 'Large Language Models', level: 50 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 65 },
        { name: 'Linux', level: 70 },
        { name: 'Data Structures and Algorithms', level: 90 },
        { name: 'Object Oriented Programming', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies I worked with</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Additional Skills</h3>
          <div className="skills-tags">
            {[
              'WebSockets', 'Microservices', 'Jenkins', 'Factory Pool Pattern', 'Agile',
              'Jira', 'Figma', 'SEO', 'Performance Optimization', 'Message Queues'
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + (index * 0.05) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 