import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinanSes | Yapay Zekâ Destekli Ön Muhasebe ve Sipariş Yönetimi",
  description: "FinanSes; yapay zekâ destekli ön muhasebe ve sipariş yönetimi ile finansal süreçleri daha akıllı, düzenli ve erişilebilir hale getiren bir fintech çözümüdür.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-finanses-blue/20 selection:text-finanses-blue flex flex-col">{children}</body>
    </html>
  );
}
