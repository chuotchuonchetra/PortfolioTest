"use client"

import { useEffect, useState } from "react"

interface FadeInTextProps {
  children: string
  delay?: number
  className?: string
}

export default function FadeInText({ children, delay = 0, className = "" }: FadeInTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} ${className}`}
    >
      {children}
    </div>
  )
}
