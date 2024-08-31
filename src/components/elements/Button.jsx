import { Link } from "react-router-dom";

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
      <Link to={link}>
        <span>[</span>
        <span className="pl-2">{text}</span>
        <span>{icon}</span>
        <span>]</span>
      </Link>
    </button>
  );
}
