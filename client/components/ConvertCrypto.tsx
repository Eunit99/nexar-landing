import { ChevronDown, ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "./atoms/Button";

export default function ConvertCrypto() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      {/* Background with SVG pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bg/convert-crypto-bg.svg"
          alt="background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="bg-white rounded-[40px] p-8 lg:p-16 shadow-xl relative overflow-hidden">

          {/* Decorative Coin Icons */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-8 lg:left-8 w-16 h-16 lg:w-24 lg:h-24 pointer-events-none">
            <img src="/assets/icons/bnb.svg" alt="BNB" className="w-full h-full animate-float" />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:bottom-8 lg:right-8 w-16 h-16 lg:w-32 lg:h-32 pointer-events-none">
            <img src="/assets/icons/solana.svg" alt="Solana" className="w-full h-full animate-float-delayed" />
          </div>
          <div className="absolute top-4 left-20 hidden lg:block w-8 h-8 opacity-20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-nexar-purple">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-6 lg:gap-8 mb-12 lg:mb-16">
            <h2 className="font-poppins text-3xl lg:text-5xl font-extrabold text-[#101828]">
              Convert Crypto to Naira
            </h2>
            <p className="font-tt-norms text-base lg:text-lg text-[#475467] leading-[160%]">
              Nexar provides mid-market rates, updated in real time. We ensure there are no hidden fees, offering transparent and reliable currency conversion for users worldwide.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:gap-12 max-w-5xl mx-auto">
            {/* Conversion Inputs */}
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">

              {/* YOU SEND */}
              <div className="flex-1 w-full flex flex-col gap-3">
                <span className="font-tt-norms text-xs font-bold text-[#98A2B3] uppercase tracking-wider pl-6">
                  YOU SEND
                </span>
                <div className="relative flex items-center bg-white border border-[#D0D5DD] rounded-2xl p-4 lg:p-6 shadow-sm focus-within:border-nexar-purple transition-all h-[80px] lg:h-[100px]">
                  <input
                    type="text"
                    defaultValue="200"
                    className="flex-1 bg-transparent border-none outline-none font-tt-norms text-2xl lg:text-3xl font-bold text-[#101828]"
                  />
                  <div className="flex items-center gap-2 bg-[#F9F5FF] px-4 py-2 lg:py-3 rounded-xl border border-[#F4EBFF] cursor-pointer hover:bg-[#F4EBFF] transition-colors">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#F3A019] rounded-full flex items-center justify-center text-white font-bold text-xs">
                      ₿
                    </div>
                    <span className="font-tt-norms text-lg lg:text-xl font-bold text-[#344054]">BTC</span>
                    <ChevronDown className="w-5 h-5 text-[#667085]" />
                  </div>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#D0D5DD] flex items-center justify-center bg-white shadow-sm">
                  <ArrowRight className="hidden lg:block w-6 h-6 text-[#101828]" />
                  <ArrowDown className="lg:hidden w-6 h-6 text-[#101828]" />
                </div>
              </div>

              {/* YOU RECEIVE */}
              <div className="flex-1 w-full flex flex-col gap-3">
                <span className="font-tt-norms text-xs font-bold text-[#98A2B3] uppercase tracking-wider pl-6">
                  YOU RECEIVE
                </span>
                <div className="relative flex items-center bg-white border border-[#D0D5DD] rounded-2xl p-4 lg:p-6 shadow-sm focus-within:border-nexar-purple transition-all h-[80px] lg:h-[100px]">
                  <input
                    type="text"
                    defaultValue="26,000,000,000 NGN"
                    readOnly
                    className="flex-1 bg-transparent border-none outline-none font-tt-norms text-2xl lg:text-3xl font-bold text-[#101828]"
                  />
                  <div className="flex items-center gap-2 bg-[#F9F5FF] px-4 py-2 lg:py-3 rounded-xl border border-[#F4EBFF] cursor-pointer hover:bg-[#F4EBFF] transition-colors">
                    <img src="/assets/icons/flags/ng.svg" alt="NGN" className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover" />
                    <span className="font-tt-norms text-lg lg:text-xl font-bold text-[#344054]">NGN</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Fee Summary */}
            <div className="bg-[#F9F5FF] rounded-3xl p-6 lg:p-10 flex flex-col gap-6">
              <div className="flex justify-between items-center text-base lg:text-lg">
                <span className="font-tt-norms font-medium text-[#475467]">Connected bank account fee</span>
                <span className="font-poppins font-bold text-[#101828]">1,700 NGN</span>
              </div>
              <div className="flex justify-between items-center text-base lg:text-lg">
                <span className="font-tt-norms font-medium text-[#475467]">Our Fee</span>
                <span className="font-poppins font-bold text-[#101828]">3,780 NGN</span>
              </div>
              <div className="w-full h-px bg-[#E4E7EC]" />
              <div className="flex justify-between items-center text-lg lg:text-xl">
                <span className="font-tt-norms font-bold text-[#101828]">Total included fees (0.55%)</span>
                <span className="font-poppins font-bold text-[#101828]">5,480 NGN</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto px-12 h-16 rounded-full text-lg font-bold shadow-lg shadow-purple-200">
                Convert Now
              </Button>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}} />
    </section>
  );
}
