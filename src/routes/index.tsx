import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DailyOffer } from "@/components/DailyOffer";
import { MenuSection } from "@/components/MenuSection";
import { OrderCTA } from "@/components/OrderCTA";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TastyBox Rēzekne | Kompleksās pusdienas un ēdieni līdzņemšanai" },
      { name: "description", content: "TastyBox Rēzekne, Stacijas iela 9A. Kompleksās pusdienas, pamatēdieni, uzkodas un dzērieni uz vietas un līdzņemšanai." },
      { property: "og:title", content: "TastyBox Rēzekne | Kompleksās pusdienas un ēdieni līdzņemšanai" },
      { property: "og:description", content: "Garšīgas kompleksās pusdienas Rēzeknē, Stacijas ielā 9A. Sātīgi pamatēdieni, uzkodas un dzērieni." },
      { property: "og:type", content: "restaurant" },
      { property: "og:locale", content: "lv_LV" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,500;1,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DailyOffer />
        <MenuSection />
        <OrderCTA />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
