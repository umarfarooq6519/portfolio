import { Link } from "react-router-dom";
const arrow_up_right = "/arrow-up-right-dark.svg";

/* eslint-disable react/prop-types */
export default function Button({ text, icon, link }) {
  const handleScrollToTop = () => {
    // Check if the link contains '/'
    if (link.startsWith("/")) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      className="text-sm font-[450] uppercase xs:max-md:text-base md:max-lg:text-lg lg:max-xl:text-2xl fhd:text-lg"
      onClick={handleScrollToTop}
    >
      <Link to={link} className="flex">
        [
        <span className="flex gap-1 px-2">
          <span>{text}</span>
          <img src={arrow_up_right} className="w-3.5" alt="" />
        </span>
        ]
      </Link>
    </button>
  );
}
