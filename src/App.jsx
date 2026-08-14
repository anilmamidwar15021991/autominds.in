import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppBtn from './components/WhatsAppBtn';
import Home from './pages/Home';
import About from './pages/About';
import AgenticAI from './pages/AgenticAI';
import Rpa from './pages/Rpa';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Batch from './pages/Batch';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/agentic-ai" element={<AgenticAI />} />
            <Route path="/rpa" element={<Rpa />} />
            <Route path="/courses" element={<Navigate to="/agentic-ai" replace />} />
            <Route path="/course" element={<Navigate to="/agentic-ai" replace />} />
            <Route path="/batch" element={<Batch />} />
            <Route path="/batches" element={<Navigate to="/batch" replace />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppBtn />
      </div>
    </Router>
  );
}

export default App;
