'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PhotoCard({
  src,
  alt,
  index,
  setModalIndex,
}: {
  src: string
  alt: string
  index: number
  setModalIndex: (i: number) => void
}) {
  return (
    <motion.div
      onClick={() => setModalIndex(index)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative w-full aspect-square overflow-hidden rounded-3xl shadow-xl border border-pink-300 hover:border-pink-500 transition duration-300 ease-in-out cursor-pointer hover:scale-[1.03]"
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-pink-200/10 group-hover:bg-pink-300/20 transition duration-300" />
      <div className="absolute bottom-3 left-3 text-white text-xs bg-pink-500/80 px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
        {alt}
      </div>
    </motion.div>
  )
}
