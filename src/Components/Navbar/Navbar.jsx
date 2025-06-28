import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="relative bg-transparent px-6 md:px-20 py-6 flex items-center justify-between text-white shadow-md">
      <span className="text-2xl font-bold tracking-wide cursor-default select-none">
        Portfolio
      </span>

      {/* Hamburger Menu Icon */}
      <button
        onClick={handleMenuToggle}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="md:hidden z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {menuOpen ? (
          <RiCloseLine size={32} />
        ) : (
          <RiMenu2Line size={32} />
        )}
      </button>

      {/* Menu Items */}
      <ul
        className={`
          fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 backdrop-blur-md
          flex flex-col items-center justify-center gap-10 text-xl font-semibold
          transform transition-transform duration-300 md:static md:flex-row md:gap-8 md:bg-transparent md:h-auto md:w-auto md:translate-y-0
          ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }
          md:translate-y-0
        `}
      >
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item === "Contact" ? "Footer" : item}`}
              className="hover:text-indigo-400 transition-colors duration-300"
              onClick={handleLinkClick}
              tabIndex={menuOpen || window.innerWidth >= 768 ? 0 : -1}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
