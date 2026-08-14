import React, { useState, useEffect, useRef } from 'react';
import SyllabusModal from '../components/SyllabusModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import workflowImg from '../assets/RPA-for-enterprises.webp';
import heroBgImg from '../assets/d55f415d9e752ef2fa7edf6f07afac92.jpg';

const courseData = {
  id: 2,
  title: "Master Robotic Process Automation (RPA)",
  category: "Robotic Process Automation",
  duration: "10 Weeks",
  level: "Beginner to Advanced",
  rating: 4.9,
  reviews: 980,
  price: "INR",
  image: workflowImg,
  badge: "Enterprise Automation Track",
  description: "Master enterprise RPA tools like UiPath, Power Automate, and AI Document Understanding to build end-to-end software bots that automate complex business processes.",
  curriculum: [
    "UiPath Studio, Orchestrator & REFramework",
    "Microsoft Power Automate & Desktop Flows",
    "AI Document Understanding & Intelligent OCR",
    "Enterprise Bot Deployment & Exception Handling"
  ]
};

const whyLearnData = [
  {
    icon: "🤖",
    title: "Build Intelligent Software Bots",
    desc: "Create enterprise-grade bots capable of automating repetitive rule-based business tasks with 100% precision and zero human error."
  },
  {
    icon: "⚡",
    title: "Master UiPath & Power Automate",
    desc: "Learn the market-leading automation platforms used by Fortune 500 companies worldwide for hyperautomation initiatives."
  },
  {
    icon: "📄",
    title: "AI Document Understanding & OCR",
    desc: "Extract and process structured and unstructured data from invoices, purchase orders, PDFs, and scanned forms with AI models."
  },
  {
    icon: "🔄",
    title: "Enterprise REFramework Architecture",
    desc: "Build robust, fault-tolerant automations using the Robotic Enterprise Framework with transactional queuing and retry logic."
  },
  {
    icon: "🌐",
    title: "Web, Desktop & SAP Automation",
    desc: "Automate legacy mainframe systems, SAP, Salesforce, Excel spreadsheets, email pipelines, and web applications seamlessly."
  },
  {
    icon: "🚀",
    title: "Orchestration & Cloud Deployment",
    desc: "Deploy, schedule, monitor, and scale unattended bots securely using UiPath Orchestrator and enterprise asset vaults."
  }
];

const whoShouldJoinData = [
  {
    icon: "💼",
    title: "Non-Tech & Business Users",
    desc: "Professionals who want to automate manual spreadsheets, invoices, data entry, and reporting with low-code tools."
  },
  {
    icon: "💻",
    title: "Software & QA Engineers",
    desc: "Developers and test automation engineers transitioning into high-demand enterprise RPA & hyperautomation roles."
  },
  {
    icon: "🎓",
    title: "Graduates & Job Seekers",
    desc: "Build verifiable enterprise bot portfolios, gain hands-on UiPath expertise, and prepare for high-paying RPA jobs."
  },
  {
    icon: "🚀",
    title: "IT Pros & Consultants",
    desc: "Lead enterprise digital transformation, process mining, and intelligent process automation projects."
  }
];

