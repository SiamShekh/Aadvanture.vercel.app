import { FiTwitter } from "react-icons/fi";
import Logo from "../../assets/Logo.webp";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <img draggable="false" src={Logo} alt="Adventure Discover" className="h-14 w-auto sm:h-16" />
        <p className="mt-6 text-center font-Genos text-sm leading-relaxed text-[#DBFFD5] sm:text-base lg:text-lg">
          Take your passion for adventure to the next level by becoming a member of our exclusive Adventure Club. Enjoy benefits such as early access to trips, special discounts, and insider insights. Connect with like-minded adventurers, share tips, and receive personalized recommendations. Embrace a community where the thrill of exploration knows no bounds. Sign up today and elevate your journey with the Adventure Club experience.
        </p>

        <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-3 text-center">
          <a href="mailto:siam62349@gmail.com" className="flex flex-col items-center gap-2">
            <span className="rounded-2xl border bg-[#73CF5C] p-2">
              <MdEmail className="h-8 w-8 text-black sm:h-10 sm:w-10" />
            </span>
            <span className="font-Tektur text-sm text-white sm:text-base">Email Us</span>
          </a>
          <a href="tel:+8801636446338" className="flex flex-col items-center gap-2">
            <span className="rounded-2xl border bg-[#36652A] p-2">
              <MdCall className="h-8 w-8 text-black sm:h-10 sm:w-10" />
            </span>
            <span className="font-Tektur text-sm text-white sm:text-base">Call Us</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2">
            <span className="rounded-2xl border bg-[#36652A] p-2">
              <FiTwitter className="h-8 w-8 text-black sm:h-10 sm:w-10" />
            </span>
            <span className="font-Tektur text-sm text-white sm:text-base">Twitter</span>
          </a>
        </div>

        <div className="mt-8 flex w-full max-w-md flex-col gap-4">
          <a href="mailto:siam62349@gmail.com" className="flex items-center justify-center gap-3">
            <MdEmail className="h-8 w-8 shrink-0 text-[#73CF5C]" />
            <span className="break-all font-Tektur text-sm text-white sm:text-base">siam62349@gmail.com</span>
          </a>
          <a href="tel:+8801636446338" className="flex items-center justify-center gap-3">
            <MdCall className="h-8 w-8 shrink-0 text-[#73CF5C]" />
            <span className="font-Tektur text-sm text-white sm:text-base">+880 1636-446338</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
