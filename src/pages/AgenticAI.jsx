import React, { useState } from 'react';
import SyllabusModal from '../components/SyllabusModal';
import profileAiImg from '../assets/3cdcf1dfaf3e6fc0929d79351259da47.jpg';

const courseData = {
  id: 1,
  title: "Agentic AI Engineering",
  category: "Agentic AI Engineering",
  // duration: "12 Weeks",
  level: "Intermediate",
  rating: 4.9,
  // reviews: 1240,
  price: "INR",
  image: profileAiImg,
  badge: "Bestseller",
  description: "Build self-correcting multi-agent teams using LangGraph, CrewAI, and custom tool integrations.",
  curriculum: ["Multi-Agent Architecture", "Tool Calling & Memory", "Self-Reflection Loops", "Production Deployment"]
};

const AgenticAI = () => {
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  return (
    <div className="agentic-ai-page pt-5 mt-4">
      {/* HERO / HEADER BANNER */}
      <section className="py-5 text-center bg-dark  border-secondary position-relative">
        <div className="container py-3">
          {/* <div className="hero-tagline-badge mb-3">
            <span>{courseData.badge}</span>
          </div> */}
          <h1 className="display-4 fw-extrabold text-white mb-3">{courseData.title}</h1>
          <p className="fs-5 text-white-50 mx-auto mb-4" style={{ maxWidth: '700px' }}>
            {courseData.description}
          </p>
          <div className="d-flex justify-content-center gap-3 align-items-center flex-wrap">
            {/* <span className="badge bg-dark border border-secondary text-white px-3 py-2">
              <i className="bi bi-clock me-1 text-lime"></i> {courseData.duration}
            </span> */}
            {/* <span className="badge bg-dark border border-secondary text-white px-3 py-2">
              <i className="bi bi-bar-chart me-1 text-lime"></i> {courseData.level}
            </span> */}
            {/* <span className="badge bg-dark border border-secondary text-warning px-3 py-2">
              <i className="bi bi-star-fill me-1"></i> {courseData.rating} ({courseData.reviews} reviews)
            </span> */}
          </div>
        </div>
      </section>

      {/* MAIN COURSE CONTENT */}
      <section className="py-5">
        <div className="container max-w-5xl">
          <div className="row g-4 align-items-center">
            {/* <div className="col-lg-6">
              <div className="course-img-wrapper rounded-4 overflow-hidden shadow-lg border border-secondary">
                <img 
                  src={courseData.image} 
                  alt={courseData.title} 
                  className="w-100 h-auto object-fit-cover"
                />
              </div>
            </div> */}

            <div className="col-lg-6">
              <div className="glass-panel p-4 p-md-5">
                <span className="hero-tagline-badge mb-3 d-inline-block">Curriculum Highlights</span>
                <h2 className="h3 fw-bold text-white mb-4">What You Will Learn</h2>

                <ul className="col-md-6 list-unstyled d-flex flex-column gap-3 mb-4">
                  {courseData.curriculum.map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-3 text-white">
                      <div className="p-2 bg-dark rounded-circle border border-secondary d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                        <i className="bi bi-check-lg text-lime"></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="d-flex gap-3">
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
