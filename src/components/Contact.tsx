import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Clock, ExternalLink } from "lucide-react";

const hours = [
  { day: "Pirmdiena – Piektdiena", time: "11:00 – 18:00" },
  { day: "Sestdiena", time: "11:00 – 16:00" },
  { day: "Svētdiena", time: "Slēgts" },
];

export function Contact() {
  return (
    <section id="kontakti" className="py-20 md:py-28 bg-secondary/20 organic-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs text-primary uppercase tracking-[0.25em] mb-3">Sazinies ar mums</div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">Kontakti</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-7 md:p-9 shadow-elegant"
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-6">Atrašanās vieta un saziņa</h3>

            <div className="space-y-5">
              <a href="https://www.google.com/maps/search/?api=1&query=Stacijas+iela+9A,+Rēzekne" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Adrese</div>
                  <div className="text-cream font-semibold group-hover:text-primary transition-colors">Stacijas iela 9A, Rēzekne, Latvia</div>
                </div>
              </a>

              <a href="tel:+37122438667" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Telefons</div>
                  <div className="text-cream font-semibold group-hover:text-primary transition-colors">+371 22 438 667</div>
                </div>
              </a>

              <a href="mailto:riel2025@inbox.lv" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">E-pasts</div>
                  <div className="text-cream font-semibold group-hover:text-primary transition-colors">riel2025@inbox.lv</div>
                </div>
              </a>

              <a href="https://www.facebook.com/tastyboxrezekne" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Facebook / Messenger</div>
                  <div className="text-cream font-semibold group-hover:text-primary transition-colors">TastyBox Rēzekne</div>
                </div>
              </a>
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=Stacijas+iela+9A,+Rēzekne" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-[1.02] transition-transform">
              <ExternalLink className="w-4 h-4" /> Atvērt Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-7 md:p-9 shadow-elegant"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-cream">Darba laiks</h3>
            </div>

            <div className="space-y-3">
              {hours.map(h => (
                <div key={h.day} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                  <span className="text-foreground">{h.day}</span>
                  <span className={`font-bold ${h.time === "Slēgts" ? "text-heart" : "text-primary"}`}>{h.time}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-muted-foreground italic">
              * Darba laiku iespējams precizēt telefoniski.
            </p>

            <div className="mt-6 rounded-2xl overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=27.32%2C56.50%2C27.36%2C56.52&layer=mapnik&marker=56.5125%2C27.3389"
                className="w-full h-full"
                title="TastyBox Rēzekne karte"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
