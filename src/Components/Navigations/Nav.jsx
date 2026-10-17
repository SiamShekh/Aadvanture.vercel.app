import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.webp";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/inspire", label: "Get inspire" },
  { to: "/tour", label: "Go Tour" },
];

const linkClass = ({ isActive }) =>
  isActive
    ? "text-center font-Tektur text-lg font-normal text-lime-300 md:text-[22px]"
    : "text-center font-Genos text-lg font-normal text-white md:text-xl";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/80 bg-black/35 backdrop-blur-sm">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:h-20 md:px-10">
        <NavLink to="/" onClick={close} aria-label="Adventure Discover home">
          <img draggable="false" src={Logo} alt="" className="h-9 w-auto sm:h-10" />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-lime-500 md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-4 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="ml-auto h-0.5 w-5 bg-white" />
          </span>
        </button>
      </div>

      <Drawer
        open={isOpen}
        onClose={close}
        direction="left"
        overlayColor="#000"
        lockBackgroundScroll
        enableOverlay
        className="!bg-slate-800"
      >
        <div className="flex min-h-full w-full flex-col items-center gap-8 bg-slate-800 px-6 py-10">
          <img draggable="false" src={Logo} alt="" className="h-12 w-auto" />
          <nav className="flex w-full flex-col items-center gap-6" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === "/"}
                onClick={close}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Drawer>
    </header>
  );
};

export default Nav;
