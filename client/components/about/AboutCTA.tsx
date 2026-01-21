export default function AboutCTA() {
  return (
    <section className="w-full h-[500px] lg:h-[876px] bg-nexar-purple relative overflow-hidden">
      {/* Decorative SVG */}
      <svg 
        className="absolute right-0 -top-[373px] w-[762px] h-[729px]"
        viewBox="0 0 762 729" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          opacity="0.19" 
          d="M0.079378 322.496C46.3896 261.555 175.793 169.568 322.924 289.153C506.838 438.634 670.778 666.596 736.285 385.435" 
          stroke="black" 
          strokeWidth="75" 
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-5 max-w-2xl">
            <p className="text-white font-tt-norms text-[20.709px] font-medium leading-[155%]">
              Our goal is to keep you coming back...
            </p>
            
            <h2 className="text-white font-poppins text-[48px] lg:text-[71.552px] font-extrabold leading-[103%]">
              Join us at Nexar
            </h2>
            
            <p className="text-[#EEEEEE] font-tt-norms text-lg leading-[155%] mt-5 max-w-md">
              At Nexar, we are dedicated to providing cutting-edge digital solutions that empower individuals and businesses to thrive in the online world.
            </p>
          </div>

          <button className="px-14 py-3.5 border border-white rounded-full text-white font-tt-norms font-medium text-lg leading-[155%] hover:bg-white hover:text-nexar-purple transition-colors whitespace-nowrap">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}
