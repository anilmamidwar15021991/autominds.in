import React, { useEffect } from 'react';

const agenticSyllabusData = [
  {
    id: 1,
    moduleNumber: "01",
    tag: "WEEKS 1–3",
    duration: "Weeks 1–3",
    title: "1. Python Programming for AI (Weeks 1–3)",
    goal: "Goal: Build a strong Python foundation.",
    topics: [
      "Python Basics",
      "Variables & Data Types",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "OOP Concepts",
      "File Handling",
      "Exception Handling",
      "Modules & Packages",
      "Iterators & Generators",
      "Decorators",
      "JSON Handling",
      "API Integration",
      "Logging",
      "Git & GitHub",
      "VS Code Setup"
    ]
  },
  {
    id: 2,
    moduleNumber: "02",
    tag: "MODULE 02",
    duration: "13 Topics",
    title: "2. Python Libraries & DSA",
    topics: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Lists",
      "Dictionaries",
      "Strings",
      "Sets",
      "Big O Notation",
      "Binary Search",
      "Sorting",
      "Recursion",
      "Hash Tables",
      "Two Pointer Algorithm"
    ]
  },
  {
    id: 3,
    moduleNumber: "03",
    tag: "MODULE 03",
    duration: "10 Topics",
    title: "3. Mathematics for AI",
    topics: [
      "Linear Algebra",
      "Matrices",
      "Vectors",
      "Tensors",
      "Calculus",
      "Partial Derivatives",
      "Gradients",
      "Probability",
      "Statistics",
      "Optimization"
    ]
  },
  {
    id: 4,
    moduleNumber: "04",
    tag: "MODULE 04",
    duration: "13 Topics",
    title: "4. Machine Learning",
    topics: [
      "Introduction to ML",
      "Types of Machine Learning",
      "Dataset Preparation",
      "Features & Labels",
      "Train/Test Split",
      "Linear Regression",
      "Logistic Regression",
      "Loss Functions",
      "Accuracy",
      "Precision",
      "Recall",
      "F1 Score",
      "Hyperparameter Tuning"
    ]
  },
  {
    id: 5,
    moduleNumber: "05",
    tag: "MODULE 05",
    duration: "8 Topics",
    title: "5. Neural Networks",
    topics: [
      "Perceptron",
      "Multi Layer Perceptron",
      "Activation Functions",
      "Forward Propagation",
      "Backpropagation",
      "Optimizers",
      "SGD",
      "Adam Optimizer"
    ]
  },
  {
    id: 6,
    moduleNumber: "06",
    tag: "MODULE 06",
    duration: "9 Topics",
    title: "6. Deep Learning",
    topics: [
      "PyTorch",
      "Tensor Operations",
      "CNN",
      "RNN",
      "LSTM",
      "Batch Normalization",
      "Dropout",
      "Model Training",
      "TensorBoard"
    ]
  },
  {
    id: 7,
    moduleNumber: "07",
    tag: "MODULE 07",
    duration: "8 Topics",
    title: "7. Transformer Architecture",
    topics: [
      "Self Attention",
      "Multi Head Attention",
      "Positional Encoding",
      "Encoder",
      "Decoder",
      "Residual Connection",
      "Layer Normalization",
      "Masked Attention"
    ]
  },
  {
    id: 8,
    moduleNumber: "08",
    tag: "MODULE 08",
    duration: "10 Topics",
    title: "8. Foundation Models & LLMs",
    topics: [
      "GPT Evolution",
      "Tokenization",
      "Context Window",
      "Scaling Laws",
      "Llama",
      "Mistral",
      "LoRA",
      "QLoRA",
      "PEFT",
      "Fine Tuning"
    ]
  },
  {
    id: 9,
    moduleNumber: "09",
    tag: "MODULE 09",
    duration: "12 Topics",
    title: "9. Prompt Engineering",
    topics: [
      "Prompt Basics",
      "Zero Shot Prompting",
      "Few Shot Prompting",
      "Chain of Thought",
      "ReAct Prompting",
      "System Prompt",
      "Temperature",
      "Top-k",
      "Top-p",
      "Structured Output",
      "Pydantic",
      "Prompt Evaluation"
    ]
  },
  {
    id: 10,
    moduleNumber: "10",
    tag: "MODULE 10",
    duration: "9 Topics",
    title: "10. Embeddings & Vector Databases",
    topics: [
      "Embeddings",
      "Cosine Similarity",
      "Euclidean Distance",
      "Chunking",
      "FAISS",
      "ChromaDB",
      "Pinecone",
      "pgvector",
      "Vector Search"
    ]
  },
  {
    id: 11,
    moduleNumber: "11",
    tag: "MODULE 11",
    duration: "10 Topics",
    title: "11. Retrieval Augmented Generation (RAG)",
    topics: [
      "RAG Architecture",
      "Data Ingestion",
      "Document Loaders",
      "Parsing PDFs",
      "Retrieval",
      "Reranking",
      "Guardrails",
      "RAG Evaluation",
      "TruLens",
      "Ragas"
    ]
  },
  {
    id: 12,
    moduleNumber: "12",
    tag: "MODULE 12",
    duration: "8 Topics",
    title: "12. Advanced RAG",
    topics: [
      "Hybrid Search",
      "BM25",
      "Query Expansion",
      "Cross Encoder",
      "Multi Vector Retrieval",
      "Self RAG",
      "Graph RAG",
      "Knowledge Graph"
    ]
  },
  {
    id: 13,
    moduleNumber: "13",
    tag: "MODULE 13",
    duration: "9 Topics",
    title: "13. LangChain",
    topics: [
      "LCEL",
      "Chains",
      "Memory",
      "Prompt Templates",
      "Output Parsers",
      "Callbacks",
      "LangSmith",
      "Agents",
      "Custom Tools"
    ]
  },
  {
    id: 14,
    moduleNumber: "14",
    tag: "MODULE 14",
    duration: "8 Topics",
    title: "14. LangGraph",
    topics: [
      "State Graphs",
      "Nodes",
      "Edges",
      "Routing",
      "Checkpoints",
      "Human in the Loop",
      "Streaming",
      "State Management"
    ]
  },
  {
    id: 15,
    moduleNumber: "15",
    tag: "MODULE 15",
    duration: "9 Topics",
    title: "15. Agentic AI",
    topics: [
      "AI Agents",
      "CrewAI",
      "AutoGen",
      "Multi Agent Systems",
      "Planning",
      "Tool Calling",
      "Memory",
      "Self Reflection",
      "Goal Decomposition"
    ]
  },
  {
    id: 16,
    moduleNumber: "16",
    tag: "MODULE 16",
    duration: "9 Topics",
    title: "16. Production AI",
    topics: [
      "FastAPI",
      "Docker",
      "CI/CD",
      "AWS Deployment",
      "Monitoring",
      "Prometheus",
      "AI Firewalls",
      "Cost Optimization",
      "Production APIs"
    ]
  }
];

