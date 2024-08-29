export default function Intro() {
  return (
    <section id="intro" className="">
      {/* container > 12 cols */}
      <div className="container grid min-h-screen grid-cols-12 px-32 py-20">
        {/* content > span 8 */}
        <div className="content col-span-8 flex flex-col items-start">
          <h4>
            I'm a web *craftsman with a knack for coding and design. From
            concept to deployment, I build engaging websites, streamline user
            interactions, and ensure every detail is pixel-perfect. Let's make
            your digital footprint stand out.
          </h4>
          <button className="mt-20 font-[450] uppercase">
            <span>[</span>
            <span className="pl-2">ABOUT</span>
            <span>
              <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
            </span>
            <span>]</span>
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
  );
}
