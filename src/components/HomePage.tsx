function HomePage() {
  return (
    <section className="sectionHome h-screen">
      <div className="container leading-relaxed md:leading-loose flex flex-col h-full py-3 md:py-6 w-full flex justify-between items-center">
        <Header></Header>
        <div className="home-mid w-5/6 md:w-3/6">
          <img
            className="inline-block w-28 md:w-36 mt-4 sm:mt-0 rounded-full ring-1 ring-[#132043]"
            src="src\assets\IMG_2497.jpeg"
            alt="portrait"
          />
          <h1 className="text-4xl poppins md:text-6xl mt-2 font-medium">
            Umar Farooq
          </h1>
          <h3 className="text-xl md:text-2xl poppins mt-1">
            Web Developer | Front End
          </h3>
          <ul className="flex gap-6 text-base font-light w-full mt-2 md:mt-3 justify-center">
            <li>
              <i className="fa-solid fa-location-dot mr-1"></i>
              <span className="faded">Pakistan</span>
            </li>
            <li>
              <i className="fa-regular fa-hourglass-half mr-1"></i>
              <span className="faded">Available Now</span>
            </li>
          </ul>
        </div>
        <iframe
          className="w-[12vh] lg:w-[16vh] opacity-90"
          src="https://lottie.host/embed/54c7c6a6-bfe0-47ae-8cca-c7081a16a8d6/UAYyoBila5.lottie"
        ></iframe>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="header flex flex-col gap-0.5 md:flex-row justify-between items-center w-full px-4 md:px-20 lg:px-24 md:pt-3">
      <div className="heading text-xl md:text-2xl font-medium poppins">
        Portfolio.
      </div>
      <ul className="menu-items text-base tracking-wide flex gap-2 sm:gap-6">
        <li>About</li>/<li>Projects</li>/<li>Contact</li>
      </ul>
    </div>
  );
}

export default HomePage;
