import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { Link, NavLink } from "react-router-dom";

const navItems = ["Collection", "Orders", "About", "Contact"];

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();

  // Scroll show/hide behavior
  useEffect(() => {
    if (currentScrollY < lastScrollY || currentScrollY === 0) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  // Animate navbar
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  return (
    <header
      ref={navContainerRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white text-black shadow-md">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <h1 className="text-xl font-extrabold tracking-wider text-yellow-500">
              AXORA
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `hover:text-yellow-500 transition ${
                  isActive ? "text-yellow-500" : "text-black"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full transition">
            Know More
            <TiLocationArrow />
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center gap-[3px]"
          >
            <span
              className={`w-6 h-[2px] bg-black transition ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-black transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-black transition ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white text-black z-40 flex flex-col items-start gap-6 px-6 pt-20 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-lg uppercase font-medium text-black hover:text-yellow-500 transition"
          >
            {item}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
