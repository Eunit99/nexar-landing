import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./atoms/Button";

const featureCards = [
  {
    title: "Buy eSIM",
    text: "I landed in Dubai and activated my eSIM in seconds. No need for airport SIM cards anymore 💃",
    user: "Marcus T.",
    flag: "gb",
    color: "bg-[#674EF71A]",
    side: "left",
  },
  {
    title: "Access Virtual Numbers",
    text: "Used their US number for Telegram verification. The process was seamless —",
    user: "Marcus T.",
    flag: "ng",
    color: "bg-[#FFCB001A]",
    side: "left",
  },
  {
    title: "Trade Gift Cards",
    text: "The rates were affordable and payment was instant. That's all I needed 🔥",
    user: "Marcus T.",
    flag: "us",
    color: "bg-[#EA39581A]",
    side: "left",
  },
  {
    title: "Boost and Buy Socials",
    text: "Bought an Instagram account with 15k followers from Nexar. I'm already getting brand deals ",
    user: "Marcus T.",
    flag: "cm",
    color: "bg-[#EA39581A]",
    side: "right",
  },
  {
    title: "Convert Crypto",
    text: "Switching to Nexar was the best decision I made. Everything I need is in one place 💯",
    user: "Marcus T.",
    flag: "ca",
    color: "bg-[#F8F8F8]",
    side: "right",
  },
  {
    title: "Make Bill Payment",
    text: "My electricity token delivers instantly every single time. Very reliable ⚡",
    user: "Marcus T.",
    flag: "ng",
    color: "bg-[#674EF71A]",
    side: "right",
  },
];

export default function Features() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-24">
          <div className="flex flex-col gap-5">
            <p className="font-tt-norms text-lg lg:text-xl font-medium text-[#101828] leading-[155%]">
              Access made simple, wherever you are....
            </p>
            <h2 className="font-poppins text-5xl lg:text-[72px] font-extrabold text-[#101828] leading-[110%] tracking-tight">
              Everything digital.
              <br />
              In <span className="text-nexar-purple">one place</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" className="rounded-full border-nexar-purple text-nexar-purple px-10 h-14 text-lg font-medium hover:bg-nexar-purple hover:text-white transition-all hidden lg:flex">
            Learn More
          </Button>
        </div>

        {/* Desktop Content */}
        <div className="hidden lg:grid grid-cols-3 items-center gap-0 relative">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {featureCards.filter(f => f.side === "left").map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </div>

          {/* Middle Column - Phone */}
          <div className="flex justify-center px-4">
            <img
              src="/assets/images/phone.svg"
              alt="Nexar App Interface"
              className="w-full max-w-[480px] h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {featureCards.filter(f => f.side === "right").map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </div>
        </div>

        {/* Mobile Content */}
        <div className="lg:hidden flex flex-col gap-12">
          {/* Mobile Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featureCards.map((card, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-2 group">
                  <FeatureCard
                    {...card}
                    isMobile
                    currentIndex={selectedIndex}
                    total={featureCards.length}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Phone */}
          <div className="flex justify-center">
            <img
              src="/assets/images/phone.svg"
              alt="Nexar App Interface"
              className="w-full max-w-[320px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, text, user, flag, color, isMobile, currentIndex, total }: any) {
  return (
    <div className={`${color} p-8 lg:p-10 rounded-[32px] flex flex-col gap-6 lg:gap-8 transition-all h-full relative max-w-[335px]`}>
      <div className="flex flex-col gap-4">
        <h3 className="font-poppins text-lg lg:text-lg font-bold text-[#080325]">
          {title}
        </h3>
        <p className="font-tt-norms text-[#475467] text-sm lg:text-md leading-[160%]">
          {text}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={`/assets/icons/flags/${flag.toLowerCase()}.svg`} alt="flag" />
          <span className="font-tt-norms font-bold text-[#101828] text-sm lg:text-md">
            {user}
          </span>
        </div>

        {isMobile && (
          <div className="flex gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-nexar-purple w-6" : "bg-[#D1D5DB] w-4"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
