import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';
import { TbBrandLeetcode } from 'react-icons/tb';

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
    
  //   setTimeout(() => {
  //     alert('Thank you for your message! I will get back to you soon.');
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //     setIsSubmitting(false);
  //   }, 2000);
  // };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'rajath642000@gmail.com',
      link: 'mailto:rajath642000@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9739788901',
      link: 'tel:+919739788901'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bangalore, India',
      link: 'https://maps.app.goo.gl/YRUW6RWbkwfDis1V9'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/rajath-r-rao-b0916b1b9/', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/rajathrrao', label: 'GitHub' },
    { icon: <TbBrandLeetcode />, url: 'https://leetcode.com/u/RajathRRao', label: 'Leetcode' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p></p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities.</p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link} target='_blank'>{info.value}</a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact; 