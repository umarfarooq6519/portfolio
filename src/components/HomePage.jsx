/* eslint-disable react/no-unescaped-entities */

import ContactPage from "./Contact";
import Button from "./elements/Button";
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
      {/* grid col 12 */}
      <div className="fhd:py-44 items-left flex flex-col justify-center gap-20 py-32">
        {/* col span 1 */}

        {/* col span 9 */}
        <div className="content mt-10 uppercase">
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
        {/* span 2 */}
        <div className="wrapper flex items-end justify-between pb-0">
          <div className="wrapper fhd:text-xl pb-0">
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
        <div className="content flex flex-col items-center gap-20">
          <h5>
            I'm a web *craftsman with a knack for coding and design. From
            concept to deployment, I build engaging websites, streamline user
            interactions, and ensure every detail is pixel-perfect. Let's make
            your digital footprint stand out.
          </h5>
          <div className="wrapper flex w-full items-start justify-between">
            <Button
              text="About"
              link="/about"
              icon={
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
              }
            />
            <div className="dim-text">
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
    <div className="wrapper bg-primary text-secondary row-span-0 -m-5 mt-0 flex items-center justify-center py-12">
      <span className="text-2xl font-[450] uppercase">bespoke development</span>
    </div>
  );
}

export default HomePage;
