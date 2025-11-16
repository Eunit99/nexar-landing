import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col gap-10 max-w-4xl">
          <div className="flex flex-col gap-6">
            <h1 className="font-poppins text-5xl sm:text-6xl lg:text-[70px] font-bold leading-[105%] tracking-tight">
              One platform for seamless{" "}
              <span className="font-extrabold text-nexar-purple">digital experience</span>
            </h1>
            <p className="font-tt-norms text-lg text-black leading-[155%] max-w-2xl">
              At Nexar, we are dedicated to providing cutting-edge digital solutions that empower individuals and businesses to thrive in the online world.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/register" 
              className="px-14 py-3.5 bg-nexar-purple text-white font-tt-norms font-medium text-lg rounded-full hover:bg-nexar-darkPurple transition-colors"
            >
              Register Now
            </Link>
            <Link 
              to="/signin" 
              className="px-14 py-3.5 border border-nexar-purple text-nexar-purple font-tt-norms font-medium text-lg rounded-full hover:bg-nexar-purple hover:text-white transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f28b7cb1b8ae64e1f6ee95ff5d34267304e04b79?width=256" 
            alt="E-SIM Icon" 
            className="w-32 h-32 opacity-20"
          />
        </div>
      </div>
      
      <div className="w-full bg-nexar-purple text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <p className="font-questrial text-lg leading-[155%] max-w-xl">
            Get virtual numbers, boost your social media profiles, and top up your balance instantly. Reliable solutions designed to help you maximize your digital potential.
          </p>
        </div>
      </div>
    </section>
  );
}
