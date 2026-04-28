import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { categories, menuItems } from "@/data/menu";

export function MenuSection() {
  const [active, setActive] = useState<string>("Visi");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return menuItems.filter(i => {
      const catOk = active === "Visi" || i.category === active;
      const q = query.trim().toLowerCase();
      const qOk = !q || i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [active, query]);

  return (
    <section id="edienkarte" className="py-20 md:py-28 bg-secondary/20 organic-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs text-primary uppercase tracking-[0.25em] mb-3">Mūsu piedāvājums</div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">Ēdienkarte</h2>
          <p className="mt-4 text-muted-foreground">Izvēlieties kategoriju vai meklējiet savu mīļāko ēdienu.</p>
        </div>

        <div className="mb-8 flex flex-col gap-4">
          <div className="relative max-w-md mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Meklēt ēdienu..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-border text-foreground/80 hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              {item.image && (
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {item.tag && (
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      item.tag === "Populārs" ? "bg-heart text-white" :
                      item.tag === "Jaunums" ? "bg-primary text-primary-foreground" :
                      "bg-cream text-background"
                    }`}>
                      {item.tag}
                    </span>
                  )}
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-[10px] text-primary uppercase tracking-widest font-bold mb-1">{item.category}</div>
                    <h3 className="font-display text-xl font-bold text-cream">{item.name}</h3>
                  </div>
                  <span className="text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                {!item.image && item.tag && (
                  <span className={`inline-block mt-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.tag === "Populārs" ? "bg-heart/20 text-heart" :
                    item.tag === "Jaunums" ? "bg-primary/20 text-primary" :
                    "bg-cream/20 text-cream"
                  }`}>
                    {item.tag}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Nekas neatbilst meklējumam.</p>
        )}
      </div>
    </section>
  );
}
