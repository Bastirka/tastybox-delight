import { motion } from "framer-motion";
import { Phone, MessageCircle, Facebook, Package, Coffee, UtensilsCrossed, Zap } from "lucide-react";

const features = [
  { icon: Package, label: "Līdzņemšanai" },
  { icon: Coffee, label: "Uz vietas" },
  { icon: UtensilsCrossed, label: "Kompleksās pusdienas" },
  { icon: Zap, label: "Ātri un garšīgi" },
];

export function OrderCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] bg-gradient-to-br from-card via-secondary to-card border border-primary/20 p-8 md:p-14 overflow-hidden shadow-elegant"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-heart/10 rounded-full blur-3xl" />

          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-cream">Vēlies pasūtīt?</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Zvani vai raksti Messenger — sagatavosim pasūtījumu līdzņemšanai <span className="text-heart">❤</span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+37122438667" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-[1.02] transition-transform">
                <Phone className="w-5 h-5" /> Zvanīt tagad
              </a>
              <a href="https://m.me/tastyboxrezekne" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-cream text-background font-bold hover:scale-[1.02] transition-transform">
                <MessageCircle className="w-5 h-5" /> Rakstīt Messenger
              </a>
              <a href="https://www.facebook.com/tastyboxrezekne" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-border text-cream font-bold hover:border-primary/50 transition-colors">
                <Facebook className="w-5 h-5" /> Facebook lapa
              </a>
            </div>
          </div>

          <div className="relative mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {features.map(f => (
              <div key={f.label} className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-background/40 border border-border">
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <f.icon className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-cream">{f.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
