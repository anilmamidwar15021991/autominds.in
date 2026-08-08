import React, { useState } from 'react';
import SyllabusModal from '../components/SyllabusModal';

import profileAiImg from '../assets/3cdcf1dfaf3e6fc0929d79351259da47.jpg';
import workflowImg from '../assets/RPA-for-enterprises.webp';

const coursesData = [
  {
    id: 1,
    title: "Autonomous AI Agents Masterclass",
    category: "Autonomous Agents",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.9,
    reviews: 1240,
    price: "$149",
    image: profileAiImg,
    badge: "Bestseller",
    description: "Build self-correcting multi-agent teams using LangGraph, CrewAI, and custom tool integrations.",
    curriculum: ["Multi-Agent Architecture", "Tool Calling & Memory", "Self-Reflection Loops", "Production Deployment"]
  },
  {
    id: 2,
    title: "RPA",
    category: "Generative AI",
    duration: "4 Weeks",
    level: "Advanced",
    rating: 4.8,
    reviews: 890,
    price: "$129",
    image: workflowImg,
    badge: "Hot Track",
    description: "Master fine-tuning, RAG indexing, function calling, and deployment on cloud GPU clusters.",
    curriculum: ["Vector Database Setup", "Hybrid Search RAG", "Model Fine-tuning", "Latency Optimization"]
  }
];

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  const categories = ['All', 'Autonomous Agents', 'Generative AI', 'Prompt Engineering'];

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="course-page pt-5 mt-4">
      {/* HEADER BANNER */}
      <section className="py-5 text-center bg-dark border-bottom border-secondary">
        <div className="container py-3">
          <div className="hero-tagline-badge mb-3">
            <span>Your Journey to AI Excellence Starts Here.</span>
          </div>
          <h1 className="display-4 fw-extrabold text-white mb-3">AI Course Catalog</h1>
          <p className="fs-5   mx-auto mb-4" style={{ maxWidth: '650px' }}>
            Choose from industry-verified tracks engineered to take you from foundational concepts to production deployment.
          </p>

          {/* Search & Filter Bar */}
          <div className="row justify-content-center g-3">
            <div className="col-md-6 col-lg-5">
              <div className="input-group">
                <span className="input-group-text bg-black border-secondary   pe-0">
                  <i className="bi bi-search"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control bg-black text-white border-secondary ps-2" 
                  placeholder="Search courses by keyword..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-medium border-0 transition-all ${
                  selectedCategory === cat 
                    ? 'btn-lime' 
                    : 'btn-glass'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE GRID */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course.id} className="col-md-6 col-lg-4">
                  <div className="course-card h-100 d-flex flex-column">
                    <div className="course-img-wrapper">
                      <img src={course.image} alt={course.title} />
                      <span className="position-absolute top-0 end-0 m-3 badge-tag">
                        {course.badge}
                      </span>
                    </div>
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="  small"><i className="bi bi-clock me-1"></i> {course.duration}</span>
                        <span className="text-warning small"><i className="bi bi-star-fill me-1"></i> {course.rating} ({course.reviews})</span>
                      </div>
                      <h4 className="text-white fw-bold mb-2">{course.title}</h4>
                      <p className="  small flex-grow-1 mb-4">
                        {course.description}
                      </p>
                      
                      <div className="d-flex align-items-center justify-content-between border-top border-secondary pt-3 mt-auto">
                        <div>
                          {/* <span className="fw-bold fs-4 text-white">{course.price}</span> */}
                          <span className="  extra-small d-block">{course.level}</span>
                        </div>
                        <div className="d-flex gap-2">
                          <button 
                            onClick={() => setActiveCourseModal(course)} 
                            className="btn btn-sm btn-glass rounded-pill px-3"
                          >
                            Syllabus
                          </button>
                          {/* <button className="btn btn-sm btn-lime rounded-pill px-3">
                            Enroll
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <i className="bi bi-journal-x   display-4 d-block mb-3"></i>
                <h4 className="text-white">No courses match your search criteria</h4>
                <p className=" ">Try adjusting your category filter or search keywords.</p>
                <button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="btn btn-lime rounded-pill px-4">
                  Reset Filters
                </button>
              </div>
            )}
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

export default Course;
