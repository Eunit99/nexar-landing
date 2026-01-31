import { Link } from "react-router-dom";
import { BadgeCheck } from "lucide-react";
import { Button } from "./atoms/Button";

export default function Hero() {
  return (
    <section className="bg-white">
      {/* Top Section: Text Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          {/* Latest Read Badge */}
          <div className="inline-flex items-center gap-2 p-1 pr-4 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] group cursor-pointer transition-all hover:bg-[#F4EBFF]">
            <span className="bg-white px-2.5 py-0.5 rounded-full text-[12px] font-semibold text-nexar-purple border border-[#E9D7FE] shadow-sm">
              Latest Read
            </span>
            <span className="text-[14px] font-medium text-nexar-purple">
              Nexar made over 1M profit last year
            </span>
            <span className="text-nexar-purple text-[14px] font-bold group-hover:translate-x-1 transition-transform">
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
              <Link to="/register">Register Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-10 h-[60px] text-[18px] min-w-[200px] border-[#D0D5DD] text-[#344054] hover:bg-gray-50 hover:text-[#101828]" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 mb-16 lg:mb-24">
        <div className="rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000"
            alt="Seamless Digital Experience"
            className="w-full h-auto object-cover aspect-[16/7]"
          />
        </div>
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
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 transition-all group-hover:bg-white/20">
        <BadgeCheck className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-tt-norms text-[18px] font-bold text-white transition-colors">
          {title}
        </h3>
        <p className="font-tt-norms text-[14px] text-white/80 leading-[150%] max-w-[260px]">
          {description}
        </p>
      </div>
    </div>
  );
}
