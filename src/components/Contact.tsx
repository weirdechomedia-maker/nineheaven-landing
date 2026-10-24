export default function Contact() {
  return (
    <section id="kontak" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Mulai Kolaborasi</h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Punya ide, proyek, atau pertanyaan seputar implementasi AI di bisnismu?
          Kirim email langsung, kita diskusikan solusinya.
        </p>
        <a
          href="mailto:contac@nineheavenco.biz.id"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors text-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          contac@nineheavenco.biz.id
        </a>
      </div>
    </section>
  )
}