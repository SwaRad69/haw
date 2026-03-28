
"use client"

import { motion } from "framer-motion"
import { TypewriterText } from "@/components/typewriter-text"
import Image from "next/image"
import { useState, useEffect } from "react"
import { 
  Database, 
  Server, 
  Cpu, 
  Search, 
  FileText, 
  AlertCircle, 
  ShieldCheck, 
  RefreshCw, 
  Send, 
  Layout, 
  ArrowRight,
  Globe,
  Zap,
  Layers,
  Eye,
  Terminal,
  Clock,
  MessageSquare,
  Mail,
  CheckCircle,
  FileSearch,
  Settings
} from "lucide-react"

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
  const architectureLayers = [
    {
      id: "1",
      title: "DATA INPUT LAYER",
      nodes: [
        { name: "PAN / Aadhar Images", icon: Eye },
        { name: "KYC PDFs (multi-language)", icon: FileText },
        { name: "Transaction CSV", icon: Database },
        { name: "RBI Website", icon: Globe },
        { name: "Sanctions Lists", icon: ShieldCheck }
      ],
      connections: ["API Gateway / FastAPI", "Lambda (validation)", "S3"]
    },
    {
      id: "2",
      title: "INGESTION LAYER",
      nodes: [
        { name: "AWS Glue (ETL)", icon: Settings },
        { name: "Kinesis (Streaming)", icon: Zap },
        { name: "Step Functions", icon: Layers }
      ]
    },
    {
      id: "3",
      title: "DATA PLATFORM (LAKEHOUSE)",
      nodes: [
        { name: "S3 Data Lake", icon: Database },
        { name: "Glue Data Catalog", icon: FileSearch },
        { name: "Athena", icon: Search },
        { name: "EMR (Spark)", icon: Cpu },
        { name: "MLflow", icon: Terminal }
      ]
    },
    {
      id: "4",
      title: "HYBRID RBI RAG PIPELINE",
      nodes: [
        { name: "Scraper (Playwright)", icon: Globe },
        { name: "Chunking Engine", icon: Database },
        { name: "Embedding Model", icon: Cpu },
        { name: "Vector DB (FAISS)", icon: Database }
      ]
    },
    {
      id: "5",
      title: "AGENTIC AI ENGINE",
      nodes: [
        { name: "Document Agent", icon: FileText },
        { name: "RBI RAG Agent", icon: Search },
        { name: "Transaction Agent", icon: Zap },
        { name: "Temporal Engine", icon: Clock },
        { name: "Decision Engine (LangGraph)", icon: Settings }
      ]
    },
    {
      id: "6",
      title: "DECISION OUTPUT",
      nodes: [
        { name: "Approved / Rejected", icon: CheckCircle },
        { name: "Reasoning / Logic", icon: MessageSquare },
        { name: "RBI Clauses", icon: FileText },
        { name: "Alert Flags", icon: AlertCircle }
      ]
    },
    {
      id: "7",
      title: "GOVERNANCE & AUDIT",
      nodes: [
        { name: "MLflow Tracking", icon: Terminal },
        { name: "Decision Logs", icon: Database },
        { name: "Audit Trail", icon: Clock }
      ]
    },
    {
      id: "8",
      title: "ACTION LAYER",
      nodes: [
        { name: "Twilio SMS", icon: MessageSquare },
        { name: "Email Alerts", icon: Mail },
        { name: "SAR PDF Report", icon: FileText },
        { name: "FastAPI Triggers", icon: Zap }
      ]
    },
    {
      id: "9",
      title: "FRONTEND",
      nodes: [
        { name: "Ops View Dashboard", icon: Layout },
        { name: "Regulator View", icon: ShieldCheck },
        { name: "Next.js UI", icon: Globe }
      ]
    },
    {
      id: "10",
      title: "FEEDBACK LOOP",
      nodes: [
        { name: "Feedback Store", icon: Database },
        { name: "Model Retraining", icon: RefreshCw },
        { name: "Rule Updates", icon: Settings }
      ]
    }
  ]

  return (
    <section className="py-32 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-6xl text-primary uppercase text-center mb-20">HOW IT WORKS</h2>
        
        <div className="grid grid-cols-1 gap-6 w-full max-w-6xl">
          {architectureLayers.map((layer, idx) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl border border-primary/20 overflow-hidden flex flex-col md:flex-row group hover:border-primary/50 transition-all duration-300"
            >
              {/* Layer Title */}
              <div className="bg-primary/5 border-b md:border-b-0 md:border-r border-primary/20 p-4 md:w-64 flex items-center gap-4">
                <span className="font-headline text-lg text-primary/50">{layer.id}.</span>
                <h3 className="font-headline text-sm text-primary uppercase tracking-tight">{layer.title}</h3>
              </div>

              {/* Nodes Area */}
              <div className="p-4 flex-1 flex flex-wrap gap-3 items-center">
                {layer.nodes.map((node, nIdx) => (
                  <div key={nIdx} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg group-hover:bg-primary/5 transition-colors">
                      <node.icon className="w-4 h-4 text-primary" />
                      <span className="text-[10px] md:text-xs font-medium text-white/70 whitespace-nowrap">{node.name}</span>
                    </div>
                    {nIdx < layer.nodes.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-primary/30 hidden sm:block" />
                    )}
                  </div>
                ))}
                
                {layer.connections && (
                  <div className="flex items-center gap-2 ml-auto">
                    <div className="h-px w-8 bg-primary/20" />
                    {layer.connections.map((conn, cIdx) => (
                      <div key={cIdx} className="bg-primary/10 border border-primary/20 px-2 py-1 rounded text-[10px] text-primary uppercase font-bold">
                        {conn}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
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
