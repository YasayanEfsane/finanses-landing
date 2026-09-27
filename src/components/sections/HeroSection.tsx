"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles, TrendingUp, CreditCard, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-finanses-muted border border-finanses-border text-xs font-medium text-foreground/80 mb-8"
        >
          <Sparkles size={14} className="text-finanses-blue" />
          Yapay zekâ destekli finansal otomasyon
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6"
        >
          Ön muhasebenizi <br className="hidden md:block" />
          <span className="text-foreground/40">yapay zekâya bırakın.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 leading-relaxed font-medium mb-10"
        >
          FinanSes; ön muhasebe ve sipariş yönetimi süreçlerini yapay zekâ ile daha akıllı, düzenli ve erişilebilir bir deneyime dönüştürür.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-finanses-dark text-white rounded-full font-semibold text-base hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10">
            FinanSes&apos;i Keşfet
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-finanses-border text-foreground rounded-full font-semibold text-base hover:bg-finanses-muted transition-colors flex items-center justify-center gap-2">
            Nasıl Çalışır? <ChevronRight size={18} className="text-foreground/50" />
          </button>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-sm font-medium text-foreground/40"
        >
          Ön muhasebe • Sipariş yönetimi • Yapay zekâ
        </motion.div>
      </div>

      {/* Product Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 lg:mt-24 max-w-[1200px] mx-auto px-6 relative z-10"
      >
        <div className="relative rounded-2xl bg-white border border-finanses-border shadow-2xl overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[600px]">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-64 border-r border-finanses-border bg-finanses-muted/30 p-6">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-6 h-6 bg-finanses-dark rounded flex items-center justify-center text-white font-bold text-xs">F</div>
              <span className="font-semibold text-sm">FinanSes Workspace</span>
            </div>
            <nav className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-lg border border-finanses-border shadow-sm text-sm font-medium text-foreground">
                <Activity size={16} /> Özet
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-foreground/60 hover:text-foreground">
                <CreditCard size={16} /> Faturalar
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-foreground/60 hover:text-foreground">
                <TrendingUp size={16} /> Siparişler
              </div>
            </nav>
          </div>

          {/* Main Area */}
          <div className="flex-1 p-6 md:p-10 bg-finanses-surface overflow-hidden relative">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold tracking-tight">Finansal Özet</h2>
              <div className="text-sm font-medium text-foreground/50">Ekim 2026</div>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl border border-finanses-border bg-finanses-muted/20">
                <div className="text-xs font-medium text-foreground/50 mb-1">Toplam Gelir</div>
                <div className="text-2xl font-semibold tracking-tight">₺124.500</div>
                <div className="mt-2 text-xs font-medium text-emerald-600 flex items-center gap-1">
                  <ArrowUpRight size={14} /> %12 bu ay
                </div>
              </div>
              <div className="p-4 rounded-xl border border-finanses-border bg-finanses-muted/20">
                <div className="text-xs font-medium text-foreground/50 mb-1">Toplam Gider</div>
                <div className="text-2xl font-semibold tracking-tight">₺48.200</div>
                <div className="mt-2 text-xs font-medium text-rose-600 flex items-center gap-1">
                  <ArrowDownRight size={14} /> %4 bu ay
                </div>
              </div>
              <div className="hidden md:block p-4 rounded-xl border border-finanses-border bg-finanses-muted/20">
                <div className="text-xs font-medium text-foreground/50 mb-1">Aktif Siparişler</div>
                <div className="text-2xl font-semibold tracking-tight">34</div>
                <div className="mt-2 text-xs font-medium text-foreground/50">8 teslimatta</div>
              </div>
            </div>

            {/* AI Assistant Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-[calc(100%-3rem)] md:w-80 bg-white border border-finanses-border/80 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-xl"
            >
              <div className="p-4 border-b border-finanses-border flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-finanses-blue/10 flex items-center justify-center">
                  <Sparkles size={16} className="text-finanses-blue" />
                </div>
                <div>
                  <div className="text-sm font-semibold">FinanSes AI</div>
                  <div className="text-xs text-foreground/50">Akıllı Analiz</div>
                </div>
              </div>
              <div className="p-4 text-sm text-foreground/80 leading-relaxed font-medium">
                Son 7 gün içinde giderlerinizde %15&apos;lik bir artış var. Lojistik maliyetleri ortalamanın üzerinde. Detaylı raporu incelemek ister misiniz?
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gradient Blur Effect behind Mockup */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-finanses-blue/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />
      </motion.div>
    </section>
  );
}
