"use client"

import { useState } from "react"

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h2>
        <p className="text-gray-400 text-center mb-12">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-slate-700 bg-slate-800/30 text-center hover:border-cyan-400 transition-colors">
            <div className="text-2xl mb-2">📧</div>
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-cyan-400 text-sm">your.email@example.com</p>
          </div>

          <div className="p-6 rounded-lg border border-slate-700 bg-slate-800/30 text-center hover:border-cyan-400 transition-colors">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-bold mb-1">LinkedIn</h3>
            <p className="text-cyan-400 text-sm">linkedin.com/in/yourprofile</p>
          </div>

          <div className="p-6 rounded-lg border border-slate-700 bg-slate-800/30 text-center hover:border-cyan-400 transition-colors">
            <div className="text-2xl mb-2">🐙</div>
            <h3 className="font-bold mb-1">GitHub</h3>
            <p className="text-cyan-400 text-sm">github.com/yourprofile</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-slate-800/30 border border-slate-700 rounded-lg p-8">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full px-4 py-3 bg-slate-900 border rounded-lg outline-none transition-all ${
                focusedInput === "name" ? "border-cyan-400 shadow-lg shadow-cyan-500/20" : "border-slate-700"
              } text-white placeholder-gray-500`}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full px-4 py-3 bg-slate-900 border rounded-lg outline-none transition-all ${
                focusedInput === "email" ? "border-cyan-400 shadow-lg shadow-cyan-500/20" : "border-slate-700"
              } text-white placeholder-gray-500`}
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              onFocus={() => setFocusedInput("message")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full px-4 py-3 bg-slate-900 border rounded-lg outline-none transition-all resize-none ${
                focusedInput === "message" ? "border-cyan-400 shadow-lg shadow-cyan-500/20" : "border-slate-700"
              } text-white placeholder-gray-500`}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all active:scale-95 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
