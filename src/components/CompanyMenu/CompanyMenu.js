import React from "react";
import "./CompanyMenu.css";

const CompanyMenu = (props) => {
  return (
    <ul className={`company-menu ${props.class}`}>
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
  );
};

export default CompanyMenu;
