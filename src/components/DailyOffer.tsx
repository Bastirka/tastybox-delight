import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { dailyOffer } from "@/data/menu";

export function DailyOffer() {
  return (
    <section id="dienas" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs text-primary uppercase tracking-[0.25em] mb-3">Šodien virtuvē</div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">Dienas piedāvājums</h2>
          <p className="mt-4 text-muted-foreground">Mūsu šodienas kompleksā piedāvājuma sastāvs — sātīgs, silts un mājās gatavots.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {dailyOffer.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-glow transition-all"
            >
              {item.image ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="text-6xl opacity-30">🍽️</span>
                </div>
              )}
              <div className="p-5">
                <div className="text-[10px] text-primary uppercase tracking-widest font-bold">{item.type}</div>
                <h3 className="font-display text-lg font-bold text-cream mt-1">{item.name}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.description}</p>
                <div className="mt-3 text-lg font-bold text-primary">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto flex items-start gap-3 p-5 rounded-2xl bg-secondary/40 border border-border">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Dienas piedāvājums var mainīties. Precīzāku informāciju jautājiet pa tālruni vai Messenger.
          </p>
        </div>
      </div>
    </section>
  );
}
