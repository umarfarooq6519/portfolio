export default function Expertise() {
  const fancyBox =
    "border-2 bg-gray-50 border-gray-400 rounded-3xl flex flex-col gap-1 items-center px-8 py-6";

  const expertiseItems = [
    {
      id: 1,
      title: "Frontend",
      skills: [
        {
          id: 1,
          name: "HTML5",
          iconClass: "fa-brands fa-html5 fa-2xl",
          tooltipId: "tooltip-html",
          text: "HTML5",
        },
        {
          id: 2,
          name: "CSS3",
          iconClass: "fa-brands fa-css3-alt fa-2xl",
          tooltipId: "tooltip-css",
          text: "CSS3",
        },
        {
          id: 3,
          name: "Bootstrap",
          iconClass: "fa-brands fa-bootstrap fa-2xl",
          tooltipId: "tooltip-bootstrap",
          text: "Bootstrap",
        },
        {
          id: 4,
          name: "React",
          iconClass: "fa-brands fa-react fa-2xl",
          tooltipId: "tooltip-react",
          text: "React",
        },
      ],
    },
    {
      id: 2,
      title: "Backend",
      skills: [
        {
          id: 5,
          name: "JavaScript",
          iconClass: "fa-brands fa-square-js fa-2xl",
          tooltipId: "tooltip-js",
          text: "JavaScript",
        },
        {
          id: 6,
          name: "Node.js",
          iconClass: "fa-brands fa-node-js fa-2xl",
          tooltipId: "tooltip-node",
          text: "Node.js",
        },
        {
          id: 7,
          name: "MySQL",
          iconClass: "fa-solid fa-database fa-2xl",
          tooltipId: "tooltip-sql",
          text: "MySQL",
        },
        {
          id: 8,
          name: "Git/Github",
          iconClass: "fa-brands fa-git-alt fa-2xl",
          tooltipId: "tooltip-git",
          text: "Git/Github",
        },
      ],
    },
  ];

  return (
    <section className="section-expertise flex flex-col gap-8 md:gap-10 xl:gap-14 px-4 lg:px-10">
      <div className="expertise-headings">
        <h4 className="text-base faded poppins">Explore my</h4>
        <h3 className="text-3xl md:text-4xl poppins font-medium">Expertise</h3>
      </div>
      <div className="expertise flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center">
        {expertiseItems.map((expertise) => (
          <div
            key={expertise.id}
            className="flex flex-col xl:flex-row gap-7 md:gap-12 xl:gap-16 px-20 items-center justify-center text-2xl md:text-3xl"
          >
            <h3 className="text-lg md:text-xl faded poppins">
              {expertise.title}
            </h3>
            <div
              className={`${expertise.title.toLowerCase()}-expertise flex gap-8 md:gap-12`}
            >
              {expertise.skills.map((skill) => (
                <button
                  key={skill.id}
                  data-tooltip-target={skill.tooltipId}
                  className="pt-1"
                  type="button"
                >
                  <i className={skill.iconClass}></i>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="expertise-2 pt-8 flex flex-col lg:flex-row gap-3 justify-center items-center xl:gap-20">
        <div className={`${fancyBox} max-w-sm`}>
          <h4 className="poppins font-medium text-xl">
            <i className="fa-solid fa-wand-magic-sparkles mr-1"></i>
            Responsive Design
          </h4>
          <p className="text-base text-justify">
            I create web applications that maintain their polished appearance
            across all devices, ensuring a seamless user experience regardless
            of the platform.
          </p>
        </div>
        <div className={`${fancyBox} max-w-sm`}>
          <h4 className="poppins font-medium text-xl">
            <i className="fa-solid fa-magnifying-glass-chart mr-1"></i>
            SEO
          </h4>
          <p className="text-base text-justify">
            I build lightning-fast websites along with search engine optimized
            content using the best practices to deliver impactful results for
            your business.
          </p>
        </div>
        <div className={`${fancyBox} max-w-sm`}>
          <h4 className="poppins font-medium text-xl">
            <i className="fa-solid fa-comments mr-1"></i> Communication
          </h4>
          <p className="text-base text-justify">
            I will make sure that I have effective communication with my client,
            ensuring clear understanding of project requirements and objectives.
          </p>
        </div>
      </div>
      <div className="tooltips poppins">
        {expertiseItems.flatMap((expertise) =>
          expertise.skills.map((skill) => (
            <div
              key={skill.id}
              id={skill.tooltipId}
              role="tooltip"
              className="absolute z-10 invisible inline-block px-4 py-2 text-sm font-medium text-white transition-opacity duration-150 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              {skill.text}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
