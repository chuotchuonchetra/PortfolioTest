"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "> Building beautiful web experiences with React & JavaScript"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Frontend Developer
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-mono">
          <span className="text-cyan-400">{">"}</span> {text}
          <span className="animate-pulse text-cyan-400">|</span>
        </p>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Computer Science student passionate about crafting elegant solutions to complex problems. Specialized in
          React, TypeScript, and modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
