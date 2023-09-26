import React from "react";
import icon from "../../../assets/images/Logo.png";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div>
        <img src={icon} alt="" />
        <h1>Tasty</h1>
      </div>
    </header>
  );
}

export default Header;
