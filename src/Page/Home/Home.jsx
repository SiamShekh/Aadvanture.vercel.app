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

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div className=" bg-black">
            <Nav />
            <ParallaxProvider>
                <AdvanceBanner />
                <div className="mt-3">
                    <ListItem />
                </div>
                <div className=" w-full">
                    <div className="mt-20 2xl:mt-40 text-3xl md:text-6xl 2xl:text-9xl text-center">
                        <p className="font-Inter font-bold text-[#DBFFD5]">Unveil Endless Thrills: <br /></p>
                        <p className="font-thin font-serif text-[#DBFFD5] text-xl md:text-4xl 2xl:text-6xl">
                            Your
                            <span className="font-Lemon"> Next Adventure </span>
                            Awaits!
                        </p>
                    </div>
                    <div data-aos="fade-right" className="flex w-full justify-between">
                        <div className="w-96 h-fit  2xl:w-[600px] 2xl:h-[400px] bg-[#0B510080] p-5 rounded-2xl m-7 ">
                            <p className="text-2xl 2xl:text-5xl font-bold text-white ">Exciting Adventures For Your Discovery</p>
                            <p className="font-light text-white 2xl:text-3xl 2xl:mt-10">Step into our realm of curated escapades, where thrill meets exploration. Join us in discovering uncharted territories, embracing the pulse of true adventure.</p>

                            <div className="flex gap-3 items-center 2xl:mt-10">
                                <p className="font-Roboto font-bold text-[#52FF00] uppercase 2xl:text-3xl text-xl">Learn more</p>
                                <img src={Arraw} className="w-5 2xl:w-10 h-fit " />
                            </div>
                        </div>
                        <img src={Element} className="hidden opacity-60 md:flex right-0 top-2 h-96 2xl:h-[700px]" />

                    </div>
                    <img src={Pahar} className="-mt-10 md:-mt-36 2xl:-mt-96 w-full" />

                    <div data-aos="fade-right" className="w-full flex justify-center items-center">
                        <div className="flex gap-3 items-center 2xl:mt-10 w-fit  bg-[#B9FF24] shadow-2xl hover:bg-[#baff24be] cursor-pointer p-5 rounded-full">
                            <p className="font-Robotzo font-semibold text-black uppercase 2xl:text-3xl text-xl">Learn more</p>
                            <div className="bg-black rounded-full">
                                <img src={Arraw} className="w-5 m-3  h-fit " />
                            </div>
                        </div>
                    </div>

                    <img src={TreeObj} className="opacity-50 hidden md:-mt-20 h-96 xl:h-[500px] 2xl:h-[700px] md:flex justify-between" />
                    <div data-aos="fade-right" className="flex flex-col justify-center items-center md:-mt-52 lg:-mt-60 xl:-mt-56 2xl:-mt-[530px] mt-10">
                        <p className="text-center md:text-[40px] text-[25px] sm:text-[30px] 2xl:text-[140px] xl:text-[70px] lg:text-[50px]">
                            <span className="font-Inria-Serif font-bold text-[#DBFFD5]">Adventures </span>
                            <span className="font-Lemon text-[#DBFFD5]">Await.</span>
                            <br />

                            <span className="font-Lemon text-[#DBFFD5]">Discover </span>
                            <span className="font-Inria-Serif font-bold text-[#DBFFD5]">Adventures </span>
                            
                        </p>

                        <p className="lg:w-[832px] md:w-[600px] text-justify opacity-80  mx-5 xl:text-xl 2xl:text-2xl md:text-center text-[#DBFFD5] font-Inter text-sm ">Unlock thrilling escapades worldwide. Immerse yourself in unparalleled journeys tailored to satisfy your wanderlust. Explore, experience, and create unforgettable memories with our expertly crafted adventures.</p>
                    </div>

                </div>
            </ParallaxProvider>
        </div>
    );
};

export default Home;