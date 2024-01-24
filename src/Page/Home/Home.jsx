import { ParallaxProvider } from "react-scroll-parallax";
import AdvanceBanner from "./Hero/AdvanceBanner";
import "../../../src/index.css"
import Nav from "../../Components/Navigations/Nav";
import ListItem from "./ListItem_Banner/ListItem";
import Element from "../../assets/eliment.png";
import Arraw from "../../assets/Arrow 5.png";
import Pahar from "../../assets/Group 25.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TreeObj from "../../assets/tree_sub.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className=" bg-black">
            <ParallaxProvider>
                <AdvanceBanner />
                <div className="mt-3">
                    <ListItem />
                </div>
                <div className=" w-full">
                    <div className="mt-20 2xl:mt-40 text-3xl md:text-6xl 2xl:text-9xl text-center mx-5 md:mx-0">
                        <p className="font-Tektur font-bold text-[#DBFFD5]">Unveil Endless Thrills: <br /></p>
                        <p className="font-Genos text-[#DBFFD5] text-xl md:text-4xl 2xl:text-6xl">
                            Your
                            <span className="font-Tektur"> Next Adventure </span>
                            Awaits!
                        </p>
                    </div>
                    <div data-aos="fade-right" className="flex w-full justify-between">
                        <div className="w-96 h-fit  2xl:w-[600px] 2xl:h-[400px] bg-[#0B510080] p-5 rounded-2xl m-7 ">
                            <p className="text-2xl 2xl:text-5xl font-bold font-Tektur text-white ">Exciting Adventures For Your Discovery</p>
                            <p className="font-Genos text-white 2xl:text-3xl 2xl:mt-10">Step into our realm of curated escapades, where thrill meets exploration. Join us in discovering uncharted territories, embracing the pulse of true adventure.</p>

                            <div className="flex gap-3 items-center 2xl:mt-10">
                                <p className="font-Tektur font-bold text-[#52FF00] uppercase 2xl:text-3xl text-xl">Learn more</p>
                                <img src={Arraw} className="w-5 2xl:w-10 h-fit " />
                            </div>
                        </div>
                        <img src={Element} className="hidden opacity-60 md:flex right-0 top-2 h-96 2xl:h-[700px]" />

                    </div>

                    <img src={Pahar} data-aos="fade-up-right" className="-mt-10 md:-mt-36 2xl:-mt-96 w-full" />

                    <div data-aos="fade-right" className="w-full flex justify-center items-center">
                        <div className="flex gap-3 items-center 2xl:mt-10 w-fit  bg-[#B9FF24] shadow-2xl hover:bg-[#baff24be] cursor-pointer px-5 py-2 rounded-full">
                            <p className="font-Tektur font-semibold text-black uppercase 2xl:text-3xl text-xl">GET IN TOUCH</p>
                            <div className="bg-black rounded-full">
                                <img src={Arraw} className="w-5 m-2  h-fit " />
                            </div>
                        </div>
                    </div>

                    <img src={TreeObj} className="opacity-50 hidden md:-mt-20 h-96 xl:h-[500px] 2xl:h-[700px] md:flex justify-between" />
                    <div data-aos="fade-right" className="flex flex-col justify-center items-center md:-mt-52 lg:-mt-60 xl:-mt-56 2xl:-mt-[530px] mt-10">
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line', display: 'block' }}
                            sequence={[
                                `Adventures Await.\nDiscover Adventures`,
                                1000,
                                '',
                            ]}
                            className="text-center 2xl:h-[405px] xl:h-[230px] lg:h-[175px] md:h-[130px] sm:h-[100px] h-[80px] md:text-[40px] font-Tektur font-bold text-[25px] sm:text-[30px] 2xl:text-[140px] xl:text-[70px] lg:text-[50px] bg-gradient-to-bl from-[#DBFFD5] to-[#dbffd56b] bg-clip-text text-transparent"
                            repeat={Infinity}
                        />

                        <p className="lg:w-[832px] md:w-[600px]  opacity-80  mx-5 xl:text-xl 2xl:text-2xl text-center text-[#DBFFD5] font-Genos text-sm ">Unlock thrilling escapades worldwide. Immerse yourself in unparalleled journeys tailored to satisfy your wanderlust. Explore, experience, and create unforgettable memories with our expertly crafted adventures.</p>
                    </div>

                    <div>
                        <p className="text-3xl font-Tektur text-center mt-20 font-semibold text-[#EDFFEB]">New Jersey</p>
                        <div className="">
                            <div className="flex justify-center gap-2 md:gap-5 text-[10px] m-5 2xl:text-2xl">
                                <p className="font-mono px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Summit</p>
                                <p className="font-mono px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Trek</p>
                                <p className="font-mono px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Explore</p>
                            </div>

                            <div className="flex justify-center gap-2 md:gap-5 text-[8px] 2xl:text-2xl">
                                <p className="font-mono px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Urban Exploration</p>
                                <p className="font-mono px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Ride</p>
                                <p className="font-mono px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Skydiving Adventure</p>
                            </div>
                        </div>

                        <p className="text-center mt-5 mx-3 md:mx-0 md:mt-0 2xl:h-[405px] xl:h-[230px] lg:h-[175px] md:h-[130px] sm:h-[100px] h-[80px] md:text-[40px] font-Genos font-bold text-[25px] sm:text-[30px] 2xl:text-[140px] xl:text-[70px] lg:text-[50px] bg-gradient-to-bl from-[#DBFFD5] to-[#dbffd56b] bg-clip-text text-transparent"
                        >Unleash Adventurous Spirit: <br /> Find Perfect Expedition!</p>


                        <div className="w-full flex justify-center items-center">
                            <div className="flex gap-3 items-center 2xl:mt-10 w-fit  bg-[#B9FF24] shadow-2xl hover:bg-[#baff24be] cursor-pointer px-5 py-2 rounded-full">
                                <p className="font-Tektur font-semibold text-black uppercase 2xl:text-3xl text-xl">EXPLORE NOW</p>
                                <div className="bg-black rounded-full">
                                    <img src={Arraw} className="w-5 m-2  h-fit " />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </ParallaxProvider>
        </div>
    );
};

export default Home;