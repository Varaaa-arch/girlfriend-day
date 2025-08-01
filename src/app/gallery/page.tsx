const images = [
  '/img/us1.jpg',
  '/img/us2.jpg',
  '/img/us3.jpg',
  // tambahkan path image lain
]

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl text-center font-bold mb-6 text-pink-700">📸 Galeri Kita</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Foto kita ${idx + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
        ))}
      </div>
    </main>
  )
}
