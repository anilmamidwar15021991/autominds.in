import React, { useState } from 'react';
import SyllabusModal from '../components/SyllabusModal';
import workflowImg from '../assets/RPA-for-enterprises.webp';

const courseData = {
  id: 2,
  title: "RPA",
  category: "RPA",
  // duration: "6 Weeks",
  // level: "Advanced",
  // rating: 4.8,
  reviews: 890,
  price: "INR",
  image: workflowImg,
  // badge: "Hot Track",
  description: "Master RPA tools like UiPath and Power Automate to automate business processes.",
  curriculum: ["UiPath Studio & Automation Anywhere", "Power Automate & Process Mining", "Bot Architecture & Orchestration", "Enterprise Workflow Automation"]
};

const Rpa = () => {
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  return (
    <div className="rpa-page pt-5 mt-4">
      {/* HERO / HEADER BANNER */}
      <section className="py-5 text-center bg-dark border-secondary position-relative">
        <div className="container py-3">
          {/* <div className="hero-tagline-badge mb-3">
            <span>{courseData.badge}</span>
          </div> */}
          <h1 className="display-4 fw-extrabold text-white mb-3">{courseData.title}</h1>
          <p className="fs-5 text-white-50 mx-auto mb-4" style={{ maxWidth: '700px' }}>
            {courseData.description}
          </p>
          {/* <div className="d-flex justify-content-center gap-3 align-items-center flex-wrap">
            <span className="badge bg-dark border border-secondary text-white px-3 py-2">
              <i className="bi bi-clock me-1 text-lime"></i> {courseData.duration}
            </span>
            <span className="badge bg-dark border border-secondary text-white px-3 py-2">
              <i className="bi bi-bar-chart me-1 text-lime"></i> {courseData.level}
            </span>
            <span className="badge bg-dark border border-secondary text-warning px-3 py-2">
              <i className="bi bi-star-fill me-1"></i> {courseData.rating} ({courseData.reviews} reviews)
            </span>
          </div> */}
        </div>
      </section>

      {/* MAIN COURSE CONTENT */}
      <section className="py-5">
        <div className="container max-w-5xl">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="course-img-wrapper rounded-4 overflow-hidden shadow-lg border border-secondary">
                <img 
                  src={courseData.image} 
                  alt={courseData.title} 
                  className="w-100 h-auto object-fit-cover"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="glass-panel p-4 p-md-5">
                <span className="hero-tagline-badge mb-3 d-inline-block">Curriculum Highlights</span>
                <h2 className="h3 fw-bold text-white mb-4">What You Will Learn</h2>

                <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
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

export default Rpa;
