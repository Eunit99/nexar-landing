const teamMembers = [
  {
    name: "Taiwo Uji",
    role: "Product Designer",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/72b279c458a6c086e9fc338144b969bf570a768e?width=537",
    badge: "#674EF7"
  },
  {
    name: "Taiwo Uji",
    role: "Product Designer",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/941dcd79681e7b9f54326406dcc48a9581841ce6?width=537",
    badge: "#FF8200"
  },
  {
    name: "Taiwo Uji",
    role: "Product Designer",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c7095789a7822179d4a2acca30b441b9ab0b44ab?width=537",
    badge: "#674EF7"
  },
  {
    name: "Taiwo Uji",
    role: "Product Designer",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/941dcd79681e7b9f54326406dcc48a9581841ce6?width=537",
    badge: "#674EF7"
  },
  {
    name: "Taiwo Uji",
    role: "Product Designer",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/941dcd79681e7b9f54326406dcc48a9581841ce6?width=537",
    badge: "#674EF7"
  },
  {
    name: "Taiwo Uji",
    role: "Product Designer",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/72b279c458a6c086e9fc338144b969bf570a768e?width=537",
    badge: "#674EF7"
  },
  {
    name: "Taiwo Uji",
    role: "Product Designer",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/941dcd79681e7b9f54326406dcc48a9581841ce6?width=537",
    badge: "#674EF7"
  },
  {
    name: "Taiwo Uji",
    role: "Product Designer",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c7095789a7822179d4a2acca30b441b9ab0b44ab?width=537",
    badge: "#674EF7"
  },
];

export default function AboutTeam() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 lg:px-12 mb-24 lg:mb-36">
      <div className="mb-14">
        <p className="text-black text-[20.709px] font-medium leading-[155%] mb-5">
          We have the right team...
        </p>
        <h2 className="text-[40px] lg:text-[55.47px] font-extrabold leading-[109%]">
          <span className="text-black">The right skills, the </span>
          <span className="text-nexar-purple">right people.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-16">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.slice(0, 4).map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.slice(4, 8).map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  badge: string;
}

function TeamCard({ name, role, image, badge }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full aspect-square max-w-[268px]">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 rounded-[5.424px]"
          style={{
            background: 'linear-gradient(186deg, #4A4274 34.74%, #674EF7 165.7%)'
          }}
        />

        {/* Asset Background */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a59fc0ace35b284277750ea49a68a9089831c1a3?width=417"
          alt=""
          className="absolute left-[31px] top-[18px] w-[209px] h-[250px] opacity-23"
        />

        {/* Member Image */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full rounded-[5.424px] object-cover"
        />

        {/* Badge */}
        <div
          className="absolute left-2.5 top-2.5 w-5 h-5 rounded-full bg-white flex items-center justify-center border-[0.2px]"
          style={{ borderColor: badge }}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/89bd353b63ba4176072e1f04e81cfc1fd1f61c12?width=16"
            alt=""
            className="w-2 h-2.5"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 w-full">
        <h3 className="text-[#080325] text-lg font-semibold leading-[100%]">
          {name}
        </h3>
        <p className="text-black text-base leading-[155%]">
          {role}
        </p>
      </div>
    </div>
  );
}
