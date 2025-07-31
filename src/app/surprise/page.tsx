import Link from 'next/link'

export default function SurprisePage() {
  return (
    <main className="text-center p-4">
      <h1 className="text-3xl font-bold mb-4">🎉 Kejutan untuk Kamu! 🎉</h1>
      <p className="mb-6">Bunga sakura mulai jatuh, dan ada sesuatu untukmu...</p>
      <Link href="/love-letter" className="inline-block px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        💌 Buka Surat Cinta
      </Link>
    </main>
  )
}
