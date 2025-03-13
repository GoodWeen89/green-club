import "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <header className="header">
        <a className="logo" href="/">
          Green<span>Club</span>
        </a>
        <div className="header_search">
          <input className="search" placeholder="Поиск" type="text" />
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faSearch}
            className="search-icon"
          />
        </div>
        <menu>
          <ul className="header_menu">
            <li>
              <a className="header__menu_link" href="#">
                Главная
              </a>
            </li>
            <li>
              <a className="header__menu_link" href="#">
                О фильмах
              </a>
            </li>
          </ul>
        </menu>
      </header>
    </>
  );
}
