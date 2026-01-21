import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import QuoteBanner from "@/components/about/QuoteBanner";
import AboutTeam from "@/components/about/AboutTeam";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      <AboutHero />
      <AboutMission />
      <QuoteBanner 
        text="Behind every feature we build is a team that truly cares — thinkers, designers, and doers driven by one shared goal: to make digital access smarter for everyone."
      />
      <AboutTeam />
      <AboutValues />
      <AboutCTA />
      <Footer />
    </div>
  );
}
