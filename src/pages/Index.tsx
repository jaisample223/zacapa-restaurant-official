import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Testimonials from "@/components/Testimonials";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-white min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <MenuHighlights />
    <Testimonials />
    <Reservations />
    <Footer />
  </div>
);

export default Index;
