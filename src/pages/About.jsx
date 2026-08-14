import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import profileAiImg from '../assets/3cdcf1dfaf3e6fc0929d79351259da47.jpg';
import anilmentor from '../assets/Mentors/Anilmamidwar.png';
import adityamentor from '../assets/Mentors/aditya.png';

const whatMakesUsDifferent = [
  {
    icon: 'bi-journal-code',
    title: 'Industry-Oriented Curriculum',
    desc: 'Designed for real-world AI engineering'
  },
  {
    icon: 'bi-camera-video-fill',
    title: 'Live Interactive Classes',
    desc: 'Hands-on practical sessions'
  },
  {
    icon: 'bi-boxes',
    title: 'Two Capstone Projects',
    desc: 'Production-grade AI applications'
  },
  {
    icon: 'bi-check2-square',
    title: 'Assignments & Assessments',
    desc: 'Daily coding & weekly assessments'
  },
  {
    icon: 'bi-file-earmark-person-fill',
    title: 'Portfolio & Profile Guidance',
    desc: 'Resume, GitHub & LinkedIn optimization'
  },
  {
    icon: 'bi-briefcase-fill',
    title: 'Interview Preparation',
    desc: 'Mock & technical interview prep'
  },
  {
    icon: 'bi-person-check-fill',
    title: '1-on-1 Mentorship',
    desc: 'Throughout your learning journey'
  },
  {
    icon: 'bi-rocket-takeoff-fill',
    title: 'Placement Assistance',
    desc: 'Career-focused training & referrals'
  }
];

