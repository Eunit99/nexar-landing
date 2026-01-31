import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";

export default function CTA() {
  return (
    <section className="bg-nexar-purple relative overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex flex-col gap-5 max-w-md">
            <p className="font-tt-norms text-xl font-medium text-white leading-[155%]">
              Our goal is to keep you coming back...
            </p>
            <h2 className="font-poppins text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-white leading-[103%]">
              Join us at Nexar
            </h2>
            <p className="font-tt-norms text-lg text-gray-200 leading-[155%]">
              At Nexar, we are dedicated to providing cutting-edge digital solutions that empower individuals and businesses to thrive in the online world.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white text-white hover:bg-white hover:text-nexar-purple"
          >
            <Link to="/signup">
              Sign up
            </Link>
          </Button>
        </div>
      </div>

      <svg className="absolute right-0 top-0 opacity-20" width="656" height="184" viewBox="0 0 656 184" fill="none">
        <path d="M37.5013 -50.5038C83.8115 -111.445 213.215 -203.432 360.346 -83.847C544.26 65.6342 708.2 293.596 773.707 12.4355" stroke="black" strokeWidth="75" strokeLinecap="round" />
      </svg>
    </section>
  );
}
