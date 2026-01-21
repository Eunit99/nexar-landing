export default function AboutHero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-0">
        <div className="flex flex-col items-start gap-5 max-w-5xl">
          <div className="inline-flex px-7 py-1.5 justify-center items-center rounded-full bg-nexar-purple/36">
            <span className="text-nexar-purple font-tt-norms font-medium text-base leading-[155%]">
              About Us
            </span>
          </div>

          <h1 className="font-poppins font-bold text-[44px] md:text-[56px] lg:text-[69.622px] leading-[115%] tracking-[-1.392px]">
            <span className="text-black">Building a smarter digital future </span>
            <span className="text-nexar-purple">for everyone</span>
          </h1>

          <p className="text-black font-tt-norms text-lg leading-[155%] max-w-3xl mt-5">
            At Nexar, we're on a mission to make digital access effortless for everyone — helping people and businesses do more, stay connected, and reach new opportunities.
          </p>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="mt-16 pb-5 overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-0 min-w-max">
            {/* Card 1 */}
            <div className="relative min-w-[292px] h-[439px] bg-nexar-purple overflow-hidden">
              <p className="absolute left-7 top-16 w-[124px] text-[#F2F2F2] font-poppins text-[21.135px] font-light leading-[105%]">
                Give your money a run for its money
              </p>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9fb13687c969e2d63ea4d9dadbe0453ddae6ff9d?width=1653"
                alt=""
                className="absolute -left-[267px] top-0 w-[827px] h-[451px] object-cover"
              />
              <div className="absolute left-7 bottom-[70px] w-[136px]">
                <p className="text-white font-tt-norms text-[19.379px] font-bold leading-[64%]">
                  <span className="text-white">Get advice. Make </span>
                  <span className="text-[#F7D04E]">choices.</span>
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative min-w-[292px] h-[439px] bg-nexar-purple overflow-hidden">
              <p className="absolute left-7 top-16 w-[124px] text-[#F2F2F2] font-poppins text-[21.135px] font-light leading-[105%]">
                Give your money a run for its money
              </p>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/dc76643c67a00930b20d6a5d5fc00e94fcea845d?width=1898"
                alt=""
                className="absolute -left-[328px] -top-[67px] w-[949px] h-[518px] object-cover"
              />
              <div className="absolute left-7 bottom-[70px] w-[136px]">
                <p className="text-white font-tt-norms text-[19.379px] font-bold leading-[64%]">
                  <span className="text-white">Get advice. Make </span>
                  <span className="text-[#F74E84]">choices.</span>
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative min-w-[292px] h-[439px] bg-[#F14EF7] overflow-hidden">
              <p className="absolute left-7 top-16 w-[124px] text-[#F2F2F2] font-poppins text-[21.135px] font-light leading-[105%]">
                Give your money a run for its money
              </p>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c54ef89a9b94dc4bb542431ef5106060ab6c3772?width=1898"
                alt=""
                className="absolute -left-[328px] -top-[67px] w-[949px] h-[518px] object-cover"
              />
              <div className="absolute left-7 bottom-[70px] w-[136px]">
                <p className="text-white font-tt-norms text-[19.379px] font-bold leading-[64%]">
                  <span className="text-white">Get advice. Make </span>
                  <span className="text-[#F14EF7]">choices.</span>
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative min-w-[292px] h-[439px] bg-nexar-purple overflow-hidden">
              <p className="absolute left-7 top-16 w-[124px] text-[#F2F2F2] font-poppins text-[21.135px] font-light leading-[105%]">
                Give your money a run for its money
              </p>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/238c28aeb29d38b6ac99a296dd44841acd583e1c?width=2443"
                alt=""
                className="absolute -left-[484px] -top-[150px] w-[1221px] h-[666px] object-cover"
              />
              <div className="absolute left-7 bottom-[70px] w-[136px]">
                <p className="text-white font-tt-norms text-[19.379px] font-bold leading-[64%]">
                  <span className="text-white">Get advice. Make </span>
                  <span className="text-[#CFCC5C]">choices.</span>
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative min-w-[292px] h-[439px] bg-nexar-purple overflow-hidden">
              <p className="absolute left-7 top-16 w-[124px] text-[#F2F2F2] font-poppins text-[21.135px] font-light leading-[105%]">
                Give your money a run for its money
              </p>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/026a8463c7b96f270edbca2dd947b1f0e9d76060?width=1898"
                alt=""
                className="absolute -left-[328px] -top-[67px] w-[949px] h-[518px] object-cover"
              />
              <div className="absolute left-7 bottom-[70px] w-[136px]">
                <p className="text-white font-tt-norms text-[19.379px] font-bold leading-[64%]">
                  <span className="text-white">Get advice. Make </span>
                  <span className="text-nexar-purple">choices.</span>
                </p>
              </div>
            </div>

            {/* Static Cards */}
            <div className="relative min-w-[292px] h-[439px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=576"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative min-w-[292px] h-[439px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=576"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative min-w-[292px] h-[439px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=576"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
