
"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Background() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 5000], [0, 500])
  const [meteors, setMeteors] = useState<number[]>([])

  useEffect(() => {
    setMeteors(new Array(12).fill(0).map((_, i) => i))
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base Black */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise z-[1]" />

      {/* Grid Lines */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 grid-bg opacity-20 z-[2]" 
      />

      {/* Asteroids/Meteors effect - Left to Right */}
      <div className="absolute inset-0 z-[3]">
        {meteors.map((i) => (
          <Meteor key={i} index={i} />
        ))}
      </div>
    </div>
  )
}

function Meteor({ index }: { index: number }) {
  const [config, setConfig] = useState<{ top: string; duration: number; delay: number } | null>(null)

  useEffect(() => {
    // Generate random values on client side to avoid hydration mismatch
    setConfig({
      top: Math.random() * 100 + "%",
      duration: Math.random() * 4 + 3, // Random speed
      delay: Math.random() * 15,       // Random start time
    })
  }, [])

  if (!config) return null

  return (
    <motion.div
      initial={{ x: "-20vw", opacity: 0 }}
      animate={{ 
        x: "120vw", 
        opacity: [0, 1, 1, 0] 
      }}
      transition={{
        duration: config.duration,
        delay: config.delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: Math.random() * 10
      }}
      className="absolute h-[1px] w-[250px] bg-gradient-to-r from-primary via-primary/50 to-transparent"
      style={{
        top: config.top,
        boxShadow: "0 0 20px rgba(118, 185, 0, 0.4)",
      }}
    >
      {/* Meteor Head */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_12px_#76B900]" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full blur-[2px]" />
    </motion.div>
  )
}
