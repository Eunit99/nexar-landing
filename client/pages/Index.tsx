import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PayBills from "@/components/PayBills";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <PayBills />
        <Testimonials />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
