"use client"

import { useState } from "react"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with product management, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/ecommerce-store-platform-with-shopping-cart.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task manager with user authentication and real-time updates.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind"],
      image: "/task-management-dashboard.png",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with location search, forecasts, and weather animations.",
      tags: ["React", "API Integration", "Tailwind CSS", "JavaScript"],
      image: "/weather-dashboard-forecast.png",
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Generator",
      description: "Web app that generates personalized developer portfolios with custom themes and animations.",
      tags: ["React", "Tailwind", "Animation"],
      image: "/portfolio-generator-theme-builder.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Full-featured blogging platform with markdown support, comments, and user profiles.",
      tags: ["React", "MongoDB", "Authentication", "SEO"],
      image: "/blog-platform-with-articles.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time messaging app with user status, typing indicators, and message notifications.",
      tags: ["React", "WebSocket", "Node.js", "MongoDB"],
      image: "/real-time-chat-messaging-application.jpg",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-cyan-400/20 text-cyan-300 rounded border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-mono hover:gap-3"
                >
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
