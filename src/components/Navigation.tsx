import { useState, useEffect } from 'react'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#tentang', label: 'Tentang' },
    { href: '#artikel', label: 'Artikel' },
    { href: '#kontak', label: 'Kontak' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans-cn ${
        scrolled
          ? 'bg-[var(--ink)]/90 backdrop-blur border-b border-[var(--ink-gray)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-medium tracking-tight text-[var(--ivory)]">
          Nine<span className="text-[var(--orange)]">Heaven</span>Co
        </a>
        <div className="hidden md:flex gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--mist)] hover:text-[var(--gold)] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a
            href="#kontak"
            className="px-5 py-2 bg-[var(--ivory)] text-[var(--ink)] text-sm font-medium hover:bg-[var(--gold)] transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
        <button
          className="md:hidden p-2 text-[var(--mist)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[var(--ink)] border-t border-[var(--ink-gray)] px-6 py-4">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[var(--mist)] hover:text-[var(--gold)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="mt-2 px-5 py-2 bg-[var(--ivory)] text-[var(--ink)] text-sm font-medium text-center hover:bg-[var(--gold)] transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}