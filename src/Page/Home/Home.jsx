import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import AdvanceBanner from "./Hero/AdvanceBanner";
import "../../../src/index.css"
import ListItem from "./ListItem_Banner/ListItem";
import Element from "../../assets/eliment.png";
import Pahar from "../../assets/Group 25.png";
import { useState } from "react";
import TreeObj from "../../assets/tree_sub.png";
import { TypeAnimation } from "react-type-animation";
import SloganHere from "../../assets/SloganHere_6.webp"
import TourPackage from "../../assets/TourPackage.webp"
import SimpleImageSlider from "react-simple-image-slider";
import PathaLogo from "../../assets/Qitmeer Logo (11) 1.png";
import Group30 from "../../assets/Group 30.webp";
import AdventureAssenHero from "./Hero/AdventureAssenHero";
import Testimonials from "./Hero/Testimonials";
import GetInTouch from "./Hero/GetInTouch";
import { GoArrowRight } from "react-icons/go";
import squva_driving from "../../assets/image/squva_driving.webp";

const Home = () => {
    const [SummitState, setSummitState] = useState(false);
    const [TrekState, setTrekState] = useState(false);
    const [ExploreState, setExploreState] = useState(false);
    const [UrbanExploration_State, setUrbanExploration_State] = useState(false);
    const [Ride_State, setRide_State] = useState(false);
    const [SkyDriveing_State, setSkyDriveing_State] = useState(false);

    const images = [
        { url: "https://i.ibb.co/HT9j7cg/Summit-Canva1.webp" },
        { url: "https://i.ibb.co/LNzn1rn/Trek3.webp" },
        { url: "https://www.rayatourism.com/upload_pics/explore.jpg" },
    ];

    return (
        <div className=" bg-black">
            <ParallaxProvider>
                <AdvanceBanner />
                <div className="mt-3">
                    <ListItem />
                </div>
                <div className="w-full">
                    <div className="mt-20 2xl:mt-40 text-3xl md:text-6xl 2xl:text-9xl text-center mx-5 md:mx-0">
                        <p className="font-Tektur font-bold text-[#DBFFD5]">Unveil Endless Thrills: <br /></p>
                        <p className="font-Genos text-[#DBFFD5] text-xl md:text-4xl 2xl:text-6xl">
                            Your
                            <span className="font-Tektur"> Next Adventure </span>
                            Awaits!
                        </p>
                    </div>
                    <div className="flex w-full justify-between">
                        <div className="w-96 h-fit  2xl:w-[600px] 2xl:h-[400px] bg-[#0B510080] p-5 rounded-2xl m-7 ">
                            <p className="text-2xl 2xl:text-5xl font-bold font-Tektur text-white ">Exciting Adventures For Your Discovery</p>
                            <p className="font-Genos text-white 2xl:text-3xl 2xl:mt-10">Step into our realm of curated escapades, where thrill meets exploration. Join us in discovering uncharted territories, embracing the pulse of true adventure.</p>

                            <div className="flex gap-3 items-center 2xl:mt-10 cursor-pointer">
                                <p className="font-Tektur font-bold text-[#52FF00] uppercase 2xl:text-3xl text-xl">Learn more</p>

                                <GoArrowRight className="w-5 text-[#52FF00] 2xl:w-10 h-fit " />
                            </div>
                        </div>
                        <img draggable="false" src={Element} className="hidden opacity-60 md:flex right-0 top-2 h-96 2xl:h-[700px]" />

                    </div>

                    <img draggable="false" src={Pahar} className="-mt-10 md:-mt-36 2xl:-mt-96 w-full" />

                    <div className="w-full flex justify-center items-center">
                        <div className="flex gap-3 items-center 2xl:mt-10 w-fit  bg-[#B9FF24] shadow-2xl hover:bg-[#baff24be] cursor-pointer px-5 py-2 rounded-full">
                            <p className="font-Tektur font-semibold text-black uppercase 2xl:text-3xl text-xl">GET IN TOUCH</p>
                            <div className="bg-black rounded-full">
                                <GoArrowRight className="w-5 m-2 text-white font-bold  h-fit " />
                            </div>
                        </div>
                    </div>

                    <img draggable="false" src={TreeObj} className="opacity-50 hidden md:-mt-20 h-96 xl:h-[500px] 2xl:h-[700px] md:flex justify-between" />
                    <div className="flex flex-col justify-center items-center md:-mt-52 lg:-mt-60 xl:-mt-56 2xl:-mt-[530px] mt-10">
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

                                <p onMouseLeave={() => setSummitState(!SummitState)} onMouseOver={() => setSummitState(!SummitState)} className="font-mono cursor-pointer px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Summit</p>

                                <p onMouseLeave={() => setTrekState(!TrekState)} onMouseOver={() => setTrekState(!TrekState)} className="font-mono px-3 cursor-pointer md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Trek</p>

                                <p onMouseLeave={() => setExploreState(!ExploreState)} onMouseOver={() => setExploreState(!ExploreState)} className="font-mono px-3 cursor-pointer md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Explore</p>
                            </div>

                            <div className="flex justify-center gap-2 md:gap-5 text-[8px] 2xl:text-2xl">
                                <p onMouseLeave={() => setUrbanExploration_State(!UrbanExploration_State)} onMouseOver={() => setUrbanExploration_State(!UrbanExploration_State)} className="font-mono cursor-pointer px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Urban Exploration</p>
                                <p onMouseLeave={() => setRide_State(!Ride_State)} onMouseOver={() => setRide_State(!Ride_State)} className="font-mono cursor-pointer px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Ride</p>
                                <p onMouseLeave={() => setSkyDriveing_State(!SkyDriveing_State)} onMouseOver={() => setSkyDriveing_State(!SkyDriveing_State)} className="font-mono cursor-pointer px-3 md:px-7 border-[#DBFFD5] text-[#B6FF89] py-1 border-2 w-fit rounded-full">Skydiving Adventure</p>
                            </div>
                        </div>

                        <p className="text-center mt-5 mx-3 md:mx-0 md:mt-0 2xl:h-[405px] xl:h-[230px] lg:h-[175px] md:h-[130px] sm:h-[100px] h-[80px] md:text-[40px] font-Genos font-bold text-[25px] sm:text-[30px] 2xl:text-[140px] xl:text-[70px] lg:text-[50px] bg-gradient-to-bl from-[#DBFFD5] to-[#dbffd56b] bg-clip-text text-transparent"
                        >Unleash Adventurous Spirit: <br /> Find Perfect Expedition!</p>


                        <div className="w-full flex justify-center items-center">
                            <div className="flex gap-3 items-center 2xl:mt-10 w-fit  bg-[#B9FF24] shadow-2xl hover:bg-[#baff24be] cursor-pointer px-5 py-2 rounded-full">
                                <p className="font-Tektur font-semibold text-black uppercase 2xl:text-3xl text-xl">EXPLORE NOW</p>
                                <div className="bg-black rounded-full">
                                    <GoArrowRight className="w-5 m-2 text-white font-bold h-fit " />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`xl:2xl:xl:2xl:-mt-60 lg:-mt-48 md:-mt-36 -mt-32 ${SummitState ? 'flex' : 'hidden '} max-h-60 mx-auto gap-2 justify-evenly items-center w-full`}>

                        <img draggable="false" src="https://i.ibb.co/HT9j7cg/Summit-Canva1.webp" className="h-60 rounded-xl" />
                        <img draggable="false" src="https://i.ibb.co/hYX1qz6/Summit-Canva2.webp" className="h-60 rounded-xl md:block hidden" />
                        <img draggable="false" src="https://i.ibb.co/yBsMF1C/Summit-Canva4.webp" className="h-60 lg:block hidden rounded-xl" />
                    </div>

                    <div className={`xl:2xl:-mt-60 lg:-mt-48 md:-mt-36 -mt-32 ${TrekState ? 'flex' : 'hidden '} max-h-60 mx-auto gap-2 justify-evenly items-center w-full`}>
                        <img draggable="false" src="https://i.ibb.co/LNzn1rn/Trek3.webp" className="h-60 rounded-xl" />
                        <img draggable="false" src="https://i.ibb.co/TWJKLLW/Trek1.webp" className="h-60 rounded-xl md:block hidden" />
                        <img draggable="false" src="https://i.ibb.co/Wy51YCw/Trek2.webp" className="h-60 rounded-xl lg:block hidden" />
                    </div>

                    <div className={`xl:2xl:-mt-60 lg:-mt-48 md:-mt-36 -mt-32 ${ExploreState ? 'flex' : 'hidden '} max-h-60 mx-auto gap-2 justify-evenly items-center w-full`}>
                        <img draggable="false" src="https://images.unsplash.com/photo-1506064549099-34b18723e8c9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhwbG9yZSUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fHww" className="h-60 rounded-xl" />
                        <img draggable="false" src="https://www.rayatourism.com/upload_pics/explore.jpg" className="h-60 rounded-xl md:block hidden" />
                        <img draggable="false" src="https://www.203challenges.com/wp-content/uploads/2017/12/nathaniel-kohfield-337185-e1514446401837.jpg" className="h-60 rounded-xl lg:block hidden" />
                    </div>

                    <div className={`xl:2xl:-mt-60 lg:-mt-48 md:-mt-36 -mt-32 ${UrbanExploration_State ? 'flex' : 'hidden '} max-h-60 mx-auto gap-2 justify-evenly items-center w-full`}>
                        <img draggable="false" src="https://ipt.imgix.net/205429/x/0/" className="h-60 rounded-xl" />
                        <img draggable="false" src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/8_bc31f69f-4f1a-469e-9303-c93b3220e925_480x480.png" className="h-60 rounded-xl md:block hidden" />
                        <img draggable="false" src="https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/leonardcnrs_2_72dpi.jpg" className="h-60 rounded-xl lg:block hidden" />
                    </div>

                    <div className={`xl:2xl:-mt-60 lg:-mt-48 md:-mt-36 -mt-32 ${Ride_State ? 'flex' : 'hidden '} max-h-60 mx-auto gap-2 justify-evenly items-center w-full`}>
                        <img draggable="false" src="https://static01.nyt.com/images/2023/07/02/multimedia/29ROLLERCOASTER-02-lwgc/29ROLLERCOASTER-02-lwgc-videoSixteenByNine3000.jpg" className="h-60 rounded-xl" />
                        <img draggable="false" src="https://wistatefair.com/fair/wp-content/uploads/2013/04/Kids-Ride-Carousel.jpg" className="h-60 rounded-xl md:block hidden" />
                        <img draggable="false" src="https://funfairamusementrides.com.au/images/room-list/ranger-ride-hire-brisbane.jpg" className="h-60 rounded-xl lg:block hidden" />
                    </div>

                    <div className={`xl:2xl:-mt-60 lg:-mt-48 md:-mt-36 -mt-32 ${SkyDriveing_State ? 'flex' : 'hidden '} max-h-60 mx-auto gap-2 justify-evenly items-center w-full`}>
                        <img draggable="false" src={squva_driving} className="h-60 rounded-xl" />
                        <img draggable="false" src="https://travel.home.sndimg.com/content/dam/images/travel/stock/2017/6/22/0/GettyImages-643320488-palm-jumeirah-skydive-dubai.jpg.rend.hgtvcom.1280.1280.suffix/1498150383633.jpeg" className="h-60 rounded-xl md:block hidden" />
                        <img draggable="false" src="https://images.squarespace-cdn.com/content/v1/64302b849cd4ae56340e77db/8f5b1bed-da34-4990-b117-9948d67c7b1b/Adventure+boogie+selection-62.jpg" className="h-60 lg:block hidden rounded-xl" />
                    </div>

                    <div className="flex flex-col">
                        <div className="justify-between hidden md:flex">
                            <img draggable="false" src={SloganHere} alt="" />
                            <img draggable="false" src={SloganHere} alt="" />
                        </div>

                        <div className="md:-mt-80">
                            <p className="text-center mt-5 mx-3 md:mx-0 md:mt-0 2xl:h-[405px] xl:h-[230px] lg:h-[175px] md:h-[130px] sm:h-[100px] h-[80px] md:text-[40px] font-Tektur font-bold text-[25px] sm:text-[30px] 2xl:text-[140px] xl:text-[70px] lg:text-[50px] bg-gradient-to-bl from-[#DBFFD5] to-[#dbffd56b] bg-clip-text text-transparent"
                            >Unleash Your <br /> Adventurous Spirit Here!</p>

                            <p className="font-Genos lg:w-4/5 md:w-2/3 text-white text-center mx-auto 2xl:text-2xl xl:text-xl w-11/12 ">{"Indulge in a realm of excitement and discovery as you navigate through our diverse offerings. Your gateway to a world of thrilling possibilities, tailored to ignite your passion for adventure. Dive into unique experiences crafted to satisfy every adventurer's craving for the extraordinary. Let the journey begin!"}</p>
                        </div>
                    </div>

                    {/* Tour Package */}
                    <div className="max-h-screen block">
                        <div className="xl:relative">
                            <div className="bg-gradient-to-b from-black to-transparent  h-96 lg:h-[700px]  w-full absolute z-20" />
                            <img draggable="false" src={TourPackage} className="absolute z-10 w-full object-cover  h-96 lg:h-[700px] " />
                            <div className="bg-gradient-to-t from-black to-transparent h-96 lg:h-[700px] w-full absolute z-30" />

                        </div>

                        <div className="flex justify-between items-center w-full absolute z-40 lg:mt-[30vh]">
                            <Parallax speed={10}>

                                <div className="bg-[#507D40] m-10  rounded-2xl border p-5">

                                    <p className="font-Tektur text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white">Uncover Limitless Adventures</p>
                                    <p className="font-Genos text-gray-50 sm:text-sm text-xs md:text-sm lg:text-2xl xl:text-2xl">Embark on a journey that transcends the ordinary. Our curated collection of limitless adventures awaits, promising to redefine your perception of exploration. Immerse yourself in a tapestry of extraordinary experiences designed to push boundaries and fuel the fire of your adventurous spirit. Discover the extraordinary with us, where every moment is a step into the unknown.</p>

                                    <div className="flex gap-3 mt-10 mx-auto items-center 2xl:mt-10 w-fit  bg-[#B9FF24] shadow-2xl hover:bg-[#baff24be] cursor-pointer px-5 py-2 rounded-full">
                                        <p className="font-Tektur font-semibold text-black uppercase 2xl:text-3xl text-xl">EXPLORE NOW</p>
                                        <div className="bg-black rounded-full">
                                            <GoArrowRight className="w-5 m-2 text-white font-bold h-fit " />
                                        </div>
                                    </div>
                                </div>
                            </Parallax>

                            <Parallax speed={-10}>

                                <div className="m-10 rounded-lg shadow-2xl bg-gradient-to-br from-yellow-50 to-yellow-300 p-2 lg:block hidden">
                                    <SimpleImageSlider
                                        width={484}
                                        height={340}
                                        images={images}
                                        showBullets={true}
                                        showNavs={true}
                                    />
                                </div>
                            </Parallax>
                        </div>
                    </div>

                    <div className="md:mt-[700px] mt-96">
                        <p className="text-center mt-5 mx-3 md:mx-0 md:mt-0 2xl:h-[405px] xl:h-[230px] lg:h-[175px] md:h-[130px] sm:h-[100px] h-[80px] md:text-[40px] font-Tektur font-bold text-[25px] sm:text-[30px] 2xl:text-[140px] xl:text-[70px] lg:text-[50px] bg-gradient-to-bl from-[#DBFFD5] to-[#dbffd56b] bg-clip-text text-transparent"
                        >Elemental Escapes: <br /> {"Nature's Bounty Awaits"}</p>

                        <p className="font-Genos lg:w-4/5 md:w-2/3 text-white text-center mx-auto 2xl:text-2xl xl:text-xl w-11/12 ">Each adventure is a gateway to a realm where earth, air, water, and fire converge to create unforgettable moments. Join us on a journey where the elements come alive, offering serenity, excitement, and awe-inspiring landscapes at every turn.</p>
                        <img draggable="false" src={PathaLogo} className="absolute right-0 md:block hidden" />
                        <img draggable="false" src={Group30} alt="" />

                        <div className="w-full flex justify-center items-center mt-10">
                            <div className="flex gap-3 items-center 2xl:mt-10 w-fit  bg-[#B9FF24] shadow-2xl hover:bg-[#baff24be] cursor-pointer px-5 py-2 rounded-full">
                                <p className="font-Tektur font-semibold text-black uppercase 2xl:text-3xl text-xl">Start Exploring</p>
                                <div className="bg-black rounded-full">
                                    <GoArrowRight className="w-5 m-2 text-white font-bold h-fit " />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <AdventureAssenHero />

                <Testimonials />

                <GetInTouch />
            </ParallaxProvider>
        </div>
    );
};

export default Home;