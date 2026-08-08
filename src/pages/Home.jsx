import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Asset Imports
import heroBg from '../assets/d55f415d9e752ef2fa7edf6f07afac92.jpg';
import workflowImg from '../assets/27e5401d70d844af82e09bcf99943593.jpg';
import profileAiImg from '../assets/3cdcf1dfaf3e6fc0929d79351259da47.jpg';
import networkAiImg from '../assets/3b584eaf8444c8ade13d5ff7745a40cc.jpg';
import TechStackSection from '../components/TechStackSection';

const Home = () => {
  const [activeTab, setActiveTab] = useState('weekly');

  const heroBadgeRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroCtaRef = useRef(null);
  const heroChecklistRef = useRef(null);
  const floatingCardRef = useRef(null);
  const coursesGridRef = useRef(null);
  const statsBannerRef = useRef(null);
  const whyHeaderRef = useRef(null);
  const whyCardsGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Stagger Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        heroBadgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          heroHeadingRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          heroSubRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          heroCtaRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' },
          '-=0.5'
        )
        .fromTo(
          heroChecklistRef.current?.children ? Array.from(heroChecklistRef.current.children) : [],
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          '-=0.4'
        )
        .fromTo(
          floatingCardRef.current,
          { x: 50, opacity: 0, rotateY: 15 },
          { x: 0, opacity: 1, rotateY: -4, duration: 1.1, ease: 'power3.out' },
          '-=1.2'
        );

      // 2. Floating Idle Bobbing Animation on Right Metric Card
      if (floatingCardRef.current) {
        gsap.to(floatingCardRef.current, {
          y: -12,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      }

      // 3. Staggered reveal for Course Cards
      if (coursesGridRef.current) {
        gsap.fromTo(
          Array.from(coursesGridRef.current.children),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5 }
        );
      }

      // 4. GSAP ScrollTrigger Animation for Why AutoMinds Academy Section
      if (whyHeaderRef.current) {
        gsap.fromTo(
          Array.from(whyHeaderRef.current.children),
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: whyHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      if (whyCardsGridRef.current) {
        const cards = Array.from(whyCardsGridRef.current.children);
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.92, rotateX: 10 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'back.out(1.3)',
            scrollTrigger: {
              trigger: whyCardsGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Continuous subtle icon floating animation with staggered delay
        cards.forEach((cardCol, index) => {
          const icon = cardCol.querySelector('.glass-icon-box');
          if (icon) {
            gsap.to(icon, {
              y: -6,
              duration: 2.2 + (index % 3) * 0.3,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: index * 0.15
            });
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleWhyCardMouseEnter = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.glass-icon-box');
    gsap.to(card, {
      y: -10,
      scale: 1.03,
      borderColor: 'rgba(210, 251, 82, 0.45)',
      boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(210, 251, 82, 0.2)',
      duration: 0.35,
      ease: 'power2.out'
    });
    if (icon) {
      gsap.to(icon, {
        scale: 1.2,
        rotate: 12,
        backgroundColor: 'rgba(210, 251, 82, 0.25)',
        duration: 0.35,
        ease: 'back.out(1.7)'
      });
    }
  };

  const handleWhyCardMouseLeave = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.glass-icon-box');
    gsap.to(card, {
      y: 0,
      scale: 1,
      borderColor: 'rgba(255, 255, 255, 0.08)',
      boxShadow: 'none',
      duration: 0.35,
      ease: 'power2.out'
    });
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        backgroundColor: 'rgba(210, 251, 82, 0.08)',
        duration: 0.35,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div className="home-page overflow-hidden">
      {/* HERO SECTION */}
      <section className="hero-wrapper">
        <img src={heroBg} alt="Autominds AI Background" className="hero-bg-img" />
        <div className="hero-overlay"></div>

        <div className="container hero-content py-5">
          <div className="row align-items-center g-5">

            {/* Left Hero Column */}
            <div className="col-lg-7 text-start">

              {/* MANDATORY HERO TAGLINE BANNER */}
              <div className="hero-tagline-badge" ref={heroBadgeRef}>
                <span className="pulse-dot"></span>
                <span>Learn AI Fast: Simple Course to Build Real Skills</span>
              </div>

              {/* Reference-Inspired Massive Typography */}
              <h1
                className="display-3 fw-extrabold text-white mb-4 tracking-tight"
                ref={heroHeadingRef}
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.08 }}
              >Learn AI Fast: Simple Course to Build Real Skills<span style={{ color: '#d2fb52' }}>.</span>
              </h1>

              <p className="fs-5   mb-5 pe-lg-5" ref={heroSubRef} style={{ maxWidth: '620px', lineHeight: 1.6 }}>
                AI-first academy powering next-gen developers & business teams. General ledger of AI skills, revenue automation, and production LLM orchestration.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3" ref={heroCtaRef}>
                <Link to="/courses" className="btn-lime text-decoration-none fs-5 py-3 px-4">
                  Get started <i className="bi bi-arrow-right fs-5 ms-1"></i>
                </Link>
                <Link to="/about" className="btn-glass text-decoration-none fs-5 py-3 px-4">
                  <i className="bi bi-play-circle me-2"></i> Watch Overview
                </Link>
              </div>

              <div className="d-flex align-items-center gap-4 mt-5 pt-3" ref={heroChecklistRef}>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-lime fs-5" style={{ color: '#d2fb52' }}></i>
                  <span className="text-white small fw-semibold">No fluff content</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-lime fs-5" style={{ color: '#d2fb52' }}></i>
                  <span className="text-white small fw-semibold">Real hands-on code</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-lime fs-5" style={{ color: '#d2fb52' }}></i>
                  <span className="text-white small fw-semibold">24/7 Mentor support</span>
                </div>
              </div>
            </div>

            {/* Right Hero Column - Floating Widget Card (Matching Reference Design Cashflow Card) */}
            <div className="col-lg-5">
              <div className="floating-widget-card p-4" ref={floatingCardRef}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h5 className="fw-extrabold text-dark m-0 font-heading">AI Skillflow</h5>
                    <span className="  small">Live Learning Matrix</span>
                  </div>
                  <span className="badge-lime">+94% Speed</span>
                </div>

                {/* Tab selector pill inside widget */}
                <div className="bg-light p-1 rounded-pill d-flex mb-4 gap-1">
                  <button
                    onClick={() => setActiveTab('weekly')}
                    className={`btn btn-sm flex-fill rounded-pill border-0 fw-semibold ${activeTab === 'weekly' ? 'bg-dark text-white' : ' '}`}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => setActiveTab('monthly')}
                    className={`btn btn-sm flex-fill rounded-pill border-0 fw-semibold ${activeTab === 'monthly' ? 'bg-dark text-white' : ' '}`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setActiveTab('yearly')}
                    className={`btn btn-sm flex-fill rounded-pill border-0 fw-semibold ${activeTab === 'yearly' ? 'bg-dark text-white' : ' '}`}
                  >
                    Yearly
                  </button>
                </div>

                {/* Dynamic Visual Bars representation matching reference */}
                <div className="d-flex align-items-end justify-content-between gap-2 my-4" style={{ height: '140px' }}>
                  <div className="d-flex flex-column align-items-center gap-1 w-100">
                    <div className="w-100 rounded-3 transition-all" style={{ height: activeTab === 'weekly' ? '60px' : '90px', backgroundColor: '#334155' }}></div>
                    <div className="w-100 rounded-3 transition-all" style={{ height: activeTab === 'weekly' ? '40px' : '30px', backgroundColor: '#d2fb52' }}></div>
                    <span className="  extra-small">Agent AI</span>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1 w-100">
                    <div className="w-100 rounded-3 transition-all" style={{ height: activeTab === 'weekly' ? '90px' : '50px', backgroundColor: '#84cc16' }}></div>
                    <div className="w-100 rounded-3 transition-all" style={{ height: activeTab === 'weekly' ? '30px' : '60px', backgroundColor: '#1e293b' }}></div>
                    <span className="  extra-small">LLMs</span>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1 w-100">
                    <div className="w-100 rounded-3 transition-all" style={{ height: activeTab === 'weekly' ? '45px' : '85px', backgroundColor: '#d2fb52' }}></div>
                    <div className="w-100 rounded-3 transition-all" style={{ height: activeTab === 'weekly' ? '70px' : '40px', backgroundColor: '#334155' }}></div>
                    <span className="  extra-small">Vision</span>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-1 w-100">
                    <div className="w-100 rounded-3 transition-all" style={{ height: activeTab === 'weekly' ? '110px' : '100px', backgroundColor: '#a3e635' }}></div>
                    <div className="w-100 rounded-3 transition-all" style={{ height: activeTab === 'weekly' ? '20px' : '35px', backgroundColor: '#0f172a' }}></div>
                    <span className="  extra-small">RAG</span>
                  </div>
                </div>

                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                  <span className="  small">Updated live upon lab completion</span>
                  <i className="bi bi-sliders text-dark"></i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-5 my-4 position-relative">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }} ref={whyHeaderRef}>
            <div className="hero-tagline-badge mb-3">
              <span className="pulse-dot"></span>
              <span className="text-uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="display-5 fw-bold font-heading text-white mb-3">
              Why AutoMinds Academy?
            </h2>
            <p className="fs-5" style={{ color: '#94a3b8' }}>
              Transform your career with hands-on AI engineering, real-world industry projects, and dedicated mentorship.
            </p>
          </div>

          <div className="row g-4" ref={whyCardsGridRef}>
            {/* 1. Industry Curriculum */}
            <div className="col-12 col-md-6 col-lg-4">
              <div 
                className="glass-feature-card"
                onMouseEnter={handleWhyCardMouseEnter}
                onMouseLeave={handleWhyCardMouseLeave}
              >
                <div className="glass-icon-box">🧠</div>
                <h4 className="fw-bold text-white mb-2 font-heading">Industry Curriculum</h4>
                <p className="small mb-0">
                  Cutting-edge syllabus updated continuously with real-world AI, LLM, & Machine Learning industry standards.
                </p>
              </div>
            </div>

            {/* 2. Live Coding */}
            <div className="col-12 col-md-6 col-lg-4">
              <div 
                className="glass-feature-card"
                onMouseEnter={handleWhyCardMouseEnter}
                onMouseLeave={handleWhyCardMouseLeave}
              >
                <div className="glass-icon-box">💻</div>
                <h4 className="fw-bold text-white mb-2 font-heading">Live Coding</h4>
                <p className="small mb-0">
                  Interactive hands-on live coding sessions, pair programming, and instant real-time instructor feedback.
                </p>
              </div>
            </div>

            {/* 3. Real Projects */}
            <div className="col-12 col-md-6 col-lg-4">
              <div 
                className="glass-feature-card"
                onMouseEnter={handleWhyCardMouseEnter}
                onMouseLeave={handleWhyCardMouseLeave}
              >
                <div className="glass-icon-box">📂</div>
                <h4 className="fw-bold text-white mb-2 font-heading">Real Projects</h4>
                <p className="small mb-0">
                  Build production-ready AI pipelines, multi-agent systems, and RAG architectures for your portfolio.
                </p>
              </div>
            </div>

            {/* 4. Certificate */}
            <div className="col-12 col-md-6 col-lg-4">
              <div 
                className="glass-feature-card"
                onMouseEnter={handleWhyCardMouseEnter}
                onMouseLeave={handleWhyCardMouseLeave}
              >
                <div className="glass-icon-box">🎓</div>
                <h4 className="fw-bold text-white mb-2 font-heading">Certificate</h4>
                <p className="small mb-0">
                  Earn industry-recognized certification to showcase your verified AI engineering capabilities to recruiters.
                </p>
              </div>
            </div>

            {/* 5. Placement */}
            <div className="col-12 col-md-6 col-lg-4">
              <div 
                className="glass-feature-card"
                onMouseEnter={handleWhyCardMouseEnter}
                onMouseLeave={handleWhyCardMouseLeave}
              >
                <div className="glass-icon-box">🤝</div>
                <h4 className="fw-bold text-white mb-2 font-heading">Placement</h4>
                <p className="small mb-0">
                  Dedicated career assistance, resume workshops, mock technical interviews, and top hiring partner referrals.
                </p>
              </div>
            </div>

            {/* 6. Mentorship */}
            <div className="col-12 col-md-6 col-lg-4">
              <div 
                className="glass-feature-card"
                onMouseEnter={handleWhyCardMouseEnter}
                onMouseLeave={handleWhyCardMouseLeave}
              >
                <div className="glass-icon-box">👨‍🏫</div>
                <h4 className="fw-bold text-white mb-2 font-heading">Mentorship</h4>
                <p className="small mb-0">
                  1-on-1 personalized guidance from veteran AI engineers and industry practitioners working at leading tech firms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      {/* <section className="py-4 border-y border-secondary bg-black" ref={statsBannerRef}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 className="fw-bold text-white font-heading display-6 mb-1">15,000+</h2>
              <p className="  small mb-0">Active Students</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold font-heading display-6 mb-1" style={{ color: '#d2fb52' }}>98.4%</h2>
              <p className="  small mb-0">Course Completion</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold text-white font-heading display-6 mb-1">45+</h2>
              <p className="  small mb-0">Hands-on AI Projects</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold text-white font-heading display-6 mb-1">4.9 / 5.0</h2>
              <p className="  small mb-0">User Satisfaction</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FEATURED WORKFLOW SECTION */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src={workflowImg}
                  alt="Software Delivery AI Flow"
                  className="img-fluid rounded-4 border border-secondary shadow-lg"
                />
                <div className="position-absolute bottom-0 end-0 m-3 glass-panel p-3 text-start border-0 shadow">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="pulse-dot"></span>
                    <strong className="text-white small">Automated CI/CD AI Pipeline</strong>
                  </div>
                  <p className="  extra-small mb-0">From Prompt to Production in minutes</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-tagline-badge">
                <span>AI Engineering Pipeline</span>
              </div>
              <h2 className="display-5 fw-bold text-white mb-4">
                Learn how to build real-world AI software delivery
              </h2>
              <p className="  fs-5 mb-4">
                We don't just teach theory. You'll code production-ready AI pipelines, test autonomous agent tools, release software with zero manual friction, and deploy end-to-end applications.
              </p>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-4 text-white">
                <li className="d-flex align-items-center gap-3">
                  <div className="bg-dark p-2 rounded-circle border border-secondary">
                    <i className="bi bi-diagram-3-fill text-lime" style={{ color: '#d2fb52' }}></i>
                  </div>
                  <span>Multi-Agent Task Delegation Frameworks</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <div className="bg-dark p-2 rounded-circle border border-secondary">
                    <i className="bi bi-database-fill-gear text-lime" style={{ color: '#d2fb52' }}></i>
                  </div>
                  <span>Vector Databases & Hybrid RAG Retrieval</span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <div className="bg-dark p-2 rounded-circle border border-secondary">
                    <i className="bi bi-shield-lock-fill text-lime" style={{ color: '#d2fb52' }}></i>
                  </div>
                  <span>Enterprise Guardrails & Evaluation Benchmarks</span>
                </li>
              </ul>
              <Link to="/courses" className="btn-lime text-decoration-none">
                Explore Curriculum <i className="bi bi-chevron-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES PREVIEW GRID */}
      <section className="py-5 bg-dark border-top border-secondary">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5">
            <div>
              <span className="hero-tagline-badge">Featured Courses</span>
              <h2 className="display-6 fw-bold text-white mb-2">Build In-Demand Skillsets</h2>
              <p className="  mb-0">Step-by-step interactive courses designed for immediate impact.</p>
            </div>
            <Link to="/courses" className="btn-glass text-decoration-none mt-3 mt-md-0">
              View All Courses <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4" ref={coursesGridRef}>
            {/* Course Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="course-card h-100 d-flex flex-column">
                <div className="course-img-wrapper">
                  <img src={profileAiImg} alt="AI Neural Architectures" />
                  <span className="position-absolute top-0 end-0 m-3 badge-tag">
                    Bestseller
                  </span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="  small"><i className="bi bi-clock me-1"></i> 6 Weeks</span>
                    <span className="text-warning small"><i className="bi bi-star-fill me-1"></i> 4.9 (1.2k)</span>
                  </div>
                  <h4 className="text-white fw-bold mb-2">Autonomous AI Agents Masterclass</h4>
                  <p className="  small flex-grow-1 mb-4">
                    Learn to build self-correcting LLM agents, LangGraph workflows, and automated tool calls from scratch.
                  </p>
                  <div className="d-flex align-items-center justify-content-between border-top border-secondary pt-3 mt-auto">

                    <Link to="/courses" className="btn btn-sm btn-lime rounded-pill px-3">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="course-card h-100 d-flex flex-column">
                <div className="course-img-wrapper">
                  <img src={workflowImg} alt="Generative AI" />
                  <span className="position-absolute top-0 end-0 m-3 badge-tag">
                    Hot Track
                  </span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="  small"><i className="bi bi-clock me-1"></i> 4 Weeks</span>
                    <span className="text-warning small"><i className="bi bi-star-fill me-1"></i> 4.8 (890)</span>
                  </div>
                  <h4 className="text-white fw-bold mb-2">Generative AI & LLM Systems</h4>
                  <p className="  small flex-grow-1 mb-4">
                    Master fine-tuning, RAG indexing, function calling, and deployment on cloud GPU clusters.
                  </p>
                  <div className="d-flex align-items-center justify-content-between border-top border-secondary pt-3 mt-auto">

                    <Link to="/courses" className="btn btn-sm btn-lime rounded-pill px-3">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="course-card h-100 d-flex flex-column">
                <div className="course-img-wrapper">
                  <img src={networkAiImg} alt="Prompt Engineering & Automation" />
                  <span className="position-absolute top-0 end-0 m-3 badge-tag">
                    Beginner Friendly
                  </span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="  small"><i className="bi bi-clock me-1"></i> 3 Weeks</span>
                    <span className="text-warning small"><i className="bi bi-star-fill me-1"></i> 5.0 (2.4k)</span>
                  </div>
                  <h4 className="text-white fw-bold mb-2">Prompt Engineering & Automation</h4>
                  <p className="  small flex-grow-1 mb-4">
                    Turn complex prompt patterns into automated micro-services and API endpoints with zero code bloat.
                  </p>
                  <div className="d-flex align-items-center justify-content-between border-top border-secondary pt-3 mt-auto">
                    <Link to="/courses" className="btn btn-sm btn-lime rounded-pill px-3">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="glass-panel p-5 text-center position-relative overflow-hidden">
            <div className="position-relative z-1 max-w-2xl mx-auto py-4">
              <span className="hero-tagline-badge">Ready to Start?</span>
              <h2 className="display-5 fw-bold text-white mb-3">
                Upcoming RPA Batch August 2026
                {/* connect to whats app group whatsapp RPA */}
              </h2>
              <p className="  fs-5 mb-4">
                Join over developers accelerating their career with Autominds Academy today.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/courses" className="btn-lime fs-5 px-5 py-3">
                  Enroll Now <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool technology you will master */}
      <TechStackSection />
    </div>
  );
};

export default Home;

