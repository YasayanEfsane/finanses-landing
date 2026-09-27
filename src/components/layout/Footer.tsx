import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-finanses-border bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-finanses-dark rounded-xl flex items-center justify-center text-white font-bold text-xl tracking-tighter">
              F
            </div>
            <span className="font-semibold text-xl tracking-tight">FinanSes</span>
          </div>
          <p className="text-foreground/60 text-sm font-medium">
            &quot;Finansa Ses Ver&quot;
          </p>
          <div className="mt-8 text-xs text-foreground/40 font-medium">
            <p>© 2026 BalTech.</p>
            <p className="mt-1">2026 TEKNOFEST Finansal Teknolojiler Yarışması Projesi</p>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end gap-4">
          <nav className="flex flex-col md:items-end gap-3 font-medium text-sm">
            <Link href="#urun" className="text-foreground/70 hover:text-foreground transition-colors">
              Ürün
            </Link>
            <Link href="#cozum" className="text-foreground/70 hover:text-foreground transition-colors">
              Çözüm
            </Link>
            <Link href="#nasil-calisir" className="text-foreground/70 hover:text-foreground transition-colors">
              Nasıl Çalışır?
            </Link>
            <Link href="#hakkimizda" className="text-foreground/70 hover:text-foreground transition-colors">
              Hakkımızda
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
