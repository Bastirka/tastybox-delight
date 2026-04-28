import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Star, Navigation, ExternalLink, Clock } from "lucide-react";

const FB_REVIEWS = "https://www.facebook.com/profile.php?id=61580537777667&sk=reviews";
const MESSENGER = "https://m.me/61580537777667";
// Exact coordinates for TastyBox Rēzekne, Stacijas iela 9A
const LAT = 56.519729;
const LNG = 27.345756;
const GMAPS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

export function Location() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  const embedSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${LAT},${LNG}&zoom=17&maptype=roadmap`
    : `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.01}%2C${LAT - 0.005}%2C${LNG + 0.01}%2C${LAT + 0.005}&layer=mapnik&marker=${LAT}%2C${LNG}`;

  return (
    <section id="atrasanas" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 organic-pattern" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs text-primary uppercase tracking-[0.25em] mb-3">
            <Navigation className="w-3.5 h-3.5" /> Atrašanās vieta
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">Kur mūs atrast?</h2>
          <p className="mt-4 text-muted-foreground">
            Atrodamies Stacijas ielā 9A, Rēzeknē — ērti piebraukt un paņemt pasūtījumu līdzņemšanai.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-3xl bg-gradient-to-br from-card via-secondary/60 to-card border border-primary/20 p-7 md:p-9 shadow-elegant overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/15 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-primary uppercase tracking-widest">TastyBox</div>
                  <h3 className="font-display text-2xl font-bold text-cream leading-tight">Rēzekne</h3>
                </div>
              </div>

              <div className="space-y-4 mb-7">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Adrese</div>
                    <div className="text-cream font-semibold">Stacijas iela 9A, Rēzekne</div>
                  </div>
                </div>

                <a href="tel:+37122438667" className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Telefons</div>
                    <div className="text-cream font-semibold group-hover:text-primary transition-colors">
                      +371 22 438 667
                    </div>
                  </div>
                </a>

                <a href="mailto:riel2025@inbox.lv" className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">E-pasts</div>
                    <div className="text-cream font-semibold group-hover:text-primary transition-colors">
                      riel2025@inbox.lv
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Darba laiks</div>
                    <div className="text-cream font-semibold">P–Pk 11:00–18:00 · S 11:00–16:00</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+37122438667"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  <Phone className="w-4 h-4" /> Zvanīt
                </a>
                <a
                  href={FB_REVIEWS}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-cream text-background font-bold hover:scale-[1.02] transition-transform"
                >
                  <Star className="w-4 h-4 fill-current" /> Facebook atsauksmes
                </a>
                <a
                  href={MESSENGER}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border-2 border-primary/40 text-cream font-bold hover:bg-primary/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Rakstīt Messenger
                </a>
                <a
                  href={GMAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border-2 border-border text-cream font-bold hover:border-primary/50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Atvērt Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-border shadow-elegant min-h-[420px] lg:min-h-[600px] bg-card"
          >
            <iframe
              src={embedSrc}
              title="TastyBox Rēzekne karte"
              className="w-full h-full absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Floating badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 pointer-events-none">
              <div className="bg-background/90 backdrop-blur-xl border border-primary/30 rounded-2xl px-4 py-3 shadow-elegant flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-primary">TastyBox</div>
                  <div className="text-sm font-bold text-cream leading-tight">Stacijas iela 9A</div>
                </div>
              </div>
            </div>

            {/* Floating action */}
            <a
              href={GMAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-background/90 backdrop-blur-xl border border-primary/30 text-cream text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors shadow-elegant"
            >
              <Navigation className="w-4 h-4" /> Norādes
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
