"use client";

import { motion } from "framer-motion";
import { Sparkles, User, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function AIInteractionSection() {
  return (
    <section className="py-24 lg:py-32 bg-finanses-dark text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-finanses-blue/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            FinanSes&apos;e sor. <br />
            <span className="text-white/40">O gerisini düzenlesin.</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Chat Interface */}
          <div className="flex flex-col gap-6 mb-8">
            {/* User Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="self-end max-w-[80%] flex items-end gap-3"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 py-3.5 rounded-2xl rounded-br-sm text-lg font-medium">
                Bugünkü siparişlerimi özetle.
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <User size={16} className="text-white/50" />
              </div>
            </motion.div>

            {/* AI Response */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="self-start max-w-[90%] flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-finanses-blue flex items-center justify-center shrink-0 mt-1">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-finanses-surface-dark border border-white/10 text-white px-5 py-3.5 rounded-2xl rounded-tl-sm text-lg font-medium shadow-xl">
                  Bugün işlenen siparişleri, durumlarına göre senin için özetledim.
                </div>
                
                {/* Resulting UI Component */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="bg-white text-foreground rounded-2xl p-5 shadow-2xl border border-white/20 w-full sm:w-96"
                >
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-finanses-border">
                    <span className="font-semibold text-sm">Günlük Özet</span>
                    <span className="text-xs font-medium bg-finanses-muted px-2 py-1 rounded text-foreground/60">27 Ekim</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        <span className="text-sm font-medium">Tamamlanan</span>
                      </div>
                      <span className="font-semibold text-sm">12 Sipariş</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-amber-500" />
                        <span className="text-sm font-medium">Hazırlanıyor</span>
                      </div>
                      <span className="font-semibold text-sm">5 Sipariş</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="text-rose-500" />
                        <span className="text-sm font-medium">İptal Edilen</span>
                      </div>
                      <span className="font-semibold text-sm text-foreground/50">Yok</span>
                    </div>
                  </div>
                  
                  <div className="mt-5 pt-4 border-t border-finanses-border flex justify-between items-center">
                    <span className="text-xs text-foreground/50 font-medium">Toplam Hacim</span>
                    <span className="font-bold">₺18.450</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
