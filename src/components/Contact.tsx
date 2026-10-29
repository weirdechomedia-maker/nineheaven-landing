'use client'

import { useEffect, useState } from 'react'

export default function Contact() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section id="kontak" className="relative py-28 lg:py-36 bg-[var(--ink)] overflow-hidden">
      {/* Golden glow following mouse */}
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          transform: `translate(-50%, calc(-50% + ${(mousePos.y - 0.5) * 100}px))`,
          background: 'radial-gradient(ellipse, rgba(255,161,16,0.18) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <span className="font-sans-cn block text-[var(--amber)] text-xs tracking-[4px] uppercase mb-5">
          Kontak
        </span>
        <h2 className="font-brush text-[var(--ivory)] leading-[0.97] mb-8 glow-gold" style={{
          fontSize: 'clamp(40px, 5.5vw, 70px)',
          letterSpacing: '-2.5px',
        }}>
          Ada proyek<br />atau pertanyaan?
        </h2>
        <p className="font-sans-cn text-[rgba(255,255,255,0.45)] text-base lg:text-lg leading-[1.7] mb-12">
          Diskusi implementasi AI, konsultasi tools, atau sekadar tanya-tanya — inbox kami selalu terbuka.
        </p>
        <a
          href="mailto:contac@nineheavenco.biz.id"
          className="inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--orange)] text-[var(--ink)] px-10 py-5 font-sans-cn font-semibold text-base tracking-[0.3px] transition-all duration-300 hover:scale-[1.02]"
          style={{
            boxShadow: '0 8px 36px rgba(255, 161, 16, 0.45)',
          }}
        >
          contac@nineheavenco.biz.id
        </a>
      </div>
    </section>
  )
}