import "./Header.css";
import React from "react";
import LanguageSwitch from "./LanguageSwitch";

const Header = () => (
  <div className="header-container">
    <header className="header">
      <h1 id="go-home">
        kytonie.me
      </h1>
      <LanguageSwitch />
    </header>
  </div>
);

export default Header;
