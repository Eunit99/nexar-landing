import { ArrowUpRight } from "lucide-react";
import { Button } from "./atoms/Button";

export default function PayBills() {
  return (
    <section className="relative w-full min-h-[700px] lg:h-[800px] flex items-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg/virtual-numbers-bg.svg"
          alt="Friends using Nexar Virtual Numbers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 lg:bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 lg:from-black/60 lg:via-transparent lg:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full relative z-10 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-12">

          {/* Content Block */}
          <div className="flex flex-col items-center lg:items-start lg:text-left gap-8 lg:gap-10 max-w-2xl mx-auto lg:mx-0">
            {/* Top Title Tag (right on mobile, Right on desktop) */}
            <h3 className="font-poppins lg:hidden text-[18px] font-bold text-white mb-4 leading-tight">
              Purchase Virtual Numbers
            </h3>

            <div className="flex flex-col gap-6">
              <h2 className="font-poppins text-[32px] lg:text-[55px] font-extrabold text-white leading-[105%] tracking-tight">
                Virtual numbers for <br />
                fast, global <span className="font-poppins text-[#674EF7]">sign-ups</span>
              </h2>
              <p className="font-tt-norms text-lg lg:text-xl text-gray-200 leading-[155%] max-w-md mx-auto lg:mx-0">
                Verify accounts quickly with numbers from multiple countries
              </p>
            </div>

            <Button size="lg" className="w-fit h-[64px] px-10 text-lg gap-3 rounded-full bg-[#674EF7] hover:bg-[#533FC8] border-none shadow-lg transition-transform active:scale-95">
              Buy Virtual Number <ArrowUpRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Side Content (Desktop Only) */}
          <div className="hidden lg:flex flex-col justify-between items-end h-[500px] py-10">
            <h3 className="font-poppins lg:text-[30px] font-extrabold text-white">
              Purchase Virtual Numbers
            </h3>

            {/* Translucent Notification Card */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[32px] flex items-center gap-6 max-w-[440px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-3 shadow-inner">
                <img
                  src="/favicon.png"
                  alt="Nexar Logo"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-tt-norms text-[16px] font-bold text-white leading-tight">
                  Thank You For Purchasing Nexar eSim
                </p>
                <p className="font-tt-norms text-[14px] text-gray-100/90 leading-snug">
                  You have received a payment of <span className="font-tt-norms text-white font-bold decoration-nexar-purple decoration-2">NGN 25,000</span> from a crypto exchange
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
