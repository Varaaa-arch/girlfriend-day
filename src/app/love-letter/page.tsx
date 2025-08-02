'use client'

import { useEffect, useRef, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const playlist = [
  {
    title: 'Lagu Mu',
    file: '/music/elvis.mp3',
  },
  {
    title: 'Lagu Ku',
    file: '/music/oasis.mp3',
  },
  {
    title: 'Lagu Kita',
    file: '/music/pamungkas.mp3',
  },
]

export default function RomanticPage() {
  const [step, setStep] = useState<'awal' | 'tombol-surat' | 'surat'>('awal')
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.src = playlist[currentTrack].file
    audio.load()
    audio.onloadeddata = () => {
      if (isPlaying) {
        audio.play().catch(() => {})
      }
    }
  }, [isPlaying, currentTrack])

  const togglePlay = (index: number) => {
    const audio = audioRef.current
    if (!audio) return

    if (index !== currentTrack) {
      setCurrentTrack(index)
      setIsPlaying(true)
    } else {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play().catch(() => {})
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4 py-10 text-center">
      <div className="space-y-6 max-w-md w-full">
        {/* Audio Element */}
        <audio ref={audioRef} preload="auto" />

        {/* Foto Kitaaa */}
        <motion.img
          src="/photos/3.jpg" 
          alt="Owel Lupi"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ filter: 'brightness(1.1)' }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl shadow-xl w-full max-h-64 object-cover"
        />

        {/* Playlist */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md mb-6">
          <h2 className="text-xl font-bold text-pink-600 mb-4 text-center">Playlist Romantis</h2>
          <ul className="space-y-4">
            {playlist.map((track, index) => (
              <li
                key={index}
                className={`flex justify-between items-center border-b pb-2 ${
                  index === currentTrack ? 'text-pink-600 font-semibold' : 'text-gray-700'
                }`}
              >
                <span>{track.title}</span>
                <button
                  onClick={() => togglePlay(index)}
                  className="text-pink-500 text-xl hover:text-pink-700"
                >
                  {index === currentTrack && isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tombol & Surat */}
        <AnimatePresence mode="wait">
          {step === 'awal' && (
            <motion.button
              key="tampilkan"
              onClick={() => setStep('tombol-surat')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600"
            >
              Tampilkan Surat
            </motion.button>
          )}

          {step === 'tombol-surat' && (
            <motion.button
              key="buka"
              onClick={() => setStep('surat')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-pink-500 px-6 py-3 rounded-full shadow-lg border border-pink-500 hover:bg-pink-50"
            >
              Buka Love Letter 
            </motion.button>
          )}

          {step === 'surat' && (
            <motion.div
              key="surat"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-3xl shadow-xl text-left space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-600 mb-2">Dear kamu,</h3>
              <p className="text-gray-700">
                Di antara ribuan bintang yang bertaburan di langit malam,<br />
                kamu adalah satu-satunya cahaya yang selalu menetap<br />
                yang tak pernah padam<br />
                yang tak pernah pergi dari pandangan dan hatiku.<br /><br />

                Kamu datang bukan dengan gemuruh,<br />
                bukan dengan keramaian,<br />
                tapi dengan kehadiran yang pelan<br />
                yang merayap masuk ke dalam hidupku<br />
                dan mengubah segalanya menjadi lebih hangat, lebih indah, lebih berarti.<br /><br />

                Dalam dirimu, aku menemukan tempat yang tak pernah kutahu sedang kucari<br />
                bukan bangunan dengan tembok dan atap<br />
                melainkan pelukan yang mengerti diamku<br />
                mata yang tak pernah menghakimi<br />
                dan senyum yang bisa menenangkan badai dalam kepalaku.<br /><br />

                Terima kasih, karena telah menjadi satu-satunya alasan<br />
                aku mau mencoba lagi, mempercayai lagi, mencintai lagi.<br />
                Terima kasih karena terus bersamaku<br />
                bahkan di hari-hari saat aku sendiri pun sulit mencintai diriku sendiri.<br /><br />

                Hari ini mungkin hanya satu hari di kalender<br />
                tapi untukku<br />
                ini adalah pengingat indah<br />
                bahwa aku punya kamu<br />
                dan itu adalah salah satu keajaiban paling besar dalam hidupku.<br /><br />

                Selamat Hari Pacar Nasional, sayang.<br />
                Kamu bukan sekadar hari ini,<br />
                kamu adalah setiap hariku. 🌷
              </p>
              <p className="text-gray-700">Aku sayang lupi, selalu dan selamanya. 🥰</p>
              <button
                onClick={() => {
                  const audio = audioRef.current
                  if (audio) {
                    audio.pause()
                    setIsPlaying(false)
                  }
                  setStep('tombol-surat')
                }}
                className="mt-4 bg-pink-100 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-200"
              >
                Tutup Surat
              </button>
              <Link href="/gallery" passHref>
                <motion.button
                  className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Lihat Galeri Kita
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
