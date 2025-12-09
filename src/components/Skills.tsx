import TerminalComponent from "./TerminalComponent";

export default function Skills() {
  const programmingLanguages = [
    { name: "JavaScript", iconUrl: "/icons/javascript.svg" },
    { name: "TypeScript", iconUrl: "/icons/typescript.svg" },
    { name: "React", iconUrl: "/icons/react.svg" },
    { name: "Node.js", iconUrl: "/icons/nodejs.svg" },
    { name: "PostgreSQL", iconUrl: "/icons/postgresql.svg" },
    { name: "MongoDB", iconUrl: "/icons/mongodb.svg" },
    { name: "Tailwind", iconUrl: "/icons/tailwind.svg" },
  ];

  const skillsCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="mb-16 overflow-hidden bg-slate-800/50 rounded-lg border border-slate-700 py-8">
          <div className="relative">
            <div className="flex gap-4 animate-scroll whitespace-nowrap">
              {[...programmingLanguages, ...programmingLanguages].map(
                (lang, i) => (
                  <button
                    key={i}
                    className="inline-flex items-center gap-3 px-6 py-3 text-lg font-mono text-white bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-lg hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex-shrink-0 cursor-pointer">
                    <img
                      src={lang.iconUrl || "/placeholder.svg"}
                      alt={lang.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="font-semibold">{lang.name}</span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillsCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-400 hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">
            Development Environment
          </h3>
          <TerminalComponent />
        </div>
      </div>
    </section>
  );
}
