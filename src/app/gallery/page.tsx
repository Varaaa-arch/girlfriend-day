'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PhotoGrid from '@/components/PhotoGrid'
import ScrollButtons from '@/components/ScrollButton'
import PageWrapper from '@/components/PageWrapper'

const photos = [
  { src: '/photos/1.jpg', alt: 'Foto 1' },
  { src: '/photos/2.jpg', alt: 'Foto 2' },
  { src: '/photos/21.jpg', alt: 'Foto 3' },
  { src: '/photos/22.jpg', alt: 'Foto 4' },
  { src: '/photos/23.jpg', alt: 'Foto 5' },
  { src: '/photos/24.jpg', alt: 'Foto 6' },
  { src: '/photos/25.jpg', alt: 'Foto 7' },
  { src: '/photos/26.jpg', alt: 'Foto 8' },
  { src: '/photos/27.jpg', alt: 'Foto 9' },
  { src: '/photos/28.jpg', alt: 'Foto 10' },
  { src: '/photos/29.jpg', alt: 'Foto 11' },
  { src: '/photos/30.jpg', alt: 'Foto 12' },
  { src: '/photos/31.jpg', alt: 'Foto 13' },
  { src: '/photos/32.jpg', alt: 'Foto 14' },
  { src: '/photos/33.jpg', alt: 'Foto 15' },
  { src: '/photos/wlek4.jpg', alt: 'Foto 16' },
  { src: '/photos/wlek5.jpg', alt: 'Foto 17' },
  { src: '/photos/wlek6.jpg', alt: 'Foto 18' },
  { src: '/photos/wlek7.webp', alt: 'Foto 19' },
  { src: '/photos/wlek8.webp', alt: 'Foto 20' },
  { src: '/photos/wlek.webp', alt: 'Foto 21' },
  { src: '/photos/10.jpg', alt: 'Foto 22' },
  { src: '/photos/11.jpg', alt: 'Foto 23' },
  { src: '/photos/12.jpg', alt: 'Foto 24' },
  { src: '/photos/14.webp', alt: 'Foto 25' },
  { src: '/photos/16.webp', alt: 'Foto 26' },
  { src: '/photos/18.webp', alt: 'Foto 27' },
]

export default function AlbumPage() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="p-6 text-center bg-gradient-to-b from-pink-50 via-white to-pink-100 min-h-screen"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-extrabold text-pink-600 mb-4 mt-6 drop-shadow-sm"
        >
          📸 Owel & Lupi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-pink-500 mb-10 text-lg"
        >
          Momen indah kita yang tak terlupakan 
        </motion.p>

        <PhotoGrid photos={photos} />

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition text-lg font-semibold"
            >
              ⬅ Kembali ke Home
            </motion.button>
          </Link>
        </motion.div>
        <ScrollButtons />
      </motion.div>
    </PageWrapper>
  )
}
