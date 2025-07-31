import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="text-center p-4">
      <h1 className="text-4xl font-bold">Happy National Girlfriend Day ❤️</h1>
      <p className="mt-4">Klik tombol untuk kejutan!</p>
      <Link href="/surprise" className="inline-block mt-6 px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
        🎁 Lihat Kejutan 🎁
      </Link>
    </main>
  )
}
