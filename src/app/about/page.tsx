'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaHistory, FaHandshake } from 'react-icons/fa';

export default function AboutPage() {
  const stats = [
    { id: 1, label: 'Years of Experience', value: '10+', icon: FaHistory },
    { id: 2, label: 'Happy Customers', value: '50K+', icon: FaUsers },
    { id: 3, label: 'Product Categories', value: '100+', icon: FaAward },
    { id: 4, label: 'Business Partners', value: '25+', icon: FaHandshake }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
          
          {/* Main Content */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Welcome to our store! We are passionate about providing high-quality products and exceptional 
              customer service. Our journey began with a simple idea: to create a one-stop destination for 
              all your electronic needs.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              What sets us apart is our commitment to quality, innovation, and customer satisfaction. 
              We carefully curate our product selection to ensure that we offer only the best to our 
              valued customers.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                  <stat.icon />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide our customers with the latest and most innovative electronic products while 
                ensuring the highest standards of quality and customer service. We strive to make 
                technology accessible and enjoyable for everyone.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading electronic store globally, known for our exceptional product 
                quality, innovative solutions, and outstanding customer experience. We aim to shape 
                the future of electronic retail.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
