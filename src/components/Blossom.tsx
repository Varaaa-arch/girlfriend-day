'use client'

import { useEffect, useState } from 'react'

export default function Blossom() {
  const [petals, setPetals] = useState<number[]>([])

  useEffect(() => {
    const count = 20
    setPetals(Array.from({ length: count }, (_, i) => i))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((id) => (
        <div
          key={id}
          className="absolute w-4 h-4 bg-pink-300 rounded-full opacity-70 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            top: `-${Math.random() * 100}px`,
          }}
        />
      ))}
    </div>
  )
}
