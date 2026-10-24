import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Nine Heaven Co. All rights reserved.</p>
      </footer>
    </div>
  )
}