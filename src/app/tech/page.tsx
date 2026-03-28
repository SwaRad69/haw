
"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "@/components/typewriter-text"
import Image from "next/image"
import { useState, useEffect } from "react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

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
    { name: "Next.js", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "PySpark", logo: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" },
    { name: "Twilio", logo: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" }
  ]

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
      <div className="text-center mb-20">
        <TypewriterText text="TECH STACK" className="font-headline text-5xl md:text-7xl text-primary mb-4 uppercase tracking-tighter" />
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
  const architectureImage = PlaceHolderImages.find(img => img.id === 'architecture-diagram');

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto w-full">
      <div className="flex justify-center mb-20">
        <h2 className="font-headline text-4xl md:text-6xl text-primary uppercase text-center">HOW IT WORKS</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl overflow-hidden border border-primary/20 relative aspect-video w-full max-w-5xl mx-auto shadow-[0_0_50px_rgba(118,185,0,0.1)]"
      >
        {architectureImage && (
          <Image
            src={architectureImage.imageUrl}
            alt={architectureImage.description}
            fill
            className="object-contain p-4 md:p-8"
            data-ai-hint={architectureImage.imageHint}
          />
        )}
      </motion.div>
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
        <TypewriterText text="IMPACT" className="font-headline text-4xl md:text-6xl text-primary uppercase" />
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
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
              opacity: { duration: 0.5, delay: i * 0.2 }
            }}
            className={`glass p-12 rounded-[3rem] border-b-4 ${imp.accent}/50 text-center flex flex-col items-center gap-6 h-full`}
          >
            <h3 className="font-headline text-2xl text-primary uppercase font-bold">
              {imp.title}
            </h3>
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
    { name: "Rohan", title: "CEO & Founder :)" },
    { name: "Swaroop Hebbar", title: "CTO :)" },
    { name: "Krish Sharma", title: "Lead AI Engineer :)" },
    { name: "Samarth Sharma", title: "Product Architect :)" },
  ]

  const [offsets, setOffsets] = useState<{x: number, y: number}[]>([])

  useEffect(() => {
    setOffsets(team.map(() => ({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    })))
  }, [])

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto w-full flex flex-col items-center">
      <div className="text-center mb-20">
        <TypewriterText text="MEET THE SQUAD" className="font-headline text-4xl text-primary uppercase tracking-tighter" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 w-full">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: offsets[i]?.x || 0, 
              y: offsets[i]?.y || 0 
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1, 
              ease: [0.23, 1, 0.32, 1],
              delay: i * 0.1 
            }}
            className="glass p-8 rounded-2xl border border-white/5 group h-full flex flex-col items-center text-center transition-all duration-300 hover:border-primary/50"
          >
            <h3 className="font-headline text-xl text-primary font-bold mb-2">
              {member.name}
            </h3>
            <p className="text-white/50 text-xs font-headline tracking-widest uppercase">
              {member.title}
            </p>
          </motion.div>
        ))}
      </div>
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
            text="HEAPYFYING THE COMPILIANCE INTO INTELLIGENCE"
            className="font-headline text-4xl md:text-7xl text-primary uppercase tracking-tighter leading-tight"
          />
        </div>
      </motion.div>
    </section>
  )
}
