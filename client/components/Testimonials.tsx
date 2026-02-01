import { Button } from "./atoms/Button";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    image: "/assets/images/testimonials/freelancers.svg",
    category: "Freelancers & Content Creators",
    description: "Grow your accounts with real engagement, buy ready-made accounts to start strong, and pay for tools, subscriptions, and services effortlessly.",
  },
  {
    image: "/assets/images/testimonials/travellers.svg",
    category: "Travellers",
    description: "Activate global eSIMs instantly, access virtual numbers for verifications, and enjoy seamless connectivity across countries.",
  },
  {
    image: "/assets/images/testimonials/online-shoppers.svg",
    category: "Online Shoppers",
    description: "Buy gift cards for shopping, streaming, and subscriptions, verify accounts with virtual numbers, and pay securely in one place.",
  },
  {
    image: "/assets/images/testimonials/professional.svg",
    category: "Traders & Investors",
    description: "Swap crypto to local currency, pay bills, top up eSIMs, and manage transactions securely on Nexar.",
  }
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="flex flex-col gap-5">
            <p className="text-xl font-medium text-black leading-[155%]">
              There’s a place for everyone...
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[105%] tracking-tight text-[#101828]">
              Nexar makes<br />everyone <span className="text-[#674EF7]">happy.</span>
            </h2>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 h-14 border-[#674EF7] text-[#674EF7] hover:bg-[#674EF7] hover:text-white transition-all font-bold"
          >
            Register Now
          </Button>
        </div>
      </div>

      {/* Full Width Carousel Container */}
      <div className="w-full">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] xl:flex-[0_0_25%] min-w-0 pl-0 first:pl-0"
              >
                <div className="relative h-[650px] lg:h-[750px] overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-12 left-8 right-8 flex flex-col gap-6">
                    <div className="bg-white rounded-xl px-6 py-3 w-fit">
                      <span className="text-[#674EF7] font-bold text-sm lg:text-base">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-white text-lg lg:text-[20px] leading-[155%] font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
