'use client';

import { motion } from 'framer-motion';
import { FaLaptop, FaHeadphones, FaMobile, FaCamera, FaGamepad, FaClock } from 'react-icons/fa';

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      icon: FaLaptop,
      description: 'Laptops, tablets, and desktop computers',
      itemCount: 150
    },
    {
      id: 2,
      name: 'Audio',
      icon: FaHeadphones,
      description: 'Headphones, speakers, and audio accessories',
      itemCount: 80
    },
    {
      id: 3,
      name: 'Mobile',
      icon: FaMobile,
      description: 'Smartphones and mobile accessories',
      itemCount: 200
    },
    {
      id: 4,
      name: 'Photography',
      icon: FaCamera,
      description: 'Cameras, lenses, and photography gear',
      itemCount: 60
    },
    {
      id: 5,
      name: 'Gaming',
      icon: FaGamepad,
      description: 'Gaming consoles and accessories',
      itemCount: 90
    },
    {
      id: 6,
      name: 'Wearables',
      icon: FaClock,
      description: 'Smartwatches and fitness trackers',
      itemCount: 40
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Product Categories</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.itemCount} items</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Category
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
