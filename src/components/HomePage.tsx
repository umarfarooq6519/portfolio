function HomePage() {
  return (
    <section className="sectionHome leading-relaxed md:leading-loose">
      <div className="flex flex-col spacer layer1 h-[97vh] border-b-2 rounded-b-[4em] md:rounded-b-[8em] w-full flex justify-between py-6 items-center">
        <Header></Header>
        <div className="home-mid w-5/6 md:w-3/6">
          <img
            className="inline-block w-28 md:w-36 border-4 border-gray-200 w-36 rounded-full ring-2 ring-white"
            src="src\assets\IMG_2497.jpeg"
            alt="portrait"
          />
          <h1 className="text-4xl md:text-6xl font-[poppins] font-semibold">
            Umar Farooq
          </h1>
          <h3 className="text-xl md:text-2xl font-[poppins] mt-1">
            Web Developer | Front End
          </h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptas aliquid eligendi adipisci numquam placeat impedit, dolorum
            excepturi possimus repellat!
          </p>
        </div>
        <iframe
          className="w-[12vh] md:w-[14vh] lg:w-[17vh]"
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