const rpaSyllabusData = [
  {
    id: 1,
    moduleNumber: "01",
    tag: "MODULE 01",
    duration: "Foundations",
    title: "Module 1 — Introduction to RPA",
    goal: "Goal: Understand core concepts of enterprise automation and RPA market landscape.",
    topics: [
      "What is Automation?",
      "What is RPA?",
      "RPA Market Overview",
      "Career Opportunities in RPA",
      "Understanding Low-Code / No-Code Platforms"
    ]
  },
  {
    id: 2,
    moduleNumber: "02",
    tag: "MODULE 02",
    duration: "UiPath Studio",
    title: "Module 2 — UiPath Fundamentals",
    goal: "Goal: Master UiPath Studio setup, workflow design, and core activities.",
    topics: [
      "Installing UiPath Studio",
      "Understanding UiPath Interface",
      "Variables & Data Types",
      "Sequences & Flowcharts",
      "Input & Output Activities"
    ]
  },
  {
    id: 3,
    moduleNumber: "03",
    tag: "MODULE 03",
    duration: "Excel & Data",
    title: "Module 3 — Excel Automation",
    goal: "Goal: Automate spreadsheets, data extraction, calculations, and reporting.",
    topics: [
      "Reading & Writing Excel Files",
      "Data Manipulation",
      "Filtering & Formatting",
      "Excel-Based Automation Projects"
    ]
  },
  {
    id: 4,
    moduleNumber: "04",
    tag: "MODULE 04",
    duration: "Browser & Scraping",
    title: "Module 4 — Web Automation",
    goal: "Goal: Automate web browsers, forms, logins, and structured scraping.",
    topics: [
      "Browser Automation",
      "Form Filling Automation",
      "Login Automation",
      "Data Extraction",
      "Web Scraping"
    ]
  },
  {
    id: 5,
    moduleNumber: "05",
    tag: "MODULE 05",
    duration: "Email Flows",
    title: "Module 5 — Email Automation",
    goal: "Goal: Build automated email sending, inbox parsing, and attachment processing.",
    topics: [
      "Sending Emails",
      "Reading Emails",
      "Attachment Handling",
      "Automated Notifications"
    ]
  },
  {
    id: 6,
    moduleNumber: "06",
    tag: "MODULE 06",
    duration: "PDF & OCR",
    title: "Module 6 — PDF & File Automation",
    goal: "Goal: Extract data from PDFs, scanned documents, and organize file systems.",
    topics: [
      "PDF Data Extraction",
      "File Handling",
      "Folder Automation",
      "File Renaming & Organization"
    ]
  },
  {
    id: 7,
    moduleNumber: "07",
    tag: "MODULE 07",
    duration: "REFramework",
    title: "Module 7 — Advanced UiPath Concepts",
    goal: "Goal: Implement enterprise error handling, debugging, queues, and REFramework.",
    topics: [
      "Exception Handling",
      "Debugging",
      "Logging",
      "Queue Management",
      "REFramework Basics"
    ]
  },
  {
    id: 8,
    moduleNumber: "08",
    tag: "MODULE 08",
    duration: "Real-Time Bots",
    title: "Module 8 — Real-Time Projects",
    goal: "Goal: Build end-to-end industry bots for real-world enterprise operations.",
    topics: [
      "Invoice Automation",
      "Report Generation Bot",
      "Employee Onboarding Automation",
      "Email Processing Bot"
    ]
  },
  {
    id: 9,
    moduleNumber: "09",
    tag: "MODULE 09",
    duration: "Career Launch",
    title: "Module 9 — Career Preparation",
    goal: "Goal: Optimize resume, profiles, and ace technical & HR interviews.",
    topics: [
      "Resume Building",
      "LinkedIn Optimization",
      "Naukri Profile Setup",
      "Mock Interviews",
      "Technical Interview Preparation"
    ]
  },
  {
    id: 10,
    moduleNumber: "10",
    tag: "MODULE 10",
    duration: "Certification",
    title: "Module 10 — Certification Preparation",
    goal: "Goal: Complete practice tests and obtain official UiPath Associate certification.",
    topics: [
      "UiPath Associate Exam Guidance",
      "Mock Tests",
      "Important Questions",
      "Certification Preparation Support"
    ]
  }
];

