const values = [
  {
    title: "Customers First",
    description: "We put people at the center of everything we build. Your comfort, safety, and experience always come first.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b986ab9fc1700f9f7f07f138fbacaa12557364b2?width=734"
  },
  {
    title: "Innovation Always",
    description: "We move fast, think ahead, and constantly improve how digital access should feel — seamless, smart, and human.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/5ae613fea894253c346a2cb48120f51bf0d8f001?width=734"
  },
  {
    title: "Trust & Transparency",
    description: "We believe security and honesty are the foundation of great experiences. You should always know your data and money are safe with us.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/426872900a7c7888336254a4ddc7e5d433c92ff1?width=734"
  },
  {
    title: "Together, We Grow",
    description: "Nexar thrives on collaboration. We grow by listening — to our users, our team, and the communities we serve.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/5ae613fea894253c346a2cb48120f51bf0d8f001?width=734"
  },
  {
    title: "Customers First",
    description: "We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/426872900a7c7888336254a4ddc7e5d433c92ff1?width=734"
  },
  {
    title: "Customers First",
    description: "We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b986ab9fc1700f9f7f07f138fbacaa12557364b2?width=734"
  },
];

export default function AboutValues() {
  return (
    <section className="w-full bg-white py-24 lg:py-36 overflow-hidden">
      {/* Quote Banner */}
      <div className="max-w-6xl mx-auto px-6 lg:px-14 mb-24 lg:mb-36">
        <div className="h-[204px] rounded-xl bg-nexar-purple relative overflow-hidden flex items-center justify-center">
          {/* Decorative SVG */}
          <svg
            className="absolute left-2.5 -top-24 w-[644px] h-[416px]"
            viewBox="0 0 644 416"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.19"
              d="M0.10229 0C-2.39771 76.5 40.0023 229.5 229.602 229.5C466.602 229.5 737.602 156 611.102 415.5"
              stroke="black"
              strokeWidth="75"
              strokeLinecap="round"
            />
          </svg>

          <p className="relative z-10 text-white text-2xl lg:text-[28px] font-normal leading-[146%] text-left max-w-[990px] px-8 lg:px-20">
            Neaxr has helped over 100,000 users across Nigeria stay connected, make payments, and manage their digital lives effortlessly through one secure platform.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-14">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-14">
          <div>
            <p className="text-black text-[20.709px] font-medium leading-[155%] mb-5">
              Our goals are clear and objective...
            </p>
            <h2 className="text-[40px] lg:text-[55.47px] font-extrabold leading-[109%]">
              <span className="text-black">What defines </span>
              <span className="text-nexar-purple">Nexar</span>
            </h2>
          </div>

          <button className="px-14 py-3.5 border border-nexar-purple rounded-full text-nexar-purple font-medium text-lg leading-[155%] hover:bg-nexar-purple hover:text-white transition-colors">
            Learn More
          </button>
        </div>

        {/* Values Grid */}
        <div className="flex flex-col gap-12">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.slice(0, 3).map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.slice(3, 6).map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
}

function ValueCard({ title, description, image }: ValueCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative h-[338px] rounded-md bg-[#F7F7F7] flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute -left-[5px] -top-[14px] w-[367px] h-[367px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[#080325] text-lg font-semibold leading-[100%]">
          {title}
        </h3>
        <p className="text-black/80 text-base leading-[155%]">
          {description}
        </p>
      </div>
    </div>
  );
}
