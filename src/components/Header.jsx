import { Link } from "react-router-dom";
const resumeURL = "/resume.pdf";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <ul>
          <li>
            <Link to="/">
              <b>Umar</b> farooq
            </Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button className="font-[450] uppercase">
              <a href={resumeURL} download>
                <span>[</span>
                <span className="pl-2">Résumé </span>
                <span>
                  {" "}
                  <i className="fa-solid fa-download fa-xs px-2"></i>
                </span>
                <span>]</span>
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
