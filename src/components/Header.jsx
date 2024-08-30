import { Link } from "react-router-dom";
import Button from "./elements/Button";

export default function Header() {
  return (
    <header className="">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <b>Umar</b> farooq
            </Link>
          </li>
          <li>
            <Link to="/About">about</Link>
          </li>
          <li>
            <a href="./">contact</a>
          </li>
          <li>
            <Button
              text="Résumé"
              icon={
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs px-2"></i>
              }
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
