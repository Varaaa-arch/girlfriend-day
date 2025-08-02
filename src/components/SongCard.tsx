'use client'

import Image from 'next/image'

type Song = {
  title: string
  artist: string
  cover: string
  src: string
}

export default function SongCard({ song }: { song: Song }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all duration-300 w-60">
      <div className="relative w-full h-60">
        <Image
          src={song.cover}
          alt={song.title}
          fill
          className="object-cover"
          sizes="240px" 
          priority 
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{song.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{song.artist}</p>
        <audio controls className="w-full">
          <source src={song.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  )
}
