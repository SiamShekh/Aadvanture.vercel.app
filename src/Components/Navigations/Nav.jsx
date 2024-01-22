import Logo from "../../assets/Logo.webp"
const Nav = () => {
    return (
        <div className="bg-black bg-opacity-75 backdrop-blur-[50px] mx-auto w-full absolute z-30">
            <div className="h-[80px] flex items-center justify-evenly relative mx-auto">
                <div className="flex justify-start absolute left-3 md:left-10">
                    <img className="h-10" src={Logo} />
                </div>

                <div className="items-center justify-around gap-10 absolute right-36 hidden md:flex">
                    <p className="text-center text-lime-300 text-[22px] font-normal font-Inter">Home</p>
                    <p className="text-center text-white text-xl font-normal font-Inter">Get inspire</p>
                    <p className="text-center text-white text-xl font-normal font-Inter">Go Tour </p>
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-[25px] h-[0px] right-[22px] md:right-[50px] top-[26px] absolute border-2 border-white"></div>
                    <div className="w-[40px] h-[0px] right-[22px] md:right-[50px] top-[38px] absolute border-2 border-white"></div>
                    <div className="w-[26px] h-[0px] right-[35px] md:right-[64px] top-[50px] absolute border-2 border-white"></div>
                    <div className="w-[60px] h-[60px] right-3 md:right-10 top-[10px] absolute rounded-full border border-lime-500" />
                </div>

            </div>
        </div>
    );
};

export default Nav;