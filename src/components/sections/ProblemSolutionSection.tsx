"use client";

import { motion } from "framer-motion";
import { ArrowDown, Database, Cpu, Zap, CheckCircle2 } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="py-24 lg:py-32 relative" id="cozum">
      {/* Problem Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-16"
        >
          Finansal süreçler <br />
          <span className="text-foreground/40">neden bu kadar karmaşık?</span>
        </motion.h2>

        <div className="relative h-64 md:h-80 max-w-4xl mx-auto flex items-center justify-center">
          {/* Evolving Text Blocks representing chaos */}
          {[
            { text: "Manuel veri girişi", x: -120, y: -80, delay: 0.1, rotate: -6 },
            { text: "Dağınık bilgiler", x: 140, y: -60, delay: 0.2, rotate: 4 },
            { text: "Zaman kaybı", x: -80, y: 60, delay: 0.3, rotate: 3 },
            { text: "Operasyonel hata riski", x: 100, y: 80, delay: 0.4, rotate: -4 },
            { text: "Sipariş takibi zorluğu", x: 0, y: 0, delay: 0.5, rotate: 0, main: true },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, x: item.x * 0.5, y: item.y * 0.5 }}
              whileInView={{ opacity: 1, scale: 1, x: item.x, y: item.y, rotate: item.rotate }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: item.delay, ease: "easeOut" }}
              className={`absolute px-6 py-4 rounded-2xl border backdrop-blur-sm whitespace-nowrap shadow-sm ${
                item.main
                  ? "bg-white border-finanses-border z-10 text-xl font-semibold shadow-xl"
                  : "bg-finanses-muted/50 border-finanses-border/50 text-foreground/60 text-sm font-medium z-0"
              }`}
            >
              {item.text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solution Reveal */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24 border-t border-finanses-border/50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
          <ArrowDown className="text-foreground/20" size={32} />
        </div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold tracking-tighter mb-20"
        >
          FinanSes karmaşayı <br className="md:hidden" /> tek bir akışta toplar.
        </motion.h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {[
            { icon: Database, label: "VERİ" },
            { icon: Cpu, label: "YAPAY ZEKÂ" },
            { icon: Zap, label: "OTOMASYON" },
            { icon: CheckCircle2, label: "DÜZENLİ İŞ AKIŞI", highlight: true },
          ].map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col items-center justify-center w-32 h-32 rounded-3xl border transition-colors ${
                  step.highlight 
                  ? "bg-finanses-dark text-white border-black" 
                  : "bg-white border-finanses-border text-foreground"
                }`}
              >
                <step.icon size={32} className={`mb-3 ${step.highlight ? "text-white" : "text-finanses-blue"}`} />
                <span className="text-xs font-semibold tracking-wider">{step.label}</span>
              </motion.div>
              {index < 3 && (
                <div className="w-1 h-8 md:w-8 md:h-1 bg-finanses-border rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ left: "-100%" }}
                    whileInView={{ left: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 + 0.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-1/2 bg-finanses-blue/30"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
