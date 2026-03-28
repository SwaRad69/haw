"use client"

import { useScroll, useTransform, motion } from "framer-motion"

export function Background() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 5000], [0, 500])

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
    </div>
  )
}
