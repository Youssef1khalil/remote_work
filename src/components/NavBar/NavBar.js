import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./NavBar.css";
import menuIcon from "../../images/icon-menu.svg";
import closeIcon from "../../images/icon-close-menu.svg";

export default function NavBar() {
  const [clickIcon, setClickIcon] = useState(false);

  function handleChange() {
    setClickIcon((prevClick) => !prevClick);
  }
  return (
    <div className="nav-section">
      <div className="logo">
        <h3>snap</h3>
      </div>
      <img
        src={clickIcon ? closeIcon : menuIcon}
        alt=""
        className="menu-icon"
        onClick={handleChange}
      />
      <div className={`side-menu ${clickIcon ? "active" : ""}`}>
        <Navigation />
        <div className="account-data">
          <a href="#login">Login</a>
          <a href="#register" className="register">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
