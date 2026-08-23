import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { league, leagueBold } from "../../utils/fonts.js";
import "tailwind-scrollbar";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/games", label: "Games" },
  { href: "/photovideo", label: "Photo/Video" },
  { href: "/aimilios-seimenis-cv-2025.pdf", label: "Resume", external: true },
];

const linkClasses =
  "relative text-white text-[32px] text-shadow-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:text-gray-200 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#2b1642] from-10% via-[#1e3599] via-50% to-[#0acc95] to-90% shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center px-8">
          {/* Logo */}
          <div
            className={`text-left text-white text-[36px] sm:text-[54px] text-shadow-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${leagueBold.className}`}
          >
            <Link
              href="/"
              className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:text-gray-200 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              onClick={closeMenu}
            >
              Æmilius
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            id="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="text-white text-4xl md:hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>

          {/* Navigation Links */}
			<ul
				id="mobile-menu"
				className={`fixed top-0 right-0 h-full w-[60vw] p-8 space-y-6 text-right transform transition-all duration-300 ${
				menuOpen
					? "translate-x-0 visible bg-gradient-to-r from-[#1e3599] to-[#0acc95]"
					: "translate-x-full invisible bg-transparent"
				} md:relative md:flex md:visible md:space-x-[4vw] md:space-y-0 md:bg-transparent md:w-auto md:p-0 md:h-auto md:transform-none ${
				league.className
				}`}
			>
            {navLinks.map(({ href, label, external }) => (
              <li className="navItem" key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={`${linkClasses} ${isActive(href) ? "active-link" : ""}`}
                    aria-current={isActive(href) ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
