import React, { useState, useEffect, useRef } from 'react';
import SyllabusModal from '../components/SyllabusModal';
import gsap from 'gsap';

import profileAiImg from '../assets/3cdcf1dfaf3e6fc0929d79351259da47.jpg';
import heroBgImg from '../assets/d55f415d9e752ef2fa7edf6f07afac92.jpg';

const courseData = {
  id: 1,
  title: "Master Agentic AI Engineering",
  category: "Agentic AI Engineering",
  duration: "12 Weeks",
  level: "Intermediate to Advanced",
  rating: 4.9,
  reviews: 1240,
  price: "INR",
  image: profileAiImg,
  badge: "Bestseller Track",
  description: "Build intelligent AI agents that can reason, use tools, access knowledge, make decisions, and automate real-world workflows.",
  curriculum: [
    "Multi-Agent Architecture & LangGraph",
    "Tool Calling, Function Execution & Memory",
    "Self-Reflection & Error Correction Loops",
    "Production Deployment & Agent Evaluation"
  ]
};

const modulesDetail = [
  {
    icon: "bi-diagram-3-fill",
    title: "Multi-Agent Systems",
    desc: "Architect autonomous agent swarms with specialized roles, state persistence, and conditional graph routing using LangGraph and CrewAI."
  },
  {
    icon: "bi-tools",
    title: "Tool Calling & Memory",
    desc: "Equip your agents with custom API integrations, web searching, vector database retrieval, and long-term conversational memory."
  },
  {
    icon: "bi-arrow-repeat",
    title: "Self-Reflection Loops",
    desc: "Build self-correcting agents that evaluate their own output, handle execution failures gracefully, and incorporate human-in-the-loop oversight."
  },
  {
    icon: "bi-cloud-arrow-up-fill",
    title: "Production Deployment",
    desc: "Deploy resilient, low-latency agent microservices to cloud infrastructure with complete execution tracing, telemetry, and observability."
  }
];

const AgenticAI = () => {
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  const heroBadgeRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroCtaRef = useRef(null);
  const heroImageRef = useRef(null);

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="agentic-ai-page overflow-hidden">
      {/* HERO SECTION */}
      <section className="hero-wrapper position-relative">
        <img src={heroBgImg} alt="Agentic AI Background" className="hero-bg-img" />
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
                Master Agentic AI Engineering<span style={{ color: '#d2fb52' }}>.</span>
              </h1>

              <p
                className="fs-5 text-white-50 mb-4"
                ref={heroSubRef}
                style={{ maxWidth: '640px', lineHeight: '1.6' }}
              >
                Build intelligent AI agents that can reason, use tools, access knowledge, make decisions, and automate real-world workflows.
              </p>

              {/* Quick Feature Badges */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {["LangGraph & CrewAI", "Tool Calling & RAG", "Self-Reflection Loops", "Production Ready"].map((tag, idx) => (
                  <span key={idx} className="badge bg-dark border border-secondary text-white px-3 py-2 rounded-pill small d-inline-flex align-items-center gap-1">
                    <i className="bi bi-check-circle-fill text-lime"></i> {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3 align-items-center flex-wrap" ref={heroCtaRef}>
                <button
                  onClick={() => setActiveCourseModal(courseData)}
                  className="btn btn-lime rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-lg"
                >
                  <i className="bi bi-journal-text"></i> View Full Syllabus
                </button>
                <a
                  href="#curriculum"
                  className="btn btn-glass rounded-pill px-4 py-3 fw-medium d-inline-flex align-items-center gap-2 text-white"
                >
                  Explore Highlights <i className="bi bi-arrow-down-short"></i>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="col-lg-5">
              <div ref={heroImageRef} className="position-relative">
                <div className="course-img-wrapper rounded-4 overflow-hidden shadow-lg border border-secondary position-relative">
                  <img
                    src={profileAiImg}
                    alt="Master Agentic AI Engineering"
                    className="w-100 h-auto object-fit-cover"
                    style={{ minHeight: '340px' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-dark border border-secondary text-warning px-3 py-2 rounded-pill shadow">
                      <i className="bi bi-star-fill me-1"></i> {courseData.rating} ({courseData.reviews})
                    </span>
                  </div>
                </div>               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-4 bg-black border-top border-bottom border-secondary">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <h3 className="fw-extrabold text-white mb-1">12 Weeks</h3>
              <p className="text-white-50 small mb-0">Hands-on Engineering</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-extrabold text-lime mb-1">Multi-Agent</h3>
              <p className="text-white-50 small mb-0">LangGraph & CrewAI</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-extrabold text-white mb-1">4.9 / 5.0</h3>
              <p className="text-white-50 small mb-0">Student Satisfaction</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-extrabold text-lime mb-1">100% Live</h3>
              <p className="text-white-50 small mb-0">Code & Deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CURRICULUM HIGHLIGHTS */}
      <section id="curriculum" className="py-5">
        <div className="container py-4">
          <div className="text-center max-w-3xl mx-auto mb-5">
            <span className="hero-tagline-badge mb-3 d-inline-block">
              <i className="bi bi-layers-fill me-1"></i> Core Curriculum
            </span>
            <h2 className="display-5 fw-bold text-white mb-3">What You Will Master</h2>
            <p className="fs-5 text-white-50">
              A comprehensive, industry-aligned engineering roadmap to design, evaluate, and scale production-ready AI agents.
            </p>
          </div>

          <div className="row g-4">
            {modulesDetail.map((mod, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="glass-feature-card h-100 p-4 rounded-4 border border-secondary bg-dark text-start d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="p-3 rounded-3 bg-black border border-secondary text-lime d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <i className={`bi ${mod.icon} fs-4`}></i>
                    </div>
                    <h5 className="text-white fw-bold mb-2">{mod.title}</h5>
                    <p className="text-white-50 small mb-0">{mod.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SYLLABUS CTA BOX */}
          <div className="mt-5 glass-panel p-4 p-md-5 rounded-4 text-center border border-secondary position-relative overflow-hidden">
            <div className="row align-items-center g-4">
              <div className="col-lg-8 text-lg-start">
                <h3 className="fw-bold text-white mb-2">Ready to Build Production AI Agents?</h3>
                <p className="text-white-50 mb-0">
                  Explore full module breakdowns, week-by-week projects, tools, and prerequisites.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <button
                  onClick={() => setActiveCourseModal(courseData)}
                  className="btn btn-lime rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-journal-text"></i> View Full Syllabus
                </button>
              </div>
            </div>
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

export default AgenticAI;
