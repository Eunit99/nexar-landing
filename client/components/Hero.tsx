import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";

export default function Hero() {
  return (
    <section className="bg-white">
      {/* Top Section: Text Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          {/* Latest Read Badge */}
          <div className="inline-flex items-center gap-2 p-1 pr-4 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] group cursor-pointer transition-all hover:bg-[#F4EBFF]">
            <span className="font-tt-norms bg-white px-2.5 py-0.5 rounded-full text-[12px] font-semibold text-[#000000] border shadow-sm">
              Latest Read
            </span>
            <span className="font-tt-norms text-[14px] font-medium text-[#000000]">
              Nexar made over 1M profit last year
            </span>
            <span className="font-tt-norms text-nexar-purple text-[14px] font-bold group-hover:translate-x-1 transition-transform">
              »
            </span>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="font-poppins text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-[#101828] leading-[105%] tracking-tight">
              All-in-one platform for <br className="hidden lg:block" />
              <span className="text-nexar-purple">Virtual Numbers</span>
            </h1>
            <p className="font-tt-norms text-lg lg:text-[20px] text-[#475467] leading-[155%] max-w-2xl">
              At Nexar, we are dedicated to providing cutting-edge digital solutions that empower individuals and businesses to thrive in the online world.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-2">
            <Button size="lg" className="px-10 h-[60px] text-[18px] min-w-[200px]" asChild>
              <Link to="/register" className="font-tt-norms">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-ful overflow-hidden">
        <img
          src="/assets/bg/hero-bg.svg"
          alt="Seamless Digital Experience"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Benefits Content Section (As shown in screenshot) */}
      <div className="w-full bg-nexar-purple py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <BenefitItem
              title="Trusted by millions"
              description="Millions of customers globally move around £12 billion each month"
            />
            <BenefitItem
              title="Simplified Access"
              description="One login for everything you need, everywhere you go."
            />
            <BenefitItem
              title="Available in +180 Countries"
              description="We're always here to help you out, anytime any day."
            />
            <BenefitItem
              title="200k Active Orders"
              description="Built to make every digital process smoother and quicker."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start group">
      <img src="/assets/icons/check.svg" alt="check icon" />
      <div className="flex flex-col gap-2">
        <h3 className="font-poppins text-[18px] font-bold text-white transition-colors">
          {title}
        </h3>
        <p className="font-tt-norms text-[14px] text-white/80 leading-[150%] max-w-[260px]">
          {description}
        </p>
      </div>
    </div>
  );
}
