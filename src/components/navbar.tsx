"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] p-6 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <span className="font-headline font-bold text-xl tracking-tighter uppercase text-white/90">HACK 'A' WAR</span>
      </div>

      <div className="glass px-6 py-3 rounded-full flex gap-8">
        <NavLink href="/" active={pathname === "/"}>Home</NavLink>
        <NavLink href="/tech" active={pathname === "/tech"}>Tech Stack</NavLink>
      </div>

      <div className="hidden md:block">
        <button className="bg-primary hover:bg-accent text-black font-bold px-6 py-2 rounded-full transition-all duration-300 font-headline text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(118,185,0,0.4)]">
          Launch App
        </button>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children, active }: { href: string, children: React.ReactNode, active: boolean }) {
  return (
    <Link 
      href={href} 
      className={`relative text-sm font-headline tracking-widest uppercase transition-colors duration-300 ${active ? 'text-accent' : 'text-white/60 hover:text-white'}`}
    >
      {children}
      {active && (
        <motion.div 
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
        />
      )}
    </Link>
  )
}
