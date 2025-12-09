import type { ReactNode } from "react"

export default function Terminal({ children }: { children: ReactNode }) {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-lg overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 bg-slate-800 px-4 py-3 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-xs text-slate-400 ml-auto font-mono">terminal</span>
      </div>
      <div className="p-6 font-mono text-sm space-y-2 text-slate-100 h-96 overflow-y-auto">{children}</div>
    </div>
  )
}
