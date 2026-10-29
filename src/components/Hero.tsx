'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)
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

  const layerStyles = [
    { id: 'l1', speed: 0.02, z: 1 },   // Deep grid
    { id: 'l2', speed: 0.05, z: 2 },   // Far mountains
    { id: 'l3', speed: 0.1, z: 3 },    // Sun core glow
    { id: 'l4', speed: 0.15, z: 4 },   // Mid mountains
    { id: 'l5', speed: 0.25, z: 5 },   // Qi mist
    { id: 'l6', speed: 0.35, z: 6 },   // Talismans
    { id: 'l7', speed: 0.45, z: 7 },   // Fog
    { id: 'l8', speed: -0.05, z: 10 }, // Content (counter-scroll)
  ]

  const getTransform = (speed: number) => {
    const moveX = (mousePos.x - 0.5) * 2
    const moveY = (mousePos.y - 0.5) * 2
    return `translateX(${moveX * speed * 100}px) translateY(${moveY * speed * 100}px)`
  }

  return (
    <section id="tentang" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cursor follower glow */}
      <div className="cursor-glow" style={{
        left: `${mousePos.x * 100}%`,
        top: `${mousePos.y * 100}%`,
      }} />

      {/* Block identity bar at top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 flex" aria-hidden="true">
        <div className="flex-1" style={{ background: 'var(--gold)' }} />
        <div className="flex-1" style={{ background: '#ffb83e' }} />
        <div className="flex-1" style={{ background: 'var(--amber)' }} />
        <div className="flex-1" style={{ background: '#ff8105' }} />
        <div className="flex-1" style={{ background: '#fb6424' }} />
        <div className="flex-1" style={{ background: 'var(--orange)' }} />
      </div>

      {/* 8 Parallax Layers */}
      <div className="absolute inset-0" ref={sceneRef}>
        {/* Layer 1: Deep Blueprint Grid */}
        <div
          className="absolute inset-[-20%] z-0 opacity-[0.04] parallax-layer"
          style={{ transform: getTransform(0.02), backgroundImage: `
            linear-gradient(rgba(31,31,31,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(31,31,31,0.4) 1px, transparent 1px)
          `, backgroundSize: '80px 80px' }}
        />

        {/* Layer 2: Far Mountains */}
        <div
          className="absolute inset-[-10%] z-10 parallax-layer"
          style={{ transform: getTransform(0.05) }}
        >
          <div className="absolute bottom-10 w-[150%] h-[60%]" style={{
            background: 'linear-gradient(transparent, var(--ink-gray))',
            clipPath: 'polygon(0% 100%, 10% 40%, 25% 70%, 40% 20%, 55% 60%, 70% 10%, 85% 50%, 100% 100%)',
            opacity: 0.3,
          }} />
        </div>

        {/* Layer 3: Sun Core Glow */}
        <div
          className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full z-20 parallax-layer"
          style={{
            transform: getTransform(0.1),
            background: 'radial-gradient(circle, rgba(255,217,0,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Layer 4: Mid Mountains */}
        <div
          className="absolute bottom-[-5%] w-[120%] h-[50%] z-30 parallax-layer"
          style={{ transform: getTransform(0.15) }}
        >
          <div className="absolute inset-0" style={{
            background: 'var(--ink)',
            clipPath: 'polygon(0% 100%, 15% 30%, 35% 80%, 50% 10%, 75% 70%, 100% 100%)',
          }}>
            <div className="absolute top-0 w-full h-px" style={{
              background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
              opacity: 0.1,
            }} />
          </div>
        </div>

        {/* Layer 5: Qi Mist */}
        <div
          className="absolute inset-0 z-40 parallax-layer"
          style={{
            transform: getTransform(0.25),
            background: 'radial-gradient(ellipse at 50% 100%, rgba(255,161,16,0.08) 0%, transparent 50%)',
          }}
        />

        {/* Layer 6: Floating Talismans */}
        <div
          className="absolute right-20 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 parallax-layer"
          style={{ transform: getTransform(0.35) }}
        >
          <div className="w-14 h-32 border border-[var(--orange)] bg-[rgba(250,82,15,0.1)] flex items-center justify-center text-[var(--gold)] text-[8px] writing-mode: vertical-rl animate-float-jimat shadow-[0_0_15px_var(--orange)]" style={{ animationDelay: '0s' }}>
            NINE HEAVEN AI
          </div>
          <div className="w-14 h-32 border border-[var(--orange)] bg-[rgba(250,82,15,0.1)] flex items-center justify-center text-[var(--gold)] text-[8px] writing-mode: vertical-rl animate-float-jimat shadow-[0_0_15px_var(--orange)]" style={{ animationDelay: '0.2s' }}>
            DATA QI FLOW
          </div>
          <div className="w-14 h-32 border border-[var(--orange)] bg-[rgba(250,82,15,0.1)] flex items-center justify-center text-[var(--gold)] text-[8px] writing-mode: vertical-rl animate-float-jimat shadow-[0_0_15px_var(--orange)]" style={{ animationDelay: '0.4s' }}>
            ASCEND CODE
          </div>
          <div className="w-14 h-32 border border-[var(--orange)] bg-[rgba(250,82,15,0.1)] flex items-center justify-center text-[var(--gold)] text-[8px] writing-mode: vertical-rl animate-float-jimat shadow-[0_0_15px_var(--orange)]" style={{ animationDelay: '0.6s' }}>
            CULTIVATE
          </div>
          <div className="w-14 h-32 border border-[var(--orange)] bg-[rgba(250,82,15,0.1)] flex items-center justify-center text-[var(--gold)] text-[8px] writing-mode: vertical-rl animate-float-jimat shadow-[0_0_15px_var(--orange)]" style={{ animationDelay: '0.8s' }}>
            TRANSCEND
          </div>
        </div>

        {/* Layer 7: Foreground Fog */}
        <div
          className="absolute inset-0 z-60 parallax-layer"
          style={{
            transform: getTransform(0.45),
            background: 'linear-gradient(transparent, rgba(18,18,18,0.8) 90%)',
          }}
        />

        {/* Layer 8: Hero Content (Foreground) */}
        <div
          className="relative z-70 px-6 max-w-4xl parallax-layer"
          style={{ transform: getTransform(-0.05) }}
        >
          <span className="font-sans-cn block text-[var(--gold)] text-xs tracking-[4px] uppercase mb-6">
            Supreme AI Cultivation
          </span>
          <h1 className="font-brush text-[var(--ivory)] leading-[0.95] mb-8 glow-gold" style={{
            fontSize: 'clamp(48px, 9vw, 110px)',
            letterSpacing: '2px',
            textShadow: '0 0 40px rgba(0,0,0,0.6), 0 0 80px rgba(255, 217, 0, 0.1)',
          }}>
            九天<br />
            <span style={{
              background: 'linear-gradient(to right, var(--gold), var(--orange))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ASCENSION
            </span>
          </h1>
          <p className="font-sans-cn text-[var(--mist)] text-lg leading-relaxed mb-12 max-w-xl">
            Bukan hype. Bukan jargon. Panduan praktis memilih & menggunakan AI yang sesuai tujuanmu — dari workflow harian sampai keputusan bisnis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#artikel"
              className="px-8 py-4 bg-[var(--ivory)] text-[var(--ink)] font-sans-cn font-medium text-base tracking-[2px] hover:bg-[var(--gold)] transition-all duration-300"
            >
              MULAI PERJALANAN
            </a>
            <a
              href="#kontak"
              className="px-8 py-4 bg-transparent border border-[var(--orange)] text-[var(--gold)] font-sans-cn font-medium text-base tracking-[2px] hover:bg-[rgba(250,82,15,0.1)] transition-all duration-300"
            >
              DISKUSI DENGAN KAMI
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_1s_1.4s_forwards]">
            <span className="font-sans-cn text-xs tracking-[2px] uppercase text-[var(--mist)] opacity-50">Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </div>
    </section>
  )
}