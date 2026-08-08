import React, { useEffect } from 'react';

const syllabusData = [
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

const SyllabusModal = ({ course, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!course) return null;

  return (
    <div className="syllabus-modal-overlay" onClick={onClose}>
      <div className="syllabus-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* HEADER SECTION (Matching Image 1) */}
        <div className="syllabus-modal-header d-flex justify-content-between align-items-start">
          <div className="pe-4">
            <span className="hero-tagline-badge py-1 px-3 mb-2 d-inline-block">
              {course.category || 'Autonomous Agents'}
            </span>
            <h3 className="modal-title fw-bold text-white mb-2" style={{ fontSize: '1.65rem' }}>
              {course.title || 'Autonomous AI Agents Masterclass'}
            </h3>
            <p className="text-light-muted mb-0 small" style={{ maxWidth: '680px', lineHeight: '1.5' }}>
              {course.description || 'Build self-correcting multi-agent teams using LangGraph, CrewAI, and custom tool integrations.'}
            </p>
          </div>
          <button 
            type="button" 
            className="btn-close btn-close-white ms-auto" 
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>

        {/* BODY SECTION (Timeline Layout Matching Image 2) */}
        <div className="syllabus-modal-body">
          <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-secondary border-opacity-25">
            <h5 className="fw-bold text-white mb-0 font-heading">
              <i className="bi bi-journal-code me-2" style={{ color: '#00ab6b' }}></i>
              Curriculum Modules <span className="fs-6 ms-2" style={{ color: '#00ab6b' }}>(16 Modules)</span>
            </h5>
            <span className="badge bg-dark border border-secondary text-light-muted rounded-pill px-3 py-2 small">
              150+ Topics Covered
            </span>
          </div>

          <div className="syllabus-timeline-wrapper">
            {/* Green Continuous Timeline Line */}
            <div className="syllabus-timeline-line"></div>

            {/* List of 16 Modules */}
            {syllabusData.map((module) => (
              <div key={module.id} className="syllabus-card-item">
                {/* Node Circle on Timeline */}
                <div className="syllabus-timeline-node"></div>

                {/* Module Card (Matching Image 2 Design) */}
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

                  {/* Big Watermark Number at Bottom Right (Matching Image 2 '01', '02'...) */}
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
            <i className="bi bi-check2-circle me-1" style={{ color: '#00ab6b' }}></i> Full Hands-on AI Curriculum
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
