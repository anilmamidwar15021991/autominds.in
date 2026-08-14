import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import workflowImg from '../assets/27e5401d70d844af82e09bcf99943593.jpg';
import profileAiImg from '../assets/3cdcf1dfaf3e6fc0929d79351259da47.jpg';
import networkAiImg from '../assets/3b584eaf8444c8ade13d5ff7745a40cc.jpg';
import heroBg from '../assets/d55f415d9e752ef2fa7edf6f07afac92.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Building Multi-Agent Workflows with LangGraph & CrewAI in 2026",
    category: "Autonomous Agents",
    date: "Aug 02, 2026",
    readTime: "5 min read",
    author: "Anil Mamidwar",
    authorTitle: "M.Tech in AI - IIT Jodhpur",
    image: workflowImg,
    snippet: "A deep dive into stateful agent graphs, loop termination criteria, and multi-tool orchestration patterns for real enterprise apps.",
    content: {
      intro: "As AI systems evolve from single-prompt completions to complex multi-step workflows, agentic architectures have become the gold standard in production systems. In 2026, combining graph-based state machines (LangGraph) with role-playing agent squads (CrewAI) allows software teams to build self-healing, reliable automated workflows.",
      sections: [
        {
          heading: "Core Architecture: State Graphs vs Sequential Chains",
          text: "Traditional LLM chains operate strictly sequentially. If step 2 fails, the entire pipeline halts. LangGraph introduces stateful cyclic graphs where agents can backtrack, critique their own outputs, and invoke external tools until defined exit criteria are met.",
          code: `from langgraph.graph import StateGraph, END
from typing import TypedDict, List

class AgentState(TypedDict):
    query: str
    tool_output: List[str]
    retry_count: int
    is_complete: bool

# Initialize stateful graph
workflow = StateGraph(AgentState)
workflow.add_node("researcher", research_agent)
workflow.add_node("coder", coding_agent)
workflow.add_conditional_edges("coder", evaluate_output)`
        },
        {
          heading: "Key Takeaways for Enterprise AI Engineers",
          bullets: [
            "Always set strict max-recursion limits to prevent infinite token loops.",
            "Maintain deterministic state persistence in PostgreSQL or Redis for session recovery.",
            "Implement Human-in-the-loop (HITL) approval nodes before running destructive database or API actions."
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "Why RAG isn't Dead: Hybrid Vector Search & Re-ranking Best Practices",
    category: "LLM Systems",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    author: "Aditya Tapadiya",
    authorTitle: "Ex-Google & AI - IIT Jodhpur",
    image: profileAiImg,
    snippet: "Discover how combining dense vector embeddings with BM25 keyword matching and cross-encoder re-rankers increases retrieval precision by 40%.",
    content: {
      intro: "Critics often claim that ultra-long context windows will render Retrieval-Augmented Generation (RAG) obsolete. However, in production enterprise environments, sending 1 million tokens on every query is prohibitively expensive and introduces high latency. Hybrid RAG remains essential for precision and cost scalability.",
      sections: [
        {
          heading: "The Power of Hybrid Retrieval",
          text: "Pure vector similarity search using embeddings often misses exact keyword matches (like serial numbers, SKU IDs, or specific code symbols). Combining BM25 sparse keyword search with dense vector search (using Reciprocal Rank Fusion) ensures both semantic understanding and exact keyword recall.",
          code: `// Reciprocal Rank Fusion (RRF) Scoring Example
function computeRRFScore(vectorRank, bm25Rank, k = 60) {
  const vectorScore = 1 / (k + vectorRank);
  const bm25Score = 1 / (k + bm25Rank);
  return vectorScore + bm25Score;
}`
        },
        {
          heading: "Re-ranking with Cross-Encoders",
          bullets: [
            "Pass top 50 retrieved candidates through a dedicated Cross-Encoder model (e.g. Cohere Rerank or BGE-Reranker).",
            "Improves retrieval precision from 65% to over 92% by scoring exact query-document context pairs.",
            "Reduces LLM hallucination rate significantly while trimming prompt token overhead."
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "How We Automated 80% of CI/CD Release Testing using AI Workers",
    category: "Automation",
    date: "Jul 15, 2026",
    readTime: "6 min read",
    author: "Marcus Vance",
    authorTitle: "Automation Lead",
    image: heroBg,
    snippet: "An architectural breakdown of our internal deployment bots that run test suites, summarize code diffs, and generate pull request comments.",
    content: {
      intro: "Manual code review and QA testing consume hundreds of engineering hours every sprint. By building automated AI release workers that execute inside GitHub Actions pipelines, Autominds Academy reduced release verification time from 4 hours to under 6 minutes.",
      sections: [
        {
          heading: "Automated Release Pipeline Architecture",
          text: "Our release pipeline triggers automated AI bots upon pull request creation. The Diff Parser extracts function changes, the Test Generator creates targeted unit tests, and the Security Worker checks for vulnerabilities.",
          code: `name: AI Release Verification
on: [pull_request]
jobs:
  ai-test-audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Autominds AI Release Worker
        run: python -m ai_release_worker --diff \${{ github.event.pull_request.diff_url }}`
        },
        {
          heading: "Production Impact & Results",
          bullets: [
            "80% reduction in manual regression QA testing time.",
            "Zero leaked API keys or OWASP vulnerabilities across 50+ microservices.",
            "Instant automated PR summaries for engineering managers."
          ]
        }
      ]
    }
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePost, setActivePost] = useState(null);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.snippet.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenPost = (post) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePost = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-page pt-5 mt-4">
      {/* IF A POST IS SELECTED: SHOW FULL ARTICLE DETAILS PAGE */}
      {activePost ? (
        <div className="container py-4 my-3">
          {/* Back Button */}
          <button
            onClick={handleClosePost}
            className="btn btn-glass text-white rounded-pill mb-4 px-4 d-inline-flex align-items-center gap-2"
          >
            <i className="bi bi-arrow-left fs-5"></i>
            <span>Back to All Articles</span>
          </button>

          {/* Article Header & Title */}
          <div className="max-w-4xl mx-auto">
            <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <span className="badge-tag">{activePost.category}</span>
              <span className="extra-small text-light-muted">
                <i className="bi bi-calendar-event me-1"></i> {activePost.date}
              </span>
              <span className="extra-small text-light-muted">
                <i className="bi bi-clock me-1"></i> {activePost.readTime}
              </span>
            </div>

            <h1 className="display-5 fw-extrabold text-white mb-4" style={{ lineHeight: 1.25 }}>
              {activePost.title}
            </h1>

            {/* Author Bar */}
            <div className="d-flex align-items-center gap-3 p-3 bg-glass rounded-4 border border-secondary mb-4">
              <div className="p-2 bg-dark rounded-circle border border-secondary text-lime fw-bold">
                <i className="bi bi-person-circle fs-3" style={{ color: '#d2fb52' }}></i>
              </div>
              <div>
                <strong className="text-white d-block fs-6">{activePost.author}</strong>
                <span className="extra-small text-light-muted">{activePost.authorTitle}</span>
              </div>
            </div>

            {/* Main Cover Image */}
            <div className="rounded-4 overflow-hidden mb-5 border border-secondary shadow-lg" style={{ maxHeight: '420px' }}>
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            {/* Article Body Content */}
            <div className="glass-panel p-4 p-md-5 rounded-4 border border-secondary mb-5">
              <p className="fs-5 text-light mb-4" style={{ lineHeight: 1.8 }}>
                {activePost.content.intro}
              </p>

              {activePost.content.sections.map((sec, idx) => (
                <div key={idx} className="mb-5">
                  <h3 className="text-white fw-bold mb-3 font-heading fs-4" style={{ color: '#d2fb52' }}>
                    {sec.heading}
                  </h3>

                  {sec.text && (
                    <p className="fs-6 text-light-muted mb-3" style={{ lineHeight: 1.75 }}>
                      {sec.text}
                    </p>
                  )}

                  {sec.code && (
                    <div className="bg-dark p-3 rounded-3 border border-secondary mb-4 overflow-x-auto">
                      <pre className="text-lime m-0 font-monospace small" style={{ color: '#d2fb52' }}>
                        <code>{sec.code}</code>
                      </pre>
                    </div>
                  )}

                  {sec.bullets && (
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-3">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="d-flex align-items-start gap-2 text-light-muted fs-6">
                          <i className="bi bi-check-circle-fill fs-6 mt-1" style={{ color: '#d2fb52' }}></i>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Related CTA & Back Action */}
            <div className="glass-panel p-4 text-center rounded-4 border border-secondary mb-4">
              <h4 className="text-white fw-bold mb-2">Want to build systems like this?</h4>
              <p className="text-light-muted small mb-4">
                Master hands-on AI engineering, RAG pipelines, and Agentic workflows with Autominds Academy.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/courses" className="btn-lime px-4 py-2 text-decoration-none">
                  Explore Courses <i className="bi bi-arrow-right ms-1"></i>
                </Link>
                <button onClick={handleClosePost} className="btn-glass px-4 py-2">
                  Back to Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ORIGINAL BLOG LIST VIEW */
        <>
          {/* HEADER BANNER */}
          <section className="py-5 text-center bg-dark border-bottom border-secondary">
            <div className="container py-3">
              <div className="hero-tagline-badge mb-3">
                <span>Autominds Insights & Engineering</span>
              </div>
              <h1 className="display-4 fw-extrabold text-white mb-3">AI Blog & Articles</h1>
              <p className="fs-5 mx-auto mb-4" style={{ maxWidth: '650px' }}>
                Tutorials, architectural breakdowns, and prompt engineering strategies written by practitioners.
              </p>

              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <div className="input-group">
                    <span className="input-group-text bg-black border-secondary pe-0">
                      <i className="bi bi-search text-secondary"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control bg-black text-white border-secondary ps-2"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ARTICLES GRID */}
          <section className="py-5">
            <div className="container">
              <div className="row g-4">
                {filteredPosts.map(post => (
                  <div key={post.id} className="col-md-4">
                    <div className="glass-panel p-4 h-100 d-flex flex-column hover-lift">
                      <div className="position-relative overflow-hidden rounded-3 mb-3" style={{ height: '220px' }}>
                        <img src={post.image} alt={post.title} className="w-100 h-100 object-fit-cover" />
                        <span className="position-absolute top-0 start-0 m-3 badge-tag">
                          {post.category}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between extra-small mb-2 text-light-muted">
                        <span><i className="bi bi-calendar-event me-1"></i> {post.date}</span>
                        <span><i className="bi bi-clock me-1"></i> {post.readTime}</span>
                      </div>
                      <h3 className="text-white fw-bold fs-4 mb-2">{post.title}</h3>
                      <p className="small text-light-muted flex-grow-1 mb-4">{post.snippet}</p>

                      <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-3 mt-auto">
                        <span className="text-white small fw-medium">By {post.author}</span>
                        <button
                          onClick={() => handleOpenPost(post)}
                          className="btn btn-sm btn-lime rounded-pill px-3"
                        >
                          Read Article <i className="bi bi-arrow-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Blog;
