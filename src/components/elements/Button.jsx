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
      className="fhd:text-xl text-base font-[450] uppercase"
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
