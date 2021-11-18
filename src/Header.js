import './Header.css';
import React from 'react';
import LanguageSwitch from './LanguageSwitch';

const Header = () => (
    <div className="header-container">
        <header className="header">
            <h1 id="home"><a href="https://kytonie.me" rel="noopener noreferrer">kytonie.me</a><LanguageSwitch /></h1>
        </header>
    </div>
);

export default Header;
