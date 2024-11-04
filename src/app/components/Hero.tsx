'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = [
  `Jian-Yang: I don't smoke. Except for special occasions.`,
  `Erlich: So you do smoke? Wait, have you been smoking in my house?`,
  `Jian-Yang: No. There's no special occasions that ever happen in your house.`,
]

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length)
    }, 3000) // 3 secs

    return () => clearInterval(phraseInterval)
  }, [])

  return (
    <section
      className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-gray-300 text-white px-4 border-b-2"
      style={{ height: '350px' }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
        Welcome to Aviato
      </h1>
      <div className="h-16 md:h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentPhrase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-3xl font-semibold"
          >
            {phrases[currentPhrase]}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Founder Profiles
      </motion.a>
    </section>
  )
}

export default Hero
