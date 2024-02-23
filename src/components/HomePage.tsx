function HomePage() {
  return (
    <section className="sectionHome leading-relaxed md:leading-loose">
      <div className="flex flex-col spacer layer1 h-[97vh] border-b-2 rounded-b-[4em] md:rounded-b-[8em] w-full flex justify-between py-6 items-center">
        <Header></Header>
        <div className="home-mid w-5/6 md:w-3/6">
          <img
            className="inline-block w-28 md:w-36 mt-4 sm:mt-0 rounded-full ring-1 ring-[#132043]"
            src="src\assets\IMG_2497.jpeg"
            alt="portrait"
          />
          <h1 className="text-4xl md:text-6xl mt-2 font-[poppins] font-semibold">
            Umar Farooq
          </h1>
          <h3 className="text-xl md:text-2xl tracking-[2px] font-[poppins] mt-1">
            Web Developer | Front End
          </h3>
          <ul className="flex gap-6 w-full mt-3 font-light justify-center">
            <li>
              <i className="fa-solid fa-location-dot"></i> Pakistan
            </li>
            <li>
              <i className="fa-regular fa-hourglass-half"></i> Available Now
            </li>
          </ul>
          {/* <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptas aliquid eligendi adipisci numquam placeat impedit, dolorum
            excepturi possimus repellat!
          </p> */}
        </div>
        <iframe
          className="w-[14vh] md:w-[17vh]"
          src="https://lottie.host/embed/54c7c6a6-bfe0-47ae-8cca-c7081a16a8d6/UAYyoBila5.lottie"
        ></iframe>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="header flex flex-col gap-0.5 md:flex-row md:px-20 lg:px-24 justify-between items-center w-full md:pt-3">
      <div className="heading text-2xl font-semibold font-[poppins]">
        Portfolio.
      </div>
      <ul className="menu-items text-base flex gap-2 sm:gap-6">
        <li>About</li>/<li>Projects</li>/<li>Contact</li>
      </ul>
    </div>
  );
}

export default HomePage;
