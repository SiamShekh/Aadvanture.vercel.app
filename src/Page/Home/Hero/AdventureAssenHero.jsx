import { Parallax } from "react-scroll-parallax";
import elemet from "../../../assets/Elemnt.webp";


const AdventureAssenHero = () => {
    return (
        <div>
            <div className="relative mt-20 h-[50vh] sm:[40vh] lg:h-screen ">
                <div className="absolute z-0 top-0 w-full bg-[#7CDD2F] opacity-50 hidden lg:block blur-3xl md:h-52 h-40 lg:h-60 xl:h-72" />
                <div className="absolute z-0 top-0 w-full bg-[#031403] opacity-50 blur-3xl md:h-52 block lg:hidden h-40 lg:h-60 xl:h-72" />

                <div className="hidden lg:block">
                    <Parallax speed={10}>
                        <p className="font-Tektur xl:text-7xl text-xl sm:text-sm font-bold md:text-2xl  text-center">Adventure Essentials: <br /> Gear Up for Excitement</p>
                        <p className="font-Genos w-11/12 text-xs text-justify mx-auto">Equip yourself for the extraordinary with our handpicked adventure essentials. From cutting-edge gear to expert tips, this page is your go-to resource for all things adventure. Whether you're a seasoned explorer or a first-time adventurer, discover the tools and knowledge you need to enhance your experiences. Gear up and elevate your journey to new heights with the essentials that make every moment memorable.</p>
                    </Parallax>

                    <Parallax speed={-10} className="absolute z-10 -mt-32 md:-mt-36 lg:-mt-44 2xl:-mt-80 ">
                        <img draggable="false" src={elemet} className="object-cover w-screen " />
                    </Parallax>
                </div>

                <div className="block lg:hidden">
                    <Parallax >
                        <p className="font-Tektur xl:text-7xl text-xl sm:text-sm font-bold text-white md:text-2xl  text-center">Adventure Essentials: <br /> Gear Up for Excitement</p>
                        <p className="font-Genos w-11/12 text-xs text-white text-justify mx-auto">Equip yourself for the extraordinary with our handpicked adventure essentials. From cutting-edge gear to expert tips, this page is your go-to resource for all things adventure. Whether you're a seasoned explorer or a first-time adventurer, discover the tools and knowledge you need to enhance your experiences. Gear up and elevate your journey to new heights with the essentials that make every moment memorable.</p>
                    </Parallax>

                    <Parallax className="absolute z-10 -mt-32 md:-mt-36 lg:-mt-44 2xl:-mt-80 ">
                        <img draggable="false" src={elemet} className="object-cover w-screen " />
                    </Parallax>
                </div>

                
            </div>

        </div>
    );
};

export default AdventureAssenHero;