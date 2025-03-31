import { motion } from "framer-motion";
import { HiOutlineExternalLink } from 'react-icons/hi';

const projects = [
  {
    title: "SyncMove Backend Development",
    link: "https://www.syncmove.co.uk/",
    description: "Backend development for SyncMove platform",
    tech: ["Backend", "API Development"]
  },
  {
    title: "ML Fitness Tracker",
    link: "https://github.com/massengineer/ML-Fitness-Tracker",
    description: "Machine learning-based fitness tracking application",
    tech: ["Machine Learning", "Python"]
  },
  {
    title: "Basic Stock Price Prediction",
    link: "https://github.com/massengineer/First-Stock-Price-Prediction",
    description: "Stock price prediction using machine learning algorithms",
    tech: ["ML", "Data Analysis"]
  },
  {
    title: "CRUD Expense Tracker",
    link: "https://github.com/massengineer/expense-tracker",
    description: "Full-stack expense tracking application",
    tech: ["Full Stack", "CRUD"]
  },
  {
    title: "AI Digital Health Hackathon",
    link: "https://github.com/xd22898/Hackathon2",
    description: "AI-powered digital health solution from hackathon",
    tech: ["AI", "Healthcare"]
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-10 px-4"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-600 text-xs rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <HiOutlineExternalLink className="mr-2" />
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
