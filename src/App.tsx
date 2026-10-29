import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--ivory)] flex flex-col font-sans-cn">
      <Navigation />
      <main className="flex-grow pt-4">
        <Hero />
        <About />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-[var(--ink-gray)] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-medium tracking-tight text-[var(--ivory)]">
            Nine<span className="text-[var(--orange)]">Heaven</span>Co
          </div>
          <p className="font-sans-cn text-sm text-[rgba(255,255,255,0.2)]">
            © {new Date().getFullYear()} Nine Heaven Co. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </div>
  )
}