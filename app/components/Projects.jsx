'use client';
   import { useState } from 'react';
   import { motion, AnimatePresence } from 'framer-motion';
   import Image from 'next/image';

   export default function Projects() {
     const [filter, setFilter] = useState('All');
     const [selectedProject, setSelectedProject] = useState(null);

     const projects = [
       {
         id: 1,
         title: 'AI Chatbot',
         category: 'AI',
         image: '/images/project1.jpg', // Updated to local image
         description: 'An intelligent chatbot built with React and TensorFlow.',
         details: 'This project leverages NLP to provide seamless user interactions.',
       },
       {
         id: 2,
         title: 'Portfolio Website',
         category: 'Web',
         image: '/images/project2.jpg', // Updated to local image
         description: 'A responsive portfolio site using Next.js and Tailwind.',
         details: 'Built with modern web technologies for optimal performance.',
       },
       {
         id: 3,
         title: 'E-commerce Platform',
         category: 'React',
         image: '/images/project3.jpg', // Updated to local image
         description: 'A full-stack e-commerce app with React and Node.js.',
         details: 'Features include user authentication and payment integration.',
       },
     ];

     const categories = ['All', 'React', 'AI', 'Web'];

     const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

     return (
       <section id="projects" className="py-16 container mx-auto px-4">
         <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
         <div className="flex justify-center space-x-4 mb-8">
           {categories.map((category) => (
             <button
               key={category}
               onClick={() => setFilter(category)}
               className={`px-4 py-2 rounded-lg ${
                 filter === category ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
               }`}
             >
               {category}
             </button>
           ))}
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence>
             {filteredProjects.map((project) => (
               <motion.div
                 key={project.id}
                 className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                 whileHover={{ scale: 1.05 }}
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 50 }}
                 transition={{ duration: 0.5 }}
                 onClick={() => setSelectedProject(project)}
               >
                 <Image
                   src={project.image}
                   alt={project.title}
                   width={300}
                   height={200}
                   className="w-full h-48 object-cover"
                   loading="lazy"
                 />
                 <div className="p-4">
                   <h3 className="text-xl font-semibold">{project.title}</h3>
                   <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>
         </div>
         {selectedProject && (
           <motion.div
             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           >
             <motion.div
               className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg"
               initial={{ scale: 0.8 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0.8 }}
             >
               <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
               <Image
                 src={selectedProject.image}
                 alt={selectedProject.title}
                 width={300}
                 height={200}
                 className="w-full h-48 object-cover mb-4"
               />
               <p className="mb-4">{selectedProject.details}</p>
               <button
                 onClick={() => setSelectedProject(null)}
                 className="px-4 py-2 bg-blue-500 text-white rounded-lg"
               >
                 Close
               </button>
             </motion.div>
           </motion.div>
         )}
       </section>
     );
   }