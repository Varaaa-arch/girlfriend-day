'use client'
import { useEffect, useState } from 'react'

type TimeElapsed = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getElapsedTime(startDate: Date): TimeElapsed {
  const now = new Date().getTime()
  const diff = now - startDate.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

const startDate = new Date('2024-08-08T00:00:00')

export default function Countdown() {
  const [elapsed, setElapsed] = useState<TimeElapsed>(getElapsedTime(startDate))

  const totalDays = Math.floor(
    (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  )

  const years = Math.floor(totalDays / 365)
  const months = Math.floor((totalDays % 365) / 30)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(getElapsedTime(startDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center mb-4">
      <p className="text-xl sm:text-2xl font-bold text-pink-700 mb-2">
        {years} YEARS {months} MONTHS
      </p>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 flex flex-wrap justify-center gap-4 sm:gap-6">
        <div className="flex flex-col items-center min-w-[60px]">
          <span>{elapsed.days}</span>
          <span className="text-xs sm:text-sm font-normal text-pink-500">Days</span>
        </div>
        <span className="hidden sm:inline">:</span>
        <div className="flex flex-col items-center min-w-[60px]">
          <span>{elapsed.hours}</span>
          <span className="text-xs sm:text-sm font-normal text-pink-500">Hours</span>
        </div>
        <span className="hidden sm:inline">:</span>
        <div className="flex flex-col items-center min-w-[60px]">
          <span>{elapsed.minutes}</span>
          <span className="text-xs sm:text-sm font-normal text-pink-500">Minutes</span>
        </div>
        <span className="hidden sm:inline">:</span>
        <div className="flex flex-col items-center min-w-[60px]">
          <span>{elapsed.seconds}</span>
          <span className="text-xs sm:text-sm font-normal text-pink-500">Seconds</span>
        </div>
      </div>
    </div>
  )
}
