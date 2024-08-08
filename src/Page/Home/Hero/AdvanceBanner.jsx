import { ParallaxBanner } from "react-scroll-parallax";
import Line from "../../../assets/Line 4.webp"
import { TypeAnimation } from "react-type-animation";
import background_image from "../../../assets/image/Parallax/Background.webp";

const AdvanceBanner = () => {
    const background = {
        image:
            background_image,
        translateY: [0, 0],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const headline = {
        translateY: [0, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="m-auto w-full flex-col flex justwify-center items-center text-center xl:mt-[30vh] lg:mt-[30vh] md:mt-[50vh] mt-[50vh]  absolute">
                <TypeAnimation
                    className="text-center text-black text-5xl sm:text-3xl md:text-5xl xl:text-[100px] 2xl:text-[200px] lg:text-7xl font-bold font-Tektur z-10"
                    sequence={[
                        'Discover Adventures',
                        2000,
                        'Discover Mountain',
                        2000,
                        'Discover Forest',
                        2000,
                        'Discover River',
                        2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                <p className="text-white text-[20px] sm:text-1xl 2xl:text-[90px] lg:text-3xl xl:text-5xl md:text-2xl font-normal z-20">
                    <span className="font-Genos 2xl:leading-[100px] lg:leading-3 mx-5 bg-gradient-to-r from-white to-slate-400 text-center text-transparent bg-clip-text">Your Journey Awaits with us!</span>
                </p>

                <p className="md:w-1/3 text-center text-white text-[10px] mx-2 xs:text-[12px] xl:text-[15px] xl:mt-10 2xl:mt-16 md:text-[8px] font-medium font-mono 2xl:text-[30px]  z-20">Unveil Worlds Unseen. Adventures Await Your Call. Explore, Dare, and Thrive. Start Your Journey Today</p>

            </div>
        )
    };

    return (
        <ParallaxBanner
            layers={[background, headline]}
            className="full"
        />
    );

};

export default AdvanceBanner;