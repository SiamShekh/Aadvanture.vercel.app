import { FiTwitter } from "react-icons/fi";
import Logo from "../../assets/Logo.webp";
import "../../index.css";
import { MdCall, MdEmail } from "react-icons/md";
import Gass from "../../assets/Gass.webp";

const Footer = () => {
    return (
        <div className="mx-auto h-fit w-full relative bg-black">
            <div className="pt-20 flex justify-center items-center flex-col max-w-[80vw] mx-auto">
                <img draggable="false" src={Logo} alt="" />
                <p className="font-Genos custom-justify text-justify 2xl:text-2xl xl:text-xl lg:text-xl md:text-sm sm:text-xs  text-[#DBFFD5]">Take your passion for adventure to the next level by becoming a member of our exclusive Adventure Club. Enjoy benefits such as early access to trips, special discounts, and insider insights. Connect with like-minded adventurers, share tips, and receive personalized recommendations. Embrace a community where the thrill of exploration knows no bounds. Sign up today and elevate your journey with the Adventure Club experience.</p>

                <div className="flex gap-5">
                    <div className="flex justify-center items-center flex-col">
                        <div className="bg-[#73CF5C] p-2 rounded-2xl border">
                            <MdEmail className="text-black w-10 h-10" />
                        </div>
                        <p className="font-Tektur text-white mt-2">Email Us</p>
                    </div>

                    <div className="flex justify-center items-center flex-col">
                        <div className="bg-[#36652A] p-2 rounded-2xl border">
                            <MdCall className="text-black w-10 h-10" />
                        </div>
                        <p className="font-Tektur text-white mt-2">Call Us</p>
                    </div>

                    <div className="flex justify-center items-center flex-col">
                        <div className="bg-[#36652A] p-2 rounded-2xl border">
                            <FiTwitter className="text-black w-10 h-10" />
                        </div>
                        <p className="font-Tektur text-white mt-2">Twitter</p>
                    </div>
                </div>

                <div className="flex gap-5 mt-10 flex-col">
                    <div className="flex justify-center items-center gap-3">
                        <MdEmail className="text-[#73CF5C] w-10 h-10" />
                        <p className="font-Tektur text-white mt-2">siam62349@gamil.com</p>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        <MdCall className="text-[#73CF5C] w-10 h-10" />
                        <p className="font-Tektur text-white mt-2">+880 1636-446338</p>
                    </div>
                </div>
            </div>
            <img draggable="false" src={Gass} className="w-full 2xl:-mt-96 xl:-mt-64 lg:-mt-40 md:-mt-36 sm:-mt-24 -mt-20" />

        </div>
    );
};

export default Footer;