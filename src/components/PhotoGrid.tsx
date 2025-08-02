'use client'

import PhotoCard from './PhotoCard'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PhotoGrid({
  photos,
}: {
  photos: { src: string; alt: string }[]
}) {
  const [modalIndex, setModalIndex] = useState<number | null>(null)

  const prev = () =>
    setModalIndex((i) => (i !== null && i > 0 ? i - 1 : photos.length - 1))
  const next = () =>
    setModalIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : 0))
  const close = () => setModalIndex(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <PhotoCard
            key={i}
            index={i}
            src={photo.src}
            alt={photo.alt}
            setModalIndex={setModalIndex}
          />
        ))}
      </div>

      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-[95vw] max-h-[95vh] p-4 bg-white/10 rounded-3xl border border-pink-300 shadow-xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <motion.div
                key={photos[modalIndex].src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={photos[modalIndex].src}
                  alt={photos[modalIndex].alt}
                  width={1000}
                  height={1000}
                  className="rounded-2xl object-contain max-h-[80vh] mx-auto"
                />
                <div className="text-center mt-4 text-white font-semibold text-lg drop-shadow-md">
                  {photos[modalIndex].alt}
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={close}
                className="absolute top-3 right-3 text-white bg-pink-500/60 hover:bg-pink-500/80 p-2 rounded-full shadow-lg transition"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1 }}
              >
                <X size={24} />
              </motion.button>

              {/* Left Button */}
              <motion.button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-300/20 hover:bg-pink-300/50 text-white p-2 rounded-full shadow-md transition"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <ChevronLeft size={32} />
              </motion.button>

              {/* Right Button */}
              <motion.button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-300/20 hover:bg-pink-300/50 text-white p-2 rounded-full shadow-md transition"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <ChevronRight size={32} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
