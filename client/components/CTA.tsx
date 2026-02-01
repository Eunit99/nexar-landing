import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";

export default function CTA() {
  return (
    <section className="bg-nexar-purple relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Bubbles/Curves as seen in the mockup */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">

          <div className="flex flex-col gap-6 max-w-2xl text-left">
            <div className="flex flex-col gap-4">
              <span className="font-tt-norms text-white font-medium text-[16px] lg:text-[18px]">
                Our goal is to keep you coming back...
              </span>
              <h2 className="font-poppins text-[48px] lg:text-[72px] font-bold text-white leading-[105%] tracking-tight">
                Join us at Nexar
              </h2>
            </div>
            <p className="font-tt-norms text-white/90 text-lg lg:text-[20px] leading-[155%] max-w-xl">
              At Nexar, we are dedicated to providing cutting-edge digital solutions that empower individuals and businesses to thrive in the online world.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-12 h-[64px] text-[18px] border-white text-white rounded-full bg-transparent hover:bg-white hover:text-nexar-purple transition-all"
            >
              <Link to="/signup">
                Sign up
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
