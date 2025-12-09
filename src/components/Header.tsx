"use client"

import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-colors">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          dev.
        </div>

        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        <button className="md:hidden text-slate-100" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-slate-100 hover:text-cyan-400"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-slate-100 hover:text-cyan-400"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-slate-100 hover:text-cyan-400"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-slate-100 hover:text-cyan-400"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-slate-100 hover:text-cyan-400"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
