import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PayBills from "@/components/PayBills";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ConvertCrypto from "@/components/ConvertCrypto";





export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <PayBills />
        <ConvertCrypto />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
