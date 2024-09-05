/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import links from "../links";
import ButtonHref from "./elements/ButtonHref";

// ########### variables
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
      <nav className="container md:px-8">
        <motion.ul
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
            delay: 0.4,
          }}
        >
          <li
            className={`z-50 ${menuOpen && "text-secondary"} transition-colors ${menuOpen ? "duration-700" : "duration-150"} `}
          >
            <NavLink to="/">
              <b>Umar</b> farooq
            </NavLink>
          </li>
          {/* ########### mobile menu button */}

          <li className="md:hidden">
            <button type="button" onClick={toggleMenu}>
              <img src={menuSVG} alt="menu" className="h-7 w-7 md:h-8 md:w-8" />
            </button>
          </li>

          {/* Full-Screen Menu */}
          <AnimatePresence>
            {menuOpen && <MenuSection toggleMenu={toggleMenu} />}
          </AnimatePresence>

          {/* ########### laptop menu */}
          <ul className="w-8/12 max-md:hidden">
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <ButtonHref text="Résumé" href={resumeURL} theme="light" />
            </li>
          </ul>
        </motion.ul>
      </nav>
    </header>
  );
}

function MenuSection({ toggleMenu }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-20 flex h-lvh flex-col justify-center gap-28 bg-primary px-3 text-secondary"
      initial={{ x: "100%" }} // Start from the left (100%)
      animate={{ x: 0 }} // Animate to the center (0)
      exit={{ x: "100%" }} // Exit back to the left
      transition={{ duration: 0.6, ease: [0.2, 1, 0.6, 0.95] }} // Duration of the animation
    >
      <button
        type="button"
        className="absolute right-4 top-4 text-2xl"
        onClick={toggleMenu}
      >
        <img src={crossSVG} alt="menu" className="mt-2 h-7 w-7 md:h-8 md:w-8" />
      </button>

      <ul className="flex flex-col gap-7 max-sm:mt-10">
        <li className="w-full overflow-hidden">
          <NavLink to="/" onClick={toggleMenu}>
            <motion.h6
              initial={{
                y: 80,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: [0.2, 1, 0.95, 1],
              }}
              exit={{
                y: 80,
                transition: {
                  duration: 0.5,
                },
              }}
              className="py-4"
            >
              Home
            </motion.h6>
          </NavLink>
        </li>
        <li className="w-full overflow-hidden">
          <NavLink to="/about" onClick={toggleMenu}>
            <motion.h6
              initial={{
                y: 80,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.2, 1, 0.95, 1],
              }}
              exit={{
                y: 80,
                transition: {
                  duration: 0.5,
                },
              }}
              className="py-4"
            >
              About
            </motion.h6>
          </NavLink>
        </li>
        <li className="w-full overflow-hidden">
          <NavLink to="/contact" onClick={toggleMenu}>
            <motion.h6
              initial={{
                y: 80,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: [0.2, 1, 0.95, 1],
              }}
              exit={{
                y: 80,
                transition: {
                  duration: 0.5,
                },
              }}
              className="py-4"
            >
              Contact
            </motion.h6>
          </NavLink>
        </li>
      </ul>

      <motion.ul
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.55,
          duration: 0.3,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
        className="flex flex-col gap-4 text-base font-normal"
      >
        <li className="w-full">
          <ButtonHref text="Résumé" href={resumeURL} theme="dark" />
        </li>
        <li className="w-full">
          <ButtonHref text="Linkedin" href={links.linkedin} theme="dark" />
        </li>
        <li className="w-full">
          <i>©</i> 2024
        </li>
      </motion.ul>
    </motion.div>
  );
}
