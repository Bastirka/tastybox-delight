import { motion } from "framer-motion";
import box from "@/assets/food-box.jpg";
import main from "@/assets/food-main.jpg";
import salad from "@/assets/food-salad.jpg";
import dessert from "@/assets/food-dessert.jpg";

export function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs text-primary uppercase tracking-[0.25em] mb-3">Par mums</div>
          <h2 className="text-4xl md:text-5xl font-bold text-cream leading-tight">
            Mājīga vieta <span className="italic text-primary">Stacijas ielā 9A</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            TastyBox Rēzekne ir vieta Stacijas ielā 9A, kur ikdienā pieejamas sātīgas
            kompleksās pusdienas, pamatēdieni, uzkodas un dzērieni. Ēdieni piemēroti gan
            pusdienu pauzei, gan pasūtīšanai līdzņemšanai.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Mūsu virtuvē viss tiek gatavots ar mīlestību <span className="text-heart">❤</span> —
            no klasiskām karbonādēm līdz svaigiem salātiem un mājās ceptiem desertiem.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-2xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary">9A</div>
              <div className="text-xs text-muted-foreground mt-1">Stacijas iela</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary">5★</div>
              <div className="text-xs text-muted-foreground mt-1">Klientu vērtējums</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground mt-1">Mājās gatavots</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <img src={box} alt="Takeaway box" loading="lazy" className="w-full aspect-square object-cover rounded-3xl shadow-elegant" />
            <img src={salad} alt="Svaigs salāts" loading="lazy" className="w-full aspect-[4/5] object-cover rounded-3xl shadow-elegant" />
          </div>
          <div className="space-y-4 pt-10">
            <img src={main} alt="Pamatēdiens" loading="lazy" className="w-full aspect-[4/5] object-cover rounded-3xl shadow-elegant" />
            <img src={dessert} alt="Deserts" loading="lazy" className="w-full aspect-square object-cover rounded-3xl shadow-elegant" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
