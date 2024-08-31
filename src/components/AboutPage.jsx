import Contact from "./Contact";
const resumeURL = "/resume.pdf";

export default function AboutPage() {
  return (
    <>
      <section className="about-page">
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <hr className="text-container container border-gray-400" />
        <Contact />
      </section>
    </>
  );
}
// fhd:left-40 fhd:w-96 relative left-32 z-10 -mb-32 hidden w-80 rounded-lg
function AboutSection() {
  return (
    <div className="container">
      <div className="flex justify-center pt-44 max-xl:pb-24">
        <div className="heading -pt-10 flex flex-col items-center">
          <h1 className="text-[5rem] md:text-[12rem] lg:text-[18rem]">About</h1>
          <img
            src="/profile.JPEG"
            alt=""
            className="relative -left-16 -top-4 w-72 rounded-lg md:-top-16 md:w-80 lg:-left-32 lg:-top-24 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div
      id="services-section"
      className="bg-primary text-secondary -mx-5 lg:-mx-8"
    >
      <div className="fhd:pt-80 container px-5 pb-20 pt-32 lg:pb-32 lg:pt-56">
        <div className="flex gap-14 max-xl:flex-col xl:gap-96">
          <div className="">
            <div className="services mt-0">
              <h4>Art</h4>
              <h4>Direction</h4>
              <h4>Branding</h4>
              <h4>UX / UI</h4>
              <h4>Bespoke</h4>
              <h4>Visuals</h4>
            </div>
          </div>

          <div className="flex flex-col items-start max-xl:gap-28 xl:justify-start xl:gap-10">
            <p className="fhd:text-xl text-base md:text-xl lg:text-3xl lg:leading-snug">
              I design and develop websites with a deep understanding of brand
              identity, blending technical expertise with a keen eye for detail.
              My skills allow me to create seamless digital experiences, from
              UI/UX design to custom websites. I excel when diving into the
              intricacies of a brands story, ensuring that every element of the
              website reflects and communicate the essence of the brand.
            </p>
            <div className="pl-0 xl:w-full xl:text-right">
              <button className="fhd:text-lg xs:text-base text-sm font-[400] uppercase tracking-wider md:text-lg lg:max-xl:text-2xl">
                <a href={resumeURL} download>
                  <span>[</span>
                  <span className="pl-2">Résumé </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-download fa-xs px-2"></i>
                  </span>
                  <span>]</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div id="experience-section" className="text-container container">
      {/* grid cols 12 */}
      <div className="flex flex-col gap-10 pt-0">
        {/* col 8 */}
        <div className="flex h-full xl:max-w-5xl">
          <h5>
            I’m Umar, an undergraduate studying Computer Sciences <i>+</i> over
            three years of experience in crafting websites that blend simplicity
            with uniqueness.
          </h5>
        </div>
        {/* col 4 */}
        <div className="flex justify-end pr-0 pt-1">
          <p className="dim-text">
            *Experience & <br /> Education
          </p>
        </div>
      </div>
    </div>
  );
}