const rpaTracksData = [
  {
    level: "Beginner RPA",
    badge: "Level 1 • Foundations",
    duration: "Weeks 1–3",
    subtitle: "Modules 1–3 • Core Fundamentals",
    // description: "Start from zero. Master automation concepts, UiPath Studio setup, variables, sequences, flowcharts, and Excel data automation.",
    topics: [
      "Introduction to RPA & Low-Code Platforms",
      "UiPath Studio Installation & Interface",
      "Variables, Data Types & Control Flows",
      "Excel Reading, Writing & Data Manipulation"
    ],
    accentColor: "#d2fb52",
    featured: false
  },
  {
    level: "Intermediate RPA",
    badge: "Level 2 • Developer Track",
    duration: "Weeks 4–7",
    subtitle: "Modules 4–6 • Web, Email & Document AI",
    // description: "Build robust bots for web browsers, dynamic form filling, email workflows, automated notifications, and PDF extraction.",
    topics: [
      "Browser Automation & Structured Data Extraction",
      "Web Scraping, Form Filling & Login Workflows",
      "Email Automation & Attachment Parsing",
      "PDF Data Extraction, OCR & File System Flows"
    ],
    accentColor: "#00ab6b",
    featured: true
  },
  {
    level: "Advance RPA",
    badge: "Level 3 • Enterprise Architect",
    duration: "Weeks 8–10",
    subtitle: "Modules 7–10 • REFramework & Real-Time Bots",
    // description: "Develop enterprise-grade state machine bots with Robotic Enterprise Framework (REFramework), queues, debugging, and live capstone bots.",
    topics: [
      "REFramework Architecture & State Machines",
      "Exception Handling, Logging & Queue Management",
      "4 Real-Time Bots (Invoice, Report, Onboarding)",
      "UiPath Associate Exam Prep & Mock Interviews"
    ],
    accentColor: "#38ef7d",
    featured: false
  }
];

