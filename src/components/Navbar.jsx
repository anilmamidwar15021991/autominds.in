import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import gsap from 'gsap';
import mainLogo from '../logo_main.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isMobileCourseOpen, setIsMobileCourseOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsCourseDropdownOpen(false);
    setIsMobileCourseOpen(false);
  };

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
            
            {/* Course Sub-Nav Dropdown */}
            <div 
              className="position-relative py-2"
              onMouseEnter={() => setIsCourseDropdownOpen(true)}
              onMouseLeave={() => setIsCourseDropdownOpen(false)}
            >
              <NavLink 
                to="/agentic-ai" 
                className={({ isActive }) => `nav-pill-link d-inline-flex align-items-center gap-1 ${isActive ? 'active' : ''}`}
              >
                Course
                <i className="bi bi-chevron-down" style={{ fontSize: '0.75rem', transition: 'transform 0.2s ease', transform: isCourseDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}></i>
              </NavLink>

              {isCourseDropdownOpen && (
                <div className="dropdown-menu-glass position-absolute start-0 top-100 mt-1 py-2 px-2 rounded-3 shadow-lg z-3">
                  <Link 
                    to="/agentic-ai" 
                    className="dropdown-item-glass d-flex align-items-center gap-2 px-3 py-2 rounded-2 text-decoration-none"
                    onClick={closeMenu}
                  >
                    <i className="bi bi-cpu text-lime"></i>
                    <span>Agentic AI Engineering</span>
                  </Link>
                  <Link 
                    to="/rpa" 
                    className="dropdown-item-glass d-flex align-items-center gap-2 px-3 py-2 rounded-2 text-decoration-none"
                    onClick={closeMenu}
                  >
                    <i className="bi bi-robot text-lime"></i>
                    <span>RPA</span>
                  </Link>
                </div>
              )}
            </div>

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

              {/* Mobile Course Sub-Nav */}
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between">
                  <NavLink to="/agentic-ai" className={({ isActive }) => `nav-pill-link flex-grow-1 ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                    <i className="bi bi-journal-code me-2"></i> Course
                  </NavLink>
                  <button 
                    className="btn btn-sm text-white p-2 border-0"
                    type="button"
                    onClick={() => setIsMobileCourseOpen(!isMobileCourseOpen)}
                  >
                    <i className={`bi bi-chevron-${isMobileCourseOpen ? 'up' : 'down'}`}></i>
                  </button>
                </div>

                {isMobileCourseOpen && (
                  <div className="ps-4 ms-2 border-start border-secondary mt-2 d-flex flex-column gap-1">
                    <Link 
                      to="/agentic-ai" 
                      className="sub-nav-link text-white-50 text-decoration-none py-2 px-3 d-flex align-items-center gap-2"
                      onClick={closeMenu}
                    >
                      <i className="bi bi-cpu text-lime"></i> Agentic AI Engineering
                    </Link>
                    <Link 
                      to="/rpa" 
                      className="sub-nav-link text-white-50 text-decoration-none py-2 px-3 d-flex align-items-center gap-2"
                      onClick={closeMenu}
                    >
                      <i className="bi bi-robot text-lime"></i> RPA
                    </Link>
                  </div>
                )}
              </div>

              <NavLink to="/blog" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <i className="bi bi-newspaper me-2"></i> Blog
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-pill-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
                <i className="bi bi-envelope me-2"></i> Contact us
              </NavLink>
              <a 
                href="https://wa.me/918999442393" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp-nav mt-2 justify-content-center d-flex align-items-center gap-2"
                onClick={closeMenu}
              >
                <i className="bi bi-whatsapp fs-5"></i>
                <span>+91 8999442393</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
