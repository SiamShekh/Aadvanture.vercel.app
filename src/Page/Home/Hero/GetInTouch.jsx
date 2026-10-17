import GetIntoTouch1 from "../../../assets/GetInTouchPhoto_1.webp";
import GetIntoTouch2 from "../../../assets/GetIntoTouch2.webp";
import Cta from "../../../Components/Cta";

const GetInTouch = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-y-2 bg-[#0B5100] px-4 py-16 sm:px-6 lg:py-24">
      <img draggable="false" src={GetIntoTouch1} alt="" className="pointer-events-none absolute -top-6 left-0 hidden h-28 w-auto md:block" />
      <img draggable="false" src={GetIntoTouch2} alt="" className="pointer-events-none absolute -bottom-4 right-0 hidden h-28 w-auto md:block" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="leading-safe font-Tektur text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
          Get in Touch: <br /> Connect with Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-Genos text-sm leading-relaxed text-white sm:text-base lg:text-lg">
          We are here to assist you on your journey. Whether you have questions, need assistance, or just want to share your excitement about upcoming adventures, we welcome your contact.
        </p>
        <div className="mt-6">
          <Cta to="/tour">Explore now</Cta>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
