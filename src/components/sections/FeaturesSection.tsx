"use client";

import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Ön muhasebe, daha akıllı.",
    desc: "Yapay zekâ destekli altyapımız, fiş ve faturalarınızı otomatik tanır, sınıflandırır ve muhasebe kayıtlarını saniyeler içinde hazırlar. Siz sadece onaylarsınız.",
  },
  {
    num: "02",
    title: "Siparişler, tek akışta.",
    desc: "Tüm satış kanallarından gelen siparişler merkezi bir ekrana düşer. Stok durumu, ödeme onayı ve kargo aşaması tek bir yerden kontrol edilir.",
  },
  {
    num: "03",
    title: "Veri, anlamlı hale gelsin.",
    desc: "Karmaşık finansal tablolar yerine, işletmenizin sağlığını gösteren net ve eyleme dönüştürülebilir içgörüler sunuyoruz.",
  },
  {
    num: "04",
    title: "Rutin işler, otomatikleşsin.",
    desc: "Tekrarlayan ödemeler, düzenli faturalandırmalar ve hatırlatmalar... FinanSes rutin operasyonları sizin yerinize yönetir.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-finanses-muted/30 border border-finanses-border rounded-3xl p-8 lg:p-12 overflow-hidden relative group"
            >
              <div className="text-sm font-bold text-finanses-blue/50 mb-6 font-mono">
                {feature.num}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/60 text-lg font-medium leading-relaxed max-w-sm mb-12">
                {feature.desc}
              </p>
              
              {/* Conceptual Visual */}
              <div className="w-full h-48 rounded-2xl bg-white border border-finanses-border shadow-sm flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-finanses-muted to-transparent opacity-50" />
                <div className="text-foreground/20 font-semibold relative z-10">
                  Görsel Konsept: {feature.num}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
