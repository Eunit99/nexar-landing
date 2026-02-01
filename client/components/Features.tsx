import { ArrowUpRight } from "lucide-react";
import { Button } from "./atoms/Button";

export default function Features() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="flex flex-col gap-5">
            <p className="font-tt-norms text-xl font-medium text-black leading-[155%]">
              Access made simple, wherever you are....
            </p>
            <h2 className="font-poppins text-4xl sm:text-5xl lg:text-[55px] font-extrabold leading-[109%]">
              Everything digital.
              <br />
              In <span className="text-nexar-purple">one place</span>
            </h2>
          </div>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>



        {/* Features go here */}


      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  wide?: boolean;
}

function FeatureCard({ title, description, bgColor, wide = false }: FeatureCardProps) {
  return (
    <div className={`${bgColor} rounded-xl p-8 lg:p-12 relative overflow-hidden min-h-[495px] flex flex-col justify-between`}>
      <div className="relative z-10">
        <div className="flex flex-col gap-5 max-w-md">
          <div className="flex flex-col gap-4">
            <h3 className="font-poppins text-2xl font-semibold text-[#080325] leading-tight">
              {title}
            </h3>
            <p className="font-questrial text-sm text-black leading-[155%]">
              {description}
            </p>
          </div>
          <Button variant="link" className="flex items-center gap-0.5 border-b border-nexar-purple rounded-none px-0 h-auto group bg-transparent">
            <span className="font-tt-norms text-sm font-medium text-nexar-purple">Learn more</span>
            <ArrowUpRight className="w-5 h-5 text-nexar-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>

      <div className={`mt-10 ${wide ? 'h-48' : 'h-48'} rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
          Feature Preview
        </div>
      </div>
    </div>
  );
}
