import { motion } from "framer-motion";
import { Star, Quote, Facebook } from "lucide-react";
import { reviews } from "@/data/menu";

export function Reviews() {
  return (
    <section id="atsauksmes" className="py-20 md:py-28 bg-secondary/20 organic-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs text-primary uppercase tracking-[0.25em] mb-3">Klientu balsis</div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">Atsauksmes</h2>
          <div className="mt-4 inline-flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">4 atsauksmes Facebook</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-3xl p-6 hover:border-primary/40 hover:shadow-glow transition-all relative"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-5 right-5" />
              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-cream leading-relaxed mb-4">"{r.text}"</p>
              <div className="text-sm text-muted-foreground font-medium">— {r.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://www.facebook.com/tastyboxrezekne" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-[1.02] transition-transform">
            <Facebook className="w-5 h-5" /> Iesaki TastyBox Rēzekne Facebook lapā
          </a>
        </div>
      </div>
    </section>
  );
}
