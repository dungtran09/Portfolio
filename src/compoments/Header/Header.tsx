import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

const Header = () => {
  const [isClose, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isClose);
  };

  const closeSideBar = () => {
    setActive(true);
  };

  return (
    <header className="header">
      <div className="header__logo-box">
        <Link to={"/"} onClick={closeSideBar}>
          <div className="header__logo-symbol">V</div>
          <div className="header__logo-text">
            Victor <span>Onwuzor</span>
          </div>
        </Link>
      </div>

      <div className="header__navigation">
        <FontAwesomeIcon
          className="header__navigation-icon"
          icon={faBars}
          size="3x"
          onClick={toggleClass}
        />

        {/* Mobile side nav */}
        <nav
          className={`side__nav animate ${isClose ? "mobile-menu-hide" : ""}`}
        >
          <ul className="side__nav-list">
            <li className="side__nav-item">
              <NavLink to="/" className="side__nav-link" onClick={closeSideBar}>
                About Me
              </NavLink>
            </li>
            <li className="side__nav-item">
              <NavLink
                to="/resume"
                className="side__nav-link"
                onClick={closeSideBar}
              >
                Resume
              </NavLink>
            </li>
            <li className="side__nav-item">
              <NavLink
                to={"/blog"}
                className="side__nav-link"
                onClick={closeSideBar}
              >
                Blog
              </NavLink>
            </li>
            <li className="side__nav-item">
              <NavLink
                to={"/contact"}
                className="side__nav-link"
                onClick={closeSideBar}
              >
                Contact
              </NavLink>
            </li>
            <li className="side__nav-item">
              <NavLink
                to={"/projects"}
                className="side__nav-link"
                onClick={closeSideBar}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="header__navigation-nav">
          <ul className="header__navigation-list">
            <li className="header__navigation-item">
              <NavLink to="/" className="header__navigation-link">
                About Me
              </NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to="/resume" className="header__navigation-link">
                Resume
              </NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={"/blog"} className="header__navigation-link">
                Blog
              </NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={"/contact"} className="header__navigation-link">
                Contact
              </NavLink>
            </li>
            <li className="header__navigation-item">
              <NavLink to={"/projects"} className="header__navigation-link">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
