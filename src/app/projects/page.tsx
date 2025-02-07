'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A detailed description of your first project. Explain the problem it solves, technologies used, and your role in development.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/ecom.png',
    github: 'https://github.com/abduroo/project1',
    live: 'https://project1-demo.com'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A detailed description of your second project. Explain the problem it solves, technologies used, and your role in development.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/ecom.png',
    github: 'https://github.com/abduroo/project2',
    live: 'https://project2-demo.com'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A detailed description of your third project. Explain the problem it solves, technologies used, and your role in development.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    image: '/images/ecom.png',
    github: 'https://github.com/abduroo/project3',
    live: 'https://project3-demo.com'
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
