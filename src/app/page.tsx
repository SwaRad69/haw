"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "@/components/typewriter-text"
import { ChevronDown, AlertCircle, Database, Zap, ShieldCheck, Cpu } from "lucide-react"
import { TunnelBackground } from "@/components/ui/tunnel-hero"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProblemSection />
      <WhySection />
      <SolutionSection />
      <FeaturesSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <TunnelBackground />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 perspective-[1000px]"
      >
        <h1 
          className="glitch font-headline text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6 whitespace-nowrap"
          data-text="HACK 'A' WAR"
        >
          HACK 'A' WAR
        </h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="font-headline text-accent text-lg md:text-2xl tracking-[0.4em] font-medium uppercase">
            Team: Heapify
          </p>
          <div className="h-px w-32 bg-primary/40 my-4 shadow-[0_0_10px_#76B900]" />
          <p className="text-white/70 font-body text-sm md:text-lg tracking-[0.3em] uppercase max-w-lg">
            GRC | Regulatory Intelligence Agent
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/60 cursor-pointer"
      >
        <ChevronDown size={40} />
      </motion.div>
      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black opacity-60 z-[5]" />
    </section>
  )
}

function ProblemSection() {
  const problems = [
    {
      title: "Fragmented Data",
      desc: "Regulatory information is scattered across thousands of jurisdictions and languages.",
      icon: <Database className="text-accent" />
    },
    {
      title: "Manual Compliance",
      desc: "Humans cannot process the volume and complexity of 200+ daily regulatory changes manually.",
      icon: <AlertCircle className="text-accent" />
    },
    {
      title: "Zero Intelligence",
      desc: "Static checklists lack the context-aware reasoning needed to identify real risks.",
      icon: <Zap className="text-accent" />
    }
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-headline text-4xl md:text-6xl text-white mb-16 tracking-tight text-center"
      >
        PROBLEM STATEMENT
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-2xl border-l-4 border-l-primary/50 relative group"
          >
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
              {p.icon}
            </div>
            <h3 className="font-headline text-xl mb-4 text-primary">{p.title}</h3>
            <p className="text-white/60 font-body leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="py-32 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <TypewriterText 
            text="WHY IN 2026?"
            className="font-headline text-4xl md:text-6xl text-white mb-4 tracking-tight"
          />
          <p className="text-grey-light font-body max-w-2xl">
            The regulatory landscape has passed the threshold of human management. AI is no longer optional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "01", title: "Regulatory Explosion", text: "Global regulations grew by 400% in the last 2 years." },
            { label: "02", title: "AI-Driven Risk", text: "Complex AI risks require AI-powered compliance agents." },
            { label: "03", title: "Cost Efficiency", text: "Traditional compliance costs have tripled since 2024." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass p-10 rounded-xl border border-white/5 flex flex-col"
            >
              <span className="font-headline text-primary mb-8 text-sm tracking-widest">{item.label}</span>
              <h3 className="font-headline text-2xl text-white mb-4">{item.title}</h3>
              <p className="text-white/50">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  const steps = [
    { title: "Data Ingestion", desc: "Automated crawling of global regulatory websites, news, and official gazettes." },
    { title: "AI Processing", desc: "Our Reasoning Engine analyzes the impact of new rules on your specific business context." },
    { title: "Risk Detection", desc: "Probabilistic risk scoring based on historical non-compliance and new requirements." },
    { title: "Insight Delivery", desc: "Real-time alerts and strategic advice pushed directly to the compliance dashboard." }
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <h2 className="font-headline text-4xl md:text-6xl text-white mb-20 text-center uppercase tracking-widest">
        The Solution Flow
      </h2>

      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-0 space-y-24">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-12 md:w-2/3 md:mx-auto"
          >
            <div className="absolute left-[-11px] top-0 w-5 h-5 bg-primary rounded-full shadow-[0_0_15px_#76B900]" />
            <span className="block font-headline text-accent text-xs tracking-widest mb-2">PHASE 0{i+1}</span>
            <h3 className="font-headline text-3xl text-white mb-4 uppercase">{step.title}</h3>
            <p className="text-white/60 text-lg leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { title: "Real-time Tracking", desc: "24/7 monitoring of 500+ global sources.", icon: <Cpu />, size: "col-span-1 md:col-span-2" },
    { title: "Risk Scoring", desc: "ML-driven impact analysis for every update.", icon: <ShieldCheck />, size: "col-span-1" },
    { title: "Compliance Alerts", desc: "Instant notifications for critical breaches.", icon: <AlertCircle />, size: "col-span-1" },
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <h2 className="font-headline text-4xl md:text-6xl text-white mb-20 text-right uppercase tracking-tighter">
        Core Capabilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, boxShadow: "0 0 30px rgba(118, 185, 0, 0.2)" }}
            className={`glass p-12 rounded-3xl ${f.size} border-t-2 border-t-accent/30 relative overflow-hidden`}
          >
            <div className="mb-8 p-3 bg-white/5 w-fit rounded-lg text-accent">
              {f.icon}
            </div>
            <TypewriterText text={f.title} className="font-headline text-3xl text-white mb-4 uppercase" delay={i * 0.5} />
            <p className="text-white/60 text-lg">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
