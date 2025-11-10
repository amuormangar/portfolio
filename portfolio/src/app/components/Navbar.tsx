"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 800) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-700/10 via-transparent to-sky-500/10 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="text-lg font-semibold text-gray-100"></div>

          <nav className="hidden md:flex md:ml-auto md:items-center md:gap-6">
            <a href="#home" className="text-sm text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white">About</a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-white">Skills</a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white">Projects</a>
            <a href="#contact" className="ml-2 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-3 py-1.5 rounded-md">
              Contact
            </a>
          </nav>

          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="ml-auto md:hidden p-2 rounded-md text-gray-200 hover:bg-white/5"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed right-4 top-[72px] z-50 transform transition-all duration-180 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-56 bg-slate-900/95 backdrop-blur-md p-4 rounded-lg shadow-lg flex flex-col gap-3">
          <a href="#home" onClick={() => setOpen(false)} className="text-sm text-slate-100 hover:text-white">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-sm text-slate-100 hover:text-white">About</a>
          <a href="#skills" onClick={() => setOpen(false)} className="text-sm text-slate-100 hover:text-white">Skills</a>
          <a href="#projects" onClick={() => setOpen(false)} className="text-sm text-slate-100 hover:text-white">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-3 py-1.5 rounded-md text-center">
            Contact
          </a>
        </div>
      </div>

      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/40 md:hidden" />}
    </header>
  )
}