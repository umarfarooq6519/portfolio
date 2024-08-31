const emailURL = "mailto:umar_farooq52@outlook.com";
const githubURL = "https://github.com/umarfarooq6519/";
const upworkURL =
  "https://www.upwork.com/freelancers/~018e9328fc604635b6?mp_source=share";
const linkedinURL = "https://www.linkedin.com/in/umar-farooq-325811255/";

export default function Footer() {
  return (
    <>
      <div id="footer" className="container">
        {/* grid row 12 */}
        <div className="bg-primary text-secondary text-container grid grid-rows-12 rounded-md !p-0">
          {/* span 10 */}
          <div className="content row-span-10 flex items-center justify-center py-40">
            <div className="uppercase">
              <h3>
                <span className="mr-2 font-light italic">©</span>Umar
              </h3>
              <h3>Farooq</h3>
            </div>
          </div>
          {/* span 2 */}
          <div className="wrapper row-span-2 flex items-center px-14">
            <ul>
              <li>© 2024</li>
              <li>
                <a href={emailURL}>
                  E-mail
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xs pl-2"></i>
                </a>
              </li>
              <li>
                <a href={githubURL} target="_blank">
                  github
                </a>
              </li>
              <li>
                <a href={upworkURL} target="_blank">
                  upwork
                </a>
              </li>
              <li>
                <a href={linkedinURL} target="_blank">
                  linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