const Rpa = () => {
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  const heroBadgeRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroCtaRef = useRef(null);
  const heroImageRef = useRef(null);
  const tracksHeaderRef = useRef(null);
  const tracksCardsRef = useRef(null);
  const whyLearnHeaderRef = useRef(null);
  const whyLearnCardsRef = useRef(null);
  const whoShouldJoinHeaderRef = useRef(null);
  const whoShouldJoinCardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        heroBadgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        .fromTo(
          heroHeadingRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          heroSubRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          heroCtaRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          heroImageRef.current,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          '-=0.8'
        );

      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      }

      // GSAP ScrollTrigger Animation for RPA Tracks Header
      if (tracksHeaderRef.current) {
        gsap.fromTo(
          Array.from(tracksHeaderRef.current.children),
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: tracksHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // GSAP ScrollTrigger Animation for RPA Tracks Cards
      if (tracksCardsRef.current) {
        const cards = Array.from(tracksCardsRef.current.children);
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.3)',
            scrollTrigger: {
              trigger: tracksCardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // GSAP ScrollTrigger Animation for Why Learn Section Header
      if (whyLearnHeaderRef.current) {
        gsap.fromTo(
          Array.from(whyLearnHeaderRef.current.children),
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: whyLearnHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // GSAP ScrollTrigger Animation for Why Learn Cards Grid
      if (whyLearnCardsRef.current) {
        const cards = Array.from(whyLearnCardsRef.current.children);
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.92, rotateX: 10 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.3)',
            scrollTrigger: {
              trigger: whyLearnCardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // GSAP ScrollTrigger Animation for Who Should Join Section Header
      if (whoShouldJoinHeaderRef.current) {
        gsap.fromTo(
          Array.from(whoShouldJoinHeaderRef.current.children),
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: whoShouldJoinHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // GSAP ScrollTrigger Animation for Who Should Join Cards Grid
      if (whoShouldJoinCardsRef.current) {
        const cards = Array.from(whoShouldJoinCardsRef.current.children);
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
              trigger: whoShouldJoinCardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.icon-box');
    gsap.to(card, {
      y: -8,
      scale: 1.02,
      borderColor: 'rgba(210, 251, 82, 0.45)',
      boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(210, 251, 82, 0.2)',
      duration: 0.35,
      ease: 'power2.out'
    });
    if (icon) {
      gsap.to(icon, {
        scale: 1.15,
        rotate: 10,
        backgroundColor: 'rgba(210, 251, 82, 0.25)',
        duration: 0.35,
        ease: 'back.out(1.7)'
      });
    }
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.icon-box');
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
        backgroundColor: 'rgba(0, 0, 0, 1)',
        duration: 0.35,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div className="rpa-page overflow-hidden">
      {/* HERO SECTION */}
      <section className="hero-wrapper position-relative">
        <img src={heroBgImg} alt="Robotic Process Automation Background" className="hero-bg-img" />
        <div className="hero-overlay"></div>

        <div className="container hero-content py-5">
          <div className="row align-items-center g-5">
            {/* Left Column: Heading & Subheading */}
            <div className="col-lg-7 text-start">
              <div className="hero-tagline-badge" ref={heroBadgeRef}>
                <span className="pulse-dot"></span>
                <span>🔥 {courseData.badge} • AutoMinds Academy</span>
              </div>

              <h1
                className="display-3 fw-extrabold text-white mb-4 tracking-tight"
                ref={heroHeadingRef}
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', lineHeight: 1.1 }}
              >
                Master Robotic Process Automation<span style={{ color: '#d2fb52' }}>.</span>
              </h1>

              <p
                className="fs-5 text-white-50 mb-4"
                ref={heroSubRef}
                style={{ maxWidth: '640px', lineHeight: '1.6' }}
              >
                {courseData.description}
              </p>

              {/* Quick Feature Badges */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {["UiPath & Power Automate", "REFramework & State Machines", "AI Document Understanding", "Enterprise Orchestrator"].map((tag, idx) => (
                  <span key={idx} className="badge bg-dark border border-secondary text-white px-3 py-2 rounded-pill small d-inline-flex align-items-center gap-1">
                    <i className="bi bi-check-circle-fill text-lime"></i> {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3 align-items-center flex-wrap" ref={heroCtaRef}>
                {/* <button
                  onClick={() => setActiveCourseModal(courseData)}
                  className="btn btn-lime rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-lg">
                  <i className="bi bi-journal-text"></i> View Full Syllabus
                </button> */}
                <a href="#levels"
                  className="btn btn-glass rounded-pill px-4 py-3 fw-medium d-inline-flex align-items-center gap-2 text-white">
                  Explore Highlights <i className="bi bi-arrow-down-short"></i>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="col-lg-5">
              <div ref={heroImageRef} className="position-relative">
                <div className="course-img-wrapper rounded-4 overflow-hidden shadow-lg border border-secondary position-relative">
                  <img
                    src={workflowImg}
                    alt="Master Robotic Process Automation"
                    className="w-100 h-auto object-fit-cover"
                    style={{ minHeight: '340px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RPA LEVELS & LEARNING TRACKS (Beginner, Intermediate, Advance) */}
      <section id="levels" className="py-5 bg-dark border-top border-secondary position-relative">
        <div className="container py-4">
          <div className="text-center max-w-3xl mx-auto mb-5" ref={tracksHeaderRef}>
            <span className="hero-tagline-badge mb-3 d-inline-block">
              <i className="bi bi-diagram-3-fill me-1"></i> Progressive Curriculum
            </span>
            <h2 className="display-5 fw-bold text-white mb-3">RPA Mastery by Experience Level</h2>
            <p className="fs-5 text-white-50">
              A structured 10-week roadmap taking you from core low-code automation to enterprise-scale state machines and REFramework bot deployment.
            </p>
          </div>

          <div className="row g-4 justify-content-center" ref={tracksCardsRef}>
            {rpaTracksData.map((track, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div
                  className={`glass-feature-card h-100 p-4 p-xl-5 rounded-4 border bg-black text-start d-flex flex-column justify-content-between transition-all position-relative ${track.featured ? 'border-lime shadow-lg' : 'border-secondary'
                    }`}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  style={{ cursor: 'pointer' }}
                >
                  {track.featured && (
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-lime text-black fw-bold px-3 py-1 rounded-pill small">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Level Badge & Duration */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span
                        className="badge bg-dark border text-uppercase tracking-wider fw-semibold px-3 py-2 rounded-pill small"
                        style={{ borderColor: track.accentColor, color: track.accentColor }}
                      >
                        {track.badge}
                      </span>
                      <span className="text-white-50 small fw-medium">
                        <i className="bi bi-clock me-1 text-lime"></i> {track.duration}
                      </span>
                    </div>

                    {/* Track Title & Subtitle */}
                    <h3 className="text-white fw-bold mb-1">{track.level}</h3>
                    <p className="text-lime small fw-semibold mb-3">{track.subtitle}</p>

                    {/* Description */}
                    <p className="text-white-50 small mb-4" style={{ lineHeight: '1.6' }}>
                      {track.description}
                    </p>

                    {/* Key Topics List */}
                    <div className="mb-4 pb-2 border-top border-secondary border-opacity-25 pt-3">
                      <h6 className="text-white fw-bold small text-uppercase mb-3 tracking-wider" style={{ fontSize: '0.78rem' }}>
                        Key Skills & Modules
                      </h6>
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                        {track.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="small text-white-50 d-flex align-items-start gap-2">
                            <i className="bi bi-check-circle-fill text-lime mt-1 flex-shrink-0" style={{ fontSize: '0.85rem' }}></i>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* View Full Syllabus CTA Button */}
                  <div className="pt-3 border-top border-secondary border-opacity-25 mt-auto">
                    <button
                      type="button"
                      onClick={() => setActiveCourseModal(courseData)}
                      className={`btn w-100 rounded-pill py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2 shadow-sm transition-all ${track.featured ? 'btn-lime' : 'btn-lime'
                        }`}
                    >
                      <i className="bi bi-journal-text"></i> View Full Syllabus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LEARN RPA SECTION */}
      <section id="whylearn" className="py-5 bg-black border-top border-secondary position-relative">
        <div className="container py-4">
          <div className="text-center max-w-3xl mx-auto mb-5" ref={whyLearnHeaderRef}>
            <span className="hero-tagline-badge mb-3 d-inline-block">
              <i className="bi bi-stars me-1"></i> Enterprise Efficiency
            </span>
            <h2 className="display-5 fw-bold text-white mb-3">Why Learn Robotic Process Automation?</h2>
            <p className="fs-5 text-white-50">
              RPA is transforming business operations across healthcare, finance, logistics, and tech by automating repetitive tasks at machine speed.
            </p>
          </div>

          <div className="row g-4" ref={whyLearnCardsRef}>
            {whyLearnData.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div
                  className="glass-feature-card h-100 p-4 rounded-4 border border-secondary bg-dark text-start d-flex flex-column justify-content-between transition-all"
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  style={{ cursor: 'pointer' }}
                >
                  <div>
                    <div
                      className="icon-box p-3 rounded-3 bg-black border border-secondary text-lime d-inline-flex align-items-center justify-content-center mb-3 fs-3"
                      style={{ width: '56px', height: '56px', transition: 'all 0.3s ease' }}
                    >
                      <span>{item.icon}</span>
                    </div>
                    <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                    <p className="text-white-50 small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD JOIN SECTION */}
      <section className="py-5 bg-dark border-top border-secondary position-relative">
        <div className="container py-4">
          <div className="text-center max-w-3xl mx-auto mb-5" ref={whoShouldJoinHeaderRef}>
            <span className="hero-tagline-badge mb-3 d-inline-block">
              <i className="bi bi-people-fill me-1"></i> Target Audience
            </span>
            <h2 className="display-5 fw-bold text-white mb-3">Who Should Join?</h2>
            <p className="fs-5 text-white-50">
              Designed for career changers, developers, and business professionals aiming to master enterprise software robotics and hyperautomation.
            </p>
          </div>

          <div className="row g-4" ref={whoShouldJoinCardsRef}>
            {whoShouldJoinData.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div
                  className="glass-feature-card h-100 p-4 rounded-4 border border-secondary bg-dark text-start d-flex flex-column justify-content-between transition-all"
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  style={{ cursor: 'pointer' }}
                >
                  <div>
                    <div
                      className="icon-box p-3 rounded-3 bg-black border border-secondary text-lime d-inline-flex align-items-center justify-content-center mb-3 fs-3"
                      style={{ width: '56px', height: '56px', transition: 'all 0.3s ease' }}
                    >
                      <span>{item.icon}</span>
                    </div>
                    <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                    <p className="text-white-50 small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS MODAL */}
      {activeCourseModal && (
        <SyllabusModal
          course={activeCourseModal}
          onClose={() => setActiveCourseModal(null)}
        />
      )}
    </div>
  );
};

export default Rpa;
