import Contact from "./Contact";
const resumeURL = "/resume.pdf";

export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="content flex justify-center pb-32">
            <div className="heading flex flex-col items-center">
              <img
                src="/profile.JPEG"
                alt=""
                className="relative left-32 top-32 z-10 w-80 rounded-lg"
              />
              <h1 className="text-[20rem]">About</h1>
            </div>
          </div>
          <div className="wrapper -m-5">
            <div className="bg-primary text-secondary flex items-center justify-center px-10 pt-80">
              <div className="grid grid-cols-12">
                <div className="col-span-8 -mb-52 flex flex-col justify-end">
                  <span className="pb-20 pl-2">
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
                  <div className="services">
                    <h4>Custom Websites</h4>
                    <h4>Website Redesign</h4>
                    <h4>Design Conversion</h4>
                    <h4 className="text-primary">Animated Visuals</h4>
                    <h4 className="text-primary">Bespoke Website</h4>
                  </div>
                </div>
                <div className="col-span-4 flex items-center pb-80">
                  <p className="text-base">
                    I design and develop websites with a deep understanding of
                    brand identity, blending technical expertise with a keen eye
                    for detail. My skills allow me to create seamless digital
                    experiences, from UI/UX design to custom websites. I excel
                    when diving into the intricacies of a brands story, ensuring
                    that every element of the website reflects and communicate
                    the essence of the brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-32 grid grid-cols-12 gap-28 border-b border-gray-300 pb-[16em] pt-[26em]">
              <div className="col-span-8 flex h-full">
                <h5>
                  I’m Umar, an undergraduate studying Computer Sciences, based
                  in Pakistan with over three years of experience in crafting
                  websites that blend simplicity with distinctiveness.
                </h5>
              </div>
              <div className="col-span-4 flex h-full pt-2">
                <p className="dim-text max-w-56">*Experience & Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
