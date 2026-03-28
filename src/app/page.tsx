"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "@/components/typewriter-text"
import { ChevronDown } from "lucide-react"
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
        initial={{ opacity: 0, scale: 0.8, rotateX: 20, z: -200 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
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
          <p className="font-headline text-primary text-lg md:text-2xl tracking-[0.4em] font-medium uppercase">
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
      title: "INEFFICIENT & FRAGMENTED KYC SYSTEMS",
      desc: "KYC processes are still manual, slow, and error-prone. Handling multi-format and multilingual documents increases complexity and delay",
    },
    {
      title: "CONSTANTLY EVOLVING REGULATIONS (RBI)",
      desc: "RBI rules change frequently, but systems struggle to adapt in real time. Applying the correct rule at the right time becomes difficult.",
    },
    {
      title: "LACK OF EXPLAINABILITY & INTELLIGENT MONITORING",
      desc: "Systems lack transparency and clear reasoning for decisions. Limited traceability and weak monitoring increase compliance and fraud risks.",
    }
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-headline text-4xl md:text-6xl text-white mb-32 tracking-tight text-center"
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
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -40, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: i * 0.6 
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="glass p-8 rounded-2xl border-l-4 border-l-primary/50 relative group h-full"
            >
              <h3 className="font-headline text-xl mb-4 text-primary uppercase">{p.title}</h3>
              <p className="text-white/60 font-body leading-relaxed">{p.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function WhySection() {
  const whyItems = [
    { 
      label: "01", 
      title: "REGULATORY PRESSURE IS INCREASING", 
      text: "RBI and global compliance norms are becoming stricter and more frequent. Institutions must adapt faster to avoid penalties and regulatory risk." 
    },
    { 
      label: "02", 
      title: "DATA & TRANSACTIONS ARE EXPLODING", 
      text: "Digital banking and fintech growth have led to massive increases in users, transactions, and data complexity. Manual systems can no longer keep up." 
    },
    { 
      label: "03", 
      title: "NEED FOR REAL-TIME, EXPLAINABLE AI", 
      text: "Compliance decisions must be fast, accurate, and explainable. Organizations now require AI systems that provide clear reasoning and audit-ready outputs." 
    }
  ]

  return (
    <section className="py-32 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <TypewriterText 
            text="WHY IN 2026?"
            className="font-headline text-4xl md:text-6xl text-white mb-4 tracking-tight"
          />
          <p className="text-grey-light font-body max-w-2xl mx-auto">
            The regulatory landscape has passed the threshold of human management. AI is no longer optional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyItems.map((item, i) => (
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
    { title: "Real-time Tracking", desc: "24/7 monitoring of 500+ global sources.", size: "col-span-1 md:col-span-2" },
    { title: "Risk Scoring", desc: "ML-driven impact analysis for every update.", size: "col-span-1" },
    { title: "Compliance Alerts", desc: "Instant notifications for critical breaches.", size: "col-span-1" },
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
            <TypewriterText text={f.title} className="font-headline text-3xl text-white mb-4 uppercase" delay={i * 0.5} />
            <p className="text-white/60 text-lg">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
