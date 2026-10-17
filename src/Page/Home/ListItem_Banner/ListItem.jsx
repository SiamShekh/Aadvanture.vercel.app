import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import Marquee from "react-fast-marquee";

const items = [
  { label: "Exploring", accent: false },
  { label: "Biking", accent: false },
  { label: "Rambling", accent: false },
  { label: "Hiking", accent: true },
];

const ListItem = () => {
  return (
    <Marquee pauseOnHover gradient gradientColor="#000000" gradientWidth={48} speed={50} className="py-3">
      {Array.from({ length: 4 }, (_, copy) =>
        items.map((item) => (
          <div key={`${item.label}-${copy}`} className="mr-12 flex items-center gap-3 sm:mr-20">
            <p className={`font-Abhaya-Libre text-2xl sm:text-3xl md:text-4xl ${item.accent ? "text-[#B6FF89]" : "text-[#DBFFD5]"}`}>
              {item.label}
            </p>
            {item.accent ? (
              <FiArrowUpRight className="h-8 w-8 text-[#B6FF89] sm:h-10 sm:w-10" />
            ) : (
              <GoArrowRight className="h-8 w-8 text-[#DBFFD5] sm:h-10 sm:w-10" />
            )}
          </div>
        ))
      )}
    </Marquee>
  );
};

export default ListItem;
