import Arraw from "../../../assets/Arrow 1.png";
import Arraw2 from "../../../assets/Arrow 4.png";
import Marquee from "react-fast-marquee"
const ListItem = () => {
    return (
        <Marquee pauseOnHover speed={200} className="flex justify-around items-center gap-10">
            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Exploring</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Biking</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Rambling</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#B6FF89] text-4xl">Hiking</p>
                <img src={Arraw2} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Exploring</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Biking</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Rambling</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#B6FF89] text-4xl">Hiking</p>
                <img src={Arraw2} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Exploring</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Biking</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#DBFFD5] text-4xl">Rambling</p>
                <img src={Arraw} className="w-10 h-fit" />
            </div>

            <div className="flex gap-3 justify-center items-center mr-32">
                <p className="font-Abhaya-Libre text-[#B6FF89] text-4xl">Hiking</p>
                <img src={Arraw2} className="w-10 h-fit" />
            </div>
        </Marquee>
    );
};

export default ListItem;