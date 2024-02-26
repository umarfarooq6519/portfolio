export default function AboutPage() {
  return (
    <section className="sectionAbout">
      <div className="container px-2 md:px-10 flex flex-col lg:flex-row justify-around gap-2 w-full h-full">
        <div className="flex flex-col gap-5">
          <div className="border bg-[#fffa] shadow-lg p-6 lg:px-20 lg:py-10 rounded-3xl justify-center items-center flex flex-col">
            <h3 className="text-2xl md:text-3xl font-medium font-[poppins]">
              About Me
            </h3>
            <p className="para max-w-2xl mt-2 font-light text-justify">
              Hello there! I'm Umar, a frontend web developer based in Pakistan,
              currently studying Bachelor of Computer Sciences at UMT. With over
              2 years of experience in the field, I've been transforming ideas
              into captivating digital experiences right in the browser. <br />
              <br />
              My journey into web development began with a deep-seated desire to
              create, and since then, I've been crafting immersive and
              user-friendly websites.
            </p>
            <ul className="gap-2 sm:gap-6 mt-8 justify-center items-center flex">
              <li>
                <i className="fa-brands fa-github fa-lg"></i> Github
              </li>
              /
              <li>
                {" "}
                <i className="fa-brands fa-linkedin fa-lg"></i> Linkedin
              </li>
              /
              <li>
                <i className="fa-brands fa-upwork fa-lg"></i> Upwork
              </li>
            </ul>
          </div>
        </div>
        <ul className="skills flex flex-col justify-between gap-2 md:gap-5 text-base flex">
          <li className="border bg-[#fffa] shadow-lg rounded-3xl flex flex-col justify-center items-center px-10 py-8 md:px-14 md:py-12">
            <i className="fa-solid fa-medal fa-xl mb-4"></i>
            <b className="font-[poppins] font-medium text-lg">Experience</b>
            <p className="font-light">2+ years</p>
            <p className="font-light">Frontend Development</p>
          </li>

          <li className="border bg-[#fffa] shadow-lg rounded-3xl flex flex-col justify-center items-center px-10 py-8 md:px-14 md:py-12">
            <i className="fa-solid fa-user-graduate fa-xl mb-4"></i>
            <b className="font-[poppins] font-medium text-lg">Education</b>
            <p className="font-light">UMT (Lahore)</p>
            <p className="font-light">Bachelor of Computer Sciences</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
