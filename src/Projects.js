import { motion } from "framer-motion";

const projects = [
  {
    title: "SyncMove Backend Development",
    link: "https://www.syncmove.co.uk/",
  },
  {
    title: "ML Fitness Tracker",
    link: "https://github.com/massengineer/ML-Fitness-Tracker",
  },
  {
    title: "Basic Stock Price Prediction",
    link: "https://github.com/massengineer/First-Stock-Price-Prediction",
  },
  {
    title: "CRUD Expense Tracker",
    link: "https://github.com/massengineer/expense-tracker",
  },
  {
    title: "AI Digital Health Hackathon",
    link: "https://github.com/xd22898/Hackathon2",
  },
];

export default function Projects() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 w-64 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {project.title}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
