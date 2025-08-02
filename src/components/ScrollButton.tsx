'use client'

import { motion } from 'framer-motion'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function ScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 rounded-full bg-pink-500 text-white shadow-md hover:bg-pink-600"
      >
        <FaArrowUp />
      </motion.button>

      <motion.button
        onClick={scrollToBottom}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 rounded-full bg-pink-500 text-white shadow-md hover:bg-pink-600"
      >
        <FaArrowDown />
      </motion.button>
    </div>
  )
}
