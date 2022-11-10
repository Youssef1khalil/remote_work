import "./Navigation.css";
import FeatureMenu from "../FeatureMenu/FeatureMenu";
import CompanyMenu from "../CompanyMenu/CompanyMenu";
import arrowDown from "../../images/icon-arrow-down.svg";
import arrowUp from "../../images/icon-arrow-up.svg";

import { useState } from "react";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState({
    clickedFeature: false,
    clickedCompany: false,
  });
  function handleClick(event) {
    if (event.target.parentNode.classList.contains("feature-list")) {
      setIsClicked((prevIsClicked) => {
        return {
          ...prevIsClicked,
          clickedFeature: !prevIsClicked.clickedFeature,
        };
      });
    } else if (event.target.parentNode.classList.contains("company-list")) {
      setIsClicked((prevIsClicked) => {
        return {
          ...prevIsClicked,
          clickedCompany: !prevIsClicked.clickedCompany,
        };
      });
    }
  }
  return (
    <ul className="nav-icons">
      <li className="contain-menu feature-list" onClick={handleClick}>
        <a href="#features">
          Features
          <img
            src={isClicked.clickedFeature ? arrowUp : arrowDown}
            alt=""
            className="dropDown-icon"
          />
        </a>
        <FeatureMenu class={isClicked.clickedFeature ? "active-menu" : ""} />
      </li>
      <li className="contain-menu company-list" onClick={handleClick}>
        <a href="#company">
          Company
          <img
            src={isClicked.clickedCompany ? arrowUp : arrowDown}
            alt=""
            className="dropDown-icon"
          />
        </a>
        <CompanyMenu class={isClicked.clickedCompany ? "active-menu" : ""} />
      </li>
      <li>
        <a href="#career">Careers</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  );
};

export default Navigation;
