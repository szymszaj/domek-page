import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import Attractions from "@/components/Attractions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Amenities />
      <Offers />
      <Gallery />
      <Attractions />
      <Contact />
      <Footer />
      <FloatingPhone />
    </div>
  );
}
