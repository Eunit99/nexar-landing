import { Button } from "./atoms/Button";

export default function PayBills() {
  return (
    <section className="bg-nexar-purple relative overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6a9fc49cf539a651c38afcd3c17d52ae702db65c?width=1004"
              alt="Happy customer"
              className="w-full max-w-md mx-auto rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="font-tt-norms text-[23px] font-medium text-white leading-[155%]">
                Because paying bills shouldn't be stressful.
              </p>
              <h2 className="font-poppins text-4xl sm:text-5xl lg:text-[55px] font-extrabold text-white leading-[110%]">
                <span className="text-gray-200">Pay </span>Bills with ease
              </h2>
              <p className="font-tt-norms text-lg text-white leading-[155%] max-w-md">
                From airtime and data to electricity and subscriptions — Nexar keeps your payments fast, safe, and super easy.
              </p>
            </div>
            <Button variant="outline" size="lg" className="bg-white border-transparent text-nexar-purple hover:bg-gray-50 w-fit">
              Learn more
            </Button>
          </div>
        </div>
      </div>

      <svg className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20" width="643" height="416" viewBox="0 0 643 416" fill="none">
        <path d="M-36.8977 37.5C-39.3977 114 3.00229 267 192.602 267C429.602 267 700.602 193.5 574.102 453" stroke="black" strokeWidth="75" strokeLinecap="round" />
      </svg>
    </section>
  );
}
