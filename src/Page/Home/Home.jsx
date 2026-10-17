import { ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AdvanceBanner from "./Hero/AdvanceBanner";
import ListItem from "./ListItem_Banner/ListItem";
import AdventureAssenHero from "./Hero/AdventureAssenHero";
import Testimonials from "./Hero/Testimonials";
import GetInTouch from "./Hero/GetInTouch";
import Cta from "../../Components/Cta";
import ImageSlider from "../../Components/ImageSlider";
import Element from "../../assets/image/eliment.webp";
import Pahar from "../../assets/image/Discover/Mountain.webp";
import TreeObj from "../../assets/image/tree_sub.webp";
import SloganHere from "../../assets/SloganHere_6.webp";
import TourPackage from "../../assets/TourPackage.webp";
import PathaLogo from "../../assets/Qitmeer Logo (11) 1.png";
import Group30 from "../../assets/Group 30.webp";
import squvaDriving from "../../assets/image/squva_driving.webp";

const categories = [
  {
    id: "summit",
    label: "Summit",
    images: [
      "https://i.ibb.co/HT9j7cg/Summit-Canva1.webp",
      "https://i.ibb.co/hYX1qz6/Summit-Canva2.webp",
      "https://i.ibb.co/yBsMF1C/Summit-Canva4.webp",
    ],
  },
  {
    id: "trek",
    label: "Trek",
    images: [
      "https://i.ibb.co/LNzn1rn/Trek3.webp",
      "https://i.ibb.co/TWJKLLW/Trek1.webp",
      "https://i.ibb.co/Wy51YCw/Trek2.webp",
    ],
  },
  {
    id: "explore",
    label: "Explore",
    images: [
      "https://images.unsplash.com/photo-1506064549099-34b18723e8c9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://www.203challenges.com/wp-content/uploads/2017/12/nathaniel-kohfield-337185-e1514446401837.jpg",
    ],
  },
  {
    id: "urban",
    label: "Urban Exploration",
    images: [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.shopify.com/s/files/1/0493/9834/9974/files/8_bc31f69f-4f1a-469e-9303-c93b3220e925_480x480.png",
      "https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/leonardcnrs_2_72dpi.jpg",
    ],
  },
  {
    id: "ride",
    label: "Ride",
    images: [
      "https://static01.nyt.com/images/2023/07/02/multimedia/29ROLLERCOASTER-02-lwgc/29ROLLERCOASTER-02-lwgc-videoSixteenByNine3000.jpg",
      "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=1200&q=80",
      "https://funfairamusementrides.com.au/images/room-list/ranger-ride-hire-brisbane.jpg",
    ],
  },
  {
    id: "skydiving",
    label: "Skydiving Adventure",
    images: [
      squvaDriving,
      "https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=1200&q=80",
      "https://images.squarespace-cdn.com/content/v1/64302b849cd4ae56340e77db/8f5b1bed-da34-4990-b117-9948d67c7b1b/Adventure+boogie+selection-62.jpg",
    ],
  },
];

const packageImages = [
  { url: "https://i.ibb.co/HT9j7cg/Summit-Canva1.webp", alt: "Summit trail" },
  { url: "https://i.ibb.co/LNzn1rn/Trek3.webp", alt: "Trek" },
  { url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80", alt: "Explore" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const selected = categories.find((category) => category.id === activeCategory) ?? categories[0];

  return (
    <div className="bg-black">
      <ParallaxProvider>
        <AdvanceBanner />
        <div className="overflow-hidden">
          <ListItem />
        </div>

        <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
          <h2 className="section-title">
            Unveil Endless Thrills:
            <span className="mt-2 block font-Genos text-xl font-normal sm:text-2xl md:text-4xl">
              Your <span className="font-Tektur">Next Adventure</span> Awaits!
            </span>
          </h2>

          <div className="mx-auto mt-8 grid max-w-6xl items-center gap-6 lg:grid-cols-2">
            <div className="relative z-10 rounded-2xl bg-[#0B510080] p-5 sm:p-8">
              <h3 className="font-Tektur text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Exciting Adventures For Your Discovery
              </h3>
              <p className="mt-4 font-Genos text-base leading-relaxed text-white sm:text-lg">
                Step into our realm of curated escapades, where thrill meets exploration. Join us in discovering uncharted territories, embracing the pulse of true adventure.
              </p>
              <div className="mt-6">
                <Cta onClick={() => scrollTo("adventures")}>Learn more</Cta>
              </div>
            </div>
            <img
              draggable="false"
              src={Element}
              alt=""
              className="mx-auto hidden w-full max-w-md object-contain opacity-80 lg:block"
            />
          </div>
        </section>

        <img draggable="false" src={Pahar} alt="" className="w-full object-cover" />

        <div className="flex justify-center px-4 py-8">
          <Cta onClick={() => scrollTo("contact")}>Get in touch</Cta>
        </div>

        <section className="px-4 py-8 sm:px-6">
          <img
            draggable="false"
            src={TreeObj}
            alt=""
            className="mx-auto hidden w-full max-w-5xl object-contain opacity-50 md:block"
          />
          <div className="mx-auto max-w-4xl text-center md:-mt-24">
            <TypeAnimation
              style={{ whiteSpace: "pre-line", display: "block" }}
              sequence={["Adventures Await.\nDiscover Adventures", 1000, ""]}
              className="leading-safe min-h-[4.5rem] bg-gradient-to-bl from-[#DBFFD5] to-[#dbffd56b] bg-clip-text text-center font-Tektur text-3xl font-bold text-transparent sm:min-h-[5.5rem] sm:text-4xl lg:text-6xl"
              repeat={Infinity}
            />
            <p className="section-copy">
              Unlock thrilling escapades worldwide. Immerse yourself in unparalleled journeys tailored to satisfy your wanderlust. Explore, experience, and create unforgettable memories with our expertly crafted adventures.
            </p>
          </div>
        </section>

        <section id="adventures" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-10">
          <h2 className="text-center font-Tektur text-3xl font-semibold text-[#EDFFEB] sm:text-4xl">New Jersey</h2>
          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Adventure types">
            {categories.map((category) => {
              const selectedChip = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedChip}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full border-2 border-[#DBFFD5] px-4 py-2 font-mono text-xs sm:text-sm ${
                    selectedChip ? "bg-[#B6FF89] text-black" : "text-[#B6FF89]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <h3 className="section-title mt-8">
            Unleash Adventurous Spirit: <br /> Find Perfect Expedition!
          </h3>
          <div className="mt-6 flex justify-center">
            <Cta to="/tour">Explore now</Cta>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {selected.images.map((src) => (
              <img
                key={src}
                draggable="false"
                src={src}
                alt={selected.label}
                className="h-52 w-full rounded-xl bg-neutral-900 object-cover sm:h-60"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.style.visibility = "hidden";
                }}
              />
            ))}
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-10">
          <div className="mx-auto hidden max-w-6xl justify-between md:flex">
            <img draggable="false" src={SloganHere} alt="" className="w-[42%] object-contain" />
            <img draggable="false" src={SloganHere} alt="" className="w-[42%] object-contain" />
          </div>
          <div className="mx-auto max-w-4xl md:-mt-16">
            <h2 className="section-title">
              Unleash Your <br /> Adventurous Spirit Here!
            </h2>
            <p className="section-copy text-white">
              Indulge in a realm of excitement and discovery as you navigate through our diverse offerings. Your gateway to a world of thrilling possibilities, tailored to ignite your passion for adventure. Dive into unique experiences crafted to satisfy every adventurer&apos;s craving for the extraordinary. Let the journey begin!
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <img draggable="false" src={TourPackage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/55 to-black" />
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div className="rounded-2xl border border-white/30 bg-[#507D40]/90 p-5 sm:p-8">
              <h2 className="font-Tektur text-2xl text-white sm:text-3xl lg:text-4xl">Uncover Limitless Adventures</h2>
              <p className="mt-4 font-Genos text-sm leading-relaxed text-gray-50 sm:text-base lg:text-lg">
                Embark on a journey that transcends the ordinary. Our curated collection of limitless adventures awaits, promising to redefine your perception of exploration. Immerse yourself in a tapestry of extraordinary experiences designed to push boundaries and fuel the fire of your adventurous spirit.
              </p>
              <div className="mt-6">
                <Cta to="/tour">Explore now</Cta>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-300 p-2">
              <ImageSlider images={packageImages} />
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-10">
          <h2 className="section-title">
            Elemental Escapes: <br /> Nature&apos;s Bounty Awaits
          </h2>
          <p className="section-copy text-white">
            Each adventure is a gateway to a realm where earth, air, water, and fire converge to create unforgettable moments. Join us on a journey where the elements come alive, offering serenity, excitement, and awe-inspiring landscapes at every turn.
          </p>
          <img draggable="false" src={PathaLogo} alt="" className="mx-auto mt-8 w-40 sm:w-56" />
          <img draggable="false" src={Group30} alt="" className="mx-auto mt-6 w-full max-w-5xl" />
          <div className="mt-8 flex justify-center">
            <Cta to="/inspire">Start Exploring</Cta>
          </div>
        </section>

        <AdventureAssenHero />
        <Testimonials />
        <GetInTouch />
      </ParallaxProvider>
    </div>
  );
};

export default Home;
