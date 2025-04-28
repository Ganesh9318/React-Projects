import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import ThemeSwitchBtn from "../ThemeSwitcher/ThemeSwitchBtn";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">GANESH KUMAR</div>

      <nav className="nav-links">
        <ThemeSwitchBtn />
        <ul>
          <li>
            <NavLink
              to="/Home"
              style={({ isActive }) =>
                isActive ? { color: "orangered" } : { color: "black" }
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              style={({ isActive }) =>
                isActive ? { color: "orangered" } : { color: "black" }
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              style={({ isActive }) =>
                isActive ? { color: "orangered" } : { color: "black" }
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              style={({ isActive }) =>
                isActive ? { color: "orangered" } : { color: "black" }
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
