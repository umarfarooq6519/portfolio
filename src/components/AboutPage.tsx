export default function AboutPage() {
  const fancyBox =
    "bg-neutral-content rounded-3xl flex flex-col justify-center items-center px-10 py-8 lg:px-12 lg:py-10";

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
      text: "/",
    },
    {
      id: 3,
      icon: "fa-brands fa-linkedin fa-xl mr-2",
      href: "https://www.linkedin.com/in/umar-farooq-325811255/",
      text: "Linkedin",
      slash: "/",
    },
    {
      id: 4,
      text: "/",
    },
    {
      id: 5,
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
    <section className="section-About flex flex-col gap-8 md:gap-16">
      <div className="about-headings">
        <h4 className="text-base faded poppins">Get to know</h4>
        <h3 className="text-3xl md:text-4xl poppins font-medium">About Me</h3>
      </div>

      <div className="about-container flex flex-col px-4 md:px-10 md:flex-row justify-center gap-8 lg:gap-20">
        <div className="about-left flex justify-center flex-col gap-1 md:gap-4">
          <p className="max-w-xl text-justify  pb-6 md:pb-5 leading-relaxed">
            Hey! I'm Umar, a Web Developer with over 2+ years of hands-on
            experience in crafting dynamic and user-focused websites, bringing
            ideas to life in the browser.
            <br />
            <br />
            What sets me apart from others is the dedicated concentration on the
            websites purpose. I prioritize understanding the intended use of the
            website and how the user will interact with the interface.I maintain
            ongoing communication with my clients to ensure a clear
            understanding of their requirements.
          </p>
          <ul className="gap-3 sm:gap-6 pt-8 md:pt-10 tracking-wide text-base flex border-t justify-center">
            <LinkList />
          </ul>
        </div>
        <ul className="skills flex flex-col mt-10 md:mt-0 justify-between gap-3 lg:gap-5 text-base flex">
          <li className={fancyBox}>
            <i className="fa-solid fa-medal fa-xl mb-4"></i>
            <b className="font-medium text-lg poppins pb-0.5">Experience</b>
            <p className="">2+ years</p>
            <p className="">Frontend Development</p>
          </li>

          <li className={fancyBox}>
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
