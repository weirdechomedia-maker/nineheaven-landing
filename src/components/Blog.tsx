'use client'

import { useState, useEffect, useRef } from 'react'
import { articles, Article } from '../data/articles'

function ArticleModal({ article, onClose }: { article: Article; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-[var(--ink)] border border-[var(--ink-gray)] rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="font-sans-cn text-xs text-[var(--mist)] mb-2">{article.date} · {article.readTime} menit baca</p>
            <h2 className="font-brush text-[var(--ivory)] text-xl leading-[1.1]">{article.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 text-[var(--mist)] hover:text-[var(--gold)] transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="font-sans-cn text-[var(--mist)] leading-relaxed whitespace-pre-line max-w-none">
          {article.content}
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  const [selected, setSelected] = useState<Article | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards(prev => new Set([...prev, index]))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = gridRef.current?.querySelectorAll('[data-index]')
    cards?.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="artikel" className="relative py-24 bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-sans-cn block text-[var(--gold)] text-xs tracking-[4px] uppercase mb-5 text-center">
            Artikel Terkini
          </span>
          <h2 className="font-brush text-[var(--ivory)] text-center leading-[1.0] mb-4" style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            letterSpacing: '-1.8px',
          }}>
            Baca. Terapkan.<br />Rasakan bedanya.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-[3px]"
        >
          {articles.map((article, idx) => (
            <button
              key={article.slug}
              onClick={() => setSelected(article)}
              className={`
                relative overflow-hidden cursor-pointer transition-all duration-300
                ${idx === 0
                  ? 'lg:row-span-2 bg-[var(--ink)] p-8 lg:p-10'
                  : 'bg-[var(--cream)] p-6'
                }
                ${visibleCards.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${idx * 120}ms` }}
              data-index={idx}
            >
              <span className="font-sans-cn text-[var(--gold)] text-xs tracking-[2px] uppercase mb-4 block">
                {idx === 0 ? 'Featured · AI Agents' : 'LLM · Open Source'}
              </span>
              <h3 className="font-brush leading-[1.15] mb-5" style={{
                fontSize: idx === 0 ? 'clamp(22px, 2.5vw, 28px)' : 'clamp(18px, 2vw, 22px)',
                letterSpacing: '-0.5px',
                color: idx === 0 ? 'var(--ivory)' : 'var(--ink)',
              }}>
                {article.title}
              </h3>
              <p className="font-sans-cn leading-relaxed mb-8" style={{
                color: idx === 0 ? 'rgba(255,255,255,0.5)' : 'var(--mist)',
                fontSize: '14px',
              }}>
                {article.excerpt}
              </p>
              <div className="flex gap-4 font-sans-cn text-xs" style={{
                color: idx === 0 ? 'rgba(255,255,255,0.35)' : 'var(--mist)',
              }}>
                <span>{article.date}</span>
                <span>{article.readTime} menit baca</span>
              </div>
              <div
                className="absolute bottom-7 right-7 text-2xl opacity-25 group-hover:opacity-100 transition-all duration-200"
                style={{ transform: 'translateX(0)', color: idx === 0 ? 'var(--ivory)' : 'var(--ink)' }}
              >
                ↗
              </div>
            </button>
          ))}
        </div>
      </div>
      {selected && <ArticleModal article={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}