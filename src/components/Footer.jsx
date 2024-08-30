import Contact from "./Contact";

export default function Footer() {
  return (
    <>
      <Contact />
      <section id="footer" className="">
        <div className="bg-primary text-secondary container grid grid-rows-12 rounded-md">
          {/* footer content */}
          <div className="content row-span-10 flex items-center justify-center py-40">
            <div className="uppercase">
              <h3>
                <span className="mr-2 font-light italic">©</span>Umar
              </h3>
              <h3>Farooq</h3>
            </div>
          </div>
          {/* footer nav */}
          <div className="wrapper row-span-2 flex items-center px-10">
            <ul>
              <li>© 2024</li>
              <li>
                E-mail
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs pl-2"></i>
              </li>
              <li>github</li>
              <li>upwork</li>
              <li>linkedin</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
