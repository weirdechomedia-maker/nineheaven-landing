export default function Hero() {
  return (
    <section id="tentang" className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <div className="max-w-3xl px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Temukan Solusi <span className="text-blue-400">AI</span> yang Tepat untuk Tujuanmu
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Nine Heaven Co membantu kamu merancang, mengimplementasi, dan mengukur efektivitas
          alat-alat AI yang membawa produktivitas dan nilai nyata, bukan gimmick semata.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#artikel"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Baca Artikel
          </a>
          <a
            href="#kontak"
            className="px-8 py-3 rounded-lg border border-gray-700 hover:border-gray-600 text-white font-medium transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  )
}