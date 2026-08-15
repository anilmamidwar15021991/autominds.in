import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnrollModal from '../components/EnrollModal';
import SyllabusModal from '../components/SyllabusModal';

import heroBg from '../assets/d55f415d9e752ef2fa7edf6f07afac92.jpg';
import profileAiImg from '../assets/3cdcf1dfaf3e6fc0929d79351259da47.jpg';
import anilImg from '../assets/Mentors/Anilmamidwar.png';
import adityaImg from '../assets/Mentors/aditya.png';
import rajeshImg from '../assets/Mentors/Rajesh_kumar.webp';

gsap.registerPlugin(ScrollTrigger);

const batchSlots = [

  {
    id: 1,
    batchTitle: "Weekday Evening",
    startDate: "16 August 2026",
    schedule: "Monday & Saturday",
    timing: "07:30 PM – 09:00 PM",
    mode: "Live Interactive (Zoom/Meet)",
    duration: "10 Weeks (40+ Hours)",
    statusBadge: "Enrolling Now",
    featured: false
  }
];

const keyHighlights = [
  {
    icon: "bi-cpu-fill",
    title: "Autonomous Multi-Agent Systems",
    desc: "Build self-directed, multi-step LLM agent graphs using LangGraph, Microsoft Semantic Kernel, Python and more."
  },
  {
    icon: "bi-tools",
    title: "Tool Calling & Code Execution",
    desc: "Equip agents with real-world tool execution: REST APIs, SQL databases, Python REPL, and web search."
  },
  {
    icon: "bi-database-fill-check",
    title: "Vector DBs & Hybrid RAG",
    desc: "Master ChromaDB, Qdrant, PGVector with hybrid lexical + semantic search grounding."
  },
  {
    icon: "bi-shield-check",
    title: "Guardrails & Production Evals",
    desc: "Implement NeMo Guardrails, hallucination checks, agent tracing with LangSmith, and CI/CD pipelines."
  },
  {
    icon: "bi-shield-check",
    title: "Monitoring and Observablity",
    desc: " Implement monitoring, observability, and MLOps for AI agents with Opentelemetry,grafana, prometheus."
  }
];

const curriculumModules = [
  {
    week: "Weeks 1–3",
    title: "Python for AI & Foundational LLMs",
    desc: "Master modern async Python, Pydantic data schemas, OpenAI/Anthropic APIs, token economics, and structured outputs.",
    topics: ["Async Python & Generators", "Pydantic V2 Models", "Prompt Engineering Patterns", "Token Optimization & Cost Control"]
  },
  {
    week: "Weeks 4–6",
    title: "Single-Agent Architecture & Tool Calling",
    desc: "Build autonomous single-agent systems capable of reasoning (ReAct), planning, invoking external APIs, and handling exceptions.",
    topics: ["ReAct Framework", "Function Calling & Schemas", "Custom API Integrations", "Error Recovery & Self-Correction"]
  },
  {
    week: "Weeks 7–9",
    title: "Multi-Agent Systems & LangGraph",
    desc: "Design stateful multi-agent workflows with human-in-the-loop controls, cyclical graphs, supervisor architectures, and shared memory.",
    topics: ["LangGraph State Graphs", "Hierarchical CrewAI Teams", "Human-in-the-Loop Approval", "Shared Memory & Checkpointing"]
  },
  {
    week: "Weeks 10–12",
    title: "Enterprise Capstone & Production Deployment",
    desc: "Build an end-to-end production AI workforce, deploy to cloud with Docker/FastAPI, trace with LangSmith, and obtain certification.",
    topics: ["Agentic RAG Pipeline", "FastAPI & Docker Containerization", "LangSmith Tracing & Observability", "Final Capstone Demo & Certification"]
  }
];

