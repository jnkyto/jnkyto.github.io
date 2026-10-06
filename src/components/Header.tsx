import "./Header.css";
import React from "react";
import LanguageSwitch from "./LanguageSwitch";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header-container">
    <header className="header">
      <div className="go-home-container">
        <Link to="/" className="go-home">
          kytonie.me
        </Link>
      </div>
      <LanguageSwitch />
    </header>
  </div>
);

export default Header;
