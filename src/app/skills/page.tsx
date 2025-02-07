'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa';

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML5', icon: FaHtml5, proficiency: 90 },
      { name: 'CSS3', icon: FaCss3Alt, proficiency: 85 },
      { name: 'JavaScript', icon: FaJs, proficiency: 90 },
      { name: 'React', icon: FaReact, proficiency: 85 }
    ]
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', icon: FaNode, proficiency: 80 },
      { name: 'Python', icon: FaPython, proficiency: 75 },
      { name: 'Databases', icon: FaDatabase, proficiency: 80 }
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: FaGitAlt, proficiency: 85 },
      { name: 'Docker', icon: FaDocker, proficiency: 70 },
      { name: 'AWS', icon: FaAws, proficiency: 65 }
    ]
  }
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>

        <div className="space-y-16">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex items-center mb-4">
                      <skill.icon className="text-4xl text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      />
                    </div>
                    <p className="text-right mt-1 text-sm text-gray-600">
                      {skill.proficiency}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Want to see my work?</h2>
          <motion.a
            href="/projects"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
