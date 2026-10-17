import elemet from "../../../assets/Elemnt.webp";

const AdventureAssenHero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[#7CDD2F]/40 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="leading-safe font-Tektur text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
          Adventure Essentials: <br /> Gear Up for Excitement
        </h2>
        <p className="mx-auto mt-4 max-w-3xl font-Genos text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
          Equip yourself for the extraordinary with our handpicked adventure essentials. From cutting-edge gear to expert tips, this page is your go-to resource for all things adventure. Whether you are a seasoned explorer or a first-time adventurer, discover the tools and knowledge you need to enhance your experiences. Gear up and elevate your journey to new heights with the essentials that make every moment memorable.
        </p>
      </div>
      <img
        draggable="false"
        src={elemet}
        alt=""
        className="relative mx-auto mt-8 w-full max-w-6xl object-contain"
      />
    </section>
  );
};

export default AdventureAssenHero;
