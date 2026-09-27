"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    num: "01",
    title: "Finansal Özet",
    desc: "Tüm finansal durumunuzu tek bir ekranda, net ve anlaşılır bir şekilde görün.",
    color: "bg-emerald-500/10",
  },
  {
    num: "02",
    title: "Sipariş Yönetimi",
    desc: "Gelen siparişleri, durumlarını ve finansal etkilerini anlık olarak takip edin.",
    color: "bg-blue-500/10",
  },
  {
    num: "03",
    title: "Akıllı Veri İşleme",
    desc: "Faturalarınızı ve belgelerinizi yükleyin, yapay zekâ sizin için kategorize etsin.",
    color: "bg-purple-500/10",
  },
  {
    num: "04",
    title: "Yapay Zekâ Asistanı",
    desc: "Finansal verileriniz hakkında sorular sorun, saniyeler içinde analizler alın.",
    color: "bg-orange-500/10",
  },
];

export function ProductShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-background" id="urun">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 md:mb-32 max-w-3xl">
          İhtiyacınız olan finansal akış, <br className="hidden md:block" />
          <span className="text-foreground/40">tek bir yerde.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24 relative">
          {/* Left Text Track */}
          <div className="w-full md:w-1/2 flex flex-col">
            {features.map((feature, i) => (
              <div
                key={i}
                className="min-h-[50vh] md:min-h-[80vh] flex flex-col justify-center"
              >
                <div className="text-sm font-semibold tracking-widest text-finanses-blue mb-4">
                  {feature.num}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-foreground/60 font-medium max-w-md leading-relaxed">
                  {feature.desc}
                </p>
                
                {/* Mobile Mockup (visible only on mobile) */}
                <div className="md:hidden mt-8 w-full aspect-square rounded-2xl border border-finanses-border bg-finanses-muted/30 overflow-hidden flex items-center justify-center relative">
                  <div className={cn("absolute inset-0 opacity-50", feature.color)} />
                  <div className="text-foreground/30 font-semibold text-lg relative z-10">
                    UI Mockup: {feature.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sticky Mockup Track (visible only on desktop) */}
          <div className="hidden md:flex w-full md:w-1/2 h-screen sticky top-0 items-center justify-center">
            <div className="w-full aspect-square lg:aspect-[4/5] rounded-3xl border border-finanses-border bg-white shadow-2xl overflow-hidden relative flex flex-col">
              {/* Header */}
              <div className="h-12 border-b border-finanses-border bg-finanses-muted/20 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              
              {/* Content area that animates based on scroll */}
              <div className="flex-1 relative bg-finanses-surface-dark overflow-hidden flex items-center justify-center">
                <motion.div 
                  className="absolute inset-0 flex flex-col"
                  style={{
                    y: useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])
                  }}
                >
                  {features.map((feature, i) => (
                    <div key={i} className="w-full h-full shrink-0 flex items-center justify-center relative">
                      <div className={cn("absolute inset-0 opacity-20", feature.color)} />
                      <div className="text-white/40 font-semibold text-2xl relative z-10">
                        {feature.title} UI
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
