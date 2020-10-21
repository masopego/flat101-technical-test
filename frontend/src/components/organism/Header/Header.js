import React from "react";
import "./_header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="logo_container">
          <li>FRUIT.</li>
        </ul>
        <ul className="menu">
          <li>
            <Link to="/">Create new fruit.</Link>
          </li>
          <li>
            <Link to="/list-products">List all fruits.</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
