import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/Logo.png" alt="LOGO" height="60px" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isActive ? "active" : ""}`}></div>
        <div className={`line ${isActive ? "active" : ""}`}></div>
        <div className={`line ${isActive ? "active" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isActive ? "active" : ""}`}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">Notifications</NavLink>
        </li>

        <li>
          <NavLink to="/voting">Vote/Feedback</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/initiative">Initiatives</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
