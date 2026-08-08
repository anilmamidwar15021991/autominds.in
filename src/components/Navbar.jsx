import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import gsap from 'gsap';
import mainLogo from '../logo_main.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <header className="fixed-top py-3 px-3 px-md-4 z-3" ref={navRef}>
      <div className="container">
        <div className="glass-nav d-flex align-items-center justify-content-between">
          
          {/* Logo */}
          <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none" onClick={closeMenu}>
            <img 
              src={mainLogo} 
              alt="Autominds Academy Logo" 
              style={{ height: '50px', objectFit: 'contain' }} 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="d-none d-lg-flex align-items-center gap-1">
            <NavLink to="/" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/courses" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`}>
              Course
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`}>
              Contact us
            </NavLink>
          </nav>

         

          {/* Mobile Menu Toggler */}
          <button 
            className="btn d-lg-none text-white p-1 border-0" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-grid-fill'} fs-4`}></i>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="d-lg-none mt-2 glass-panel p-4 rounded-4 animate-fade-in shadow-lg">
            <div className="d-flex flex-column gap-2 mb-3">
              <NavLink to="/" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`} onClick={closeMenu} end>
                <i className="bi bi-house-door me-2"></i> Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <i className="bi bi-info-circle me-2"></i> About
              </NavLink>
              <NavLink to="/courses" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <i className="bi bi-journal-code me-2"></i> Course
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <i className="bi bi-newspaper me-2"></i> Blog
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <i className="bi bi-envelope me-2"></i> Contact us
              </NavLink>
            </div>
            
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
