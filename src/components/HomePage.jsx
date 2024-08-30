import Intro from "./Intro";

const starIcon = "/star.svg";

function HomePage() {
  return (
    <>
      {/* ################# HOME PAGE */}
      <section id="HomePage">
        <div className="container">
          {/* home > content col-12 */}
          <div className="content row-span-10 grid grid-cols-12 pb-28 pt-36 text-left">
            {/* content > col span 1 */}
            <div className="col-span-1 mb-3 flex items-end">© 2024</div>
            {/* content > col span 9 */}
            <div className="col-span-9 uppercase">
              <h2>CREATIVE</h2>
              <h1 className="flex items-center gap-3">
                <img src={starIcon} alt="" className="w-20 rotate-12" /> WEBSITE
              </h1>
              <h1>DEVELOPER</h1>
            </div>
            {/* content > col span 2 */}
            <div className="col-span-2 mb-3 flex items-end">
              <p>
                For brands, spaces, online platforms & digital storytelling.
              </p>
            </div>
          </div>
          {/* home > wrapper */}
          <div className="wrapper bg-primary text-secondary row-span-0 mt-20 flex items-center justify-center rounded-lg py-14">
            <h3 className="font-normal">bespoke development</h3>
          </div>
        </div>
      </section>
      <Intro />
    </>
  );
}

export default HomePage;
