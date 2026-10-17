import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const className =
  "inline-flex items-center gap-3 rounded-full bg-[#B9FF24] px-4 py-2 font-Tektur text-sm font-semibold uppercase text-black shadow-2xl transition hover:bg-[#baff24be] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B9FF24] sm:px-5 sm:text-base lg:text-xl";

function Arrow() {
  return (
    <span className="rounded-full bg-black">
      <GoArrowRight className="m-1.5 h-fit w-5 text-white sm:m-2" />
    </span>
  );
}

export default function Cta({ children, to, onClick }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
        <Arrow />
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
      <Arrow />
    </button>
  );
}
