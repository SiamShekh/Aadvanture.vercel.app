import GetIntoTouch1 from "../../../assets/GetInTouchPhoto_1.webp";
import GetIntoTouch2 from "../../../assets/GetIntoTouch2.webp";
import { GoArrowRight } from "react-icons/go";

const GetInTouch = () => {
    return (
        <div className="bg-[#0B5100] w-full lg:h-[500px] md:py-20 py-10 lg:py-0 md:p-0 p-10 border-b-2 border-t-2 relative">
            <img draggable="false" src={GetIntoTouch1} className="absolute hidden md:block -top-14" />
            <img draggable="false" src={GetIntoTouch2} className="absolute hidden md:block -bottom-8 right-0" />
            <div className="flex justify-center items-center  w-full">
                <div>
                    <p className="font-Tektur xl:text-7xl text-xl sm:text-sm font-bold text-white md:text-2xl  md:text-center">Get in Touch: <br /> Connect with Us</p>
                    <p className="font-Genos md:w-3/5 lg:w-3/4 text-justify md:text-center text-white mx-auto">We're here to assist you on your journey. Whether you have questions, need assistance, or just want to share your excitement about upcoming adventures, we welcome your contact.</p>

                    <div className="w-full flex justify-center items-center mt-5">
                        <div className="flex gap-3 items-center 2xl:mt-10 w-fit  bg-[#B9FF24] shadow-2xl hover:bg-[#baff24be] cursor-pointer px-5 py-2 rounded-full">
                            <p className="font-Tektur font-semibold text-black uppercase 2xl:text-3xl text-xl">EXPLORE NOW</p>
                            <div className="bg-black rounded-full">
                                <GoArrowRight className="w-5 m-2 text-white font-bold h-fit " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;