export default function AboutMission() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 lg:px-12 my-24 lg:my-36">
      <div className="mb-14">
        <p className="text-black text-[20.709px] font-medium leading-[155%] mb-5">
          Our mission and vision in brief words...
        </p>
        <h2 className="text-[40px] lg:text-[55.47px] font-extrabold leading-[109%]">
          <span className="text-black">Who we are & what </span>
          <span className="text-nexar-purple">we do.</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="flex-1">
          <p className="text-black/80 text-base leading-[187%]">
            Nexar is a digital experience platform built to simplify how people live, connect, and manage their digital lives. We're a team of creators, technologists, and thinkers driven by one vision — to make digital access effortless for everyone.
            <br /><br />
            We bring essential digital tools together in one place — helping users pay bills, access e-SIMs, manage virtual cards, and stay connected globally with ease.
          </p>
        </div>

        <div className="flex-1">
          <p className="text-black/80 text-base leading-[187%]">
            Our mission is simple: to make digital access smarter, faster, and more human. We design technology that feels intuitive, secure, and made for real life — so you can focus on what truly matters.
          </p>
        </div>
      </div>
    </section>
  );
}
