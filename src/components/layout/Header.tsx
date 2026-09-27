"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Ürün", href: "#urun" },
  { name: "Çözüm", href: "#cozum" },
  { name: "Nasıl Çalışır?", href: "#nasil-calisir" },
  { name: "Hakkımızda", href: "#hakkimizda" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-finanses-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-finanses-dark rounded-xl flex items-center justify-center text-white font-bold text-xl tracking-tighter">
            F
          </div>
          <span className="font-semibold text-lg tracking-tight">FinanSes</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#keşfet"
            className="bg-finanses-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm"
          >
            FinanSes&apos;i Keşfet
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6 text-2xl font-semibold tracking-tight">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground border-b border-finanses-border pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Link
                href="#keşfet"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center bg-finanses-blue text-white px-6 py-4 rounded-2xl text-lg font-medium hover:bg-finanses-blue-dark transition-colors w-full"
              >
                FinanSes&apos;i Keşfet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
