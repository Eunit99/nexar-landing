import { CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section className="bg-nexar-purple py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            title="Trusted by millions"
            description="Millions of customers globally move around £12 billion each month"
          />
          <BenefitCard
            title="Simplified Access"
            description="One login for everything you need, everywhere you go."
          />
          <BenefitCard
            title="24/7 customer support"
            description="We're always here to help you out, anytime any day."
          />
          <BenefitCard
            title="Secure & Reliable"
            description="Built to make every digital process smoother and quicker."
          />
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  title: string;
  description: string;
}

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 fill-white" viewBox="0 0 39 38">
          <path d="M14.6299 2.64254C16.5138 -0.880334 21.5643 -0.880337 23.4482 2.64254L23.6513 3.02226C24.6773 4.94091 26.8263 5.97581 28.966 5.58172L29.3895 5.50373C33.3184 4.78014 36.4674 8.72878 34.8876 12.3981L34.7174 12.7937C33.857 14.7921 34.3878 17.1175 36.03 18.5447L36.355 18.8272C39.3704 21.4478 38.2465 26.3716 34.3928 27.4244L33.9774 27.5379C31.8785 28.1112 30.3914 29.976 30.2995 32.1498L30.2813 32.5801C30.1124 36.5715 25.5621 38.7628 22.3362 36.4062L21.9885 36.1522C20.2317 34.8687 17.8465 34.8687 16.0896 36.1522L15.7419 36.4062C12.516 38.7628 7.96568 36.5715 7.79687 32.5801L7.77867 32.1498C7.68673 29.976 6.19959 28.1112 4.10074 27.5379L3.68535 27.4244C-0.168407 26.3716 -1.29225 21.4478 1.72309 18.8272L2.04811 18.5447C3.69034 17.1175 4.2211 14.7921 3.36075 12.7937L3.19048 12.3982C1.61077 8.72878 4.75971 4.78014 8.6886 5.50373L9.11208 5.58172C11.2518 5.97581 13.4008 4.94091 14.4269 3.02226L14.6299 2.64254Z" />
        </svg>
        <CheckCircle className="w-4 h-4 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-poppins text-base font-bold text-white leading-[155%]">
          {title}
        </h3>
        <p className="font-tt-norms text-sm text-white leading-[155%]">
          {description}
        </p>
      </div>
    </div>
  );
}
