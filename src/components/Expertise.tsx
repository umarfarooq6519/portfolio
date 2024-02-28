export default function Expertise() {
  return (
    <section className="section-expertise flex flex-col gap-8 md:gap-10 xl:gap-14">
      <div className="expertise-headings">
        <h4 className="text-base faded poppins">Explore my</h4>
        <h3 className="text-3xl md:text-4xl poppins font-medium">Expertise</h3>
      </div>
      <div className="flex flex-col xl:flex-row gap-7 md:gap-12 xl:gap-16 px-20 items-center justify-center text-2xl md:text-3xl">
        <h3 className="text-lg md:text-xl faded poppins">Frontend</h3>
        <div className="front-end-expertise flex gap-8 md:gap-12">
          <i className="fa-brands fa-html5 fa-2xl"></i>
          <i className="fa-brands fa-css3-alt fa-2xl"></i>
          <i className="fa-brands fa-bootstrap fa-2xl"></i>
          <i className="fa-brands fa-react fa-2xl"></i>
        </div>
        <h3 className="text-lg faded md:text-xl poppins mt-4 lg:mt-0">
          Backend
        </h3>
        <div className="back-end-expertise flex gap-8 md:gap-12">
          <i className="fa-brands fa-node-js fa-2xl"></i>
          <i className="fa-brands fa-square-js fa-2xl"></i>
          <i className="fa-solid fa-database fa-2xl"></i>
          <i className="fa-brands fa-git-alt fa-2xl"></i>
        </div>
      </div>
    </section>
  );
}
