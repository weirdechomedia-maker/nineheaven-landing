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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Nine<span className="text-blue-400">Heaven</span>Co
        </a>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 text-gray-300"
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
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <div className="px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}