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
          <button
            data-tooltip-target="tooltip-html"
            className="pt-1"
            type="button"
          >
            <i className="fa-brands fa-html5 fa-2xl"></i>
          </button>
          <button
            data-tooltip-target="tooltip-css"
            className="pt-1"
            type="button"
          >
            <i className="fa-brands fa-css3-alt fa-2xl"></i>
          </button>
          <button
            data-tooltip-target="tooltip-bootstrap"
            className="pt-1"
            type="button"
          >
            <i className="fa-brands fa-bootstrap fa-2xl"></i>
          </button>
          <button
            data-tooltip-target="tooltip-react"
            className="pt-1"
            type="button"
          >
            <i className="fa-brands fa-react fa-2xl"></i>
          </button>
        </div>

        <h3 className="text-lg faded md:text-xl poppins mt-4 lg:mt-0">
          Backend
        </h3>
        <div className="back-end-expertise flex gap-8 md:gap-12">
          <button
            data-tooltip-target="tooltip-js"
            className="pt-1"
            type="button"
          >
            <i className="fa-brands fa-square-js fa-2xl"></i>
          </button>
          <button
            data-tooltip-target="tooltip-node"
            className="pt-1.5"
            type="button"
          >
            <i className="fa-brands fa-node-js fa-2xl"></i>
          </button>
          <button
            data-tooltip-target="tooltip-sql"
            className="pt-1.5"
            type="button"
          >
            <i className="fa-solid fa-database fa-2xl"></i>
          </button>
          <button
            data-tooltip-target="tooltip-git"
            className="pt-1"
            type="button"
          >
            <i className="fa-brands fa-git-alt fa-2xl"></i>
          </button>
        </div>
      </div>

      <div className="tooltips poppins">
        <div
          id="tooltip-html"
          role="tooltip"
          className="absolute z-10 invisible  inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          HTML5
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div
          id="tooltip-css"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          CSS3
        </div>
        <div
          id="tooltip-bootstrap"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Bootstrap
        </div>
        <div
          id="tooltip-react"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          React
        </div>
        <div
          id="tooltip-js"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          JavaScript
        </div>
        <div
          id="tooltip-node"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Node.js
        </div>
        <div
          id="tooltip-sql"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          MySQL
        </div>
        <div
          id="tooltip-git"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Git/Github
        </div>
      </div>
    </section>
  );
}
