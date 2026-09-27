"use client";

import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-32 lg:py-48 bg-finanses-dark text-white relative overflow-hidden text-center flex flex-col items-center justify-center" id="keşfet">
      {/* Animated Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-finanses-blue/30 rounded-full blur-[150px] pointer-events-none" 
      />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
        >
          Finansa Ses Ver.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-2xl text-white/60 font-medium mb-12 max-w-2xl mx-auto"
        >
          Ön muhasebe ve sipariş yönetimini daha akıllı bir deneyime dönüştürün.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="px-10 py-5 bg-white text-finanses-dark rounded-full font-semibold text-lg hover:bg-white/90 transition-colors shadow-2xl">
            FinanSes&apos;i Keşfet
          </button>
        </motion.div>
      </div>
    </section>
  );
}
