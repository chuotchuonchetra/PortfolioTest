"use client"

import { useEffect, useState } from "react"

interface AnimatedSpanProps {
  children: string
  delay?: number
  className?: string
}

export default function AnimatedSpan({ children, delay = 0, className = "" }: AnimatedSpanProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>
      {children}
    </div>
  )
}
