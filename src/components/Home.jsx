export default function Home() {
  return (
    <section id="Home">
      {/* home */}
      <div className="container">
        {/* home > header */}
        <header>
          <nav>
            <ul className="flex items-center justify-between text-sm font-[450] uppercase">
              <li>
                <span className="font-bold">Umar</span> farooq
              </li>
              <li>about</li>
              <li>contact </li>
              <li>
                <button className="font-[450] uppercase">
                  <span>[</span>
                  <span className="pl-2">Résumé</span>
                  <span>
                    <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
                  </span>
                  <span>]</span>
                </button>
              </li>
            </ul>
          </nav>
        </header>

        {/* home > content col-12 */}
        <div className="main grid grid-cols-12 py-32 text-left">
          {/* content > col span 1 */}
          <div className="wrapper col-span-1 mb-3 flex items-end">© 2024</div>
          {/* content > col span 9 */}
          <div className="content col-span-9 uppercase">
            <h2>CREATIVE</h2>
            <h1>WEBSITE</h1>
            <h1>DEVELOPER</h1>
          </div>
          {/* content > col span 2 */}
          <div className="wrapper col-span-2 mb-3 flex items-end">
            <p>For brands, spaces, online platforms & digital storytelling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
