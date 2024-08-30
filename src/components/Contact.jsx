export default function Contact() {
  return (
    // Home > Contact Section
    <section id="contact" className="">
      <div className="container grid grid-cols-12 px-32 pb-32 pt-20">
        {/* contact > content */}
        <div className="content col-span-6">
          <h3 className="">Contact</h3>
          <h5 className="mt-24">
            Let's discuss your ideas, <br /> design and inspiration.
          </h5>
          <button className="mt-20 font-[450] uppercase">
            <span>[</span>
            <span className="pl-2">E-mail</span>
            <span>
              <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
            </span>
            <span>]</span>
          </button>
        </div>
        {/* contact > wrapper */}
        <div className="wrapper col-span-6 flex items-center justify-center">
          <div className="dim-text pl-28">
            <i className="fa-solid fa-circle fa-2xs fa-beat-fade pr-3 text-lime-400 opacity-100"></i>
            Available for work!
          </div>
        </div>
      </div>
    </section>
  );
}
