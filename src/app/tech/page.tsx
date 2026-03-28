
"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "@/components/typewriter-text"
import { ArrowRight } from "lucide-react"

export default function TechPage() {
  return (
    <div className="flex flex-col w-full">
      <TechStackSection />
      <ArchitectureSection />
      <ImpactSection />
      <TeamSection />
      <FinalLineSection />
    </div>
  )
}

function TechStackSection() {
  const logos = [
    "AWS", 
    "FastAPI", 
    "Next.js", 
    "Tailwind CSS", 
    "FAISS / Chroma", 
    "BGE Embeddings", 
    "PySpark", 
    "Pandas", 
    "MLflow", 
    "Tesseract / EasyOCR", 
    "BeautifulSoup / Playwright", 
    "Twilio"
  ]

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
      <div className="text-center mb-20">
        <TypewriterText text="TECH STACK" className="font-headline text-5xl md:text-7xl text-white mb-4 uppercase tracking-tighter" />
      </div>

      <div className="w-full relative py-12">
        <div className="flex w-max gap-20 animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-4 text-white/30 hover:text-white/100 transition-colors duration-300">
              <span className="font-headline text-3xl font-bold uppercase tracking-widest">{logo}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  )
}

function ArchitectureSection() {
  const flow = [
    { name: "User" },
    { name: "API Layer" },
    { name: "AI Engine" },
    { name: "Risk Engine" },
    { name: "Dashboard" },
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto w-full">
      <TypewriterText text="HOW IT WORKS" className="font-headline text-4xl md:text-6xl text-white mb-20 text-center uppercase" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 relative">
        {flow.map((node, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass w-full md:w-48 h-32 rounded-2xl flex flex-col items-center justify-center gap-3 border border-primary/20 group hover:border-accent transition-colors"
            >
              <span className="font-headline text-xs uppercase tracking-widest text-white/80">{node.name}</span>
            </motion.div>
            
            {i < flow.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex md:flex-row flex-col items-center"
              >
                <ArrowRight className="text-primary/40 md:rotate-0 rotate-90" size={24} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function ImpactSection() {
  const impacts = [
    { 
      title: "CONTINUOUS COMPLIANCE LOOP (CORE IMPACT)", 
      desc: "System follows a closed loop: Ingest → Analyze → Apply Rules → Decide → Audit → Improve. Ensures the system continuously learns and stays up-to-date with regulations.",
      accent: "border-b-primary"
    },
    { 
      title: "REAL-TIME & ADAPTIVE DECISION MAKING", 
      desc: "Applies the right RBI rule at the right time using the temporal engine. Adapts instantly to new regulations and changing data.",
      accent: "border-b-accent"
    },
    { 
      title: "EXPLAINABLE & TRUSTED COMPLIANCE", 
      desc: "Every decision is backed by clear reasoning, RBI clauses, and full traceability. Builds regulator trust and simplifies audits.",
      accent: "border-b-primary"
    },
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto w-full">
      <TypewriterText text="IMPACT" className="font-headline text-4xl md:text-6xl text-white mb-20 text-center uppercase" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {impacts.map((imp, i) => (
          <motion.div
            key={i}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [-1.2, 1.2, -1.2] }}
              transition={{ 
                duration: 6 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ originY: 0 }}
              whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
              className={`glass p-12 rounded-[3rem] border-b-4 ${imp.accent}/50 text-center flex flex-col items-center gap-6 h-full`}
            >
              <h3 className="font-headline text-2xl text-white uppercase">{imp.title}</h3>
              <p className="text-white/60 leading-relaxed font-body">{imp.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    { name: "John Doe", role: "CEO & Visionary" },
    { name: "Jane Smith", role: "Co-founder & GRC Lead" },
    { name: "Mike Ross", role: "Lead AI Engineer" },
    { name: "Sarah Connor", role: "Frontend Architect" },
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto w-full">
      <h2 className="font-headline text-4xl text-white mb-20 uppercase tracking-tighter">MEET THE SQUAD</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12">
        {team.map((member, i) => (
          <motion.div
            key={i}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [-1.5, 1.5, -1.5] }}
              transition={{ 
                duration: 5.5 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ originY: 0 }}
              whileHover={{ scale: 1.05, rotate: 0, boxShadow: "0 0 40px rgba(117, 255, 0, 0.15)" }}
              className="glass p-8 rounded-2xl border border-white/5 group h-full"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full mb-6 flex items-center justify-center text-primary group-hover:text-accent group-hover:bg-accent/20 transition-all">
                <div className="w-10 h-10 rounded-full border-2 border-current border-dashed animate-spin-slow" />
              </div>
              <h4 className="font-headline text-xl text-white mb-2">{member.name}</h4>
              <p className="text-primary text-xs uppercase tracking-widest">{member.role}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  )
}

function FinalLineSection() {
  return (
    <section className="py-60 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-accent font-headline text-lg md:text-xl tracking-[0.5em] uppercase mb-8 opacity-50">Conclusion</p>
        <h2 className="font-headline text-4xl md:text-7xl text-white uppercase tracking-tighter leading-tight max-w-5xl mx-auto">
          Transforming <span className="text-primary">compliance</span> into <span className="text-accent underline decoration-accent/30 underline-offset-8">intelligence</span>.
        </h2>
      </motion.div>
    </section>
  )
}
