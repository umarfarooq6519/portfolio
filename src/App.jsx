export default function App() {
  return (
    <section id="App" className="bg-secondary font-body text-primary text-base">
      {/* home */}
      <section id="Home">
        <div className="container px-6 py-4">
          {/* home > header */}
          <header>
            <nav>
              <ul className="flex items-center justify-between text-sm font-[450] uppercase">
                <li>
                  <span className="font-display font-bold">Umar</span> farooq
                </li>
                <li>about</li>
                <li>contact </li>
                <li>
                  <button className="flex items-center gap-2 uppercase">
                    <span>[ Résumé</span>
                    <span>
                      <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>{" "}
                      ]
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          </header>

          {/* home > content col-12 */}
          <div className="main grid grid-cols-12 py-20 text-left">
            {/* content > col span 1 */}
            <div className="wrapper col-span-1 mb-3 flex items-end">
              © 2024
            </div>
            {/* content > col span 9 */}
            <div className="content col-span-9 uppercase">
              <h3>CREATIVE</h3>
              <h1>WEBSITE</h1>
              <h1>DEVELOPER</h1>
            </div>
            {/* content > col span 2 */}
            <div className="wrapper col-span-2 mb-3 flex items-end">
              <p>
                For brands, spaces, online platforms & digital storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* intro */}
      <section id="intro" className="">
        {/* container > 12 cols */}
        <div className="container grid grid-cols-12 px-32 py-16">
          {/* content > span 8 */}
          <div className="content col-span-8 flex flex-col items-start">
            <h4 className="text-[2.6rem] font-[450] leading-snug tracking-wide">
              I'm a web *craftsman with a knack for coding and design. From
              concept to deployment, I build engaging websites, streamline user
              interactions, and ensure every detail is pixel-perfect. Let's make
              your digital footprint stand out.
            </h4>
            <button className="mt-20 flex items-center gap-2">
              <span>[ ABOUT</span>
              <span>
                <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i> ]
              </span>
            </button>
          </div>
          {/* wrapper span 4 */}
          <div className="wrapper col-span-4 flex justify-center p-4">
            <div className="dim-text">
              *Born, raised and
              <br />
              <span className="">based in Pakistan</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
