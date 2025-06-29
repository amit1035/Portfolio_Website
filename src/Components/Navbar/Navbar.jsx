import React, { useEffect, useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleClick = (item) => {
    const sectionId = item.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(item);
    }
    setMenuOpen(false);
  };

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item,
        top: document.getElementById(item.toLowerCase())?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 px-6 md:px-20 py-4 flex items-center justify-between text-white shadow-lg">
      <span className="text-2xl font-extrabold tracking-wide cursor-pointer select-none text-indigo-400">
        Portfolio
      </span>

      {/* Hamburger */}
      <button
        onClick={handleMenuToggle}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="md:hidden z-[60] focus:outline-none"
      >
        {menuOpen ? <RiCloseLine size={32} /> : <RiMenu2Line size={32} />}
      </button>

      {/* Nav Items */}
      <ul
        className={`
          fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center
          gap-10 text-xl font-semibold transform transition-transform duration-300 md:static md:flex-row md:gap-8 md:bg-transparent md:h-auto md:w-auto
          ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:translate-y-0
        `}
      >
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => handleClick(item)}
              className={`relative group transition-all duration-300 ease-in-out
                ${activeSection === item ? "text-indigo-400" : "text-white"}
                hover:text-indigo-400 focus:outline-none`}
              tabIndex={menuOpen || window.innerWidth >= 768 ? 0 : -1}
            >
              <span className="relative px-2 py-1">
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500
                  ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
