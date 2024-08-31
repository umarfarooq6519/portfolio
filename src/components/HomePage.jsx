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
      <div className="grid grid-cols-12 py-32">
        {/* col span 1 */}
        <div className="wrapper col-span-1 flex items-end pb-3">© 2024</div>
        {/* col span 9 */}
        <div className="content col-span-9 uppercase">
          <h2>CREATIVE</h2>
          <h1 className="flex items-center gap-3">
            <img src={starIcon} alt="" className="w-20 rotate-12" /> WEBSITE
          </h1>
          <h1>DEVELOPER</h1>
        </div>
        {/* span 2 */}
        <div className="wrapper col-span-2 flex items-end pb-3">
          <p>For brands, spaces, online platforms & digital storytelling.</p>
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div id="intro-section" className="container">
      {/* grid cols 12 */}
      <div className="text-container grid grid-cols-12">
        {/* span 8 */}
        <div className="content col-span-8 flex flex-col items-start">
          <h5>
            I'm a web *craftsman with a knack for coding and design. From
            concept to deployment, I build engaging websites, streamline user
            interactions, and ensure every detail is pixel-perfect. Let's make
            your digital footprint stand out.
          </h5>
          <div className="mt-20">
            <Button
              text="About"
              link="/about"
              icon={
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
              }
            />
          </div>
        </div>
        {/* span 4 */}
        <div className="wrapper col-span-4 flex justify-center pt-1 pl-6">
          <div className="dim-text">
            *Born, raised and
            <br />
            based in Pakistan
          </div>
        </div>
      </div>
    </div>
  );
}

function Bespoke() {
  return (
    <div className="wrapper bg-primary text-secondary row-span-0 -m-5 mt-10 flex items-center justify-center py-12">
      <h3 className="font-normal">bespoke development</h3>
    </div>
  );
}

export default HomePage;
