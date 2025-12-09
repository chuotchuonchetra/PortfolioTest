"use client"

import { useState, useEffect } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-20 px-4 md:px-8 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Profile text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Frontend Developer</h3>

            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm a passionate front-end developer dedicated to creating beautiful, intuitive, and performant user
              experiences. With expertise in modern React, I transform designs into functional, accessible applications.
            </p>

            <p className="text-slate-300 mb-4 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet. Today, I
              specialize in building responsive web applications that not only look great but also provide seamless user
              interactions.
            </p>

            <p className="text-slate-300 leading-relaxed">
              I'm continuously learning and staying updated with the latest web technologies and best practices. When
              I'm not coding, you'll find me exploring new design patterns or contributing to open-source projects.
            </p>
          </div>

          {/* Right side - Skills highlight */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">Core Competencies</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-cyan-400 font-semibold mb-2">Frontend</p>
                  <p className="text-slate-400 text-sm">React, TypeScript, Tailwind CSS, JavaScript, HTML/CSS</p>
                </div>

                <div>
                  <p className="text-blue-400 font-semibold mb-2">UI/UX</p>
                  <p className="text-slate-400 text-sm">
                    Responsive Design, Animation, Accessibility (a11y), Performance Optimization
                  </p>
                </div>

                <div>
                  <p className="text-purple-400 font-semibold mb-2">Tools & Platforms</p>
                  <p className="text-slate-400 text-sm">Git, GitHub, VS Code, Figma, Vercel, Netlify</p>
                </div>

                <div>
                  <p className="text-pink-400 font-semibold mb-2">Best Practices</p>
                  <p className="text-slate-400 text-sm">SEO Optimization, Web Standards, Clean Code, Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
