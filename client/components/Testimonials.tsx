export default function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="flex flex-col gap-5">
            <p className="font-tt-norms text-xl font-medium text-black leading-[155%]">
              Our goal is simple — to keep you smiling. ...
            </p>
            <h2 className="font-poppins text-4xl sm:text-5xl lg:text-[55px] font-extrabold leading-[103%]">
              Nexar makes everyone <span className="text-nexar-purple">happy.</span>
            </h2>
          </div>
          <button className="px-14 py-3.5 border border-nexar-purple text-nexar-purple font-tt-norms font-medium text-lg rounded-full hover:bg-nexar-purple hover:text-white transition-colors">
            Register Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/c3e2d73e9c9f5f9708b100ce652e52b0030bbae9?width=876"
            name="Bill Giftcards"
            text="I can finally manage all my digital payments in one place. Nexar saves me time.❤️"
          />
          <TestimonialCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/81284334e03b7ec2e151296bd5e5ca85345702a0?width=876"
            name="Bill Payment"
            text="Super easy to use and really fast. I switched to Nexar and never looked back..❤️💜💜💜"
            featured
          />
          <TestimonialCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/d5f03962f6cd04334d2cf640b1b665511cb2ffcf?width=876"
            name="Buy Virtual Cards"
            text="Super easy to use and really fast. I switched to Nexar and never looked back..❤️"
          />
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  image: string;
  name: string;
  text: string;
  featured?: boolean;
}

function TestimonialCard({ image, name, text, featured = false }: TestimonialCardProps) {
  return (
    <div className="relative h-[600px] rounded-2xl overflow-hidden group">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      <div className={`absolute bottom-0 left-0 right-0 p-9 ${featured ? 'bg-nexar-purple' : 'bg-white'} m-9 rounded-lg shadow-lg`}>
        <p className={`font-tt-norms text-base font-bold ${featured ? 'text-white' : 'text-nexar-purple'} mb-2`}>
          -{name}
        </p>
        <p className={`font-tt-norms text-base font-bold ${featured ? 'text-white' : 'text-black'} leading-[155%]`}>
          {text}
        </p>
      </div>
    </div>
  );
}
