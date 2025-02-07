'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa';
import Image from 'next/image';

const skills = [
  { name: 'Frontend Development', icon: FaCode, description: 'React, Next.js, TypeScript, Tailwind CSS' },
  { name: 'Backend Development', icon: FaServer, description: 'Node.js, Express, Python, Django' },
  { name: 'Database', icon: FaDatabase, description: 'MongoDB, PostgreSQL, MySQL' },
  { name: 'Mobile Development', icon: FaMobile, description: 'React Native, Flutter' }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="text-center md:text-left md:w-1/2">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Hi, I&apos;m Abduro Genamo
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Full Stack Developer | UI/UX Enthusiast
                </motion.p>
                <motion.div
                  className="flex justify-center md:justify-start space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="https://github.com/abduroo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Profile Image */}
              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
                  <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden">
                    <Image
                      src="/images/image.png"
                      alt="Abduro Genamo"
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 text-3xl mb-4">
                  <skill.icon />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                <p className="text-gray-600 mb-4">Description of your first featured project. Highlight the key features and technologies used.</p>
                <motion.a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View Project <span className="ml-2">→</span>
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                <p className="text-gray-600 mb-4">Description of your second featured project. Highlight the key features and technologies used.</p>
                <motion.a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View Project <span className="ml-2">→</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <motion.a
              href="/projects"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}
