import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaAward, FaStar, FaUserEdit } from 'react-icons/fa';
import './Achievements.css';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: 'Rookie Maestro Award 2023',
      organization: 'Qualcomm',
      description: 'Annual award for the best new hire at Qualcomm OneIT GCC India.',
      icon: <FaTrophy />,
      year: '2023',
      category: 'award'
    },
    {
      id: 2,
      title: 'QImpact Award 2025 H1',
      organization: 'Qualcomm',
      description: 'Awarded for taking up ownership of a project and creating high impact.',
      icon: <FaAward />,
      year: '2025',
      category: 'award'
    },
    {
      id: 3,
      title: 'QSparkler Award 2024 H1',
      organization: 'Qualcomm',
      description: 'Awarded for actively delivering features on time and with high quality.',
      icon: <FaAward />,
      year: '2024',
      category: 'award'
    },
    {
      id: 4,
      title: 'Art Chief',
      organization: 'The SJCE Editorial Board',
      description: 'Art Chief of the Editorial Board at college responsible for designing the college magazine.',
      icon: <FaUserEdit />,
      year: '2021-2022',
      category: 'responsibility'
    },
    {
      id: 5,
      title: '347th Rank',
      organization: 'KCET',
      description: 'Secured good rank in Karnataka CET 2018.',
      icon: <FaStar />,
      year: '2018',
      category: 'competition'
    },
    {
      id: 6,
      title: '800+ problems solved on Leetcode',
      organization: 'Leetcode',
      description: 'Solved 800+ problems and has a streak of 300+ days on Leetcode with contest rating of 1900+.',
      icon: <FaStar />,
      year: '',
      category: 'competition'
    }
  ];

  const stats = [
    { number: '3', label: 'Awards Won' },
    { number: '8+', label: 'Projects Delivered' },
    { number: '800+', label: 'Problems Solved on Leetcode' }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Achievements & Awards</h2>
          <p>Recognition for my work and contributions</p>
        </motion.div>

        <motion.div
          className="achievements-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`achievement-card ${achievement.category}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <p className="achievement-organization">{achievement.organization}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="achievements-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Looking to hire a software developement engineer?</h3>
          <p>Let's talk about how I can use my skills to help solve complex problems.</p>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 