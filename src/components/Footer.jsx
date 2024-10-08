// const emailURL = "mailto:umar_farooq52@outlook.com";
// const githubURL = "https://github.com/umarfarooq6519/";
// const upworkURL =
//   "https://www.upwork.com/freelancers/~018e9328fc604635b6?mp_source=share";
// const linkedinURL = "https://www.linkedin.com/in/umar-farooq-325811255/";

import socialLinks from "../links";

export default function Footer() {
  return (
    <>
      <div id="footer" className="container">
        {/* grid row 12 */}
        <div className="text-container flex flex-col rounded-md bg-primary !p-0 text-secondary">
          {/* span 10 */}
          <div className="content flex items-center justify-center py-40 lg:py-56 fhd:py-72">
            <div className="uppercase">
              <h3>
                <span className="mr-2 font-light italic">©</span>Umar
              </h3>
              <h3>Farooq</h3>
            </div>
          </div>
          {/* span 2 */}
          <div className="wrapper flex items-center py-4 md:px-14">
            <ul className="flex gap-5 max-lg:flex-col">
              <li>
                <a href={socialLinks.email}>mail@outlook</a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank">
                  linkedin
                </a>
              </li>
              <li>
                <a href={socialLinks.github} target="_blank">
                  github
                </a>
              </li>
              <li>
                <a href={socialLinks.upwork} target="_blank">
                  upwork
                </a>
              </li>
              <li className="max-lg:mt-10">© 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
