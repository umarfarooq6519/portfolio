import portrait from "../../Public/IMG_2497.jpeg";
import resume from "../../Public/Resume.pdf";

function HomePage() {
  // const navBar = ["About", "/", "Projects", "/", "Contact"];
  const scrollGif =
    "https://lottie.host/embed/54c7c6a6-bfe0-47ae-8cca-c7081a16a8d6/UAYyoBila5.lottie";

  function MenuBar() {
    return (
      <div className="header flex justify-between items-center w-full px-6 pt-2 md:px-20 lg:px-24 md:pt-3">
        <div className="heading text-xl md:text-2xl font-medium poppins">
          Portfolio.
        </div>
        <span className="bg-neutral-content poppins text-sm rounded-xl py-2 px-6">
          <a
            href={resume}
            download="resume"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#132043bf]"
          >
            My Résumé
          </a>
          <i className="fa-solid fa-up-right-from-square ml-2"></i>
        </span>
        {/* <ul className="menu-items text-base tracking-wide flex gap-2 sm:gap-6">
          {navBar.map((item) => (
            <li>{item}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  return (
    <section className="sectionHome h-screen w-full">
      <div className=" leading-relaxed md:leading-loose flex flex-col h-full py-3 md:py-6 w-full flex justify-between items-center ">
        <MenuBar></MenuBar>
        <div className="home-mid w-5/6 md:w-3/6 flex flex-col items-center">
          <img
            className="inline-block w-28 md:w-36 mt-4 sm:mt-0 rounded-full ring-1 ring-[#132043]"
            src={portrait}
            alt="portrait"
          />
          <h1 className="text-4xl poppins md:text-6xl mt-2 font-semibold">
            Umar Farooq
          </h1>
          <h3 className="text-xl md:text-2xl poppins mt-1">
            Web Developer | Front End
          </h3>
          <ul className="flex gap-6 font-light text-base w-full mt-2 md:mt-3 justify-center">
            <li>
              <i className="fa-solid fa-location-dot mr-1"></i>
              <span>Pakistan</span>
            </li>
            <li>
              <i className="fa-regular fa-hourglass-half mr-1"></i>
              <span>Available Now</span>
            </li>
          </ul>
        </div>
        <iframe
          className="w-[13vh] lg:w-[16vh] opacity-90"
          src={scrollGif}
        ></iframe>
      </div>
    </section>
  );
}

export default HomePage;
