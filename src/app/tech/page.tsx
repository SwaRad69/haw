"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "@/components/typewriter-text"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

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
  const techItems = [
    { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "FastAPI", logo: "https://raw.githubusercontent.com/fastapi/fastapi/master/docs/en/docs/img/icon-white.svg" },
    { name: "Next.js", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "PySpark", logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" },
    { name: "Twilio", logo: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" }
  ]

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
      <div className="text-center mb-20">
        <TypewriterText text="TECH STACK" className="font-headline text-5xl md:text-7xl text-white mb-4 uppercase tracking-tighter" />
      </div>

      <div className="w-full relative py-12">
        <div className="flex w-max gap-20 animate-marquee whitespace-nowrap">
          {[...techItems, ...techItems, ...techItems].map((item, i) => (
            <div key={i} className="flex items-center gap-6 text-white/30 hover:text-white transition-all duration-300 group">
              <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
                <Image 
                  src={item.logo} 
                  alt={item.name} 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-headline text-3xl font-bold uppercase tracking-widest">{item.name}</span>
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
      <div className="flex justify-center mb-20">
        <TypewriterText text="HOW IT WORKS" className="font-headline text-4xl md:text-6xl text-white uppercase" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 relative">
        {flow.map((node, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full md:w-auto">
            <motion.div
              animate={{ 
                y: [-35, 35, -35],
              }}
              transition={{ 
                duration: 4.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.4
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="glass w-full md:w-48 h-32 rounded-2xl flex flex-col items-center justify-center gap-3 border border-primary/20 group hover:border-accent transition-colors"
            >
              <TypewriterText text={node.name} className="font-headline text-xs uppercase tracking-widest text-primary font-bold" delay={i * 0.2 + 0.5} />
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
      title: "CONTINUOUS COMPLIANCE LOOP", 
      desc: "System follows a closed loop: Ingest → Analyze → Apply Rules → Decide → Audit → Improve. Ensures the system continuously learns and stays up-to-date with regulations.",
      accent: "border-b-primary"
    },
    { 
      title: "REAL-TIME & ADAPTIVE DECISION MAKING", 
      desc: "Applies the right RBI rule at the right time using the temporal engine. Adapts instantly to new regulations and changing data.",
      accent: "border-b-primary"
    },
    { 
      title: "EXPLAINABLE & TRUSTED COMPLIANCE", 
      desc: "Every decision is backed by clear reasoning, RBI clauses, and full traceability. Builds regulator trust and simplifies audits.",
      accent: "border-b-primary"
    },
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto w-full">
      <div className="flex justify-center mb-20">
        <TypewriterText text="IMPACT" className="font-headline text-4xl md:text-6xl text-white uppercase" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {impacts.map((imp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ 
              y: [-45, 45, -45],
            }}
            transition={{ 
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
              opacity: { duration: 0.5, delay: i * 0.2 }
            }}
            className={`glass p-12 rounded-[3rem] border-b-4 ${imp.accent}/50 text-center flex flex-col items-center gap-6 h-full`}
          >
            <TypewriterText text={imp.title} className="font-headline text-2xl text-primary uppercase font-bold" delay={i * 0.5} />
            <p className="text-white/60 leading-relaxed font-body">
              {imp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    "Rohan",
    "Swaroop Hebbar",
    "Krish Sharma",
    "Samarth Sharma",
  ]

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto w-full flex flex-col items-center">
      <div className="text-center mb-20">
        <TypewriterText text="MEET THE SQUAD" className="font-headline text-4xl text-white uppercase tracking-tighter" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 w-full">
        {team.map((name, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ 
              y: [-25, 25, -25],
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              opacity: { duration: 0.5, delay: i * 0.2 }
            }}
            className="glass p-8 rounded-2xl border border-white/5 group h-full flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full mb-6 flex items-center justify-center text-primary group-hover:text-accent group-hover:bg-accent/20 transition-all">
              <div className="w-10 h-10 rounded-full border-2 border-current border-dashed animate-spin-slow" />
            </div>
            <TypewriterText text={name} className="font-headline text-xl text-primary font-bold" delay={i * 0.2 + 0.8} />
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
        <div className="max-w-5xl mx-auto">
          <TypewriterText 
            text="Transforming compliance into intelligence."
            className="font-headline text-4xl md:text-7xl text-white uppercase tracking-tighter leading-tight"
          />
        </div>
      </motion.div>
    </section>
  )
}
