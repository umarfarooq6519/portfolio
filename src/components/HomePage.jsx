/* eslint-disable react/no-unescaped-entities */

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
  return (
    // wrapper(1) | content(9) | wrapper(2)
    <div id="hero-section" className="container">
      <div className="items-left flex flex-col justify-center gap-20 py-32 lg:max-xl:py-80 xl:py-28 2xl:py-44">
        <div className="content uppercase max-xl:mt-10 2xl:ml-44">
          <h2>CREATIVE</h2>
          <h1 className="flex items-center gap-2">
            <img
              src={starIcon}
              alt=""
              className="w-8 rotate-12 md:w-14 lg:w-20"
            />{" "}
            WEBSITE
          </h1>
          <h1>DEVELOPER</h1>
        </div>

        <div className="wrapper flex items-end justify-between pb-0 2xl:-mt-48 xl:pt-1">
          <div className="wrapper pb-0 fhd:text-xl">
            <i>©</i> 2024
          </div>
          <p>
            For brands, spaces, <br /> online platforms & <br /> digital
            storytelling.
          </p>
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
          <h5 className="xl:max-w-4xl fhd:max-w-6xl">
            I'm a web *craftsman with a knack for coding and design. From
            concept to deployment, I build engaging websites, streamline user
            interactions, and ensure every detail is pixel-perfect. Let's make
            your digital footprint stand out.
          </h5>
          <div className="wrapper flex w-full items-start justify-between">
            <ButtonLink
              text="About"
              link="/about"
              icon={
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
              }
            />
            <div className="dim-text -mt-1 xl:-mt-[14.3em]">
              *Born, raised and
              <br />
              based in Pakistan
            </div>
          </div>
        </div>
        {/* span 4 */}
      </div>
    </div>
  );
}

function Bespoke() {
  return (
    <div className="wrapper row-span-0 -mx-4 flex items-center justify-center bg-primary py-12 text-secondary lg:py-20 lg:max-xl:-mx-8">
      <span className="text-2xl font-[450] uppercase xs:text-3xl md:text-5xl lg:text-6xl xl:text-8xl">
        bespoke development
      </span>
    </div>
  );
}

export default HomePage;
