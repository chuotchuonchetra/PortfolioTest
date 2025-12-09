"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  children: string
  delay?: number
}

export default function TypingAnimation({ children, delay = 0 }: TypingAnimationProps) {
  const [text, setText] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isVisible) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= children.length) {
        setText(children.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [children, isVisible])

  return <div className="text-slate-300">{text}</div>
}
