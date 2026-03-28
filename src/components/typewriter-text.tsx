"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (isInView) {
      let timeout: NodeJS.Timeout
      let i = 0
      
      const type = () => {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i))
          i++
          timeout = setTimeout(type, 50)
        }
      }
      
      const initialDelay = setTimeout(type, delay * 1000)
      return () => {
        clearTimeout(initialDelay)
        clearTimeout(timeout)
      }
    }
  }, [isInView, text, delay])

  return (
    <div ref={ref} className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-accent ml-1 translate-y-[2px]"
      />
    </div>
  )
}
