'use client'

import { useEffect, useRef } from 'react'

interface BackgroundMusicProps {
  src: string
}

export default function BackgroundMusic({ src }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0.7
    audioRef.current = audio

    const play = async () => {
      try {
        await audio.play()
      } catch (err) {
        console.warn('Autoplay error:', err)
      }
    }

    play()

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [src])

  return null
}