const SyllabusModal = ({ course, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (course || isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, isOpen, onClose]);

  if (!course && !isOpen) return null;

  const isRpa = Boolean(
    course?.category?.toLowerCase().includes('rpa') ||
    course?.title?.toLowerCase().includes('rpa') ||
    course?.id === 2
  );

  const activeSyllabus = isRpa ? rpaSyllabusData : agenticSyllabusData;
  const courseDetails = course || {
    title: isRpa ? "Master Robotic Process Automation (RPA)" : "Master Agentic AI Engineering",
    category: isRpa ? "Robotic Process Automation" : "Agentic AI Engineering",
    description: isRpa
      ? "Master enterprise RPA tools like UiPath, Power Automate, and AI Document Understanding to build end-to-end software bots that automate complex business processes."
      : "Build intelligent AI agents that can reason, use tools, access knowledge, make decisions, and automate real-world workflows."
  };

  const totalTopics = activeSyllabus.reduce((acc, curr) => acc + curr.topics.length, 0);

  return (
    <div className="syllabus-modal-overlay" onClick={onClose}>
      <div className="syllabus-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* HEADER SECTION */}
        <div className="syllabus-modal-header d-flex justify-content-between align-items-start">
          <div className="pe-4">
            <span className="hero-tagline-badge py-1 px-3 mb-2 d-inline-block">
              {courseDetails.category || (isRpa ? 'Robotic Process Automation' : 'Agentic AI Engineering')}
            </span>
            <h3 className="modal-title fw-bold text-white mb-2" style={{ fontSize: '1.65rem' }}>
              {courseDetails.title}
            </h3>
            <p className="text-light-muted mb-0 small" style={{ maxWidth: '680px', lineHeight: '1.5' }}>
              {courseDetails.description}
            </p>
          </div>
          <button 
            type="button" 
            className="btn-close btn-close-white ms-auto" 
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>

        {/* BODY SECTION (Timeline Layout) */}
        <div className="syllabus-modal-body">
          <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-secondary border-opacity-25">
            <h5 className="fw-bold text-white mb-0 font-heading">
              <i className="bi bi-journal-code me-2" style={{ color: '#00ab6b' }}></i>
              Curriculum Modules <span className="fs-6 ms-2" style={{ color: '#00ab6b' }}>({activeSyllabus.length} Modules)</span>
            </h5>
            <span className="badge bg-dark border border-secondary text-light-muted rounded-pill px-3 py-2 small">
              {totalTopics}+ Topics Covered
            </span>
          </div>

          <div className="syllabus-timeline-wrapper">
            {/* Green Continuous Timeline Line */}
            <div className="syllabus-timeline-line"></div>

            {/* List of Modules */}
            {activeSyllabus.map((module) => (
              <div key={module.id} className="syllabus-card-item">
                {/* Node Circle on Timeline */}
                <div className="syllabus-timeline-node"></div>

                {/* Module Card */}
                <div className="syllabus-module-card">
                  {/* Top Header Row */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="syllabus-card-tag">{module.tag}</span>
                    <span className="syllabus-card-badge">{module.duration}</span>
                  </div>

                  {/* Module Title */}
                  <h4 className="syllabus-card-title">{module.title}</h4>

                  {/* Goal (if present) */}
                  {module.goal && (
                    <p className="syllabus-card-goal">{module.goal}</p>
                  )}

                  {/* Topics Pills */}
                  <div className="d-flex flex-wrap gap-2 mt-3 position-relative" style={{ zIndex: 1 }}>
                    {module.topics.map((topic, index) => (
                      <span 
                        key={index} 
                        className={index % 2 === 0 ? "syllabus-topic-pill" : "syllabus-topic-pill-alt"}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Big Watermark Number at Bottom Right */}
                  <div className="syllabus-card-watermark">
                    {module.moduleNumber}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="syllabus-modal-footer p-3 px-4 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center bg-dark bg-opacity-50">
          <span className="text-light-muted small d-none d-sm-inline">
            <i className="bi bi-check2-circle me-1" style={{ color: '#00ab6b' }}></i> Full Hands-on {isRpa ? 'RPA' : 'AI'} Curriculum
          </span>
          <button 
            type="button" 
            className="btn btn-glass rounded-pill px-4 py-2 text-white ms-auto" 
            onClick={onClose}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default SyllabusModal;

