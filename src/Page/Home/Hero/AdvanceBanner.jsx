import { ParallaxBanner } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../../../assets/image/Parallax/Background.webp";

const AdvanceBanner = () => {
  const background = {
    image: backgroundImage,
    translateY: [0, 0],
    opacity: [1, 0.75],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 12],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="flex h-full w-full flex-col items-center justify-center px-4 pt-20 text-center">
        <TypeAnimation
          className="leading-safe max-w-full text-center font-Tektur text-4xl font-bold text-neutral-950 drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          sequence={[
            "Discover Adventures",
            2000,
            "Discover Mountain",
            2000,
            "Discover Forest",
            2000,
            "Discover River",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <p className="leading-safe mt-3 max-w-3xl font-Genos text-lg text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-2xl md:text-3xl lg:text-5xl">
          Your Journey Awaits with us!
        </p>
        <p className="mx-auto mt-4 max-w-xl font-mono text-xs font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-sm md:mt-6 lg:text-base">
          Unveil Worlds Unseen. Adventures Await Your Call. Explore, Dare, and Thrive. Start Your Journey Today
        </p>
      </div>
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline]}
      className="h-[100svh] min-h-[560px] overflow-hidden"
    />
  );
};

export default AdvanceBanner;
