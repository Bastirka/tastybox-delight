import { motion } from "framer-motion";
import { Phone, UtensilsCrossed, MapPin, Flame, Package, Sparkles, ShoppingBag } from "lucide-react";
import heroMeal from "@/assets/hero-meal.jpg";

const badges = [
  { icon: UtensilsCrossed, label: "Kompleksās pusdienas" },
  { icon: Package, label: "Līdzņemšanai" },
  { icon: Flame, label: "Silti un svaigi" },
  { icon: MapPin, label: "Stacijas iela 9A" },
];

export function Hero() {
  return (
    <section id="sakums" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-hero organic-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5" /> RĒZEKNE • TAKEAWAY & CAFÉ
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.05]">
            Garšīgas <span className="text-primary italic">kompleksās</span> pusdienas Rēzeknē
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sātīgi pamatēdieni, uzkodas un dzērieni uz vietas vai līdzņemšanai
            <span className="text-cream font-medium"> Stacijas ielā 9A</span>.
            Mājīgi gatavoti ēdieni katru darba dienu <span className="text-heart">❤</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <a href="https://food.bolt.eu/lv-lv/654-rezekne/p/170616-tasty-box/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#34D186] text-background font-bold shadow-glow hover:scale-[1.02] transition-transform">
              <ShoppingBag className="w-5 h-5" /> Pasūtīt Bolt Food
            </a>
            <a href="#edienkarte" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-[1.02] transition-transform">
              <UtensilsCrossed className="w-5 h-5" /> Skatīt ēdienkarti
            </a>
            <a href="tel:+37122438667" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-cream/20 text-cream font-bold hover:bg-cream/5 transition-all">
              <Phone className="w-5 h-5" /> Zvanīt: 22 438 667
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map(b => (
              <div key={b.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/60 border border-border text-xs text-foreground/80 backdrop-blur-sm">
                <b.icon className="w-3.5 h-3.5 text-primary" /> {b.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
            <img src={heroMeal} alt="TastyBox lunch box ar kotletēm un kartupeļu biezeni" width={1024} height={1024} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
              <div className="text-xs text-primary uppercase tracking-widest mb-1">Šodienas piedāvājums</div>
              <div className="font-display text-xl md:text-2xl font-bold text-cream">Kotletes ar kartupeļu biezeni</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">+ salāti, dzēriens</span>
                <span className="text-2xl font-bold text-primary">5.20 €</span>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex absolute -left-6 top-10 bg-card border border-border rounded-2xl p-4 shadow-elegant items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-heart/15 flex items-center justify-center text-heart text-lg">❤</div>
            <div>
              <div className="text-xs text-muted-foreground">Klientu vērtējums</div>
              <div className="text-sm font-bold text-cream">Garšīgi, silti, svaigi</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
