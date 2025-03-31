import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
        {/* Navigation Bar */}
        <nav className="bg-gray-800/90 backdrop-blur-sm px-4 py-4 sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block md:hidden text-white hover:text-blue-400 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
              <span className="text-xl font-semibold">Louis Massingham</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-white hover:text-blue-400 transition">Home</Link>
              <Link to="/projects" className="text-white hover:text-blue-400 transition">Projects</Link>
              <Link to="/contact" className="text-white hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-900 to-black z-[100] md:hidden backdrop-blur-sm">
              <div className="p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-teal-400 transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
                <Link 
                  to="/" 
                  className="text-2xl text-teal-400 font-bold transition-all px-10 py-3 rounded-md bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 border-l-4 border-teal-400 hover:border-blue-400 shadow-lg hover:shadow-teal-500/20 hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/projects" 
                  className="text-2xl text-teal-400 font-bold transition-all px-10 py-3 rounded-md bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 border-l-4 border-teal-400 hover:border-blue-400 shadow-lg hover:shadow-teal-500/20 hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="text-2xl text-teal-400 font-bold transition-all px-10 py-3 rounded-md bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 border-l-4 border-teal-400 hover:border-blue-400 shadow-lg hover:shadow-teal-500/20 hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="container mx-auto px-4 py-10 min-h-[calc(100vh-4rem)]"
            >
              <motion.h1
                className="text-5xl font-bold text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Welcome, I'm Louis Massingham
              </motion.h1>
              <motion.p
                className="text-lg text-gray-400 text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Self-taught programmer since Dec. 2024 | Backend and ML Enthusiast
              </motion.p>
              <motion.div
                className="max-w-2xl mx-auto text-gray-300 mb-8 space-y-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <p>
                  I'm a passionate self-taught programmer with a strong focus on Backend Development
                  and Machine Learning. My journey in software development began in December 2024,
                  and since then, I've been dedicated to mastering various technologies and building
                  innovative solutions.
                </p>
                <p>
                  With a background in engineering and a natural inclination towards problem-solving,
                  I bring a unique perspective to software development. I'm particularly interested in
                  creating efficient, scalable backend systems and exploring the possibilities of
                  machine learning applications.
                </p>
                <p>
                  Currently, I'm working on expanding my knowledge in areas such as API development,
                  database optimization, and advanced ML algorithms. I'm always eager to take on new
                  challenges and contribute to meaningful projects.
                </p>
              </motion.div>
              <motion.div
                className="mt-8 flex flex-col items-center space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <a
                  href="https://github.com/massengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 transform"
                >
                  View My GitHub
                </a>
                <div className="flex space-x-6">
                  <motion.a
                    href="mailto:louisjohnmassingham@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <SiGmail className="w-10 h-10" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/louis-massingham-2909a5318"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaLinkedin className="w-10 h-10" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
