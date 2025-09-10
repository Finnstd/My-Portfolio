'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // Assuming this library is installed for typewriter effect

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden"
    >
      {/* Unique addition: Subtle particle background for a dynamic, engaging feel */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          {/* Simple CSS particles - could be enhanced with a library like particles.js if available */}
          <style jsx>{`
            .particles {
              position: absolute;
              width: 100%;
              height: 100%;
              background: transparent;
            }
            .particle {
              position: absolute;
              border-radius: 50%;
              background: white;
              opacity: 0.5;
              animation: float 15s infinite linear;
            }
            @keyframes float {
              0% { transform: translateY(0); }
              100% { transform: translateY(-100vh); }
            }
          `}</style>
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 5 + 2}px`,
                  height: `${Math.random() * 5 + 2}px`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-white z-10 p-6 md:p-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Enhanced: Added a subtle avatar image placeholder for friendliness */}
        <motion.img
          src="finn.png" // Replace with actual avatar URL
          alt="Subedi Raju"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Subedi Raju
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              'Web & AI Developer',
              2000, // Wait 2s before next
              'Innovative Coder',
              2000,
              'Creative Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          className="text-base md:text-lg mb-6 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building innovative solutions with code and creativity. Let's connect and create something amazing!
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition-colors duration-300"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          See My Work
        </motion.a>
      </motion.div>
    </section>
  );
}