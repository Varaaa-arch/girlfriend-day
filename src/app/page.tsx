'use client'

import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HomePage() {
  return (
    <PageWrapper>
      <main className="relative overflow-hidden text-center px-4 py-12 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200">

        {/* Gambar Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md sm:max-w-lg aspect-video rounded-3xl overflow-hidden shadow-xl mb-8"
        >
          <Image
            src="/photos/kapel.jpg"
            alt="Owel Lupi"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Teks */}
        <div className="z-10 w-full max-w-xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow-lg"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Happy National Girlfriend Day ❤️
          </motion.h1>

          <motion.p
            className="mt-3 text-base sm:text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Untuk cewek owel yang paling cantik di dunia!
          </motion.p>

          <motion.div
            className="mt-4"
            initial={{ scale: 0 }}
            animate={{ scale: [1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.8, delay: 1.4, ease: 'easeInOut' }}
          >
            <Link
              href="/secret"
              className="inline-block px-6 sm:px-8 py-3 bg-pink-500 text-white text-base sm:text-lg rounded-full shadow-lg hover:bg-pink-600 transition-transform hover:scale-105"
            >
              Ayo Masuk!
            </Link>
          </motion.div>
        </div>
      </main>
    </PageWrapper>
  )
}
