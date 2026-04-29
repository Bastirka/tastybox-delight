import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/tastybox-logo.png";

const links = [
  { href: "#sakums", label: "Sākums" },
  { href: "#dienas", label: "Dienas piedāvājums" },
  { href: "#edienkarte", label: "Ēdienkarte" },
  { href: "#atsauksmes", label: "Atsauksmes" },
  { href: "#atrasanas", label: "Atrašanās vieta" },
  { href: "#kontakti", label: "Kontakti" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-elegant" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#sakums" className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream p-1.5 shadow-glow">
            <img src={logo} alt="TastyBox Rēzekne logo" className="w-full h-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg md:text-xl font-bold text-cream">TastyBox</div>
            <div className="text-[10px] md:text-xs text-primary uppercase tracking-widest">Rēzekne</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+37122438667" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-all text-sm font-semibold">
            <Phone className="w-4 h-4" /> Zvanīt
          </a>
          <a href="https://food.bolt.eu/lv-lv/654-rezekne/p/170616-tasty-box/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#34D186] text-background hover:opacity-90 transition-all text-sm font-bold">
            <ShoppingBag className="w-4 h-4" /> Bolt Food
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-cream" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-foreground py-2 border-b border-border/50">
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <a href="tel:+37122438667" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-primary/40 text-primary font-semibold">
                  <Phone className="w-4 h-4" /> Zvanīt
                </a>
                <a href="https://food.bolt.eu/lv-lv/654-rezekne/p/170616-tasty-box/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#34D186] text-background font-bold">
                  <ShoppingBag className="w-4 h-4" /> Pasūtīt Bolt Food
                </a>
                <a href="https://m.me/61580537777667" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                  <MessageCircle className="w-4 h-4" /> Messenger
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
