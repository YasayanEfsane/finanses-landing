"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Eye, ShieldCheck, Check } from "lucide-react";

export function TrustAudienceSection() {
  return (
    <div className="bg-background">
      {/* Transformation Section */}
      <section className="py-24 lg:py-32 border-b border-finanses-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-foreground/40">Öncesi</h3>
              <ul className="space-y-6">
                {[
                  "Dağınık belgeler",
                  "Manuel işlemler",
                  "Farklı ekranlar",
                  "Takip zorluğu"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg md:text-xl font-medium text-foreground/60">
                    <div className="w-2 h-2 rounded-full bg-rose-500/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Arrow (Desktop) */}
            <div className="hidden lg:flex items-center justify-center">
              <ArrowRight size={48} className="text-finanses-border" strokeWidth={1} />
            </div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 p-8 lg:p-12 bg-finanses-muted/30 rounded-3xl border border-finanses-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-finanses-blue/5 rounded-full blur-[80px]" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 relative z-10">FinanSes Sonrası</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Tek akış",
                  "Düzenli veri",
                  "Otomasyon",
                  "Daha kontrollü süreç"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg md:text-xl font-semibold text-foreground">
                    <div className="w-6 h-6 rounded-full bg-finanses-blue/10 flex items-center justify-center">
                      <Check size={14} className="text-finanses-blue" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-24 lg:py-32" id="hakkimizda">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">
            FinanSes kimler için?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              "Küçük İşletmeler",
              "KOBİ'ler",
              "E-ticaret İşletmeleri",
              "Sipariş Yoğun İşletmeler"
            ].map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-finanses-border bg-white flex items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-lg md:text-xl tracking-tight">{audience}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 bg-finanses-dark text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-16"
          >
            Finansal teknoloji, <br />
            <span className="text-white/40">önce güven ister.</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { icon: Eye, label: "Sade deneyim" },
              { icon: Lock, label: "Düzenli bilgi" },
              { icon: ShieldCheck, label: "Kontrollü süreç" },
              { icon: Check, label: "Anlaşılır arayüz" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
                <item.icon size={18} className="text-finanses-blue" />
                <span className="font-medium text-sm md:text-base">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BalTech Section */}
      <section className="py-24 border-b border-finanses-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-finanses-muted text-xs font-bold tracking-widest text-foreground/50 mb-6 uppercase">
            Geliştirici Ekip
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">BalTech</h2>
          <p className="text-lg text-foreground/60 font-medium">
            FinanSes, BalTech ekibi tarafından 2026 TEKNOFEST Finansal Teknolojiler Yarışması kapsamında geliştirilmektedir.
          </p>
        </div>
      </section>
    </div>
  );
}
