import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaCode, FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaPython, FaCube } from 'react-icons/fa';
import { SiCodeigniter, SiKotlin, SiTypescript, SiBlender } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import ModelViewer from '../components/ModelViewer/ModelViewer';

import './AboutMe.css';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`scroll-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

const AboutMe = () => {
  const [view, setView] = useState('intro');
  const quickMartImages = [
    '/assets/images/Productpage.png',
    '/assets/images/AllProducts.png',
    '/assets/images/Categories.png',
    '/assets/images/Footer.png',
    '/assets/images/Homepage.png',
    '/assets/images/NavbarUi.png',
  ];

  const foodAppImages = [
    '/assets/project3/mobilemain.png',
    '/assets/project3/mobilemenu.png',
    '/assets/project3/mobilerestaurants.png',
  ];

  const mangaAppImages = [
    '/assets/project4/main.png',
    '/assets/project4/terminal.png',
  ];

  return (
    <div className="about-me-container">
      <div className="about-me-intro">
        <div className="about-me-header">
          <h1>Hi, I'm Nacht</h1>
          <h2>A Passionate Developer Building Digital Experiences</h2>
          <p className="about-me-summary">
            I specialize in creating modern, responsive, and user-friendly web
            applications. With a strong foundation in front-end and back-end
            technologies, I enjoy turning complex problems into elegant, interactive
            solutions.
          </p>
          <div className="action-buttons">
            <button onClick={() => setView('projects')} className="action-btn">Explore Projects</button>
            <button onClick={() => setView('skills')} className="action-btn">View Skills</button>
          </div>
        </div>
        <div className="profile-section">
          <img src="/assets/avatar.png" alt="Nacht Avatar" className="profile-picture" />
          <div className="social-links">
            <a href="https://github.com/nashvel" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
          <div className="art-container">
            <pre className="ascii-art">
              {`
                    -@                
                   .##@               
                  .####@              
                  @#####@             
                . *######@            
               .##@o@#####@           
              /############@          
             /##############@         
            @######@**%######@        
           @######\`     %#####o       
          @######@       ######%      
        -@#######h       ######@.\`    
       /#####h**\`\`       \`**%@####@   
      @H@*\`                    \`*%#@  
     *\`                            \`* 
              `}
            </pre>
            <img src="/assets/hyprland.png" alt="Hyprland Logo" className="hyprland-logo" />
          </div>
        </div>
      </div>

      <div className="about-me-content">
        {view === 'intro' && (
          <div className="intro-content">
            {/* The intro view is now empty by default, content is shown via buttons */}
          </div>
        )}

        {view === 'projects' && (
          <AnimatedSection>
            <button onClick={() => setView('intro')} className="back-btn">← Back</button>
            <h3>My Projects</h3>
            <div className="projects-grid">
              <div className="project-card quickmart-card">
                <h4>QuickMart</h4>
                <ImageCarousel images={quickMartImages} />
                <p>A sleek, responsive e-commerce front-end for a modern online store, built with React.</p>
                <div className="project-links">
                  <a href="https://github.com/arbaazv/QuickMart" target="_blank" rel="noopener noreferrer">Source <FaGithub /></a>
                </div>
                <div className="project-tags">
                  <span><FaReact /> React</span>
                  <span><SiCodeigniter /> CodeIgniter</span>
                </div>
              </div>
              <div className="project-card model-card">
                <h4>Computer Terminal 3D</h4>
                <div className="model-wrapper">
                  <ModelViewer />
                </div>
                <p>An interactive 3D model of a vintage computer terminal, built with React Three Fiber.</p>
                <div className="project-tags">
                  <span><FaReact /> React Three Fiber</span>
                  <span><SiBlender /> Blender</span>
                </div>
              </div>
              <div className="project-card quickmart-card">
                <h4>Multi-Cuisine Food Delivery</h4>
                <ImageCarousel images={foodAppImages} />
                <p>A feature-rich mobile app for browsing restaurants and ordering food, built with React Native.</p>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo <FaExternalLinkAlt /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Source <FaGithub /></a>
                </div>
                <div className="project-tags">
                  <span><FaReact /> React Native</span>
                  <span><SiCodeigniter /> CodeIgniter</span>
                </div>
              </div>
              <div className="project-card">
                <h4>Nashiyomi Hehe</h4>
                <ImageCarousel images={mangaAppImages} />
                <p>A native manga reader application for Android, built with Kotlin.</p>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo <FaExternalLinkAlt /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Source <FaGithub /></a>
                </div>
                <div className="project-tags">
                  <span><SiKotlin /> Kotlin</span>
                  <span>XML</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {view === 'skills' && (
          <AnimatedSection>
            <button onClick={() => setView('intro')} className="back-btn">← Back</button>
            <h3>Skills & Expertise</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <ul>
                  <li><FaPython style={{ color: '#3776AB' }} /> Python</li>
                  <li><SiTypescript style={{ color: '#3178C6' }} /> TypeScript</li>
                  <li><FaHtml5 style={{ color: '#E34F26' }} /> HTML</li>
                  <li><FaCss3Alt style={{ color: '#1572B6' }} /> CSS</li>
                  <li><SiKotlin style={{ color: '#7F52FF' }} /> Kotlin</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <ul>
                  <li><FaReact style={{ color: '#61DAFB' }} /> React</li>
                  <li><FaLaravel style={{ color: '#FF2D20' }} /> Laravel</li>
                  <li><SiCodeigniter style={{ color: '#EF4223' }} /> CodeIgniter</li>
                  <li><FaCode /> Express</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Tools & Technologies</h4>
                <ul>
                  <li><FaGithub style={{ color: '#FFFFFF' }} /> Git & GitHub</li>
                  <li><FaCube style={{ color: '#2496ED' }} /> Docker</li>
                  <li><SiBlender style={{ color: '#F5792A' }} /> Blender</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};


export default AboutMe;