const batchFaqs = [
  {
    q: "Are the batch sessions live or recorded?",
    a: "All sessions are 100% LIVE and highly interactive. You can ask questions and code with mentors in real-time. In addition, HD recordings of every class are uploaded within 2 hours for lifetime access."
  },
  {
    q: "What are the prerequisites for the Agentic AI Engineering batch?",
    a: "Basic familiarity with programming (preferably Python or any OOP language) is helpful. We cover advanced Python AI patterns and APIs in the initial foundational weeks."
  },
  {
    q: "Will I get 1-on-1 doubt clearing support?",
    a: "Yes! Every batch includes dedicated daily mentor office hours, a private Discord/WhatsApp community, and 1-on-1 code reviews for your capstone assignments."
  },
  {
    q: "Will I receive a verifiable certificate upon completion?",
    a: "Yes, upon submitting and presenting your capstone agent project, you will earn an industry-verifiable Autominds AI Skill Certificate with a unique credential ID for LinkedIn."
  }
];

const Batch = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState({
    courseName: 'Agentic AI Engineering',
    date: '16 August 2026',
    timing: '10:00 AM to 11:00 AM'
  });

  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-hero', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleOpenEnroll = (batchSlot) => {
    if (batchSlot) {
      setSelectedBatch({
        courseName: 'Agentic AI Engineering',
        date: batchSlot.startDate,
        timing: batchSlot.timing
      });
    }
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="batch-page pt-5 mt-4" ref={heroRef}>
      {/* 1. HERO BANNER */}
      <section className="position-relative py-5 overflow-hidden border-bottom border-secondary bg-dark">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(30px)'
          }}
        />

        <div className="container position-relative py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="hero-tagline-badge mb-3 animate-hero">
                <span className="pulse-dot me-1"></span> Live Interactive Cohort
              </div>
              <h1 className="display-4 fw-extrabold text-white mb-3 animate-hero">
                Agentic AI Engineering <span className="text-lime">Live Batch</span>
              </h1>
              <p className="fs-5 text-white-50 mb-4 animate-hero" style={{ maxWidth: '600px', lineHeight: '1.7' }}>
                Go beyond basic prompts. Learn to engineer autonomous multi-agent workflows, tool calling, state machines with LangGraph, and deploy production-grade AI systems.
              </p>

              {/* Quick Details Pill Badges */}
              <div className="d-flex flex-wrap gap-2 mb-4 animate-hero">
                <div className="badge-pill-custom">
                  <i className="bi bi-calendar-event text-lime"></i> Next Batch: <strong>16 August 2026</strong>
                </div>
                <div className="badge-pill-custom">
                  <i className="bi bi-clock text-lime"></i> Timing: <strong>10:00 AM – 11:00 AM IST</strong>
                </div>
                <div className="badge-pill-custom">
                  <i className="bi bi-broadcast text-lime"></i> Mode: <strong>100% Live Online</strong>
                </div>
                {/* <div className="badge-pill-custom">
                  <i className="bi bi-award text-lime"></i> Certification: <strong>Included</strong>
                </div> */}
              </div>

              {/* CTA Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 pt-2 animate-hero">
                <button
                  type="button"
                  onClick={() => handleOpenEnroll(batchSlots[0])}
                  className="btn-lime fs-5 px-5 py-3 border-0 rounded-pill fw-bold shadow-lg"
                >
                  Enroll for Live Batch <i className="bi bi-arrow-right ms-2"></i>
                </button>

                <a
                  href="https://wa.me/918999442393?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Agentic%20AI%20Live%20Batch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-nav rounded-pill px-4 py-3 text-decoration-none fw-semibold d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-whatsapp fs-5"></i> Chat with Mentor
                </a>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="col-lg-5">
              <div className="glass-panel p-4 p-md-4 rounded-4 border border-secondary shadow-lg position-relative">


                <div className="d-flex align-items-center gap-3 mb-4">
                  <img
                    src={profileAiImg}
                    alt="Agentic AI Course"
                    className="rounded-3 shadow"
                    style={{ width: '85px', height: '85px', objectFit: 'cover' }}
                  />
                  <div>
                    <span className="text-lime fw-bold small text-uppercase tracking-wider">Autominds Flagship</span>
                    <h4 className="text-white fw-bold mb-1">Agentic AI Track</h4>
                    <p className="text-white-50 small mb-0">12 Weeks • Live Mentorship</p>
                  </div>
                </div>

                <div className="border-top border-secondary pt-3 mb-4">
                  <div className="d-flex justify-content-between py-2 border-bottom border-secondary border-opacity-50 text-white-50 small">
                    <span><i className="bi bi-calendar-check text-lime me-2"></i>Batch Start</span>
                    <strong className="text-white">16 August 2026</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-secondary border-opacity-50 text-white-50 small">
                    <span><i className="bi bi-clock-history text-lime me-2"></i>Daily Timing</span>
                    <strong className="text-white">10:00 AM – 11:00 AM</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-secondary border-opacity-50 text-white-50 small">
                    <span><i className="bi bi-laptop text-lime me-2"></i>Format</span>
                    <strong className="text-white">Live Coding + Labs</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-secondary border-opacity-50 text-white-50 small">
                    <span><i className="bi bi-people text-lime me-2"></i>Cohort Size</span>
                    <strong className="text-white">Limited to 25 Seats</strong>
                  </div>
                  <div className="d-flex justify-content-between py-2 text-white-50 small">
                    <span><i className="bi bi-shield-lock text-lime me-2"></i>Doubt Support</span>
                    <strong className="text-white">Daily 1-on-1 Mentor Hours</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenEnroll(batchSlots[0])}
                  className="btn-lime w-100 py-3 fw-bold rounded-pill text-center shadow-lg border-0"
                >
                  Reserve Your Seat Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UPCOMING BATCH SLOTS SECTION */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '650px' }}>
            <span className="hero-tagline-badge mb-2">Available Schedules</span>
            <h2 className="display-6 fw-bold text-white mb-2">Upcoming Batch Schedules</h2>
            <p className="text-white-50">
              Pick a schedule that fits your routine. All batches include identical live curriculum, code assets, and 1-on-1 support.
            </p>
          </div>

          <div className="row g-4" ref={cardsRef}>
            {batchSlots.map((slot) => (
              <div className="col-lg-4 col-md-6" key={slot.id}>
                <div
                  className={`glass-panel p-4 rounded-4 h-100 d-flex flex-column position-relative border ${slot.featured ? 'border-lime shadow-lg' : 'border-secondary'
                    }`}
                  style={{
                    backgroundColor: slot.featured ? 'rgba(210, 251, 82, 0.04)' : 'rgba(255, 255, 255, 0.03)'
                  }}
                >
                  {slot.featured && (
                    <span
                      className="position-absolute top-0 end-0 m-3 badge bg-lime text-black fw-bold px-3 py-1 rounded-pill"
                      style={{ fontSize: '0.75rem' }}
                    >
                      Most Popular
                    </span>
                  )}

                  <div className="mb-3">
                    <span className="badge bg-dark border border-secondary text-white-50 px-3 py-1 rounded-pill small mb-2">
                      {slot.statusBadge}
                    </span>
                    <h4 className="text-white fw-bold mb-1">{slot.batchTitle}</h4>
                    <p className="text-white-50 small mb-0">{slot.schedule}</p>
                  </div>

                  <div className="bg-black bg-opacity-50 p-3 rounded-3 mb-4 border border-secondary border-opacity-50">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-white-50 small"><i className="bi bi-calendar3 text-lime me-2"></i>Date:</span>
                      <strong className="text-white small">{slot.startDate}</strong>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-white-50 small"><i className="bi bi-clock text-lime me-2"></i>Timing:</span>
                      <strong className="text-white small">{slot.timing}</strong>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-white-50 small"><i className="bi bi-hourglass-split text-lime me-2"></i>Duration:</span>
                      <strong className="text-white small">{slot.duration}</strong>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-white-50 small"><i className="bi bi-person-video3 text-lime me-2"></i>Mode:</span>
                      <span className="text-lime fw-semibold small">Live Interactive</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button
                      type="button"
                      onClick={() => handleOpenEnroll(slot)}
                      className={`w-100 py-3 rounded-pill fw-bold border-0 ${slot.featured ? 'btn-lime shadow-lg' : 'btn-glass text-white'
                        }`}
                    >
                      Book Your Seat <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEY HIGHLIGHTS / WHAT YOU'LL BUILD */}
      <section className="py-5 border-top border-secondary bg-black">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '650px' }}>
            <span className="hero-tagline-badge mb-2">Core Engineering Pillars</span>
            <h2 className="display-6 fw-bold text-white mb-2">What You Master in this Batch</h2>
            <p className="text-white-50">
              Transform into a production-ready AI engineer by mastering industry-grade frameworks, autonomous graphs, and tool ecosystems.
            </p>
          </div>

          <div className="row g-4">
            {keyHighlights.map((item, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="glass-panel p-4 rounded-4 h-100 border border-secondary transition-all hover-translate-y">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: '56px', height: '56px', background: 'rgba(210, 251, 82, 0.12)', border: '1px solid #d2fb52' }}
                  >
                    <i className={`bi ${item.icon} text-lime fs-4`}></i>
                  </div>
                  <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                  <p className="text-white-50 small mb-0" style={{ lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. MENTORSHIP & INSTRUCTORS */}
      <section className="py-5 border-top border-secondary bg-black">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '650px' }}>
            <span className="hero-tagline-badge mb-2">Our Mentors</span>
            <h2 className="display-6 fw-bold text-white mb-2">Learn from AI Architects</h2>
            <p className="text-white-50">
              Get trained, reviewed, and mentored by active AI practitioners working on generative models and enterprise agent workflows.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="glass-panel p-4 rounded-4 text-center border border-secondary h-100">
                <img
                  src={anilImg}
                  alt="Anil Mamidwar"
                  className="rounded-circle mb-3 shadow-lg border border-lime p-1"
                  style={{ width: '110px', height: '110px', objectFit: 'cover' }}
                />
                <h4 className="text-white fw-bold mb-1">Anil Mamidwar</h4>
                <p className="text-lime small fw-semibold mb-3">Automation Architect | IIT (AI) </p>
                <p className="text-white-50 small mb-0" style={{ lineHeight: '1.6' }}>
                  10+ years experience building enterprise automation architectures, vector indexing pipelines, and multi-agent production stacks.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-5">
              <div className="glass-panel p-4 rounded-4 text-center border border-secondary h-100">
                <img
                  src={rajeshImg}
                  alt="Rajesh Kumar"
                  className="rounded-circle mb-3 shadow-lg border border-lime p-1"
                  style={{ width: '110px', height: '110px', objectFit: 'cover' }}
                />
                <h4 className="text-white fw-bold mb-1">Rajesh Kumar</h4>
                <h4 className="text-white small mb-1">Guest Mentor</h4>
                <p className="text-lime small fw-semibold mb-3">25+ years of Experience | IIM Alumini | IIT Jodhpur </p>
                <p className="text-white-50 small mb-0" style={{ lineHeight: '1.6' }}>
                  Specializes in Data analysis, Data mining, wrangling and Machine learning model implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-5 border-top border-secondary bg-dark">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="text-center mb-5">
            <span className="hero-tagline-badge mb-2">Got Questions?</span>
            <h2 className="display-6 fw-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-white-50">Everything you need to know about the live batch registration and learning process.</p>
          </div>

          <div className="accordion accordion-flush" id="batchFaqAccordion">
            {batchFaqs.map((faq, idx) => (
              <div className="accordion-item glass-panel border border-secondary mb-3 rounded-3 overflow-hidden" key={idx}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button bg-dark text-white fw-semibold ${idx !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${idx}`}
                  >
                    {faq.q}
                  </button>
                </h2>
                <div
                  id={`faq${idx}`}
                  className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                  data-bs-parent="#batchFaqAccordion"
                >
                  <div className="accordion-body bg-black text-white-50 small" style={{ lineHeight: '1.7' }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll Modal */}
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        batchDetails={selectedBatch}
      />

      {/* Syllabus Modal */}
      {isSyllabusModalOpen && (
        <SyllabusModal
          isOpen={isSyllabusModalOpen}
          onClose={() => setIsSyllabusModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Batch;
