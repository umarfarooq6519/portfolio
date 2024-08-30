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
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
