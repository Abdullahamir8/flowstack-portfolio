import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white">
          FlowStack
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#services" className="hover:text-cyan-400 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-block bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          Hire Me
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border border-slate-700 px-3 py-2 rounded-lg text-slate-300"
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-slate-950 border-t border-slate-800">
          <div className="flex flex-col gap-4 text-slate-300 text-sm">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Home
            </a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Services
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar