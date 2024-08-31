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

function AboutSection() {
  return (
    <div className="container">
      <div className="flex justify-center pb-44 pt-24">
        <div className="heading -pt-10 flex flex-col items-center">
          <img
            src="/profile.JPEG"
            alt=""
            className="relative left-32 z-10 -mb-32 w-80 rounded-lg"
          />
          <h1 className="text-[20rem]">About</h1>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div id="services-section" className="bg-primary text-secondary -m-5">
      <div className="container px-10 pt-64">
        {/* grid cols 12 */}
        <div className="grid grid-cols-12">
          {/* span 8 */}
          <div className="col-span-8 -mb-48 flex flex-col justify-end">
            <span className="pl-2">
              <button className="font-[450] uppercase">
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
            </span>
            <div className="services mt-12">
              <h4>Custom Websites</h4>
              <h4>Website Redesign</h4>
              <h4>Design Conversion</h4>
              <h4 className="text-primary">Animated Visuals</h4>
              <h4 className="text-primary">Bespoke Website</h4>
            </div>
          </div>
          {/* span 4 */}
          <div className="col-span-4 flex items-start">
            <p className="text-base">
              I design and develop websites with a deep understanding of brand
              identity, blending technical expertise with a keen eye for detail.
              My skills allow me to create seamless digital experiences, from
              UI/UX design to custom websites. I excel when diving into the
              intricacies of a brands story, ensuring that every element of the
              website reflects and communicate the essence of the brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div id="experience-section" className="container">
      {/* grid cols 12 */}
      <div className="mx-32 grid grid-cols-12 pt-96">
        {/* col 8 */}
        <div className="col-span-8 flex h-full">
          <h5>
            I’m Umar, an undergraduate studying Computer Sciences, based in
            Pakistan with over three years of experience in crafting websites
            that blend simplicity with distinctiveness.
          </h5>
        </div>
        {/* col 4 */}
        <div className="col-span-4 flex justify-center pr-0 pt-1">
          <p className="dim-text">
            *Experience & <br /> Education
          </p>
        </div>
      </div>
    </div>
  );
}
