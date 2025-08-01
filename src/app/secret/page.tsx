'use client'
import { useState } from 'react';
import BackgroundMusic from '@/components/BackgroundMusic'
import PageWrapper from '@/components/PageWrapper'
import Countdown from '@/components/Countdown'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CORRECT_PIN = "080824";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function SecretPage() {
  const [pin, setPin] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handlePress = (num: string) => {
    if (pin.length < 6) {
      setPin(prev => prev + num);
    }
  }
  
  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  }

  const handleCheck = () => {
    if (pin === CORRECT_PIN) {
      setUnlocked(true);
    } else {
      alert('PIN salah :c');
      setPin('');
    }
  }
  return (
    <PageWrapper> 
      {unlocked ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center px-4">
          <BackgroundMusic src="/music/jpop.mp3" />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-semibold text-gray-600 mb-1"
            >
              Happy National Girlfriend Day!
            </motion.h1>

            <motion.button
              variants={fadeInUp}
              className="bg-pink-200 text-pink-800 text-sm px-4 py-1 rounded-full mt-2 mb-4 shadow"
            >
              How long have we been together? ❤️
            </motion.button>

            <motion.div variants={fadeInUp}>
              <Countdown />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                href="/gallery"
                className="mt-6 inline-block px-6 py-3 bg-pink-500 text-white text-lg rounded-full shadow hover:bg-pink-600 transition-transform hover:scale-105"
              >
                💞 You & Me
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-6 text-xl flex gap-2"
            >
              <span>❤️</span>
              <span>🐾</span>
              <span>❤️</span>
              <span>🐾</span>
              <span>❤️</span>
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center p-4">
          <h1 className="text-2xl font-bold text-pink-600 mb-6">
            Enter Passcode 💌
          </h1>
          <div className="mb-6">
            <input
              type="password"
              value={pin}
              readOnly
              className="text-center text-2xl tracking-widest bg-white px-6 py-3 rounded border border-pink-300 shadow-sm w-48"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
              <button
                key={num}
                onClick={() => handlePress(num)}
                className="px-6 w-full max-w-xs mx-auto bg-pink-500 hover:bg-pink-600 text-white text-xl font-bold py-4 rounded shadow"
              >
                {num}
              </button>
            ))}
            <div></div>
            <button
              onClick={() => handlePress('0')}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xl font-bold py-4 rounded shadow"
            >
              0
            </button>
            <div></div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleDelete}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            >
              Delete
            </button>
            <button
              onClick={handleCheck}
              className="bg-pink-700 hover:bg-pink-800 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}