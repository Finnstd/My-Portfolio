'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };


  const linkVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="contact" className="py-20 container mx-auto px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-12">
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
              rows="5"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        <div className="flex-1">
          <motion.h3 
            className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with Me
          </motion.h3>
          <div className="flex flex-col space-y-4">
            <motion.a
              href="https://www.instagram.com/raju_subedi._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-lg font-medium transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              Instagram
            </motion.a>
            <motion.a
              href="https://github.com/Finnstd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-lg font-medium transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/raju-subedi-a33a18366/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-lg font-medium transition-colors"
              variants={linkVariants}
              whileHover="hover"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}