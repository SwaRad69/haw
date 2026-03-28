
"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "@/components/typewriter-text"
import { ChevronDown } from "lucide-react"
import { TunnelBackground } from "@/components/ui/tunnel-hero"
import { cn } from "@/lib/utils"

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
      <div className="flex justify-center mb-32">
        <TypewriterText 
          text="PROBLEM STATEMENT"
          className="font-headline text-4xl md:text-6xl text-primary tracking-tight uppercase"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: [-60, 60, -60] }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
              opacity: { duration: 0.5, delay: i * 0.2 }
            }}
            className="glass p-8 rounded-2xl border-l-4 border-l-primary/50 relative group h-full"
          >
            <h3 className="font-headline text-xl mb-4 text-primary uppercase">
              {p.title}
            </h3>
            <p className="text-white/60 font-body leading-relaxed text-sm">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function WhySection() {
  const whyItems = [
    { 
      title: "REGULATORY PRESSURE IS INCREASING", 
      text: "RBI and global compliance norms are becoming stricter and more frequent. Institutions must adapt faster to avoid penalties and regulatory risk." 
    },
    { 
      title: "DATA & TRANSACTIONS ARE EXPLODING", 
      text: "Digital banking and fintech growth have led to massive increases in users, transactions, and data complexity. Manual systems can no longer keep up." 
    },
    { 
      title: "NEED FOR REAL-TIME, EXPLAINABLE AI", 
      text: "Compliance decisions must be fast, accurate, and explainable. Organizations now require AI systems that provide clear reasoning and audit-ready outputs." 
    }
  ]

  return (
    <section className="py-32 px-4 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-20 text-center">
          <TypewriterText 
            text="WHY IN 2026?"
            className="font-headline text-4xl md:text-6xl text-primary mb-4 tracking-tight uppercase"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 w-full">
          {whyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: [-60, 60, -60] }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 },
                opacity: { duration: 0.5, delay: i * 0.2 }
              }}
              className="glass p-10 rounded-xl border border-white/5 flex flex-col h-full"
            >
              <h3 className="font-headline text-2xl text-primary mb-4 uppercase">
                {item.title}
              </h3>
              <p className="text-white/50 text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  const steps = [
    { 
      title: "PHASE 1 — DATA INGESTION & PREPARATION", 
      desc: "User uploads KYC documents and transaction data, while external sources (RBI, sanctions lists) are fetched. Data is validated, processed, and stored in the central data platform.",
      color: "text-blue-400"
    },
    { 
      title: "PHASE 2 — REGULATORY INTELLIGENCE (RAG PIPELINE)", 
      desc: "RBI rules are scraped, filtered, chunked, and converted into embeddings. Both static documents and live updates are indexed for real-time retrieval.",
      color: "text-purple-400"
    },
    { 
      title: "PHASE 3 — AGENTIC AI ANALYSIS", 
      desc: "Multiple AI agents process the data: Document understanding, Rule retrieval, Transaction analysis, Sanctions matching, and Time-based rule application. All insights are combined through the decision engine.",
      color: "text-amber-400"
    },
    { 
      title: "PHASE 4 — EXPLAINABLE DECISION & ACTION", 
      desc: "System generates a decision (Approved / Rejected / Review) with clear reasoning, RBI clause references, and flags. Actions like alerts, reports, and notifications are triggered.",
      color: "text-orange-400"
    },
    { 
      title: "PHASE 5 — CONTINUOUS COMPLIANCE LOOP (CORE)", 
      desc: "All decisions are logged and tracked. Feedback, rule updates, and model improvements continuously refine the system, ensuring it stays accurate and up-to-date.",
      color: "text-primary"
    }
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="flex justify-center mb-20">
        <TypewriterText 
          text="THE SOLUTION FLOW"
          className="font-headline text-4xl md:text-6xl text-primary uppercase tracking-widest"
        />
      </div>

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
            <h3 className={cn("font-headline text-2xl md:text-3xl mb-4 uppercase", step.color)}>
              {step.title}
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { 
      title: "AGENTIC AI-DRIVEN ANALYSIS", 
      desc: "Multi-agent system processes documents, transactions, sanctions, and rules in parallel. Ensures intelligent, modular, and scalable compliance analysis.",
      color: "border-t-primary/30"
    },
    { 
      title: "REAL-TIME REGULATORY INTELLIGENCE", 
      desc: "Hybrid RAG pipeline dynamically fetches and applies RBI rules. Temporal engine ensures the right rule is applied at the right time.",
      color: "border-t-primary/30"
    },
    { 
      title: "EXPLAINABLE & ACTIONABLE OUTPUTS", 
      desc: "Generates clear decisions with reasons, RBI clauses, and flags. Triggers real-world actions like alerts, reports, and notifications.",
      color: "border-t-primary/30"
    },
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="flex justify-center mb-20">
        <TypewriterText 
          text="FEATURES"
          className="font-headline text-4xl md:text-6xl text-primary uppercase tracking-tighter"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: [-60, 60, -60] }}
            transition={{ 
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 },
              opacity: { duration: 0.5, delay: i * 0.2 }
            }}
            className={cn(
              "glass p-12 rounded-3xl border-t-2 relative overflow-hidden h-full",
              f.color
            )}
          >
            <h3 className="font-headline text-2xl text-primary mb-4 uppercase">
              {f.title}
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
