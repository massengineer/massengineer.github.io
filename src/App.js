import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import { motion } from "framer-motion"; // Import Framer Motion

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="flex flex-col items-center justify-center px-4 py-10">
        <motion.h1
          className="text-5xl font-extrabold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome, I'm Louis Massingham
        </motion.h1>
        <p className="text-lg text-gray-400 mt-2 text-center">
          Self-taught programmer since Dec. 2024 | Backend and ML Enthusiast
        </p>
        <a
          href="https://github.com/massengineer"
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My GitHub
        </a>
      </div>
      <Projects />
      <Contact />
      <About />
    </div>
  );
}

export default App;
