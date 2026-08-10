import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../logo_main.webp';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3">
              <img 
                src={mainLogo} 
                alt="Autominds Academy Logo" 
                style={{ height: '42px', objectFit: 'contain' }} 
              />
            </Link>
            <p className="  small pe-lg-4 mb-4">
              Empowering engineers and business innovators with real-world AI skills, autonomous workflow design, and hands-on LLM mastery.
            </p>
            <div className="d-flex gap-3 mb-3">
            
              <a href="#twitter" className="btn btn-sm btn-glass rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                <i className="bi bi-twitter-x text-white"></i>
              </a>
              <a href="#github" className="btn btn-sm btn-glass rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                <i className="bi bi-github text-white"></i>
              </a>
              <a href="#linkedin" className="btn btn-sm btn-glass rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                <i className="bi bi-linkedin text-white"></i>
              </a>
              <a href="#youtube" className="btn btn-sm btn-glass rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
                <i className="bi bi-youtube text-white"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold mb-3 font-heading">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="  text-decoration-none hover-white">Home</Link></li>
              <li><Link to="/about" className="  text-decoration-none hover-white">About Us</Link></li>
              <li><Link to="/agentic-ai" className="  text-decoration-none hover-white">Course Catalog</Link></li>
              <li><Link to="/blog" className="  text-decoration-none hover-white">AI Blog</Link></li>
              <li><Link to="/contact" className="  text-decoration-none hover-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-3 font-heading">Popular Courses</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small  ">
              <li>Autonomous AI Agents Bootcamp</li>
              <li>Generative AI & LLM Systems</li>
              <li>Prompt Engineering Mastery</li>
              <li>AI-First Enterprise Workflows</li>
              <li>Computer Vision for Robotics</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-3 font-heading">Newsletter</h6>
            <p className="  small mb-3">Get weekly AI prompt hacks and course updates right in your inbox.</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-bg-dark form-control bg-dark border-secondary text-white small rounded-start-pill ps-3" 
                placeholder="Enter your email" 
              />
              <button className="btn btn-lime rounded-end-pill px-3" type="button">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-top border-secondary d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="  small mb-0">
            &copy; {new Date().getFullYear()} Autominds Academy. All rights reserved.
          </p>
          <div className="d-flex gap-4 small  ">
            <a href="#privacy" className="  text-decoration-none">Privacy Policy</a>
            <a href="#terms" className="  text-decoration-none">Terms of Service</a>
            <a href="#security" className="  text-decoration-none">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
