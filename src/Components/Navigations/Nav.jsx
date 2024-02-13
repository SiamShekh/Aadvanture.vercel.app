import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.webp";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useState } from "react";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black bg-opacity-75 backdrop-blur-[50px] mx-auto w-full absolute z-30">

            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(!isOpen)}
                direction='left'
                overlayColor="#000"
                lockBackgroundScroll
                enableOverlay
                overlayClassName="#000"
                className='bg-slate-500'
            >
                <div className="flex gap-10 flex-col items-center w-full  bg-slate-800">
                    <div>
                        <img draggable="false" src={Logo} className="mt-5" />
                    </div>

                    <div className="items-center justify-around gap-10 flex-col flex">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-center text-lime-300 text-[22px] font-normal font-Tektur" : "text-center text-white text-xl font-normal font-Genos"}>Home</NavLink>

                        <NavLink to="/inspire" className={({ isActive }) => isActive ? "text-center text-lime-300 text-[22px] font-normal font-Tektur" : "text-center text-white text-xl font-normal font-Genos"}>Get inspire</NavLink>

                        <NavLink to="/tour" className={({ isActive }) => isActive ? "text-center text-lime-300 text-[22px] font-normal font-Tektur" : "text-center text-white text-xl font-normal font-Genos"}>Go Tour</NavLink>
                    </div>
                </div>
            </Drawer>

            <div className="h-[80px] flex items-center justify-between relative mx-auto">
                <div className="flex justify-start absolute left-3 md:left-10">
                    <img draggable="false" className="h-10" src={Logo} />
                </div>

                <div className="flex items-center justify-end">

                    <div className="items-center justify-around gap-10 absolute right-10 hidden md:flex">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-center text-lime-300 text-[22px] font-normal font-Tektur" : "text-center text-white text-xl font-normal font-Genos"}>Home</NavLink>

                        <NavLink to="/inspire" className={({ isActive }) => isActive ? "text-center text-lime-300 text-[22px] font-normal font-Tektur" : "text-center text-white text-xl font-normal font-Genos"}>Get inspire</NavLink>

                        <NavLink to="/tour" className={({ isActive }) => isActive ? "text-center text-lime-300 text-[22px] font-normal font-Tektur" : "text-center text-white text-xl font-normal font-Genos"}>Go Tour</NavLink>
                    </div>

                    <div className="flex justify-center md:hidden items-center" onClick={() => setIsOpen(!isOpen)}>
                        <div className="w-[25px] h-[0px] right-[22px] md:right-[50px] top-[26px] absolute border-2 border-white"></div>
                        <div className="w-[40px] h-[0px] right-[22px] md:right-[50px] top-[38px] absolute border-2 border-white"></div>
                        <div className="w-[26px] h-[0px] right-[35px] md:right-[64px] top-[50px] absolute border-2 border-white"></div>
                        <div className="w-[60px] h-[60px] right-3 md:right-10 top-[10px] absolute rounded-full border border-lime-500" />
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Nav;