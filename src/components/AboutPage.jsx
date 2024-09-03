import Contact from "./Contact";
import ButtonHref from "./elements/ButtonHref";
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
      <div className="flex justify-center max-xl:pb-24 max-xl:pt-44 xl:pt-20">
        <div className="heading -pt-10 flex flex-col items-center">
          <h1 className="text-[5rem] xs:max-md:text-[6rem] md:text-[12rem] lg:text-[16rem] 2xl:text-[18rem]">
            About
          </h1>
          <img
            src="/profile.JPEG"
            alt=""
            className="relative -left-24 -top-6 w-56 rounded-lg xs:max-sm:-left-28 md:-top-16 md:w-80 lg:-left-32 lg:-top-24 lg:max-xl:w-96 fhd:w-[23em]"
          />
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div id="services-section" className="bg-primary text-secondary">
      <div className="container px-5 pb-20 pt-32 lg:pb-32 lg:pt-56 2xl:px-44 fhd:pt-80">
        <div className="flex gap-14 max-xl:flex-col xl:gap-56">
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

          <div className="flex flex-col items-start max-xl:gap-28 xl:justify-between xl:gap-10">
            <p className="text-base lg:leading-snug lg:max-xl:text-xl fhd:text-xl">
              I design and develop websites with a deep understanding of brand
              identity, blending technical expertise with a keen eye for detail.
              My skills allow me to create seamless digital experiences, from
              UI/UX design to custom websites. I excel when diving into the
              intricacies of a brands story, ensuring that every element of the
              website reflects and communicate the essence of the brand.
            </p>
            <div className="pl-0 xl:w-full xl:text-left">
              <ButtonHref text="Résumé" href={resumeURL} theme="dark" />
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
      <div className="flex gap-10 pt-0 max-xl:flex-col">
        {/* col 8 */}
        <div className="flex h-full xl:max-fhd:max-w-3xl fhd:max-w-5xl">
          <h5>
            I’m Umar, an undergraduate studying Computer Sciences <i>+</i> over
            three years of experience in crafting websites that blend simplicity
            with uniqueness.
          </h5>
        </div>
        {/* col 4 */}
        <div className="flex justify-end pr-0 pt-1 xl:w-full">
          <p className="dim-text">
            *Experience & <br /> Education
          </p>
        </div>
      </div>
    </div>
  );
}
