import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DailyOffer } from "@/components/DailyOffer";
import { MenuSection } from "@/components/MenuSection";
import { OrderCTA } from "@/components/OrderCTA";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function App() {
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
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
