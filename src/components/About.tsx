'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ratio = Math.min(entry.intersectionRatio * 1.5, 1)
          setProgress(ratio)
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    if (stickyRef.current) observer.observe(stickyRef.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: 'Konten Praktikal', value: '100%' },
    { label: 'Data Terkini 2026', value: '95%' },
    { label: 'Anti-Slop Content', value: '100%' },
    { label: 'Zero Buzzword Kosong', value: '100%' },
  ]

  return (
    <section id="tentang" className="relative" style={{ height: '250vh' }}>
      {/* Sticky inner content */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex items-center bg-[var(--ink)]"
      >
        <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Left: Text */}
          <div className="pr-8">
            <span className="font-sans-cn block text-[var(--gold)] text-xs tracking-[4px] uppercase mb-5">
              Tentang Kami
            </span>
            <h2 className="font-brush text-[var(--ivory)] leading-[1.0] mb-7" style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              letterSpacing: '-1.8px',
            }}>
              Kami bantu kamu paham AI — tanpa drama.
            </h2>
            <p className="font-sans-cn text-[var(--mist)] text-lg leading-[1.75]">
              Nine Heaven Co adalah platform informasi AI yang fokus pada konten yang langsung bisa diterapkan.
              Tidak ada sensasi, tidak ada jargon kosong. Hanya perbandingan tools, tutorial praktikal, dan pengalaman nyata dari lapangan.
            </p>
          </div>

          {/* Right: Progress Bars */}
          <div className="space-y-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="group">
                <div className="flex justify-between font-sans-cn text-sm font-medium mb-3">
                  <span className="text-[var(--ivory)] group-hover:text-[var(--gold)] transition-colors">
                    {stat.label}
                  </span>
                  <span className="text-[var(--gold)]">{stat.value}</span>
                </div>
                <div className="relative h-1.5 bg-[var(--ink-gray)] overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[var(--gold)] to-[var(--orange)] transform-origin-left"
                    style={{
                      transform: `scaleX(${progress})`,
                      transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      transitionDelay: `${i * 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}