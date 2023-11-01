import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";

import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="logo"></img>
      <div className="navcontent">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/About"}
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
