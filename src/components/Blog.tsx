import { useState } from 'react'
import { articles, Article } from '../data/articles'

function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">{article.date} · {article.readTime} menit baca</p>
            <h2 className="text-2xl font-bold">{article.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="prose prose-invert prose-gray max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  const [selected, setSelected] = useState<Article | null>(null)

  return (
    <section id="artikel" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-4 text-center">Artikel</h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          AI kekinian, dikuliti habis. Tanpa hype, langsung ke intinya.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <button
              key={article.slug}
              onClick={() => setSelected(article)}
              className="text-left bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/40 hover:bg-gray-800/50 transition-all group"
            >
              <p className="text-xs text-gray-500 mb-3">{article.date} · {article.readTime} menit baca</p>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{article.excerpt}</p>
              <span className="mt-4 inline-block text-blue-400 text-sm font-medium">Baca selengkapnya →</span>
            </button>
          ))}
        </div>
      </div>
      {selected && <ArticleModal article={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}