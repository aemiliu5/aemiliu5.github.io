import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { league, leagueBold } from "../../utils/fonts.js";
import "tailwind-scrollbar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu
  const router = useRouter();

  // Helper function to check if the link is active
  const isActive = (path) => router.pathname === path;

  // Close menu when clicking outside or on a menu link
  const closeMenu = () => setMenuOpen(false);

  // Add an event listener to close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.getElementById("mobile-menu");
      const button = document.getElementById("menu-button");
      if (nav && button && !nav.contains(event.target) && !button.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#2b1642] from-10% via-[#1e3599] via-50% to-[#0acc95] to-90% shadow-lg sticky z-50">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center px-8">
          {/* Logo */}
          <div
            className={`text-left text-white text-[40px] sm:text-[60px] text-shadow-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pt-2 ${leagueBold.className}`}
          >
            <a
              href="/"
              className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:text-gray-200"
              onClick={closeMenu}
            >
              Æmilius
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            id="menu-button"
            className="text-white text-4xl md:hidden focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>

          {/* Navigation Links */}
			<ul
				id="mobile-menu"
				className={`fixed top-0 right-0 h-full w-[60vw] p-8 space-y-6 text-right transform transition-all duration-300 ${
				menuOpen ? "translate-x-0 bg-gradient-to-r from-[#1e3599] to-[#0acc95]" : "translate-x-full bg-transparent"
				} md:relative md:flex md:space-x-[4vw] md:space-y-0 md:bg-transparent md:w-auto md:p-0 md:h-auto md:transform-none ${
				league.className
				}`}
			>
            <li className="navItem">
              <a
                href="/about"
                className={`relative text-white text-[35px] text-shadow-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:text-gray-200 ${
                  isActive("/about") ? "active-link" : ""
                }`}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li className="navItem">
              <a
                href="/games"
                className={`relative text-white text-[35px] text-shadow-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:text-gray-200 ${
                  isActive("/games") ? "active-link" : ""
                }`}
                onClick={closeMenu}
              >
                Games
              </a>
            </li>
            <li className="navItem">
              <a
                href="/photovideo"
                className={`relative text-white text-[35px] text-shadow-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:text-gray-200 ${
                  isActive("/photovideo") ? "active-link" : ""
                }`}
                onClick={closeMenu}
              >
                Photo/Video
              </a>
            </li>
            <li className="navItem">
              <a
                href="/aimilios-seimenis-cv-2024.pdf"
                className={`relative text-white text-[35px] text-shadow-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:text-gray-200 ${
                  isActive("/aimilios-seimenis-cv-2025.pdf")
                    ? "active-link"
                    : ""
                }`}
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
