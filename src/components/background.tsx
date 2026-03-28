"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Background() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 5000], [0, 500])
  const y2 = useTransform(scrollY, [0, 5000], [0, -300])

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

      {/* Radial Glows */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full z-[3]" 
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[100px] rounded-full z-[3]" 
      />
    </div>
  )
}