const About = () => {
  const pageRef = useRef(null);
  const cardsRef = useRef(null);
  const mentorsRef = useRef(null);
  const diffRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out', delay: 0.2 }
        );
      }

      if (diffRef.current) {
        gsap.fromTo(
          Array.from(diffRef.current.children),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
        );
      }

      if (mentorsRef.current) {
        gsap.fromTo(
          Array.from(mentorsRef.current.children),
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.4)', delay: 0.4 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page pt-5 mt-4 text-white" ref={pageRef}>
      {/* HERO / ABOUT US SECTION */}
      <section className="py-5 text-center position-relative">
        <div className="container py-4">
          <div className="hero-tagline-badge mb-3">
            <span>About Auto Minds Academy</span>
          </div>
          <h1 className="display-4 fw-extrabold text-white mb-4">
            Empowering the Next Generation of <span style={{ color: '#d2fb52' }}>AI Engineers</span>
          </h1>

          <div className="max-w-3xl mx-auto mb-5 text-start">
            <p className="fs-5 mb-4 text-light" style={{ lineHeight: 1.75 }}>
              At <strong>Auto Minds Academy</strong>, we believe that the future belongs to those who can build intelligent systems—not just use them. Our mission is to transform students, fresh graduates, and working professionals into industry-ready Generative AI and Agentic AI Engineers through practical, project-based learning.
            </p>

            <p className="fs-6 mb-4 text-light-muted" style={{ lineHeight: 1.7 }}>
              Our curriculum is carefully designed to bridge the gap between academic knowledge and real-world AI development. From mastering Python and Machine Learning fundamentals to building production-ready AI agents, RAG applications, and multi-agent systems, every module is focused on developing practical engineering skills that today's companies demand.
            </p>

            <p className="fs-6 mb-0 text-light-muted" style={{ lineHeight: 1.7 }}>
              Unlike traditional courses that emphasize theory, our program is built around live coding sessions, hands-on labs, real-world projects, assignments, interview preparation, and continuous mentorship. Students gain experience with the latest AI technologies while building a professional portfolio that showcases their capabilities.
            </p>
          </div>

          <div className="row g-4 justify-content-center mb-5" ref={cardsRef}>
            <div className="col-md-4">
              <div className="glass-panel p-4 h-100 text-start">
                <div className="p-3 bg-dark rounded-circle d-inline-block border border-secondary mb-3">
                  <i className="bi bi-lightning-charge-fill text-lime fs-4" style={{ color: '#d2fb52' }}></i>
                </div>
                <h4 className="text-white fw-bold">Speed to Mastery</h4>
                <p className="small mb-0 text-light-muted">
                  Cut through academic noise with streamlined, project-first modules designed for immediate deployment.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-panel p-4 h-100 text-start">
                <div className="p-3 bg-dark rounded-circle d-inline-block border border-secondary mb-3">
                  <i className="bi bi-code-slash text-lime fs-4" style={{ color: '#d2fb52' }}></i>
                </div>
                <h4 className="text-white fw-bold">Real Skills, Real Code</h4>
                <p className="small mb-0 text-light-muted">
                  Build full-stack AI agents, vector databases, fine-tuned LLMs, and automated API services in your browser.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-panel p-4 h-100 text-start">
                <div className="p-3 bg-dark rounded-circle d-inline-block border border-secondary mb-3">
                  <i className="bi bi-people-fill text-lime fs-4" style={{ color: '#d2fb52' }}></i>
                </div>
                <h4 className="text-white fw-bold">Global AI Network</h4>
                <p className="small mb-0 text-light-muted">
                  Connect with over 15,000+ AI practitioners, share project repositories, and collaborate on cutting-edge research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT? */}
      <section className="py-5 my-3 position-relative">
        <div className="container">
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <span className="hero-tagline-badge mb-2">Key Advantages</span>
            <h2 className="display-6 fw-bold text-white mb-3">
              What Makes Us <span style={{ color: '#d2fb52' }}>Different?</span>
            </h2>
            <p className="text-light-muted fs-6">
              Industry-oriented ecosystem designed to turn learners into confident AI Engineers.
            </p>
          </div>

          <div className="row g-4" ref={diffRef}>
            {whatMakesUsDifferent.map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div className="glass-panel p-4 h-100 text-start border-top border-2" style={{ borderTopColor: idx % 2 === 0 ? '#d2fb52' : '#38bdf8' }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="p-2 bg-dark rounded-3 border border-secondary">
                      <i className={`bi ${item.icon} fs-4`} style={{ color: idx % 2 === 0 ? '#d2fb52' : '#38bdf8' }}></i>
                    </div>
                  </div>
                  <h5 className="fw-bold text-white mb-2 font-heading" style={{ fontSize: '1rem' }}>
                    {item.title}
                  </h5>
                  <p className="extra-small text-light-muted mb-0" style={{ lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="py-5 my-3 position-relative">
        <div className="container">
          <div className="row g-4">
            {/* Vision */}
            <div className="col-md-6">
              <div className="glass-panel p-4 p-md-5 h-100 border-top border-3" style={{ borderTopColor: '#d2fb52' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 bg-dark rounded-circle border border-secondary">
                    <i className="bi bi-eye-fill fs-3" style={{ color: '#d2fb52' }}></i>
                  </div>
                  <h3 className="text-white fw-bold m-0 font-heading">Our Vision</h3>
                </div>
                <p className="fs-6 text-light-muted mb-0" style={{ lineHeight: 1.75 }}>
                  To create highly skilled AI engineers who can confidently design, develop, and deploy intelligent applications that solve real business problems using the latest advancements in Generative AI and Agentic AI.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-md-6">
              <div className="glass-panel p-4 p-md-5 h-100 border-top border-3" style={{ borderTopColor: '#38bdf8' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 bg-dark rounded-circle border border-secondary">
                    <i className="bi bi-bullseye fs-3" style={{ color: '#38bdf8' }}></i>
                  </div>
                  <h3 className="text-white fw-bold m-0 font-heading">Our Mission</h3>
                </div>
                <p className="fs-6 text-light-muted mb-0" style={{ lineHeight: 1.75 }}>
                  To provide accessible, high-quality AI education that combines strong technical foundations with practical implementation, enabling learners to build innovative AI solutions and accelerate their careers in the rapidly evolving world of Artificial Intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR / FOUNDER SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="hero-tagline-badge">Expert Instruction</span>
            <h2 className="display-6 fw-bold text-white">Meet Your Lead Mentors</h2>
            <p className="text-light-muted">Industry practitioners with experience in deploying production AI.</p>
          </div>

          <div className="row g-4 justify-content-center" ref={mentorsRef}>
            <div className="col-md-6 col-lg-4">
              <div className="glass-panel p-4 text-center h-100">
                <div className="mx-auto mb-3" style={{ width: '250px', height: '250px' }}>
                  <img
                    src={anilmentor}
                    alt="Anil Mamidwar"
                    className="rounded-circle border border-secondary w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h5 className="text-white fw-bold mb-1 font-heading">Anil Mamidwar</h5>
                <p className="extra-small mb-2 text-lime fw-semibold" style={{ color: '#d2fb52' }}>M.Tech in AI - IIT Jodhpur</p>
                <p className="small text-light-muted mb-0">10+ Years of expertise in Automation, AI and RPA.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="glass-panel p-4 text-center h-100">
                <div className="mx-auto mb-3" style={{ width: '250px', height: '250px' }}>
                  <img
                    src={adityamentor}
                    alt="Aditya Tapadia"
                    className="rounded-circle border border-secondary w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h5 className="text-white fw-bold mb-1 font-heading">Aditya Tapadia</h5>
                <p className="extra-small mb-2 text-lime fw-semibold" style={{ color: '#d2fb52' }}>Ex-Google & AI - IIT Jodhpur</p>
                <p className="small text-light-muted mb-0">10 Years of Industry Experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN THE FUTURE OF AI - CTA */}
      <section className="py-5 my-4">
        <div className="container">
          <div className="glass-panel p-5 text-center position-relative overflow-hidden">
            <div className="position-relative z-1 max-w-3xl mx-auto py-3">
              <span className="hero-tagline-badge mb-3">Start Your AI Journey</span>
              <h2 className="display-5 fw-bold text-white mb-3">
                Join the Future of AI
              </h2>
              <p className="fs-6 text-light-muted mb-4 pe-lg-4 ps-lg-4" style={{ lineHeight: 1.7 }}>
                Whether you're a student beginning your AI journey, a software developer looking to upskill, or a professional planning a career transition, Auto Minds Academy provides the knowledge, mentorship, and practical experience needed to become a confident AI Engineer.
              </p>
              <div>
                <Link to="/courses" className="btn-lime fs-6 px-5 py-3 text-decoration-none">
                  Explore AI Courses <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
