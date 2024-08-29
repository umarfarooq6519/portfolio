export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="container grid grid-cols-12 p-32">
        <div className="content col-span-6">
          <h3 className="">Contact</h3>
          <h4 className="mt-24">
            Lets talk about ideas, <br /> design & inspiration.
          </h4>
          <button className="mt-20 font-[450] uppercase">
            <span>[</span>
            <span className="pl-2">E-mail</span>
            <span>
              <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
            </span>
            <span>]</span>
          </button>
        </div>
        <div className="wrapper col-span-6 flex items-center justify-center">
          <div className="dim-text">
            <i className="fa-solid fa-circle fa-2xs pr-3 text-lime-400 opacity-100"></i>
            Available for work!
          </div>
        </div>
      </div>
    </section>
  );
}
