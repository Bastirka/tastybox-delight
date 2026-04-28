import { Phone, MapPin, Facebook, Mail, Star, Navigation } from "lucide-react";
import logo from "@/assets/tastybox-logo.png";

const FB_PAGE = "https://www.facebook.com/profile.php?id=61580537777667";
const FB_REVIEWS = "https://www.facebook.com/profile.php?id=61580537777667&sk=reviews";
const GMAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Stacijas%20iela%209A%2C%20R%C4%93zekne%2C%20Latvia";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-cream p-1.5">
              <img src={logo} alt="TastyBox" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-display text-xl font-bold text-cream">TastyBox</div>
              <div className="text-xs text-primary uppercase tracking-widest">Rēzekne</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Garšīgas kompleksās pusdienas, pamatēdieni, uzkodas un dzērieni uz vietas un līdzņemšanai. <span className="text-heart">❤</span>
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-cream mb-4">Kontakti</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Stacijas iela 9A, Rēzekne, Latvia</span>
            </li>
            <li>
              <a href="tel:+37122438667" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Phone className="w-4 h-4 text-primary" /><span>+371 22 438 667</span>
              </a>
            </li>
            <li>
              <a href="mailto:riel2025@inbox.lv" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Mail className="w-4 h-4 text-primary" /><span>riel2025@inbox.lv</span>
              </a>
            </li>
            <li>
              <a href={GMAPS_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Navigation className="w-4 h-4 text-primary" /> <span>Atvērt Google Maps</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-cream mb-4">Sekojiet mums</h4>
          <ul className="space-y-3 text-sm mb-5">
            <li>
              <a href={FB_PAGE} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Facebook className="w-4 h-4 text-primary" /> <span>Facebook lapa</span>
              </a>
            </li>
            <li>
              <a href={FB_REVIEWS} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Star className="w-4 h-4 text-primary" /> <span>Facebook atsauksmes</span>
              </a>
            </li>
          </ul>

          <h4 className="font-display text-lg font-bold text-cream mb-3">Navigācija</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#sakums" className="hover:text-primary">Sākums</a></li>
            <li><a href="#edienkarte" className="hover:text-primary">Ēdienkarte</a></li>
            <li><a href="#atrasanas" className="hover:text-primary">Atrašanās vieta</a></li>
            <li><a href="#kontakti" className="hover:text-primary">Kontakti</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 TastyBox Rēzekne. Visas tiesības aizsargātas.
      </div>
    </footer>
  );
}
