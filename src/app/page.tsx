'use client'

import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import BackgroundMusic from '@/components/BackgroundMusic'
import { motion } from 'framer-motion'
import Blossom from '@/components/Blossom'

export default function HomePage() {
  return (
    <PageWrapper>
      <BackgroundMusic src="/music/jpop.mp3" />
      <Blossom />
      <main className="text-center p-4 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Happy National Girlfriend Day ❤️
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Untuk cewek owel yang paling cantik!
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ scale: 0 }}
          animate={{ scale: [1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.8, delay: 1.4, ease: 'easeInOut' }}
        >
          <Link
            href="/surprise"
            className="inline-block px-8 py-3 bg-pink-500 text-white text-lg rounded-full shadow-lg hover:bg-pink-600 transition-transform hover:scale-105"
          >
            🎁 Lihat Kejutan 🎁
          </Link>
        </motion.div>
      </main>
    </PageWrapper>
  )
}
