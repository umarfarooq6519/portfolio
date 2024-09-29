/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import ContactPage from "./Contact";
import ButtonLink from "./elements/ButtonLink";
const starIcon = "/star.svg";

function HomePage() {
  return (
    <section id="home-page">
      <HeroSection />
      <Bespoke />
      <IntroSection />
      <hr className="text-container container border-gray-400" />
      <ContactPage />
    </section>
  );
}

function HeroSection() {
  // check if tablet/mobile screen (for framer motion)
  const isTablet = window.matchMedia("(max-width: 900px)").matches;
  const isMobile = window.matchMedia("(max-width: 450px)").matches;

  return (
    <div id="hero-section" className="container min-h-screen overflow-hidden">
      {/* overflow hidden to hide the starIcon */}
      <div className="items-left flex h-[90vh] flex-col justify-center gap-20 xl:max-2xl:gap-0">
        <div className="content uppercase max-xl:mt-10 2xl:ml-44">
          <div className="overflow-hidden pt-2">
            <motion.h2
              initial={{
                y: 135,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.5,
                // type: "spring",
                ease: "backOut",
                delay: isMobile ? 0.35 : 0.4,
              }}
            >
              CREATIVE
            </motion.h2>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              initial={{
                rotate: "0deg",
                x: isMobile ? -50 : isTablet ? -110 : -280, //depend on screen
              }}
              animate={{
                rotate: "180deg",
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
                delay: 0.5,
              }}
            >
              <motion.img
                src={starIcon}
                alt=""
                className="w-8 rotate-12 md:w-14 lg:w-20"
              />{" "}
            </motion.div>

            <motion.h1
              initial={{
                x: isMobile ? -40 : isTablet ? -60 : -80, // depend on screen
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "backOut",
                delay: 0.9,
              }}
            >
              Website
            </motion.h1>
          </div>
          <div className="overflow-hidden max-xl:pb-2">
            <motion.h1
              initial={{
                y: -165,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.5,
                // type: "spring",
                ease: "backOut",
                delay: isMobile ? 0.35 : 0.4,
              }}
            >
              Developer
            </motion.h1>
          </div>
        </div>

        <div className="wrapper flex items-end justify-between pb-0 xl:pt-1 2xl:-mt-48">
          <div className="wrapper pb-0 fhd:text-xl">
            <i>©</i> {new Date().getFullYear()}
          </div>
          <motion.p
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
            For brands, spaces, <br /> online platforms & <br /> digital
            storytelling.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div id="intro-section" className="container">
      {/* grid cols 12 */}
      <div className="text-container flex flex-col">
        {/* span 8 */}
        <div className="content items-left flex flex-col gap-20 xl:gap-28">
          <motion.h5
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0,
            }}
            viewport={{
              amount: 0.5,
              once: true,
            }}
            className="xl:max-w-4xl fhd:max-w-6xl"
          >
            I'm a web *craftsman with a knack for coding and design. From
            concept to deployment, I build engaging websites, streamline user
            interactions, and ensure every detail is pixel-perfect. Let's make
            your digital footprint stand out.
          </motion.h5>
          <div className="wrapper flex w-full items-start justify-between">
            <ButtonLink
              text="About"
              link="/about"
              icon={
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
              }
            />
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              viewport={{
                amount: 1,
                once: true,
              }}
              className="dim-text -mt-1 xl:-mt-[14.3em]"
            >
              *Born, raised and
              <br />
              based in Pakistan
            </motion.div>
          </div>
        </div>
        {/* span 4 */}
      </div>
    </div>
  );
}

function Bespoke() {
  return (
    <div className="relative overflow-hidden bg-primary py-12 text-center text-secondary lg:py-20">
      <motion.span
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0,
        }}
        viewport={{
          once: true,
          amount: 1,
        }}
        className="text-2xl font-[450] uppercase xs:text-3xl md:text-5xl lg:text-6xl xl:text-8xl"
      >
        *bespoke development*
      </motion.span>
    </div>
  );
}

export default HomePage;
