'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Timeline() {
  const timelineItems = [
    {
      year: '2020',
      title: 'Fortnite',
      description: '24/7 grind in Fortnite',
    },
    {
      year: '2021',
      title: 'Middle School',
      description: 'Noting happened in Middle School :(',
    },
    {
      year: '2023',
      title: 'Prompt',
      description: 'Completed an AI Prompt course.',
    },
  ];

  return (
    <section id="timeline" className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
      <div className="relative border-l-4 border-blue-500">
        {timelineItems.map((item, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
          return (
            <motion.div
              key={index}
              ref={ref}
              className="mb-8 ml-4"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border-2 border-white dark:border-gray-800"></div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{item.year}</h3>
                <h4 className="text-lg font-medium">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}