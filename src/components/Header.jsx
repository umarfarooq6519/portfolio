/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonHref from "./elements/ButtonHref";
import { useEffect } from "react";
import links from "../links";
const resumeURL = "/resume.pdf";
const menuSVG = "/menu.svg";
const crossSVG = "/cross.svg";

export default function Header() {
  // ######### manage menu state and function
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu state changed");
  };

  return (
    <header>
      <nav className="container">
        <ul>
          <li className={`z-50 ${menuOpen && "text-secondary"} `}>
            <Link to="/">
              <b>Umar</b> farooq
            </Link>
          </li>
          {/* ########### mobile menu button */}

          <li className="md:hidden">
            <button type="button" onClick={toggleMenu}>
              <img src={menuSVG} alt="menu" className="h-7 w-7 md:h-8 md:w-8" />
            </button>
          </li>

          {/* Full-Screen Menu */}
          {menuOpen && <MenuSection toggleMenu={toggleMenu} />}

          {/* ########### laptop menu */}
          <ul className="w-8/12 max-md:hidden">
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <ButtonHref text="Résumé" href={resumeURL} theme="light" />
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

function MenuSection({ toggleMenu }) {
  useEffect(() => {
    // Add or remove the overflow-hidden class on the body
    document.body.style.overflow = "hidden";

    // Clean up the effect when the component unmounts or the menu is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 z-20 flex h-lvh flex-col justify-center gap-28 bg-primary px-3 text-secondary">
      <button
        type="button"
        className="absolute right-4 top-4 text-2xl"
        onClick={toggleMenu}
      >
        <img src={crossSVG} alt="menu" className="mt-2 h-7 w-7 md:h-8 md:w-8" />
        {/* This is the close button */}
      </button>
      <ul className="flex flex-col gap-16 max-sm:mt-10">
        <li className="w-full">
          <Link to="/" onClick={toggleMenu}>
            <h6>Home</h6>
          </Link>
        </li>
        <li className="w-full">
          <Link to="/about" onClick={toggleMenu}>
            <h6>About</h6>
          </Link>
        </li>
        <li className="w-full">
          <Link to="/contact" onClick={toggleMenu}>
            <h6>Contact</h6>
          </Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4 text-base font-normal">
        <li className="w-full">
          <ButtonHref text="Résumé" href={resumeURL} theme="dark" />
        </li>
        <li className="w-full">
          <ButtonHref text="Linkedin" href={links.linkedin} theme="dark" />
        </li>
        <li className="w-full">
          <i>©</i> 2024
        </li>
      </ul>
    </div>
  );
}
