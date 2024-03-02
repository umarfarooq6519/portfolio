export default function AboutPage() {
  const Links = [
    //About section links list
    {
      id: 1,
      icon: "fa-brands fa-github fa-xl mr-2",
      href: "https://github.com/umarfarooq6519",
      text: "Github",
    },
    {
      id: 2,
      icon: "fa-brands fa-linkedin fa-xl mr-2",
      href: "https://www.linkedin.com/in/umar-farooq-325811255/",
      text: "Linkedin",
    },
    {
      id: 3,
      icon: "fa-brands fa-upwork fa-xl mr-2",
      href: "https://www.upwork.com/freelancers/~018e9328fc604635b6",
      text: "Upwork",
    },
  ];

  const LinkList = () => {
    //function to print about section links list
    return (
      <>
        {Links.map((link) => (
          <li key={link.id}>
            <i className={link.icon}></i>
            <a href={link.href} target="_blank">
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                {link.text}
              </span>
            </a>
          </li>
        ))}
      </>
    );
  };

  return (
    <section className="section-About flex flex-col gap-4 md:gap-8">
      <div className="about-headings">
        <h4 className="text-base faded poppins">Get to know</h4>
        <h3 className="text-3xl md:text-4xl poppins font-medium">About Me</h3>
      </div>

      <div className="about-container flex flex-col px-4 md:px-10 md:flex-row justify-center gap-10 md:gap-20">
        <div className="about-left flex justify-center flex-col">
          <p className="max-w-xl text-justify  pb-6 md:pb-5 leading-relaxed">
            Hey Peeps! I'm Umar, a frontend web developer based in Pakistan,
            currently studying Bachelor of Computer Sciences at UMT. With over 2
            years of experience in the field, I've been transforming ideas into
            captivating digital experiences right in the browser.
            <br />
            <br /> My journey into web development began with a deep-seated
            desire to create, and since then, I've been crafting immersive and
            user-friendly websites.
          </p>
          <ul className="gap-3 sm:gap-6 pt-6 md:pt-5 tracking-wide text-base flex border-t justify-center md:justify-left">
            <LinkList />
          </ul>
        </div>
        <ul className="skills flex flex-col justify-between gap-3 lg:gap-5 text-base flex">
          <li className="border-2 bg-gray-50 border-gray-400 rounded-[25px] flex flex-col justify-center items-center px-10 py-8 md:px-12 md:py-8">
            <i className="fa-solid fa-medal fa-xl mb-4"></i>
            <b className="font-medium text-lg poppins pb-0.5">Experience</b>
            <p className="">2+ years</p>
            <p className="">Frontend Development</p>
          </li>

          <li className="border-2 bg-gray-50 border-gray-400 rounded-[25px] flex flex-col justify-center items-center px-10 py-8 md:px-12 md:py-8">
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
