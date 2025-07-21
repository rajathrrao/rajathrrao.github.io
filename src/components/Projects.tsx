import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Virtual File Movement',
      description: 'Developed an Online Document Transfer System for secure inter-department document sharing at SJCE. Implemented for seamless file movement and accessibility for 100+ documents per month.',
      image: 'https://img.freepik.com/free-vector/transfer-files-concept-landing-page_52683-24770.jpg?semt=ais_hybrid&w=740',
      technologies: ['Python', 'Flask', 'HTML', 'Bootstrap', 'JS'],
      category: 'fullstack',
      github: 'https://github.com/rajathrrao/vfm',
      live: '',
      featured: false
    },
    {
      id: 2,
      title: 'Restoration of video by removing rain streaks',
      description: 'Designed and trained a hybrid deep learning model to enhance video clarity. Achieved a higher PSNR compared to existing models. Published a research paper in IRJET (Volume 9, Issue 7).',
      image: 'https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg',
      technologies: ['Deep Neural Networks', 'PyTorch', 'OpenCV', 'NumPy'],
      category: 'machinelearning',
      github: '',
      live: 'https://www.irjet.net/archives/V9/i7/IRJET-V9I7198.pdf',
      featured: false
    },
    {
      id: 3,
      title: 'The SJCE Editorial Board Official Website',
      description: 'Created the official website for The SJCE Editorial Board, improving digital presence and social engagement by 3x.',
      image: 'https://img.freepik.com/premium-vector/colorful-web-design-concept-with-flat-design_23-2147944426.jpg',
      technologies: ['Python', 'HTML', 'Bootstrap', 'JS', 'Django', 'Heroku', 'PostgreSQL', 'Cloudinary'],
      category: 'frontend',
      github: 'https://github.com/rajathrrao/EdWebsite',
      live: 'https://editorialboardjssstu.in/',
      featured: false
    },
    {
      id: 4,
      title: 'ID Card Generating and Formatting Software',
      description: 'Created a web-based application for SJCE to automate student ID card generation with formatting options. Generated 4,000+ ID cards annually, fully automating the manual process.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg?semt=ais_hybrid&w=740',
      technologies: ['Python', 'Flask', 'Pillow', 'HTML/CSS', 'JS'],
      category: 'fullstack',
      github: 'https://github.com/Technovation-TI03/Id-card-Organiser',
      live: '',
      featured: false
    },
    {
      id: 5,
      title: 'IMDB Reviews Sentiment Analysis Using Apache Spark Local Cluster',
      description: 'A big data analytics project that predicts sentiment of IMDb movie reviews using PySpark.',
      image: 'https://img.freepik.com/free-vector/statistics-big-data-background_23-2147932980.jpg',
      technologies: ['PySpark', 'Python', 'BeautifulSoup', 'NLTK'],
      category: 'bigdata',
      github: 'https://github.com/rajathrrao/IMDB_Reviews_Sentiment_Analysis_PySpark',
      live: '',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'bigdata', label: 'Big Data' },
    { key: 'machinelearning', label: 'Machine Learning' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Some of my real-world projects</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <FaEye />
                    <span>Featured</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      <FaCode />
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      <FaEye />
                      View
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 