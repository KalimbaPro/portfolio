'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pointer-events-none bg-transparent">
      {/* Animated title */}
      <motion.h1
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Matthieu Roques
      </motion.h1>

      {/* Animated subtitle */}
      <motion.h2
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Portfolio
      </motion.h2>

      {/* Animated button */}
      <motion.button
        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 pointer-events-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore My Work
      </motion.button>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
