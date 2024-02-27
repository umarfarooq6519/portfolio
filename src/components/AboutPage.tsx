export default function AboutPage() {
  return (
    <section className="sectionAbout">
      <div className="container leading-relaxed px-2 md:px-10 flex flex-col lg:flex-row justify-center gap-3 lg:gap-10 w-full h-full">
        <div className="flex flex-col">
          <div className="border shadow-lg p-6 lg:px-20 lg:py-10 rounded-3xl justify-center items-center flex flex-col">
            <h3 className="text-2xl md:text-3xl poppins font-medium">
              About Me
            </h3>
            <p className="max-w-2xl pt-3 text-justify ">
              Hello there! I'm Umar, a frontend web developer based in Pakistan,
              currently studying Bachelor of Computer Sciences at UMT. With over
              2 years of experience in the field, I've been transforming ideas
              into captivating digital experiences right in the browser. <br />
              <br />
              My journey into web development began with a deep-seated desire to
              create, and since then, I've been crafting immersive and
              user-friendly websites.
            </p>
            <ul className="gap-2 sm:gap-6 mt-6 md:mt-10 tracking-wider text-base justify-center items-center flex">
              <li>
                <a href="https://github.com/umarfarooq6519" target="_blank">
                  <i className="fa-brands fa-github fa-xl"></i> Github
                </a>
              </li>
              /
              <li>
                <a
                  href="https://www.linkedin.com/in/umar-farooq-325811255/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin fa-xl"></i> Linkedin
                </a>
              </li>
              /
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~018e9328fc604635b6"
                  target="_blank"
                >
                  <i className="fa-brands fa-upwork fa-xl"></i> Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="skills flex flex-col justify-between gap-3 lg:gap-5 text-base flex">
          <li className="border shadow-lg rounded-3xl flex flex-col justify-center items-center px-10 py-8 md:px-14 md:py-12">
            <i className="fa-solid fa-medal fa-xl mb-4"></i>
            <b className="font-medium text-lg poppins pb-0.5">Experience</b>
            <p className="">2+ years</p>
            <p className="">Frontend Development</p>
          </li>

          <li className="border shadow-lg rounded-3xl flex flex-col justify-center items-center px-10 py-8 md:px-14 md:py-12">
            <i className="fa-solid fa-user-graduate fa-xl mb-4"></i>
            <b className="font-medium text-lg poppins pb-0.5">Education</b>
            <p>UMT (2021-2025)</p>
            <p>Bachelor of Computer Sciences</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
